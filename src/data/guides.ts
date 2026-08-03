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

const releaseAnnouncementSource = {
  label: "Sephiria Release Announcement (17173)",
  url: "http://news.17173.com/content/07092026/003057782.shtml",
  level: "Media" as const,
  lastChecked: "2026-08-03",
};

const version = "1.0 (Released 2026-07-31)";
const platforms = "PC (Windows, macOS)";
const informationType = "Editorial guide with official game facts";

export const guidePages = [
  make({
    path: "beginner-guide",
    title: "Beginner Guide",
    h1: "Sephiria Beginner Guide",
    eyebrow: "START WITH CLARITY",
    description:
      "Learn Sephiria's core loop — from Bunnyville into the tower, through combat, artifacts, anvil upgrades, bosses, and permanent Destiny Inscription growth.",
    answer:
      "Sephiria's core loop: descend from the tower-top village Bunnyville into the tower, fight through rooms, collect artifacts and tablets, upgrade weapons at the Anvil and Enchantment Altar, defeat bosses to earn Sapphires, then spend them on the Destiny Inscription skill tree for permanent upgrades. Start by mastering one weapon family, prioritizing survival over damage, and learning enemy patterns before committing to aggressive plays.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-beginner.webp",
    heroImageAlt:
      "Sephiria beginner guide screenshot showing the rabbit warrior exploring the tower",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "The Core Loop in One Paragraph",
        paragraphs: [
          "Sephiria is a top-down action Roguelite developed by TEAM HORAY, the same team behind Dungreed. You play as a rabbit warrior descending from the tower-top village of Bunnyville into a towering structure filled with enemies, bosses, and treasures. Each run follows a loop: enter the tower, clear rooms of enemies, collect artifacts and tablets, upgrade your weapon at the Anvil and Enchantment Altar, defeat the chapter boss to earn Sapphires, then spend those Sapphires on the Destiny Inscription — a hexagonal-node skill tree that provides permanent upgrades carried into future runs.",
          "The game spans six chapters with over 60 enemy types and 10-plus bosses. With six weapon families, roughly 300 artifacts, 70 tablets, and 200-plus weapon upgrades, every run offers distinct build opportunities. The goal of this guide is to help you navigate your first few runs efficiently without feeling overwhelmed by the volume of choices.",
        ],
      },
      {
        heading: "Starting in Bunnyville",
        paragraphs: [
          "Bunnyville is your hub — the tower-top village where permanent upgrades live. Between runs, you return here to spend Sapphires on Destiny Inscription nodes, unlock village upgrades, and prepare for the next descent. Think of Bunnyville as your base of operations: everything permanent happens here, while everything inside the tower is run-specific and resets when you die or complete a run.",
          "Before entering the tower, check whether your Destiny Inscription has any affordable nodes that improve survivability — extra health, starting artifacts, or side bag capacity are all strong early investments. You do not need to optimize this immediately, but making at least one small permanent upgrade between runs builds long-term momentum.",
        ],
      },
      {
        heading: "Your First Run: A Learning Route",
        paragraphs: [
          "Treat your first run as a tutorial, not a victory attempt. Focus on observing enemy behavior, learning your chosen weapon's attack rhythm, and understanding how rooms are structured. Chapters one and two introduce basic enemy types and simpler boss mechanics; use them to calibrate your reflexes before the difficulty ramps up.",
          "Pick one weapon family and stick with it for several runs. The Sword and Shield is the most forgiving starter because it combines offense with a block, giving you a defensive option when you misread an attack. Resist the urge to switch weapons every run — mastery of one family compounds faster than shallow familiarity with all six.",
          "As you progress, pay attention to which artifacts and tablets synergize with your weapon. You do not need to memorize all 300-plus items; simply notice which picks felt good and which felt wasted. This observation is the foundation of future build planning.",
        ],
      },
      {
        heading: "Opening Priorities",
        paragraphs: [
          "Prioritize survival over damage during your first several hours. This means picking artifacts that increase health, defense, or healing before chasing raw offense. A build that survives three extra hits will out-damage a glass cannon that dies in the second room.",
          "When you encounter an Anvil, take the upgrade that reinforces your current plan rather than the one that sounds most powerful in isolation. The same principle applies at the Enchantment Altar and Mystery Pot: each choice should either strengthen your strategy or patch a specific weakness you have noticed.",
          "If you find a Tree Roots room, take the time to evaluate the offered Miracle. These are powerful bonuses and can define the direction of your run. Do not skip them even if the immediate choice seems unclear — experimenting with Miracles is how you learn what works for your playstyle.",
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
    sources: [steamSource, steamGuideSource],
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
      "The most impactful Sephiria tips: master your weapon's move-attack rhythm so you always have an escape option, clear ranged enemies before melee in mixed rooms, choose artifacts over tablets early for raw stat consistency, manage your bag by prioritizing synergy over novelty, and always prepare before boss fights — full health, checked upgrades, and a clear plan.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-tips.webp",
    heroImageAlt: "Sephiria tips and tricks screenshot showing combat gameplay",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Move-Attack Rhythm",
        paragraphs: [
          "Every weapon family in Sephiria has a distinct attack cadence and recovery window. The single most important habit is learning when you can safely commit to an attack and when you need to reposition. A good rule of thumb: after every attack string, immediately move to a new position. Standing still after attacking invites punishment.",
          "Faster weapons like the Dagger allow shorter, more frequent commits, while slower weapons like the Great Sword demand that you read the room before swinging. The Crossbow and Staff let you attack from range, but you still need to keep moving — stationary ranged attackers are prime targets for enemy rushes.",
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
          "Sephiria offers roughly 300 artifacts, 70 tablets, and over 30 potions. You cannot take everything, so each pickup is a decision. As a general framework: prioritize artifacts in the early game for raw stat consistency, use tablets to sharpen a specific direction once your build has a clear identity, and save potions for moments when you need an immediate effect rather than hoarding them indefinitely.",
          "Artifacts provide passive bonuses that are always active, making them the most reliable investment early in a run. Tablets offer more specialized enhancements and are best chosen when you already know what your build is trying to do. Potions are consumable and situational — do not waste a healing potion at full health, but also do not die with three unused potions in your bag.",
          "When offered a choice between an artifact that fits your build and one that is objectively stronger but off-theme, take the one that fits. A coherent build with modest stats will outperform a scattered collection of powerful but unrelated bonuses.",
        ],
      },
      {
        heading: "Inventory and Bag Management",
        paragraphs: [
          "Your bag space is limited, especially early in a run before you unlock side bag capacity through the Destiny Inscription. Make a habit of evaluating your bag after every few rooms: are there items you picked up early that no longer serve your build? Can you convert them at the Mystery Pot into something more useful?",
          "The Mystery Pot converts unwanted items into different ones, which is an excellent way to turn dead weight into build-relevant picks. Do not hesitate to use it — holding onto an item you will never equip wastes a bag slot that could hold something useful.",
          "As you unlock side bag capacity through permanent upgrades, the pressure eases, but the principle remains the same: every slot should serve your build or provide a contingency. Hoarding without a plan is how runs end with a full bag and a dead character.",
        ],
      },
      {
        heading: "Boss Preparation Checklist",
        paragraphs: [
          "Before entering a boss room, run through this checklist: Is your health full or near-full? Have you visited the Anvil, Enchantment Altar, or Mystery Pot if they were available in this chapter? Do you have at least one healing potion ready? Do you know which weapon upgrades you have and how they change your punish windows?",
          "If any of these are not checked, backtrack if possible to address them. A boss fight with half health and no potions is a gamble, not a strategy. Sephiria rewards preparation — the difference between a clean boss kill and a frustrating death often comes down to what you did in the rooms before the boss door.",
          "During the fight itself, spend the first encounter cycle purely observing. Do not attack. Watch the boss's telegraphs, learn the timing, and identify which attacks leave a punish window. Once you can consistently dodge the boss's patterns, start inserting safe damage. This patience-first approach turns bosses from roadblocks into routine encounters.",
        ],
      },
    ],
    sources: [steamSource, steamGuideSource],
    related: ["beginner-guide", "progression-guide", "boss-guide"],
  }),

  make({
    path: "progression-guide",
    title: "Progression Guide",
    h1: "Sephiria Progression Guide",
    eyebrow: "MOVE WITH PURPOSE",
    description:
      "Understand Sephiria's two-layer progression — in-run growth through artifacts, anvils, and altars, and permanent growth through Destiny Inscription and Sapphires.",
    answer:
      "Sephiria has two progression layers. In-run growth includes character level, artifact and tablet collection, Anvil weapon forging, Enchantment Altar star upgrades, Mystery Pot conversions, and Tree Root Miracles — all reset after each run. Permanent growth uses Sapphires earned from runs to unlock Destiny Inscription hexagonal nodes and village upgrades in Bunnyville. New players should focus on survival nodes first, then expand build-enabling options.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-progression.webp",
    heroImageAlt:
      "Sephiria progression guide screenshot showing the Destiny Inscription skill tree",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Two Layers of Progression",
        paragraphs: [
          "Sephiria separates progression into two distinct layers. The in-run layer includes everything you build during a single descent: your character level, the artifacts and tablets you collect, weapon upgrades from the Anvil, star-level increases from the Enchantment Altar, conversions from the Mystery Pot, and Miracles from Tree Roots rooms. All of this resets when the run ends.",
          "The permanent layer persists across runs and lives in Bunnyville. Here you spend Sapphires — the currency earned by defeating bosses and completing runs — on the Destiny Inscription, a hexagonal-node skill tree. Each node unlocked provides a permanent bonus, such as increased starting health, additional artifact slots, side bag capacity, or new starting weapon options. This is where your long-term power curve lives.",
          "Understanding this split is essential: a run that ends in death is not wasted if you earned Sapphires and unlocked a useful node. Conversely, a successful run that ignores permanent upgrades leaves you no stronger for the next attempt. Always balance in-run optimization with long-term investment.",
        ],
      },
      {
        heading: "In-Run Growth Systems",
        paragraphs: [
          "During a run, your character grows through several interconnected systems. Character level increases as you defeat enemies, providing baseline stat growth. Artifacts — roughly 300 types — are placed in slots and provide passive bonuses. Tablets — about 70 types — are placed alongside artifacts for more specialized enhancements.",
          "The Anvil lets you forge weapon modifications, choosing from offered upgrade paths. Each weapon family has over 50 possible upgrades, meaning no two runs will upgrade the same way. The Enchantment Altar raises the star level of your weapon or gear, increasing its base effectiveness. The Mystery Pot converts unwanted items into different ones, giving you a second chance at a useful pickup.",
          "Finally, Tree Roots rooms offer Miracles — powerful bonuses that can significantly alter your run's direction. These are rare and worth seeking out. Together, these systems create a web of interdependent choices: your artifact picks influence which Anvil upgrades are valuable, which in turn affects what you want from the Enchantment Altar.",
        ],
      },
      {
        heading: "Permanent Growth: Destiny Inscription",
        paragraphs: [
          "The Destiny Inscription is Sephiria's meta-progression system, structured as a hexagonal-node skill tree. You unlock nodes using Sapphires, the permanent currency earned from completing runs and defeating bosses. Each node provides a lasting benefit — increased health, additional starting artifacts, side bag expansion, new weapon availability, or other quality-of-life improvements.",
          "Because the tree is hexagonal, nodes are interconnected: unlocking one may open paths to several others, but you cannot take everything at once. This creates meaningful priority decisions. Some nodes unlock new gameplay mechanics or features in Bunnyville, such as additional vendors or expanded upgrade options.",
          "The key insight is that Destiny Inscription rewards every run, successful or not. Even a run that ends early in chapter two will yield some Sapphires. Over dozens of runs, these incremental investments compound into a noticeably stronger starting position, which in turn enables deeper runs and more Sapphires — a positive feedback loop.",
        ],
      },
      {
        heading: "Resource Priority for New Players",
        paragraphs: [
          "For your first 5 to 10 runs, direct Sapphires toward survival-focused nodes: maximum health, healing efficiency, and starting artifact quality. These reduce the frequency of early deaths and give you more time per run to learn enemy patterns and weapon mechanics. Avoid chasing damage or specialized build nodes until your base survivability feels stable.",
          "Once you can consistently reach chapter three or four, start branching into build-enabling nodes: side bag capacity for more inventory flexibility, additional starting weapon options to experiment with new families, and nodes that improve Anvil or Enchantment Altar offerings. These do not directly increase survivability but they expand the range of strategies you can execute.",
          "Resist the urge to spread Sapphires thinly across the tree. Concentrating on a cluster of related nodes creates a more noticeable power spike than scattering points across unrelated branches. You can always pivot later when you have more Sapphires to spend.",
        ],
      },
      {
        heading: "Recommended Progression Path",
        paragraphs: [
          "Phase one — survival foundation: Unlock health and healing nodes in the Destiny Inscription. Focus on learning one weapon family thoroughly. Goal: consistently reach chapter three.",
          "Phase two — build literacy: Unlock side bag and artifact slot expansions. Start experimenting with different artifact and tablet combinations. Goal: consistently reach chapter four or five with a coherent build.",
          "Phase three — specialization: Invest in nodes that support your preferred weapon family and build archetype. Begin tackling the harder chapters and refining boss strategies. Goal: consistent full-run completions.",
          "Phase four — mastery: Explore alternative weapon families, experiment with advanced build synergies, and push for efficiency in co-op or challenge runs. By this point, your Destiny Inscription should provide a strong, flexible foundation that supports any playstyle.",
        ],
      },
    ],
    sources: [steamSource, steamGuideSource, v1AnnouncementSource],
    related: ["beginner-guide", "builds", "upgrade-guide", "destiny-tree-guide"],
  }),

  make({
    path: "boss-guide",
    title: "Boss Guide",
    h1: "Sephiria Boss Guide",
    eyebrow: "READ THE FIGHT",
    description:
      "Learn Sephiria's verified bosses — Askard, Qliphoth, the rotating staff demon, and the final boss — with attack recognition, safe positioning, and punish window guidance.",
    answer:
      "Sephiria features over 10 bosses across six chapters. Verified bosses include Askard (ground tentacles, slam, and laser attacks), Qliphoth (bullet-hell projectile patterns), a rotating staff demon with sweeping attacks, and a two-phase final boss in chapter six. The full official boss list has not been published. For each boss, spend the first cycle observing telegraphs, then identify safe punish windows before committing to damage.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-boss.webp",
    heroImageAlt: "Sephiria boss guide screenshot showing a boss encounter",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "How to Approach Boss Fights",
        paragraphs: [
          "Sephiria bosses reward observation over reflexes. Every boss has telegraphed attacks with readable wind-up animations, and each attack leaves a specific punish window — a brief period where the boss is recovering and you can deal damage safely. Your job in the first encounter is not to win, but to learn these patterns.",
          "Start each boss fight by dodging exclusively. Do not attack. Watch each telegraph, note the timing, and identify where you need to stand to avoid the attack. Once you can consistently survive a full attack cycle without taking damage, begin inserting safe damage during the punish windows you identified.",
          "Positioning matters as much as timing. Many boss attacks cover specific zones or arcs. Learning where to stand — not just when to dodge — reduces the number of decisions you need to make under pressure. Find the sweet spot for each boss where you can see telegraphs clearly and react comfortably.",
        ],
      },
      {
        heading: "Askard",
        paragraphs: [
          "Askard is an early-to-mid chapter boss with three primary attack types: ground tentacles that erupt from specified positions, a slam attack that covers an area around the boss, and a laser beam that sweeps across the arena. Each attack has a distinct telegraph: ground tentacles show surface indicators before erupting, the slam has a visible wind-up where the boss raises its body, and the laser charges with a visible energy buildup before firing.",
          "Safe positioning against Askard means staying mobile and watching the ground. When you see tentacle indicators, move away from the marked positions immediately — the eruption timing is consistent, so you can reposition and punish during the animation. The slam has a shorter telegraph but a generous recovery window; dodge away on the wind-up and close in during the slam's recovery.",
          "The laser is Askard's most dangerous attack but also its longest punish window. The charge-up gives you time to position behind the boss or perpendicular to the beam's path. Once the laser fires, Askard is committed to the animation and cannot react — this is your best damage window of the fight.",
        ],
      },
      {
        heading: "Qliphoth",
        paragraphs: [
          "Qliphoth is a bullet-hell-style boss that fills the arena with projectile patterns. Unlike melee-focused bosses, Qliphoth demands that you read the bullet patterns as shapes and find the safe gaps within them, rather than trying to dodge each projectile individually. This shift in mental model — from dodging to navigating — is the key to the fight.",
          "Common projectile patterns include spirals that rotate around the boss, waves that sweep across the arena, and clusters that split into diverging streams. Each pattern has built-in gaps; your task is to identify where the gap is and move into it before the projectiles arrive. Stay at mid-range: too close and you have no reaction time, too far and the patterns spread too wide to find gaps.",
          "Qliphoth's punish windows come between projectile salvos. After a pattern resolves, there is typically a brief pause before the next one begins. Use this window to deal damage, then return to defensive movement when the next pattern starts. Do not overcommit during punish windows — one extra hit is not worth taking a full salvo to the face.",
        ],
      },
      {
        heading: "Rotating Staff Demon",
        paragraphs: [
          "This boss wields a staff that sweeps in wide arcs, creating rotating attack patterns that cover large portions of the arena. The core challenge is that the staff's rotation means safe zones shift continuously — you cannot stand in one spot and expect it to remain safe. You must move with the rotation, staying ahead of the sweep.",
          "The staff's sweep has a consistent speed, which means you can predict where the safe zone will be by tracking the rotation direction. When the boss telegraphs a direction change or a new attack type, reposition immediately — these transitions are where players get caught trying to maintain an old pattern that no longer applies.",
          "The punish window appears after a full rotation cycle, when the boss briefly pauses before starting the next pattern. This window is shorter than Askard's or Qliphoth's, so prioritize burst damage over sustained strings. If your weapon has slow attacks, time them to land during this window rather than starting them during the rotation phase.",
        ],
      },
      {
        heading: "Final Boss (Chapter Six)",
        paragraphs: [
          "The final boss of Sephiria appears at the end of chapter six and features two distinct phases. Phase one introduces the boss's base move set; phase two, triggered at a health threshold, adds new attacks, modifies existing patterns, and increases aggression. The transition itself can include a burst attack, so be prepared to dodge when the phase change occurs.",
          "In phase one, focus on learning the base patterns and identifying punish windows. Treat this phase as an extended observation period — you want to enter phase two with as much health and as many resources as possible. Do not burn potions or limited-use items in phase one unless absolutely necessary.",
          "Phase two demands everything you learned in phase one plus adaptation to the new patterns. The key is recognizing which phase-one attacks are modified and which new attacks are added. If an attack looks similar to a phase-one move but has a slight timing difference, trust the new timing — assuming the old pattern will get you hit. Stay patient, respect the increased aggression, and take only the safest punish windows.",
        ],
      },
      {
        heading: "Note on the Full Boss Roster",
        paragraphs: [
          "Sephiria contains over 10 bosses across its six chapters, but the complete official boss list has not been published by TEAM HORAY. The bosses described above — Askard, Qliphoth, the rotating staff demon, and the chapter-six final boss — are verified through official Steam store materials and community playthroughs. Additional bosses exist in earlier and mid chapters that are not yet documented here.",
          "As the community continues to explore the 1.0 release, this guide will be updated with verified information on additional bosses. If you encounter a boss not described here, apply the same universal method: observe first, identify telegraphs and punish windows, then execute safe damage. The framework scales to any encounter.",
        ],
      },
    ],
    sources: [steamSource, steamGuideSource],
    related: ["beginner-guide", "builds", "progression-guide", "weapons-guide"],
  }),

  make({
    path: "co-op",
    title: "Co-op Guide",
    h1: "Sephiria Co-op Guide",
    eyebrow: "PLAY AS A TEAM",
    description:
      "Sephiria supports up to 4-player online co-op. Learn how to create and join games, how progression and revives work, how to trade items, and how co-op differs from solo play.",
    answer:
      "Yes, Sephiria supports up to 4 players in online co-op. You can create or join games through the online lobby system. All players earn Sapphires from the run, downed teammates can be revived by other players, and items can be exchanged during a run. Co-op scales difficulty to accommodate the party size, and the experience differs from solo play in pacing, build synergy, and risk tolerance.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-coop.webp",
    heroImageAlt: "Sephiria co-op guide screenshot showing multiple players in combat",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Does Sephiria Support Co-op?",
        paragraphs: [
          "Yes. Sephiria fully supports up to 4-player online co-op as of the 1.0 release on July 31, 2026. This is a core feature, not a post-launch addition — the game was designed with cooperative play in mind from the beginning. You can play the entire game, including all six chapters and the final boss, in co-op.",
          "The game also fully supports controllers (Xbox and PlayStation controllers), meaning a group can mix and match keyboard-and-mouse and controller players without issues. Cross-platform play between Windows and macOS is supported since the game is available on both platforms.",
        ],
      },
      {
        heading: "Creating and Joining Games",
        paragraphs: [
          "To start a co-op session, the host creates an online lobby from the main menu. Other players can join through an invite code or by searching for public lobbies. The host's progression determines the starting point — guests join at the host's current chapter, meaning a new player can be carried through later content by a more experienced host.",
          "If you are joining someone else's game, keep in mind that your own single-player progression is separate. Sapphires and Destiny Inscription progress are earned on your own save file, but story progression in a co-op session may not advance your solo save in the same way. Confirm the specifics in-game, as the system may have nuances around which progress carries over.",
        ],
      },
      {
        heading: "Co-op Progression and Sapphires",
        paragraphs: [
          "All players in a co-op run earn Sapphires from defeating bosses and completing the run. This means co-op is a viable way to grind permanent progression — even if your character dies, you may still receive Sapphires if the team completes the encounter. This makes co-op particularly valuable for newer players who want to build their Destiny Inscription while learning from more experienced teammates.",
          "Item and artifact pickups during a run are generally instanced or shared depending on the item type. Coordinate with your team on who takes what, especially for weapon-specific upgrades at the Anvil or rare artifacts. A team where one player has a coherent build will outperform a team where everyone grabbed everything equally.",
        ],
      },
      {
        heading: "Reviving Teammates",
        paragraphs: [
          "When a player is downed in co-op, they enter a downed state rather than dying immediately. Other players can revive them by approaching and interacting within a time window. The revive takes a few seconds, during which the reviving player is vulnerable — the rest of the team should cover them by drawing enemy attention.",
          "If a player is not revived in time, they are out for the rest of the encounter or until the next checkpoint, depending on the game's current rules. Managing revives is one of the most important co-op skills: knowing when to push for a revive and when to clear the room first is the difference between a full team and a solo finish.",
          "In practice, designate one player as the revive runner when someone goes down — typically the player closest or the one with the most mobility. The other players focus on creating space by clearing or controlling nearby enemies.",
        ],
      },
      {
        heading: "Trading Items and Solo vs Co-op Differences",
        paragraphs: [
          "Sephiria allows item trading between players during a co-op run. This is not just a convenience — it is a strategic tool. If one player finds an artifact that perfectly suits another player's build, they can hand it over. Coordinate builds at the start of a run so everyone knows what to look for and who gets what.",
          "Solo and co-op play feel meaningfully different. In solo, you control all decisions and pacing, which is ideal for learning and for executing precise builds. In co-op, the screen gets busier, enemies may be more numerous or tougher to compensate for the party size, and you need to communicate to avoid overlap and wasted resources.",
          "Co-op excels for players who enjoy social gaming, build synergies between different weapon families, and shared learning. Solo excels for players who want full control, precise pacing, and the purest test of individual skill. Both modes are fully supported and viable for completing the entire game.",
        ],
      },
    ],
    sources: [steamSource, releaseAnnouncementSource],
    related: ["beginner-guide", "builds", "boss-guide", "review"],
  }),

  make({
    path: "review",
    title: "Sephiria Review",
    h1: "Sephiria Review",
    eyebrow: "WHO IS IT FOR?",
    description:
      "A grounded review of Sephiria 1.0 — combat depth, build freedom, pixel art, and co-op against Early Access legacy issues and weapon accessibility. Clear recommendation included.",
    answer:
      "Sephiria 1.0 is a strong top-down action Roguelite with deep combat across six weapon families, over 200 weapon upgrades, 300-plus artifacts, and excellent pixel art from the Dungreed team. It supports 4-player co-op and offers substantial build freedom. Downsides include Early Access-era rough edges and steep learning curves on some weapons. Recommended for action Roguelite fans who value build crafting and replayability.",
    category: "Guides",
    version,
    platforms,
    informationType,
    heroImage: "/screenshots/sephiria-weapons.webp",
    heroImageAlt: "Sephiria review screenshot showing weapon combat gameplay",
    heroImageCaption: "Official Sephiria screenshot from Steam store page.",
    heroImageSourceUrl: "https://store.steampowered.com/app/2436940/Sephiria/",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Sephiria is a top-down action Roguelite developed by TEAM HORAY, the studio behind Dungreed. The 1.0 version was released on July 31, 2026, for Windows and macOS. You play as a rabbit warrior descending from the tower-top village of Bunnyville into a high tower filled with enemies, bosses, and treasures across six chapters.",
          "The game features six weapon families — Sword and Shield, Great Sword, Dagger, Crossbow, Staff, and Magic Tome — each with over 50 upgrades. Combined with roughly 300 artifacts, 70 tablets, and over 30 potions, the build space is enormous. The meta-progression system, Destiny Inscription, provides permanent upgrades through a hexagonal-node skill tree funded by Sapphires earned in runs.",
          "This review is based on verified game facts from the official Steam store page and community guides. It evaluates combat depth, build freedom, presentation, co-op, and known weaknesses to help you decide whether Sephiria fits your tastes.",
        ],
      },
      {
        heading: "Strengths",
        paragraphs: [
          "Combat depth is Sephiria's headline strength. Six distinct weapon families each have their own attack rhythm, range, and defensive options, meaning the game effectively offers six different ways to play. The 200-plus weapon upgrades ensure that even within a single weapon family, no two runs feel identical. Boss encounters are telegraph-based and reward observation, making victories feel earned rather than lucky.",
          "Build freedom is exceptional. With 300-plus artifacts, 70 tablets, and the interplay between Anvil forging, Enchantment Altar upgrades, Mystery Pot conversions, and Tree Root Miracles, the number of viable builds is vast. The Destiny Inscription adds a permanent progression layer that rewards every run, successful or not, creating a satisfying long-term power curve.",
          "Pixel art presentation is top-tier. TEAM HORAY's experience with Dungreed shows in clean, readable animations, distinct enemy silhouettes, and environments that communicate gameplay information visually. The art style is consistent and polished.",
          "Co-op is fully integrated, not bolted on. Up to 4 players can join online, trade items, revive each other, and share in Sapphires earned. Full controller support means mixed-input groups work seamlessly. The game also ships with 12 language options, broadening accessibility.",
        ],
      },
      {
        heading: "Weaknesses",
        paragraphs: [
          "Early Access legacy issues are present. While the 1.0 release is the complete version, some systems bear traces of their EA evolution — balance quirks, interface inconsistencies, or content that feels less polished than the core loop. These are minor relative to the overall quality but noticeable to players sensitive to rough edges.",
          "Some weapon families have steep accessibility curves. The Staff and Magic Tome, in particular, require understanding projectile behavior, cooldown management, and positioning in ways that melee weapons do not. New players who pick these weapons first may struggle more than necessary, potentially getting a false impression of the game's difficulty.",
          "The sheer volume of content — 300-plus artifacts, 70 tablets, 200-plus weapon upgrades — can be overwhelming for players who prefer curated, focused experiences. If you dislike reading item descriptions or experimenting with combinations, the build-crafting layer may feel like busywork rather than engagement.",
        ],
      },
      {
        heading: "Who Should Play It",
        paragraphs: [
          "Sephiria is recommended for players who enjoy action Roguelites with meaningful build decisions — fans of games like Hades, Dead Cells, or Dungreed itself will find familiar satisfaction here. If you value replayability, co-op gaming with friends, and pixel art aesthetics, Sephiria delivers on all three.",
          "Players who prefer linear, story-driven experiences or who dislike repeated runs and permadeath mechanics may find the Roguelite structure frustrating. Similarly, players who want a curated, guided experience with minimal decision load may find the open-ended build system more burdensome than liberating.",
          "If you enjoyed Dungreed, Sephiria is an easy recommendation — it refines and expands on the same design philosophy with a larger scope, more weapon variety, and full co-op support.",
        ],
      },
      {
        heading: "Verdict",
        paragraphs: [
          "Sephiria 1.0 is a confidently crafted action Roguelite that earns its place in the genre. The combat is deep and readable, the build space is vast without being arbitrary, the pixel art is excellent, and the co-op integration is genuine rather than superficial. The Early Access rough edges and some weapon accessibility issues are real but do not undermine the core experience.",
          "For action Roguelite fans — especially those who enjoyed Dungreed — Sephiria is recommended. The combination of six weapon families, 300-plus artifacts, permanent meta-progression, and 4-player co-op provides enough content and variety to justify the purchase for anyone who finds the core loop appealing. Start with the Sword and Shield, follow the Beginner Guide, and let the game teach you one system at a time.",
        ],
      },
    ],
    sources: [steamSource, v1AnnouncementSource, releaseAnnouncementSource],
    related: ["beginner-guide", "is-sephiria-worth-playing", "co-op", "weapons-guide"],
  }),
];
