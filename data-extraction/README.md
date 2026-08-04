# Sephiria Game Data Extraction

Extracts structured game data from Sephiria game files for use as a trusted internal source.

## Architecture

```
Game Files (E:\Sephiria)
    ↓
Extractor (Node.js scripts)
    ↓
JSON Data Layer (output/)
    ↓
Manual / AI Analysis
    ↓
Guide Content (future)
```

## Data Sources

| Source | Type | What It Contains |
|---|---|---|
| `StreamingAssets/Localization/en-US.json` | JSON (6,507 keys) | All game text: weapons, items, skills, bosses, dialogue |
| `Sephiria_Data/*.assets` | Unity bundles | Textures, sprites, models (need AssetStudio) |
| `Managed/Assembly-CSharp.dll` | .NET IL | Game logic, stats, balance data (need decompiler) |

## Output Files

| File | Contents | Entries |
|---|---|---|
| `output/weapons.json` | Weapon names, IDs | 124 |
| `output/items.json` | Artifacts, potions, tablets, equipment (names+descriptions) | 481 |
| `output/enemies.json` | Boss names from dialogue | 13 |
| `output/skills.json` | Skill names | 38 |
| `output/miracles.json` | Miracle names and effects | 29 |
| `output/upgrades.json` | Buff/upgrade names and descriptions | 24 |
| `output/maps.json` | Chapter names | 13 |

## Limitations

- **Stats (damage, HP)** are in compiled code (Assembly-CSharp.dll), not in localization
- **Images** are in Unity `.assets` bundles — need AssetStudio or similar tool
- **Upgrade trees and costs** are in game logic, not text
- **Non-boss enemy names** not yet extracted (need deeper pattern analysis)
- All unknown fields left as `null` — no guessing

## Future Phases

- Decompile `Assembly-CSharp.dll` for stat values
- Extract textures from `.assets` with AssetStudio
- Classify items into sub-categories
- Cross-reference with Steam store descriptions
