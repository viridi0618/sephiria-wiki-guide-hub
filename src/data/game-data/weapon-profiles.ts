// Weapon profiles for BuildPicker — derived from extracted game data descriptors.
// All tags come from weapon descriptions, skill names, or upgrade flavor text.

export interface WeaponProfile {
  id: string;
  family: string;
  tags: string[];
  difficulty: "low" | "mid" | "high" | "unverified";
  playstyles: string[];
}

export const weaponProfiles: WeaponProfile[] = [
  {
    id: "swordShield",
    family: "Sword and Shield",
    tags: ["defensive", "block", "perfect-guard", "short-range", "counter"],
    difficulty: "low",
    playstyles: ["defensive", "reactive"],
  },
  {
    id: "greatsword",
    family: "Greatsword",
    tags: ["slow-heavy", "wide-arc", "interrupt", "mid-range-melee", "committed-swings"],
    difficulty: "mid",
    playstyles: ["deliberate", "positional"],
  },
  {
    id: "dagger",
    family: "Dagger",
    tags: ["fast", "close-range", "parry", "multi-hit", "mp-refund", "high-mobility"],
    difficulty: "high",
    playstyles: ["aggressive", "mechanical", "fast-reactions"],
  },
  {
    id: "crossbow",
    family: "Crossbow",
    tags: ["ranged", "magazine-based", "safe-distance", "reload-management", "sustained-or-burst"],
    difficulty: "mid",
    playstyles: ["tactical", "spacing"],
  },
  {
    id: "staff",
    family: "Staff",
    tags: ["magic-ranged", "mp-and-cooldown", "burst", "projectile", "caster"],
    difficulty: "mid",
    playstyles: ["caster", "cooldown-management"],
  },
  {
    id: "grimoire",
    family: "Grimoire",
    tags: ["magic-control", "spell-rotation", "mp-hungry", "cooldown-reduction", "control"],
    difficulty: "unverified",
    playstyles: ["rotation-based", "planning"],
  },
];
