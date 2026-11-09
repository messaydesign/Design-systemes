# Main Brand starter

A Next.js app wired to Main Brand UI: theme tokens, brand fonts, an app shell
with sidebar navigation, the core components and a few page patterns.

## Start

```bash
npm install        # or: bun install / pnpm install
npm run dev        # http://localhost:3000 — add `-- -p 3002` if that port is taken
```

Rename the app in `app/layout.tsx` (`APP_NAME`).

## Change the brand

Search `app/globals.css` for `--brand-`. The brand block in `:root` holds
every brand colour; component tokens reference it, so these are the only
colours you edit. Replace the orange defaults with your own, e.g. a blue brand:

```css
:root {
  --brand-primary: #2f6bff;           /* primary fill */
  --brand-primary-hover: #1f55db;
  --brand-primary-pressed: #1844b0;
  --brand-on-primary: #ffffff;        /* text on the primary fill */
  --brand-on-primary-active: #ffffff; /* text on hover/pressed fill */
  --brand-strong: #1844b0;            /* brand text, borders, focus */
  --brand-subtle: #eef3ff;            /* selected backgrounds */
  --brand-strong-hover: #12388f;      /* link hover */
  --brand-strong-pressed: #0d2a6b;    /* link pressed */
}
.dark {
  --brand-strong: #8fb0ff;            /* lighter on dark surfaces */
  --brand-subtle: #0f1d40;
  --brand-strong-hover: #b3caff;
  --brand-strong-pressed: #d1defe;
}
```

Keep `--brand-strong` at 4.5:1 contrast against the background. Radius:
`--radius` and `--radius-soft`. Fonts: `app/layout.tsx`. Full token list:
docs → Theming and tokens.

## Add a page

1. Create `app/<route>/page.tsx`. Start with `PageHeader` from
   `components/patterns/page-header.tsx`.
2. Add it to `lib/navigation.ts` so it shows in the sidebar (optionally with
   an `icon`).

## Add components

Components come from the Main Brand registry (`@main` in `components.json`)
and are copied into `components/ui` — you own them.

```bash
npx shadcn@latest add @main/tabs @main/toggle-group
# bun: bunx shadcn@latest add …   pnpm: pnpm dlx shadcn@latest add …
```

Adding components never overwrites token values you have changed; the CLI
only adds tokens that are missing.

Already installed: button, input, textarea, field, label, select, checkbox,
dialog, sheet, card, item, sidebar, nav-item, alert, empty, skeleton,
badge, separator, dropdown-menu, icons. For lists of people or records use
`Item` inside `ItemGroup`; a Table component is not available yet. The docs list everything else.

The registry URL in `components.json` points at `http://localhost:3000`.
Change it when the registry is deployed.

## What's where

| Path | Contents |
| --- | --- |
| `app/globals.css` | Theme tokens (light + dark), Tailwind setup |
| `app/layout.tsx` | Fonts, theme script, app shell |
| `components/app-shell.tsx` | Sidebar + top bar |
| `components/patterns/` | `PageHeader`, `LoadingRows`, `EmptyState`, `ErrorState` |
| `components/ui/` | Main Brand components (yours to edit) |
| `lib/navigation.ts` | Sidebar links |

Keep business logic (data fetching, validation rules, domain types) in `lib/`
or your routes, not in `components/ui`.

## Updating components

```bash
npx shadcn@latest add @main/button --diff components/ui/button.tsx
npx shadcn@latest add @main/button --overwrite
```

Commit first, then re-apply your own edits from `git diff`.
