import { make } from "./content-helpers";
import { buildStrategySections } from "@/lib/strategy-sections";
import type { GuidePageData, GuideSource, GuideSection } from "@/lib/types";

const STEAM_URL = "https://store.steampowered.com/app/2436940/Sephiria/";

const buildSources: GuideSource[] = [
  { label: "Sephiria on Steam", url: STEAM_URL, level: "Official", lastChecked: "2026-08-04" },
];

const BUILD_HERO_IMAGE = "/screenshots/sephiria-builds.webp";
const BUILD_HERO_WIDTH = 1280;
const BUILD_HERO_HEIGHT = 720;
const BUILD_VERSION = "1.0";
const BUILD_PLATFORMS = "PC (Windows, macOS)";
const BUILD_INFORMATION_TYPE = "Editorial guide with official game facts and unverified community descriptions";

const BUILD_HERO_ALT = "Official Sephiria inventory screenshot showing artifacts and tablets.";
const BUILD_HERO_CAPTION = "Official Sephiria inventory screenshot showing artifacts and tablets. Source: Steam store page.";

interface BuildPageInput {
  path: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  answer: string;
  warning: string;
  sections: GuideSection[];
  related?: string[];
  verifiedData?: { weaponId: string; description?: string | null; relatedSkills?: string[] };
}

function buildPage(input: BuildPageInput): GuidePageData {
  const profileIdMap: Record<string, "swordShield" | "greatsword" | "dagger" | "crossbow" | "staff" | "grimoire"> = {
    "Sword and Shield": "swordShield",
    Greatsword: "greatsword",
    Dagger: "dagger",
    Crossbow: "crossbow",
    Staff: "staff",
    Grimoire: "grimoire",
  };
  const pid = input.verifiedData?.weaponId ? profileIdMap[input.verifiedData.weaponId] : undefined;
  return make({
    ...input,
    sections: pid ? [...input.sections, ...buildStrategySections(pid)] : input.sections,
    category: "Builds",
    categoryPath: "builds",
    version: BUILD_VERSION,
    platforms: BUILD_PLATFORMS,
    informationType: BUILD_INFORMATION_TYPE,
    heroImage: BUILD_HERO_IMAGE,
    heroImageAlt: BUILD_HERO_ALT,
    heroImageCaption: BUILD_HERO_CAPTION,
    heroImageWidth: BUILD_HERO_WIDTH,
    heroImageHeight: BUILD_HERO_HEIGHT,
    sources: buildSources,
    related: input.related ?? ["builds", "beginner-guide", "weapons-guide", "boss-guide"],
  });
}

const buildsHubSections: GuideSection[] = [
  {
    heading: "Six weapons, six rhythms",
    paragraphs: [
      "Sephiria has six weapon families, each with its own range, pace, and defensive options. This hub orients you to all six before you pick a page. The Steam store confirms six weapon families, each with more than 50 upgrades; the specific traits below are editorial and community assessments, not official ratings.",
    ],
    table: {
      headers: ["Build page", "Weapon family", "Range", "Pace", "Difficulty (community assessment)"],
      rows: [
        ["Sword and Shield", "Sword and Shield", "Short melee", "Mid-speed, defensive", "Low–mid"],
        ["Greatsword", "Greatsword", "Melee, wide arc", "Slow heavy hits", "Mid"],
        ["Dagger", "Dagger", "Close melee", "Multi-hit fast attack", "High"],
        ["Crossbow", "Crossbow", "Ranged", "Magazine-based", "Mid"],
        ["Staff", "Staff", "Ranged caster", "MP and cooldown gated", "Mid"],
        ["Grimoire", "Grimoire", "Mid-range caster", "MP-cost rotation", "Unverified"],
      ],
    },
    note: "Range, pace, and difficulty are editorial and community assessments; no official cross-weapon ratings are published.",
  },
  {
    heading: "How to choose",
    paragraphs: [
      "Pick by the problem you need to solve first. Defensive play points to Sword and Shield; reach and safety point to Crossbow or the casters; deliberate big hits point to Greatsword; high-skill parry play points to Dagger.",
    ],
    bullets: [
      "Want a defensive option? Sword and Shield.",
      "Want safety through distance? Crossbow, Staff, or Grimoire.",
      "Want committed, interrupt-heavy melee? Greatsword.",
      "Want fast, high-risk melee with a parry? Dagger.",
    ],
  },
  {
    heading: "What each build page covers",
    paragraphs: [
      "Every weapon page follows the same structure so you can compare like with like.",
    ],
    bullets: [
      "Playstyle role — what the weapon family is for.",
      "Core combat loop — the repeatable sequence to drill.",
      "Who this build suits — the player it fits.",
      "Strengths and weaknesses — honest trade-offs.",
      "Room combat — handling normal encounters.",
      "Boss combat — adapting the loop to a single target.",
      "Related entry points — where to go next.",
    ],
  },
  {
    heading: "Accuracy and sources",
    paragraphs: [
      "Official facts (six weapon families, more than 50 upgrades per family, platforms, release) come from the Steam store page. Weapon-specific traits and preferences are unverified community descriptions — We have not identified a verified English-language source for these weapon-specific descriptions. Confirm any mechanic in your current patch before committing a run to it.",
    ],
  },
];

export const buildsHub = make({
  path: "builds",
  title: "Sephiria Builds",
  h1: "Sephiria Builds",
  eyebrow: "BUILD WITH INTENT",
  description: "Six Sephiria weapon families, one plan — compare Sword and Shield, Greatsword, Dagger, Crossbow, Staff, and Grimoire, then pick the build that fits your run.",
  answer:
    "Sephiria has six weapon families, each with its own range, pace, and trade-offs. These pages explain each one's loop without inventing stats or official rankings.",
  category: "Builds",
  pageType: "category",
  version: BUILD_VERSION,
  platforms: BUILD_PLATFORMS,
  informationType: BUILD_INFORMATION_TYPE,
  heroImage: BUILD_HERO_IMAGE,
  heroImageAlt: BUILD_HERO_ALT,
  heroImageCaption: BUILD_HERO_CAPTION,
  heroImageWidth: BUILD_HERO_WIDTH,
  heroImageHeight: BUILD_HERO_HEIGHT,
  heroImageSourceUrl: STEAM_URL,
  sources: buildSources,
  sections: buildsHubSections,
  related: ["beginner-guide", "weapons-guide", "boss-guide"],
  pickerCta: "Find the playstyle that fits you — try the Build Picker",
});

const swordShieldSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Sword and Shield is Sephiria's defensive weapon family. You hold the shield to block while moving, and a perfect guard opens a counter-attack window. It is a mid-speed, short-range weapon whose identity is surviving long enough to punish.",
      "Reach is short and the counter-attack travels almost no distance, so this build is about reading attacks and standing your ground rather than chasing.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Approach under the shield, perfect-guard the incoming hit, punish with the counter, then reset behind the shield. The loop is deliberately slow and repeatable.",
    ],
    bullets: [
      "Close distance with the shield raised so ranged poke is absorbed.",
      "Time a perfect guard on the telegraphed attack to trigger the counter window.",
      "Spend the window on a counter, or on a wide swing when several enemies are clustered.",
      "Return to guard and reposition before the next exchange.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "New players and anyone who learns by surviving first. Sword and Shield is presented by community players as the most forgiving family: a mistimed guard still blocks, and you can move while shielding.",
      "It also suits players who enjoy reactive, defensive rhythms over execution-heavy offense.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Defensive option unique among the melee families; block-while-move.",
          "Perfect guard converts defense directly into a punish window.",
          "Community players rate it low-to-mid difficulty and forgiving for new players.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Very short range, and the counter-attack barely moves you forward.",
          "Damage output is slow relative to faster families.",
          "Mobility-heavy bosses can simply walk out of your punish range.",
        ],
      },
    ],
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Use the shield to walk through ranged enemies and group melee foes with positioning. When a cluster forms, a single wide swing clears several at once.",
      "Never drop guard to chase a runner; let enemies come to your shield and counter them on arrival.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Treat the boss fight as a guard drill. Spend the first cycle only observing telegraphs, then start perfect-guarding the most readable attack and countering it.",
      "Expand to a second punished attack only when you can still evade the response. Against mobile bosses, accept fewer counters rather than overcommitting forward.",
    ],
  },
  {
    heading: "Related entry points",
    paragraphs: [
      "Once the core loop is repeatable, move to the guides that answer your next decision.",
    ],
    bullets: [
      "Weapons Guide — compare Sword and Shield against the other five families.",
      "Boss Guide — turn perfect-guard observation into safer damage.",
      "Beginner Guide — keep your first runs decision-focused.",
      "Builds Hub — revisit the other weapon builds when you want to pivot.",
    ],
  },
];

const crossbowSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Crossbow is the ranged weapon family. Safety comes from distance, and the skill is magazine management: every reload is a decision. Community players describe branch choices as ranging from sustained fire-rate setups to slow, high-damage single-shot builds.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Kite at maximum range, fire through the magazine, and reload during a safe window.",
    ],
    bullets: [
      "Open engagements at range and keep enemies in a line.",
      "Plan your reload before the magazine empties.",
      "Reload during boss phase changes or after repositioning to cover.",
      "Choose a branch identity — sustained fire-rate or single-shot burst — and build around it.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "Players who like spacing, resource pacing, and kiting. If you enjoy planning reloads the way a melee player plans combos, Crossbow rewards that discipline.",
      "It is a mid-difficulty weapon by community assessment: the mechanics are simple, but magazine discipline and positioning under pressure separate good runs from great ones.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Ranged safety — most threats can be answered before they reach you.",
          "Magazine-based pace gives clear decision points.",
          "Branch options let you pick sustained output or burst.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Reload downtime is exploitable; melee pressure during a reload is dangerous.",
          "Branch builds play differently — a setup that worked for one may not transfer.",
          "Positioning mistakes are punished harder than for melee families.",
        ],
      },
    ],
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Funnel enemies into corridors and doorways so your shots cluster. Pre-plan a reload spot before you commit to a magazine, and never reload with a melee enemy in reach.",
      "Against mixed packs, kill the fastest closers first so you keep the spacing that keeps you safe.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Hold maximum range and treat reloads as phase-locked: reload during transitions, invulnerable phases, or after a big dodge.",
      "If a boss has a gap-closer, identify it first and keep one dodge reserved for it rather than spending everything on damage.",
    ],
  },
  {
    heading: "Related entry points",
    paragraphs: [
      "After your loop is stable, continue with the guides that frame your next decision.",
    ],
    bullets: [
      "Weapons Guide — compare Crossbow's range and reload discipline against other families.",
      "Boss Guide — reload timing and break-window bursts.",
      "Progression Guide — pick the next priority instead of chasing every upgrade.",
      "Builds Hub — survey the other weapon builds.",
    ],
  },
];

const staffSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Staff is the ranged caster family. Special attacks cost MP and carry cooldowns, so it is magic output gated by resource and timing rather than by magazine or stamina.",
      "Community documentation is sparse; treat this guide as a framework and confirm specifics in-game.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Cast the special at optimal range, manage MP and cooldowns so you always have an answer, and use basic attacks to fill the gaps between casts.",
    ],
    bullets: [
      "Open with the special at the range it is designed for.",
      "Fill the cooldown with basic attacks rather than standing idle.",
      "Track MP so a second special is ready for the next opening.",
      "Reposition during recovery frames; Staff rewards staying at range.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "Players who enjoy cooldown and MP resource management and spell timing over twitchy parries. If you like the rhythm of 'cast, fill, cast,' Staff is the family built around it.",
      "Expect to verify effects yourself since community documentation is limited.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Ranged magic safety; answer threats before they close.",
          "Burst windows via specials, fillable with basics.",
          "Independent weapon line with its own upgrade path.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Cooldown lockout leaves you with only basics if you mistime.",
          "MP dependency — a dry MP bar drops your output sharply.",
          "Effects, cooldowns, and scaling are sparsely documented.",
        ],
      },
    ],
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Stagger your casts so coverage is constant rather than front-loaded. Use basics to soften packs, then drop a special when enemies cluster.",
      "Keep a reserve of MP for the moment a pack surges — running dry mid-fight is the most common Staff mistake.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Time specials to the boss's openings rather than firing on cooldown. Conserve MP for phases where a queued special plus a follow-up does the real work.",
      "If a boss has a fast gap-closer, hold a special or MP in reserve to answer it rather than dumping on the first window.",
    ],
  },
  {
    heading: "Related entry points",
    paragraphs: [
      "Once your cast-and-fill rhythm is stable, move to the next decision.",
    ],
    bullets: [
      "Weapons Guide — place Staff against the other ranged and melee families.",
      "Boss Guide — break-phase burst timing.",
      "Progression Guide — sequence your upgrade priorities.",
      "Builds Hub — compare with the Grimoire and other casters.",
    ],
  },
];

const greatswordSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Greatsword is the slow, heavy melee family. Its identity is a large hit area, strong interrupts, and reliable floor damage — you trade speed for reach and stagger.",
      "It stays melee but hits a wide arc, so positioning matters more than pinpoint aiming. Community builds recommend substantial attack-speed investment for Greatsword; treat any specific percentage as a player-reported comfort point, not an official breakpoint.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Commit to heavy swings during safe windows, use the wide arc and interrupts to control space, and reposition during the long recovery before the next swing.",
    ],
    bullets: [
      "Wait for a confirmed opening before committing — recovery is long.",
      "Use a wide swing to cover a cluster and interrupt several foes at once.",
      "Invest in attack speed early so swings feel responsive.",
      "Reposition during recovery; do not stand in the swing's endlag.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "Players who like deliberate timing and big, committed hits. If you prefer one well-placed swing over a flurry of small ones, Greatsword fits.",
      "It is a mid-difficulty weapon by community assessment: the plan is readable, but each swing is a commitment, so greed is punished.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Large hit area clears and controls groups in a single swing.",
          "Strong interrupts shut down enemy attacks.",
          "High floor damage — reliable even without a perfect build.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Feels slow until you invest in attack speed.",
          "Long recovery on every swing is a liability if you mis-time.",
          "Heavy commitment makes fast, mobile bosses frustrating.",
        ],
      },
    ],
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Position so a single wide swing catches the whole pack. Bait enemies into a line or cluster, then commit one swing to interrupt and damage all of them at once.",
      "After the swing, use the recovery to reposition, not to greed a second hit you cannot confirm.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Trade only on windows you have confirmed. Greatsword's interrupts are valuable against boss adds and certain telegraphs — use wide swings during stagger phases where the arc and floor damage compound.",
      "Against mobile bosses, accept one swing per opening rather than trying to chain; recovery into a boss attack is the classic Greatsword death.",
    ],
  },
  {
    heading: "Related entry points",
    paragraphs: [
      "Once your commit-and-reposition loop is stable, continue with the next decision.",
    ],
    bullets: [
      "Weapons Guide — compare Greatsword's reach and commitment against other melee.",
      "Boss Guide — confirm windows before committing heavy swings.",
      "Progression Guide — sequence attack-speed and damage priorities.",
      "Builds Hub — survey the other weapon builds.",
    ],
  },
];

const daggerSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Dagger is the close-range, multi-hit fast attacker. Community players present it as a high-output option, but no official cross-weapon DPS ranking is published. It earns damage in the most dangerous output environment — pressed against the enemy.",
      "A core community-described mechanic is the parry, which refunds MP on a successful guard, turning skilled defense into resource generation.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Stick to the target, lay down a multi-hit string, parry the incoming attack to refund MP, and reposition sharply. The loop is fast and unforgiving.",
    ],
    bullets: [
      "Close to melee and open a multi-hit string.",
      "Parry the telegraphed attack — a successful parry refunds MP and creates an opening.",
      "Spend the refunded MP on extending the string or a burst.",
      "Reposition hard after each exchange; standing still at this range is death.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "High-skill players with fast reactions and a taste for parry-timing. Community players rate Dagger the highest-difficulty family: the parry has a startup that tests reaction, and the output range leaves no margin for error.",
      "Do not pick Dagger to relax. Pick it because you want every fight to be a parry drill.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Multi-hit strings reward fast, aggressive play.",
          "Parry refunds MP, converting defense into resource (community-reported).",
          "Fast pace rewards mechanical players.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Most dangerous output range — you take hits standing where you deal them.",
          "Parry has a startup, so it demands reads, not reactions alone.",
          "Unforgiving: one missed parry at this range is costly.",
        ],
      },
    ],
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Thin the pack before you commit — never dive into a full cluster at dagger range. Parry ranged attackers to refund MP, then close on the next target.",
      "Treat every enemy as a parry opportunity first and a damage target second; at this range, the parry is what keeps you alive.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Parry-countered windows are your real damage. Identify the boss's most readable attack and parry it on reaction, then spend the refunded MP on a burst.",
      "Bail early on any read you cannot confirm — Dagger's range means a wrong parry is punished harder than for any other weapon.",
    ],
  },
  {
    heading: "Related entry points",
    paragraphs: [
      "Once your parry-and-string loop is stable, continue with the next decision.",
    ],
    bullets: [
      "Weapons Guide — compare Dagger's risk and reward against other melee.",
      "Boss Guide — turn parry reads into safer damage.",
      "Beginner Guide — not recommended as a first weapon; revisit once fundamentals are solid.",
      "Builds Hub — survey the other weapon builds.",
    ],
  },
];

const grimoireSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Grimoire is the mid-range magic projectile family — an MP-cost caster. Community players describe it as built around spell rotations and cooldown reduction, but the family's mechanics are not yet well documented.",
      "Difficulty and specific interactions are unverified, so this guide is a framework: confirm spell behavior in-game.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Cast spells at mid-range, manage MP, and time your rotation around cooldowns.",
    ],
    bullets: [
      "Open with the spell best suited to the pack shape.",
      "Track cooldowns so your rotation stays active.",
      "Manage MP so a high-value spell is affordable when the window opens.",
      "Fill gaps with basics rather than standing idle.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "Players who enjoy spell-rotation optimization and cooldown stacking. If you like the idea of timing a powerful spell at the right moment, Grimoire is built around it.",
      "Difficulty is unverified — expect to learn the rotation yourself and to treat early runs as exploration.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Flexible spell rotation adapts to different pack shapes.",
          "Ranged magic safety; answer threats before they close.",
          "Cooldown management rewards planning.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "MP-hungry — a dry bar stalls the whole rotation.",
          "Newer to documentation; difficulty and interactions are not yet verified.",
          "Rotation complexity raises the floor for execution.",
        ],
      },
    ],
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Open with an area spell to shape the pack, then fill with basics while cooldowns recover. Keep MP in reserve for the spell you want to land on a priority target.",
      "Watch your rotation order so the right spell is off cooldown when you need it.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Save your highest-value spells for break windows where a well-timed cast compounds. Keep cooldowns aligned with the boss's openings.",
      "If MP runs dry mid-burst, fall back to basics and rebuild — do not force a cast you cannot afford.",
    ],
  },
  {
    heading: "Related entry points",
    paragraphs: [
      "Once your rotation is stable, continue with the next decision.",
    ],
    bullets: [
      "Weapons Guide — compare Grimoire against the Staff and other casters.",
      "Boss Guide — break-window cast timing.",
      "Progression Guide — sequence MP and cooldown priorities.",
      "Builds Hub — survey the other weapon builds.",
    ],
  },
];

function withLegacyPaths(real: GuidePageData, legacyPaths: string[]): GuidePageData[] {
  return [
    real,
    ...legacyPaths.map((legacy) =>
      make({
        ...real,
        path: legacy,
        canonicalPath: real.path,
        title: real.title,
        h1: real.h1,
        description: real.description,
        answer: real.answer,
        eyebrow: real.eyebrow,
        category: real.category,
        categoryPath: real.categoryPath,
        version: real.version,
        platforms: real.platforms,
        informationType: real.informationType,
        sections: real.sections,
        related: real.related,
        warning: real.warning,
        heroImage: real.heroImage,
        heroImageAlt: real.heroImageAlt,
        heroImageCaption: real.heroImageCaption,
        heroImageWidth: real.heroImageWidth,
        heroImageHeight: real.heroImageHeight,
        heroImageSourceUrl: real.heroImageSourceUrl,
        sources: real.sources,
      } as GuidePageData),
    ),
  ];
}

const swordShieldReal = buildPage({
  path: "builds/sword-and-shield",
  title: "Sword and Shield Build",
  h1: "Sword and Shield Build",
  eyebrow: "GUARD AND COUNTER",
  description:
    "A defensive Sword and Shield build that lets you block while moving, land perfect-guard counters, and punish up close — a forgiving pick for new players.",
  answer:
    "Sword and Shield is Sephiria's defensive weapon family. Hold the shield to block while moving, perfect-guard to open a counter, and punish at short range. This guide covers the loop and trade-offs without inventing stats.",
  warning:
    "Accuracy note: perfect-guard timing is community-sourced; confirm counter damage and MP costs in your current patch.",
  verifiedData: { weaponId: "Sword and Shield", description: "Defensive weapon family with block-while-move and perfect-guard counter-attack.", relatedSkills: ["Call Lightning", "Fire Circus"] },
  sections: swordShieldSections,
});

const crossbowReal = buildPage({
  path: "builds/crossbow",
  title: "Crossbow Build",
  h1: "Crossbow Build",
  eyebrow: "RANGE AND RHYTHM",
  description:
    "A ranged Crossbow build that keeps you safe at range — manage your magazine, reload only when it's clear, and lean into the family's branch identity.",
  answer:
    "Crossbow is Sephiria's ranged weapon family. Safety comes from distance, and the skill is magazine management — plan reloads in safe windows and commit to a branch identity. This guide covers the loop without inventing exact values.",
  warning:
    "Accuracy note: branch details and any specific fire-rate numbers come from community testing; verify in the current patch.",
  verifiedData: { weaponId: "Crossbow", description: "Ranged weapon family with magazine-based combat. Branch choices split into sustained fire-rate or slow high-damage single-shot builds." },
  sections: crossbowSections,
});

const staffReal = buildPage({
  path: "builds/staff",
  title: "Staff Build",
  h1: "Staff Build",
  eyebrow: "SPELL AND COOLDOWN",
  description:
    "A Staff build for ranged casters — manage mana and cooldowns to keep the magic weapon line firing through Sephiria's tougher rooms.",
  answer:
    "Staff is Sephiria's ranged caster family. Specials cost MP and carry cooldowns, so the loop is cast, fill with basics, and reposition at range. Spell effects are sparse in documentation, so confirm specifics in-game.",
  warning:
    "Accuracy note: spell effects, cooldowns, and MP costs are sparsely documented; confirm in-game.",
  verifiedData: { weaponId: "Staff", description: "Ranged caster family using MP and cooldown-gated specials. Combines mana management with projectile-based combat." },
  sections: staffSections,
});

const greatswordReal = buildPage({
  path: "builds/greatsword",
  title: "Greatsword Build",
  h1: "Greatsword Build",
  eyebrow: "COMMIT AND INTERRUPT",
  description:
    "A heavy-melee Greatsword build built around wide-arc swings and interrupts — invest in attack speed to turn strength into survivability.",
  answer:
    "Greatsword is Sephiria's slow heavy melee family. A large hit area and strong interrupts trade for long recovery. Community builds recommend substantial attack-speed investment. This guide covers the commit-and-reposition loop without inventing stats.",
  warning:
    "Accuracy note: any specific attack-speed figure and branch details are community-reported; verify in your current patch.",
  verifiedData: { weaponId: "Greatsword", description: "Slow heavy melee family with wide-arc swings and strong interrupts. Each swing is a commitment with long recovery." },
  sections: greatswordSections,
});

const daggerReal = buildPage({
  path: "builds/dagger",
  title: "Dagger Build",
  h1: "Dagger Build",
  eyebrow: "STICK AND PARRY",
  description:
    "A close-range Dagger build for high-risk play — chain multi-hit strings, refund via party, and stay mobile in tight Sephiria crowds.",
  answer:
    "Dagger is Sephiria's close-range multi-hit family, presented by community players as high-output with the most dangerous output range. The parry refunds MP (community-reported). This guide covers the loop without inventing exact values.",
  warning:
    "Accuracy note: parry startup frames and MP refund amounts are community-sourced; confirm timing windows in-game.",
  verifiedData: { weaponId: "Dagger", description: "Close-range multi-hit weapon family. Parry refunds MP (community-reported)." },
  sections: daggerSections,
});

const grimoireReal = buildPage({
  path: "builds/grimoire",
  title: "Grimoire Build",
  h1: "Grimoire Build",
  eyebrow: "CAST AND ROTATE",
  description:
    "A mid-range Grimoire build for the magic projectile family — manage MP-cost rotations and cooldown timing to keep pressure from a safe distance.",
  answer:
    "Grimoire is Sephiria's mid-range magic projectile family. Spells cost MP and cooldowns gate the rotation. The family is not yet well documented, so confirm interactions in-game.",
  warning:
    "Accuracy note: the Grimoire system is not yet well documented and its difficulty is unverified; confirm spell interactions in-game.",
  verifiedData: { weaponId: "Grimoire", description: "Mid-range magic projectile family built around spell rotations and cooldown reduction. An MP-cost caster whose mechanics are sparsely documented." },
  sections: grimoireSections,
});

export const buildPages: GuidePageData[] = [
  buildsHub,
  ...withLegacyPaths(swordShieldReal, ["builds/sword"]),
  ...withLegacyPaths(crossbowReal, ["builds/bow"]),
  ...withLegacyPaths(staffReal, ["builds/magic"]),
  ...withLegacyPaths(greatswordReal, ["builds/spear"]),
  ...withLegacyPaths(daggerReal, ["builds/fist"]),
  ...withLegacyPaths(grimoireReal, ["builds/scythe"]),
];
