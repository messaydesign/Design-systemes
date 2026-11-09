import type { Metadata } from "next"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Aspect Ratio" }

export default function AspectRatioPage() {
  return (
    <>
      <DocHeader
        slug="aspect-ratio"
        title="Aspect Ratio"
        description="Keeps media at a fixed width-to-height ratio as its container resizes: 16:9, 4:3, 1:1 and 3:4 in Figma."
      />
      <ComponentPreview name="aspect-ratio-demo" />

      <H2>Installation</H2>
      <Installation item="aspect-ratio" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

<AspectRatio ratio={16 / 9}>
  <img src="/photo.jpg" alt="Description" className="size-full object-cover" />
</AspectRatio>`}
      />
      <P>
        Same API as shadcn/ui (Radix Aspect Ratio). Use it for images, video and maps so the layout doesn’t jump while
        media loads.
      </P>

      <H2>Examples</H2>
      <H3>Ratios</H3>
      <P>The four Figma ratios. Pass the ratio as a division, <InlineCode>ratio=&#123;3 / 4&#125;</InlineCode>.</P>
      <ComponentPreview name="aspect-ratio-ratios" />

      <H3>Image</H3>
      <P>
        Children fill the frame; add <InlineCode>object-cover</InlineCode> to crop images instead of stretching them, and{" "}
        <InlineCode>overflow-hidden rounded-lg</InlineCode> on the AspectRatio for rounded corners.
      </P>
      <ComponentPreview name="aspect-ratio-image" />

      <Callout tone="missing" title="Media Placeholder">
        Figma has a separate Media Placeholder for empty media. There’s no component for it yet; use a muted or gradient{" "}
        <InlineCode>div</InlineCode> inside AspectRatio, as in the examples above.
      </Callout>

      <H2>Alignment and responsive</H2>
      <P>
        The frame is as wide as its parent and its height follows the ratio, so control size with the parent’s width or a
        grid. With <InlineCode>next/image</InlineCode>, use <InlineCode>fill</InlineCode> and a{" "}
        <InlineCode>sizes</InlineCode> attribute.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "AspectRatio adds no semantics; the media inside needs its own alt text (or alt=\"\" if decorative).",
          <>Placeholder divs that stand in for meaningful media need <InlineCode>role=&quot;img&quot;</InlineCode> and an <InlineCode>aria-label</InlineCode>; decorative ones need <InlineCode>aria-hidden</InlineCode>.</>,
        ]}
      />

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "ratio", type: "number", default: "1", description: "Width divided by height, e.g. 16 / 9." },
          { name: "…props", type: 'React.ComponentProps<"div">', description: "className and div attributes, applied to the inner frame." },
        ]}
      />
    </>
  )
}
