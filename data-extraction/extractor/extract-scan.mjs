// Phase 1: Scan and categorize all 6507 localization keys
import fs from "node:fs";

const enUS = JSON.parse(fs.readFileSync("E:/Sephiria/Sephiria_Data/StreamingAssets/Localization/en-US.json", "utf8"));
const keys = Object.keys(enUS);
console.log("Total keys:", keys.length);

// Categorize by pattern
const categories = {};
for (const key of keys) {
  const parts = key.split("_");
  // Find the meaningful prefix - skip # and ... markers
  if (key.startsWith("#") || key.startsWith("...") || key === "?!" || key.startsWith("[")) continue;
  
  // Extract category from first meaningful segment
  let cat = parts[0];
  // Handle multi-part categories
  if (cat === "BossSpeech") cat = "BossSpeech";
  else if (cat === "BossHard") cat = "BossHard";
  else if (cat.match(/^(Weapon|Item|Artifact|Tablet|Equipment|Skill|Ability|Upgrade|Enemy|NPC|Map|Chapter|Stage|Room|Talent|Destiny|Miracle|Potion|Consumable|Costume|Challenge|Achievement)$/i)) cat = cat;
  else cat = "Other";
  
  if (!categories[cat]) categories[cat] = [];
  categories[cat].push(key);
}

// Print category summary
const sorted = Object.entries(categories).sort((a,b) => b[1].length - a[1].length);
console.log("\n=== CATEGORY SUMMARY ===");
for (const [cat, ks] of sorted) {
  console.log(`${cat}: ${ks.length} keys`);
  // Show first 5 sample keys
  for (const k of ks.slice(0, 5)) {
    console.log(`  ${k} => ${JSON.stringify(enUS[k]).slice(0, 100)}`);
  }
}
