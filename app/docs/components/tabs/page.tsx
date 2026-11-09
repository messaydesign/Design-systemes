import type { Metadata } from "next"
import Link from "next/link"

import {
  A11yList,
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

export const metadata: Metadata = { title: "Tabs" }

export default function TabsPage() {
  return (
    <>
      <DocHeader
        slug="tabs"
        title="Tabs"
        description="Switches between related panels of content in the same place on a page. Pill and Line styles, horizontal or vertical, with roving keyboard focus."
      />
      <ComponentPreview name="tabs-demo" />

      <H2>Installation</H2>
      <Installation item="tabs" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="account">
  <TabsList aria-label="Settings">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account details.</TabsContent>
  <TabsContent value="password">Change your password.</TabsContent>
</Tabs>`}
      />
      <P>
        Use tabs for peer views of one subject. If each tab is a separate page with its own URL, use links in a{" "}
        <Link className="underline" href="/docs/components/navigation-item">Navigation Item</Link> list instead.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>Tabs</InlineCode> holds the selected value and orientation · <InlineCode>TabsList</InlineCode> is
        the tablist and sets the <InlineCode>variant</InlineCode> for its triggers · <InlineCode>TabsTrigger</InlineCode>{" "}
        is one tab · <InlineCode>TabsContent</InlineCode> is the panel with the matching <InlineCode>value</InlineCode>.
        The API is the same as shadcn/ui, so shadcn examples work unchanged.
      </P>

      <H2>Examples</H2>

      <H3>Pill (default)</H3>
      <P>
        <InlineCode>variant=&quot;default&quot;</InlineCode> is the Figma Pill style: the selected tab gets the ghost
        selected tint and semibold text. It is the default, so you rarely write it — the preview at the top uses it.
      </P>

      <H3>Line</H3>
      <P>
        <InlineCode>variant=&quot;line&quot;</InlineCode> marks the selected tab with a 2px brand rule under it. Use it
        for page-level sections where the pill would feel heavy.
      </P>
      <ComponentPreview name="tabs-line" />

      <H3>Icons</H3>
      <P>Put a 16px icon before the label. Keep the text: icon-only tabs are hard to tell apart.</P>
      <ComponentPreview name="tabs-icons" />

      <H3>Disabled</H3>
      <P>
        <InlineCode>disabled</InlineCode> on a trigger removes it from keyboard navigation. Say nearby why it is
        unavailable.
      </P>
      <ComponentPreview name="tabs-disabled" />

      <H3>Controlled</H3>
      <P>
        Pass <InlineCode>value</InlineCode> and <InlineCode>onValueChange</InlineCode> to change tabs from code, for
        example from a “Continue” button or a URL search param.
      </P>
      <ComponentPreview name="tabs-controlled" />

      <H2>Active state</H2>
      <P>
        Radix sets <InlineCode>data-state=&quot;active&quot;</InlineCode> and{" "}
        <InlineCode>aria-selected=&quot;true&quot;</InlineCode> on the selected trigger. Both styles add a non-colour
        cue: semibold text, plus the tint (Pill) or the underline (Line).
      </P>

      <H2>Nesting</H2>
      <P>
        Avoid tabs inside tabs. If a panel needs its own sub-views, use a{" "}
        <Link className="underline" href="/docs/components/toggle-group">Toggle Group</Link> or a select inside the
        panel, so there is only one tablist per region.
      </P>

      <H2>Orientation</H2>
      <P>
        <InlineCode>orientation=&quot;vertical&quot;</InlineCode> on <InlineCode>Tabs</InlineCode> puts the list at the
        inline start of the panel and switches arrow keys to Up/Down.
      </P>
      <ComponentPreview name="tabs-vertical" />

      <H2>Overflow</H2>
      <P>
        A horizontal list scrolls sideways instead of shrinking its 48px triggers. Keep the number of tabs small; past
        five or six, consider a select or a sidebar.
      </P>
      <ComponentPreview name="tabs-overflow" />

      <H2>Responsive</H2>
      <P>
        Triggers keep their 48px height and 16px text at every size.
        On phones prefer a horizontal list (vertical lists take width from the panel).
      </P>

      <H2>RTL</H2>
      <P>
        The list follows the reading direction and Left/Right arrows swap in right-to-left layouts. Vertical tabs sit on
        the right. Use the RTL switch above any preview to check.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders <InlineCode>role=&quot;tablist&quot;</InlineCode>, <InlineCode>tab</InlineCode> and <InlineCode>tabpanel</InlineCode> with <InlineCode>aria-controls</InlineCode> / <InlineCode>aria-labelledby</InlineCode> wired up.</>,
          <>Give <InlineCode>TabsList</InlineCode> an <InlineCode>aria-label</InlineCode> describing the set.</>,
          "One tab stop for the list; arrow keys move between tabs, Home/End jump to the first/last, and tabs activate on focus.",
          "Tab moves from the list into the panel, which is focusable and shows the focus outline.",
          "Each trigger is 48px tall; the selected tab is marked by weight and shape, not colour alone.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The selected tint uses <InlineCode>--button-ghost-selected-background</InlineCode> and{" "}
        <InlineCode>--button-selected-text</InlineCode>; the Line rule uses <InlineCode>--primary</InlineCode>.{" "}
        <InlineCode>tabsListVariants</InlineCode> is exported if you add list styles.
      </P>

      <H2>API reference</H2>
      <H3>Tabs</H3>
      <PropsTable
        caption="Tabs props"
        rows={[
          { name: "defaultValue", type: "string", description: "Initially selected tab (uncontrolled)." },
          { name: "value / onValueChange", type: "string / (value: string) => void", description: "Controlled selection." },
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Stacks list over panel, or list at the inline start." },
          { name: "activationMode", type: '"automatic" | "manual"', default: '"automatic"', description: "Radix: activate on focus or on Enter/Space." },
          { name: "dir", type: '"ltr" | "rtl"', description: "Reading direction for keyboard navigation." },
        ]}
      />
      <H3>TabsList</H3>
      <PropsTable
        caption="TabsList props"
        rows={[
          { name: "variant", type: '"default" | "line"', default: '"default"', description: "default is Figma Pill; line is Figma Line." },
          { name: "loop", type: "boolean", default: "true", description: "Arrow keys wrap from last to first." },
        ]}
      />
      <H3>TabsTrigger and TabsContent</H3>
      <PropsTable
        caption="TabsTrigger and TabsContent props"
        rows={[
          { name: "value", type: "string", description: "Links a trigger to its panel. Required on both." },
          { name: "TabsTrigger disabled", type: "boolean", default: "false", description: "Not selectable and skipped by arrow keys." },
          { name: "TabsContent forceMount", type: "true", description: "Keep the panel mounted while hidden." },
        ]}
      />
    </>
  )
}
