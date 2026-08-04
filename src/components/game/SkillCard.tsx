import { skills } from "@/data/game-data/skills";
import GameEntityIcon from "./GameEntityIcon";
import EntityLink from "./EntityLink";

export default function SkillCard({
  name,
  usedIn,
  why,
  href,
}: {
  name: string;
  usedIn: string;
  why: string;
  href: string;
}) {
  const skill = skills.find((item) => item.name === name);

  return (
    <article className="game-card game-card-compact">
      <GameEntityIcon kind="skill" name={name} />
      <div>
        <p className="game-card-kicker">Skill</p>
        <h3>{name}</h3>
        <p>{why}</p>
        <EntityLink kind="weapon" label={usedIn} href={href} />
        <small>{skill ? "Source: extracted skill data." : "Source: strategy reference; verify in game data."}</small>
      </div>
    </article>
  );
}
