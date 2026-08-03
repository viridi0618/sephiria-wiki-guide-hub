"use client";

import { useState } from "react";
import Link from "next/link";

type AnswerKey = "range" | "priority" | "speed" | "risk" | "mode";

type Answers = Partial<Record<AnswerKey, string>>;

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

const BUILDS: Record<string, BuildInfo> = {
  sword: {
    name: "Sword & Shield Build",
    href: "/builds/sword/",
    reason:
      "Your preference for melee safety with a deliberate pace matches Sword & Shield's block-while-move identity. You survive first and punish second, and a perfect guard converts defense directly into a counter window.",
    rhythm: "Slow and reactive — approach under shield, perfect-guard, counter, reset.",
    strengths: [
      "Highest survivability; unique block-while-move",
      "Perfect guard converts defense into punish",
      "Low-to-mid difficulty, very forgiving",
    ],
    risks: [
      "Very short range; counter barely moves forward",
      "Slow damage output; 横扫 costs MP",
      "Mobile bosses can walk out of punish range",
    ],
  },
  greatsword: {
    name: "Great Sword Build",
    href: "/builds/spear/",
    reason:
      "You want melee damage with deliberate timing. Great Sword trades speed for a wide-arc hit area, strong interrupts, and high floor damage — each swing is a commitment, but a well-placed one clears groups.",
    rhythm: "Commit and reposition — wait for an opening, swing wide, reposition during recovery.",
    strengths: [
      "Large hit area clears groups in one swing",
      "Strong interrupts shut down enemy attacks",
      "High floor damage; reliable without a perfect build",
    ],
    risks: [
      "Sluggish until attack speed reaches ~140%",
      "Long recovery on every swing",
      "Fast, mobile bosses are frustrating",
    ],
  },
  dagger: {
    name: "Dagger Build",
    href: "/builds/fist/",
    reason:
      "You want fast melee with high risk tolerance. Dagger has the highest base output of any weapon family, earned in the most dangerous output range. The parry refunds MP, turning defense into your resource engine.",
    rhythm: "Fast and unforgiving — stick, multi-hit, parry to refund MP, reposition sharply.",
    strengths: [
      "Highest base DPS of any weapon family",
      "Parry refunds MP, converting defense to resource",
      "Fast pace rewards mechanical players",
    ],
    risks: [
      "Most dangerous output range — you take hits where you deal them",
      "Parry has startup; demands reads, not reactions alone",
      "One missed parry at this range is costly",
    ],
  },
  crossbow: {
    name: "Crossbow Build",
    href: "/builds/bow/",
    reason:
      "You want ranged safety. Crossbow keeps threats at distance and rewards magazine management — track your shot count, reload in safe windows, and exploit the final-shot bonus on a priority target.",
    rhythm: "Kite and reload — fire at range, track shot count, reload during safe windows.",
    strengths: [
      "Ranged safety; answer threats before they reach you",
      "High fire-rate ceiling via 加速核心 (~10.6 shots/sec)",
      "XRA-9 offers single-shot burst for break windows",
    ],
    risks: [
      "Reload downtime is exploitable under melee pressure",
      "Final-shot bonus requires shot-counting",
      "Branches play very differently — builds don't always transfer",
    ],
  },
  staff: {
    name: "Staff Build",
    href: "/builds/magic/",
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
      "Newer weapon; effects sparsely documented",
    ],
  },
  tome: {
    name: "Magic Tome Build",
    href: "/builds/scythe/",
    reason:
      "You want magic control. Magic Tome's spell rotation and 模仿之书 duplication give flexible pack control — stack 魔导书急速 to shrink cooldowns and duplicate your highest-value spell at the right moment.",
    rhythm: "Rotate and duplicate — cast, stack haste, duplicate your best spell at the right moment.",
    strengths: [
      "Flexible spell rotation adapts to different pack shapes",
      "模仿之书 duplicates your best spell for burst windows",
      "魔导书急速 scales cooldowns, rewarding investment",
    ],
    risks: [
      "MP-hungry; a dry bar stalls the whole rotation",
      "Newer system; difficulty and interactions unverified",
      "Rotation complexity raises the execution floor",
    ],
  },
};

function recommend(answers: Answers): RecommendationResult {
  const { range, priority, speed, risk } = answers;

  // Specific combinations from the spec
  if (range === "melee" && priority === "safety" && speed === "slow") {
    return {
      primary: BUILDS.sword,
      alternatives: [BUILDS.greatsword, BUILDS.crossbow],
    };
  }
  if (range === "melee" && priority === "damage" && speed === "slow") {
    return {
      primary: BUILDS.greatsword,
      alternatives: [BUILDS.dagger, BUILDS.sword],
    };
  }
  if (range === "melee" && speed === "fast" && risk === "high") {
    return {
      primary: BUILDS.dagger,
      alternatives: [BUILDS.greatsword, BUILDS.sword],
    };
  }
  if (range === "ranged" && priority === "safety") {
    return {
      primary: BUILDS.crossbow,
      alternatives: [BUILDS.staff, BUILDS.sword],
    };
  }
  if (range === "magic" && priority === "damage") {
    return {
      primary: BUILDS.staff,
      alternatives: [BUILDS.tome, BUILDS.crossbow],
    };
  }
  if (range === "magic" && priority === "control") {
    return {
      primary: BUILDS.tome,
      alternatives: [BUILDS.staff, BUILDS.crossbow],
    };
  }

  // Default fallback based on first preference (range)
  if (range === "melee") {
    return {
      primary: BUILDS.sword,
      alternatives: [BUILDS.greatsword, BUILDS.dagger],
    };
  }
  if (range === "ranged") {
    return {
      primary: BUILDS.crossbow,
      alternatives: [BUILDS.staff, BUILDS.sword],
    };
  }
  if (range === "magic") {
    return {
      primary: BUILDS.staff,
      alternatives: [BUILDS.tome, BUILDS.crossbow],
    };
  }

  // Ultimate fallback
  return {
    primary: BUILDS.sword,
    alternatives: [BUILDS.crossbow, BUILDS.staff],
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
            starting point — read the full guide to confirm the fit before
            committing a run.
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
