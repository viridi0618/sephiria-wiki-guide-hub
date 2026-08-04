
import fs from "node:fs";
import path from "node:path";

const out = path.join(process.cwd(), "out");
const buildPages = [
  "builds/sword-and-shield", "builds/greatsword", "builds/dagger",
  "builds/crossbow", "builds/staff", "builds/grimoire",
];
const errors = [];

for (const bp of buildPages) {
  const file = path.join(out, bp, "index.html");
  if (!fs.existsSync(file)) { errors.push("Missing build page: " + bp); continue; }
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes("Verified Data") && !html.includes("verified-data-card")) {
    errors.push(bp + " missing Verified Data section");
  }
  // Check weapon family name appears
  const weaponNames = ["Sword and Shield", "Greatsword", "Dagger", "Crossbow", "Staff", "Grimoire"];
  const expectedFamily = weaponNames[buildPages.indexOf(bp)];
  if (!html.includes(expectedFamily)) {
    errors.push(bp + " missing weapon family name: " + expectedFamily);
  }
}

// Check weaponProfiles exist and have 6 entries
const wProfilesPath = path.join(process.cwd(), "src", "data", "game-data", "weapon-profiles.ts");
if (!fs.existsSync(wProfilesPath)) { errors.push("weapon-profiles.ts missing"); }
else {
  const content = fs.readFileSync(wProfilesPath, "utf8");
  const profileCount = (content.match(/id: "\w+"/g) || []).filter((s) => !s.includes("string")).length;
  if (profileCount < 6) errors.push("weapon-profiles.ts has fewer than 6 profiles");
  if (!content.includes("difficulty")) errors.push("weapon-profiles.ts missing difficulty field");
  if (!content.includes("playstyles")) errors.push("weapon-profiles.ts missing playstyles field");
}

// Check BuildPicker imports weaponProfiles
const bpPath = path.join(process.cwd(), "src", "components", "BuildPicker.tsx");
if (fs.existsSync(bpPath)) {
  const bpContent = fs.readFileSync(bpPath, "utf8");
  if (!bpContent.includes("weapon-profiles")) errors.push("BuildPicker does not import weaponProfiles");
  if (!bpContent.includes("matchProfile")) errors.push("BuildPicker does not use matchProfile (profile-based scoring)");
}

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Build data checks passed: 6 build pages with Verified Data, weaponProfiles enhanced, BuildPicker profile-based.");
