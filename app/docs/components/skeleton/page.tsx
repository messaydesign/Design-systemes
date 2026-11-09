import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Skeleton" }

export default function SkeletonPage() {
  return (
    <>
      <DocHeader
        slug="skeleton"
        title="Skeleton"
        description="Neutral placeholder shapes that hold the layout of content while it loads."
      />
      <ComponentPreview name="skeleton-demo" />

      <H2>Installation</H2>
      <Installation item="skeleton" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-4 w-48" />`}
      />
      <P>
        Same API as shadcn/ui: size and shape each block with <InlineCode>className</InlineCode>. Match the real layout
        closely so nothing jumps when content arrives. For short waits or actions, use a{" "}
        <InlineCode>Spinner</InlineCode> instead.
      </P>

      <H2>Examples</H2>
      <H3>Text</H3>
      <P>One block per line at the text’s line height; make the last line shorter.</P>
      <ComponentPreview name="skeleton-text" />

      <H3>Avatar</H3>
      <P>Use <InlineCode>rounded-full</InlineCode> and the avatar’s size for circular media.</P>
      <ComponentPreview name="skeleton-avatar" />

      <H3>Card</H3>
      <P>Skeletons can sit inside real containers such as Card, so only the content is a placeholder.</P>
      <ComponentPreview name="skeleton-card" />

      <H2>Status</H2>
      <P>
        Show skeletons only while loading. If loading fails, replace them with an error message (see{" "}
        <InlineCode>Empty</InlineCode> or <InlineCode>Alert</InlineCode>); if there’s no data, show an empty state.
      </P>

      <H2>Live regions</H2>
      <P>
        Each Skeleton is <InlineCode>aria-hidden</InlineCode>. Put <InlineCode>aria-busy=&quot;true&quot;</InlineCode> and a
        label on the region that is loading (as in the examples), then remove <InlineCode>aria-busy</InlineCode> when the
        content is in.
      </P>

      <H2>Motion</H2>
      <P>Blocks pulse with <InlineCode>animate-pulse</InlineCode>; the pulse is removed when reduced motion is preferred.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "Skeletons are hidden from assistive technology; label the loading region instead.",
          <>Use <InlineCode>aria-busy</InlineCode> on the container so screen readers wait for the final content.</>,
          "Don’t make skeletons focusable or interactive.",
          "The pulse respects prefers-reduced-motion.",
        ]}
      />

      <H2>Customization</H2>
      <P>Colour comes from <InlineCode>--skeleton</InlineCode> (light and dark). The default radius is 8px.</P>

      <H2>API reference</H2>
      <PropsTable
        rows={[{ name: "…props", type: 'React.ComponentProps<"div">', description: "Set size and shape with className." }]}
      />
    </>
  )
}
