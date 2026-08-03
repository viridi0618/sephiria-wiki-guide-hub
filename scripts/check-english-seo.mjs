import fs from "node:fs";
import path from "node:path";

const out = path.join(process.cwd(), "out");
const files = [];
const errors = [];
const forbidden = [
  ["Mist", "fall"].join(""),
  ["mist", "fallhuntergg.wiki"].join(""),
  ["Bell", "ring"].join(""),
  ["Merc", "enary"].join(""),
  ["Black", "arrow"].join(""),
  ["Shadow", "strix"].join(""),
  ["Sor", "cerer"].join(""),
];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name === "index.html") files.push(file);
  }
}

walk(out);
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const route = path.relative(out, file);
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "";
  const description = html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/)?.[1] ?? "";
  if (!title.trim()) errors.push(`${route} title is empty.`);
  if (!description.trim()) errors.push(`${route} description is empty.`);
  if ((html.match(/rel="canonical"/g) ?? []).length !== 1) errors.push(`${route} canonical is not unique.`);
  for (const term of forbidden) if (html.toLowerCase().includes(term.toLowerCase())) errors.push(`${route} contains template residue.`);
}

const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (new Set(urls).size !== urls.length) errors.push("Sitemap contains duplicate URLs.");
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`English SEO checks passed: ${files.length} pages with titles, descriptions, one canonical, no template residue, and ${urls.length} unique sitemap URLs.`);
