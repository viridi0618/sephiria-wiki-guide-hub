// Sephiria Boss pages - data-driven from extracted BossSpeech events.
// Attack calls, phase cues, intro/death quotes are real dialogue extracted from en-US.json.
// Recommended-build pairings are editorial analysis and are labeled as such.
import { make } from "./content-helpers";
import { bosses } from "@/data/game-data/bosses";
import type { GuidePageData, GuideSection, GuideSource } from "@/lib/types";

const STEAM_URL = "https://store.steampowered.com/app/2436940/Sephiria/";

const bossSources: GuideSource[] = [
  { label: "Sephiria on Steam", url: STEAM_URL, level: "Official", lastChecked: "2026-08-04" },
  {
    label: "Extracted game data (en-US.json)",
    url: STEAM_URL,
    level: "Official",
    lastChecked: "2026-08-04",
    note: "Boss names, attack call-outs, and dialogue extracted from the game's localization files.",
  },
];

const BOSS_VERSION = "1.0";
const BOSS_PLATFORMS = "PC (Windows, macOS)";
const BOSS_INFORMATION_TYPE =
  "Extracted game dialogue + editorial boss guidance; mechanics not yet published by TEAM HORAY";

interface BossPageInput {
  bossId: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  answer: string;
  warning: string;
  recommendedBuilds: { name: string; href: string; reason: string }[];
  tips: string[];
  related?: string[];
}

/** Editorial pairing: boss to weapon builds that fit the encounter style. */
const buildPathByName: Record<string, string> = {
  "Sword and Shield": "/builds/sword-and-shield/",
  Greatsword: "/builds/greatsword/",
  Dagger: "/builds/dagger/",
  Crossbow: "/builds/crossbow/",
  Staff: "/builds/staff/",
  Grimoire: "/builds/grimoire/",
};

/** Map build name to page path for related arrays. */
const buildPagePath: Record<string, string> = {
  "Sword and Shield": "builds/sword-and-shield",
  Greatsword: "builds/greatsword",
  Dagger: "builds/dagger",
  Crossbow: "builds/crossbow",
  Staff: "builds/staff",
  Grimoire: "builds/grimoire",
};

function bossSections(input: BossPageInput): GuideSection[] {
  const boss = bosses.find((b) => b.id === input.bossId);
  const sections: GuideSection[] = [];
  if (!boss) return sections;

  // 1. Overview
  sections.push({
    heading: "Boss Overview",
    paragraphs: [
      `${boss.displayName} appears in the game's boss roster. The information below is extracted from the game's localization data (BossSpeech keys) - the boss's own dialogue and attack call-outs are real in-game text, not editorial reconstruction.`,
    ],
    table: {
      headers: ["Attribute", "Value"],
      rows: [
        ["Boss (in-game ID)", boss.displayName],
        ["Chapter(s)", boss.chapters.length ? `Chapter ${boss.chapters.join(", ")}` : "Chapter marker not present in extracted data"],
        ["Dialogue events in data", String(boss.eventCount)],
      ],
    },
    note: "Extracted from game files (en-US.json BossSpeech keys).",
  });

  // 2. Known attack call-outs
  if (boss.attackCalls.length) {
    sections.push({
      heading: "Known Attack Call-Outs",
      paragraphs: [
        "During the fight this boss announces its attacks. These call-out lines are extracted verbatim from the game's localization data - they tell you which attack is coming.",
      ],
      bullets: boss.attackCalls.map((a) => `"${a}"`),
      note: "Attack call-outs extracted verbatim from game data.",
    });
  }

  // 3. Phase change cues
  if (boss.phaseCues.length) {
    sections.push({
      heading: "Phase Change Cues",
      paragraphs: [
        "The data contains phase-transition dialogue, which signals the boss switching to a new attack set.",
      ],
      bullets: boss.phaseCues.map((p) => `"${p}"`),
      note: "Phase cue dialogue extracted from game data.",
    });
  }

  // 4. Intro and defeat dialogue
  if (boss.introLines.length || boss.deathLines.length) {
    sections.push({
      heading: "Intro and Defeat Dialogue",
      paragraphs: ["Context lines from the encounter, extracted from game data."],
      bullets: [
        ...(boss.introLines.length ? [`Intro: ${boss.introLines.map((l) => `"${l}"`).join(" ")}`] : []),
        ...(boss.deathLines.length ? [`On defeat: ${boss.deathLines.map((l) => `"${l}"`).join(" ")}`] : []),
      ],
      note: "Dialogue extracted verbatim from game data.",
    });
  }

  sections.push({
    heading: "How to Identify the Encounter",
    paragraphs: [
      boss.introLines.length
        ? `Use the opening localization line as evidence: "${boss.introLines[0]}". The exact visual model remains unverified unless the asset map says otherwise.`
        : "No verified opening line identifies this encounter; use the boss name shown in game and treat visual identity as unverified.",
    ],
    note: "Verified text from extracted localization; visual interpretation remains Unknown / Unverified.",
  });

  sections.push({
    heading: "Before the Fight",
    paragraphs: ["Open the linked build guide, confirm that its basic loop works without the missing core option, and preserve one defensive or repositioning answer. Continue only when the build can reset after a mistake."],
    note: "Editorial strategy based on verified game data.",
  });

  sections.push({
    heading: "How to Win",
    bullets: [
      "Observe the first verified call-out before committing.",
      "Use the call-out as a warning, not as proof of an undocumented hitbox or direction.",
      "Take the shortest safe punish after the cue resolves.",
      "Reset positioning and resources before waiting for the next event.",
    ],
    note: "Editorial strategy based on verified game data; exact windows and directions require visual confirmation.",
  });

  sections.push({
    heading: "Common Failure Reasons",
    bullets: [
      "Treating a dialogue event count as a count of attacks or phases.",
      "Committing through a verified call-out before its visual response is understood.",
      "Entering without a defensive or repositioning fallback when the preferred skill is absent.",
    ],
    note: "Editorial strategy based on verified game data.",
  });
  // Rewards are intentionally explicit because the extracted enemy data has no verified drops.
  sections.push({
    heading: "Rewards and Drops",
    paragraphs: ["Verified drops are not available in the extracted data."],
    note: "Unknown / Unverified: do not infer rewards from asset names or dialogue.",
  });
  // 5. Recommended builds
  if (input.recommendedBuilds.length) {
    sections.push({
      heading: "Recommended Builds",
      paragraphs: [
        "Builds that suit this encounter. The pairing is editorial analysis based on the weapon families' extracted traits - it is not an official tier list.",
      ],
      table: {
        headers: ["Build", "Why it fits"],
        rows: input.recommendedBuilds.map((rb) => [
          `<a href="${rb.href}">${rb.name}</a>`,
          rb.reason,
        ]),
      },
      note: "Build pairings are editorial analysis; weapon traits come from extracted game data.",
    });
  }

  // 6. Tips
  if (input.tips.length) {
    sections.push({
      heading: "Tips",
      paragraphs: [
        "General encounter advice. Attack timings and exact mechanics are not yet published by TEAM HORAY, so treat these as starting points and confirm in-game.",
      ],
      bullets: input.tips,
      note: "Tips are editorial guidance; verify exact timings in-game.",
    });
  }

  return sections;
}

const bossSlugs: Record<string, string> = {
  Askard: "askard",
  MoleBigBomb: "mole-big-bomb",
  MadArmadillo: "mad-armadillo",
  BirdDemon: "bird-demon",
  Larid: "larid",
  OinkKing: "oink-king",
};

function bossPage(input: BossPageInput): GuidePageData {
  // Build related array: boss-guide hub + specific build pages + progression guide
  const buildRelated = input.recommendedBuilds
    .map((rb) => buildPagePath[rb.name])
    .filter(Boolean);
  const defaultRelated = ["boss-guide", ...buildRelated, "progression-guide"];

  return make({
    path: `bosses/${bossSlugs[input.bossId] ?? input.bossId}`,
    title: input.title,
    h1: input.h1,
    eyebrow: input.eyebrow,
    description: input.description,
    answer: input.answer,
    warning: input.warning,
    category: "Guides",
    categoryPath: "boss-guide",
    breadcrumbLabel: "Boss Guide",
    pageType: "article",
    published: "2026-08-04",
    updated: "2026-08-04",
    version: BOSS_VERSION,
    platforms: BOSS_PLATFORMS,
    informationType: BOSS_INFORMATION_TYPE,
    sections: bossSections(input),
    faqs: [],
    sources: bossSources,
    related: input.related ?? defaultRelated,
  });
}

export const bossPages: GuidePageData[] = [
  bossPage({
    bossId: "Askard",
    title: "Askard Boss Guide",
    h1: "Askard - Sephiria Boss Guide",
    eyebrow: "THE CONTRACTOR",
    description:
      "Askard boss guide - chapter appearances, attack call-outs, phase cues, and dialogue extracted from Sephiria game data, plus editorial build recommendations.",
    answer:
      "Askard is a recurring Sephiria boss with dialogue events across Chapters 2, 3, and 5. The encounter reuses a core loop with new mechanics each chapter; the boss's own attack call-outs and phase-change lines are extracted from the game data.",
    warning:
      "Exact attack damage, hitboxes, and phase timings are not published by TEAM HORAY - treat pattern descriptions as observational starting points.",
    recommendedBuilds: [
      { name: "Greatsword", href: buildPathByName.Greatsword, reason: "Interrupt-heavy swings can stop slow telegraphed attacks during recovery windows." },
      { name: "Sword and Shield", href: buildPathByName["Sword and Shield"], reason: "Perfect-guard converts the boss's telegraphed hits into safe counter damage." },
    ],
    tips: [
      "Spend the first cycle reading the boss's call-outs before committing damage.",
      "Phase changes are announced by dialogue - reset to a safe position when you hear the cue.",
      "Keep a dodge in reserve for the recovery trade; overcommitting costs more than it gains.",
    ],
  }),
  bossPage({
    bossId: "MoleBigBomb",
    title: "Odner (Mole Big Bomb) Boss Guide",
    h1: "Odner, the Mole Bomb - Sephiria Boss Guide",
    eyebrow: "EXPLOSIVE ENGINEER",
    description:
      "Odner (Mole Big Bomb) boss guide - attack call-outs, phase cues, and dialogue extracted from Sephiria game data, plus editorial build recommendations.",
    answer:
      "Odner (in-game event key MoleBigBomb) is an explosive-themed boss with 23 dialogue events in the game data, including a long string of named attack call-outs such as Tackle, Bomb Punch, Liftoff, and Propulsion. These lines are extracted verbatim from the game's localization files.",
    warning:
      "The data confirms the attack names via dialogue but does not include damage values or explosion radii - confirm hitboxes in-game.",
    recommendedBuilds: [
      { name: "Dagger", href: buildPathByName.Dagger, reason: "High mobility and parry help you stay clear of telegraphed explosions while punishing recovery." },
      { name: "Crossbow", href: buildPathByName.Crossbow, reason: "Ranged damage keeps you outside explosion pressure between reload windows." },
    ],
    tips: [
      "The boss announces each attack - treat the call-out as your telegraph.",
      "When you hear a propulsion or liftoff line, expect an aerial or long-range threat.",
      "Do not stack your damage in one spot; the fight punishes stationary positioning.",
    ],
  }),
  bossPage({
    bossId: "MadArmadillo",
    title: "Mad Armadillo Boss Guide",
    h1: "Mad Armadillo - Sephiria Boss Guide",
    eyebrow: "ANOMALY",
    description:
      "Mad Armadillo boss guide - attack call-outs, phase dialogue, and intro/defeat lines extracted from Sephiria game data, plus editorial build recommendations.",
    answer:
      "Mad Armadillo is a boss associated with space-time anomaly dialogue in the game data. The encounter includes golem-recovery error lines, suggesting a mechanic where the boss attempts self-repair. 13 dialogue events are present in the extracted data.",
    warning:
      "Mechanic details such as the golem recovery behavior are inferred from dialogue and are not published mechanics.",
    recommendedBuilds: [
      { name: "Greatsword", href: buildPathByName.Greatsword, reason: "Wide-arc swings punish the boss during recovery states." },
      { name: "Staff", href: buildPathByName.Staff, reason: "Ranged magic lets you maintain damage while staying clear of anomaly zones." },
    ],
    tips: [
      "The dramatic-dying and recovery dialogue suggests a last-stand or repair phase - expect an aggressive final state.",
      "Time your dodges to the telegraph rather than reacting to projectiles.",
    ],
  }),
  bossPage({
    bossId: "BirdDemon",
    title: "Bird Demon Boss Guide",
    h1: "Bird Demon - Sephiria Boss Guide",
    eyebrow: "TREE'S GUARDIAN",
    description:
      "Bird Demon boss guide - intro, attack, and defeat dialogue extracted from Sephiria game data, plus editorial build recommendations.",
    answer:
      "Bird Demon is a boss tied to the Tree's domain in the game data. Its intro lines announce that the area is under the domain of the Tree and that it will test your strength. 6 dialogue events are present in the extracted data.",
    warning:
      "This boss has fewer extractable dialogue events - most mechanics are not documented and should be learned in-game.",
    recommendedBuilds: [
      { name: "Crossbow", href: buildPathByName.Crossbow, reason: "Maintains safe distance while the boss closes ground." },
      { name: "Sword and Shield", href: buildPathByName["Sword and Shield"], reason: "Block-while-move covers the boss's dive and sweep attacks." },
    ],
    tips: [
      "The boss guards the Tree's domain - expect arena pressure that punishes camping a single corner.",
      "Use the first cycle to learn its approach patterns before committing damage.",
    ],
  }),
  bossPage({
    bossId: "Larid",
    title: "Larid Boss Guide",
    h1: "Larid - Sephiria Boss Guide",
    eyebrow: "THE MISSION",
    description:
      "Larid boss guide - intro and defeat dialogue extracted from Sephiria game data, plus editorial build recommendations.",
    answer:
      "Larid is a mission-driven boss in the game data. Its intro dialogue states 'And so my mission begins,' and its defeat lines reflect a failed mission. 4 dialogue events are present in the extracted data.",
    warning:
      "Larid has limited extractable dialogue - attack mechanics are not documented in the data.",
    recommendedBuilds: [
      { name: "Dagger", href: buildPathByName.Dagger, reason: "Fast multi-hit pressure keeps the boss locked into defensive recovery." },
      { name: "Greatsword", href: buildPathByName.Greatsword, reason: "Hard hits punish the boss's slower recovery windows." },
    ],
    tips: [
      "Learn the boss's mission-phase behavior before pushing damage.",
      "Apply the universal method: observe one full cycle, then commit safe damage.",
    ],
  }),
  bossPage({
    bossId: "OinkKing",
    title: "Oink King Boss Guide",
    h1: "Oink King - Sephiria Boss Guide",
    eyebrow: "THE HOG",
    description:
      "Oink King boss guide - intro and defeat dialogue extracted from Sephiria game data, plus editorial build recommendations.",
    answer:
      "Oink King is a boss introduced with territorial dialogue in the game data ('How dare an outsider come here'). 3 dialogue events are present in the extracted data.",
    warning:
      "Oink King has minimal extractable dialogue - most mechanics must be learned in-game.",
    recommendedBuilds: [
      { name: "Crossbow", href: buildPathByName.Crossbow, reason: "Kiting keeps you outside the boss's charge range." },
      { name: "Grimoire", href: buildPathByName.Grimoire, reason: "Spell rotation sustains pressure while you reposition." },
    ],
    tips: [
      "The territorial intro suggests an aggressive charge-in opener - be ready to dodge immediately.",
      "Keep moving between attack windows; a stationary player is an easy target.",
    ],
  }),
];

export function getBossPage(bossId: string): GuidePageData | undefined {
  return bossPages.find((p) => p.path === `bosses/${bossId}`);
}

