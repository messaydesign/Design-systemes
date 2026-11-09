import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Badge" }

export default function BadgePage() {
  return (
    <>
      <DocHeader
        slug="badge"
        title="Badge"
        description="A small 24px label for a status, category or count. Not interactive unless rendered as a link."
      />
      <ComponentPreview name="badge-demo" />

      <H2>Installation</H2>
      <Installation item="badge" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Badge } from "@/components/ui/badge"

<Badge variant="secondary">Draft</Badge>`} />

      <H2>Examples</H2>
      <H3>Variants</H3>
      <P>
        Default uses the brand colour — keep it for the most important label in a view. Destructive marks problems.
        Icons go before the text and are 16px.
      </P>
      <ComponentPreview name="badge-variants" />
      <H3>As a link</H3>
      <P>
        With <InlineCode>asChild</InlineCode> a badge can be a filter or tag link. Add hover and focus styles, as here,
        because badges have none by default.
      </P>
      <ComponentPreview name="badge-link" />

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "Badge text must make sense on its own — colour alone doesn’t convey status.",
          "Counts need context for screen readers, e.g. “3 unread” rather than “3”.",
          "Badges are not focusable; only linked badges join the tab order.",
        ]}
      />

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "variant", type: '"default" | "secondary" | "outline" | "destructive"', default: '"default"', description: "Brand, neutral, bordered or error." },
          { name: "asChild", type: "boolean", default: "false", description: "Render the child (e.g. a link) with badge styles." },
          { name: "…props", type: 'React.ComponentProps<"span">', description: "Native span attributes." },
        ]}
      />
      <P>
        Also exported: <InlineCode>badgeVariants(&#123; variant &#125;)</InlineCode>. The Figma “Badge / Status” tones
        (neutral, success, warning, info) are not built yet.
      </P>
    </>
  )
}
