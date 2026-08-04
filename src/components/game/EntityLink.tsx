import Link from "next/link";
import GameEntityIcon from "./GameEntityIcon";

type EntityKind = "weapon" | "boss" | "skill" | "upgrade";

export default function EntityLink({
  kind,
  label,
  href,
}: {
  kind: EntityKind;
  label: string;
  href: string;
}) {
  return (
    <Link className="entity-link" href={href}>
      <GameEntityIcon kind={kind} name={label} size="sm" />
      <span>{label}</span>
    </Link>
  );
}
