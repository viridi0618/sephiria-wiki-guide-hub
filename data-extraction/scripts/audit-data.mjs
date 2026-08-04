// Audit tool: scan extraction output for quality issues
import fs from "node:fs";

const outDir = "data-extraction/output";
const files = fs.readdirSync(outDir).filter(f => f.endsWith(".json"));

const report = [];
report.push("# Data Audit Report\n");
report.push(`**Date:** 2026-08-04\n\n`);

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(`${outDir}/${file}`, "utf8"));
  const entries = Array.isArray(data) ? data : [];
  report.push(`## ${file}\n`);
  report.push(`- **Total entries:** ${entries.length}\n`);

  // Check for empty-string / "unknown" / "N/A" values
  let emptyStr = 0, naVal = 0, unknownVal = 0;
  const nullFields = {};
  for (const entry of entries) {
    for (const [key, val] of Object.entries(entry)) {
      if (val === "") { emptyStr++; continue; }
      if (val === "unknown" || val === "Unknown") { unknownVal++; continue; }
      if (val === "N/A" || val === "n/a") { naVal++; continue; }
      if (val === null || val === undefined) {
        nullFields[key] = (nullFields[key] || 0) + 1;
      }
    }
  }
  if (emptyStr > 0) report.push(`- **Empty-string values:** ${emptyStr} (should be null)\n`);
  if (unknownVal > 0) report.push(`- **"unknown" values:** ${unknownVal} (should be null)\n`);
  if (naVal > 0) report.push(`- **"N/A" values:** ${naVal} (should be null)\n`);

  // Missing fields
  const sampleEntry = entries[0];
  if (sampleEntry) {
    const topFields = Object.keys(sampleEntry);
    for (const field of topFields) {
      const missing = entries.filter(e => e[field] === null || e[field] === undefined).length;
      const pct = ((missing / entries.length) * 100).toFixed(1);
      report.push(`- **Missing \`${field}\`:** ${missing}/${entries.length} (${pct}%)\n`);
    }
  }

  // Duplicate names
  const names = entries.map(e => e.name).filter(Boolean);
  const nameCounts = {};
  for (const n of names) {
    const lower = n.toLowerCase();
    nameCounts[lower] = (nameCounts[lower] || 0) + 1;
  }
  const dupes = Object.entries(nameCounts).filter(([,c]) => c > 1).map(([n]) => n);
  if (dupes.length > 0) {
    report.push(`- **Duplicate names (case-insensitive):** ${dupes.join(", ")}\n`);
  }
  report.push("\n");
}

// Summary
report.push("## Summary\n");
const totalEntries = files.reduce((sum, f) => {
  const data = JSON.parse(fs.readFileSync(`${outDir}/${f}`, "utf8"));
  return sum + (Array.isArray(data) ? data.length : 0);
}, 0);
report.push(`- **Total files:** ${files.length}\n`);
report.push(`- **Total entries across all files:** ${totalEntries}\n`);
report.push(`- **Image assets:** Deferred to Phase 2 (Unity .assets bundles need AssetStudio)\n`);
report.push(`- **Stat data:** Not available in localization extraction (needs Assembly-CSharp.dll decompilation)\n`);

fs.mkdirSync("data-extraction/reports", { recursive: true });
fs.writeFileSync("data-extraction/reports/data-audit-report.md", report.join(""));
console.log("Data audit report written to data-extraction/reports/data-audit-report.md");
