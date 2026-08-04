# Strategy Content Audit

Date: 2026-08-04  
Scope: existing Strategy Content Layer, extracted game data, asset index, and configured videos.

Editorial sections in this audit are explicitly **Editorial strategy based on verified game data**. Names, chapters, dialogue, skills, upgrades, and weapon tags are treated as Verified Game Data only where the extracted files or official Steam page support them. Exact damage, health, rates, drops, hitboxes, and timings remain Unknown / Unverified.

| Page | Player question | Current answer quality | Verified data available | Strategy gaps | Media available | Sources | Required changes |
|---|---|---|---|---|---|---|---|
| `/` | What should I do first? | Partial path exists | Official loop, six weapons, chapters | Make Start Here path explicit and link picker | Official home screenshot | Steam | Add four-step action path |
| `/beginner-guide/` | How do I complete a first run? | Good overview, weak decision checkpoints | Core loop, artifacts, Anvil, Destiny Inscription | Add weapon choice, build-online test, failure checklist | Official screenshot + launch trailer | Steam, TEAM HORAY | Add actionable next links |
| `/progression-guide/` | What should I prioritize? | General guidance | Destiny/progression names where extracted | Add early/mid/late decision gates | Official screenshot | Steam, extracted data | Clarify fallback route |
| `/builds/sword-and-shield/` | Why and how should I play it? | Basic role/loop | Weapon tags, named skills/upgrades | Summary, progression stages, failure modes, boss trade-offs | Shared build screenshot | Extracted data, Steam | Deepen sections and labels |
| `/builds/greatsword/` | How do I commit safely? | Basic role/loop | Weapon tags, named skills/upgrades | Same as above; heavy recovery needs concrete actions | Shared build screenshot | Extracted data, Steam | Deepen sections and labels |
| `/builds/dagger/` | How do I manage close-range risk? | Basic role/loop | Weapon tags, named skills/upgrades | Parry/resource conditions need explicit fallback | Shared build screenshot | Extracted data, Steam | Deepen sections and labels |
| `/builds/crossbow/` | How do I manage range and reloads? | Basic role/loop | Weapon tags, named skills/upgrades | Reload windows, room priorities, boss matchups | Shared build screenshot | Extracted data, Steam | Deepen sections and labels |
| `/builds/staff/` | How do I manage MP and cooldowns? | Basic role/loop | Weapon tags, named skills/upgrades | No invented spell effects; add conditional strategy | Shared build screenshot | Extracted data, Steam | Deepen sections and labels |
| `/builds/grimoire/` | How do I keep summons/control useful? | Basic role/loop | Weapon tags, named skills/upgrades | Distinguish verified names from editorial roles | Shared build screenshot | Extracted data, Steam | Deepen sections and labels |
| `/bosses/askard/` | How do I identify and answer calls? | Dialogue and recommendations exist | Chapters 2/3/5, call-outs, event count | Map each call-out to response confidence; rewards status | Existing neutral boss screenshot | Extracted BossSpeech, Steam | Add overview, cues, prep, unknown drops |
| `/bosses/mole-big-bomb/` | How do I handle the encounter? | Dialogue and tips exist | Event text and chapter markers | Visual identity and attack response not confirmed | Existing neutral boss screenshot | Extracted BossSpeech, Steam | Label unknown mechanics and drops |
| `/bosses/mad-armadillo/` | What does recovery dialogue mean? | Inference is present | Event text and chapter markers | Do not present recovery as confirmed phase | Existing neutral boss screenshot | Extracted BossSpeech, Steam | Add cue confidence and unknowns |
| `/bosses/bird-demon/` | How do I recognize aerial calls? | Dialogue and tips exist | Event text and chapter markers | Response is editorial until visual check | Existing boss screenshot | Extracted BossSpeech, Steam | Add evidence/action table |
| `/bosses/larid/` | Where is the encounter and what is known? | Sparse but honest | Four dialogue events | Need explicit unknown mechanism/reward block | Neutral screenshot only | Extracted BossSpeech, Steam | Add identification and limitations |
| `/bosses/oink-king/` | How do I survive the opener? | Sparse dialogue and tips | Three dialogue events | Avoid asserting charge as fact; label editorial | Existing boss screenshot | Extracted BossSpeech, Steam | Add evidence/action table |

## Cross-page decisions

- Build recommendations and matchup ratings are editorial, and must carry the label **Editorial strategy based on verified game data**.
- Dialogue count is an event count, never a skill or phase count.
- `enemies.json` has no verified drop field for these pages; every Boss page must state: `Verified drops are not available in the extracted data.`
- Existing boss visual mappings are name-based and not sufficient for publication. Candidate exports stay under `data-extraction/assets/review/` until visually checked.
- Existing official videos are relevant only to the pages where their configured placement answers that page's question. They must not be copied across every Boss page.

