# Changelog

All notable changes to the Main Brand UI registry. Versions follow semantic
versioning (see CONTRIBUTING.md). Each entry lists the affected registry items
so teams can review them with `npx shadcn@latest add @main/<name> --diff`.

## Unreleased

### Breaking — aligned with shadcn/ui
- Theme: shadcn tokens hold the values (`--primary`, `--muted-foreground`,
  `--border`, `--input`, `--ring`, `--chart-*`, `--sidebar-*`); brand
  extensions are `--primary-hover/-active/-strong/-subtle`; Figma names are
  aliases. `--muted-foreground` is now #525252 and `--input` #929292. — **theme**, **style**
- Alert `status` → `variant` (`error` → `destructive`; new neutral `default`). — **alert**
- TabsList `variant`: `"default"` (Figma Pill, now the default) | `"line"`. — **tabs**
- PaginationLink `size` uses Button sizes (`"page"` → `"xs"`). — **pagination**
- Sidebar follows shadcn's API (SidebarProvider/Sidebar with side, variant,
  collapsible; rail, sub-menus, actions, badges). — **sidebar**

### Added
- `style` item: `npx shadcn init <registry>/r/style.json`.
- shadcn parts and props across Field, InputGroup, Item, Empty, Popover,
  Avatar, AlertDialog, ButtonGroup, Select, Switch, Toggle, ToggleGroup,
  NativeSelect, NavigationMenu, menus (`inset`), Badge (`ghost`, `link`).
- Docs pages for all 48 components; shadcn-style docs navigation. The
  playground pages are replaced by examples on each page.

### Fixed
- Progress respects `max` and mirrors its indeterminate animation in RTL. — **progress**
- Slider passes `aria-label` / `aria-labelledby` to the thumb. — **slider**
- Native Select supports standalone warning/success borders. — **native-select**
- Menus: `inset={false}` no longer indents. — **dropdown-menu**, **context-menu**, **menubar**
- Registry dependencies (components and npm packages) are derived from imports.

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
