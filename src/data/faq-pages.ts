import { make } from "./content-helpers";

const steamSource = {
  label: "Sephiria on Steam",
  url: "https://store.steampowered.com/app/2436940/Sephiria/",
  level: "Official" as const,
  lastChecked: "2026-08-04",
};

const version = "1.0";
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
      "Sephiria is worth considering if you enjoy action roguelites with deep build crafting. Check Steam for current regional pricing and review status before deciding.",
    category: "FAQ",
    version,
    platforms,
    informationType,
    sources: [steamSource],
    sections: [
      {
        heading: "Who will enjoy Sephiria",
        paragraphs: [
          "Sephiria is a top-down action roguelite from TEAM HORAY, the studio behind Dungreed. If you like refining a build through repeated runs — combining one of six weapon families with the game's artifacts, tablets, and weapon upgrades — the core loop will feel familiar and rewarding.",
          "The game rewards patience and observation over pure reaction speed. Players who enjoy studying enemy patterns and gradually tightening their runs tend to click with Sephiria's design.",
        ],
      },
      {
        heading: "Current state and value",
        paragraphs: [
          "Sephiria left Early Access and launched its 1.0 release on 2026-07-31, after an EA period that ran from 2025-04-03. The shipped version spans six chapters and more than 10 bosses, with Simplified Chinese interface and subtitles among 12 interface/subtitle languages.",
          "Check Steam for current regional pricing, discounts, and review status — these change over time and vary by region.",
        ],
      },
      {
        heading: "Who might want to wait",
        paragraphs: [
          "If you dislike repeating content after death or prefer linear, story-driven campaigns, the roguelite structure may feel repetitive. Sephiria does not hold your hand, and several systems are learned through experimentation rather than tutorial text.",
          "The 1.0 build is content-complete. Watch official gameplay footage on the Steam store page to confirm the combat rhythm appeals to you before buying.",
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
      "What the official store confirms about Sephiria's 4-player online co-op — item exchange and teammate revival — and what to verify in the current version.",
    answer:
      "Yes, the official store confirms Sephiria supports online co-op for up to 4 players, with item exchange and teammate revival.",
    category: "FAQ",
    version,
    platforms,
    informationType,
    sources: [steamSource],
    sections: [
      {
        heading: "What the official store confirms",
        paragraphs: [
          "Sephiria includes online co-op for up to four players. The Steam store lists Online Co-op as a feature and confirms item exchange between players and the ability to revive downed teammates.",
          "Players are normally restricted from joining multiplayer lobbies that are ahead of their own main-story progress.",
        ],
      },
      {
        heading: "Progression, revival, and item exchange",
        paragraphs: [
          "The official store confirms teammates can be revived and items can be exchanged mid-run, making loot distribution a cooperative decision rather than a competition.",
          "Exact lobby flow, matchmaking options, loot ownership, and story-sync rules are not published in official materials; confirm them on the store page or in the current build.",
        ],
      },
      {
        heading: "Co-op versus solo",
        paragraphs: [
          "Sephiria is fully playable solo; the store lists Single-player and Online Co-op as separate features. Co-op adds a social layer by sharing aggro and combining complementary build strengths.",
          "If you plan to play co-op, coordinate pace and roles before starting. Specific difficulty or scaling differences between solo and co-op are not published and should be checked in the current version.",
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
          "Sephiria's challenge comes from pattern recognition and decision load rather than raw reaction speed. Early encounters are approachable, but enemy telegraphs get faster and more layered as you push deeper into the six chapters and toward the more than 10 bosses.",
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
          "The Sword and Shield is commonly recommended as the most forgiving starter because it pairs offense with a block, giving you a defensive answer when you misread an attack. Stick with one weapon family for several runs so mastery compounds.",
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
      "How to set up and tune controller input in Sephiria, and what to verify about controller compatibility in the current game version.",
    answer:
      "Sephiria includes gamepad input support, but the Steam store page currently does not label it as Full Controller Support. Controller compatibility, prompts, and remapping behavior should be checked with the specific device and current game version.",
    category: "FAQ",
    version,
    platforms,
    informationType,
    sources: [steamSource],
    sections: [
      {
        heading: "Controller support status",
        paragraphs: [
          "Sephiria includes gamepad input support, but the Steam store page currently does not label it as Full Controller Support. Controller compatibility, prompts, and remapping behavior should be checked with the specific device and current game version.",
          "Do not assume every Xbox, PlayStation, or macOS gamepad has been verified. Confirm your specific device against the current build before relying on controller play.",
        ],
      },
      {
        heading: "How to configure your controller",
        paragraphs: [
          "Plug in your controller before launching the game and let Steam detect it. If the default bindings feel off, use Steam Input (via Big Picture mode or the controller settings panel) to remap buttons, adjust dead zones, or swap to a community configuration.",
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
