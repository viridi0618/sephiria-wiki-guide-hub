# Sephiria Visual Layer Report

Date: 2026-08-04
Branch: feature/sephiria-visual-layer

## Scope

This pass upgrades the guide experience from text-only strategy pages toward a visual entity layer. It keeps existing TDH, canonical, URL, redirect, and sitemap behavior unchanged.

## Exported Assets

- Boss assets published to `public/assets/bosses/`: 0
- Weapon assets published to `public/assets/weapons/`: 0
- Skill assets published to `public/assets/skills/`: 0
- Upgrade / item assets published: 0

Reason: `E:\Sephiria` is available and the existing `asset-index.json` identifies Unity asset candidates, but the current environment does not have UnityPy or AssetStudio available for controlled sprite export. Existing tiny files under `public/images/bosses/` were visually checked and are not suitable as published entity art. Name matching remains insufficient for publication.

## New Components

- `src/components/game/GameEntityIcon.tsx`
- `src/components/game/EntityLink.tsx`
- `src/components/game/BossCard.tsx`
- `src/components/game/WeaponCard.tsx`
- `src/components/game/SkillCard.tsx`
- `src/components/game/UpgradeCard.tsx`
- `src/components/game/MediaHero.tsx`

## Pages Visually Upgraded

- `/`
- `/builds/`
- `/builds/sword-and-shield/`
- `/builds/greatsword/`
- `/builds/dagger/`
- `/builds/crossbow/`
- `/builds/staff/`
- `/builds/grimoire/`
- `/boss-guide/`
- `/bosses/askard/`
- `/bosses/mole-big-bomb/`
- `/bosses/mad-armadillo/`
- `/bosses/bird-demon/`
- `/bosses/larid/`
- `/bosses/oink-king/`

## Video Integration

- Beginner Guide uses the official TEAM HORAY 1.0 Launch Trailer as `featuredVideo`.
- Review uses the official TEAM HORAY Early Access Trailer as `featuredVideo`.
- No boss-specific or build-specific video was added because no verified specific fight or weapon showcase video was available in the current data.

## Unconfirmed Assets

- Askard / DemonBoss candidates: name-matched only, not published.
- Mole Big Bomb / MoleBombBoss candidates: name-matched only, not published.
- Mad Armadillo candidates: no reliable candidate in current index.
- Bird Demon / DemonBoss candidates: name overlap with Askard candidates, not published.
- Larid candidates: no reliable candidate in current index.
- Oink King / OinkBoss candidates: mostly effect-like candidates, not published.
- Weapon candidates for Sword and Shield, Greatsword, Dagger, Crossbow, Staff, and Grimoire: not exported or visually verified.

## Validation

Passed locally on 2026-08-04:

- `npm run lint` (passed with 7 pre-existing warnings)
- `npm run typecheck`
- `npm run build` (39 static pages)
- `npm run verify`
- `npm run check:ia`
- `npm run check:build-data`
- `npm run check:strategy-depth`
- `npm run check:media`
