# Sephiria Wiki — Builds, Guides & Tips

A decision-first Sephiria guide hub built with Next.js App Router and static export. It intentionally avoids database-style item, enemy, drop, and numerical catalogues.

## Architecture

- `src/app/` — routes, metadata, sitemap, robots and manifest
- `src/components/` — shared site shell and GuidePage components
- `src/data/` — typed guide, build, system, FAQ, tool and navigation data
- `src/lib/` — site configuration, content types and outline helpers
- `scripts/` — static-output, navigation and English SEO checks

## Validation

```bash
npm ci
npm run verify
```

The production static export is generated in `out/`.
