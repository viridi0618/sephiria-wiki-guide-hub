import { upgrades } from "@/data/game-data/upgrades";
import { items } from "@/data/game-data/items";
import GameEntityIcon from "./GameEntityIcon";
import EntityLink from "./EntityLink";

function clean(text: string | null | undefined) {
  return text?.replace(/<[^>]+>/g, "") ?? null;
}

export default function UpgradeCard({
  name,
  usedBy,
  why,
  href,
}: {
  name: string;
  usedBy: string;
  why: string;
  href: string;
}) {
  const upgrade = upgrades.find((item) => item.name === name);
  const item = items.find((entry) => entry.name === name);
  const description = clean(upgrade?.description ?? item?.description);

  return (
    <article className="game-card game-card-compact">
      <GameEntityIcon kind="upgrade" name={name} />
      <div>
        <p className="game-card-kicker">Upgrade / Item</p>
        <h3>{name}</h3>
        <p>{description ?? why}</p>
        <EntityLink kind="weapon" label={usedBy} href={href} />
        <small>Source: extracted game data.</small>
      </div>
    </article>
  );
}
