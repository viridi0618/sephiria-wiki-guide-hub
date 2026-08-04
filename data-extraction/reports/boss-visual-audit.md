# Boss Visual Asset Audit

**Date:** 2026-08-04
**Input:** `asset-index.json` (66,948 named assets), `boss-visual-map.json`
**Method:** Name-prefix matching against Unity asset names. **No image was exported and no AI visual judgement was used.**

> ⚠️ **Key finding:** the earlier `boss-visual-map.json` mapped Askard → `DemonBoss`/Sephirite/Qliphoth.
> This audit found a **direct `Askard_*` prefix family** (752 unique visuals) which is the authoritative match.
> `DemonBoss_*` and `BirdDemon_*` are **different bosses**; `Sephirite`/Qliphoth are stage/UI elements, not Askard sprites.

## Per-boss results

| Boss | Visual prefix | Unique visuals | Idle frames | Confidence | Manual check |
|------|--------------|---------------|-------------|-----------|--------------|
| Askard | Askard_ | 663 | Askard_Fake_Attack_Ready_00, Askard_Fake_Attack_Ready_01, Askard_Fake_Attack_Ready_02, Askard_Fake_Attack_Ready_03, Askard_Fake_Attack_Ready_04 | High | No — direct name match |
| Odner (Mole Big Bomb) | MoleBombBoss, MoleBoss, MoleBigBomb | 24 | none found | Medium | Yes — pick a representative frame; check the MoleBoss* vs MoleBombBoss* distinction |
| Mad Armadillo | MadArmadillo, BigGolem | 95 | none found | Low | Yes — likely BigGolem head assets, must verify visually |
| Bird Demon | BirdDemon | 265 | BirdDemon_Idle_00, BirdDemon_Idle_01, BirdDemon_Idle_02, BirdDemon_Idle_03, BirdDemon_Idle_04 | High | No — direct name match with Idle frames |
| Larid | Larid | 0 | none found | Low | Yes — no candidates found; search FaceChip or manual gameplay capture |
| Oink King | OinkBoss | 34 | none found | Medium | Yes — boss body asset not clearly identified; may be under another prefix |

## Details

### Askard (event key: Askard)
- Matched prefixes: Askard_
- Unique visual asset names: 663
- Idle/representative frames: Askard_Fake_Attack_Ready_00, Askard_Fake_Attack_Ready_01, Askard_Fake_Attack_Ready_02, Askard_Fake_Attack_Ready_03, Askard_Fake_Attack_Ready_04
- Source bundles: sharedassets0.assets
- Chapter evidence: BossSpeech_Askard_Chapter2/3/5
- Confidence: **High**
- Reason: Direct prefix match: Askard_* assets (1509 total, 752 unique visuals) plus BossSpeech_Askard_Chapter* event keys corroborate a chapter 2/3/5 boss.
- Needs manual check: No — direct name match

### Odner (Mole Big Bomb) (event key: MoleBigBomb)
- Matched prefixes: MoleBombBoss, MoleBoss, MoleBigBomb
- Unique visual asset names: 24
- Idle/representative frames: none found — see manual check
- Source bundles: sharedassets0.assets, resources.assets
- Chapter evidence: BossSpeech_MoleBigBomb_* (23 events)
- Confidence: **Medium**
- Reason: Prefix MoleBombBoss (15 visuals) matches MoleBigBomb event key closely; no Idle frames found (only props/ground FX), so a portrait needs manual pick.
- Needs manual check: Yes — pick a representative frame; check the MoleBoss* vs MoleBombBoss* distinction

### Mad Armadillo (event key: MadArmadillo)
- Matched prefixes: MadArmadillo, BigGolem
- Unique visual asset names: 95
- Idle/representative frames: none found — see manual check
- Source bundles: sharedassets0.assets
- Chapter evidence: BossSpeech_MadArmadillo_* (13 events)
- Confidence: **Low**
- Reason: No direct MadArmadillo* visual prefix. BigGolem_Head_* portraits exist (DramaticDying) but the mapping to this boss is inference only.
- Needs manual check: Yes — likely BigGolem head assets, must verify visually

### Bird Demon (event key: BirdDemon)
- Matched prefixes: BirdDemon
- Unique visual asset names: 265
- Idle/representative frames: BirdDemon_Idle_00, BirdDemon_Idle_01, BirdDemon_Idle_02, BirdDemon_Idle_03, BirdDemon_Idle_04
- Source bundles: sharedassets0.assets
- Chapter evidence: BossSpeech_BirdDemon_* (6 events)
- Confidence: **High**
- Reason: Direct prefix match: BirdDemon_Idle_00-07 Texture2D + Sprite frames exist in sharedassets0.
- Needs manual check: No — direct name match with Idle frames

### Larid (event key: Larid)
- Matched prefixes: Larid
- Unique visual asset names: 0
- Idle/representative frames: none found — see manual check
- Source bundles: 
- Chapter evidence: BossSpeech_Larid_* (4 events)
- Confidence: **Low**
- Reason: No Larid* visual assets found in index. The boss name may map to a differently-named character set.
- Needs manual check: Yes — no candidates found; search FaceChip or manual gameplay capture

### Oink King (event key: OinkKing)
- Matched prefixes: OinkBoss
- Unique visual asset names: 34
- Idle/representative frames: none found — see manual check
- Source bundles: sharedassets0.assets
- Chapter evidence: BossSpeech_OinkKing_* (3 events)
- Confidence: **Medium**
- Reason: OinkBoss prefix (34 visuals) but all are TotemSeed FX frames, no boss body/Idle frames found. OinkBossHouse/OinkBossCallStone are stage props.
- Needs manual check: Yes — boss body asset not clearly identified; may be under another prefix

## Export plan (Phase 2 candidates)
| Boss | Candidate asset | Type | Bundle |
|---|---|---|---|
| Askard | Askard_Idle_00 (first Idle frame) | Sprite/Texture2D | sharedassets0.assets |
| BirdDemon | BirdDemon_Idle_00 | Sprite/Texture2D | sharedassets0.assets |
| MoleBigBomb | MoleBombBoss* (no idle; pick first body frame) | Texture2D | sharedassets0.assets |
| OinkKing | OinkBoss* (no idle; pick body frame) | Texture2D | sharedassets0.assets |
| MadArmadillo | BigGolem_Head_* (verify visually) | Sprite/Texture2D | sharedassets0.assets |
| Larid | none found — manual capture or FaceChip search | — | — |
