import { make } from "./content-helpers";

const steamUrl = "https://store.steampowered.com/app/2436940/Sephiria/";
const version = "1.0";
const platforms = "PC (Windows, macOS)";

export const toolPages = [
  make({
    path: "build-picker",
    title: "Build Picker",
    h1: "Build Picker",
    eyebrow: "PLAYSTYLE TOOL",
    description:
      "Not sure which Sephiria weapon fits your playstyle? Answer five quick questions and the Build Picker matches you to a weapon build guide.",
    answer:
      "Answer five questions about how you like to play, and get a Build recommendation tailored to your playstyle.",
    category: "Tools",
    pageType: "webpage",
    version,
    platforms,
    informationType: "Tool",
    heroImage: "/screenshots/sephiria-home.webp",
    heroImageAlt: "Sephiria Bunnyville village entrance with NPC",
    heroImageCaption:
      "Steam official screenshot showing the village hub area.",
    heroImageWidth: 1280,
    heroImageHeight: 720,
    heroImageSourceUrl: steamUrl,
    sections: [
      {
        heading: "How the Build Picker works",
        paragraphs: [
          "The Build Picker asks five short questions about your combat preferences — preferred range, priority, attack speed, risk tolerance, and play mode — then scores all six weapon families and matches you to the best fit.",
          "Each recommendation includes a primary build, one or two alternatives, and a short explanation of why the fit makes sense. You can change any answer and re-run the picker as many times as you like.",
        ],
      },
      {
        heading: "What the questions cover",
        paragraphs: [
          "The five questions map directly to the trade-offs that separate Sephiria's weapon families: whether you want to fight up close or at range, whether you value safety or damage, whether you prefer fast strings or committed heavy swings, how much risk you accept in exchange for output, and whether you mainly play solo or co-op.",
          "Every question contributes a small weight to the final score — no single answer forces a build.",
        ],
      },
      {
        heading: "How recommendations are generated",
        paragraphs: [
          "Recommendations use a simple scoring system: each answer adds small weights to several weapon families based on playstyle fit. The family with the highest total becomes your primary recommendation, and the next two become alternatives.",
          "The picker reflects playstyle preferences — range, pace, defensive preference, resource management, and commitment level — not official damage rankings or stat claims.",
        ],
      },
      {
        heading: "After you get your recommendation",
        paragraphs: [
          "Read the full build guide linked from your recommendation card before committing a run. The guide covers the weapon's core combat loop, strengths, weaknesses, and opening considerations in more depth than the picker summary.",
          "If the recommended build does not feel right, reset the picker and adjust the answer that most closely matches your hesitation — usually risk tolerance or attack speed. You can also browse the Builds Hub to compare all six families side by side.",
        ],
      },
    ],
    related: ["builds", "beginner-guide", "weapons-guide"],
    tool: "build-picker",
  }),
];
