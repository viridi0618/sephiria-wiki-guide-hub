import { make } from "./content-helpers";

const steamSource = {
  label: "Sephiria on Steam",
  url: "https://store.steampowered.com/app/2436940/Sephiria/",
  level: "Official" as const,
  lastChecked: "2026-08-04",
};

const steamAnnouncementSource = {
  label: "TEAM HORAY official Steam announcement (1.0 Update)",
  url: "https://store.steampowered.com/news/app/2436940/view/692016318956700220",
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

const boilingSteamSource = {
  label: "Sephiria on Steam Deck (Boiling Steam, EN)",
  url: "https://boilingsteam.com/new-steam-games-playable-on-the-steam-deck-2026-08-01-edition/",
  level: "Media" as const,
  lastChecked: "2026-08-04",
  note: "English media summary of Steam player impressions. Covers general reception, Steam Deck compatibility, controller feedback, and difficulty impressions — not per-weapon build mechanics.",
};

const version = "1.0";
const platforms = "PC (Windows, macOS)";
const informationType = "Editorial guide with official game facts";

export const guidePages = [
  make({
    path: "beginner-guide",
    title: "Beginner Guide",
    h1: "Sephiria Beginner Guide",
    eyebrow: "START WITH CLARITY",
    description:
      "Learn Sephiria's core loop — from Bunnyville into the tower, through combat, artifacts, weapon modifications, bosses, and the permanent Destiny Inscription progression system.",
    answer:
      "Sephiria's core loop: descend from the tower-top village Bunnyville into the tower, fight through rooms, collect artifacts and tablets, modify your weapon at the Anvil, enhance artifacts through Enchantment, defeat bosses, and spend the progression currency on the Destiny Inscription for permanent upgrades. Start by mastering one weapon family, prioritizing survival over damage, and learning enemy patterns before committing to aggressive plays.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-beginner.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing grassland combat with a greatsword.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "The Core Loop in One Paragraph",
        paragraphs: [
          "Sephiria is a top-down action Roguelite developed by TEAM HORAY, the same team behind Dungreed. You play as a rabbit warrior descending from the tower-top village of Bunnyville into a towering structure filled with enemies, bosses, and treasures. Each run follows a loop: enter the tower, clear rooms of enemies, collect artifacts and tablets, modify your weapon at the Anvil, enhance artifacts through Enchantment, defeat the chapter boss, then spend progression currency on the Destiny Inscription — the permanent progression system that carries upgrades into future runs.",
          "The Steam store confirms six chapters, over 60 enemy types, more than 10 bosses, and six weapon families, each with more than 50 upgrades. Every run offers distinct build opportunities; the goal of this guide is to help you navigate your first few runs efficiently without feeling overwhelmed by the volume of choices.",
        ],
      },
      {
        heading: "Starting in Bunnyville",
        paragraphs: [
          "Bunnyville is your hub — the tower-top village where permanent progression lives. Between runs, you return here to spend the progression currency on Destiny Inscription nodes and prepare for the next descent. Think of Bunnyville as your base of operations: everything permanent happens here, while everything inside the tower is run-specific and resets when you die or complete a run.",
          "Before entering the tower, review any available permanent upgrades between runs and confirm their effects in the current version. You do not need to optimize this immediately, but making at least one small permanent upgrade between runs builds long-term momentum.",
        ],
      },
      {
        heading: "Your First Run: A Learning Route",
        paragraphs: [
          "Treat your first run as a tutorial, not a victory attempt. Focus on observing enemy behavior, learning your chosen weapon's attack rhythm, and understanding how rooms are structured. Chapters one and two introduce basic enemy types and simpler boss mechanics; use them to calibrate your reflexes before the difficulty ramps up.",
          "Pick one weapon family and stick with it for several runs. The Sword and Shield is commonly recommended as a forgiving starter because it combines offense with a block, giving you a defensive option when you misread an attack. Resist the urge to switch weapons every run — mastery of one family compounds faster than shallow familiarity with all six.",
          "As you progress, pay attention to which artifacts and tablets synergize with your weapon. Simply notice which picks felt good and which felt wasted; this observation is the foundation of future build planning.",
        ],
      },
      {
        heading: "Opening Priorities",
        paragraphs: [
          "Prioritize survival over damage during your first several hours. This means picking artifacts that increase health, defense, or healing before chasing raw offense. A build that survives three extra hits will out-damage a glass cannon that dies in the second room.",
          "When you encounter an Anvil, take the modification that reinforces your current plan rather than the one that sounds most powerful in isolation. The same principle applies to other upgrade and conversion options you encounter: each choice should either strengthen your strategy or patch a specific weakness you have noticed.",
        ],
      },
      {
        heading: "Common Early Death Causes",
        paragraphs: [
          "The most frequent cause of early deaths is greed: committing to a full attack string when the enemy is about to act. Every weapon has commitment frames during which you cannot dodge. Learn your weapon's recovery timing and practice canceling strings early when an enemy telegraphs an attack.",
          "A second common trap is ignoring ranged enemies. In rooms with mixed enemy types, ranged attackers chip away at your health while you focus on melee foes. Clear or interrupt ranged enemies first, then deal with melee threats in a controlled space.",
          "Finally, many new players underestimate boss telegraphs. Sephiria bosses have readable wind-up animations, but the punish windows are tight. Spend your first boss encounter purely observing — do not try to win immediately. Once you can name each attack and its safe response, the fight becomes manageable.",
        ],
      },
    ],
    contentVideos: [
      {
        id: "sephiria-1.0-launch-trailer",
        title: "Sephiria - 1.0 Launch Trailer",
        channel: "TEAM HORAY",
        youtubeUrl: "https://www.youtube.com/watch?v=PXwDUrWFvGs",
        placementAfterHeading: "The Core Loop in One Paragraph",
        description: "Official 1.0 launch trailer from TEAM HORAY. Shows combat overview, weapon variety, boss encounters, and the game's pixel-art style.",
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource],
    related: ["builds", "weapons-guide", "boss-guide", "progression-guide"],
    guidePath: [
      { step: 1, label: "Beginner Guide", href: "/beginner-guide/", question: "Learn a repeatable first-run process." },
      { step: 2, label: "Builds Hub", href: "/builds/", question: "Choose a coherent playstyle." },
      { step: 3, label: "Boss Guide", href: "/boss-guide/", question: "Turn observation into safer damage." },
      { step: 4, label: "Progression Guide", href: "/progression-guide/", question: "Choose the next useful priority." },
    ],
  }),

  make({
    path: "tips-and-tricks",
    title: "Tips & Tricks",
    h1: "Sephiria Tips & Tricks",
    eyebrow: "SMALL EDGES",
    description:
      "Practical, actionable tips for Sephiria runs — combat rhythm, room clearing, resource choices, inventory management, and boss preparation.",
    answer:
      "The most impactful Sephiria tips: master your weapon's move-attack rhythm so you always have an escape option, clear ranged enemies before melee in mixed rooms, prioritize artifacts over tablets early for raw stat consistency, manage your bag by prioritizing synergy over novelty, and always prepare before boss fights — full health, checked upgrades, and a clear plan.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-tips.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing item selection with a combo-effects panel.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Move-Attack Rhythm",
        paragraphs: [
          "Every weapon family in Sephiria has a distinct attack cadence and recovery window. The single most important habit is learning when you can safely commit to an attack and when you need to reposition. A good rule of thumb: after every attack string, immediately move to a new position. Standing still after attacking invites punishment.",
          "Faster weapons like the Dagger allow shorter, more frequent commits, while slower weapons like the Greatsword demand that you read the room before swinging. The Crossbow and Staff let you attack from range, but you still need to keep moving — stationary ranged attackers are prime targets for enemy rushes.",
          "Practice this rhythm in early chapters where mistakes are less punishing. Once the move-attack-move pattern becomes muscle memory, your survivability will improve dramatically across all weapon types.",
        ],
      },
      {
        heading: "Room Clearing Priority",
        paragraphs: [
          "When you enter a room with multiple enemy types, prioritize targets in this order: ranged attackers first, then fast melee enemies, then slow or tanky enemies last. Ranged enemies force you to keep moving and prevent you from setting up against melee foes. By eliminating them early, you gain space to control the remaining threats.",
          "Watch for enemy spawn patterns. Many rooms spawn reinforcements when you cross certain thresholds or defeat specific enemies. If you notice a spawn trigger, reposition to a corner or choke point where you cannot be surrounded. Sephiria's top-down perspective makes spatial awareness easier if you consciously check your screen edges for incoming threats.",
          "Against elite or champion-tier enemies, do not treat them like normal foes. They often have modified attack patterns, more health, and additional effects. Isolate them from groups whenever possible and fight them one-on-one.",
        ],
      },
      {
        heading: "Resource Choices: Artifacts, Tablets, and Potions",
        paragraphs: [
          "Sephiria offers a large pool of artifacts, tablets, and potions, but you cannot take everything, so each pickup is a decision. As a general framework: prioritize artifacts in the early game for raw stat consistency, use tablets to sharpen a specific direction once your build has a clear identity, and save potions for moments when you need an immediate effect rather than hoarding them indefinitely.",
          "Artifacts provide passive bonuses that are always active, making them the most reliable investment early in a run. Tablets offer more specialized enhancements and are best chosen when you already know what your build is trying to do. Potions are consumable and situational — do not waste a healing potion at full health, but also do not die with three unused potions in your bag.",
          "When offered a choice between an artifact that fits your build and one that is stronger on paper but off-theme, take the one that fits. A coherent build with modest stats will outperform a scattered collection of powerful but unrelated bonuses.",
        ],
      },
      {
        heading: "Inventory and Bag Management",
        paragraphs: [
          "Your available inventory space is limited, so review what you are carrying regularly and remove items that no longer support the current build.",
          "When the game offers item conversion, use it to turn dead weight into build-relevant picks. Do not hesitate to convert items you will never equip — holding onto them wastes a bag slot that could hold something useful.",
          "Every slot should serve your build or provide a contingency. Hoarding without a plan is how runs end with a full bag and a dead character.",
        ],
      },
      {
        heading: "Boss Preparation Checklist",
        paragraphs: [
          "Before entering a boss room, run through this checklist: Is your health full or near-full? Have you used the upgrade options available in this chapter? Do you have at least one healing potion ready? Do you know which weapon modifications you have and how they change your punish windows?",
          "If any of these are not checked, backtrack if possible to address them. A boss fight with half health and no potions is a gamble, not a strategy. Sephiria rewards preparation — the difference between a clean boss kill and a frustrating death often comes down to what you did in the rooms before the boss door.",
          "During the fight itself, spend the first encounter cycle purely observing. Do not attack. Watch the boss's telegraphs, learn the timing, and identify which attacks leave a punish window. Once you can consistently dodge the boss's patterns, start inserting safe damage. This patience-first approach turns bosses from roadblocks into routine encounters.",
        ],
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource],
    related: ["beginner-guide", "progression-guide", "boss-guide"],
  }),

  make({
    path: "progression-guide",
    title: "Progression Guide",
    h1: "Sephiria Progression Guide",
    eyebrow: "MOVE WITH PURPOSE",
    description:
      "Understand Sephiria's two-layer progression — in-run growth through artifacts, the Anvil, and Enchantment, and permanent growth through the Destiny Inscription.",
    answer:
      "Sephiria has two progression layers. In-run growth includes character level, artifact and tablet collection, and weapon modifications from the Anvil — all reset after each run. Permanent growth uses progression currency earned from runs to unlock Destiny Inscription nodes in Bunnyville. Exact permanent upgrade priorities are not officially documented.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-progression.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing a level-up item selection with reroll.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Two Layers of Progression",
        paragraphs: [
          "Sephiria separates progression into two distinct layers. The in-run layer includes everything you build during a single descent: your character level, the artifacts and tablets you collect, weapon modifications from the Anvil, and artifact enhancement through Enchantment. All of this resets when the run ends.",
          "The permanent layer persists across runs and lives in Bunnyville. Here you spend the progression currency earned through runs on the Destiny Inscription, Sephiria's permanent progression system.",
          "Exact permanent upgrade priorities are not officially documented and should be checked in the current version.",
        ],
      },
      {
        heading: "In-Run Growth Systems",
        paragraphs: [
          "During a run, your character grows through several interconnected systems. Character level increases as you defeat enemies, providing baseline stat growth. Artifacts and tablets are part of the in-run build system.",
          "The Anvil is used for weapon modification or weapon upgrades. The Steam store describes each weapon family as having more than 50 upgrades, so no two runs will upgrade the same way. Enchantment is used for artifact enhancement.",
          "Exact upgrade pools, costs, and interaction details should be checked in the current version.",
        ],
      },
      {
        heading: "Permanent Growth: Destiny Inscription",
        paragraphs: [
          "The Destiny Inscription is Sephiria's permanent progression system. You unlock nodes using the progression currency earned from runs. Each node provides a lasting benefit that carries into future runs.",
          "Exact node effects, costs, unlock conditions, layout, and optimal routes should be checked in the current version, as official documentation does not publish a full node list.",
        ],
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource, steamAnnouncementSource],
    related: ["beginner-guide", "builds", "upgrade-guide", "destiny-tree-guide"],
  }),

  make({
    path: "boss-guide",
    title: "Boss Guide",
    h1: "Sephiria Boss Guide",
    eyebrow: "READ THE FIGHT",
    description:
      "A framework for learning Sephiria bosses — attack recognition, safe positioning, and punish-window discipline. The official boss list and specific mechanics are not published.",
    answer:
      "The Steam store confirms Sephiria features more than 10 bosses across six chapters, but TEAM HORAY has not published an official boss list or detailed mechanics. Use a universal method: spend the first cycle observing telegraphs, identify safe punish windows, then commit to damage. This guide covers that method without inventing specific boss patterns.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-boss.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing a boss arena with a giant tree and energy core.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "How to Approach Boss Fights",
        paragraphs: [
          "Sephiria bosses reward observation over reflexes. Bosses have telegraphed attacks with readable wind-up animations, and each attack typically leaves a punish window — a brief period where the boss is recovering and you can deal damage safely. Your job in the first encounter is not to win, but to learn these patterns.",
          "Start each boss fight by dodging exclusively. Do not attack. Watch each telegraph, note the timing, and identify where you need to stand to avoid the attack. Once you can consistently survive a full attack cycle without taking damage, begin inserting safe damage during the punish windows you identified.",
          "Positioning matters as much as timing. Many boss attacks cover specific zones or arcs. Learning where to stand — not just when to dodge — reduces the number of decisions you need to make under pressure.",
        ],
      },
      {
        heading: "A Universal Learning Method",
        paragraphs: [
          "Because the official boss list and mechanics are not published, the same method applies to every encounter: observe first, identify telegraphs and punish windows, then execute safe damage.",
          "Track one boss at a time. Name each attack in your own words, note its telegraph, and record where it is safe to stand. Once you can name every attack in a cycle and its safe response, the fight becomes manageable.",
          "Avoid overcommitting during punish windows. One extra hit is not worth eating a counter-attack; accept the safe damage and reset to a defensive position.",
        ],
      },
      {
        heading: "Note on the Boss Roster",
        paragraphs: [
          "Sephiria contains more than 10 bosses across its six chapters, but TEAM HORAY has not published the complete official boss list. Community playthroughs describe a variety of encounters, but no specific boss mechanics are verified here because they are not published in official materials.",
          "As the community continues to explore the 1.0 release, this guide may be updated with verified information. If you encounter a boss, apply the universal method — the framework scales to any encounter.",
        ],
      },
    ],
    sources: [steamSource, outdatedSteamGuideSource],
    related: ["beginner-guide", "builds", "progression-guide", "weapons-guide"],
  }),

  make({
    path: "co-op",
    title: "Co-op Guide",
    h1: "Sephiria Co-op Guide",
    eyebrow: "PLAY AS A TEAM",
    description:
      "Sephiria supports up to 4-player online co-op with item exchange and teammate revival. Learn what is confirmed and what to verify in the current version.",
    answer:
      "Yes, Sephiria supports online co-op for up to 4 players. The official store confirms item exchange between players and the ability to revive downed teammates. Players are normally restricted from joining multiplayer lobbies that are ahead of their own main-story progress. Lobby restrictions, loot ownership, and difficulty scaling should be verified in the current version before being stated as fact.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-coop.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing desert ruins with Fanatic enemies.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "What the Official Store Confirms",
        paragraphs: [
          "The Steam store confirms four-player online co-op, item exchange between players, and the ability to revive downed teammates. This is a core feature of the shipped game, not a post-launch addition.",
          "Players are normally restricted from joining multiplayer lobbies that are ahead of their own main-story progress.",
        ],
      },
      {
        heading: "Creating and Joining Games",
        paragraphs: [
          "The Steam store lists Online Co-op as a feature; the exact lobby flow (invites, searching, or matchmaking) should be confirmed on the official store page or in the current build before describing it as fact.",
          "If you are joining another player's game, keep in mind that progression rules for your solo save, loot ownership, and story sync are not published in official materials. Confirm them in the current version.",
        ],
      },
      {
        heading: "Progression and Currency",
        paragraphs: [
          "Exact rules for how progression currency is awarded per boss, per run, or in co-op are not published in official materials. Do not assume failed runs always grant currency or that all players receive full rewards.",
          "The official store confirms the core co-op loop: the party descends the tower together, exchanges items, and revives teammates. Details beyond this should be checked in the current version.",
        ],
      },
      {
        heading: "Reviving Teammates",
        paragraphs: [
          "The official store confirms teammates can be revived in co-op. Specific revive timing, downed-state rules, and checkpoint behavior are not published and should be verified in the current version.",
          "In practice, coordinate roles when someone goes down — typically the player closest or the one with the most mobility attempts the revive while others create space.",
        ],
      },
      {
        heading: "Trading Items and Solo vs Co-op Differences",
        paragraphs: [
          "The official store confirms item exchange between players during co-op. Coordinate builds at the start of a run so everyone knows what to look for and who gets what.",
          "Solo and co-op play feel different: in solo you control all decisions and pacing, while co-op adds shared aggro and coordination needs. Whether enemy scaling, loot ownership, or progression sharing differ between modes is not published — verify in the current version.",
        ],
      },
    ],
    sources: [steamSource, boilingSteamSource],
    related: ["beginner-guide", "builds", "boss-guide", "review"],
  }),

  make({
    path: "review",
    title: "Sephiria Review",
    h1: "Sephiria Review",
    eyebrow: "WHO IS IT FOR?",
    description:
      "An editorial review of Sephiria 1.0 — combat depth, build freedom, pixel art, and co-op against weapon accessibility. Clear recommendation included.",
    answer:
      "Sephiria 1.0 is a strong top-down action Roguelite with deep combat across six weapon families — Sword and Shield, Greatsword, Dagger, Crossbow, Staff, and Grimoire — and excellent pixel art from the Dungreed team. It supports 4-player online co-op and offers substantial build freedom. Downsides include steep learning curves on some weapons. Recommended for action Roguelite fans who value build crafting and replayability. These judgments are editorial opinions; the official feature references below are confirmed store facts.",
    category: "Guides",
    version,
    platforms,
    contentVideos: [
      {
        id: "sephiria-early-access-trailer",
        title: "Sephiria Early Access Trailer",
        channel: "TEAM HORAY",
        youtubeUrl: "https://www.youtube.com/watch?v=uK0Yjz3Q3Sc",
        placementAfterHeading: "Overview",
        description: "Official Early Access trailer from TEAM HORAY. Provides a look at core gameplay, artifact collection, weapon combat, and the inventory management system.",
      },
    ],
    informationType: "Editorial review with official feature references",
    heroImage: "/screenshots/sephiria-weapons.webp",
    heroImageAlt:
      "Official Sephiria screenshot showing grassland combat and a weapon attack arc.",
    heroImageCaption: "Official Sephiria screenshot from the Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Sephiria is a top-down action Roguelite developed by TEAM HORAY, the studio behind Dungreed. The full release was announced for July 31, 2026, for Windows and macOS. You play as a rabbit warrior descending from the tower-top village of Bunnyville into a high tower filled with enemies, bosses, and treasures across six chapters.",
          "The official store confirms six weapon families — Sword and Shield, Greatsword, Dagger, Crossbow, Staff, and Grimoire — each described as having more than 50 upgrades, six chapters, more than 60 enemies, more than 10 bosses, and online co-op for up to four players. The permanent progression system, Destiny Inscription, is funded by progression currency earned in runs.",
          "This review evaluates combat depth, build freedom, presentation, co-op, and known weaknesses to help you decide whether Sephiria fits your tastes. Check Steam for current regional pricing and review status.",
          "The judgments about combat quality, accessibility, replayability, and presentation in this review are editorial opinions, not official facts.",
        ],
      },
      {
        heading: "Strengths",
        paragraphs: [
          "Combat depth is Sephiria's headline strength, in this reviewer's view. Six distinct weapon families each have their own attack rhythm, range, and defensive options, meaning the game effectively offers six different ways to play. The official store confirms each family has more than 50 upgrades, so even within a single weapon family, no two runs feel identical.",
          "Build freedom is a major draw. With artifacts, tablets, and the interplay between the Anvil and Enchantment, the number of viable builds is vast. The Destiny Inscription adds a permanent progression layer that rewards repeated play, creating a satisfying long-term power curve.",
          "Pixel art presentation is a standout. TEAM HORAY's experience with Dungreed shows in clean, readable animations, distinct enemy silhouettes, and environments that communicate gameplay information visually.",
          "Co-op is a genuine part of the game: the official store confirms up to 4 players can join online, trade items, and revive each other.",
        ],
      },
      {
        heading: "Weaknesses",
        paragraphs: [
          "Some weapon families have steep accessibility curves. The Staff and Grimoire, in particular, require understanding projectile behavior, cooldown management, and positioning in ways that melee weapons do not. New players who pick these weapons first may struggle more than necessary.",
          "The sheer volume of content — artifacts, tablets, and weapon upgrades — can be overwhelming for players who prefer curated, focused experiences. If you dislike reading item descriptions or experimenting with combinations, the build-crafting layer may feel like busywork rather than engagement.",
        ],
      },
      {
        heading: "Who Should Play It",
        paragraphs: [
          "Sephiria is recommended, editorially, for players who enjoy action Roguelites with meaningful build decisions — fans of games like Hades, Dead Cells, or Dungreed itself will find familiar satisfaction here. If you value replayability, co-op gaming with friends, and pixel art aesthetics, Sephiria delivers on all three.",
          "Players who prefer linear, story-driven experiences or who dislike repeated runs and permadeath mechanics may find the Roguelite structure frustrating. Similarly, players who want a curated, guided experience with minimal decision load may find the open-ended build system more burdensome than liberating.",
          "If you enjoyed Dungreed, Sephiria is an easy recommendation, editorially — it refines and expands on the same design philosophy with a larger scope and more weapon variety.",
        ],
      },
      {
        heading: "Verdict",
        paragraphs: [
          "In this reviewer's opinion, Sephiria 1.0 is a confidently crafted action Roguelite that earns its place in the genre. The combat is deep and readable, the build space is vast without being arbitrary, the pixel art is excellent, and the co-op integration is genuine rather than superficial. Some weapon accessibility issues are real but do not undermine the core experience.",
          "For action Roguelite fans — especially those who enjoyed Dungreed — Sephiria is recommended. The combination of six weapon families, permanent meta-progression, and 4-player co-op provides enough content and variety to justify checking out for anyone who finds the core loop appealing. Start with the Sword and Shield, follow the Beginner Guide, and let the game teach you one system at a time.",
        ],
      },
    ],
    sources: [steamSource, steamAnnouncementSource, boilingSteamSource],
    related: ["beginner-guide", "is-sephiria-worth-playing", "co-op", "weapons-guide"],
  }),
];
