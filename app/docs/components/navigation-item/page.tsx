import type { Metadata } from "next"
import Link from "next/link"

import {
  A11yList,
  Callout,
  CodeBlock,
  ComponentPreview,
  DocHeader,
  H2,
  H3,
  InlineCode,
  Installation,
  P,
  PropsTable,
} from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Navigation Item" }

export default function NavigationItemPage() {
  return (
    <>
      <DocHeader
        slug="navigation-item"
        title="Navigation Item"
        description="A 48px link row with an optional leading icon, for navigation lists outside the full Sidebar. Default, Current and Disabled states, mirrored in right-to-left layouts."
      />
      <ComponentPreview name="navigation-item-demo" />

      <H2>Installation</H2>
      <Installation item="nav-item" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { FileIcon } from "@/components/ui/icons"
import { NavItem } from "@/components/ui/nav-item"

<nav aria-label="Settings">
  <ul>
    <li>
      <NavItem href="/settings/profile" isActive>
        <FileIcon />
        <span>Profile</span>
      </NavItem>
    </li>
  </ul>
</nav>`}
      />
      <P>
        Navigation Item is a Main Brand extra; shadcn/ui has no equivalent. Use it for in-page or settings navigation.
        For the app’s main navigation use <Link className="underline" href="/docs/components/sidebar">Sidebar</Link>,
        whose menu buttons share the same Figma item.
      </P>

      <H2>Composition</H2>
      <P>
        A single part, <InlineCode>NavItem</InlineCode>, rendering an <InlineCode>&lt;a&gt;</InlineCode>. Put an icon
        first and wrap the label in a <InlineCode>&lt;span&gt;</InlineCode> so it truncates. Place items in a list
        inside a labelled <InlineCode>&lt;nav&gt;</InlineCode>. <InlineCode>navItemClasses</InlineCode> is exported to
        style other elements the same way.
      </P>

      <H2>Examples</H2>

      <H3>States</H3>
      <P>
        Default, Current (<InlineCode>isActive</InlineCode>) and Disabled (<InlineCode>disabled</InlineCode>). Hover
        shows the surface tint; focus shows a 1px outline with a 2px offset.
      </P>
      <ComponentPreview name="navigation-item-states" />

      <H3>With a router link</H3>
      <P>
        <InlineCode>asChild</InlineCode> passes the styles to Next.js <InlineCode>Link</InlineCode> for client-side
        navigation. <InlineCode>isActive</InlineCode> and <InlineCode>disabled</InlineCode> still apply.
      </P>
      <ComponentPreview name="navigation-item-link" />

      <H2>Active state</H2>
      <P>
        <InlineCode>isActive</InlineCode> sets <InlineCode>aria-current=&quot;page&quot;</InlineCode>, which is what
        applies the ghost-selected tint and selected text. Derive it from the current route, for example{" "}
        <InlineCode>usePathname() === href</InlineCode>.
      </P>

      <H2>Nesting</H2>
      <P>
        Nest a second list with logical indentation and a start border for one sub-level. Items without icons line up
        on the text.
      </P>
      <ComponentPreview name="navigation-item-nested" />
      <Callout tone="missing" title="Expandable groups">
        There is no built-in disclosure for nested items. Compose a Collapsible, or use{" "}
        <InlineCode>SidebarMenuSub</InlineCode> in the Sidebar.
      </Callout>

      <H2>Orientation</H2>
      <P>
        Items are full-width rows meant for vertical lists. For horizontal page sections use{" "}
        <Link className="underline" href="/docs/components/tabs">Tabs</Link> or a Navigation Menu.
      </P>

      <H2>Overflow</H2>
      <P>
        Long labels truncate with an ellipsis inside the label <InlineCode>&lt;span&gt;</InlineCode>. Add a{" "}
        <InlineCode>title</InlineCode> or keep labels short so the full text is available.
      </P>
      <ComponentPreview name="navigation-item-truncate" />

      <H2>Responsive</H2>
      <P>
        Rows stay 48px tall; text drops from 16px to 14px from the <InlineCode>md</InlineCode> breakpoint. Items fill
        their container, so set the list width on the parent.
      </P>

      <H2>RTL</H2>
      <P>
        Padding and the icon position are logical: the icon sits at the inline start and text aligns to the start in
        right-to-left layouts. Use the RTL switch above any preview to check.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders a native link; the current item has <InlineCode>aria-current=&quot;page&quot;</InlineCode>.</>,
          <>Disabled items drop <InlineCode>href</InlineCode>, set <InlineCode>aria-disabled</InlineCode> and <InlineCode>tabIndex=-1</InlineCode>, so they leave the tab order.</>,
          <>Wrap lists in <InlineCode>&lt;nav aria-label=&quot;…&quot;&gt;</InlineCode> and <InlineCode>&lt;ul&gt;</InlineCode> so the number of items is announced.</>,
          "Icons are decorative; the label is the accessible name.",
          "Every row is a 48px target with a visible focus outline.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The current state uses <InlineCode>--button-ghost-selected-background</InlineCode> and{" "}
        <InlineCode>--button-selected-text</InlineCode>; hover uses <InlineCode>--accent</InlineCode>. Add classes per
        item with <InlineCode>className</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        caption="NavItem props"
        rows={[
          { name: "href", type: "string", description: "Destination. Dropped when disabled." },
          { name: "isActive", type: "boolean", description: "Current page: sets aria-current=\"page\"." },
          { name: "disabled", type: "boolean", description: "Non-interactive text: no href, aria-disabled, tabIndex -1." },
          { name: "asChild", type: "boolean", default: "false", description: "Style the child element (e.g. Next.js Link) instead of rendering <a>." },
          { name: "…props", type: 'React.ComponentProps<"a">', description: "All anchor attributes." },
        ]}
      />
    </>
  )
}
