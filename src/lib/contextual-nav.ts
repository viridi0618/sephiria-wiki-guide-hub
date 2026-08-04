// Contextual navigation data generator for the sidebar.
// Given a page, produces sibling/category links that help users explore
// related content without returning to the hub or homepage.
import { bossPages } from "@/data/boss-pages";
import { buildPages } from "@/data/builds";
import type { GuidePageData } from "@/lib/types";

export interface ContextualLink {
  href: string;
  label: string;
  isCurrent?: boolean;
}

export interface ContextualSection {
  title: string;
  links: ContextualLink[];
}

const allBossPaths = bossPages.map((p) => p.path);
const allBuildPaths = buildPages.filter((p) => p.path.startsWith("builds/") && p.path !== "builds").map((p) => p.path);

/**
 * Generate contextual navigation sections for a page.
 * Returns an empty array for page types that don't need contextual nav.
 */
export function buildContextualSections(page: GuidePageData): ContextualSection[] {
  const sections: ContextualSection[] = [];

  // Boss pages: show other bosses + recommended builds
  if (page.path.startsWith("bosses/")) {
    // Other bosses
    const otherBosses: ContextualLink[] = bossPages
      .filter((p) => p.path !== page.path)
      .map((p) => ({
        href: `/${p.path}/`,
        label: p.h1.replace(" — Sephiria Boss Guide", ""),
      }));
    sections.push({ title: "Other Bosses", links: otherBosses });

    // Extract recommended builds from the page sections (table with build links)
    const buildSection = page.sections.find((s) => s.heading === "Recommended Builds");
    if (buildSection?.table) {
      const buildLinks: ContextualLink[] = [];
      for (const row of buildSection.table.rows) {
        for (const cell of row) {
          const m = cell.match(/^<a href="([^"]+)">([^<]+)<\/a>$/);
          if (m) {
            buildLinks.push({ href: m[1], label: m[2] });
          }
        }
      }
      if (buildLinks.length) {
        sections.push({ title: "Recommended Builds", links: buildLinks });
      }
    }

    // Always include progression guide link
    sections.push({
      title: "Guides",
      links: [
        { href: "/progression-guide/", label: "Progression Guide" },
        { href: "/beginner-guide/", label: "Beginner Guide" },
        { href: "/build-picker/", label: "Build Picker" },
      ],
    });
  }

  // Build pages: show other builds + related bosses
  if (page.path.startsWith("builds/") && page.path !== "builds") {
    // Other builds
    const otherBuilds: ContextualLink[] = allBuildPaths
      .filter((p) => p !== page.path)
      .map((p) => {
        const buildPage = buildPages.find((bp) => bp.path === p);
        return {
          href: `/${p}/`,
          label: buildPage?.h1?.replace(" — Sephiria Build Guide", "") ?? p,
        };
      });
    sections.push({ title: "Other Builds", links: otherBuilds });

    // Extract related bosses from strategy sections
    const bossSection = page.sections.find((s) => s.heading === "Related Bosses");
    if (bossSection?.table) {
      const bossLinks: ContextualLink[] = [];
      for (const row of bossSection.table.rows) {
        for (const cell of row) {
          const m = cell.match(/^<a href="([^"]+)">([^<]+)<\/a>$/);
          if (m) {
            bossLinks.push({ href: m[1], label: m[2] });
          }
        }
      }
      if (bossLinks.length) {
        sections.push({ title: "Related Bosses", links: bossLinks });
      }
    }

    // Systems links
    sections.push({
      title: "Systems",
      links: [
        { href: "/weapons-guide/", label: "Weapons Guide" },
        { href: "/destiny-tree-guide/", label: "Destiny Tree Guide" },
        { href: "/upgrade-guide/", label: "Upgrade Guide" },
      ],
    });
  }

  // Boss guide hub: list all boss pages
  if (page.path === "boss-guide") {
    sections.push({
      title: "Boss Guides",
      links: bossPages.map((p) => ({
        href: `/${p.path}/`,
        label: p.h1.replace(" — Sephiria Boss Guide", ""),
      })),
    });
  }

  // Builds hub: list all build pages
  if (page.path === "builds") {
    sections.push({
      title: "Build Pages",
      links: allBuildPaths.map((p) => {
        const buildPage = buildPages.find((bp) => bp.path === p);
        return {
          href: `/${p}/`,
          label: buildPage?.h1?.replace(" — Sephiria Build Guide", "") ?? p,
        };
      }),
    });
  }

  return sections;
}
