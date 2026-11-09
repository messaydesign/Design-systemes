import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Navigation Menu" }

export default function NavigationMenuPage() {
  return (
    <>
      <DocHeader
        slug="navigation-menu"
        title="Navigation Menu"
        description="A row of site navigation links, where some items open a panel of further links. For links between pages — not application commands."
      />
      <ComponentPreview name="navigation-menu-demo" align="start" minHeight={320} />

      <H2>Installation</H2>
      <Installation item="navigation-menu" />

      <H2>Usage</H2>
      <CodeBlock code={`import Link from "next/link"

import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink asChild>
          <Link href="/analytics">Analytics</Link>
        </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink variant="link" asChild>
        <Link href="/pricing">Pricing</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`} />
      <P>
        The API matches shadcn/ui: <InlineCode>viewport</InlineCode>, <InlineCode>NavigationMenuViewport</InlineCode>,{" "}
        <InlineCode>NavigationMenuIndicator</InlineCode> and <InlineCode>navigationMenuTriggerStyle()</InlineCode> are all
        there. One deliberate difference: <InlineCode>viewport</InlineCode> defaults to <InlineCode>false</InlineCode>{" "}
        (shadcn: <InlineCode>true</InlineCode>), so each panel opens directly below its own trigger as in Figma. Main Brand
        adds <InlineCode>variant</InlineCode> on NavigationMenuLink.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>NavigationMenu</InlineCode> is the <InlineCode>nav</InlineCode> landmark ·{" "}
        <InlineCode>NavigationMenuList</InlineCode> the row · one <InlineCode>NavigationMenuItem</InlineCode> per entry,
        holding either a <InlineCode>NavigationMenuTrigger</InlineCode> + <InlineCode>NavigationMenuContent</InlineCode>{" "}
        panel of links, or a single top-level <InlineCode>NavigationMenuLink variant=&quot;link&quot;</InlineCode>. Inside
        panels, <InlineCode>NavigationMenuLink</InlineCode> (default <InlineCode>variant=&quot;item&quot;</InlineCode>)
        renders a 240px Navigation / Item row. For app commands use{" "}
        <Link className="underline" href="/docs/components/menubar">Menubar</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Current page and icons</H3>
      <P>
        <InlineCode>active</InlineCode> on a link sets <InlineCode>aria-current=&quot;page&quot;</InlineCode> and the
        selected tint. Items take a 16px leading icon; wrap the text in a <InlineCode>span</InlineCode> so it truncates.
      </P>
      <ComponentPreview name="navigation-menu-active" align="start" minHeight={320} />

      <H3>Shared viewport</H3>
      <P>
        <InlineCode>viewport</InlineCode> renders one shared panel below the whole row, as shadcn does by default. The
        viewport draws the border and surface and resizes between menus (instantly with reduced motion).
      </P>
      <ComponentPreview name="navigation-menu-viewport" align="start" minHeight={360} />

      <H2>Active state</H2>
      <P>
        The trigger of the open panel uses the Ghost Selected face (Figma Open). Mark the current page with{" "}
        <InlineCode>active</InlineCode> on its link; that styling applies to panel items. For a top-level{" "}
        <InlineCode>variant=&quot;link&quot;</InlineCode>, <InlineCode>active</InlineCode> sets{" "}
        <InlineCode>aria-current</InlineCode> but has no distinct visual style.
      </P>

      <H2>Nesting</H2>
      <P>
        One level: triggers open panels of links. A <InlineCode>NavigationMenuSub</InlineCode> is not exported; for deeper
        trees link to a section page or use a Sidebar.
      </P>

      <H2>Orientation</H2>
      <P>
        Styled for a horizontal row. Radix accepts <InlineCode>orientation=&quot;vertical&quot;</InlineCode> for keyboard
        handling, but the list and panel positions are not styled for it — use Sidebar or Nav Item lists for vertical navigation.
      </P>

      <H2>Overflow</H2>
      <P>
        The row doesn’t wrap or scroll. Panels are <InlineCode>w-max</InlineCode> with 240px items; in viewport mode the
        panel is capped at the viewport width minus 2rem. Keep to a few top-level entries.
      </P>

      <H2>Responsive</H2>
      <P>
        Hover-to-open panels don’t suit touch screens. On narrow screens replace the row with a menu button that opens a{" "}
        <Link className="underline" href="/docs/components/sheet">Sheet</Link> of Nav Items.
      </P>

      <H2>RTL</H2>
      <P>
        Panels and the viewport align to the inline start, the gap and padding are logical, and Radix swaps ArrowLeft /
        ArrowRight with <InlineCode>dir=&quot;rtl&quot;</InlineCode>.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders a <InlineCode>nav</InlineCode> landmark; add <InlineCode>aria-label</InlineCode> when the page has more than one.</>,
          "Triggers are buttons with aria-expanded and aria-controls; panels open on hover, click, Enter or Space.",
          "Tab moves through triggers and links in order; ArrowLeft / ArrowRight move between top-level items; ArrowDown enters an open panel.",
          "Escape closes the panel and returns focus to its trigger.",
          <>The current page link exposes <InlineCode>aria-current=&quot;page&quot;</InlineCode> via <InlineCode>active</InlineCode>.</>,
          "The trigger chevron is decorative; link text names each destination.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Panels use <InlineCode>--popover</InlineCode> and <InlineCode>--border</InlineCode> with 16px padding and an 8px gap.
        Use <InlineCode>navigationMenuTriggerStyle()</InlineCode> to give a top-level link the trigger’s Ghost face instead
        of the Link face.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "NavigationMenu viewport", type: "boolean", default: "false", description: "Render one shared viewport below the row (shadcn default: true)." },
          { name: "NavigationMenu value / defaultValue / onValueChange", type: "string", description: "The open item (by NavigationMenuItem value)." },
          { name: "NavigationMenu delayDuration", type: "number", default: "200", description: "Hover delay before a panel opens (Radix)." },
          { name: "NavigationMenuLink variant", type: '"item" | "link"', default: '"item"', description: "Panel row (Navigation / Item) or top-level Link button (Main Brand)." },
          { name: "NavigationMenuLink active", type: "boolean", default: "false", description: "Current page: sets aria-current=\"page\"." },
          { name: "NavigationMenuLink asChild", type: "boolean", default: "false", description: "Render your router link (e.g. Next.js Link)." },
          { name: "NavigationMenuViewport / NavigationMenuIndicator", type: "Radix props", description: "Shared panel and arrow indicator, for viewport mode." },
          { name: "navigationMenuTriggerStyle()", type: "() => string", description: "Trigger classes (Ghost, Selected when open) for custom triggers or links." },
        ]}
      />
      <P className="mt-4">Every other prop passes to the matching Radix Navigation Menu primitive.</P>
    </>
  )
}
