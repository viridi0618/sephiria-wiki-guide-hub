"use client";

import { useState } from "react";
import Link from "next/link";

type AnswerKey = "range" | "priority" | "speed" | "risk" | "mode";

type Answers = Partial<Record<AnswerKey, string>>;

type WeaponId = "swordShield" | "greatsword" | "dagger" | "crossbow" | "staff" | "grimoire";

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
  reason: string;
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
    reason:
      "Your preferences point to a defensive, deliberate playstyle. Sword and Shield's block-while-move identity fits players who survive first and punish second, with a perfect guard converting defense into a counter window.",
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
    reason:
      "You want melee damage with deliberate timing. Greatsword trades speed for a wide-arc hit area, strong interrupts, and high floor damage — each swing is a commitment, but a well-placed one clears groups.",
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
    reason:
      "You want fast melee with high risk tolerance. Dagger is presented by community players as a high-output, close-range option — no official cross-weapon DPS ranking is published. The parry refunds MP (community-reported), turning defense into a resource engine.",
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
    reason:
      "You want ranged safety. Crossbow keeps threats at distance and rewards magazine management — plan reloads in safe windows and commit to a branch identity.",
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
    reason:
      "You want magic damage. Staff is the ranged caster family — specials cost MP and carry cooldowns, so the loop is cast, fill with basics, and reposition at range. It rewards cooldown and MP management over twitch reactions.",
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
    reason:
      "You want magic control. Grimoire's spell rotation gives flexible pack control — stack cooldown reduction to keep your rotation active and time your highest-value spell at the right moment.",
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

function buildScores(): Record<WeaponId, number> {
  return { swordShield: 0, greatsword: 0, dagger: 0, crossbow: 0, staff: 0, grimoire: 0 };
}

function recommend(answers: Answers): RecommendationResult {
  const scores = buildScores();
  const { range, priority, speed, risk, mode } = answers;

  // Range weights
  if (range === "melee") {
    scores.swordShield += 2;
    scores.greatsword += 2;
    scores.dagger += 2;
  } else if (range === "ranged") {
    scores.crossbow += 3;
    scores.swordShield += 1;
    scores.staff += 1;
  } else if (range === "magic") {
    scores.staff += 3;
    scores.grimoire += 3;
    scores.crossbow += 1;
  }

  // Priority weights
  if (priority === "safety") {
    scores.swordShield += 3;
    scores.crossbow += 2;
    scores.greatsword += 1;
  } else if (priority === "damage") {
    scores.greatsword += 2;
    scores.dagger += 2;
    scores.staff += 1;
    scores.crossbow += 1;
  } else if (priority === "control") {
    scores.grimoire += 2;
    scores.staff += 2;
    scores.swordShield += 1;
    scores.crossbow += 1;
  }

  // Attack speed weights
  if (speed === "fast") {
    scores.dagger += 3;
    scores.crossbow += 1;
    scores.grimoire += 1;
  } else if (speed === "slow") {
    scores.greatsword += 3;
    scores.swordShield += 2;
  }

  // Risk tolerance weights
  if (risk === "high") {
    scores.dagger += 3;
    scores.greatsword += 1;
    scores.grimoire += 1;
  } else if (risk === "distance") {
    scores.crossbow += 2;
    scores.staff += 2;
    scores.grimoire += 1;
    scores.swordShield += 1;
  }

  // Play mode: light influence only
  if (mode === "solo") {
    scores.swordShield += 1;
    scores.crossbow += 1;
  } else if (mode === "coop") {
    scores.staff += 1;
    scores.grimoire += 1;
    scores.crossbow += 1;
  }

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
          <p className="build-picker-card-reason">{result.primary.reason}</p>

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
                <p className="build-picker-card-reason">{alt.reason}</p>
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
