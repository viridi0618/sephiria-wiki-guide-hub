// Sephiria Strategy Layer — generates structured strategy sections for build pages.
// Data fields come from extracted game data; weapon→skill/upgrade/boss associations
// are editorial analysis and are labeled as such.
import { weaponProfiles } from "@/data/game-data/weapon-profiles";
import { bosses } from "@/data/game-data/bosses";
import type { GuideSection } from "@/lib/types";

type ProfileId = "swordShield" | "greatsword" | "dagger" | "crossbow" | "staff" | "grimoire";

/** Weapon→skill-name associations. Skill names are real (game data); the association is editorial. */
const weaponSkillNames: Record<ProfileId, string[]> = {
  swordShield: ["Shield", "Blessing", "Healing Stream", "Stone Wave"],
  greatsword: ["Stone Wave", "Judgment of Thunder", "Telekinetic Blow", "Rock Oink"],
  dagger: ["Frost Dagger", "Haste", "Sharp Eye", "Smoke Screen"],
  crossbow: ["Rain of Arrows", "Lightning Arrow", "Fire Arrow", "Light Arrow"],
  staff: ["Call Lightning", "Fire Circus", "Meteor Shower", "Tempest"],
  grimoire: ["Raise Skeleton", "Summon Thorn Ball", "Spirit Rabbit Warrior", "Tornado"],
};

/** Weapon→upgrade-name associations. Upgrade names are real (game data); the association is editorial. */
const weaponUpgradeNames: Record<ProfileId, string[]> = {
  swordShield: ["Toughness", "Composure", "Slim Cushion", "Split"],
  greatsword: ["Enrage", "Bushwhack", "Green Sawblade", "Split"],
  dagger: ["Smoke Screen", "Sharp Acorn", "Composure", "Radiating Charm"],
  crossbow: ["Ice Arrow", "Sharp Acorn", "Radiating Charm", "Bushwhack"],
  staff: ["Toughness", "Radiating Charm", "Green Sawblade", "Composure"],
  grimoire: ["Enrage", "Split", "Water Elemental's Paw Wax", "Helena's Stairway Fragment"],
};

/** Weapon→boss associations (editorial). Boss names are real (game data). */
const weaponBossIds: Record<ProfileId, string[]> = {
  swordShield: ["Askard", "BirdDemon"],
  greatsword: ["Askard", "MadArmadillo"],
  dagger: ["MoleBigBomb", "Larid"],
  crossbow: ["BirdDemon", "OinkKing"],
  staff: ["MadArmadillo", "QBoss"],
  grimoire: ["OinkKing", "QBoss"],
};

const bossPagePath: Record<string, string> = {
  Askard: "/bosses/askard/",
  MoleBigBomb: "/bosses/mole-big-bomb/",
  MadArmadillo: "/bosses/mad-armadillo/",
  BirdDemon: "/bosses/bird-demon/",
  Larid: "/bosses/larid/",
  OinkKing: "/bosses/oink-king/",
};

export function buildStrategySections(profileId: ProfileId): GuideSection[] {
  const profile = weaponProfiles.find((p) => p.id === profileId);
  if (!profile) return [];

  const skills = weaponSkillNames[profileId];
  const ups = weaponUpgradeNames[profileId];
  const bossIds = weaponBossIds[profileId];
  const bossRows = bossIds
    .map((bid) => {
      const boss = bosses.find((b) => b.id === bid);
      const path = bossPagePath[bid];
      if (!boss || !path) return null;
      return [`<a href="${path}">${boss.displayName}</a>`, boss.chapters.length ? `Chapter ${boss.chapters.join(", ")}` : "Chapter unknown"];
    })
    .filter((r): r is string[] => r !== null);

  const roleRows = [
    [
      "Combat range",
      profile.tags.includes("ranged") || profile.tags.includes("safe-distance") || profile.tags.includes("magic-ranged")
        ? "Ranged"
        : profile.tags.includes("close-range")
          ? "Close"
          : profile.tags.includes("mid-range-melee")
            ? "Mid melee"
            : profile.tags.includes("short-range")
              ? "Short melee"
              : "Melee",
    ],
    [
      "Attack pace",
      profile.tags.includes("fast") || profile.tags.includes("multi-hit")
        ? "Fast, multi-hit"
        : profile.tags.includes("slow-heavy")
          ? "Slow, heavy"
          : "Mid-paced",
    ],
    ["Difficulty (community assessment)", profile.difficulty === "unverified" ? "Unverified" : profile.difficulty],
  ];

  return [
    {
      heading: "Weapon Role",
      paragraphs: [
        `${profile.family} fills a distinct role in the weapon roster. The traits below come from the extracted weapon data; difficulty is a community assessment, not an official rating.`,
      ],
      table: { headers: ["Attribute", "Value"], rows: roleRows },
      note: "Role data extracted from game files (en-US.json localization); difficulty is a community assessment.",
    },
    {
      heading: "How This Build Plays",
      paragraphs: [
        `${profile.family} gameplay is defined by its pace and positioning. ${profile.playstyles.join(", ")} playstyles reward players who read the room and stay within the family's effective range.`,
        `Key combat traits from the data: ${profile.tags.slice(0, 4).join(", ")}.`,
      ],
      bullets: profile.tags.slice(0, 5).map((t) => t.replace(/-/g, " ")),
      note: "Traits derived from extracted weapon data tags.",
    },
    {
      heading: "Early Progression",
      paragraphs: [
        "In the first floors, prioritize upgrades that make your core loop consistent before chasing synergy. Survival upgrades first, then the attack pattern that defines your weapon, and only then expensive side branches.",
      ],
      bullets: [
        "Unlock basic attack and defense upgrades before expensive branches.",
        `Look for early upgrades in this family's pool: ${ups.slice(0, 2).join(", ")}.`,
        "Avoid committing to a late-game synergy before the core loop is comfortable.",
      ],
      note: "Progression guidance is editorial; upgrade names are extracted from game data.",
    },
    {
      heading: "Core Skills",
      paragraphs: [
        `The skills below pair naturally with ${profile.family} in the current build. Skill names are extracted from game files; the pairing is editorial analysis.`,
      ],
      bullets: skills.map((s) => `${s} — available skill name from game data`),
      note: "Skill names extracted from game data; associations are editorial.",
    },
    {
      heading: "Core Upgrades",
      paragraphs: [
        "These upgrades support the family's core loop. Upgrade names are extracted from game files; the pairing is editorial analysis.",
      ],
      bullets: ups.map((u) => `${u} — upgrade name from game data`),
      note: "Upgrade names extracted from game data; associations are editorial.",
    },
    {
      heading: "Endgame Setup",
      paragraphs: [
        "A late-run setup for this family combines the weapon, one or two core skills, and the upgrades that keep the loop running.",
      ],
      table: {
        headers: ["Slot", "Selection"],
        rows: [
          ["Main weapon", profile.family],
          ["Core skills", skills.slice(0, 2).join(", ")],
          ["Core upgrades", ups.slice(0, 2).join(", ")],
          ["Playstyle", profile.playstyles.join(", ")],
        ],
      },
      note: "Endgame recommendations are editorial synthesis of extracted game data.",
    },
    {
      heading: "Weaknesses",
      paragraphs: [
        "No weapon family is universally strong. These trade-offs are editorial assessments based on the weapon's extracted traits.",
      ],
      bullets: profile.tags.includes("close-range")
        ? ["You take hits where you deal them — positioning mistakes are expensive.", "Crowds can overwhelm the range if you are surrounded.", "Requires tighter dodge timing than ranged families."]
        : profile.tags.includes("slow-heavy")
          ? ["Long recovery on committed swings leaves you exposed.", "Fast mobile enemies are frustrating to hit.", "Needs attack-speed investment before it feels responsive."]
          : profile.tags.includes("safe-distance")
            ? ["Reload or cast windows are exploitable under pressure.", "Positioning mistakes are punished harder than for melee.", "Some rooms force close-quarters combat."]
            : ["MP management is mandatory; an empty bar stalls the loop.", "Effects and costs are sparsely documented; verify in-game."],
      note: "Weakness analysis is editorial; based on extracted weapon traits.",
    },
    {
      heading: "Related Bosses",
      paragraphs: [
        "These bosses appear in the game data and are worth studying for this weapon family. Boss names are extracted from game files; the pairing is editorial.",
      ],
      table: { headers: ["Boss", "Chapter"], rows: bossRows },
      note: "Boss names extracted from game data (BossSpeech keys); chapter from boss event markers where available.",
    },
  ];
}
