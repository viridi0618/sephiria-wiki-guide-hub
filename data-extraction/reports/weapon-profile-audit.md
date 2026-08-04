# Weapon Profile Audit

**Date:** 2026-08-04
**Source:** Extracted game data (en-US.json, 6,507 keys)

## Tag Evidence Map

### Dagger
| Tag | Evidence |
|-----|----------|
| fast | Weapon description: "multi-hit fast attacker" |
| close-range | Weapon description: "close-range multi-hit" |
| parry | localisation: "Parry refunds MP" (Skill mechanic) |
| multi-hit | Weapon description: "multi-hit" |
| mp-refund | localisation: "Parry refunds MP, converting defense into resource" |
| high-mobility | Derived from fast attack style + parry mobility design |

### Sword and Shield
| Tag | Evidence |
|-----|----------|
| defensive | Weapon description: "defensive weapon family" |
| block | Weapon description: "hold shield to block while moving" |
| perfect-guard | Weapon description: "perfect guard opens counter-attack window" |
| short-range | Weapon description: "short-range engagement" |
| counter | Weapon description: "counter-attack" |

### Greatsword
| Tag | Evidence |
|-----|----------|
| slow-heavy | Weapon description: "slow heavy melee family" |
| wide-arc | Weapon description: "wide-arc hit area" |
| interrupt | Weapon description: "strong interrupts" |
| mid-range-melee | Weapon description: "melee" with reach advantage |
| committed-swings | Weapon description: "each swing is a commitment with long recovery" |

### Crossbow
| Tag | Evidence |
|-----|----------|
| ranged | Weapon type: "ranged weapon family" |
| magazine-based | Weapon description: "magazine-based combat" |
| safe-distance | Derived from ranged playstyle design |
| reload-management | Weapon description: "reload is a decision" |
| sustained-or-burst | localisation: "branch choices range from sustained fire-rate to slow high-damage" |

### Staff
| Tag | Evidence |
|-----|----------|
| magic-ranged | Weapon type: "ranged caster family" |
| mp-and-cooldown | Weapon description: "MP and cooldown-gated specials" |
| burst | derived: high-damage specials |
| projectile | Combat style: magic projectiles |
| caster | Weapon type classification |

### Grimoire
| Tag | Evidence |
|-----|----------|
| magic-control | Weapon description: "mid-range magic projectile family" |
| spell-rotation | localisation: "built around spell rotations" |
| mp-hungry | localisation: "MP-cost caster" |
| cooldown-reduction | localisation: "cooldown reduction" |
| control | Derived from spell-rotation control style |

## Difficulty Assessment Source

| Weapon | Difficulty | Evidence |
|--------|-----------|----------|
| Sword and Shield | low | Community: "most forgiving family" |
| Greatsword | mid | Community: "mid-difficulty" |
| Dagger | high | Community: "highest-difficulty family" |
| Crossbow | mid | Community: "mid-difficulty" |
| Staff | mid | Community: "mid-difficulty" |
| Grimoire | unverified | localisation: "mechanics not yet well documented" |

## Playstyle Source

| Weapon | Playstyle | Evidence |
|--------|-----------|----------|
| Dagger | aggressive, mechanical, fast-reactions | High-skill parry timing demands |
| Sword and Shield | defensive, reactive | Counter-based reactive combat loop |
| Greatsword | deliberate, positional | Commit-and-reposition rhythm |
| Crossbow | tactical, spacing | Magazine management + range |
| Staff | caster, cooldown-management | MP and cooldown-gated |
| Grimoire | rotation-based, planning | Spell rotation + cooldown |
