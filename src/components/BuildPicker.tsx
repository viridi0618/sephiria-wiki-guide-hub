"use client";

import { useState } from "react";
import Link from "next/link";

type AnswerKey = "range" | "priority" | "speed" | "risk" | "mode";

type Answers = Partial<Record<AnswerKey, string>>;

type WeaponId = "swordShield" | "greatsword" | "dagger" | "crossbow" | "staff" | "grimoire";
import { weaponProfiles } from "@/data/game-data/weapon-profiles";

interface Option {
  value: string;
  label: string;
  hint: string;
}

interface Question {
  id: AnswerKey;
  prompt: string;
  options: Option[];
}

interface BuildInfo {
  id: WeaponId;
  name: string;
  href: string;
  reason?: string;
  rhythm: string;
  strengths: string[];
  risks: string[];
}

interface RecommendationResult {
  primary: BuildInfo;
  alternatives: BuildInfo[];
}

const QUESTIONS: Question[] = [
  {
    id: "range",
    prompt: "Preferred range",
    options: [
      {
        value: "melee",
        label: "Melee",
        hint: "Close-quarters, face-to-face combat",
      },
      {
        value: "ranged",
        label: "Ranged",
        hint: "Attack from a safe distance",
      },
      {
        value: "magic",
        label: "Magic",
        hint: "Spells and elemental effects",
      },
    ],
  },
  {
    id: "priority",
    prompt: "Priority",
    options: [
      {
        value: "safety",
        label: "Safety",
        hint: "Survive first, punish second",
      },
      {
        value: "damage",
        label: "Damage",
        hint: "Maximize output per opening",
      },
      {
        value: "control",
        label: "Control",
        hint: "Manage crowds and pace the fight",
      },
    ],
  },
  {
    id: "speed",
    prompt: "Attack speed",
    options: [
      {
        value: "fast",
        label: "Fast multi-hit",
        hint: "Quick strings of smaller hits",
      },
      {
        value: "slow",
        label: "Slow heavy",
        hint: "Fewer, harder, committed swings",
      },
    ],
  },
  {
    id: "risk",
    prompt: "Risk tolerance",
    options: [
      {
        value: "high",
        label: "High risk melee",
        hint: "Get close and trade aggressively",
      },
      {
        value: "distance",
        label: "Keep distance",
        hint: "Avoid getting hit altogether",
      },
    ],
  },
  {
    id: "mode",
    prompt: "Play mode",
    options: [
      {
        value: "solo",
        label: "Mostly Solo",
        hint: "You carry your own survival",
      },
      {
        value: "coop",
        label: "Mostly Co-op",
        hint: "Teammates share aggro and revive",
      },
    ],
  },
];

const BUILDS: Record<WeaponId, BuildInfo> = {
  swordShield: {
    id: "swordShield",
    name: "Sword and Shield Build",
    href: "/builds/sword-and-shield/",
    rhythm: "Slow and reactive — approach under shield, perfect-guard, counter, reset.",
    strengths: [
      "Defensive option; block-while-move",
      "Perfect guard converts defense into punish",
      "Community players rate it forgiving for new players",
    ],
    risks: [
      "Very short range; counter barely moves forward",
      "Damage output is slow relative to faster families",
      "Mobile bosses can walk out of punish range",
    ],
  },
  greatsword: {
    id: "greatsword",
    name: "Greatsword Build",
    href: "/builds/greatsword/",
    rhythm: "Commit and reposition — wait for an opening, swing wide, reposition during recovery.",
    strengths: [
      "Large hit area clears groups in one swing",
      "Strong interrupts shut down enemy attacks",
      "High floor damage; reliable without a perfect build",
    ],
    risks: [
      "Feels slow until you invest in attack speed",
      "Long recovery on every swing",
      "Fast, mobile bosses are frustrating",
    ],
  },
  dagger: {
    id: "dagger",
    name: "Dagger Build",
    href: "/builds/dagger/",
    rhythm: "Fast and unforgiving — stick, multi-hit, parry to refund MP, reposition sharply.",
    strengths: [
      "Multi-hit strings reward fast, aggressive play",
      "Parry refunds MP, converting defense to resource (community-reported)",
      "Fast pace rewards mechanical players",
    ],
    risks: [
      "Most dangerous output range — you take hits where you deal them",
      "Parry has startup; demands reads, not reactions alone",
      "One missed parry at this range is costly",
    ],
  },
  crossbow: {
    id: "crossbow",
    name: "Crossbow Build",
    href: "/builds/crossbow/",
    rhythm: "Kite and reload — fire at range, plan reloads during safe windows.",
    strengths: [
      "Ranged safety; answer threats before they reach you",
      "Magazine-based pace gives clear decision points",
      "Branch options let you pick sustained output or burst",
    ],
    risks: [
      "Reload downtime is exploitable under melee pressure",
      "Positioning mistakes are punished harder than for melee",
      "Branch builds don't always transfer",
    ],
  },
  staff: {
    id: "staff",
    name: "Staff Build",
    href: "/builds/staff/",
    rhythm: "Cast and fill — special at range, fill with basics, track MP and cooldowns.",
    strengths: [
      "Ranged magic safety; answer threats before they close",
      "Burst windows via specials, fillable with basics",
      "Independent weapon line with its own upgrade path",
    ],
    risks: [
      "Cooldown lockout leaves only basics if mistimed",
      "MP dependency; a dry bar drops output sharply",
      "Effects sparsely documented; verify in-game",
    ],
  },
  grimoire: {
    id: "grimoire",
    name: "Grimoire Build",
    href: "/builds/grimoire/",
    rhythm: "Cast and rotate — cast, track cooldowns, time your best spell at the right moment.",
    strengths: [
      "Flexible spell rotation adapts to different pack shapes",
      "Ranged magic safety; answer threats before they close",
      "Cooldown management rewards planning",
    ],
    risks: [
      "MP-hungry; a dry bar stalls the whole rotation",
      "Newer to documentation; difficulty and interactions unverified",
      "Rotation complexity raises the execution floor",
    ],
  },
};


/** Generate a data-driven recommendation reason from weapon-profile tags. */
function buildReason(weaponId: WeaponId): string {
  const profile = weaponProfiles.find((p) => p.id === weaponId);
  if (!profile) return "This weapon matches your preferred playstyle.";
  const tags = profile.tags.slice(0, 4);
  const lines = tags.map((t) => formatTag(t));
  if (profile.playstyles.length) {
    lines.push("Fits " + profile.playstyles.join(", ") + " playstyle.");
  }
  return lines.join(" ");
}

function formatTag(tag: string): string {
  // Map internal tag keys to human-readable phrases
  const map: Record<string, string> = {
    "defensive": "Defensive combat style.",
    "block": "Can block while moving.",
    "perfect-guard": "Perfect guard converts defense into a counter.",
    "short-range": "Short-range engagement.",
    "counter": "Counter-attack windows after successful blocks.",
    "slow-heavy": "Slow, heavy strikes.",
    "wide-arc": "Wide-arc swings clear groups.",
    "interrupt": "Strong interrupts stop enemy attacks.",
    "mid-range-melee": "Mid-range melee reach.",
    "committed-swings": "Each swing is a commitment with recovery.",
    "fast": "Fast attack style.",
    "close-range": "Close-range combat.",
    "parry": "Parry timing rewards skilled defense.",
    "multi-hit": "Multi-hit attack strings.",
    "mp-refund": "Parry refunds MP.",
    "high-mobility": "High mobility options.",
    "ranged": "Ranged combat from safe distance.",
    "magazine-based": "Magazine-based combat rhythm.",
    "safe-distance": "Safety through distance.",
    "reload-management": "Reload management under pressure.",
    "sustained-or-burst": "Branch choices for sustained or burst damage.",
    "magic-ranged": "Ranged magic projectiles.",
    "mp-and-cooldown": "MP and cooldown-gated specials.",
    "burst": "Burst damage via specials.",
    "projectile": "Projectile-based combat.",
    "caster": "Caster playstyle.",
    "magic-control": "Magic-based crowd control.",
    "spell-rotation": "Spell rotation management.",
    "mp-hungry": "MP-intensive.",
    "cooldown-reduction": "Benefits from cooldown reduction.",
    "control": "Control-oriented approach.",
  };
  return map[tag] || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, " ") + ".";
}

function buildScores(): Record<WeaponId, number> {
  return { swordShield: 0, greatsword: 0, dagger: 0, crossbow: 0, staff: 0, grimoire: 0 };
}

/** Match user answers against weapon-profile tags from extracted game data. */
function matchProfile(scores: Record<WeaponId, number>, tags: string[], weight: number) {
  const profileMap: Record<string, WeaponId> = { swordShield: "swordShield", greatsword: "greatsword", dagger: "dagger", crossbow: "crossbow", staff: "staff", grimoire: "grimoire" };
  for (const id of Object.keys(profileMap)) {
    const profile = weaponProfiles.find((p) => p.id === id);
    if (!profile) continue;
    const matchCount = profile.tags.filter((t) => tags.includes(t)).length;
    scores[profileMap[id]] += matchCount * weight;
  }
}

function recommend(answers: Answers): RecommendationResult {
  const scores = buildScores();
  const { range, priority, speed, risk, mode } = answers;

  // Range: match weapon-profile tags
  if (range === "melee")    matchProfile(scores, ["short-range", "close-range", "mid-range-melee"], 2);
  if (range === "ranged")   matchProfile(scores, ["ranged", "safe-distance"], 3);
  if (range === "magic")    matchProfile(scores, ["magic-ranged", "magic-control", "caster", "projectile"], 3);

  // Priority
  if (priority === "safety")  matchProfile(scores, ["defensive", "block", "safe-distance"], 2);
  if (priority === "damage")  matchProfile(scores, ["fast", "multi-hit", "burst", "slow-heavy"], 2);
  if (priority === "control") matchProfile(scores, ["control", "magic-control", "spell-rotation", "interrupt"], 2);

  // Attack speed
  if (speed === "fast") matchProfile(scores, ["fast", "multi-hit", "high-mobility"], 3);
  if (speed === "slow") matchProfile(scores, ["slow-heavy", "committed-swings"], 3);

  // Risk
  if (risk === "high")     matchProfile(scores, ["close-range", "parry", "high-mobility"], 2);
  if (risk === "distance") matchProfile(scores, ["ranged", "safe-distance", "spacing", "caster"], 2);

  // Mode: light influence
  if (mode === "solo") matchProfile(scores, ["defensive", "tactical"], 1);
  if (mode === "coop") matchProfile(scores, ["control", "caster", "ranged"], 1);

  const ranked = (Object.keys(scores) as WeaponId[]).sort((a, b) => scores[b] - scores[a]);
  const [first, second, third] = ranked;

  return {
    primary: BUILDS[first],
    alternatives: [BUILDS[second], BUILDS[third]],
  };
}

function answerLabel(questionId: AnswerKey, value: string | undefined): string {
  if (!value) return "";
  const question = QUESTIONS.find((q) => q.id === questionId);
  const option = question?.options.find((o) => o.value === value);
  return option?.label ?? value;
}

export default function BuildPicker() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<RecommendationResult | null>(null);

  const currentQuestion = QUESTIONS[step];
  const isLastQuestion = step === QUESTIONS.length - 1;
  const currentValue = answers[currentQuestion.id];
  const canAdvance = Boolean(currentValue);
  const progressPct = ((step + 1) / QUESTIONS.length) * 100;

  function selectOption(questionId: AnswerKey, value: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleNext() {
    if (!canAdvance) return;
    if (isLastQuestion) {
      setResult(recommend(answers));
    } else {
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function handleReset() {
    setAnswers({});
    setStep(0);
    setResult(null);
  }

  if (result) {
    const summary = [
      answerLabel("range", answers.range),
      answerLabel("priority", answers.priority),
      answerLabel("speed", answers.speed),
      answerLabel("risk", answers.risk),
      answerLabel("mode", answers.mode),
    ]
      .filter(Boolean)
      .join(" · ");

    return (
      <section
        className="build-picker-result"
        aria-labelledby="build-picker-result-title"
      >
        <div className="build-picker-result-header">
          <p className="section-label">Your recommendation</p>
          <h2 id="build-picker-result-title">{result.primary.name}</h2>
          <p>
            Based on your answers: {summary}. The recommendation below is a
            playstyle fit, not a damage ranking — read the full guide to
            confirm the fit before committing a run.
          </p>
        </div>

        <div className="build-picker-card build-picker-card-primary">
          <span className="build-picker-card-kicker">Best match</span>
          <h3>
            <Link href={result.primary.href}>{result.primary.name}</Link>
          </h3>
          <p className="build-picker-card-reason">{buildReason(result.primary.id)}</p>

          <dl className="build-picker-card-grid">
            <div>
              <dt>Combat rhythm</dt>
              <dd>{result.primary.rhythm}</dd>
            </div>
            <div>
              <dt>Guide</dt>
              <dd>
                <Link href={result.primary.href}>{result.primary.href}</Link>
              </dd>
            </div>
          </dl>

          <div className="build-picker-card-columns">
            <div>
              <h4>Strengths</h4>
              <ul className="build-picker-card-list">
                {result.primary.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Risks</h4>
              <ul className="build-picker-card-list risks">
                {result.primary.risks.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            className="build-picker-card-link"
            href={result.primary.href}
          >
            Read the full {result.primary.name.replace(" Build", "")} guide
          </Link>
        </div>

        {result.alternatives.length > 0 && (
          <div className="build-picker-alternatives">
            <p className="section-label">Also consider</p>
            {result.alternatives.map((alt) => (
              <div
                key={alt.href}
                className="build-picker-card build-picker-card-alternative"
              >
                <h3>
                  <Link href={alt.href}>{alt.name}</Link>
                </h3>
                <p className="build-picker-card-reason">{buildReason(alt.id)}</p>
                <Link className="build-picker-card-link" href={alt.href}>
                  Read more
                </Link>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          className="button button-secondary build-picker-reset"
          onClick={handleReset}
        >
          Reset and start over
        </button>
      </section>
    );
  }

  return (
    <section
      className="build-picker"
      aria-labelledby="build-picker-question"
    >
      <div className="build-picker-progress">
        <span>
          Question <strong>{step + 1}</strong> of {QUESTIONS.length}
        </span>
        <span>{Math.round(progressPct)}%</span>
      </div>
      <div
        className="build-picker-progress-bar"
        role="progressbar"
        aria-valuenow={step + 1}
        aria-valuemin={1}
        aria-valuemax={QUESTIONS.length}
      >
        <span style={{ width: `${progressPct}%` }} />
      </div>

      <fieldset className="build-picker-question">
        <legend id="build-picker-question">{currentQuestion.prompt}</legend>
        <div className="build-picker-options">
          {currentQuestion.options.map((option) => {
            const selected = currentValue === option.value;
            return (
              <button
                key={option.value}
                type="button"
                className="build-picker-option"
                aria-pressed={selected}
                onClick={() =>
                  selectOption(currentQuestion.id, option.value)
                }
              >
                <span className="build-picker-option-label">
                  {option.label}
                </span>
                <span className="build-picker-option-hint">
                  {option.hint}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="build-picker-actions">
        <button
          type="button"
          className="button button-secondary"
          onClick={handleBack}
          disabled={step === 0}
        >
          Back
        </button>
        <button
          type="button"
          className="button button-primary"
          onClick={handleNext}
          disabled={!canAdvance}
        >
          {isLastQuestion ? "Get recommendation" : "Next"}
        </button>
      </div>
    </section>
  );
}
