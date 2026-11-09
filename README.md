# Main Brand UI

A shadcn-compatible component registry built from the **Main Brand** Figma
design system (`qpIsumHqsH59PzDoG0CDlC`). Components are copied into
consuming apps with the shadcn CLI, so teams own the code.

## Develop

```bash
bun install
bun run dev              # preview at http://localhost:3000
bun run registry:build   # regenerate registry.json + public/r/*.json
```

## Install into another app

```bash
npx shadcn@latest add http://localhost:3000/r/button.json
```

This installs `theme` (tokens, fonts, `selected` variant), `icons` and `button`.
Set `REGISTRY_URL` when building for a deployed domain:

```bash
REGISTRY_URL=https://ui.example.com bun run registry:build
```

Consuming apps should load Inter, DM Sans, Manrope and Roboto Mono
(e.g. with `next/font`, exposing `--font-inter`, `--font-dm-sans`,
`--font-manrope`, `--font-roboto-mono`); otherwise system fonts are used.

## Layout

| Path | What |
| --- | --- |
| `app/globals.css` | Single source of truth for tokens (light + dark) |
| `scripts/build-registry.ts` | Generates `registry.json` from `globals.css` |
| `registry/main/ui/*` | Registry components |
| `registry/main/examples/*` | Preview/demo code (not distributed) |
| `public/r/*` | Built registry JSON served to the CLI |

## Button ↔ Figma mapping

| Figma | Code |
| --- | --- |
| Variant Primary / Secondary / Outline / Ghost / Destructive / Link | `variant="default" \| "secondary" \| "outline" \| "ghost" \| "destructive" \| "link"` |
| Size XS 32 / Small 40 / Large 48 / XL 56 / XXL 64 | `size="xs" \| "sm" \| "default" \| "lg" \| "xl"` |
| Content: Icon only | `size="icon-xs" \| "icon-sm" \| "icon" \| "icon-lg" \| "icon-xl"` |
| Corner style Default / Soft / Pill | `corner="default" \| "soft" \| "pill"` |
| State Hover / Pressed | `:hover` / `:active` |
| State Selected | `selected` prop (aria-pressed), `aria-current="page"`, or `data-state="on"` |
| State Disabled | `disabled` or `aria-disabled` |
| Loading On + loading text | `loading` + `loadingText` |
| Focus visible | 1px outline, 2px offset, `--button-focus-color` |

## Forms ↔ Figma mapping (phase 2)

| Figma | Code |
| --- | --- |
| .Building blocks/Text control | `<Input>` (states via `:hover`, `:focus`, `readOnly`, `disabled`) |
| .Building blocks/Textarea control | `<Textarea>` |
| Shape 8px / Rounded | `shape="default" \| "rounded"` on Input, Textarea, SelectTrigger, NativeSelect |
| Forms/Text field Validation None/Error/Warning/Success | `<Field validation="none" \| "error" \| "warning" \| "success">` |
| Forms/Field label State Required/Optional | `<FieldLabel requirement="Required">` |
| Forms/Field message Helper/Info/Success/Warning/Error | `<FieldMessage status=…>` (defaults to the Field's validation) |
| Field "Control area" (48px touch height) | `<FieldControl>` |
| .Building blocks/Checkbox, Radio, Switch | `<Checkbox>`, `<RadioGroup>/<RadioGroupItem>`, `<Switch>` |
| Select, Option List, Forms/Option | `<Select>`, `<SelectContent>`, `<SelectLabel>`, `<SelectItem showCheck>` |
| Native Select | `<NativeSelect>` / `<NativeSelectOption>` |

Notes on Figma inconsistencies, resolved in code:
- Checkbox check/minus glyphs are offset to the top-left in the Figma masters; code centres them.
- Warning messages use the info icon in "Forms/Text field" but the warning
  triangle in "Forms/Field message"; code uses the triangle.
- Helper text is Regular in "Forms/Text field" but Medium in "Forms/Field
  message"; code uses Regular.

## Overlays ↔ Figma mapping (phase 3)

| Figma | Code |
| --- | --- |
| Overlay / Panel Kind=Dialog, Corner Default/Soft | `<DialogContent corner="default" \| "soft">` (+ Header, Title, Description, Footer) |
| Overlay / Panel Kind=Alert Dialog | `<AlertDialog…>`; Action = destructive button, Cancel = outline |
| Sheet Side=Trailing/Leading | `<SheetContent side="end" \| "start">` (logical, mirrors in RTL) |
| Popover Corner Default/Soft/Pill | `<PopoverContent corner=…>` |
| Tooltip Placement Top/Bottom/Start/End | `<TooltipContent side=…>` |
| Hover Card / Content | `<HoverCardContent>` |
| Menu / Content, Menu / Item Kind=Action/Destructive/Checkbox/Radio/Submenu | `DropdownMenu*` and `ContextMenu*` (`variant="destructive"`, `CheckboxItem`, `RadioItem`, `SubTrigger`) |

Not yet built from this page: Command (needs `cmdk`) and Drawer (needs `vaul`).
Menu checkbox/radio items always reserve the 16px mark slot so labels align
(Figma only shows the slot when checked).

## Content and feedback ↔ Figma mapping (phase 4)

| Figma | Code |
| --- | --- |
| Card Corner Default/Soft/Pill | `<Card corner=…>` + Header/Title/Description/Content/Footer |
| Item Default/Outline/Muted | `<Item variant=…>` + Media/Content/Title/Description/Actions |
| Avatar 32/48/64 × Initials/Icon/Image/Loading/Error | `<Avatar size="sm" \| "default" \| "lg">`, `AvatarImage`, `AvatarFallback`, `AvatarBadge` |
| Accordion / Item, Accordion Single/Multiple | `<Accordion type="single" \| "multiple">` |
| Collapsible | `<Collapsible>` + outline `Button` trigger |
| Separator, Kbd, Aspect Ratio | `<Separator>`, `<Kbd>`/`<KbdGroup>`, `<AspectRatio>` |
| Alert Status × Appearance | `<Alert status=… appearance="default" \| "outline">` |
| Badge Default/Secondary/Outline/Destructive | `<Badge variant=…>` |
| Forms/Progress 0–100 / Indeterminate | `<Progress value={n}>` / `value={null}` |
| Skeleton Text/Avatar/Card, Spinner 16/24/32 | `<Skeleton>`, `<Spinner size="sm" \| "default" \| "lg">` |
| Empty Default/Filtered/Error | `<Empty>` + Media/Title/Description/Content |

Not yet built from these pages: Toast (needs `sonner`), Scroll Area, Resizable
and Carousel (need extra libraries).

**Stroke compensation:** Figma draws strokes inside frames; CSS borders add to
the box. Every bordered component subtracts 1px from its padding so outer sizes
match Figma exactly (e.g. Item 88px, Empty 240px, Button 183px).

Components avoid Radix `asChild` on primitives (except `Button asChild`) so they
install cleanly into both Radix and Base UI shadcn projects.

Dark-mode values marked `derived` in `globals.css` were not exposed by the
Figma file and should be confirmed by design.
