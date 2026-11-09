import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Empty" }

export default function EmptyPage() {
  return (
    <>
      <DocHeader
        slug="empty"
        title="Empty"
        description="Fills a space that has no content yet — first use, no search results or a failed load — and offers the next step."
      />
      <ComponentPreview name="empty-demo" />

      <H2>Installation</H2>
      <Installation item="empty" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">…</EmptyMedia>
    <EmptyTitle>No projects yet</EmptyTitle>
    <EmptyDescription>Create a project to get started.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>…</EmptyContent>
</Empty>`}
      />
      <P>
        Same parts as shadcn/ui. Say why the space is empty and what to do next. Don’t show an empty state while data is
        still loading — use Skeleton until you know.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>EmptyHeader</InlineCode> groups <InlineCode>EmptyMedia</InlineCode>, <InlineCode>EmptyTitle</InlineCode>{" "}
        and <InlineCode>EmptyDescription</InlineCode> (max 400px wide); <InlineCode>EmptyContent</InlineCode> holds the
        actions. You can also place the parts directly in <InlineCode>Empty</InlineCode> without a header; the spacing is
        the same.
      </P>

      <H2>Examples</H2>
      <H3>Filtered</H3>
      <P>When search or filters return nothing, repeat the query and offer to clear the filters.</P>
      <ComponentPreview name="empty-filtered" />

      <H3>Error</H3>
      <P>
        When loading fails, say so plainly and offer a retry. Add <InlineCode>role=&quot;alert&quot;</InlineCode> when it
        replaces content after a request.
      </P>
      <ComponentPreview name="empty-error" />

      <H3>Media</H3>
      <P>
        <InlineCode>EmptyMedia variant=&quot;default&quot;</InlineCode> is the bare 32px Figma icon;{" "}
        <InlineCode>variant=&quot;icon&quot;</InlineCode> puts a 24px icon on a 48px muted tile, as in shadcn.
      </P>
      <ComponentPreview name="empty-media" />

      <H2>Status</H2>
      <P>
        The three Figma states — Default (first use), Filtered and Error — share one component; the copy, icon and action
        change. Keep the recovery action explicit: “Create project”, “Clear filters”, “Try again”.
      </P>

      <H2>Live regions</H2>
      <P>
        Empty isn’t a live region. If it appears after a user action (a search, a filter), announce the result with a{" "}
        <InlineCode>role=&quot;status&quot;</InlineCode> message such as “No results”; for errors use{" "}
        <InlineCode>role=&quot;alert&quot;</InlineCode> on the Empty.
      </P>

      <H2>Motion</H2>
      <P>Empty has no animation.</P>

      <H2>Spacing and responsive</H2>
      <P>
        32px padding and 16px between parts, centred inside a 1px border. It fills its container’s width and actions wrap
        onto new lines on narrow screens. Remove the border with <InlineCode>border-0</InlineCode> when the surrounding
        card already has one.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "Icons are decorative; the title carries the meaning.",
          <>EmptyTitle is a <InlineCode>div</InlineCode>; render a heading inside it when the empty state stands in for a page section.</>,
          "Links in EmptyDescription are underlined so they don’t rely on colour.",
          "After clearing filters or retrying, move focus to the new content or announce the result.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Uses <InlineCode>--border</InlineCode>, <InlineCode>--background</InlineCode>, <InlineCode>--muted</InlineCode>{" "}
        and <InlineCode>--muted-foreground</InlineCode>. Colour the media for an error with{" "}
        <InlineCode>text-[var(--status-error-text)]</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        caption="EmptyMedia props"
        rows={[
          { name: "variant", type: '"default" | "icon"', default: '"default"', description: "Bare 32px icon, or 24px icon on a 48px muted tile." },
        ]}
      />
      <PropsTable
        caption="Parts"
        rows={[
          { name: "Empty", type: 'React.ComponentProps<"div">', description: "Bordered, centred container." },
          { name: "EmptyHeader", type: 'React.ComponentProps<"div">', description: "Groups media, title and description; max 400px." },
          { name: "EmptyTitle", type: 'React.ComponentProps<"div">', description: "SemiBold title." },
          { name: "EmptyDescription", type: 'React.ComponentProps<"p">', description: "Muted text; links are underlined." },
          { name: "EmptyContent", type: 'React.ComponentProps<"div">', description: "Centred, wrapping row for actions." },
        ]}
      />
      <P>
        Also exported: <InlineCode>emptyMediaVariants(&#123; variant &#125;)</InlineCode>.
      </P>
    </>
  )
}
