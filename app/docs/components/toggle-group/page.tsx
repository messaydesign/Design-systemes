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

export const metadata: Metadata = { title: "Toggle Group" }

export default function ToggleGroupPage() {
  return (
    <>
      <DocHeader
        slug="toggle-group"
        title="Toggle Group"
        description="A set of toggles where one or several can be on. Single or multiple selection, horizontal or vertical, spaced or connected, with one tab stop for the whole set."
      />
      <ComponentPreview name="toggle-group-demo" />

      <H2>Installation</H2>
      <Installation item="toggle-group" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="single" defaultValue="week" aria-label="Calendar view">
  <ToggleGroupItem value="day">Day</ToggleGroupItem>
  <ToggleGroupItem value="week">Week</ToggleGroupItem>
  <ToggleGroupItem value="month">Month</ToggleGroupItem>
</ToggleGroup>`}
      />
      <P>
        Use a toggle group for view options that apply immediately. For choosing form data, use a radio group; for
        unrelated actions, use <Link className="underline" href="/docs/components/button-group">Button Group</Link>.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>ToggleGroup</InlineCode> holds the value and passes <InlineCode>variant</InlineCode>,{" "}
        <InlineCode>size</InlineCode>, <InlineCode>corner</InlineCode> and <InlineCode>spacing</InlineCode> to each{" "}
        <InlineCode>ToggleGroupItem</InlineCode> (an item can override the first three). The API matches shadcn/ui,
        plus <InlineCode>corner</InlineCode>. Two defaults differ to keep the Figma look:{" "}
        <InlineCode>variant</InlineCode> is <InlineCode>&quot;outline&quot;</InlineCode> and{" "}
        <InlineCode>spacing</InlineCode> is <InlineCode>2</InlineCode> (8px).
      </P>

      <H2>Examples</H2>

      <H3>Multiple selection</H3>
      <P>
        <InlineCode>type=&quot;multiple&quot;</InlineCode> lets several items be on; <InlineCode>value</InlineCode> is
        then a string array.
      </P>
      <ComponentPreview name="toggle-group-multiple" />

      <H3>Variants</H3>
      <P>
        Outline (the group default) and Default (Ghost face). The selected item gets the selected tint and border in
        both.
      </P>
      <ComponentPreview name="toggle-group-variants" />

      <H3>Sizes</H3>
      <P><InlineCode>size</InlineCode> sets every item: <InlineCode>sm</InlineCode> 40 · default 48 · <InlineCode>lg</InlineCode> 56.</P>
      <ComponentPreview name="toggle-group-sizes" />

      <H3>Connected</H3>
      <P>
        <InlineCode>spacing=&#123;0&#125;</InlineCode> joins items into one segmented control with a shared 1px seam;
        only the outer corners follow <InlineCode>corner</InlineCode>.
      </P>
      <ComponentPreview name="toggle-group-spacing" />

      <H3>Icons</H3>
      <P>
        Items take icons like Toggle. Icon-only items need an <InlineCode>aria-label</InlineCode>; the multiple
        selection example above pairs icons with text.
      </P>

      <H3>Loading</H3>
      <Callout tone="missing" title="Loading">
        There is no loading state. Apply the change optimistically and revert on error.
      </Callout>

      <H3>Disabled</H3>
      <P>
        <InlineCode>disabled</InlineCode> on an item skips it during arrow-key navigation; on the group it disables every
        item.
      </P>
      <ComponentPreview name="toggle-group-disabled" />

      <H3>Orientation</H3>
      <P>
        <InlineCode>orientation=&quot;vertical&quot;</InlineCode> stacks items and switches arrow keys to Up/Down. It
        works spaced or connected.
      </P>
      <ComponentPreview name="toggle-group-vertical" />

      <H2>RTL</H2>
      <P>
        Items follow the reading direction, connected corners are logical, and Left/Right arrows swap in right-to-left
        layouts. Use the RTL switch above any preview to check.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders <InlineCode>role=&quot;group&quot;</InlineCode>; label it with <InlineCode>aria-label</InlineCode> or <InlineCode>aria-labelledby</InlineCode>.</>,
          <>Single selection uses <InlineCode>role=&quot;radio&quot;</InlineCode> with <InlineCode>aria-checked</InlineCode>; multiple uses toggle buttons with <InlineCode>aria-pressed</InlineCode>.</>,
          "One tab stop for the group; arrow keys move between items, Home/End jump to the ends.",
          <>With <InlineCode>type=&quot;single&quot;</InlineCode> the selected item can be turned off again; control <InlineCode>value</InlineCode> if one must stay on.</>,
          "Each item is at least 48×48px; the selected state has a border and tint, not colour alone.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Items use <InlineCode>toggleVariants</InlineCode> from Toggle, so the same tokens and any variants you add there
        apply. Change the gap with <InlineCode>spacing</InlineCode> (Tailwind spacing units).
      </P>

      <H2>API reference</H2>
      <H3>ToggleGroup</H3>
      <PropsTable
        caption="ToggleGroup props"
        rows={[
          { name: "type", type: '"single" | "multiple"', description: "Required. One or many items on." },
          { name: "value / defaultValue", type: "string | string[]", description: "Selected value(s); an array for multiple." },
          { name: "onValueChange", type: "(value: string | string[]) => void", description: "Called when the selection changes." },
          { name: "variant", type: '"default" | "outline"', default: '"outline"', description: "Face for every item." },
          { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "Height for every item." },
          { name: "corner", type: '"default" | "soft" | "pill"', default: '"default"', description: "Item corners; outer corners when connected." },
          { name: "spacing", type: "number", default: "2", description: "Gap in spacing units (2 = 8px); 0 connects the items." },
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout and arrow-key direction." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables every item." },
          { name: "rovingFocus / loop", type: "boolean", default: "true", description: "Radix keyboard behaviour." },
        ]}
      />
      <H3>ToggleGroupItem</H3>
      <PropsTable
        caption="ToggleGroupItem props"
        rows={[
          { name: "value", type: "string", description: "Required. Identifies the item." },
          { name: "variant / size / corner", type: "as on ToggleGroup", description: "Override the group’s style for this item." },
          { name: "disabled", type: "boolean", default: "false", description: "Not selectable; skipped by arrow keys." },
        ]}
      />
    </>
  )
}
