// Weapon profiles for BuildPicker — derived from extracted game data.
// Tags describe weapon identity; not subjective rankings.

export interface WeaponProfile {
  id: string;
  family: string;
  tags: string[];
}

export const weaponProfiles: WeaponProfile[] = [
  { id: "swordShield", family: "Sword and Shield", tags: ["defensive", "block", "perfect-guard", "short-range", "low-entry"] },
  { id: "greatsword", family: "Greatsword", tags: ["slow-heavy", "wide-arc", "interrupt", "mid-range-melee", "commit"] },
  { id: "dagger", family: "Dagger", tags: ["fast", "close-range", "parry", "multi-hit", "high-mobility", "high-risk"] },
  { id: "crossbow", family: "Crossbow", tags: ["ranged", "magazine", "safe-distance", "reload", "branch-options"] },
  { id: "staff", family: "Staff", tags: ["magic-ranged", "mp", "cooldown", "burst", "projectile"] },
  { id: "grimoire", family: "Grimoire", tags: ["magic-control", "spell-rotation", "mp-hungry", "cooldown-reduction", "control"] },
];
