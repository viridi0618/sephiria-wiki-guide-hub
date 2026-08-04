import { make } from "./content-helpers";

const steamSource = {
  label: "Sephiria on Steam",
  url: "https://store.steampowered.com/app/2436940/Sephiria/",
  level: "Official" as const,
  lastChecked: "2026-08-04",
};

const outdatedSteamGuideSource = {
  label: "Steam Community Guide for Sephiria (outdated, earlier game version)",
  url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3474238982",
  level: "Community" as const,
  lastChecked: "2026-08-04",
  note: "Outdated community guide for an earlier game version. Use only for historical system names and old-version reference, not for current builds, numbers, bosses, or multiplayer rules.",
};

const invenReleaseSource = {
  label: "Sephiria full release report (INVEN Global, EN)",
  url: "https://labs.invenglobal.com/articles/24352/enjoying-the-movie-odyssey-then-its-time-to-play-assassins-creed-odyssey",
  level: "Media" as const,
  lastChecked: "2026-08-04",
  note: "English media report on the full release and feature summary.",
};

const version = "1.0";
const platforms = "PC (Windows, macOS)";
const informationType = "Editorial guide with official game facts";

export const systemPages = [
  make({
    path: "weapons-guide",
    title: "Weapons Guide",
    h1: "Sephiria Weapons Guide",
    eyebrow: "CHOOSE YOUR RHYTHM",
    description:
      "Compare Sephiria's six weapon families — Sword and Shield, Greatsword, Dagger, Crossbow, Staff, and Grimoire — by range, rhythm, and survival.",
    answer:
      "Sephiria has six weapon families: Sword and Shield (defensive), Greatsword (slow, heavy hits), Dagger (fast, close-range), Crossbow (ranged), Staff (magic projectiles), and Grimoire (spell rotation). The Steam store describes each weapon family as having more than 50 upgrades. Choose by the combat rhythm you enjoy and the distance you prefer to fight at.",
    category: "Gameplay",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-weapons.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing grassland combat and a weapon attack arc.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Six Weapon Families",
        paragraphs: [
          "Sephiria features six weapon families, each with a distinct combat identity. The Steam store describes each weapon family as having more than 50 upgrades. Your choice of weapon family defines your attack range, movement rhythm, defensive options, and the types of artifacts and tablets that will synergize with your build.",
          "Weapon choice shapes every subsequent choice — which modifications you want at the Anvil, which artifacts matter, and how you approach boss fights. Switching weapon families between runs is encouraged, but within a single run, committing to one family and learning its upgrade paths yields better results than spreading investments thin.",
        ],
      },
      {
        heading: "Weapon Family Comparison",
        paragraphs: [
          "The table below compares the six weapon families across five criteria: effective range, attack rhythm, learning difficulty, survival rating, and recommended player type. These assessments are editorial and community views; no official cross-weapon ratings are published.",
        ],
        table: {
          headers: ["Weapon Family", "Range", "Rhythm", "Difficulty (community)", "Survival (community)", "Best For"],
          rows: [
            ["Sword and Shield", "Medium", "Balanced, defensive", "Low", "High", "Beginners, defensive players"],
            ["Greatsword", "Long", "Slow, deliberate", "Medium", "Medium", "Patient, positional players"],
            ["Dagger", "Short", "Fast, frantic", "High", "Low", "Aggressive, reflex-heavy players"],
            ["Crossbow", "Long (ranged)", "Steady, magazine-based", "Medium", "High", "Tactical, ranged-preference players"],
            ["Staff", "Medium (ranged)", "Cooldown-based", "High", "Medium", "Experienced magic players"],
            ["Grimoire", "Variable", "Rotation-based", "Unverified", "Unverified", "Advanced build crafters"],
          ],
        },
        note: "Difficulty and survival ratings are community assessments; no official ratings are published.",
      },
      {
        heading: "Choosing Your First Weapon",
        paragraphs: [
          "The Sword and Shield is commonly recommended as the strongest starting choice for new players. It offers a balance of offense and defense, with a block that provides a safety net when you misread an enemy attack. Its medium range means you are always close enough to punish but not so close that you cannot retreat.",
          "The Crossbow is an alternative starter for players who prefer ranged combat. It lets you deal damage from a safe distance and control engagement timing. However, it requires reload awareness, and its close-range options are limited if enemies close the gap. Pair it with movement-focused artifacts to maintain distance.",
          "Many players find the Dagger, Staff, and Grimoire harder to start with. The Dagger demands tight positioning and reflexes with low margin for error. The Staff and Grimoire require understanding projectile behavior, cooldowns, and spell rotations. Return to these once you are comfortable with the core loop.",
        ],
      },
      {
        heading: "Weapon Upgrade Paths",
        paragraphs: [
          "The Anvil provides weapon-family upgrade choices during runs. Exact effects vary and should be checked in the current version. The Steam store describes each weapon family as having more than 50 upgrades, so the offerings vary significantly from run to run.",
          "Because the offerings vary, you will not see the same upgrade sequence every run. The key is to identify an upgrade direction early and then take upgrades that reinforce that direction.",
          "Enchantment is used for artifact enhancement, complementing the Anvil's weapon modifications.",
        ],
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource],
    related: ["builds", "beginner-guide", "boss-guide", "upgrade-guide"],
  }),

  make({
    path: "destiny-tree-guide",
    title: "Destiny Tree Guide",
    h1: "Sephiria Destiny Inscription Guide",
    eyebrow: "PRIORITIZE THE PATH",
    description:
      "Understand Sephiria's Destiny Inscription — the permanent progression system — and what is not officially documented.",
    answer:
      "The Destiny Inscription is Sephiria's permanent progression system, unlocked with the progression currency earned from runs. Nodes provide permanent bonuses that carry into future runs. Exact node effects, costs, unlock conditions, layout, and optimal routes should be checked in the current version.",
    category: "Systems",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-destiny.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing a library scene with a staff weapon.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "What Is the Destiny Inscription?",
        paragraphs: [
          "The Destiny Inscription is Sephiria's permanent progression system. Unlike in-run upgrades that reset when a run ends, Destiny Inscription nodes provide permanent bonuses that apply to every subsequent run. This is where your long-term power growth lives.",
          "The system is accessed from Bunnyville between runs. Every visit is an opportunity to assess your current state, decide on the next node, and spend accumulated progression currency.",
        ],
      },
      {
        heading: "What Is Confirmed?",
        paragraphs: [
          "The Destiny Inscription is Sephiria's permanent progression system.",
          "Progression currency is used within the Destiny Inscription.",
          "Nodes are unlocked using progression currency earned from runs.",
        ],
      },
      {
        heading: "What Is Not Officially Documented?",
        paragraphs: [
          "Exact node effects, costs, unlock conditions, layout, and optimal routes are not published in official materials.",
          "Official documentation does not publish a full node list, so specific node categories, vendor unlocks, and starting-weapon options are not stated here.",
        ],
      },
      {
        heading: "How to Verify It in the Current Version",
        paragraphs: [
          "Because the details are not officially documented, confirm node effects, costs, and routes in the current version before treating them as fact.",
          "The core system is confirmed: the Destiny Inscription is the permanent progression system, and progression currency is used within it. Beyond that, check the current version.",
        ],
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource, invenReleaseSource],
    related: ["progression-guide", "upgrade-guide", "builds", "beginner-guide"],
  }),

  make({
    path: "upgrade-guide",
    title: "Upgrade Guide",
    h1: "Sephiria In-Run Upgrade Guide",
    eyebrow: "INVEST WITH A REASON",
    description:
      "Understand Sephiria's in-run upgrade systems: artifacts, tablets, the Anvil for weapon modification, and Enchantment for artifact enhancement.",
    answer:
      "Sephiria's in-run upgrade systems include artifacts and tablets, weapon modification at the Anvil, and artifact enhancement through Enchantment. Exact upgrade pools, costs, timing priorities, slot rules, and interaction details should be checked in the current version. Always choose upgrades that reinforce a single coherent direction.",
    category: "Systems",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-upgrade.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing a workshop with weapon customization.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "The In-Run Upgrade Systems",
        paragraphs: [
          "During a single run in Sephiria, your character grows through interconnected upgrade systems. The confirmed systems are: artifacts and tablets as part of the in-run build system, the Anvil for weapon modification or weapon upgrades, and Enchantment for artifact enhancement.",
          "Each system is encountered organically as you progress through the tower. The order in which you engage with them matters, but exact timing priorities are not officially documented.",
          "The guiding principle throughout is coherence: every upgrade should either reinforce your current direction or fix a specific weakness. Avoid taking an upgrade simply because it is available.",
        ],
      },
      {
        heading: "Artifacts and Tablets",
        paragraphs: [
          "Artifacts and tablets are part of the in-run build system. They provide passive and specialized enhancements that shape your run.",
          "Exact acquisition sources, slot rules, and interaction details should be checked in the current version.",
        ],
      },
      {
        heading: "Anvil: Weapon Modification",
        paragraphs: [
          "The Anvil is used for weapon modification or weapon upgrades during a run. The Steam store describes each weapon family as having more than 50 upgrades, so the offerings vary significantly from run to run.",
          "The key decision at each Anvil visit is whether the offered upgrades reinforce your current build direction. Exact effects and costs should be checked in the current version.",
        ],
      },
      {
        heading: "Enchantment: Artifact Enhancement",
        paragraphs: [
          "Enchantment is used for artifact enhancement. It complements the Anvil's weapon modifications by strengthening the artifacts that support your build.",
          "Exact upgrade pools, costs, and timing priorities should be checked in the current version.",
        ],
      },
      {
        heading: "Additional Options",
        paragraphs: [
          "Community guides describe additional run systems, but their exact rules are not published in official materials. Use them as reported by community players and confirm the behavior in the current version.",
          "The confirmed core is: artifacts and tablets as part of the in-run build system, the Anvil for weapon modification, and Enchantment for artifact enhancement. Anything beyond that should be verified in-game.",
        ],
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource],
    related: ["progression-guide", "destiny-tree-guide", "builds", "weapons-guide"],
  }),
];
