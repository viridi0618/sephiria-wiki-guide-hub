// Sephiria version metadata — single source of truth for the game version.
// Used by: VerifiedDataCard, future Patch Impact Checker, guide page freshness.

export const gameVersion = {
  version: "1.0",
  source: "TEAM HORAY official full-release announcement",
  date: "2026-07-31",
  earlyAccessDate: "2025-04-03",
} as const;

/** Returns a human-readable patch freshness indicator. */
export function versionFreshness(): string {
  const now = new Date();
  const release = new Date(gameVersion.date);
  const daysSince = Math.floor((now.getTime() - release.getTime()) / 86400000);
  if (daysSince <= 14) return "Recent release — data is current.";
  if (daysSince <= 90) return "Data reflects the shipped 1.0 version. Check Steam news for patches.";
  return "Data may not reflect post-launch patches. Verify in-game for the latest changes.";
}
