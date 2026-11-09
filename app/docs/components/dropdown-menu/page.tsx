import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Dropdown Menu" }

export default function DropdownMenuPage() {
  return (
    <>
      <DocHeader
        slug="dropdown-menu"
        title="Dropdown Menu"
        description="A menu of actions or options opened from a button. Items can be actions, destructive actions, checkboxes, radio options or submenus."
      />
      <ComponentPreview name="dropdown-menu-demo" />

      <H2>Installation</H2>
      <Installation item="dropdown-menu" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My account</DropdownMenuLabel>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`} />
      <P>
        The API matches shadcn/ui, including <InlineCode>variant=&quot;destructive&quot;</InlineCode> on items and{" "}
        <InlineCode>inset</InlineCode> on Item, Label and SubTrigger. Main Brand sizes items at 48px with 16px icons, 8px
        between items and an 8px gap from the trigger.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>DropdownMenu</InlineCode> holds state · <InlineCode>DropdownMenuTrigger</InlineCode> ·{" "}
        <InlineCode>DropdownMenuContent</InlineCode> is the panel · inside it <InlineCode>DropdownMenuLabel</InlineCode>,{" "}
        <InlineCode>DropdownMenuGroup</InlineCode>, <InlineCode>DropdownMenuItem</InlineCode> (with an optional leading
        icon and <InlineCode>DropdownMenuShortcut</InlineCode>), <InlineCode>DropdownMenuCheckboxItem</InlineCode>,{" "}
        <InlineCode>DropdownMenuRadioGroup</InlineCode> with <InlineCode>DropdownMenuRadioItem</InlineCode>,{" "}
        <InlineCode>DropdownMenuSeparator</InlineCode>, and <InlineCode>DropdownMenuSub</InlineCode> with{" "}
        <InlineCode>DropdownMenuSubTrigger</InlineCode> and <InlineCode>DropdownMenuSubContent</InlineCode>. Use it for
        commands; to pick a form value use <Link className="underline" href="/docs/components/select">Select</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Destructive and disabled items</H3>
      <P>
        <InlineCode>variant=&quot;destructive&quot;</InlineCode> colours the label with the error text colour. Put
        destructive items last, after a separator. <InlineCode>disabled</InlineCode> items are skipped by the keyboard and
        use the disabled text colour.
      </P>
      <ComponentPreview name="dropdown-menu-destructive" />

      <H3>Checkboxes</H3>
      <P>
        <InlineCode>DropdownMenuCheckboxItem</InlineCode> takes <InlineCode>checked</InlineCode> and{" "}
        <InlineCode>onCheckedChange</InlineCode>. Calling <InlineCode>event.preventDefault()</InlineCode> in{" "}
        <InlineCode>onSelect</InlineCode> keeps the menu open while toggling several options.
      </P>
      <ComponentPreview name="dropdown-menu-checkboxes" />

      <H3>Radio group</H3>
      <P>
        Wrap <InlineCode>DropdownMenuRadioItem</InlineCode>s in a <InlineCode>DropdownMenuRadioGroup</InlineCode> with{" "}
        <InlineCode>value</InlineCode> and <InlineCode>onValueChange</InlineCode> for a single choice. The checked item
        shows a check mark.
      </P>
      <ComponentPreview name="dropdown-menu-radio-group" />

      <H3>Submenu</H3>
      <P>
        <InlineCode>DropdownMenuSub</InlineCode> nests a 240px menu next to its trigger item, which shows a trailing
        chevron. Keep it to one level.
      </P>
      <ComponentPreview name="dropdown-menu-submenu" />

      <H3>Inset</H3>
      <P>
        <InlineCode>inset</InlineCode> adds 40px of start padding so text in items without an icon (and labels) lines up
        with items that have one.
      </P>
      <ComponentPreview name="dropdown-menu-inset" />

      <H2>Open and close</H2>
      <P>
        The trigger opens it on click, Enter, Space or ArrowDown. Selecting an item closes it. Control it with{" "}
        <InlineCode>open</InlineCode> / <InlineCode>onOpenChange</InlineCode> on the root.
      </P>

      <H2>Focus</H2>
      <P>
        Focus moves into the menu on open and returns to the trigger on close. Arrow keys move between items (disabled ones
        are skipped), Home / End jump to the ends, and typing a letter jumps to a matching item.
      </P>

      <H2>Dismissal</H2>
      <P>
        Escape, clicking outside or selecting an item closes the menu; Tab is held inside it. Prevent closing on select with{" "}
        <InlineCode>onSelect=&#123;(e) =&gt; e.preventDefault()&#125;</InlineCode>.
      </P>

      <H2>Scrolling</H2>
      <P>
        The panel is capped at the space available beside the trigger and scrolls when there are more items. The page
        behind can’t scroll while the menu is open (<InlineCode>modal</InlineCode>, default true).
      </P>

      <H2>Positioning</H2>
      <P>
        Rendered in a portal, 320px wide, 8px from the trigger (<InlineCode>sideOffset</InlineCode>). Use{" "}
        <InlineCode>align=&quot;start&quot;</InlineCode> to line it up with the trigger’s start edge;{" "}
        <InlineCode>side</InlineCode> and collision handling come from Radix.
      </P>

      <H2>RTL</H2>
      <P>
        Padding, inset, shortcuts and alignment are logical. With <InlineCode>dir=&quot;rtl&quot;</InlineCode>, ArrowLeft
        opens a submenu and ArrowRight closes it. The submenu chevron points right in both directions.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "role=menu with menuitem, menuitemcheckbox and menuitemradio items — action-menu semantics, not a listbox.",
          "The trigger gets aria-haspopup=menu and aria-expanded.",
          "Arrow keys, Home / End and typeahead move focus; Enter / Space activate; Escape closes and returns focus to the trigger.",
          "ArrowRight opens a submenu and ArrowLeft closes it (mirrored in RTL).",
          "Checkbox and radio items expose aria-checked; the check mark is decorative.",
          "Destructive items pair colour with a clear label (“Delete file”), and labels name groups for screen readers.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The panel uses <InlineCode>--popover</InlineCode>, <InlineCode>--border</InlineCode> and the outer shadow;
        highlighted items use <InlineCode>--accent</InlineCode>, destructive items{" "}
        <InlineCode>--status-error-text</InlineCode>. Change widths with <InlineCode>className</InlineCode> on Content or
        SubContent.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "DropdownMenu open / defaultOpen", type: "boolean", description: "Controlled or initial open state." },
          { name: "DropdownMenu onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
          { name: "DropdownMenu modal", type: "boolean", default: "true", description: "Block outside interaction while open (Radix)." },
          { name: "DropdownMenuContent sideOffset", type: "number", default: "8", description: "Gap from the trigger in px." },
          { name: "DropdownMenuContent side / align", type: "side / align", default: '"bottom" / "center"', description: "Placement relative to the trigger." },
          { name: "DropdownMenuItem variant", type: '"default" | "destructive"', default: '"default"', description: "Destructive colours the label." },
          { name: "DropdownMenuItem / Label / SubTrigger inset", type: "boolean", description: "40px start padding to align with iconned items." },
          { name: "DropdownMenuItem disabled", type: "boolean", default: "false", description: "Not selectable, skipped by the keyboard." },
          { name: "DropdownMenuItem onSelect", type: "(event: Event) => void", description: "Runs on activation; preventDefault keeps the menu open." },
          { name: "DropdownMenuCheckboxItem checked / onCheckedChange", type: "boolean | \"indeterminate\" / (checked) => void", description: "Checkbox state." },
          { name: "DropdownMenuRadioGroup value / onValueChange", type: "string / (value: string) => void", description: "Selected radio item." },
          { name: "DropdownMenuShortcut", type: "span props", description: "Trailing keyboard hint (visual only)." },
        ]}
      />
      <P className="mt-4">Every other prop passes to the matching Radix Dropdown Menu primitive.</P>
    </>
  )
}
