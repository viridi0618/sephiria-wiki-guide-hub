import { make } from "./content-helpers";

const steamSource = {
  label: "Sephiria on Steam",
  url: "https://store.steampowered.com/app/2436940/Sephiria/",
  level: "Official" as const,
  lastChecked: "2026-08-03",
};

const version = "1.0 (Released 2026-07-31)";
const platforms = "PC (Windows, macOS)";
const informationType = "Official feature verification";

export const faqPages = [
  make({
    path: "is-sephiria-worth-playing",
    title: "Is Sephiria Worth Playing?",
    h1: "Is Sephiria Worth Playing?",
    eyebrow: "QUICK ANSWER",
    description:
      "A direct fit check for action roguelite fans considering Sephiria after its 1.0 launch.",
    answer:
      "Yes — Sephiria is worth playing if you enjoy action roguelites with deep build crafting.",
    category: "FAQ",
    version,
    platforms,
    informationType,
    sources: [steamSource],
    sections: [
      {
        heading: "Who will enjoy Sephiria",
        paragraphs: [
          "Sephiria is a top-down action roguelite from TEAM HORAY, the studio behind Dungreed. If you like refining a build through repeated runs — combining one of six weapon families with 200-plus weapon upgrades, roughly 300 artifacts, and 70 tablets — the core loop will feel familiar and rewarding.",
          "The game rewards patience and observation over pure reaction speed. Players who enjoy studying enemy patterns and gradually tightening their runs tend to click with Sephiria's design.",
        ],
      },
      {
        heading: "Current state and value",
        paragraphs: [
          "Sephiria left Early Access and launched its 1.0 release on 2026-07-31, after an EA period that ran from 2025-04-03. The shipped version spans six chapters and 10-plus bosses, with full Simplified Chinese support among 12 languages.",
          "Reception is strong: Steam shows roughly 90% positive in recent reviews and an overall 'Very Positive' rating. At launch the game is discounted 40% to ¥34.80 (regular price ¥58), making the current price-to-content ratio notably favorable.",
        ],
      },
      {
        heading: "Who might want to wait",
        paragraphs: [
          "If you dislike repeating content after death or prefer linear, story-driven campaigns, the roguelite structure may feel repetitive. Sephiria does not hold your hand, and several systems are learned through experimentation rather than tutorial text.",
          "Even so, the 1.0 build is content-complete and stable, so there is no longer an Early Access caveat. Watch official gameplay footage on the Steam store page to confirm the combat rhythm appeals to you before buying.",
        ],
      },
    ],
    related: ["review", "beginner-guide", "is-sephiria-hard"],
  }),

  make({
    path: "is-sephiria-multiplayer",
    title: "Is Sephiria Multiplayer?",
    h1: "Is Sephiria Multiplayer?",
    eyebrow: "QUICK ANSWER",
    description:
      "How Sephiria's 4-player online co-op works, including progression, revival, and item exchange.",
    answer:
      "Yes, Sephiria supports online co-op for up to 4 players.",
    category: "FAQ",
    version,
    platforms,
    informationType,
    sources: [steamSource],
    sections: [
      {
        heading: "How co-op works",
        paragraphs: [
          "Sephiria includes online co-op for up to four players, letting a group descend into the tower together as a shared experience rather than a spectator mode. Everyone participates in combat and progression during the same run.",
          "Team up through the in-game co-op menu: the host starts a run and invites friends, who join the active session. Exact lobby flow and matchmaking options can be confirmed on the official Steam store page for the current build.",
        ],
      },
      {
        heading: "Progression, revival, and item exchange",
        paragraphs: [
          "Co-op progress syncs across the party so everyone advances through the same chapter together. Downed teammates can be revived, which keeps runs going even when one player takes a bad engagement.",
          "Players can also exchange items with each other mid-run, making it easy to pass a key artifact or tablet to the party member whose build benefits most. This turns loot distribution into a cooperative decision rather than a competition.",
        ],
      },
      {
        heading: "Co-op versus solo",
        paragraphs: [
          "Sephiria is fully playable solo, and the game is balanced to be completed alone. Co-op adds a social layer that softens difficulty spikes by sharing aggro and combining complementary build strengths.",
          "If you plan to play co-op, coordinate pace and roles before starting. Expect some encounters to feel noticeably easier with a full party, since four players can cover more threats simultaneously.",
        ],
      },
    ],
    related: ["co-op", "beginner-guide", "review"],
  }),

  make({
    path: "is-sephiria-hard",
    title: "Is Sephiria Hard?",
    h1: "Is Sephiria Hard?",
    eyebrow: "QUICK ANSWER",
    description:
      "Where Sephiria's difficulty comes from and which weapons ease the learning curve.",
    answer:
      "Sephiria is moderately challenging — harder than most casual roguelites, but fair once you learn enemy patterns.",
    category: "FAQ",
    version,
    platforms,
    informationType,
    sources: [steamSource],
    sections: [
      {
        heading: "Where the difficulty comes from",
        paragraphs: [
          "Sephiria's challenge comes from pattern recognition and decision load rather than raw reaction speed. Early encounters are approachable, but enemy telegraphs get faster and more layered as you push deeper into the six chapters and toward the 10-plus bosses.",
          "The game also does not explain every system explicitly. You learn enemy patterns, upgrade synergies, and weapon mechanics through play, which can feel opaque during your first few runs.",
        ],
      },
      {
        heading: "The learning curve",
        paragraphs: [
          "If you have played other action roguelites, the curve will feel familiar. Newcomers to the genre should expect several runs to internalize the basic combat rhythm before runs start clicking.",
          "Boss encounters are the main difficulty spikes. They demand observation, positioning discipline, and a willingness to learn from repeated attempts — but their attacks are telegraphed, so deaths feel earned rather than random.",
        ],
      },
      {
        heading: "The most forgiving weapons",
        paragraphs: [
          "The Sword and Shield is the most forgiving starter because it pairs offense with a block, giving you a defensive answer when you misread an attack. Stick with one weapon family for several runs so mastery compounds.",
          "To reduce difficulty early, take survivability upgrades before chasing damage, and avoid complex synergies until the core loop feels comfortable. Co-op also naturally softens the experience by sharing aggro across the party.",
        ],
      },
    ],
    related: ["beginner-guide", "boss-guide", "tips-and-tricks"],
  }),

  make({
    path: "controller-support",
    title: "Sephiria Controller Support",
    h1: "Sephiria Controller Support",
    eyebrow: "QUICK ANSWER",
    description:
      "How to set up and tune controller input in Sephiria, including Xbox and PlayStation gamepads.",
    answer:
      "Yes, Sephiria has full controller support on Steam, including Xbox and PlayStation controllers.",
    category: "FAQ",
    version,
    platforms,
    informationType,
    sources: [steamSource],
    sections: [
      {
        heading: "Verified controller support",
        paragraphs: [
          "Sephiria's Steam store page lists 'Full Controller support,' and the game works out of the box with both Xbox and PlayStation controllers. Because Sephiria runs on Windows and macOS, any standard gamepad recognized by Steam will function.",
          "Controller support is part of the shipped 1.0 build (released 2026-07-31), not an Early Access caveat — the listing's controller badge reflects the current state of the game.",
        ],
      },
      {
        heading: "How to configure your controller",
        paragraphs: [
          "Plug in your controller before launching the game and let Steam detect it. If the default bindings feel off, open Steam Input (via Big Picture mode or the controller settings panel) to remap buttons, adjust dead zones, or swap to a community configuration.",
          "Test your setup in an early encounter before committing to a serious run, especially if you use a less common gamepad. Steam Input makes it easy to iterate without touching in-game settings.",
        ],
      },
      {
        heading: "Recommended layout",
        paragraphs: [
          "Map defensive actions like dodge and block to buttons you can reach without lifting your thumbs from the sticks, so movement and evasion never compete for the same finger. Attack, dodge, and item use should all stay accessible within a single hand position.",
          "Keyboard and mouse also work well, and the best choice depends on personal comfort and your favored weapon. Try both in early encounters — the input that feels natural during the learning phase will serve you better in the long run.",
        ],
      },
    ],
    related: ["beginner-guide", "tips-and-tricks", "review"],
  }),
];
