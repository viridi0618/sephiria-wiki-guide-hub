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

const v1AnnouncementSource = {
  label: "Sephiria 1.0 Launch Announcement (17173)",
  url: "http://news.17173.com/content/07312026/231256229.shtml",
  level: "Media" as const,
  lastChecked: "2026-08-04",
  note: "Used for release timing and announcement context only.",
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
      "Sephiria has six weapon families: Sword and Shield (defensive), Greatsword (slow, heavy hits), Dagger (fast, close-range), Crossbow (ranged), Staff (magic projectiles), and Grimoire (spell rotation). The Steam store confirms each has more than 50 upgrades. Choose by the combat rhythm you enjoy and the distance you prefer to fight at.",
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
          "Each weapon family has more than 50 possible upgrades, offered through the Anvil during runs. The Anvil presents a selection of upgrades when you interact with it, and you choose which to apply. The Steam store describes each weapon family as having more than 50 upgrades.",
          "Because the offerings vary, you will not see the same upgrade sequence every run. The key is to identify an upgrade direction early — for example, prioritizing attack speed on the Dagger, or heavy single-hit damage and reach on the Greatsword — and then take upgrades that reinforce that direction.",
          "Enchantment is used for artifact enhancement, complementing the Anvil's weapon modifications. Prioritize a clear weapon direction first, then use Enchantment to amplify the build you have committed to.",
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
      "Understand Sephiria's Destiny Inscription — the permanent progression system — and what to verify in the current version.",
    answer:
      "The Destiny Inscription is Sephiria's permanent progression system, unlocked with the progression currency earned from runs. Nodes provide permanent bonuses that carry into future runs. Exact node effects and optimal routes should be checked in the current version. Prioritize survival upgrades first, then build-enabling options.",
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
          "Exact node effects, costs, and optimal routes should be checked in the current version, as official documentation does not publish a full node list.",
        ],
      },
      {
        heading: "Earning Progression Currency",
        paragraphs: [
          "Progression currency is used to unlock Destiny Inscription nodes and is earned through runs. Exact rules for how much is awarded per boss, per run, or in co-op are not published in official materials and should be verified in the current version.",
          "Do not assume failed runs always grant currency or that specific sources award fixed amounts. Treat any specific economy figures as unverified until confirmed in-game.",
        ],
      },
      {
        heading: "Prioritizing Upgrades",
        paragraphs: [
          "For your first runs, direct currency toward survivability-focused upgrades: maximum health and healing efficiency. These reduce the frequency of early deaths and give you more time per run to learn enemy patterns and weapon mechanics.",
          "Once you can consistently reach the middle chapters, start expanding your options: more bag capacity and additional starting weapon options. These do not directly increase survivability but they expand the range of strategies you can execute.",
          "Resist the urge to spread currency thinly across the system. Concentrating on a cluster of related upgrades creates a more noticeable power spike than scattering points across unrelated branches.",
        ],
      },
      {
        heading: "What to Verify in the Current Version",
        paragraphs: [
          "Specific node categories, unlock conditions, vendor unlocks, and side-bag recommendations are not published in official materials. Confirm them in the current version before treating them as fact.",
          "The core system is confirmed: the Destiny Inscription is the permanent progression system, and progression currency is used within it. Beyond that, check the current version.",
        ],
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource, v1AnnouncementSource],
    related: ["progression-guide", "upgrade-guide", "builds", "beginner-guide"],
  }),

  make({
    path: "upgrade-guide",
    title: "Upgrade Guide",
    h1: "Sephiria In-Run Upgrade Guide",
    eyebrow: "INVEST WITH A REASON",
    description:
      "Master Sephiria's in-run upgrade flow: artifact acquisition, tablet reinforcement, Anvil weapon modification, and Enchantment artifact enhancement.",
    answer:
      "Sephiria's in-run upgrade flow includes acquiring artifacts from rooms and enemies, reinforcing with tablets, modifying weapons at the Anvil, and enhancing artifacts through Enchantment. Each stage reinforces the others — your artifact picks shape Anvil priorities. Always choose upgrades that reinforce a single coherent direction.",
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
        heading: "The In-Run Upgrade Flow",
        paragraphs: [
          "During a single run in Sephiria, your character grows through a sequence of interconnected upgrade systems. The main confirmed systems are: artifact acquisition, tablet reinforcement, Anvil weapon modification, and Enchantment artifact enhancement.",
          "Each stage is not strictly sequential — you encounter them organically as you progress through the tower. However, the order in which you engage with them matters. Artifacts and tablets form the foundation of your build; the Anvil and Enchantment amplify it.",
          "The guiding principle throughout is coherence: every upgrade should either reinforce your current direction or fix a specific weakness. Avoid taking an upgrade simply because it is available.",
        ],
      },
      {
        heading: "Artifacts: Acquisition and Placement",
        paragraphs: [
          "Artifacts are passive bonuses acquired from rooms, enemies, and chests during a run. Each artifact provides a specific passive effect — increased damage, health, movement speed, cooldown reduction, or more specialized bonuses.",
          "Artifacts are placed in artifact slots, and the number of available slots can be increased through Destiny Inscription permanent upgrades. This means your meta-progression directly affects how many artifacts you can equip in a run.",
          "When choosing between artifact offerings, prioritize foundational stats early — health, defense, and damage — before chasing specialized synergies.",
        ],
      },
      {
        heading: "Tablets: Reinforcement",
        paragraphs: [
          "Tablets are the second layer of passive upgrades, placed alongside artifacts. They tend to offer more specialized or conditional enhancements. A tablet might boost a specific damage type, enhance a particular weapon family, or provide bonuses under specific conditions.",
          "Tablets are best chosen after you have a clear build direction. Early in a run, when your artifact picks are still forming your identity, tablet choices are harder to evaluate.",
          "Do not feel obligated to fill every tablet slot immediately. An empty slot costs nothing; a wasted slot that provides a bonus you cannot use is an opportunity cost.",
        ],
      },
      {
        heading: "Anvil: Weapon Modification",
        paragraphs: [
          "The Anvil is where you modify your weapon during a run. When you interact with an Anvil, you are presented with a selection of upgrade options specific to your current weapon family. The Steam store confirms each weapon family has more than 50 upgrades, so the offerings vary significantly from run to run.",
          "Anvil upgrades can change attack speed, add elemental effects, introduce new attack patterns, extend range, or enhance defensive properties. The key decision at each Anvil visit is whether the offered upgrades reinforce your current build direction.",
          "Prioritize Anvil upgrades that create synergy with your artifacts and tablets. Think of the Anvil as the point where your passive build (artifacts and tablets) meets your active combat style (weapon upgrades).",
        ],
      },
      {
        heading: "Enchantment: Artifact Enhancement",
        paragraphs: [
          "Enchantment is used for artifact enhancement. It complements the Anvil's weapon modifications by strengthening the artifacts that support your build.",
          "Because artifact enhancement amplifies everything else, it is best used after you have committed to a build direction. Wait until you are confident in your weapon and artifact loadout before spending resources on Enchantment.",
          "If you have a choice between an Anvil upgrade and Enchantment, consider the state of your build. Early in a run, Anvil upgrades that shape your direction are often more valuable. Later, when your build is established, artifact enhancement provides a larger effective power increase.",
        ],
      },
      {
        heading: "Additional Options",
        paragraphs: [
          "Community guides describe additional run systems such as item conversion and special room bonuses, but their exact rules are not published in official materials. Use them as reported by community players and confirm the behavior in the current version.",
          "The confirmed core is: artifacts, tablets, the Anvil for weapon modification, and Enchantment for artifact enhancement. Anything beyond that should be verified in-game.",
        ],
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource],
    related: ["progression-guide", "destiny-tree-guide", "builds", "weapons-guide"],
  }),
];
