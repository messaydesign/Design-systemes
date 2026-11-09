# Main Brand UI — implementation plan

Goal: teams copy Main Brand components into their apps, re-theme them and
compose them into products. Three connected deliverables: the **Figma
library**, the **code registry** (source-copy via the shadcn CLI) and the
**docs website**. First milestone: a developer builds a small app using only
the starter and the docs.

Legend: ✅ exists · 🟡 partial · ⬜ to build

## 1. Shared tokens

| Item | Status | Notes |
| --- | --- | --- |
| Colour tokens, light + dark | ✅ | `app/globals.css`; Figma names (`--text-primary`, `--surface`, `--button-*`, `--status-*`) plus shadcn semantic aliases (`--background`, `--primary`, `--destructive`…) so any shadcn component re-themes. Dark values marked `derived` need design sign-off. |
| Radius | ✅ | `--radius` (Default 8), `--radius-soft` (16), pill. |
| Font families | ✅ | `--font-sans` DM Sans, `--font-heading` Manrope, `--font-button` Inter, `--font-mono` Roboto Mono. |
| Shadows / effects | 🟡 | `--effect-outer`, `--effect-pressed-inner`; no named elevation scale. |
| Spacing | 🟡 | 8px grid via Tailwind's 4px scale; Figma `foundation-spacing-1…n` not mirrored as tokens. ⬜ Add `--space-*` aliases. |
| Typography scale | ⬜ | Figma text styles (Label 14/24, Value 16/24, Helper 14/24, Title…) used inline; ⬜ add `text-label`, `text-value`, `text-helper`, heading utilities. |
| Token reference page | ✅ | `/docs/theming`, generated from `globals.css`. |
| Theme customisation guide | ✅ | Six `--brand-*` tokens drive every brand-coloured component token. |

## 2. Components

59 of ~85 Figma component guides have code (see `/docs` coverage matrix).

| Item | Status |
| --- | --- |
| Actions, Forms core, Navigation, Overlays, Content, Feedback | ✅ 52 registry items, measured against Figma, light/dark, RTL |
| Calendar, Date Picker, Combobox, Multiselect, Command, Drawer, Toast, Scroll Area, Resizable, Carousel | ⬜ need extra libraries (react-day-picker, cmdk, vaul, sonner, embla…) |
| Number/Phone/Payment/Date fields, File upload | ⬜ |
| Data: Table, Data Table, Status Badge, Chart | ⬜ (Figma's chart brief has an open engine decision) |
| Conversation: Message, Bubble, Scroller, Attachment, Code Block, Marker, Questionnaire, Trace | ⬜ |
| API conventions doc (variant/size/corner names, `asChild`, data-slot, validation) | ⬜ |

## 3. Distribution (source copy)

| Item | Status |
| --- | --- |
| shadcn-compatible registry (`/r/*.json`), theme item with tokens | ✅ |
| Namespaced registry config (`@main/button`) | ✅ in the starter `components.json` |
| Installation docs (CLI + manual, accurate deps) | ✅ generated from `registry.json` |
| Adopting upstream fixes (`shadcn add --diff`, release notes, CODEOWNERS) | ✅ docs + CONTRIBUTING; owners still to be named |
| Hosted registry URL | ⬜ needs a deploy target (currently `localhost:3000`) |

## 4. Documentation website

| Item | Status |
| --- | --- |
| Preview pages per phase (`/`, `/forms`, …) | ✅ (to be replaced by docs) |
| Docs shell: sidebar, page template, TOC, theme + RTL toggles | ✅ |
| Preview + source from the same file, copy button, install tabs, props tables, a11y, Figma link | ✅ |
| Coverage matrix | ✅ `/docs/coverage` |
| Pages: Introduction, Installation, Theming/Tokens, Button, Input, Select, Dialog, Card | ✅ first batch |
| Remaining component pages | ⬜ same template, after the milestone |

## 5. Application patterns

✅ App shell, validated form, settings, searchable list, loading/empty/error
(`templates/starter/components/patterns`, `examples/team-app`).
⬜ Login, searchable data table (waits for the Table component), patterns as
registry blocks and docs pages.

## 6. Starter application

✅ `templates/starter`: Next.js + Tailwind v4, theme tokens, fonts, app shell
(sidebar + header), `components.json` with the `@main` registry, core
components installed through the CLI. ✅ `examples/team-app` built from the
starter. ⬜ Publish the starter (git template or `degit`) once the registry
has a hosted URL.

## 7. Maintenance

✅ `CONTRIBUTING.md` (ownership, proposals, review checklist, semver,
breaking-change policy), `CHANGELOG.md`, issue templates, `/docs/contributing`.
⬜ Name the owners in `.github/CODEOWNERS`.

## Order of work

1. Plan (this file).
2. Docs shell + building blocks; pages for Installation, Theming, Button,
   Input, Select, Dialog, Card; coverage matrix.
3. Starter template.
4. Example app from the starter: navigation, validated form,
   loading/empty/error states — then fix the docs gaps it reveals.
5. Verify from a clean copy: install, change the brand colour, build a page.
6. Contribution, versioning and release-notes docs.

Business logic (validation rules, data fetching, domain models) stays in the
apps, never in `registry/`. The library is a base for teams to extend with
domain components; it does not claim to cover every application.
