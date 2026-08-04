import Link from "next/link";
import { bossAssets } from "@/data/game-data/boss-assets";
import type { BossData } from "@/data/game-data/bosses";
import { bossSlugById } from "@/lib/strategy-sections";
import GameEntityIcon from "./GameEntityIcon";

export default function BossCard({
  boss,
  reason,
}: {
  boss: BossData;
  reason?: string;
}) {
  const slug = bossSlugById[boss.id] ?? boss.id;
  const asset = bossAssets[slug];
  const chapter = boss.chapters.length
    ? `Chapter ${boss.chapters.join(" / ")}`
    : "Chapter not verified";

  return (
    <article className="game-card game-card-boss">
      <GameEntityIcon
        kind="boss"
        name={boss.displayName}
        image={asset?.image}
        alt={asset?.alt}
        verified={asset?.visuallyVerified}
        size="lg"
      />
      <div>
        <p className="game-card-kicker">Boss</p>
        <h3>{boss.displayName}</h3>
        <dl>
          <div>
            <dt>Known chapter</dt>
            <dd>{chapter}</dd>
          </div>
          <div>
            <dt>Verified events</dt>
            <dd>{boss.eventCount}</dd>
          </div>
        </dl>
        {reason && <p>{reason}</p>}
        <Link className="game-card-link" href={`/bosses/${slug}/`}>
          Guide
        </Link>
      </div>
    </article>
  );
}
