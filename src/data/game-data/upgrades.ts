// Generated from data-extraction/output/upgrades.json

export interface UpgradeData {
  id: string;
  name: string | null;
  description: string | null;
}

export const upgrades: UpgradeData[] = [
  {
    "id": "6thDegreeShieldTrainingCertificate",
    "name": "6th Batch: Shield Training Certificate",
    "description": "Increases block durability resistance."
  },
  {
    "id": "AppleJuice",
    "name": "Apple Juice",
    "description": "Temporarily regenerates health."
  },
  {
    "id": "Cushion",
    "name": "Slim Cushion",
    "description": "Increases <tag=MoveSpeed>."
  },
  {
    "id": "DaggerDashAttack",
    "name": "Bushwhack",
    "description": "Increases <tag=BasicAttackDamage> and <tag=DashAttackDamage>."
  },
  {
    "id": "FinalDamage_PerfectGuard",
    "name": "Toughness",
    "description": "Increases <tag=FinalDamage>."
  },
  {
    "id": "FluorescentCharm",
    "name": "Radiating Charm",
    "description": "Increases <tag=PhysicalDamage>."
  },
  {
    "id": "GreenGear",
    "name": "Green Sawblade",
    "description": "Increases <tag=CriticalChance>."
  },
  {
    "id": "Haste",
    "name": null,
    "description": "Increases <tag=AttackSpeed> and <tag=MoveSpeed>."
  },
  {
    "id": "HelenassStairwayModel",
    "name": "Helena’s Stairway Fragment",
    "description": "Increases <tag=MoveSpeed> and <tag=AttackSpeed>."
  },
  {
    "id": "IceCrossbow",
    "name": "Ice Arrow",
    "description": null
  },
  {
    "id": "Immersion",
    "name": null,
    "description": "<tag=WeaponAction_Parry> is replaced with <tag=WeaponAction_Fury>."
  },
  {
    "id": "LightningArmor",
    "name": null,
    "description": "Deals lightning damage to nearby enemies."
  },
  {
    "id": "MPPotion",
    "name": null,
    "description": "Your <tag=MP> will regenerate for a certain duration."
  },
  {
    "id": "PawWaxOfThespirit",
    "name": "Water Elemental’s Paw Wax",
    "description": "Temporarily become invincible."
  },
  {
    "id": "PawWaxOfThespirit_Interval",
    "name": null,
    "description": "The effect will not activate for a while."
  },
  {
    "id": "PointedAcorn",
    "name": "Sharp Acorn",
    "description": "Increases <tag=CriticalChance>."
  },
  {
    "id": "Rage",
    "name": "Enrage",
    "description": "Increases <tag=AttackSpeed> for a certain duration."
  },
  {
    "id": "SharpEye",
    "name": null,
    "description": "Increases <tag=CriticalChance>."
  },
  {
    "id": "SilverPlate",
    "name": "Silver Plate",
    "description": "Increases ATK."
  },
  {
    "id": "Smokescreen",
    "name": "Smoke Screen",
    "description": "The smoke helps you dodge the next 3 enemy attacks."
  },
  {
    "id": "Sober",
    "name": "Composure",
    "description": "Upon a successful <tag=WeaponAction_Guard>, recover 10% of your Guard Gauge (30% for a <tag=WeaponAction_PerfectGuard>)"
  },
  {
    "id": "Splitting",
    "name": "Split",
    "description": "Dual blades are maintained."
  },
  {
    "id": "Weapon_SweepCostReduce",
    "name": "<tag=WeaponAction_Sweep> Cost Reduction",
    "description": "Reduces the cost of <tag=WeaponAction_Sweep> by 50%"
  },
  {
    "id": "Weapon_SweepCostReduce_Free",
    "name": "<tag=WeaponAction_Sweep> Cost Reduction",
    "description": "Reduces the cost of <tag=WeaponAction_Sweep> by 100%"
  }
];

export const upgradeNames: string[] = upgrades
  .map((u) => u.name)
  .filter((n) => n !== null);
