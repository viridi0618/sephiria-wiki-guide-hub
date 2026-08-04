# Data Audit Report
**Date:** 2026-08-04

## enemies.json
- **Total entries:** 13
- **Missing `name`:** 0/13 (0.0%)
- **Missing `type`:** 0/13 (0.0%)
- **Missing `hp`:** 13/13 (100.0%)
- **Missing `attack`:** 0/13 (0.0%)
- **Missing `drops`:** 0/13 (0.0%)
- **Missing `description`:** 13/13 (100.0%)
- **Missing `source_file`:** 0/13 (0.0%)

## items.json
- **Total entries:** 481
- **Empty-string values:** 1 (should be null)
- **Missing `id`:** 0/481 (0.0%)
- **Missing `name`:** 19/481 (4.0%)
- **Missing `description`:** 126/481 (26.2%)
- **Missing `effect`:** 481/481 (100.0%)
- **Missing `type`:** 0/481 (0.0%)
- **Missing `rarity`:** 481/481 (100.0%)
- **Missing `source_file`:** 0/481 (0.0%)
- **Duplicate names (case-insensitive):** flaming eye patch, companion token, unidentified sword and shield artifact, lightning bolt, lightning rod

## maps.json
- **Total entries:** 13
- **Missing `name`:** 0/13 (0.0%)
- **Missing `id`:** 0/13 (0.0%)
- **Missing `description`:** 13/13 (100.0%)
- **Missing `areas`:** 0/13 (0.0%)
- **Missing `images`:** 0/13 (0.0%)

## miracles.json
- **Total entries:** 29
- **Missing `id`:** 0/29 (0.0%)
- **Missing `name`:** 0/29 (0.0%)
- **Missing `effect`:** 17/29 (58.6%)
- **Missing `source_file`:** 0/29 (0.0%)

## skills.json
- **Total entries:** 38
- **Missing `id`:** 0/38 (0.0%)
- **Missing `name`:** 0/38 (0.0%)
- **Missing `description`:** 38/38 (100.0%)
- **Missing `source_file`:** 0/38 (0.0%)
- **Duplicate names (case-insensitive):** shield

## upgrades.json
- **Total entries:** 24
- **Missing `id`:** 0/24 (0.0%)
- **Missing `name`:** 6/24 (25.0%)
- **Missing `description`:** 1/24 (4.2%)
- **Missing `type`:** 0/24 (0.0%)
- **Missing `cost`:** 24/24 (100.0%)
- **Missing `effect`:** 24/24 (100.0%)
- **Missing `unlock_condition`:** 24/24 (100.0%)
- **Missing `source_file`:** 0/24 (0.0%)
- **Duplicate names (case-insensitive):** <tag=weaponaction_sweep> cost reduction

## weapons.json
- **Total entries:** 124
- **Missing `id`:** 0/124 (0.0%)
- **Missing `name`:** 0/124 (0.0%)
- **Missing `description`:** 117/124 (94.4%)
- **Missing `type`:** 124/124 (100.0%)
- **Missing `source_file`:** 0/124 (0.0%)
- **Missing `stats`:** 0/124 (0.0%)
- **Missing `skills`:** 0/124 (0.0%)
- **Missing `upgrades`:** 0/124 (0.0%)
- **Duplicate names (case-insensitive):** quarterstaff

## Summary
- **Total files:** 7
- **Total entries across all files:** 722
- **Image assets:** Deferred to Phase 2 (Unity .assets bundles need AssetStudio)
- **Stat data:** Not available in localization extraction (needs Assembly-CSharp.dll decompilation)
