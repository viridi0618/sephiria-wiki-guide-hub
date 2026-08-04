"use client";

import { gameVersion } from "@/data/game-data/version";

interface VerifiedDataCardProps {
  weaponName: string;
  weaponDescription?: string | null;
  relatedSkills?: string[];
}

export default function VerifiedDataCard({ weaponName, weaponDescription, relatedSkills }: VerifiedDataCardProps) {
  return (
    <aside className="verified-data-card" aria-label="Verified game data">
      <h2 className="verified-data-card-heading">Verified Data</h2>
      <p className="verified-data-source">
        Extracted from game files. Source: {gameVersion.source} ({gameVersion.date}).
      </p>

      <dl className="verified-data-fields">
        <div>
          <dt>Weapon</dt>
          <dd>{weaponName}</dd>
        </div>
        {weaponDescription && (
          <div>
            <dt>Description</dt>
            <dd>{weaponDescription}</dd>
          </div>
        )}
      </dl>

      {relatedSkills && relatedSkills.length > 0 && (
        <div className="verified-data-section">
          <h3>Known Skills</h3>
          <ul>
            {relatedSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="verified-data-note">
        Skills and descriptions come from the current game build ({gameVersion.version}).
        Exact numeric values (damage, speed, costs) are in compiled game code and not yet
        available — all missing fields indicate data pending decompilation.
      </p>
    </aside>
  );
}
