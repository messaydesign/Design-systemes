import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Progress" }

export default function ProgressPage() {
  return (
    <>
      <DocHeader
        slug="progress"
        title="Progress"
        description="Shows how far a task has got: a determinate bar from 0 to 100%, or an indeterminate bar when the total is unknown."
      />
      <ComponentPreview name="progress-demo" />

      <H2>Installation</H2>
      <Installation item="progress" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Progress } from "@/components/ui/progress"

<Progress value={33} aria-label="Upload progress" />`}
      />
      <P>
        Same API as shadcn/ui (Radix Progress). Main Brand extra: when <InlineCode>value</InlineCode> is{" "}
        <InlineCode>null</InlineCode> or omitted, the bar shows Figma’s indeterminate animation instead of an empty track.
      </P>

      <H2>Examples</H2>
      <H3>Values</H3>
      <P>The Figma 0, 25, 50, 75 and 100% states. Show the number next to the bar when people need it.</P>
      <ComponentPreview name="progress-values" />

      <H3>Indeterminate</H3>
      <P>
        Use <InlineCode>value=&#123;null&#125;</InlineCode> while you don’t know the total, then switch to a number as soon
        as you do.
      </P>
      <ComponentPreview name="progress-indeterminate" />

      <H3>With a label</H3>
      <P>
        Link a visible label with <InlineCode>aria-labelledby</InlineCode>, and use <InlineCode>getValueLabel</InlineCode>{" "}
        to announce steps instead of a percentage.
      </P>
      <ComponentPreview name="progress-label" />

      <H2>Status</H2>
      <P>
        The bar uses the brand primary colour on a neutral track. It has no success or error colours: when the task ends,
        replace it with a message (an Alert, or text next to the control) saying what happened.
      </P>

      <H2>Live regions</H2>
      <P>
        Progress is a <InlineCode>progressbar</InlineCode>, not a live region, so value changes aren’t announced by
        themselves. Announce milestones that matter (“Upload complete”) in a separate{" "}
        <InlineCode>role=&quot;status&quot;</InlineCode> element rather than every percent.
      </P>

      <H2>Motion</H2>
      <P>
        Width changes ease over 300ms; the indeterminate bar slides on a 1.4s loop. Both stop when reduced motion is
        preferred — the indeterminate bar then stays still at one third.
      </P>

      <H2>RTL</H2>
      <P>Determinate bars fill from the inline start, so they fill right to left in RTL layouts.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders <InlineCode>role=&quot;progressbar&quot;</InlineCode> with <InlineCode>aria-valuemin</InlineCode>, <InlineCode>aria-valuemax</InlineCode> and, when determinate, <InlineCode>aria-valuenow</InlineCode> and <InlineCode>aria-valuetext</InlineCode>.</>,
          <>Every bar needs a name: <InlineCode>aria-label</InlineCode> or <InlineCode>aria-labelledby</InlineCode> pointing at a visible label.</>,
          "Indeterminate bars omit aria-valuenow, which tells assistive technology the value is unknown.",
          <>Set <InlineCode>aria-busy</InlineCode> on the region being updated while the task runs.</>,
          "Animations respect prefers-reduced-motion.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Track colour is <InlineCode>--surface-pressed</InlineCode> and the value is <InlineCode>--primary</InlineCode>.
        Change the height with <InlineCode>className</InlineCode> (<InlineCode>h-1</InlineCode>,{" "}
        <InlineCode>h-3</InlineCode>).
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "value", type: "number | null", description: "0–100. null or omitted renders the indeterminate state (Main Brand)." },
          { name: "max", type: "number", default: "100", description: "Maximum value; the bar fills value ÷ max." },
          { name: "getValueLabel", type: "(value: number, max: number) => string", description: "Text for aria-valuetext. Default: “{percent}%”." },
          { name: "…props", type: "React.ComponentProps<typeof ProgressPrimitive.Root>", description: "className, aria-label and other attributes." },
        ]}
      />
    </>
  )
}
