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

export const metadata: Metadata = { title: "Button Group" }

export default function ButtonGroupPage() {
  return (
    <>
      <DocHeader
        slug="button-group"
        title="Button Group"
        description="Joins related buttons into one connected control with a shared 1px seam and rounded outer corners. Horizontal or vertical, three corner styles, with text and separator segments."
      />
      <ComponentPreview name="button-group-demo" />

      <H2>Installation</H2>
      <Installation item="button-group" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

<ButtonGroup aria-label="Message actions">
  <Button variant="outline">Archive</Button>
  <Button variant="outline">Report</Button>
</ButtonGroup>`}
      />
      <P>
        Group buttons that act on the same thing. A button group is not a selection: to pick one or several options use{" "}
        <Link className="underline" href="/docs/components/toggle-group">Toggle Group</Link>.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>ButtonGroup</InlineCode> wraps any mix of <InlineCode>Button</InlineCode>,{" "}
        <InlineCode>ButtonGroupText</InlineCode> (a static label segment), <InlineCode>ButtonGroupSeparator</InlineCode>,
        an <InlineCode>Input</InlineCode>, a select trigger or a nested <InlineCode>ButtonGroup</InlineCode>. Parts and
        props match shadcn/ui; <InlineCode>corner</InlineCode> is a Main Brand extra.
      </P>

      <H2>Examples</H2>

      <H3>Variants</H3>
      <P>
        The group takes its look from its buttons. Outline buttons share their border as the seam. Filled buttons
        (Primary, Secondary) have no border, so put a <InlineCode>ButtonGroupSeparator</InlineCode> between them.
      </P>
      <ComponentPreview name="button-group-variants" />

      <H3>Sizes</H3>
      <P>
        Set the same <InlineCode>size</InlineCode> on every button. The group adjusts padding so each segment is as wide
        as a standalone button.
      </P>
      <ComponentPreview name="button-group-sizes" />

      <H3>Icons</H3>
      <P>
        Use <InlineCode>icon-*</InlineCode> sizes for icon-only segments and give each an{" "}
        <InlineCode>aria-label</InlineCode>. Directional icons mirror in RTL.
      </P>
      <ComponentPreview name="button-group-icons" />

      <H3>Loading and disabled</H3>
      <P>
        Each button keeps its own <InlineCode>loading</InlineCode> and <InlineCode>disabled</InlineCode> state; the
        group has none. A loading segment keeps its width so the group doesn’t shift.
      </P>
      <ComponentPreview name="button-group-states" />

      <H3>Orientation</H3>
      <P>
        <InlineCode>orientation=&quot;vertical&quot;</InlineCode> stacks segments and rounds the top and bottom corners
        instead.
      </P>
      <ComponentPreview name="button-group-orientation" />

      <H3>Corners</H3>
      <P>Default (8px), Soft (16px) and Pill match the Figma “Corner style” property and apply to the outer corners only.</P>
      <ComponentPreview name="button-group-corners" />

      <H3>Text and inputs</H3>
      <P>
        <InlineCode>ButtonGroupText</InlineCode> adds a muted label segment; with <InlineCode>asChild</InlineCode> it can
        be the input’s <InlineCode>&lt;label&gt;</InlineCode>. Inputs grow to fill the group. Inputs are 32px, so pair
        them with <InlineCode>xs</InlineCode> buttons.
      </P>
      <ComponentPreview name="button-group-text" />

      <H3>Nested groups</H3>
      <P>Groups inside a group are spaced 8px apart, for toolbars made of several clusters.</P>
      <ComponentPreview name="button-group-nested" />

      <H2>RTL</H2>
      <P>
        Corners and seams use logical properties, so the first segment is rounded at the reading start in right-to-left
        layouts. Use the RTL switch above any preview to check.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders <InlineCode>role=&quot;group&quot;</InlineCode>; give it an <InlineCode>aria-label</InlineCode> that names the set.</>,
          "Each segment is a separate tab stop, in visual order.",
          "A focused segment rises above its neighbours so the whole focus ring is visible.",
          <>Separators come from Separator and are decorative by default.</>,
          <>Use Toggle Group, not this, when segments show a pressed or selected state.</>,
        ]}
      />

      <H2>Customization</H2>
      <P>
        Colours come from the buttons inside. <InlineCode>buttonGroupVariants(&#123; orientation, corner &#125;)</InlineCode>{" "}
        is exported; extend its <InlineCode>corner</InlineCode> compound variants in{" "}
        <InlineCode>components/ui/button-group.tsx</InlineCode> to add a radius.
      </P>

      <H2>API reference</H2>
      <H3>ButtonGroup</H3>
      <PropsTable
        caption="ButtonGroup props"
        rows={[
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction of the segments." },
          { name: "corner", type: '"default" | "soft" | "pill"', default: '"default"', description: "Outer corner radius: 8px, 16px or fully rounded." },
          { name: "…props", type: 'React.ComponentProps<"div">', description: "Includes aria-label." },
        ]}
      />
      <H3>ButtonGroupText</H3>
      <PropsTable
        caption="ButtonGroupText props"
        rows={[
          { name: "asChild", type: "boolean", default: "false", description: "Render the child (e.g. a <label>) with segment styles." },
          { name: "…props", type: 'React.ComponentProps<"div">', description: "All div attributes." },
        ]}
      />
      <H3>ButtonGroupSeparator</H3>
      <PropsTable
        caption="ButtonGroupSeparator props"
        rows={[
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"vertical"', description: "Use horizontal inside a vertical group." },
          { name: "decorative", type: "boolean", default: "true", description: "Separator prop; hidden from assistive technology." },
        ]}
      />
    </>
  )
}
