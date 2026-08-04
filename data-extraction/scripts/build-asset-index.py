"""
Sephiria Unity Asset Index MVP
===============================
Scans all Unity .assets bundles in the game directory and builds an index of
named assets (Textures, Sprites, etc.) WITHOUT exporting any image data.

Output: data-extraction/assets/asset-index.json
Fields per asset: name, type, category, source bundle, export status.

Categories are assigned purely by naming rules (no AI/visual judgement).
"""

import json
import os
import re
import sys
from collections import Counter

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

GAME_DIR = "E:/Sephiria/Sephiria_Data"
OUT_DIR = "D:/Codex/sephiria-wiki/data-extraction/assets"

# --- Category rules (name-based, ordered: first match wins) ---
BOSS_PATTERNS = [
    r"Boss_",
    r"^Boss",
    r"Boss[A-Z]",
]
WEAPON_KEYWORDS = ["Dagger", "Sword", "Crossbow", "Staff", "Grimoire", "GreatSword", "Greatsword", "SwordShield", "Shield", "Bow", "Spear"]
CHARACTER_KEYWORDS = ["Askard", "BirdDemon", "Larid", "MadArmadillo", "MoleBigBomb", "OinkKing", "Odner", "Sephiroth", "Contractor", "QBoss", "QQBoss", "QQQBoss"]
ICON_PATTERNS = [r"Icon", r"icon_", r"_Icon", r"UI_", r"ui_"]
ITEM_PATTERNS = [r"Item", r"item_", r"Potion", r"Artifact", r"Tablet", r"Relic"]
STAGE_PATTERNS = [r"Stage_", r"Stage", r"Map_", r"map_", r"Tile", r"Tileset"]
EFFECT_PATTERNS = [r"Fx", r"FX", r"Effect", r"eff_", r"VFX", r"Particle"]
ENEMY_PATTERNS = [r"Enemy", r"Mole", r"Rabbit", r"Bird", r"Fanatic", r"Golem"]
PORTRAIT_PATTERNS = [r"Portrait", r"portrait", r"Face", r"Head_", r"Avatar", r"avatar"]

VISUAL_TYPES = {"Texture2D", "Sprite", "SpriteAtlas", "Texture", "RenderTexture"}
SUPPORTED_TYPES = VISUAL_TYPES | {"MonoBehaviour", "TextAsset", "Material", "AudioClip", "Shader"}


def classify(name: str) -> str:
    n = name.strip()
    if not n:
        return "unnamed"
    for p in PORTRAIT_PATTERNS:
        if re.search(p, n):
            return "portrait"
    for p in BOSS_PATTERNS:
        if re.search(p, n):
            return "boss"
    for kw in CHARACTER_KEYWORDS:
        if kw.lower() in n.lower():
            return "character"
    for kw in WEAPON_KEYWORDS:
        if kw.lower() in n.lower():
            return "weapon"
    for p in ICON_PATTERNS:
        if re.search(p, n):
            return "icon"
    for p in ITEM_PATTERNS:
        if re.search(p, n):
            return "item"
    for p in STAGE_PATTERNS:
        if re.search(p, n):
            return "stage"
    for p in EFFECT_PATTERNS:
        if re.search(p, n):
            return "effect"
    for p in ENEMY_PATTERNS:
        if re.search(p, n):
            return "enemy"
    return "other"


def main():
    try:
        import UnityPy
    except ImportError:
        print("ERROR: UnityPy not installed. Run: pip install --only-binary :all: UnityPy")
        sys.exit(1)

    os.makedirs(OUT_DIR, exist_ok=True)
    bundle_files = sorted(
        f for f in os.listdir(GAME_DIR)
        if f.endswith(".assets") or f.endswith(".assets.resS")
    )

    all_assets = []
    bundle_counter = Counter()
    type_counter = Counter()
    category_counter = Counter()
    skipped = 0

    for bundle in bundle_files:
        path = os.path.join(GAME_DIR, bundle)
        size_mb = round(os.path.getsize(path) / 1024 / 1024, 1)
        print(f"[scan] {bundle} ({size_mb} MB) ...")
        try:
            env = UnityPy.load(path)
        except Exception as e:
            print(f"  !! failed to load: {e}")
            continue

        for obj in env.objects:
            if obj.type.name not in SUPPORTED_TYPES:
                continue
            try:
                data = obj.read()
            except Exception:
                skipped += 1
                continue

            name = getattr(data, "m_Name", None) or getattr(data, "name", None) or ""
            if not name and obj.type.name in VISUAL_TYPES:
                # For visuals without m_Name, skip unnamed textures (too noisy)
                skipped += 1
                continue
            if not name:
                name = f"{obj.type.name}_{obj.path_id}"

            entry = {
                "name": str(name),
                "type": obj.type.name,
                "category": classify(str(name)),
                "source": bundle,
                "path_id": obj.path_id,
                "exported": False,
            }
            all_assets.append(entry)
            bundle_counter[bundle] += 1
            type_counter[obj.type.name] += 1
            category_counter[entry["category"]] += 1

    # Deduplicate by (name, type, source)
    seen = set()
    unique = []
    for a in all_assets:
        key = (a["name"], a["type"], a["source"])
        if key not in seen:
            seen.add(key)
            unique.append(a)

    # Sort: priority categories first, then name
    prio = {"boss": 0, "weapon": 1, "portrait": 2, "character": 3, "icon": 4, "item": 5}
    unique.sort(key=lambda a: (prio.get(a["category"], 9), a["name"].lower(), a["source"]))

    index = {
        "meta": {
            "game": "Sephiria",
            "version": "1.0",
            "created": "2026-08-04",
            "method": "UnityPy metadata scan (no image export)",
            "scan_root": GAME_DIR,
            "notes": [
                "Categories assigned by naming rules only; requires manual spot-check before use.",
                "exported=false means the image data has NOT been extracted yet.",
                "Visual asset names may not always equal gameplay names; verify before publishing.",
            ],
        },
        "stats": {
            "bundles_scanned": len(bundle_files),
            "total_named_assets": len(unique),
            "by_bundle": dict(bundle_counter),
            "by_type": dict(type_counter),
            "by_category": dict(category_counter),
            "unnamed_skipped": skipped,
        },
        "assets": unique,
    }

    out_path = os.path.join(OUT_DIR, "asset-index.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(index, f, indent=2, ensure_ascii=False)

    print("\n=== ASSET INDEX SUMMARY ===")
    print(f"Bundles scanned : {len(bundle_files)}")
    print(f"Named assets    : {len(unique)}")
    print(f"Unnamed skipped : {skipped}")
    print("\nBy category:")
    for cat, cnt in category_counter.most_common():
        print(f"  {cat:12s} {cnt}")
    print("\nBy type:")
    for t, cnt in type_counter.most_common():
        print(f"  {t:16s} {cnt}")
    print(f"\nWritten: {out_path}")


if __name__ == "__main__":
    main()
