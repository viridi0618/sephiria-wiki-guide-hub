import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GuideCard from "@/components/GuideCard";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { getPage, pages } from "@/data/pages";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const title = "Sephiria Wiki - Builds, Guides & Tips";
const description =
  "Sephiria Wiki for beginner guides, builds, weapon tips, progression strategies, and gameplay help.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    siteName: siteConfig.name,
    images: [siteConfig.defaultSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.defaultSocialImage],
  },
};

const featured = [
  "beginner-guide",
  "builds",
  "weapons-guide",
  "destiny-tree-guide",
  "boss-guide",
  "progression-guide",
]
  .map(getPage)
  .filter(Boolean);
const builds = [
  "builds/sword",
  "builds/bow",
  "builds/magic",
  "builds/spear",
  "builds/fist",
  "builds/scythe",
]
  .map(getPage)
  .filter(Boolean);
const faqs = [
  {
    question: "Is Sephiria multiplayer?",
    answer:
      "Yes — Sephiria supports online co-op for up to 4 players. You can trade items, revive teammates, and tackle the tower together.",
  },
  {
    question: "What platforms is Sephiria on?",
    answer:
      "Sephiria is available on Steam for Windows and macOS, with full controller support.",
  },
  {
    question: "How many weapons are in Sephiria?",
    answer:
      "Sephiria has 6 weapon families — Sword & Shield, Great Sword, Dagger, Crossbow, Staff, and Magic Tome — each with over 50 upgrades.",
  },
];
const lastUpdated = [...pages]
  .map((p) => p.updated)
  .sort()
  .reverse()[0];
const steamUrl = "https://store.steampowered.com/app/2436940/Sephiria/";

export default function Home() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];
  return (
    <>
      <JsonLd data={schemas} />
      <section className="home-hero">
        <figure className="home-hero-media">
          <Image
            src="/screenshots/sephiria-home.webp"
            alt="Sephiria official screenshot showing Bunnyville village entrance"
            width={1792}
            height={1024}
            priority
            sizes="100vw"
          />
          <figcaption>
            Official Sephiria screenshot from the Steam store page.
          </figcaption>
        </figure>
        <div className="home-hero-shade" />
        <div className="home-hero-inner">
          <p className="eyebrow">Independent builds, guides &amp; tips</p>
          <h1>Sephiria Wiki</h1>
          <p className="hero-lead">
            Builds, guides and practical tips to help you choose your next move
            in Sephiria.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/beginner-guide/">
              Start the beginner guide
            </Link>
            <Link className="button button-secondary" href="/build-picker/">
              Find your build
            </Link>
          </div>
        </div>
      </section>
      <main className="home-main" id="main-content">
        <section className="split-feature">
          <div>
            <p className="section-label">First steps</p>
            <h2>Beginner Guide</h2>
            <p>
              New to Sephiria? Start with a repeatable combat rhythm, learn what
              ends a run, and change one variable at a time instead of copying
              the most complicated setup.
            </p>
            <Link className="button button-primary" href="/beginner-guide/">
              Read the beginner guide
            </Link>
          </div>
          <div>
            <p className="section-label">Playstyle tool</p>
            <h2>Build Picker</h2>
            <p>
              Not sure which weapon fits you? Answer five quick questions about
              range, pace, and risk, and the Build Picker matches you to one of
              the six weapon-family guides.
            </p>
            <Link className="button button-secondary" href="/build-picker/">
              Find your build
            </Link>
          </div>
        </section>
        <section>
          <p className="section-label">Choose a route</p>
          <h2>Featured Sephiria guides</h2>
          <p className="section-intro">
            Begin with the fundamentals, choose a coherent playstyle, then
            connect that build to progression and encounter practice.
          </p>
          <div className="guide-grid">
            {featured.map((p) => p && <GuideCard key={p.path} page={p} />)}
          </div>
        </section>
        <section>
          <p className="section-label">Builds</p>
          <h2>Six weapon-family playstyles</h2>
          <p className="section-intro">
            Each build page covers the core combat loop, strengths, weaknesses,
            and opening choices for its weapon family so you can compare like
            with like.
          </p>
          <div className="guide-grid class-grid">
            {builds.map((p) => p && <GuideCard key={p.path} page={p} />)}
          </div>
        </section>
        <section className="split-feature">
          <div>
            <p className="section-label">Gameplay</p>
            <h2>Weapons Guide</h2>
            <p>
              Compare reach, safety, control, and combat rhythm across all six
              weapon families so you can pick the one that solves your problem.
            </p>
            <div className="inline-links">
              <Link href="/weapons-guide/">Weapons Guide</Link>
              <Link href="/boss-guide/">Boss Guide</Link>
            </div>
          </div>
          <div>
            <p className="section-label">Systems</p>
            <h2>Destiny Tree</h2>
            <p>
              Treat the Destiny Tree as a sequence of decisions. Prioritize the
              next useful unlock instead of treating progression as a completion
              checklist.
            </p>
            <div className="inline-links">
              <Link href="/destiny-tree-guide/">Destiny Tree</Link>
              <Link href="/upgrade-guide/">Upgrade Guide</Link>
            </div>
          </div>
        </section>
        <section className="split-feature">
          <div>
            <p className="section-label">Watch</p>
            <h2>Official Sephiria trailer</h2>
            <p>
              See Sephiria in motion. The official trailer and the latest
              screenshots are available on the Steam store page while we prepare
              an embedded player.
            </p>
            <Link
              className="button button-secondary"
              href={steamUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Steam
            </Link>
          </div>
          <div>
            <p className="section-label">Up to date</p>
            <h2>Latest updates</h2>
            <p>
              Guides are reviewed against the current Sephiria build. The last
              content review was on {lastUpdated}.
            </p>
            <div className="inline-links">
              <Link href="/progression-guide/">Progression Guide</Link>
              <Link href="/tips-and-tricks/">Tips &amp; Tricks</Link>
            </div>
          </div>
        </section>
        <section>
          <p className="section-label">Quick answers</p>
          <h2>Player questions</h2>
          <FAQ items={faqs} />
        </section>
      </main>
    </>
  );
}
