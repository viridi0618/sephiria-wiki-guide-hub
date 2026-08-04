// verify-ia.mjs — Data-layer IA verification (no build required)
// Run: npx tsx scripts/verify-ia.mjs
import { pages, getPage } from '@/data/pages';
import { navigation } from '@/data/navigation';
import { bossPages } from '@/data/boss-pages';
import { buildPages } from '@/data/builds';
import { buildContextualSections } from '@/lib/contextual-nav';

const errors = [];
const warnings = [];
const passed = [];
const linkRe = new RegExp('href="([^"]+)"', 'g');

function extractInternalLinks(text) {
  const links = [];
  if (!text) return links;
  let m;
  linkRe.lastIndex = 0;
  while ((m = linkRe.exec(text)) !== null) {
    const href = m[1];
    if (href.startsWith('/') && !href.startsWith('/_next/')) {
      links.push(href.replace(/^[\/]+|[\/]+$/g, ''));
    }
  }
  return links;
}

// 1. Boss page paths
const expectedBossSlugs = ['askard', 'mole-big-bomb', 'mad-armadillo', 'bird-demon', 'larid', 'oink-king'];
for (const slug of expectedBossSlugs) {
  const page = getPage('bosses/' + slug);
  if (!page) errors.push('Boss page not found: bosses/' + slug);
  else passed.push('bosses/' + slug);
}

// 2. Navigation
const bossesNav = navigation.find(g => g.label === 'Bosses');
if (!bossesNav) errors.push('Navigation missing "Bosses" group');
else {
  passed.push('Bosses top-level group');
  for (const slug of expectedBossSlugs) {
    const href = '/bosses/' + slug + '/';
    if (!bossesNav.items?.some(i => i.href === href)) errors.push('Nav missing: ' + href);
    else passed.push('Nav: ' + href);
  }
}

// 3. Sitemap
const canonical = pages.filter(p => !p.canonicalPath);
const legacy = pages.filter(p => p.canonicalPath);
passed.push(canonical.length + ' canonical pages (in sitemap)');
passed.push(legacy.length + ' legacy pages (excluded)');
for (const boss of bossPages) {
  if (boss.canonicalPath) errors.push('Boss is legacy: ' + boss.path);
  else passed.push('Boss canonical: ' + boss.path);
}

// 4. Contextual navigation
for (const boss of bossPages) {
  const sections = buildContextualSections(boss);
  if (!sections.some(s => s.title === 'Other Bosses')) errors.push('No "Other Bosses": ' + boss.path);
  else passed.push(boss.path + ': Other Bosses');
  if (!sections.some(s => s.title === 'Recommended Builds')) warnings.push('No "Recommended Builds": ' + boss.path);
  else passed.push(boss.path + ': Recommended Builds');
  if (!sections.some(s => s.title === 'Guides')) errors.push('No "Guides": ' + boss.path);
  else passed.push(boss.path + ': Guides');
}

const realBuilds = buildPages.filter(p => p.path.startsWith('builds/') && p.path !== 'builds' && !p.canonicalPath);
for (const build of realBuilds) {
  const sections = buildContextualSections(build);
  if (!sections.some(s => s.title === 'Other Builds')) errors.push('No "Other Builds": ' + build.path);
  else passed.push(build.path + ': Other Builds');
  if (!sections.some(s => s.title === 'Related Bosses')) warnings.push('No "Related Bosses": ' + build.path);
  else passed.push(build.path + ': Related Bosses');
  if (!sections.some(s => s.title === 'Systems')) errors.push('No "Systems": ' + build.path);
  else passed.push(build.path + ': Systems');
}

// 5. Internal link network
const incoming = new Map();
for (const p of pages) incoming.set(p.path, new Set());

for (const page of pages) {
  for (const rel of (page.related ?? [])) {
    if (incoming.has(rel)) incoming.get(rel).add(page.path);
  }
  for (const section of (page.sections ?? [])) {
    if (section.table) {
      for (const row of section.table.rows) {
        for (const cell of row) {
          for (const target of extractInternalLinks(cell)) {
            if (incoming.has(target)) incoming.get(target).add(page.path);
          }
        }
      }
    }
    if (section.paragraphs) {
      for (const p of section.paragraphs) {
        for (const target of extractInternalLinks(p)) {
          if (incoming.has(target)) incoming.get(target).add(page.path);
        }
      }
    }
    if (section.bullets) {
      for (const b of section.bullets) {
        for (const target of extractInternalLinks(b)) {
          if (incoming.has(target)) incoming.get(target).add(page.path);
        }
      }
    }
  }
}

for (const group of navigation) {
  for (const item of (group.items ?? [])) {
    const target = item.href.replace(/^[\/]+|[\/]+$/g, '');
    if (incoming.has(target)) incoming.get(target).add('nav');
  }
}

const orphans = [];
for (const [path, linkers] of incoming) {
  if (linkers.size === 0 && !path.includes('404') && !path.includes('not-found')) {
    const page = pages.find(p => p.path === path);
    if (page?.canonicalPath) continue;
    orphans.push(path);
  }
}
if (orphans.length > 0) {
  console.log('Orphan pages:');
  orphans.forEach(p => console.log('  /' + p + '/'));
  warnings.push(orphans.length + ' orphan pages in data layer.');
} else {
  passed.push('No orphan pages');
}

// 6. Bidirectional links
const hrefRe = new RegExp('^<a href="([^"]+)">');
for (const boss of bossPages) {
  const recSection = boss.sections.find(s => s.heading === 'Recommended Builds');
  const buildLinks = [];
  if (recSection?.table) {
    for (const row of recSection.table.rows) {
      for (const cell of row) {
        const m = cell.match(hrefRe);
        if (m) buildLinks.push(m[1]);
      }
    }
  }
  if (buildLinks.length === 0) warnings.push('No build links: ' + boss.path);
  else passed.push(boss.path + ' -> builds: ' + buildLinks.join(', '));
}

for (const build of realBuilds) {
  const bossSection = build.sections.find(s => s.heading === 'Related Bosses');
  const bossLinks = [];
  if (bossSection?.table) {
    for (const row of bossSection.table.rows) {
      for (const cell of row) {
        const m = cell.match(hrefRe);
        if (m) bossLinks.push(m[1]);
      }
    }
  }
  if (bossLinks.length === 0) warnings.push('No boss links: ' + build.path);
  else passed.push(build.path + ' -> bosses: ' + bossLinks.join(', '));
}

// 7. Boss Guide hub
const bossGuide = getPage('boss-guide');
if (!bossGuide) errors.push('Boss Guide hub not found');
else {
  for (const slug of expectedBossSlugs) {
    const href = '/bosses/' + slug + '/';
    if (!JSON.stringify(bossGuide.sections).includes(href)) errors.push('Hub missing: ' + href);
    else passed.push('Hub links to: ' + href);
  }
}

// Summary
console.log('=== Data-Layer IA Check ===');
console.log('Passed: ' + passed.length);
console.log('Warnings: ' + warnings.length);
console.log('Errors: ' + errors.length);
if (warnings.length > 0) {
  console.log('\nWarnings:');
  warnings.forEach(w => console.log('  WARN ' + w));
}
if (errors.length > 0) {
  console.error('\nErrors:');
  errors.forEach(e => console.error('  FAIL ' + e));
  process.exit(1);
}
console.log('\nAll critical IA checks passed at the data layer.');
