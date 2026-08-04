import Link from "next/link";
import { weaponAssets } from "@/data/game-data/weapon-assets";
import type { WeaponProfile } from "@/data/game-data/weapon-profiles";
import GameEntityIcon from "./GameEntityIcon";

const buildHrefByWeaponId: Record<string, string> = {
  swordShield: "/builds/sword-and-shield/",
  greatsword: "/builds/greatsword/",
  dagger: "/builds/dagger/",
  crossbow: "/builds/crossbow/",
  staff: "/builds/staff/",
  grimoire: "/builds/grimoire/",
};

export default function WeaponCard({
  profile,
  reason,
}: {
  profile: WeaponProfile;
  reason?: string;
}) {
  const asset = weaponAssets.find((item) => item.weaponId === profile.id);
  const playstyle = profile.playstyles.join(" / ");

  return (
    <article className="game-card game-card-weapon">
      <GameEntityIcon
        kind="weapon"
        name={profile.family}
        image={asset?.image}
        alt={asset?.alt}
        verified={asset?.visuallyVerified}
        size="lg"
      />
      <div>
        <p className="game-card-kicker">Weapon</p>
        <h3>{profile.family}</h3>
        <dl>
          <div>
            <dt>Playstyle</dt>
            <dd>{playstyle}</dd>
          </div>
          <div>
            <dt>Difficulty</dt>
            <dd>{profile.difficulty}</dd>
          </div>
        </dl>
        {reason && <p>{reason}</p>}
        <Link className="game-card-link" href={buildHrefByWeaponId[profile.id] ?? "/builds/"}>
          Build Guide
        </Link>
      </div>
    </article>
  );
}
