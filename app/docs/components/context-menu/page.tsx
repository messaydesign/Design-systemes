import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Context Menu" }

export default function ContextMenuPage() {
  return (
    <>
      <DocHeader
        slug="context-menu"
        title="Context Menu"
        description="A menu of actions for an area or object, opened at the pointer with right-click, long-press or Shift+F10. Same items and styling as Dropdown Menu."
      />
      <ComponentPreview name="context-menu-demo" />

      <H2>Installation</H2>
      <Installation item="context-menu" />

      <H2>Usage</H2>
      <CodeBlock code={`import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger className="rounded-lg border border-dashed p-8">
    Right-click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`} />
      <P>
        The API matches shadcn/ui, including <InlineCode>variant=&quot;destructive&quot;</InlineCode> and{" "}
        <InlineCode>inset</InlineCode>. Parts mirror <Link className="underline" href="/docs/components/dropdown-menu">Dropdown Menu</Link>{" "}
        one for one with the <InlineCode>ContextMenu</InlineCode> prefix.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>ContextMenu</InlineCode> holds state · <InlineCode>ContextMenuTrigger</InlineCode> is the target area
        (a <InlineCode>span</InlineCode> by default; style it or use <InlineCode>asChild</InlineCode>) ·{" "}
        <InlineCode>ContextMenuContent</InlineCode> is the panel · Label, Group, Item, Shortcut, CheckboxItem, RadioGroup /
        RadioItem, Separator and Sub / SubTrigger / SubContent work exactly as in Dropdown Menu.
      </P>

      <H2>Examples</H2>
      <H3>Checkbox and radio items</H3>
      <P>
        View options are a common use: checkbox items for toggles, a radio group for a single choice. The trigger area
        shows the current state so it is visible without opening the menu.
      </P>
      <ComponentPreview name="context-menu-selection" />

      <H3>Destructive item on an object</H3>
      <P>
        Attach the menu to a single object such as a file row. Destructive items go last, after a separator, with{" "}
        <InlineCode>variant=&quot;destructive&quot;</InlineCode>.
      </P>
      <ComponentPreview name="context-menu-destructive" />

      <H2>Open and close</H2>
      <P>
        Opens on right-click (<InlineCode>contextmenu</InlineCode>), on a long-press of about 700ms on touch, and with
        Shift+F10 or the Menu key when the trigger has focus. Set <InlineCode>disabled</InlineCode> on the trigger to fall
        back to the browser menu. <InlineCode>onOpenChange</InlineCode> on the root reports changes; the menu can’t be opened
        from code because it needs a pointer position.
      </P>

      <H2>Focus</H2>
      <P>
        Focus moves into the menu on open and returns to the previously focused element on close. Arrow keys, Home / End and
        typeahead move between items; disabled items are skipped.
      </P>

      <H2>Dismissal</H2>
      <P>
        Escape, clicking outside or selecting an item closes it. Keep it open on select with{" "}
        <InlineCode>onSelect=&#123;(e) =&gt; e.preventDefault()&#125;</InlineCode>.
      </P>

      <H2>Scrolling</H2>
      <P>
        The panel is capped at the space available from the pointer and scrolls when needed. The page behind doesn’t scroll
        while it is open (<InlineCode>modal</InlineCode>, default true).
      </P>

      <H2>Positioning</H2>
      <P>
        The panel (320px wide) opens at the pointer and flips to stay in the viewport. Use{" "}
        <InlineCode>alignOffset</InlineCode> on the content to nudge it; submenus are 240px and open beside their item.
      </P>

      <H2>RTL</H2>
      <P>
        Item padding and shortcuts are logical; with <InlineCode>dir=&quot;rtl&quot;</InlineCode> ArrowLeft opens
        submenus. The submenu chevron points right in both directions.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "role=menu with menuitem, menuitemcheckbox and menuitemradio items.",
          "Keyboard users open it with Shift+F10 or the Menu key; make the trigger focusable (tabIndex=0 or a focusable child) if it isn’t already.",
          "Every command must also be available elsewhere (a toolbar or a “More” button) — context menus are hidden by nature.",
          "Escape closes and returns focus; ArrowRight / ArrowLeft open and close submenus.",
          "Make the target obvious: describe it in text (“Right-click for file actions”) where people may not expect a menu.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Same tokens as Dropdown Menu: <InlineCode>--popover</InlineCode>, <InlineCode>--border</InlineCode>,{" "}
        <InlineCode>--accent</InlineCode> for highlight and <InlineCode>--status-error-text</InlineCode> for destructive
        items. Style the trigger area freely with <InlineCode>className</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "ContextMenu onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
          { name: "ContextMenu modal", type: "boolean", default: "true", description: "Block outside interaction while open (Radix)." },
          { name: "ContextMenuTrigger disabled", type: "boolean", default: "false", description: "Use the native browser menu instead." },
          { name: "ContextMenuContent alignOffset", type: "number", default: "0", description: "Offset from the pointer in px." },
          { name: "ContextMenuItem variant", type: '"default" | "destructive"', default: '"default"', description: "Destructive colours the label." },
          { name: "ContextMenuItem / Label / SubTrigger inset", type: "boolean", description: "40px start padding to align with iconned items." },
          { name: "ContextMenuItem disabled / onSelect", type: "boolean / (event) => void", description: "Disable the item, or run on activation." },
          { name: "ContextMenuCheckboxItem checked / onCheckedChange", type: "boolean / (checked) => void", description: "Checkbox state." },
          { name: "ContextMenuRadioGroup value / onValueChange", type: "string / (value: string) => void", description: "Selected radio item." },
        ]}
      />
      <P className="mt-4">Every other prop passes to the matching Radix Context Menu primitive.</P>
    </>
  )
}
