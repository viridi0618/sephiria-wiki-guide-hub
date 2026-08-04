// Sephiria version metadata — single source of truth.
// Used by: VerifiedDataCard, future Patch Impact Checker, guide page freshness.

export const gameVersion = {
  /** Shipped game version */
  version: "1.0",
  /** Source of the version information */
  source: "TEAM HORAY official full-release announcement on Steam",
  /** Official full-release date */
  date: "2026-07-31",
  /** Early access start date */
  earlyAccessDate: "2025-04-03",
} as const;

export const dataSource = {
  /** Version of the data extraction pipeline */
  dataSourceVersion: "1.0.0",
  /** Sources used for data extraction */
  sources: ["en-US.json", "Steam store page", "Steam 1.0 update announcement"],
  /** When the data was last verified against live game files */
  lastVerified: "2026-08-04",
} as const;
