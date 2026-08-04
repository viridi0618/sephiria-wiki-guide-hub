import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function publicExists(src) {
  return fs.existsSync(path.join(root, "public", src.replace(/^\//, "")));
}

for (const file of [
  "src/data/game-data/boss-assets.ts",
  "src/data/game-data/weapon-assets.ts",
]) {
  const content = fs.existsSync(path.join(root, file)) ? read(file) : "";
  for (const m of content.matchAll(/image:\s*"([^"]+)"[\s\S]*?visuallyVerified:\s*(true|false)/g)) {
    const [, image, verified] = m;
    if (verified === "true" && !publicExists(image)) {
      errors.push(`Missing verified published image: ${image}`);
    }
    if (verified === "true" && !image.startsWith("/assets/")) {
      errors.push(`Verified entity asset must publish under /assets/: ${image}`);
    }
  }
}

const dataFiles = [
  "src/data/guides.ts",
  "src/data/builds.ts",
  "src/data/boss-pages.ts",
  "src/data/systems.ts",
  "src/data/tools.ts",
];
const data = dataFiles.map(read).join("\n");

for (const m of data.matchAll(/(?:heroImage|src):\s*"([^"]+\.(?:webp|png|jpg|jpeg|ico))"/g)) {
  const image = m[1];
  if (image.startsWith("/") && !publicExists(image)) {
    errors.push(`Missing public image reference: ${image}`);
  }
}

const ids = [...data.matchAll(/youtubeUrl:\s*"[^"]*?(?:v=|embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/g)].map((m) => m[1]);
if (new Set(ids).size < 2) errors.push("Need at least two unique YouTube IDs");
for (const id of ids) {
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) errors.push(`Invalid YouTube ID: ${id}`);
}

const featuredCount = (data.match(/featuredVideo:\s*\{/g) ?? []).length;
if (featuredCount < 2) errors.push("Need at least two pages with featuredVideo configured");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Media checks passed: ${new Set(ids).size} unique YouTube IDs; ${featuredCount} featured videos; public image references exist.`,
);
