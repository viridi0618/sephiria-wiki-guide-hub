import fs from "node:fs";
import path from "node:path";

const out = path.join(process.cwd(), "out");
// Real, canonical routes (old weapon URLs are compatibility pages that canonical to these)
const routes = ["", "beginner-guide", "tips-and-tricks", "progression-guide", "boss-guide", "co-op", "review", "builds", "builds/sword-and-shield", "builds/greatsword", "builds/dagger", "builds/crossbow", "builds/staff", "builds/grimoire", "weapons-guide", "destiny-tree-guide", "upgrade-guide", "is-sephiria-worth-playing", "is-sephiria-multiplayer", "is-sephiria-hard", "controller-support", "build-picker"];
// Legacy weapon URLs must exist but canonical to the real URL and must NOT appear in sitemap
const legacy = {
  "builds/sword": "builds/sword-and-shield",
  "builds/bow": "builds/crossbow",
  "builds/magic": "builds/staff",
  "builds/spear": "builds/greatsword",
  "builds/fist": "builds/dagger",
  "builds/scythe": "builds/grimoire",
};
const routeSet = new Set([...routes, ...Object.keys(legacy)].map((route) => (route ? `/${route}/` : "/")));
const errors = [];
const fileFor = (route) => (route ? path.join(out, route, "index.html") : path.join(out, "index.html"));
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&#x27;/g, "'");

for (const route of routes) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) { errors.push(`Missing route /${route}`); continue; }
  const html = fs.readFileSync(file, "utf8");
  if ((html.match(/<h1\b/g) ?? []).length !== 1) errors.push(`/${route} must have exactly one H1.`);
  const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  const expectedCanonical = route ? `https://sephiria.wiki/${route}/` : "https://sephiria.wiki/";
  if (canonical.length !== 1 || decode(canonical[0]?.[1] ?? "") !== expectedCanonical) errors.push(`Canonical mismatch on /${route}.`);
  for (const match of html.matchAll(/<img\b([^>]*)>/g)) if (!/\balt="[^"]+"/.test(match[1])) errors.push(`Empty or missing image alt on /${route}.`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(decode(match[1])); } catch { errors.push(`Invalid JSON-LD on /${route}.`); } }
  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const raw = match[1];
    if (raw.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(raw)) continue;
    const href = raw.replace(/\/?$/, "/");
    if (!routeSet.has(href)) errors.push(`Broken internal link on /${route}: ${href}`);
  }
  if (route && !html.includes('aria-label="Breadcrumb"')) errors.push(`Missing breadcrumb on /${route}.`);
}

// Legacy URL compatibility checks: page exists, canonical points to the real URL, not in sitemap
for (const [legacyRoute, realRoute] of Object.entries(legacy)) {
  const file = fileFor(legacyRoute);
  if (!fs.existsSync(file)) { errors.push(`Missing legacy route /${legacyRoute}`); continue; }
  const html = fs.readFileSync(file, "utf8");
  const canonical = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)];
  const expectedCanonical = `https://sephiria.wiki/${realRoute}/`;
  if (canonical.length !== 1 || decode(canonical[0]?.[1] ?? "") !== expectedCanonical) errors.push(`Legacy /${legacyRoute} canonical must point to /${realRoute}.`);
  const sitemap = fs.existsSync(path.join(out, "sitemap.xml")) ? fs.readFileSync(path.join(out, "sitemap.xml"), "utf8") : "";
  if (sitemap.includes(`https://sephiria.wiki/${legacyRoute}/`)) errors.push(`Legacy /${legacyRoute} must not appear in sitemap.`);
}

for (const required of ["sitemap.xml", "robots.txt", "manifest.webmanifest", "404.html"]) if (!fs.existsSync(path.join(out, required))) errors.push(`Missing ${required}.`);
const sitemap = fs.existsSync(path.join(out, "sitemap.xml")) ? fs.readFileSync(path.join(out, "sitemap.xml"), "utf8") : "";
for (const route of routes) {
  const url = route ? `https://sephiria.wiki/${route}/` : "https://sephiria.wiki/";
  if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`Sitemap missing ${url}.`);
}
const robots = fs.existsSync(path.join(out, "robots.txt")) ? fs.readFileSync(path.join(out, "robots.txt"), "utf8") : "";
if (!robots.includes("Allow: /") || !robots.includes("https://sephiria.wiki/sitemap.xml")) errors.push("Robots output is incorrect.");
// Content quality checks: reject template boilerplate and unsupported claims in production pages
const banned = [
  "Build Picker is not available yet",
  "Build Picker — coming soon",
  "not another database",
  "generic(",
  "buildSections(",
  "Magic Tome",
  "12 interface/subtitle languages",
  "12 languages",
  "health and healing nodes",
  "bag and artifact slot expansions",
  "additional starting weapon options",
  "Phase one — survival foundation",
  "Phase two — build literacy",
  "shows a Full Controller Support badge",
  "harder than most casual roguelites",
  "content-complete",
  "before you unlock more capacity through permanent progression",
  "As you unlock bag capacity through permanent upgrades",
];
for (const route of routes) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  for (const term of banned) {
    if (html.includes(term)) errors.push(`Banned term "${term}" found on /${route}.`);
  }
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Site checks passed: ${routes.length} public routes + ${Object.keys(legacy).length} legacy redirect-compatible routes, canonical, sitemap, robots, manifest, schemas, H1s, image alt text, breadcrumbs, 0 internal dead links, and no banned unsupported claims.`);
