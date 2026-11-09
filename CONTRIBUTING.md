# Contributing to Main Brand UI

Main Brand UI has three parts that change together: the **Figma library**,
the **registry** (`registry/main/ui`, served as `/r/*.json`) and the
**docs** (`app/docs`). A change is done when all three agree.

## Ownership

| Area | Owns | Reviews |
| --- | --- | --- |
| Figma library and tokens | Design system designer (to be assigned) | Design lead |
| Registry components | Design system engineer (to be assigned) | One more engineer |
| Docs site, starter, patterns | Design system engineer (to be assigned) | Any engineer |

Record the people in `.github/CODEOWNERS` once assigned.

## Reporting a bug

Open an issue with the **Bug** template: component, what you expected, what
happened, browser/OS, light or dark, LTR or RTL, and a minimal snippet. If you
already fixed it in your copied component, paste the diff — it is the fastest
way to get it upstream.

## Proposing a component

1. Check `/docs/coverage` — it may already be designed or planned.
2. Open an issue with the **Component proposal** template: the problem, two or
   more products that need it, and any shadcn/ui or Radix equivalent.
3. Design adds it to Figma with a Component guide (usage, anatomy, states,
   light/dark, handoff notes).
4. Engineering builds it in `registry/main/ui`, adds it to
   `scripts/build-registry.ts` and `lib/docs/inventory.ts`, and writes its
   docs page.

Domain-specific components (a "PatientCard", an "InvoiceTable") belong in your
product, built from these components — not in the registry.

## Pull request checklist

- [ ] Matches Figma: sizes measured in the browser, light and dark, LTR and RTL.
- [ ] Uses tokens only — no new hex values in components.
- [ ] Accessible: keyboard, visible focus, 48px targets, labels and names, no colour-only meaning.
- [ ] Composable: `className` and native props pass through; no app logic inside.
- [ ] `bun run lint`, `bunx tsc --noEmit` and `bun run registry:build` pass.
- [ ] Installs into the starter: `npx shadcn@latest add @main/<name>` and `bun run build`.
- [ ] Docs page: preview, installation, usage, examples, accessibility, API, Figma link.
- [ ] `CHANGELOG.md` entry under **Unreleased**, marked **Breaking** if it is.

## Versions and releases

The registry is versioned as a whole with semantic versioning (the `version`
in `package.json`), and every release has a `CHANGELOG.md` entry.

- **Patch** — fixes that keep the API and appearance (a focus ring, an ARIA attribute).
- **Minor** — new components, variants, props or tokens.
- **Major** — renamed or removed props, variants, tokens or files, or visual
  changes teams must review.

Because teams copy the source, a release never changes their apps by itself.
Each entry says which components changed so teams can run
`npx shadcn@latest add @main/<name> --diff` and decide. Breaking entries
include a short migration note.

## Local development

```bash
bun install
bun run dev              # docs + playground on :3000
bun run registry:build   # regenerate registry.json and public/r
```

The starter (`templates/starter`) and the example app (`examples/team-app`) are
separate Next.js apps; run `bun install` inside each.
