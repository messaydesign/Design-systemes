# Changelog

All notable changes to the Main Brand UI registry. Versions follow semantic
versioning (see CONTRIBUTING.md). Each entry lists the affected registry items
so teams can review them with `npx shadcn@latest add @main/<name> --diff`.

## Unreleased

### Added
- Docs site at `/docs`: Introduction, Installation, Theming and tokens,
  Coverage matrix, Contributing, and full pages for Button, Input, Select,
  Dialog and Card (live previews rendered from the same files as their code).
- Starter app (`templates/starter`) and example app (`examples/team-app`).
- Brand tokens `--brand-strong` and `--brand-subtle`; component tokens now
  reference the brand tokens, so rebranding means editing six variables. — **theme**
- Phase 7: `input-group`, `slider`, `input-otp`, `chip`, `validation-summary`;
  `FieldSet`, `FieldLegend`, `FieldCounter` and `FieldGroup orientation`. — **field**
- Phase 6: `button-group`, `split-button`, `toggle`, `toggle-group`.
- Phase 5: `nav-item`, `tabs`, `breadcrumb`, `pagination`, `menubar`,
  `navigation-menu`, `sidebar`.

### Changed
- Responsive component text: 16px/24px below 768px, 14px/20px from 768px
  (labels and helper text 14px/24px → 14px/20px). Buttons keep their size
  scale. — 30 items (all components except **button** and **pagination**)
- All brand colours are in one `--brand-*` block: added `--brand-strong-hover`
  and `--brand-strong-pressed`; `--button-primary-active-text` and link
  hover/pressed tokens now reference brand tokens. Re-adding the theme only adds
  missing tokens, so in an existing app also change
  `--button-primary-active-text`, `--button-link-hover-text` and
  `--button-link-pressed-text` (light and dark) to the `var(--brand-…)` values
  in the docs. — **theme**
- `Item` inside `ItemGroup` now has `role="listitem"`; `item` is a client
  component. — **item**

### Fixed
- The `selected` variant was missing from apps when the theme was installed
  as a dependency; `button` and `toggle` now carry it. Re-add **button** to get
  selected/current-page styles. — **button**, **toggle**
- `CardAction` now sits beside the title instead of below it. — **card**
- Sidebar: the in-sidebar trigger no longer shows inside the mobile Sheet. — **sidebar**

## 0.1.0

### Added
- Theme, icons and 33 components from Figma pages Actions, Forms, Overlays,
  Content and Feedback (phases 1–4).
