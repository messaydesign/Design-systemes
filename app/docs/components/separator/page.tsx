import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Separator" }

export default function SeparatorPage() {
  return (
    <>
      <DocHeader
        slug="separator"
        title="Separator"
        description="A 1px rule that divides content, horizontally or vertically."
      />
      <ComponentPreview name="separator-demo" />

      <H2>Installation</H2>
      <Installation item="separator" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Separator } from "@/components/ui/separator"

<Separator />
<Separator orientation="vertical" />`}
      />
      <P>Same API as shadcn/ui. Prefer spacing to separate groups; add a rule only where spacing alone isn’t enough.</P>

      <H2>Examples</H2>
      <H3>Horizontal and vertical</H3>
      <P>
        A vertical separator fills its parent’s height, so give the row a height (<InlineCode>h-5</InlineCode> above) and
        use <InlineCode>flex items-center</InlineCode>.
      </P>
      <ComponentPreview name="separator-demo" />

      <H3>Semantic</H3>
      <P>
        By default the separator is decorative and hidden from assistive technology. Set{" "}
        <InlineCode>decorative=&#123;false&#125;</InlineCode> when it marks a real break between topics.
      </P>
      <ComponentPreview name="separator-semantic" />

      <H2>Alignment and spacing</H2>
      <P>The separator has no margin. Space it with the parent’s gap (16px is typical) so it stays centred between items.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Decorative separators render <InlineCode>role=&quot;none&quot;</InlineCode>; with <InlineCode>decorative=&#123;false&#125;</InlineCode> they render <InlineCode>role=&quot;separator&quot;</InlineCode> with <InlineCode>aria-orientation</InlineCode>.</>,
          "Don’t rely on the line alone to group content; headings and spacing carry the structure.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Colour comes from <InlineCode>--border</InlineCode> (Figma “subtle”). Use <InlineCode>className</InlineCode> for
        margins or a stronger colour, e.g. <InlineCode>bg-input</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Full-width 1px line or full-height 1px line." },
          { name: "decorative", type: "boolean", default: "true", description: "Hide from assistive technology. Set false for a semantic separator." },
          { name: "…props", type: "React.ComponentProps<typeof SeparatorPrimitive.Root>", description: "className and div attributes." },
        ]}
      />
    </>
  )
}
