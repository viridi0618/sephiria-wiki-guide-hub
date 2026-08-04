// check-information-architecture.mjs
// Validates that every page is reachable: sitemap coverage, navigation references,
// breadcrumb existence, orphan page detection, and broken link detection.
// Run after `next build` — reads from the `out/` directory.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");
const errors = [];
const warnings = [];

const bossPaths = ["bosses/askard", "bosses/mole-big-bomb", "bosses/mad-armadillo", "bosses/bird-demon", "bosses/larid", "bosses/oink-king"];

// --- 1. Collect all generated pages ---
const pageFiles = [];
function collectHtml(dir, base = "") {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      collectHtml(fullPath, relPath);
    } else if (entry.name === "index.html") {
      pageFiles.push(relPath);
    }
  }
}
collectHtml(out);

// Build set of all routes (e.g., "bosses/askard", "builds/dagger")
const allRoutes = pageFiles.map(f => f.replace(/\/index\.html$/, ""));
const routeSet = new Set(allRoutes);

console.log(`Found ${allRoutes.length} generated pages.`);
// Read pages data to identify legacy/canonical-redirect pages
import { pages as allPageData } from '../src/data/pages.ts';
const legacyPaths = new Set(allPageData.filter(p => p.canonicalPath).map(p => p.path));
const skipPaths = new Set([...legacyPaths, '404', '_not-found', 'index.html']);


// --- 2. Check sitemap.xml exists and contains all pages ---
const sitemapPath = path.join(out, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  errors.push("sitemap.xml not found in output directory.");
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  for (const route of allRoutes) {
    const url = route === "" ? "/" : `/${route}/`;
    if (!skipPaths.has(route) && !sitemapContent.includes(url)) {
      errors.push(`Sitemap missing page: ${url}`);
    }
  }
}

// --- 3. Check navigation.ts references match generated pages ---
const navPath = path.join(root, "src/data/navigation.ts");
if (!fs.existsSync(navPath)) {
  errors.push("navigation.ts not found.");
} else {
  const navContent = fs.readFileSync(navPath, "utf8");
  // Extract all href values from navigation data
  const hrefMatches = navContent.matchAll(/href:\"(\/[^\"]+)\"/g);
  for (const m of hrefMatches) {
    const href = m[1];
    const route = href.replace(/^\/|\/$/g, "");
    if (!route) continue; // Skip home "/"
    if (!routeSet.has(route) && !routeSet.has(route.toLowerCase())) {
      errors.push(`Navigation links to non-existent page: ${href}`);
    }
  }
  // Check that Bosses group exists
  if (!navContent.includes('label:"Bosses"')) {
    errors.push("Navigation data missing 'Bosses' top-level group.");
  }
  // Check that all 6 boss pages are in navigation
  for (const bp of bossPaths) {
    if (!navContent.includes(bp)) {
      errors.push(`Navigation missing boss page: ${bp}`);
    }
  }
}

// --- 4. Check breadcrumbs on key pages ---
const breadcrumbPages = [
  "bosses/askard",
  "bosses/mole-big-bomb",
  "bosses/bird-demon",
  "builds/dagger",
  "builds/greatsword",
  "builds/sword-and-shield",
];
for (const route of breadcrumbPages) {
  const filePath = path.join(out, route, "index.html");
  if (!fs.existsSync(filePath)) {
    errors.push(`Breadcrumb check: page not found: /${route}/`);
    continue;
  }
  const content = fs.readFileSync(filePath, "utf8");
  if (!content.includes('class="breadcrumbs"')) {
    errors.push(`Missing breadcrumb on /${route}/`);
  }
  if (!content.includes("BreadcrumbList")) {
    warnings.push(`Missing BreadcrumbList JSON-LD on /${route}/`);
  }
}

// --- 5. Orphan page detection ---
// An orphan page is one that no other page links to (except itself and sitemap).
const incomingLinks = new Map(); // route -> Set of pages linking to it
for (const route of allRoutes) {
  incomingLinks.set(route, new Set());
}

for (const route of allRoutes) {
  const filePath = path.join(out, route, "index.html");
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, "utf8");
  // Find all internal links
  const linkMatches = content.matchAll(/href="(\/[^"#?]*)/g);
  for (const m of linkMatches) {
    const href = m[1];
    const targetRoute = href.replace(/^\/|\/$/g, "");
    if (!targetRoute || targetRoute === route) continue; // Skip self-links and home
    if (incomingLinks.has(targetRoute)) {
      incomingLinks.get(targetRoute).add(route);
    }
  }
}

const orphanPages = [];
for (const [route, linkers] of incomingLinks) {
  if (linkers.size === 0 && route !== "" && !skipPaths.has(route)) {
    orphanPages.push(route);
  }
}
if (orphanPages.length > 0) {
  console.log("\n--- Orphan Pages (no incoming internal links) ---");
  for (const p of orphanPages) {
    console.log(`  /${p}/`);
  }
  warnings.push(`${orphanPages.length} orphan pages found (no incoming internal links).`);
}

// --- 6. Broken link detection ---
// Check all internal links in all pages point to existing pages
let brokenLinkCount = 0;
for (const route of allRoutes) {
  const filePath = path.join(out, route, "index.html");
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, "utf8");
  const linkMatches = content.matchAll(/href="(\/[^"#?]*)/g);
  for (const m of linkMatches) {
    const href = m[1];
    if (href.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(href)) continue;
    const targetRoute = href.replace(/^\/|\/$/g, "");
    if (!targetRoute) continue; // Home page always exists
    if (!routeSet.has(targetRoute) && !routeSet.has(targetRoute.toLowerCase()) && !skipPaths.has(targetRoute)) {
      if (brokenLinkCount < 20) {
        errors.push(`Broken link on /${route}/: ${href} → /${targetRoute}/ does not exist`);
      }
      brokenLinkCount++;
    }
  }
}
if (brokenLinkCount > 20) {
  warnings.push(`${brokenLinkCount} broken links total (showing first 20).`);
}

// --- 7. Boss guide hub links to all boss pages ---
const bossGuidePath = path.join(out, "boss-guide", "index.html");
if (fs.existsSync(bossGuidePath)) {
  const bossGuideContent = fs.readFileSync(bossGuidePath, "utf8");
  for (const bp of bossPaths) {
    if (!bossGuideContent.includes(`href="/${bp}/"`)) {
      errors.push(`Boss Guide hub does not link to /${bp}/`);
    }
  }
} else {
  errors.push("Boss Guide hub page not found at /boss-guide/");
}

// --- 8. Boss pages link to build pages (bidirectional) ---
const askardPath = path.join(out, "bosses/askard", "index.html");
if (fs.existsSync(askardPath)) {
  const askardContent = fs.readFileSync(askardPath, "utf8");
  if (!askardContent.includes('href="/builds/')) {
    errors.push("Askard boss page does not link to any build page.");
  }
  // Check contextual sidebar (Other Bosses section)
  if (!askardContent.includes("Other Bosses") && !askardContent.includes("wiki-contextual")) {
    warnings.push("Askard page missing contextual sidebar (Other Bosses).");
  }
}

// --- 9. Build pages link to boss pages (bidirectional) ---
const daggerPath = path.join(out, "builds/dagger", "index.html");
if (fs.existsSync(daggerPath)) {
  const daggerHtml = fs.readFileSync(daggerPath, "utf8");
  if (!daggerHtml.includes('href="/bosses/')) {
    errors.push("Dagger build page does not link to any boss page.");
  }
  if (!daggerHtml.includes("Other Builds") && !daggerHtml.includes("wiki-contextual")) {
    warnings.push("Dagger page missing contextual sidebar (Other Builds).");
  }
}

// --- Summary ---
console.log("\n=== Information Architecture Check ===");
if (warnings.length > 0) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const w of warnings) console.log(`  ⚠ ${w}`);
}
if (errors.length > 0) {
  console.error(`\nErrors (${errors.length}):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log(`\n✓ IA checks passed: ${allRoutes.length} pages, sitemap coverage, navigation references, breadcrumbs, ${orphanPages.length} orphan pages detected, bidirectional Build↔Boss links, boss-guide hub links.`);
