import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Menubar" }

export default function MenubarPage() {
  return (
    <>
      <DocHeader
        slug="menubar"
        title="Menubar"
        description="A persistent row of menus for application commands, like the File / Edit / View bar of a desktop app. Each trigger opens a menu with the same items as Dropdown Menu."
      />
      <ComponentPreview name="menubar-demo" />

      <H2>Installation</H2>
      <Installation item="menubar" />

      <H2>Usage</H2>
      <CodeBlock code={`import {
  Menubar, MenubarContent, MenubarItem, MenubarMenu,
  MenubarSeparator, MenubarShortcut, MenubarTrigger,
} from "@/components/ui/menubar"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print…</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`} />
      <P>
        The API matches shadcn/ui, including <InlineCode>variant=&quot;destructive&quot;</InlineCode> and{" "}
        <InlineCode>inset</InlineCode> on items. Main Brand triggers are 48px Ghost buttons, and menus open 8px below
        aligned to the trigger’s start.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>Menubar</InlineCode> is the bar · one <InlineCode>MenubarMenu</InlineCode> per menu with a{" "}
        <InlineCode>MenubarTrigger</InlineCode> and <InlineCode>MenubarContent</InlineCode> · inside, Label, Group, Item,
        Shortcut, CheckboxItem, RadioGroup / RadioItem, Separator and Sub / SubTrigger / SubContent, as in{" "}
        <Link className="underline" href="/docs/components/dropdown-menu">Dropdown Menu</Link>. Use Menubar for app
        commands; for site navigation use{" "}
        <Link className="underline" href="/docs/components/navigation-menu">Navigation Menu</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Checkbox items</H3>
      <P>
        Toggles such as “Show bookmarks bar” use <InlineCode>MenubarCheckboxItem</InlineCode>.{" "}
        <InlineCode>inset</InlineCode> on the plain items lines their text up with the checkbox labels.
      </P>
      <ComponentPreview name="menubar-checkboxes" />

      <H3>Radio group</H3>
      <P>
        A <InlineCode>MenubarRadioGroup</InlineCode> picks one option. Here the destructive item reflects the current
        choice.
      </P>
      <ComponentPreview name="menubar-radio" />

      <H3>Submenus</H3>
      <P>
        <InlineCode>MenubarSub</InlineCode> nests a 240px menu beside its item. With a menu open, ArrowLeft / ArrowRight move
        to the neighbouring menu unless the highlighted item has a submenu.
      </P>
      <ComponentPreview name="menubar-submenu" />

      <H2>Active state</H2>
      <P>
        The trigger of the open menu uses the Ghost Selected face (Figma Open state); others stay Ghost. Once one menu is
        open, hovering another trigger switches to it.
      </P>

      <H2>Nesting</H2>
      <P>
        Menus nest through <InlineCode>MenubarSub</InlineCode>. Keep it to one level below the top menu; deeper trees are
        hard to steer with a pointer.
      </P>

      <H2>Orientation</H2>
      <P>
        The bar is horizontal only. For a vertical list of commands, use a Dropdown Menu or a Sidebar.
      </P>

      <H2>Overflow</H2>
      <P>
        The bar sizes to its triggers (<InlineCode>w-fit</InlineCode>) and doesn’t wrap or scroll. Keep to a handful of
        short top-level menus; move rarely used ones into a “More” menu.
      </P>

      <H2>Responsive</H2>
      <P>
        Menubars suit desktop apps. On narrow screens, collapse the bar into a single Dropdown Menu or a{" "}
        <Link className="underline" href="/docs/components/sheet">Sheet</Link>.
      </P>

      <H2>RTL</H2>
      <P>
        Radix reads <InlineCode>dir</InlineCode>: ArrowLeft and ArrowRight swap between menus and for submenus, and menus
        align to the trigger’s inline start. The submenu chevron points right in both directions.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "role=menubar on the bar; triggers are menuitems with aria-haspopup and aria-expanded; menus have role=menu.",
          "One trigger is in the tab order (roving tabindex); ArrowLeft / ArrowRight move between triggers, wrapping by default (loop).",
          "Enter, Space or ArrowDown opens a menu; arrow keys, Home / End and typeahead move within it.",
          "Escape closes the menu and returns focus to its trigger.",
          "Shortcuts are visual hints only — register the actual key bindings in your app.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The bar uses <InlineCode>--background</InlineCode> with a 1px <InlineCode>--border</InlineCode> stroke painted
        inside, so 48px triggers keep it 48px tall. Open triggers use{" "}
        <InlineCode>--button-ghost-selected-background</InlineCode>. Menus share the Dropdown Menu tokens.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Menubar value / defaultValue / onValueChange", type: "string", description: "The open menu (by MenubarMenu value)." },
          { name: "Menubar loop", type: "boolean", default: "true", description: "Wrap keyboard focus between first and last trigger." },
          { name: "MenubarMenu value", type: "string", description: "Identifies the menu for controlled use." },
          { name: "MenubarContent align", type: '"start" | "center" | "end"', default: '"start"', description: "Alignment to the trigger." },
          { name: "MenubarContent sideOffset", type: "number", default: "8", description: "Gap below the trigger in px." },
          { name: "MenubarItem variant", type: '"default" | "destructive"', default: '"default"', description: "Destructive colours the label." },
          { name: "MenubarItem / Label / SubTrigger inset", type: "boolean", description: "40px start padding to align with iconned items." },
          { name: "MenubarCheckboxItem checked / onCheckedChange", type: "boolean / (checked) => void", description: "Checkbox state." },
          { name: "MenubarRadioGroup value / onValueChange", type: "string / (value: string) => void", description: "Selected radio item." },
        ]}
      />
      <P className="mt-4">Every other prop passes to the matching Radix Menubar primitive.</P>
    </>
  )
}
