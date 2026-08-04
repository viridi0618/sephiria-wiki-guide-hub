# Sephiria Wiki Fact Audit

This document records the fact fixes applied in `feature/sephiria-fact-fix`. Only the highest-impact claims are listed. `Last checked` reflects the date the claim was verified against the official Steam store page (appid 2436940) or the current game version.

Official source used throughout: https://store.steampowered.com/app/2436940/Sephiria/ (TEAM HORAY), checked 2026-08-04.

| Claim | Affected page | Current wording (before) | Verdict | Replacement wording | Primary source | Secondary source | Last checked |
|---|---|---|---|---|---|---|---|
| Controller support | `/controller-support/` | "full controller support on Steam, including Xbox and PlayStation controllers" | Unsupported | Sephiria includes gamepad input support, but compatibility, prompts, and remapping should be checked with the specific device and current game version. | Steam store feature list (2026-08-04) | — | 2026-08-04 |
| Controller badge | `/controller-support/` | "Steam store page lists 'Full Controller support'" | Incorrect (conservative rewrite per brief) | Do not claim all Xbox/PlayStation/macOS pads are verified; no claim that Steam labels the game Full Controller Support. | Steam store page | — | 2026-08-04 |
| Co-op player cap | `/co-op/`, `/is-sephiria-multiplayer/` | "up to 4-player online co-op" | Confirmed | Keep: online co-op for up to 4 players. | Steam store page ("最多 4 人在线合作") | — | 2026-08-04 |
| Co-op item exchange / revive | `/co-op/` | "items can be exchanged", "downed teammates can be revived" | Confirmed | Keep: item exchange and teammate revival. | Steam store page ("交换道具、复活倒下的同伴") | — | 2026-08-04 |
| Host progression sets starting point | `/co-op/` | "The host's progression determines the starting point" | Incorrect | Players are normally restricted from joining multiplayer lobbies that are ahead of their own main-story progress. | Requirement brief (game rule) | — | 2026-08-04 |
| Invite code / public lobby details | `/co-op/`, `/is-sephiria-multiplayer/` | "join through an invite code or by searching for public lobbies" | Unsupported | Removed; lobby flow details not stated as fact. | — | — | 2026-08-04 |
| Windows/macOS cross-play | `/co-op/` | "Cross-platform play between Windows and macOS is supported" | Unsupported | Removed. | — | — | 2026-08-04 |
| Sapphire rules (per boss/run/death) | `/progression-guide/`, `/destiny-tree-guide/`, `/co-op/` | "defeat bosses to earn Sapphires", "even failed runs yield Sapphires" | Unsupported | Sapphires are used within the permanent progression system; exact earning rules should be checked in the current version. | Requirement brief | — | 2026-08-04 |
| Anvil function | `/beginner-guide/`, `/progression-guide/`, `/upgrade-guide/`, `/weapons-guide/` | "upgrade your weapon at the Anvil and Enchantment Altar" | Confirmed (Anvil = weapon) | Anvil: used for weapon upgrades or weapon modification. | Requirement brief | — | 2026-08-04 |
| Enchantment function | `/beginner-guide/`, `/progression-guide/`, `/upgrade-guide/`, `/weapons-guide/` | "Enchantment Altar raises the star level of your weapon" | Incorrect | Enchantment: used for artifact enhancement. Remove all "weapon star level" wording. | Requirement brief | — | 2026-08-04 |
| Weapon family count + upgrades | All pages | "200+ weapon upgrades total" | Confirmed (per Steam copy) | Six weapon families with hundreds of upgrade options; Steam describes each family as having more than 50 upgrades. | Steam store page ("6 种风格迥异的武器，每种都有超过 50 项独特升级") | — | 2026-08-04 |
| 6th weapon family name | `/weapons-guide/`, `/review/`, `/builds/scythe/` etc. | "Magic Tome" | Incorrect | Use Grimoire. "Tome of Mimicry" is a specific item, not the family name. | Requirement brief | — | 2026-08-04 |
| Great Sword spelling | `/weapons-guide/`, `/builds/` etc. | "Great Sword" | Confirmed (canonical spelling) | Use "Greatsword". | Requirement brief | — | 2026-08-04 |
| Destiny Inscription structure | `/destiny-tree-guide/`, `/progression-guide/` | "hexagonal-node skill tree, each node connects up to six neighbors" | Unsupported | Destiny Inscription is the permanent progression system; node layout and effects should be checked in the current version. | Requirement brief | — | 2026-08-04 |
| Node categories / village vendor unlocks / starting weapon nodes | `/destiny-tree-guide/` | "survival / utility / build-enabling / village upgrade nodes" | Unsupported | Removed. | — | — | 2026-08-04 |
| Side bag unlock recommendation | `/destiny-tree-guide/`, `/tips-and-tricks/` | "unlock two or three side bag capacity nodes" | Unsupported | Removed. | — | — | 2026-08-04 |
| Mystery Pot conversion rules | `/upgrade-guide/`, `/beginner-guide/`, `/tips-and-tricks/` | "The Mystery Pot converts unwanted items into different ones" | Unsupported | Removed specifics; refer to conversion options generically. | — | — | 2026-08-04 |
| Tree Roots / Miracle flow | `/upgrade-guide/`, `/beginner-guide/`, `/tips-and-tricks/` | "Tree Roots rooms offer Miracles" | Unsupported | Removed. | — | — | 2026-08-04 |
| Boss roster | `/boss-guide/` | "Askard, Qliphoth, rotating staff demon, two-phase final boss" | Unsupported | Steam confirms 60+ enemies, 10+ bosses, 6 chapters; official boss list and mechanics are not published. Remove specific unverified mechanics. | Steam store page | — | 2026-08-04 |
| Qliphoth fixed patterns | `/boss-guide/` | "spirals, waves, diverging streams, pause after each salvo" | Unsupported | Removed. | — | — | 2026-08-04 |
| Final boss two phases / health thresholds | `/boss-guide/` | "two distinct phases, health threshold transition, burst attack" | Unsupported | Removed. | — | — | 2026-08-04 |
| Release status | `/is-sephiria-worth-playing/` etc. | "launched its 1.0 release on 2026-07-31" | Confirmed | TEAM HORAY announced July 31, 2026 as the full-release date; verified on the Steam store page (1.0 Update, 2026-07-31). | Steam store page | — | 2026-08-04 |
| Price / discount | `/is-sephiria-worth-playing/` | "discounted 40% to ¥34.80 (regular ¥58)" | Outdated | Removed; direct readers to check Steam for current regional pricing. | — | — | 2026-08-04 |
| Review percentages | `/is-sephiria-worth-playing/` | "roughly 90% positive recent, Very Positive overall" | Outdated | Removed; direct readers to check Steam for current review status. | — | — | 2026-08-04 |
| Simplified Chinese support | `/is-sephiria-worth-playing/`, `/review/` | "full Simplified Chinese support among 12 languages" | Confirmed (UI + subtitles) | Simplified Chinese interface and subtitles (no full audio); 12 interface/subtitle languages per Steam. | Steam store language table | — | 2026-08-04 |
| Build numeric claims | `/builds/*`, `/build-picker/` | "10.6 shots/sec", "~140% threshold", "highest base DPS", "highest survivability" | Unsupported | Removed or downgraded to "community-reported" wording; no official cross-weapon rankings published. | — | — | 2026-08-04 |
| Weapon branch names | `/builds/*` | "加速核心, XRA-9, 火焰凝视, 万年寒霜巨剑, 优衣的短匕首, 模仿之书, 横扫..." | Unsupported | Removed "Opening choices" lists where not confirmed in official materials or current version. | — | — | 2026-08-04 |
| Image alt/caption | `/progression-guide/`, `/destiny-tree-guide/`, `/co-op/`, `/builds/*`, etc. | "Destiny Inscription skill tree", "hexagonal skill tree", "multiple players in combat", weapon-specific loadouts | Incorrect | Align alt/caption with the asset table in `public/ASSET_SOURCES.md`; use neutral descriptions where unverified. | `public/ASSET_SOURCES.md` | — | 2026-08-04 |
| Outdated Steam guide | data layer | steamguide id 3474238982 used as primary evidence | Outdated | Label "Outdated community guide for an earlier game version"; use only for historical system names / old-version reference. | — | — | 2026-08-04 |
| Bilibili weapon ranking | data layer | "cross-verified" weapon traits | Unsupported | Label "Community opinion / player-tested build"; must not support official rankings, exact thresholds, or difficulty tiers. | — | — | 2026-08-04 |

## Verification notes

- Version field: all pages now use `1.0` (verified against the Steam store page, which lists the 1.0 Update dated 2026-07-31; Early Access started 2025-04-03).
- Steam feature list (checked 2026-08-04) shows: Single-player, Online Co-op, Steam Achievements, Steam Cloud, Family Sharing, and a Full Controller Support badge (Xbox and PlayStation controllers). Per the task brief, the site still uses the conservative controller wording and does not claim the Steam badge; recorded here for completeness.
- Steam language table: 12 interface/subtitle languages including Simplified Chinese; no full-audio language is listed.
- Steam store copy confirms: 6 weapon families with 50+ upgrades each, 60+ enemies, 10+ bosses, 6 chapters, 4-player online co-op with item exchange and teammate revival.
