import ArticleVideo from "@/components/ArticleVideo";
import { bosses } from "@/data/game-data/bosses";
import { weaponProfiles } from "@/data/game-data/weapon-profiles";
import type { ContentVideo, GuidePageData } from "@/lib/types";
import {
  bossSlugById,
  type ProfileId,
  strategyPlans,
  strategySkills,
  strategyUpgrades,
} from "@/lib/strategy-sections";
import BossCard from "./BossCard";
import EntityLink from "./EntityLink";
import SkillCard from "./SkillCard";
import UpgradeCard from "./UpgradeCard";
import WeaponCard from "./WeaponCard";

const profileIdByWeaponName: Record<string, ProfileId> = {
  "Sword and Shield": "swordShield",
  Greatsword: "greatsword",
  Dagger: "dagger",
  Crossbow: "crossbow",
  Staff: "staff",
  Grimoire: "grimoire",
};

const buildLabelByPath: Record<string, string> = {
  "builds/sword-and-shield": "Sword and Shield",
  "builds/greatsword": "Greatsword",
  "builds/dagger": "Dagger",
  "builds/crossbow": "Crossbow",
  "builds/staff": "Staff",
  "builds/grimoire": "Grimoire",
};

const bossBySlug = Object.fromEntries(
  bosses.map((boss) => [bossSlugById[boss.id] ?? boss.id, boss]),
);

function BuildMediaHero({ page }: { page: GuidePageData }) {
  const profileId = page.verifiedData?.weaponId
    ? profileIdByWeaponName[page.verifiedData.weaponId]
    : undefined;
  const profile = profileId ? weaponProfiles.find((item) => item.id === profileId) : undefined;
  if (!profile || !profileId) return null;

  const plan = strategyPlans[profileId];
  const buildHref = `/${page.canonicalPath ?? page.path}/`;
  const relatedBosses = plan.boss
    .map(([id, rating, why]) => {
      const boss = bosses.find((item) => item.id === id);
      return boss ? { boss, rating, why } : null;
    })
    .filter((item): item is { boss: (typeof bosses)[number]; rating: string; why: string } => Boolean(item));

  return (
    <section className="media-hero media-hero-build" aria-label={`${profile.family} visual build route`}>
      <div className="media-hero-copy">
        <p className="section-label">Visual build route</p>
        <h2>{profile.family}: see the loop first</h2>
        <p>{plan.goal}</p>
        <div className="loop-strip" aria-label="Gameplay loop">
          {plan.loop.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
        <div className="entity-link-row">
          <EntityLink kind="weapon" label={profile.family} href={buildHref} />
          <EntityLink kind="skill" label={strategySkills[profileId][0]} href={`${buildHref}#core-skills`} />
          <EntityLink kind="upgrade" label={strategyUpgrades[profileId][0]} href={`${buildHref}#core-upgrades-items`} />
        </div>
      </div>
      <div className="visual-entity-grid">
        <WeaponCard profile={profile} reason={plan.role} />
        {strategySkills[profileId].slice(0, 2).map((skill, index) => (
          <SkillCard
            key={skill}
            name={skill}
            usedIn={profile.family}
            href={`${buildHref}#core-skills`}
            why={index === 0 ? "Primary route candidate for the current loop." : "Conditional support when it solves the current room."}
          />
        ))}
        {strategyUpgrades[profileId].slice(0, 2).map((upgrade, index) => (
          <UpgradeCard
            key={upgrade}
            name={upgrade}
            usedBy={profile.family}
            href={`${buildHref}#core-upgrades-items`}
            why={index === 0 ? "Early stability candidate." : "Core formation or safety support."}
          />
        ))}
        {relatedBosses.map(({ boss, rating, why }) => (
          <BossCard key={boss.id} boss={boss} reason={`${rating}: ${why}`} />
        ))}
      </div>
    </section>
  );
}

function BossMediaHero({ page }: { page: GuidePageData }) {
  const slug = page.path.replace(/^bosses\//, "");
  const boss = bossBySlug[slug];
  if (!boss) return null;
  const buildPaths = page.related.filter((path) => path.startsWith("builds/"));

  return (
    <section className="media-hero media-hero-boss" aria-label={`${boss.displayName} visual boss route`}>
      <div className="media-hero-copy">
        <p className="section-label">Visual boss route</p>
        <h2>{boss.displayName}: identify, respond, reset</h2>
        <p>
          Use verified dialogue and call-outs as warnings, then follow the guide for
          editorial responses. Drops remain unknown unless extracted data confirms them.
        </p>
        <div className="entity-link-row">
          <EntityLink kind="boss" label={boss.displayName} href={`/${page.path}/`} />
          {buildPaths.slice(0, 2).map((path) => (
            <EntityLink
              key={path}
              kind="weapon"
              label={buildLabelByPath[path] ?? "Build"}
              href={`/${path}/`}
            />
          ))}
        </div>
      </div>
      <div className="visual-entity-grid">
        <BossCard boss={boss} reason="Open the fight by reading the confirmed cues." />
        {boss.attackCalls.slice(0, 3).map((call) => (
          <article className="game-card game-card-compact" key={call}>
            <EntityLink kind="boss" label={call} href={`/${page.path}/#known-attack-call-outs`} />
            <p>Warning: verified call-out. Response: avoid long commits until the visual pattern is confirmed.</p>
          </article>
        ))}
        {buildPaths.slice(0, 2).map((path) => {
          const label = buildLabelByPath[path];
          const profileId = label ? profileIdByWeaponName[label] : undefined;
          const profile = profileId ? weaponProfiles.find((item) => item.id === profileId) : undefined;
          return profile ? <WeaponCard key={path} profile={profile} reason="Editorial recommendation from the boss guide." /> : null;
        })}
      </div>
    </section>
  );
}

function HubMediaHero({ page }: { page: GuidePageData }) {
  if (page.path === "builds") {
    return (
      <section className="media-hero" aria-label="Weapon build visual index">
        <div className="media-hero-copy">
          <p className="section-label">Entity layer</p>
          <h2>Choose by weapon rhythm</h2>
          <p>Six weapon-family cards turn the Builds hub into a quick route picker instead of a text list.</p>
        </div>
        <div className="visual-entity-grid">
          {weaponProfiles.map((profile) => (
            <WeaponCard key={profile.id} profile={profile} />
          ))}
        </div>
      </section>
    );
  }
  if (page.path === "boss-guide") {
    const publicBosses = ["askard", "mole-big-bomb", "mad-armadillo", "bird-demon", "larid", "oink-king"]
      .map((slug) => bossBySlug[slug])
      .filter((boss): boss is (typeof bosses)[number] => Boolean(boss));
    return (
      <section className="media-hero" aria-label="Boss visual index">
        <div className="media-hero-copy">
          <p className="section-label">Entity layer</p>
          <h2>Read the boss before the lore</h2>
          <p>Boss cards surface the confirmed chapter markers, event counts, and guide links before dialogue evidence.</p>
        </div>
        <div className="visual-entity-grid">
          {publicBosses.map((boss) => (
            <BossCard key={boss.id} boss={boss} />
          ))}
        </div>
      </section>
    );
  }
  return null;
}

export function FeaturedVideo({ video }: { video?: ContentVideo }) {
  if (!video) return null;
  return (
    <section className="featured-video" aria-label="Featured video">
      <p className="section-label">Featured video</p>
      <ArticleVideo video={video} />
    </section>
  );
}

export default function MediaHero({ page }: { page: GuidePageData }) {
  if (page.verifiedData?.weaponId) return <BuildMediaHero page={page} />;
  if (page.path.startsWith("bosses/")) return <BossMediaHero page={page} />;
  return <HubMediaHero page={page} />;
}
