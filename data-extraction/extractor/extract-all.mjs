// Phase 2: Full extraction from localization + asset scan
import fs from "node:fs";
import path from "node:path";

const enUS = JSON.parse(fs.readFileSync("E:/Sephiria/Sephiria_Data/StreamingAssets/Localization/en-US.json", "utf8"));
const outDir = "D:/Codex/sephiria-wiki/data-extraction/output";

// Helper
function get(name, suffix = "") {
  const keys = Object.keys(enUS);
  const results = {};
  const pattern = new RegExp(`^${name}_(.+?)${suffix ? "_" + suffix : ""}$`);
  for (const key of keys) {
    const m = key.match(pattern);
    if (m) {
      const id = m[1];
      if (!results[id]) results[id] = {};
      results[id][suffix || "value"] = enUS[key];
    }
  }
  return results;
}

// ===== WEAPONS =====
const weaponNameKeys = Object.keys(enUS).filter(k => k.match(/^Weapon_\d+_Name$/));
const weaponFlavorKeys = Object.keys(enUS).filter(k => k.match(/^Weapon_\d+_FlavorText$/));
const weaponTypeKeys = Object.keys(enUS).filter(k => k.match(/^Weapon_\d+_Type$/));

const weapons = [];
for (const nk of weaponNameKeys) {
  const id = nk.match(/^Weapon_(\d+)_Name$/)[1];
  const wk = `Weapon_${id}_FlavorText`;
  const tk = `Weapon_${id}_Type`;
  weapons.push({
    id: `weapon_${id}`,
    name: enUS[nk] || null,
    description: enUS[wk] || null,
    type: enUS[tk] || null,
    source_file: "en-US.json",
    stats: {
      damage: null,
      attack_speed: null,
      range: null,
      cooldown: null
    },
    skills: [],
    upgrades: []
  });
}
fs.writeFileSync(`${outDir}/weapons.json`, JSON.stringify(weapons, null, 2));
console.log(`weapons.json: ${weapons.length} entries`);
// Print first 10 names
weapons.slice(0, 10).forEach(w => console.log(`  ${w.id}: ${w.name}`));

// ===== ITEMS =====
const itemKeys = Object.keys(enUS).filter(k => k.startsWith("Item_"));
const items = [];
const itemMap = {};
for (const k of itemKeys) {
  const m = k.match(/^Item_(.+?)_(Name|FlavorText|Effect)$/);
  if (!m) continue;
  const [, itemId, field] = m;
  if (!itemMap[itemId]) itemMap[itemId] = { id: itemId, name: null, description: null, effect: null, type: "item", rarity: null, source_file: "en-US.json" };
  if (field === "Name") itemMap[itemId].name = enUS[k];
  else if (field === "FlavorText") itemMap[itemId].description = enUS[k];
  else if (field === "Effect") itemMap[itemId].effect = enUS[k];
}
const itemList = Object.values(itemMap);
fs.writeFileSync(`${outDir}/items.json`, JSON.stringify(itemList, null, 2));
console.log(`items.json: ${itemList.length} entries`);
// Print first 10
itemList.slice(0, 10).forEach(i => console.log(`  ${i.id}: ${i.name}`));

// ===== BOSSES / ENEMIES from BossSpeech =====
const bossNames = new Set();
for (const k of Object.keys(enUS)) {
  if (!k.startsWith("BossSpeech_")) continue;
  const parts = k.split("_");
  if (parts.length >= 2) bossNames.add(parts[1]);
}
const enemies = [...bossNames].map(name => ({
  name,
  type: "boss",
  hp: null,
  attack: [],
  drops: [],
  description: null,
  source_file: "en-US.json"
}));
fs.writeFileSync(`${outDir}/enemies.json`, JSON.stringify(enemies, null, 2));
console.log(`enemies.json: ${enemies.length} boss entries`);
enemies.forEach(e => console.log(`  ${e.name}`));

// ===== CHAPTERS =====
const chapters = [];
for (const k of Object.keys(enUS)) {
  if (!k.startsWith("Chapter_")) continue;
  chapters.push({ name: enUS[k], id: k, description: null, areas: [], images: [] });
}
fs.writeFileSync(`${outDir}/maps.json`, JSON.stringify(chapters, null, 2));
console.log(`maps.json (chapters): ${chapters.length}`);

// ===== STAGES =====
const stages = [];
const stageNameKeys = Object.keys(enUS).filter(k => k.match(/^Stage_.+_Name$/));
for (const k of stageNameKeys) {
  const id = k.match(/^Stage_(.+)_Name$/)[1];
  const descK = `Stage_${id}_Description`;
  stages.push({ name: enUS[k], id, description: enUS[descK] || null });
}
console.log(`Stages found: ${stages.length}`);
stages.forEach(s => console.log(`  ${s.name}`));

// ===== SKILLS =====
const skills = [];
const skillKeys = Object.keys(enUS).filter(k => k.match(/^Skill_\d+_Name$/));
for (const k of skillKeys) {
  const id = k.match(/^Skill_(\d+)_Name$/)[1];
  skills.push({ id: `skill_${id}`, name: enUS[k], description: null, source_file: "en-US.json" });
}
fs.writeFileSync(`${outDir}/skills.json`, JSON.stringify(skills, null, 2));
console.log(`skills.json: ${skills.length} entries`);

// ===== MIRACLES =====
const miracles = [];
const miracleKeys = Object.keys(enUS).filter(k => k.startsWith("Miracle_"));
const miracleMap = {};
for (const k of miracleKeys) {
  const m = k.match(/^Miracle_(.+?)_(Name|Effect|Effect_\d+)$/);
  if (!m) continue;
  const [, mirId, field] = m;
  if (!miracleMap[mirId]) miracleMap[mirId] = { id: mirId, name: null, effect: null, source_file: "en-US.json" };
  if (field === "Name") miracleMap[mirId].name = enUS[k];
  else miracleMap[mirId].effect = (miracleMap[mirId].effect || "") + enUS[k] + " ";
}
fs.writeFileSync(`${outDir}/miracles.json`, JSON.stringify(Object.values(miracleMap), null, 2));
console.log(`miracles.json: ${Object.values(miracleMap).length}`);

// ===== UPGRADES (Buffs) =====
const buffKeys = Object.keys(enUS).filter(k => k.startsWith("Buff_"));
const upgradeMap = {};
for (const k of buffKeys) {
  const m = k.match(/^Buff_(.+?)_(Name|FlavorText)$/);
  if (!m) continue;
  const [, bufId, field] = m;
  if (!upgradeMap[bufId]) upgradeMap[bufId] = { id: bufId, name: null, description: null, type: "buff/upgrade", cost: null, effect: null, unlock_condition: null, source_file: "en-US.json" };
  if (field === "Name") upgradeMap[bufId].name = enUS[k];
  else if (field === "FlavorText") upgradeMap[bufId].description = enUS[k];
}
const upgrades = Object.values(upgradeMap);
fs.writeFileSync(`${outDir}/upgrades.json`, JSON.stringify(upgrades, null, 2));
console.log(`upgrades.json: ${upgrades.length} entries`);

// ===== COSTUMES =====
const costumes = [];
const costumeNameKeys = Object.keys(enUS).filter(k => k.match(/^Costume_.+_Name$/));
for (const k of costumeNameKeys) {
  const id = k.match(/^Costume_(.+)_Name$/)[1];
  const flavorK = `Costume_${id}_FlavorText`;
  costumes.push({ id, name: enUS[k], description: enUS[flavorK] || null, source_file: "en-US.json" });
}
console.log(`Costumes found: ${costumes.length}`);
costumes.slice(0, 5).forEach(c => console.log(`  ${c.name}`));

// ===== NPCs =====
const npcKeys = Object.keys(enUS).filter(k => k.startsWith("NpcSpeech_") || k.startsWith("Npc_") || k.startsWith("NPC_"));
const npcNames = new Set();
for (const k of npcKeys) {
  const parts = k.split("_");
  if (parts.length >= 2) npcNames.add(parts[1]);
}
console.log(`NPCs found: ${npcNames.size}, names: ${[...npcNames].slice(0, 20).join(", ")}`);

// ===== IMAGE ASSET SCAN =====
function scanImages(dir, depth = 0) {
  if (depth > 3) return [];
  const results = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const fp = path.join(dir, e.name);
      if (e.isDirectory()) {
        results.push(...scanImages(fp, depth + 1));
      } else if (/\.(png|jpg|jpeg|webp|gif|bmp|tga)$/i.test(e.name)) {
        const meaningful = /^(weapon|item|artifact|skill|enemy|boss|npc|map|stage|chapter|ui_|icon_|portrait_)/i.test(e.name);
        results.push({
          filename: e.name,
          path: fp,
          category: meaningful ? "recognized" : "unknown",
          recognized: meaningful
        });
      }
    }
  } catch (e) { /* skip inaccessible */ }
  return results;
}
const images = scanImages("E:/Sephiria");
const recognized = images.filter(i => i.recognized);
const unknown = images.filter(i => !i.recognized);
console.log(`\nImages: ${images.length} total, ${recognized.length} recognized, ${unknown.length} unknown`);

// ===== EXTRACTION REPORT =====
const report = `# Sephiria Game Data Extraction Report

**Date:** 2026-08-04
**Source:** E:\\Sephiria
**Localization file:** en-US.json (6,507 keys)

## Data Discovered

### Weapons
- **${weapons.length} weapon entries** found
${weapons.map(w => `- ${w.name} (${w.id})`).join("\n")}

### Items / Artifacts
- **${itemList.length} item entries** found (includes artifacts, potions, tablets, equipment)
- First 20: ${itemList.slice(0,20).map(i => i.name).join(", ")}

### Enemies / Bosses
- **${enemies.length} boss names** extracted from boss speech patterns
${enemies.map(e => `- ${e.name}`).join("\n")}

### Skills
- **${skills.length} skills** found
${skills.map(s => `- ${s.name}`).join("\n")}

### Miracles
- **${Object.values(miracleMap).length} miracles** found
${Object.values(miracleMap).slice(0,10).map(m => `- ${m.name}`).join("\n")}

### Upgrades / Buffs
- **${upgrades.length} upgrade/buff entries** found
- First 10: ${upgrades.slice(0,10).map(u => u.name).join(", ")}

### Chapters & Stages
${chapters.map(c => `- ${c.name}`).join("\n")}
${stages.map(s => `- ${s.name} - ${s.description || "(no description)"}`).join("\n")}

### NPCs
- **${npcNames.size} NPC names** identified
- Names: ${[...npcNames].join(", ")}

### Costumes
- **${costumes.length} costumes** found

## Image Assets
- Recognized: ${recognized.length}
- Unknown: ${unknown.length}
${recognized.slice(0, 20).map(i => `- ${i.filename}`).join("\n")}

## Unconfirmed
- Skill data found: ${skills.length} entries — need manual verification of in-game names matching
- Boss data:  ${enemies.length} names from dialogue — may include boss references not yet encountered
- Item data:  ${itemList.length} items — need classification (artifact vs. potion vs. tablet vs. consumable vs. equipment)
- NPC names:  ${npcNames.size} from dialogue patterns — need cross-reference with actual NPC list
- Upgrade data: ${upgrades.length} buff/upgrade entries — need system classification (Destiny vs. equipment vs. character)

## Next Steps (Phase 2)
- Cross-reference weapon names with Steam store descriptions
- Classify items into sub-categories
- Match boss names with chapter appearances
- Decompile Assembly-CSharp.dll for stat/balance data
- Map image assets to game entities
`;

fs.writeFileSync(`${outDir}/../reports/extraction-report.md`, report);
console.log("\n\n=== DONE ===");
console.log(`Output files written to ${outDir}/`);
console.log(`Report written to data-extraction/reports/extraction-report.md`);
