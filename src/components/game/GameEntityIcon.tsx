import Image from "next/image";

type EntityKind = "weapon" | "boss" | "skill" | "upgrade";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function GameEntityIcon({
  kind,
  name,
  image,
  alt,
  verified,
  size = "md",
}: {
  kind: EntityKind;
  name: string;
  image?: string | null;
  alt?: string;
  verified?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const canShowImage = Boolean(image && verified);

  return (
    <span className={`game-entity-icon game-entity-icon-${kind} game-entity-icon-${size}`}>
      {canShowImage ? (
        <Image src={image as string} alt={alt ?? name} width={96} height={96} sizes="96px" />
      ) : (
        <span aria-hidden="true">{initials(name)}</span>
      )}
    </span>
  );
}
