import type { Metadata } from "next"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Slider" }

export default function SliderPage() {
  return (
    <>
      <DocHeader
        slug="slider"
        title="Slider"
        description="Choose a value or a range by dragging a thumb along a track. 8px track, 24px thumbs with 48px hit areas, full keyboard support."
      />
      <ComponentPreview name="slider-demo" />

      <H2>Installation</H2>
      <Installation item="slider" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[60]} max={100} step={1} thumbLabels={["Volume"]} />`} />
      <P>
        The API matches shadcn/ui: values are always arrays, and one thumb is rendered per value. Main Brand adds{" "}
        <InlineCode>thumbLabels</InlineCode> to name each thumb.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        Show a visible title and the current value as text. The thumb (<InlineCode>role=&quot;slider&quot;</InlineCode>)
        isn’t a labelable element, so name it with <InlineCode>thumbLabels</InlineCode> rather than{" "}
        <InlineCode>&lt;label htmlFor&gt;</InlineCode>.
      </P>
      <ComponentPreview name="slider-label" />

      <H3>Range</H3>
      <P>
        Pass two values for a range. Thumbs can’t cross; <InlineCode>minStepsBetweenThumbs</InlineCode> keeps a gap.
        Without <InlineCode>thumbLabels</InlineCode> the thumbs are named “Minimum” and “Maximum”.
      </P>
      <ComponentPreview name="slider-range" />

      <H3>Validation</H3>
      <P>
        The slider has no error style — its value is always in range. Check business rules (like a minimum budget) in
        your app and show the result in a <InlineCode>FieldMessage</InlineCode>; see the form example below.
      </P>

      <H3>Required, read-only and disabled</H3>
      <P>
        Figma’s Disabled state: grey fill and disabled thumb stroke, no pointer or keyboard input. There is no read-only
        mode, and a slider always has a value, so <InlineCode>required</InlineCode> doesn’t apply.
      </P>
      <ComponentPreview name="slider-disabled" />

      <H3>Form integration</H3>
      <P>
        Inside a <InlineCode>&lt;form&gt;</InlineCode>, a <InlineCode>name</InlineCode> renders a hidden input per thumb,
        so the value submits with the form.
      </P>
      <ComponentPreview name="slider-form" />
      <Callout tone="missing" title="Describing a thumb">
        Props on <InlineCode>Slider</InlineCode> go to the root, not the thumbs, so <InlineCode>aria-label</InlineCode>,{" "}
        <InlineCode>aria-labelledby</InlineCode> and <InlineCode>aria-describedby</InlineCode> on Slider don’t reach the
        focusable thumb. Use <InlineCode>thumbLabels</InlineCode> for the name; there’s no way to link helper text yet.
      </Callout>

      <H2>RTL</H2>
      <P>Radix reads the document direction (or <InlineCode>dir</InlineCode>): the track fills from the right and arrow keys follow the reading order.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Each thumb is <InlineCode>role=&quot;slider&quot;</InlineCode> with <InlineCode>aria-valuenow</InlineCode>, min and max.</>,
          "Arrow keys move one step, Page Up / Page Down ten steps, Home / End jump to the ends.",
          <>Name every thumb with <InlineCode>thumbLabels</InlineCode> and show the value as visible text; use <InlineCode>aria-valuetext</InlineCode> on custom thumbs for units.</>,
          "Thumbs have a 48px hit area; focus shows a 1px ring with a 2px offset.",
          "Don’t use a slider when users need an exact value — pair it with a number input or use one instead.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The track uses <InlineCode>--disabled-background</InlineCode>, the fill <InlineCode>--primary</InlineCode>, the
        thumb <InlineCode>--input-surface</InlineCode> and <InlineCode>--input</InlineCode>. Target{" "}
        <InlineCode>[data-slot=slider-track]</InlineCode>, <InlineCode>slider-range</InlineCode> and{" "}
        <InlineCode>slider-thumb</InlineCode> to restyle parts.
      </P>

      <H2>API reference</H2>
      <H3>Slider</H3>
      <PropsTable
        rows={[
          { name: "value / defaultValue", type: "number[]", description: "One value per thumb (controlled / uncontrolled). Defaults to one thumb at min." },
          { name: "onValueChange", type: "(value: number[]) => void", description: "Called while dragging." },
          { name: "onValueCommit", type: "(value: number[]) => void", description: "Called when the user releases the thumb." },
          { name: "min / max", type: "number", default: "0 / 100", description: "Range of the track." },
          { name: "step", type: "number", default: "1", description: "Increment." },
          { name: "minStepsBetweenThumbs", type: "number", default: "0", description: "Minimum gap between range thumbs, in steps." },
          { name: "thumbLabels", type: "string[]", description: "Accessible name per thumb (Main Brand)." },
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Vertical needs a height on the parent (min 176px)." },
          { name: "disabled", type: "boolean", default: "false", description: "Disabled colours; no input." },
          { name: "name", type: "string", description: "Form field name for the hidden inputs." },
        ]}
      />
      <P>Remaining props pass through to the Radix <InlineCode>Slider.Root</InlineCode>.</P>
    </>
  )
}
