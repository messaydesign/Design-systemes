/**
 * Generates registry.json from app/globals.css (single source of truth for
 * tokens) plus the component list below, then `shadcn build` turns it into
 * installable JSON under public/r.
 *
 *   bun run registry:build
 */
import { readFileSync, writeFileSync } from "node:fs"

const css = readFileSync("app/globals.css", "utf8")

function block(selector: string): Record<string, string> {
  const re = new RegExp(`(^|\\n)${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\{([\\s\\S]*?)\\n\\}`)
  const body = css.match(re)?.[2]
  if (!body) throw new Error(`Block ${selector} not found in globals.css`)
  const vars: Record<string, string> = {}
  for (const m of body.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    vars[m[1]] = m[2].trim()
  }
  return vars
}

const customVariants = [...css.matchAll(/@custom-variant selected[^;]+;/g)].map((m) => m[0])

const BASE_URL = process.env.REGISTRY_URL ?? "http://localhost:3000"

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "main-brand",
  homepage: BASE_URL,
  items: [
    {
      name: "theme",
      type: "registry:theme",
      title: "Main Brand theme",
      description:
        "Semantic + Button tokens from the Main Brand Figma file (light/dark), fonts, radii and the `selected` variant.",
      cssVars: {
        theme: block("@theme inline"),
        light: block(":root"),
        dark: block(".dark"),
      },
      css: {
        ...Object.fromEntries(customVariants.map((v) => [v.replace(/;$/, ""), {}])),
        "@keyframes progress-indeterminate": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
      },
    },
    {
      name: "icons",
      type: "registry:ui",
      title: "Icons",
      description: "Plus, ArrowRight (mirrors in RTL) and Spinner from Figma Icons/*.",
      files: [{ path: "registry/main/ui/icons.tsx", type: "registry:ui" }],
    },
    {
      name: "button",
      type: "registry:ui",
      title: "Button",
      description:
        "Figma Button / Adaptive: 6 variants, 5 states, 5 sizes, 3 corner styles, loading and selected.",
      dependencies: ["class-variance-authority", "radix-ui"],
      registryDependencies: ["utils", `${BASE_URL}/r/theme.json`, `${BASE_URL}/r/icons.json`],
      files: [{ path: "registry/main/ui/button.tsx", type: "registry:ui" }],
    },
    ...formItems(),
    ...overlayItems(),
    ...displayItems(),
    ...navigationItems(),
    ...actionItems(),
  ],
}

function formItems() {
  const theme = `${BASE_URL}/r/theme.json`
  const icons = `${BASE_URL}/r/icons.json`
  const label = `${BASE_URL}/r/label.json`
  const button = `${BASE_URL}/r/button.json`
  const item = (
    name: string,
    title: string,
    description: string,
    deps: string[],
    registryDeps: string[]
  ) => ({
    name,
    type: "registry:ui",
    title,
    description,
    dependencies: deps,
    registryDependencies: ["utils", theme, ...registryDeps],
    files: [{ path: `registry/main/ui/${name}.tsx`, type: "registry:ui" }],
  })
  return [
    item("label", "Label", "Forms label: DM Sans Medium 14/24.", ["radix-ui"], []),
    item("input", "Input", "Compact 32px text control with hover, focus, read-only, disabled and validation states.", ["class-variance-authority"], []),
    item("textarea", "Textarea", "Multiline text control, 120px default height.", ["class-variance-authority"], []),
    item("field", "Field", "Field layout with label, requirement text, description and status messages.", ["class-variance-authority", "radix-ui"], [label, icons]),
    item("checkbox", "Checkbox", "Checkbox with checked, indeterminate and disabled states in a 48×32 touch target.", ["radix-ui"], [icons]),
    item("radio-group", "Radio Group", "Radio group with 24px radios in 48×32 touch targets.", ["radix-ui"], []),
    item("switch", "Switch", "48×32 switch with brand on-state.", ["radix-ui"], []),
    item("select", "Select", "Listbox select with Figma option states.", ["radix-ui"], [icons]),
    item("native-select", "Native Select", "Styled native <select>.", [], [icons]),
    item("input-group", "Input Group", "Bordered input with text, icon and button add-ons (search, password, URL).", [], [button]),
    item("slider", "Slider", "Single or range slider: 8px track, 24px thumb, 48px targets.", ["radix-ui"], []),
    item("input-otp", "Input OTP", "One-time-code input with 40×32 digit cells.", ["input-otp"], [icons]),
    item("chip", "Chip", "32px removable chip with an accessible remove button.", [], [icons]),
    item("validation-summary", "Validation Summary", "Form-level info/success/warning/error summary.", ["class-variance-authority"], [icons]),
  ]
}

function overlayItems() {
  const theme = `${BASE_URL}/r/theme.json`
  const icons = `${BASE_URL}/r/icons.json`
  const button = `${BASE_URL}/r/button.json`
  const item = (name: string, title: string, description: string, registryDeps: string[]) => ({
    name,
    type: "registry:ui",
    title,
    description,
    dependencies: ["radix-ui"],
    registryDependencies: ["utils", theme, ...registryDeps],
    files: [{ path: `registry/main/ui/${name}.tsx`, type: "registry:ui" }],
  })
  return [
    item("dialog", "Dialog", "Modal Overlay / Panel: title, close, description, content, footer.", [icons, button]),
    item("alert-dialog", "Alert Dialog", "Modal confirmation with Cancel (outline) and Action (destructive).", [button]),
    item("sheet", "Sheet", "Edge panel (logical start/end, plus top/bottom).", [icons, button]),
    item("popover", "Popover", "Anchored non-modal surface with Default/Soft/Pill corners.", []),
    item("tooltip", "Tooltip", "Inverse text-only tooltip with arrow.", []),
    item("hover-card", "Hover Card", "Supplementary preview card on hover/focus.", []),
    item("dropdown-menu", "Dropdown Menu", "Action menu with action, destructive, checkbox, radio and submenu items.", [icons]),
    item("context-menu", "Context Menu", "Right-click action menu sharing the Menu / Item spec.", [icons]),
  ]
}

function displayItems() {
  const theme = `${BASE_URL}/r/theme.json`
  const icons = `${BASE_URL}/r/icons.json`
  const item = (name: string, title: string, description: string, deps: string[], registryDeps: string[] = []) => ({
    name,
    type: "registry:ui",
    title,
    description,
    dependencies: deps,
    registryDependencies: ["utils", theme, ...registryDeps],
    files: [{ path: `registry/main/ui/${name}.tsx`, type: "registry:ui" }],
  })
  return [
    item("card", "Card", "Header/title/description, content and footer; Default/Soft/Pill corners.", []),
    item("avatar", "Avatar", "32/48/64px avatar with image, initials fallback and error badge.", ["radix-ui"], [icons]),
    item("separator", "Separator", "1px subtle rule.", ["radix-ui"]),
    item("accordion", "Accordion", "Bordered disclosure items with 48px triggers.", ["radix-ui"], [icons]),
    item("collapsible", "Collapsible", "Single disclosure region.", ["radix-ui"]),
    item("item", "Item", "Media + title/description + action row; Default/Outline/Muted.", ["class-variance-authority", "radix-ui"]),
    item("kbd", "Kbd", "Keyboard key and shortcut group.", []),
    item("aspect-ratio", "Aspect Ratio", "Fixed-ratio media frame.", ["radix-ui"]),
    item("alert", "Alert", "Info/Success/Warning/Error, Default or Outline.", ["class-variance-authority"], [icons]),
    item("badge", "Badge", "24px status/category pill in 4 variants.", ["class-variance-authority", "radix-ui"]),
    item("progress", "Progress", "8px determinate or indeterminate progress bar.", ["radix-ui"]),
    item("skeleton", "Skeleton", "Neutral loading placeholder.", []),
    item("spinner", "Spinner", "16/24/32px loading indicator.", [], [icons]),
    item("empty", "Empty", "Empty / no-results / error state with recovery action.", []),
  ]
}

function navigationItems() {
  const theme = `${BASE_URL}/r/theme.json`
  const icons = `${BASE_URL}/r/icons.json`
  const button = `${BASE_URL}/r/button.json`
  const navItem = `${BASE_URL}/r/nav-item.json`
  const sheet = `${BASE_URL}/r/sheet.json`
  const item = (name: string, title: string, description: string, registryDeps: string[]) => ({
    name,
    type: "registry:ui",
    title,
    description,
    dependencies: ["radix-ui"],
    registryDependencies: ["utils", theme, ...registryDeps],
    files: [{ path: `registry/main/ui/${name}.tsx`, type: "registry:ui" }],
  })
  return [
    item("nav-item", "Navigation Item", "48px navigation link with current, disabled and focus states.", []),
    item("tabs", "Tabs", "Line or Pill tabs, horizontal or vertical.", []),
    item("breadcrumb", "Breadcrumb", "Breadcrumb trail with mirrored separators and a collapsed ellipsis control.", [icons, button]),
    item("pagination", "Pagination", "Pages in 48px targets with a selected current page and Previous/Next.", [icons, button]),
    item("menubar", "Menubar", "Application File/Edit/View menubar sharing the Menu spec.", [icons, button]),
    item("navigation-menu", "Navigation Menu", "Site navigation with disclosure panels of Navigation Items.", [icons, button, navItem]),
    item("sidebar", "Sidebar", "Expanded/collapsed sidebar of Navigation Items; Sheet on mobile.", [icons, button, navItem, sheet]),
  ]
}

function actionItems() {
  const theme = `${BASE_URL}/r/theme.json`
  const icons = `${BASE_URL}/r/icons.json`
  const button = `${BASE_URL}/r/button.json`
  const toggle = `${BASE_URL}/r/toggle.json`
  const item = (name: string, title: string, description: string, deps: string[], registryDeps: string[]) => ({
    name,
    type: "registry:ui",
    title,
    description,
    dependencies: deps,
    registryDependencies: ["utils", theme, ...registryDeps],
    files: [{ path: `registry/main/ui/${name}.tsx`, type: "registry:ui" }],
  })
  return [
    item("button-group", "Button Group", "Connected Buttons with single seams and outer corners only.", ["class-variance-authority"], [button]),
    item("split-button", "Split Button", "Primary action plus dropdown trigger; default, disabled and loading.", [], [icons, button]),
    item("toggle", "Toggle", "48px pressed/unpressed button, Default or Outline.", ["class-variance-authority", "radix-ui"], [button]),
    item("toggle-group", "Toggle Group", "Single or multiple Toggle selection, horizontal or vertical.", ["class-variance-authority", "radix-ui"], [toggle]),
  ]
}

// The shadcn CLI (4.23) drops a theme's custom variants when the theme is
// installed as a dependency, so every item whose source uses `selected:`
// carries the variant itself (the CLI de-duplicates it).
const variantCss = Object.fromEntries(customVariants.map((v) => [v.replace(/;$/, ""), {}]))
for (const item of registry.items as { files?: { path: string }[]; css?: object }[]) {
  const usesSelected = item.files?.some((f) => readFileSync(f.path, "utf8").includes("selected:"))
  if (usesSelected) item.css = { ...variantCss, ...item.css }
}

writeFileSync("registry.json", JSON.stringify(registry, null, 2) + "\n")
console.log(`registry.json written (${registry.items.length} items, base ${BASE_URL})`)
