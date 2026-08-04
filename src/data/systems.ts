import { make } from "./content-helpers";

const steamSource = {
  label: "Sephiria on Steam",
  url: "https://store.steampowered.com/app/2436940/Sephiria/",
  level: "Official" as const,
  lastChecked: "2026-08-03",
};

const steamGuideSource = {
  label: "Steam Community Guide for Sephiria",
  url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3474238982",
  level: "Community" as const,
  lastChecked: "2026-08-03",
};

const v1AnnouncementSource = {
  label: "Sephiria 1.0 Launch Announcement (17173)",
  url: "http://news.17173.com/content/07312026/231256229.shtml",
  level: "Media" as const,
  lastChecked: "2026-08-03",
};

const version = "1.0 (Released 2026-07-31)";
const platforms = "PC (Windows, macOS)";
const informationType = "Editorial guide with official game facts";

export const systemPages = [
  make({
    path: "weapons-guide",
    title: "Weapons Guide",
    h1: "Sephiria Weapons Guide",
    eyebrow: "CHOOSE YOUR RHYTHM",
    description:
      "Compare Sephiria's six weapon families — Sword and Shield, Great Sword, Dagger, Crossbow, Staff, and Magic Tome — by range, rhythm, difficulty, and survival.",
    answer:
      "Sephiria has six weapon families: Sword and Shield (balanced, beginner-friendly), Great Sword (slow, heavy hits), Dagger (fast, close-range), Crossbow (ranged, tactical), Staff (magic projectiles), and Magic Tome (complex spellcasting). Each has over 50 upgrades. Choose by the combat rhythm you enjoy and the distance you prefer to fight at — survival and difficulty vary significantly between families.",
    category: "Gameplay",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-weapons.webp",
    heroImageAlt: "Sephiria weapons guide screenshot showing different weapon types in combat",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Six Weapon Families",
        paragraphs: [
          "Sephiria features six weapon families, each with a distinct combat identity and over 50 upgrade paths, totaling more than 200 weapon upgrades across the game. Your choice of weapon family defines your attack range, movement rhythm, defensive options, and the types of artifacts and tablets that will synergize with your build.",
          "Weapon choice is the single most important decision in a run, because it shapes every subsequent choice — which Anvil upgrades you want, which artifacts matter, and how you approach boss fights. Switching weapon families between runs is encouraged, but within a single run, committing to one family and learning its upgrade paths yields better results than spreading investments thin.",
        ],
      },
      {
        heading: "Weapon Family Comparison",
        paragraphs: [
          "The table below compares the six weapon families across five criteria: effective range, attack rhythm, learning difficulty, survival rating, and recommended player type. These assessments are based on the weapon families' core characteristics as described in official materials and community playthroughs.",
        ],
        table: {
          headers: ["Weapon Family", "Range", "Rhythm", "Difficulty", "Survival", "Best For"],
          rows: [
            ["Sword & Shield", "Medium", "Balanced", "Low", "High", "Beginners, defensive players"],
            ["Great Sword", "Long", "Slow, deliberate", "Medium", "Medium", "Patient, positional players"],
            ["Dagger", "Short", "Fast, frantic", "High", "Low", "Aggressive, reflex-heavy players"],
            ["Crossbow", "Long (ranged)", "Steady, tactical", "Medium", "High", "Tactical, ranged-preference players"],
            ["Staff", "Medium (ranged)", "Cooldown-based", "High", "Medium", "Experienced magic players"],
            ["Magic Tome", "Variable", "Complex, combo-based", "High", "Medium", "Advanced build crafters"],
          ],
        },
      },
      {
        heading: "Choosing Your First Weapon",
        paragraphs: [
          "The Sword and Shield is the strongest starting choice for new players. It offers a balance of offense and defense, with a block that provides a safety net when you misread an enemy attack. Its medium range means you are always close enough to punish but not so close that you cannot retreat. The upgrade paths are straightforward and reinforce a variety of playstyles.",
          "The Crossbow is an alternative starter for players who prefer ranged combat. It lets you deal damage from a safe distance and control engagement timing. However, it requires more ammunition and reload awareness, and its close-range options are limited if enemies close the gap. Pair it with movement-focused artifacts to maintain distance.",
          "Avoid the Dagger, Staff, and Magic Tome for your first several runs. The Dagger demands tight positioning and reflexes with low margin for error. The Staff and Magic Tome require understanding projectile behavior, cooldowns, and spell combinations that are overwhelming before you have a grasp of the game's fundamentals. Return to these once you are comfortable with the core loop.",
        ],
      },
      {
        heading: "Weapon Upgrade Paths",
        paragraphs: [
          "Each weapon family has over 50 possible upgrades, offered through the Anvil during runs. The Anvil presents a selection of upgrades when you interact with it, and you choose which to apply. These upgrades can modify attack speed, damage, range, add elemental effects, introduce new attack patterns, or enhance defensive capabilities.",
          "Because the offerings are semi-random, you will not see the same upgrade sequence every run. This means even if you play the same weapon family repeatedly, the specific build you create will differ. The key is to identify an upgrade direction early — for example, prioritizing attack speed and multi-hit on the Dagger, or heavy single-hit damage and reach on the Great Sword — and then take upgrades that reinforce that direction.",
          "The Enchantment Altar complements Anvil upgrades by raising the star level of your weapon, increasing its base effectiveness. Star upgrades are permanent within a run and multiply the value of your Anvil choices. Prioritize Anvil direction first, then use the Enchantment Altar to amplify the build you have committed to.",
        ],
      },
    ],
    sources: [steamSource, steamGuideSource],
    related: ["builds", "beginner-guide", "boss-guide", "upgrade-guide"],
  }),

  make({
    path: "destiny-tree-guide",
    title: "Destiny Tree Guide",
    h1: "Sephiria Destiny Inscription Guide",
    eyebrow: "PRIORITIZE THE PATH",
    description:
      "Understand Sephiria's Destiny Inscription system — how to earn Sapphires, navigate hexagonal nodes, unlock village upgrades, talents, and side bag capacity.",
    answer:
      "The Destiny Inscription is Sephiria's permanent meta-progression: a hexagonal-node skill tree unlocked with Sapphires earned from runs. Nodes provide permanent bonuses like health, artifact slots, and side bag capacity. Village upgrades unlock new talents and features. Prioritize survival nodes first, then build-enabling options. Every run — even failed ones — contributes Sapphires, so progression is continuous.",
    category: "Systems",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-destiny.webp",
    heroImageAlt: "Sephiria Destiny Inscription guide screenshot showing the hexagonal skill tree",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "What Is the Destiny Inscription?",
        paragraphs: [
          "The Destiny Inscription is Sephiria's permanent progression system, structured as a hexagonal-node skill tree. Unlike in-run upgrades that reset when a run ends, Destiny Inscription nodes provide permanent bonuses that apply to every subsequent run. This is where your long-term power growth lives — the system that turns failed runs into future advantages.",
          "The hexagonal structure means nodes are interconnected in a web rather than a linear path. Unlocking one node may open branches to several others, but you cannot unlock everything simultaneously. This creates meaningful priority decisions: do you invest in survivability now, or save for a build-enabling node that is several steps away?",
          "The Destiny Inscription is accessed from Bunnyville between runs. It is the primary reason to return to the village — every visit is an opportunity to assess your current tree state, decide on the next node, and spend accumulated Sapphires.",
        ],
      },
      {
        heading: "Earning Sapphires",
        paragraphs: [
          "Sapphires are the currency used to unlock Destiny Inscription nodes. They are earned primarily through two sources: defeating bosses during runs and completing runs. The deeper you progress in a run, the more Sapphires you earn, which creates a natural incentive to push further even when a run is going poorly.",
          "Even a run that ends in an early death yields some Sapphires. This is by design — Sephiria's meta-progression ensures that no run is truly wasted. A player who dies in chapter two still earns enough to make incremental progress on the Destiny Inscription, which in turn makes the next run slightly easier, creating a positive feedback loop.",
          "In co-op, all players earn Sapphires from the run, making co-op an efficient way to build permanent progression, especially for newer players who can learn from teammates while still earning currency. The total Sapphire economy is balanced so that meaningful tree progress is visible over a session of several runs, not hundreds.",
        ],
      },
      {
        heading: "Hexagonal Nodes and Paths",
        paragraphs: [
          "The Destiny Inscription tree uses a hexagonal node layout, meaning each node can connect to up to six neighbors. This structure creates multiple paths through the tree — you can approach the same destination from different directions, and the order in which you unlock nodes affects which intermediate bonuses you pick up along the way.",
          "Nodes fall into several categories: survival nodes (health, defense, healing), utility nodes (side bag capacity, artifact slots, starting items), build-enabling nodes (new weapon availability, enhanced Anvil offerings), and village upgrade nodes (unlocking new features or vendors in Bunnyville). Each category serves a different purpose at different stages of your playthrough.",
          "When choosing your next node, consider both the immediate benefit and the path it opens. Sometimes a less exciting node is worth taking because it unlocks a branch leading to a high-value node you want. Conversely, avoid unlocking nodes that open paths you have no intention of pursuing — those Sapphires are better spent elsewhere.",
        ],
      },
      {
        heading: "Village Upgrades and Talents",
        paragraphs: [
          "Certain Destiny Inscription nodes unlock village upgrades in Bunnyville. These are not just stat bonuses — they can introduce new gameplay features, vendors, or systems that change how you approach runs. Examples include expanded Anvil options, new Enchantment Altar capabilities, or additional Mystery Pot conversion recipes.",
          "Talents are a subset of village upgrades that provide persistent passive effects. Unlike artifacts and tablets which are run-specific, talents are always active once unlocked. They tend to be smaller in magnitude than in-run bonuses but their permanence makes them valuable over the course of many runs.",
          "Prioritize village upgrades that expand your options — such as side bag capacity or new weapon availability — over narrow damage talents early in your playthrough. Option-expanding upgrades compound in value as you unlock more content, while narrow bonuses are quickly outpaced by in-run builds.",
        ],
      },
      {
        heading: "Side Bag Unlocks",
        paragraphs: [
          "Side bag capacity is one of the most impactful early Destiny Inscription investments. Your bag determines how many items you can carry during a run, and insufficient space forces you to leave behind potentially useful picks. Each side bag unlock node permanently increases this capacity for all future runs.",
          "The practical impact of side bag expansion is that you can hold more artifacts, tablets, and potions simultaneously, giving you more flexibility to respond to what the run offers. Without sufficient bag space, you are forced to make premature decisions about what to keep and what to discard, sometimes before you know what the run will offer next.",
          "Aim to unlock at least two or three side bag capacity nodes early in your Destiny Inscription progress. The comfort and flexibility this provides improves every subsequent run, and the investment pays for itself quickly through more consistent builds and fewer wasted pickups.",
        ],
      },
    ],
    sources: [steamSource, steamGuideSource, v1AnnouncementSource],
    related: ["progression-guide", "upgrade-guide", "builds", "beginner-guide"],
  }),

  make({
    path: "upgrade-guide",
    title: "Upgrade Guide",
    h1: "Sephiria In-Run Upgrade Guide",
    eyebrow: "INVEST WITH A REASON",
    description:
      "Master Sephiria's in-run upgrade flow: artifact acquisition, tablet reinforcement, Anvil weapon forging, Enchantment Altar star upgrades, Mystery Pot conversion, and Tree Root Miracles.",
    answer:
      "Sephiria's in-run upgrade flow has six stages: acquire artifacts from rooms and enemies, reinforce with tablets, modify weapons at the Anvil, raise star levels at the Enchantment Altar, convert unwanted items at the Mystery Pot, and seek Miracles in Tree Roots rooms. Each stage reinforces the others — your artifact picks shape Anvil priorities, and Altar upgrades amplify your build. Always choose upgrades that reinforce a single coherent direction.",
    category: "Systems",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-upgrade.webp",
    heroImageAlt: "Sephiria upgrade guide screenshot showing the Anvil and upgrade interface",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "The In-Run Upgrade Flow",
        paragraphs: [
          "During a single run in Sephiria, your character grows through a sequence of interconnected upgrade systems. Understanding how these systems interact is the key to building effective characters. The six stages are: artifact acquisition, tablet reinforcement, Anvil weapon forging, Enchantment Altar star upgrades, Mystery Pot conversion, and Tree Roots Miracles.",
          "Each stage is not strictly sequential — you encounter them organically as you progress through the tower. However, the order in which you engage with them matters. Artifacts and tablets form the foundation of your build. The Anvil and Enchantment Altar amplify your weapon. The Mystery Pot lets you course-correct by converting items that do not fit. Tree Roots Miracles provide powerful bonuses that can redefine your run.",
          "The guiding principle throughout is coherence: every upgrade should either reinforce your current direction or fix a specific weakness. Avoid taking an upgrade simply because it is available — if it does not serve your build, skip it or convert it later.",
        ],
      },
      {
        heading: "Artifacts: Acquisition and Placement",
        paragraphs: [
          "Artifacts are passive bonuses acquired from rooms, enemies, and chests during a run. With roughly 300 types available, artifacts are the most numerous upgrade category and form the backbone of your build. Each artifact provides a specific passive effect — increased damage, health, movement speed, cooldown reduction, or more specialized bonuses.",
          "Artifacts are placed in artifact slots, and the number of available slots can be increased through Destiny Inscription permanent upgrades. This means your meta-progression directly affects how many artifacts you can equip in a run, making slot expansion a high-value long-term investment.",
          "When choosing between artifact offerings, prioritize foundational stats early — health, defense, and damage — before chasing specialized synergies. A solid base survives long enough to find synergistic artifacts later; a fragile build with ambitious synergies dies before they come online.",
        ],
      },
      {
        heading: "Tablets: Reinforcement",
        paragraphs: [
          "Tablets are the second layer of passive upgrades, placed alongside artifacts. With approximately 70 types, tablets are less numerous than artifacts but tend to offer more specialized or conditional enhancements. A tablet might boost a specific damage type, enhance a particular weapon family, or provide bonuses under specific conditions.",
          "Tablets are best chosen after you have a clear build direction. Early in a run, when your artifact picks are still forming your identity, tablet choices are harder to evaluate. Once you know what your build is trying to do — for example, a fast-attack Dagger build focused on multi-hit procs — tablets that reinforce that direction become significantly more valuable.",
          "Do not feel obligated to fill every tablet slot immediately. An empty slot costs nothing; a wasted slot that provides a bonus you cannot use is an opportunity cost. Wait for tablets that fit, and use the Mystery Pot to convert ones that do not.",
        ],
      },
      {
        heading: "Anvil: Weapon Forging",
        paragraphs: [
          "The Anvil is where you modify your weapon during a run. When you interact with an Anvil, you are presented with a selection of upgrade options specific to your current weapon family. Each weapon family has over 50 possible upgrades, so the offerings vary significantly from run to run.",
          "Anvil upgrades can change attack speed, add elemental effects, introduce new attack patterns, extend range, or enhance defensive properties. The key decision at each Anvil visit is whether the offered upgrades reinforce your current build direction. If you are building a fast-hitting Dagger, an upgrade that adds a slow charged attack may be less valuable than one that increases attack speed or adds a multi-hit effect.",
          "Prioritize Anvil upgrades that create synergy with your artifacts and tablets. An upgrade that adds fire damage, for example, becomes more valuable if you have artifacts that boost elemental effects. Think of the Anvil as the point where your passive build (artifacts and tablets) meets your active combat style (weapon upgrades).",
        ],
      },
      {
        heading: "Enchantment Altar: Star Upgrades",
        paragraphs: [
          "The Enchantment Altar raises the star level of your weapon or gear, increasing its base effectiveness. Star upgrades are permanent within a run and provide a flat multiplier on top of your Anvil and artifact choices. This makes the Enchantment Altar one of the most reliable power spikes available during a run.",
          "Because star upgrades amplify everything else, they are best used after you have committed to a build direction. Upgrading a weapon you are about to replace wastes the investment. Wait until you are confident in your weapon and artifact loadout before spending resources at the Enchantment Altar.",
          "If you have a choice between an Anvil upgrade and an Enchantment Altar visit, consider the state of your build. Early in a run, Anvil upgrades that shape your direction are often more valuable. Later, when your build is established, star-level multiplication at the Enchantment Altar provides a larger effective power increase.",
        ],
      },
      {
        heading: "Mystery Pot: Conversion and Tree Roots: Miracles",
        paragraphs: [
          "The Mystery Pot converts unwanted items into different ones. This is the run's course-correction tool — if you picked up an artifact that does not fit your build, or a tablet whose bonus you cannot use, the Mystery Pot gives you a chance to transform it into something potentially more useful. Use it proactively rather than as a last resort.",
          "The conversion is not guaranteed to produce something better — it is a gamble. However, converting an item you will never use into something you might use is always a positive expected value. The only items worth keeping unconverted are those that serve a contingency plan, such as a backup healing potion.",
          "Tree Roots rooms offer Miracles — powerful bonuses that can significantly alter the direction of a run. These are among the rarest and most impactful upgrades available. When you encounter a Tree Roots room, evaluate the offered Miracle carefully: if it synergizes with your build, take it; if it suggests a pivot and your build is struggling, the new direction may be exactly what you need. If your build is working, reinforce it rather than abandoning it for novelty.",
        ],
      },
    ],
    sources: [steamSource, steamGuideSource],
    related: ["progression-guide", "destiny-tree-guide", "builds", "weapons-guide"],
  }),
];
