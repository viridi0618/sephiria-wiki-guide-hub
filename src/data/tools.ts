import { make } from "./content-helpers";

const steamUrl = "https://store.steampowered.com/app/2436940/Sephiria/";
const version = "Early Access — verify in current build";
const platforms = "PC (Steam)";

export const toolPages = [
  make({
    path: "build-picker",
    title: "Build Picker",
    h1: "Build Picker",
    eyebrow: "PLAYSTYLE TOOL",
    description:
      "An interactive tool that matches your playstyle to a Sephiria weapon build guide in five questions.",
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
          "The Build Picker asks five short questions about your combat preferences — preferred range, priority, attack speed, risk tolerance, and play mode — then matches your answers to one of the six weapon build guides on this site.",
          "Each recommendation includes a primary build, one or two alternatives, and a short explanation of why the fit makes sense. You can change any answer and re-run the picker as many times as you like.",
        ],
      },
      {
        heading: "What the questions cover",
        paragraphs: [
          "The five questions map directly to the trade-offs that separate Sephiria's weapon families: whether you want to fight up close or at range, whether you value safety or damage, whether you prefer fast strings or committed heavy swings, how much risk you accept in exchange for output, and whether you mainly play solo or co-op.",
          "No single answer forces a build. The picker weighs the combination and falls back to your first preference — range — when no specific rule matches.",
        ],
      },
      {
        heading: "How recommendations are generated",
        paragraphs: [
          "Recommendations use transparent, rule-based matching — no machine learning or hidden scoring. Each rule checks a combination of answers and returns a primary build plus alternatives, so you can see exactly why a recommendation was made.",
          "The rules favour specific combinations: melee plus safety plus slow pace points to Sword & Shield; melee plus damage plus slow pace points to Great Sword; fast melee with high risk tolerance points to Dagger; ranged plus safety points to Crossbow; magic plus damage points to Staff; and magic plus control points to Magic Tome. Any other combination falls back to your preferred range.",
        ],
      },
      {
        heading: "After you get your recommendation",
        paragraphs: [
          "Read the full build guide linked from your recommendation card before committing a run. The guide covers the weapon's core combat loop, strengths, weaknesses, and opening choices in more depth than the picker summary.",
          "If the recommended build does not feel right, reset the picker and adjust the answer that most closely matches your hesitation — usually risk tolerance or attack speed. You can also browse the Builds Hub to compare all six families side by side.",
        ],
      },
    ],
    related: ["builds", "beginner-guide", "weapons-guide"],
    tool: "build-picker",
  }),
];
