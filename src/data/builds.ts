import { make } from "./content-helpers";
import type { GuidePageData, GuideSource, GuideSection } from "@/lib/types";

const STEAM_URL = "https://store.steampowered.com/app/2436940/Sephiria/";
const BILIBILI_URL = "https://www.bilibili.com/opus/1119413776142041088";

const buildSources: GuideSource[] = [
  { label: "Sephiria on Steam", url: STEAM_URL, level: "Official", lastChecked: "2026-08-03" },
  { label: "Sephiria weapon ranking (Bilibili Opus)", url: BILIBILI_URL, level: "Community", lastChecked: "2026-08-03" },
];

const BUILD_HERO_IMAGE = "/screenshots/sephiria-builds.webp";
const BUILD_HERO_WIDTH = 1280;
const BUILD_HERO_HEIGHT = 720;
const BUILD_VERSION = "1.0 (Released 2026-07-31)";
const BUILD_PLATFORMS = "PC (Windows, macOS)";
const BUILD_INFORMATION_TYPE = "Editorial guide with official game facts";

interface BuildPageInput {
  path: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  answer: string;
  warning: string;
  heroImageAlt: string;
  heroImageCaption: string;
  sections: GuideSection[];
  related?: string[];
}

function buildPage(input: BuildPageInput): GuidePageData {
  return make({
    ...input,
    category: "Builds",
    categoryPath: "builds",
    version: BUILD_VERSION,
    platforms: BUILD_PLATFORMS,
    informationType: BUILD_INFORMATION_TYPE,
    heroImage: BUILD_HERO_IMAGE,
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
      "Sephiria's six weapon families each play a different game. This hub orients you to all six before you pick a page. URLs are kept stable, but each title now reflects the real weapon family.",
    ],
    table: {
      headers: ["Build page", "Weapon family", "Range", "Pace", "Difficulty"],
      rows: [
        ["Sword & Shield", "剑盾", "Short melee", "Mid-speed, block-while-move", "Low–mid"],
        ["Great Sword", "大剑", "Melee, wide arc", "Slow heavy hits", "Mid"],
        ["Dagger", "匕首", "Close melee", "Multi-hit fast attack", "High"],
        ["Crossbow", "十字弩", "Ranged", "Varies by branch", "Mid"],
        ["Staff", "法杖", "Ranged caster", "MP and cooldown gated", "Mid"],
        ["Magic Tome", "魔导书", "Mid-range caster", "MP-cost rotation", "Unverified"],
      ],
    },
  },
  {
    heading: "How to choose",
    paragraphs: [
      "Pick by the problem you need to solve first. Survivability points to Sword & Shield; reach and safety point to Crossbow or the casters; deliberate big hits point to Great Sword; high-skill parry play points to Dagger.",
    ],
    bullets: [
      "Want the highest fault tolerance? Sword & Shield.",
      "Want safety through distance? Crossbow, Staff, or Magic Tome.",
      "Want committed, interrupt-heavy melee? Great Sword.",
      "Want the highest output ceiling and can parry? Dagger.",
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
      "Opening choices — early upgrades and branches.",
      "Room combat — handling normal encounters.",
      "Boss combat — adapting the loop to a single target.",
      "Related entry points — where to go next.",
    ],
  },
  {
    heading: "Accuracy and sources",
    paragraphs: [
      "Game facts (weapon families, the 0.11.0 Staff addition, platforms, release) come from the official Steam page. Weapon-specific traits — fire-rate breakpoints, the ~140% Great Sword threshold, parry refunds, branch names — are cross-verified from community guides and flagged with notes on each page.",
      "Confirm any number or branch name in your current patch before committing a run to it.",
    ],
  },
];

export const buildsHub = make({
  path: "builds",
  title: "Sephiria Builds",
  h1: "Sephiria Builds",
  eyebrow: "BUILD WITH INTENT",
  description: "Compare the six weapon-family playstyles and choose a coherent plan.",
  answer:
    "Sephiria has six weapon families, each with its own range, pace, and difficulty. These pages explain each one's loop and trade-offs without inventing stats.",
  category: "Builds",
  pageType: "category",
  version: BUILD_VERSION,
  platforms: BUILD_PLATFORMS,
  informationType: BUILD_INFORMATION_TYPE,
  heroImage: BUILD_HERO_IMAGE,
  heroImageAlt: "Sephiria inventory grid showing artifacts and tablets",
  heroImageCaption:
    "Steam official screenshot showing the inventory and build system.",
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
      "Sword & Shield is Sephiria's only defensive weapon family. You hold the shield to block while still moving, and a perfect guard opens a counter-attack window. It is a mid-speed, short-range weapon whose entire identity is surviving long enough to punish.",
      "Reach is short and the counter-attack travels almost no distance, so this build is about reading attacks and standing your ground rather than chasing.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Approach under the shield, perfect-guard the incoming hit, punish with the counter or a sweep (横扫, which costs MP), then reset behind the shield. The loop is deliberately slow and repeatable.",
    ],
    bullets: [
      "Close distance with the shield raised so ranged poke is absorbed.",
      "Time a perfect guard on the telegraphed attack to trigger the counter window.",
      "Spend the window on a counter, or on 横扫 when several enemies are clustered.",
      "Return to guard and reposition before the next exchange.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "New players and anyone who learns by surviving first. Sword & Shield has the highest fault tolerance of the six weapon families: a mistimed guard still blocks, and you can move while shielding.",
      "It also suits players who enjoy reactive, defensive rhythms over execution-heavy offense.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Highest survivability of any weapon family; block-while-move is unique.",
          "Perfect guard converts defense directly into a punish window.",
          "Low-to-mid difficulty, very forgiving for new players.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Very short range, and the counter-attack barely moves you forward.",
          "Damage output is slow; 横扫 costs MP so it cannot be spammed.",
          "Mobility-heavy bosses can simply walk out of your punish range.",
        ],
      },
    ],
  },
  {
    heading: "Opening choices",
    paragraphs: [
      "Stabilize the shield first, then scale the punish. Early picks that improve guard stability or counter damage reinforce the same plan instead of splitting your attention.",
    ],
    bullets: [
      "Fire staff (火杖) and lightning staff (雷杖) branches add elemental coverage.",
      "Rapier (刺剑) sharpens the counter punish.",
      "Ice hammer (冰锤), laser, and carrot sword (胡萝卜剑) are noted branch options.",
    ],
    note: "Branch names come from community guides; confirm exact effects and unlock conditions in your current patch.",
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Use the shield to walk through ranged enemies and group melee foes with positioning. When a cluster forms, a single 横扫 clears several at once for one MP cost.",
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
      "Weapons Guide — compare Sword & Shield against the other five families.",
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
      "Crossbow is the ranged weapon family. Safety comes from distance, and the unique skill is magazine management: every reload is a decision, and the final shot of a magazine carries a bonus.",
      "Pace varies enormously by branch — from the heavy crossbow with 加速核心 hitting roughly 10.6 shots per second, to XRA-9's slow single-shot bursts.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Kite at maximum range, fire through the magazine, reload during a safe window, and exploit the final-shot bonus on a meaningful target.",
    ],
    bullets: [
      "Open engagements at range and keep enemies in a line.",
      "Track your shot count so the final, boosted round lands on a priority target.",
      "Reload during boss phase changes or after repositioning to cover.",
      "Use the heavy-crossbow fire-rate build (加速核心) for sustained DPS, or XRA-9 for burst.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "Players who like spacing, resource pacing, and kiting. If you enjoy planning reloads the way a melee player plans combos, Crossbow rewards that discipline.",
      "It is a mid-difficulty weapon: the mechanics are simple, but magazine discipline and positioning under pressure separate good runs from great ones.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Ranged safety — most threats can be answered before they reach you.",
          "High fire-rate ceiling via 加速核心 (about 10.6 shots/sec).",
          "XRA-9 offers single-shot burst for break windows.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "Reload downtime is exploitable; melee pressure during a reload is dangerous.",
          "Final-shot bonus requires shot-counting, which is unforgiving under chaos.",
          "Branches play very differently — a build that worked for one may not transfer.",
        ],
      },
    ],
  },
  {
    heading: "Opening choices",
    paragraphs: [
      "Pick your branch identity early so every later upgrade reinforces it. The fire-rate build and the single-shot build want different support.",
    ],
    bullets: [
      "加速核心 — sustained fire-rate, the heavy-crossbow DPS build.",
      "爆炸装置 — adds area coverage to each shot.",
      "XRA-9 — slow, high single-shot damage.",
      "双子 — dual-shot branch option.",
    ],
    note: "Fire-rate breakpoints and the final-shot bonus are community-tested; verify exact values in the current patch.",
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Funnel enemies into corridors and doorways so your shots pierce or cluster. Pre-plan a reload spot before you commit to a magazine, and never reload with a melee enemy in melee range.",
      "Against mixed packs, kill the fastest closers first so you keep the spacing that keeps you safe.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Hold maximum range and treat reloads as phase-locked: reload during transitions, invulnerable phases, or after a big dodge. Save your magazine's final shot for stun or break windows where the bonus matters most.",
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
      "Boss Guide — phase-locked reload timing and break-window bursts.",
      "Progression Guide — pick the next priority instead of chasing every upgrade.",
      "Builds Hub — survey the other weapon builds.",
    ],
  },
];

const staffSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Staff is the ranged caster family — a newer, independent weapon added in patch 0.11.0. Special attacks cost MP and carry cooldowns, so it is pure magic output gated by resource and timing rather than by magazine or stamina.",
      "Because the weapon is young, community documentation is sparse; treat this guide as a framework and confirm specifics in-game.",
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
      "Expect a mid-difficulty learning curve, and expect to verify effects yourself since the weapon is new.",
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
          "New weapon: effects, cooldowns, and scaling are sparsely documented.",
        ],
      },
    ],
  },
  {
    heading: "Opening choices",
    paragraphs: [
      "Choose a branch that matches the openings you can reliably create. Both known branches lean into burst windows, so build MP and cooldown support around them.",
    ],
    bullets: [
      "火焰凝视 — fire-gaze branch, noted for sustained flame output.",
      "雷电之翼 — lightning-wing branch, noted for burst.",
    ],
    note: "Spell effects and cooldowns are not yet well documented; confirm exact values in-game.",
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
      "Time specials to the boss's openings rather than firing on cooldown. Conserve MP for break phases, where a queued special plus a follow-up does the real work.",
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
      "Builds Hub — compare with the Magic Tome and other casters.",
    ],
  },
];

const greatSwordSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Great Sword is the slow, heavy melee family. Its identity is large hit area, strong interrupts, and high reliable floor damage — you trade speed for reach and stagger.",
      "It stays melee but hits a wide arc, so positioning matters more than pinpoint aiming. The weapon only feels good once attack speed is stacked to around 140%.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Commit to heavy swings during safe windows, use the wide arc and interrupts to control space, and reposition during the long recovery before the next swing.",
    ],
    bullets: [
      "Wait for a confirmed opening before committing — recovery is long.",
      "Use 旋风斩 (whirlwind) to cover a cluster and interrupt several foes at once.",
      "Stack attack speed toward the ~140% comfort threshold early.",
      "Reposition during recovery; do not stand in the swing's endlag.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "Players who like deliberate timing and big, committed hits. If you prefer one well-placed swing over a flurry of small ones, Great Sword fits.",
      "It is a mid-difficulty weapon: the plan is readable, but each swing is a commitment, so greed is punished.",
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
          "Slow until attack speed reaches ~140%; below that it feels sluggish.",
          "Long recovery on every swing is a liability if you mis-time.",
          "Heavy commitment makes fast, mobile bosses frustrating.",
        ],
      },
    ],
  },
  {
    heading: "Opening choices",
    paragraphs: [
      "Prioritize attack speed toward the ~140% threshold first, then scale the swing's damage and interrupt. Branches each lean into a different element or control angle.",
    ],
    bullets: [
      "万年寒霜巨剑 — frost great-sword branch.",
      "骨剑 — bone-sword branch.",
      "电击大剑 — shock great-sword branch.",
    ],
    note: "The ~140% attack-speed threshold and branch names are community-reported; verify in your current patch.",
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Position so a single 旋风斩 catches the whole pack. Bait enemies into a line or cluster, then commit one swing to interrupt and damage all of them at once.",
      "After the swing, use the recovery to reposition, not to greed a second hit you cannot confirm.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Trade only on windows you have confirmed. Great Sword's interrupts are valuable against boss adds and certain telegraphs — use 旋风斩 during stagger phases where the wide arc and high floor damage compound.",
      "Against mobile bosses, accept one swing per opening rather than trying to chain; recovery into a boss attack is the classic Great Sword death.",
    ],
  },
  {
    heading: "Related entry points",
    paragraphs: [
      "Once your commit-and-reposition loop is stable, continue with the next decision.",
    ],
    bullets: [
      "Weapons Guide — compare Great Sword's reach and commitment against other melee.",
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
      "Dagger is the close-range, multi-hit fast attacker. It has the highest base output of any weapon family, but it earns that damage in the most dangerous output environment — pressed against the enemy.",
      "The weapon's core mechanic is the parry: a successful parry refunds MP, so skilled play turns defense into resource generation.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Stick to the target, lay down a multi-hit string, parry the incoming attack to refund MP, and reposition sharply. The loop is fast and unforgiving.",
    ],
    bullets: [
      "Close to melee and open a multi-hit string.",
      "Parry the telegraphed attack — success refunds MP and creates an opening.",
      "Spend the refunded MP on extending the string or a burst.",
      "Reposition hard after each exchange; standing still at this range is death.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "High-skill players with fast reactions and a taste for parry-timing. Dagger is the highest-difficulty weapon family: the parry has a startup that tests reaction, and the output range leaves no margin for error.",
      "Do not pick Dagger to relax. Pick it because you want every fight to be a parry drill.",
    ],
  },
  {
    heading: "Strengths and weaknesses",
    subsections: [
      {
        heading: "Strengths",
        bullets: [
          "Highest base DPS of any weapon family.",
          "Parry refunds MP, converting defense into resource.",
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
    heading: "Opening choices",
    paragraphs: [
      "Build around the parry first — its refunds are your engine. Then scale the multi-hit string. Branches each color the playstyle with a different element or trick.",
    ],
    bullets: [
      "优衣的短匕首 — Yui's short dagger branch.",
      "燃烧之牙 — burning-fang branch.",
      "模仿之书 — mimic-tome branch, overlaps with the Magic Tome line.",
    ],
    note: "Parry startup frames and MP refund amounts are community-sourced; confirm timing windows in-game.",
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

const magicTomeSections: GuideSection[] = [
  {
    heading: "Playstyle role",
    paragraphs: [
      "Magic Tome is the mid-range magic projectile family — an MP-cost caster with its own 魔导书急速 (tome haste) cooldown-reduction stat. Its signature trick is 模仿之书, which can copy the previous spell.",
      "It is a newer system and its difficulty is not yet verified, so this guide is a framework: confirm spell interactions and copy rules in-game.",
    ],
  },
  {
    heading: "Core combat loop",
    paragraphs: [
      "Cast spells at mid-range, stack 魔导书急速 to shrink cooldowns, and use 模仿之书 to duplicate your highest-value spell. The loop is a rotation, not a single spam.",
    ],
    bullets: [
      "Open with the spell best suited to the pack shape.",
      "Stack 魔导书急速 so cooldowns line up with your rotation.",
      "Use 模仿之书 to repeat the key spell at the right moment.",
      "Manage MP so the duplicate is affordable when the window opens.",
    ],
  },
  {
    heading: "Who this build suits",
    paragraphs: [
      "Players who enjoy spell-rotation optimization and cooldown stacking. If you like the idea of duplicating a perfectly timed spell, Magic Tome is built around it.",
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
          "模仿之书 duplicates your best spell for burst windows.",
          "魔导书急速 scales cooldowns, rewarding investment.",
        ],
      },
      {
        heading: "Weaknesses",
        bullets: [
          "MP-hungry — a dry bar stalls the whole rotation.",
          "Newer system; difficulty and interactions are not yet verified.",
          "Rotation complexity raises the floor for execution.",
        ],
      },
    ],
  },
  {
    heading: "Opening choices",
    paragraphs: [
      "Pick the spell you want to duplicate, then build MP and haste around it. Because 模仿之书 copies the previous spell, your rotation order is itself a build decision.",
    ],
    bullets: [
      "模仿之书 — the mimic-tome branch; copies the last spell cast.",
    ],
    note: "Spell copy rules, haste scaling, and the branch list are not yet verified; confirm in-game.",
  },
  {
    heading: "Room combat",
    paragraphs: [
      "Open with an area spell to shape the pack, duplicate the best one with 模仿之书, then fill with basics while cooldowns recover. Keep MP in reserve for the duplicate.",
      "Watch your rotation order: the spell you cast last is the one 模仿之书 will copy, so end on the spell you want repeated.",
    ],
  },
  {
    heading: "Boss combat",
    paragraphs: [
      "Save the duplicate for break windows where two copies of your best spell compound. Stack 魔导书急速 before burst phases so your rotation aligns with the opening.",
      "If MP runs dry mid-burst, fall back to basics and rebuild — do not force a duplicate you cannot afford.",
    ],
  },
  {
    heading: "Related entry points",
    paragraphs: [
      "Once your cast-and-duplicate rotation is stable, continue with the next decision.",
    ],
    bullets: [
      "Weapons Guide — compare Magic Tome against the Staff and other casters.",
      "Boss Guide — break-window duplication timing.",
      "Progression Guide — sequence MP, haste, and duplicate priorities.",
      "Builds Hub — survey the other weapon builds.",
    ],
  },
];

export const buildPages: GuidePageData[] = [
  buildsHub,
  buildPage({
    path: "builds/sword",
    title: "Sword & Shield Build",
    h1: "Sword & Shield Build",
    eyebrow: "GUARD AND COUNTER",
    description:
      "A defensive Sword & Shield build framework: block-while-move, perfect-guard counters, and short-range punish.",
    answer:
      "Sword & Shield is Sephiria's defensive weapon family. Hold the shield to block while moving, perfect-guard to open a counter, and punish at short range. This guide covers the loop, branches, and trade-offs without inventing stats.",
    warning:
      "Accuracy note: branch names and perfect-guard timing are community-sourced; confirm 横扫 MP cost and counter damage in your current patch.",
    heroImageAlt: "Sephiria inventory screenshot showing a Sword & Shield loadout",
    heroImageCaption: "The Sword & Shield loadout viewed in a Sephiria inventory screen.",
    sections: swordShieldSections,
  }),
  buildPage({
    path: "builds/bow",
    title: "Crossbow Build",
    h1: "Crossbow Build",
    eyebrow: "RANGE AND RHYTHM",
    description:
      "A ranged Crossbow build framework: magazine management, final-shot bonuses, and fire-rate vs single-shot branches.",
    answer:
      "Crossbow is Sephiria's ranged weapon family. Safety comes from distance, and the skill is magazine management — track shot count, reload in safe windows, and exploit the final-shot bonus. This guide covers the loop and branches without inventing exact values.",
    warning:
      "Accuracy note: fire-rate breakpoints (e.g. 加速核心 ~10.6 shots/sec) and the final-shot bonus come from community testing; verify exact values in the current patch.",
    heroImageAlt: "Sephiria inventory screenshot showing a Crossbow loadout",
    heroImageCaption: "A Crossbow loadout displayed in the Sephiria inventory screen.",
    sections: crossbowSections,
  }),
  buildPage({
    path: "builds/magic",
    title: "Staff Build",
    h1: "Staff Build",
    eyebrow: "SPELL AND COOLDOWN",
    description:
      "A ranged caster Staff build framework: MP and cooldown management for the 0.11.0 weapon line.",
    answer:
      "Staff is Sephiria's ranged caster family, added in patch 0.11.0. Specials cost MP and carry cooldowns, so the loop is cast, fill with basics, and reposition at range. Spell effects are sparse in documentation, so confirm specifics in-game.",
    warning:
      "Accuracy note: the Staff is a newer weapon (added 0.11.0) with sparse documentation; confirm spell effects, cooldowns, and MP costs in-game.",
    heroImageAlt: "Sephiria inventory screenshot showing a Staff loadout",
    heroImageCaption: "A Staff loadout in the Sephiria inventory screen.",
    sections: staffSections,
  }),
  buildPage({
    path: "builds/spear",
    title: "Great Sword Build",
    h1: "Great Sword Build",
    eyebrow: "COMMIT AND INTERRUPT",
    description:
      "A heavy-melee Great Sword build framework: wide-arc swings, interrupts, and the attack-speed comfort threshold.",
    answer:
      "Great Sword is Sephiria's slow heavy melee family. Large hit area and strong interrupts trade for long recovery, and it feels good only once attack speed nears ~140%. This guide covers the commit-and-reposition loop and branches without inventing stats.",
    warning:
      "Accuracy note: the ~140% attack-speed comfort threshold and branch names are community-reported; verify in your current patch.",
    heroImageAlt: "Sephiria inventory screenshot showing a Great Sword loadout",
    heroImageCaption: "The Great Sword loadout in a Sephiria inventory screen.",
    sections: greatSwordSections,
  }),
  buildPage({
    path: "builds/fist",
    title: "Dagger Build",
    h1: "Dagger Build",
    eyebrow: "STICK AND PARRY",
    description:
      "A close-range Dagger build framework: multi-hit strings, parry refunds, and the highest base output in the game.",
    answer:
      "Dagger is Sephiria's close-range multi-hit family with the highest base output — and the most dangerous output range. The parry refunds MP, so skilled play turns defense into resource. This guide covers the loop and branches without inventing exact values.",
    warning:
      "Accuracy note: parry startup frames and MP refund amounts are community-sourced; confirm timing windows in-game.",
    heroImageAlt: "Sephiria inventory screenshot showing a Dagger loadout",
    heroImageCaption: "A Dagger loadout shown in the Sephiria inventory screen.",
    sections: daggerSections,
  }),
  buildPage({
    path: "builds/scythe",
    title: "Magic Tome Build",
    h1: "Magic Tome Build",
    eyebrow: "CAST AND DUPLICATE",
    description:
      "A mid-range Magic Tome build framework: MP-cost rotations, tome haste, and spell duplication via 模仿之书.",
    answer:
      "Magic Tome is Sephiria's mid-range magic projectile family. Spells cost MP, a 魔导书急速 stat shrinks cooldowns, and 模仿之书 can copy the previous spell. The system is new, so confirm interactions in-game.",
    warning:
      "Accuracy note: the Magic Tome system is new and its difficulty is not yet verified; confirm spell interactions and 模仿之书 copy rules in-game.",
    heroImageAlt: "Sephiria inventory screenshot showing a Magic Tome loadout",
    heroImageCaption: "The Magic Tome loadout viewed in the Sephiria inventory screen.",
    sections: magicTomeSections,
  }),
];
