import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Spinner" }

export default function SpinnerPage() {
  return (
    <>
      <DocHeader
        slug="spinner"
        title="Spinner"
        description="A small rotating indicator for short waits, such as a saving button or a syncing badge."
      />
      <ComponentPreview name="spinner-demo" />

      <H2>Installation</H2>
      <Installation item="spinner" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Spinner } from "@/components/ui/spinner"

<Spinner />`}
      />
      <P>
        Like shadcn/ui, Spinner is a single svg that takes svg props, so <InlineCode>className=&quot;size-8&quot;</InlineCode>{" "}
        works unchanged. Main Brand adds <InlineCode>size</InlineCode> for the Figma 16/24/32 sizes and{" "}
        <InlineCode>label</InlineCode> for the accessible name. For buttons, prefer Button’s{" "}
        <InlineCode>loading</InlineCode> prop, which adds a spinner for you.
      </P>

      <H2>Examples</H2>
      <H3>Sizes</H3>
      <P>
        <InlineCode>sm</InlineCode> 16px, default 24px and <InlineCode>lg</InlineCode> 32px; any other size with{" "}
        <InlineCode>className</InlineCode>.
      </P>
      <ComponentPreview name="spinner-sizes" />

      <H3>Colour</H3>
      <P>The spinner uses <InlineCode>currentColor</InlineCode>, so it follows the surrounding text, or any text-* utility.</P>
      <ComponentPreview name="spinner-color" />

      <H3>In context</H3>
      <P>Inside a button or badge, keep the visible text and give the spinner a matching label.</P>
      <ComponentPreview name="spinner-in-context" />

      <H2>Status</H2>
      <P>
        Use a spinner for waits of a few seconds where you can’t show progress. For longer tasks with a known total use{" "}
        <InlineCode>Progress</InlineCode>; for loading page content use <InlineCode>Skeleton</InlineCode>.
      </P>

      <H2>Live regions</H2>
      <P>
        The svg has <InlineCode>role=&quot;status&quot;</InlineCode> and <InlineCode>aria-label</InlineCode> (“Loading”
        by default). Make the label specific (“Saving draft”). When the wait ends, remove the spinner and announce the
        result in text — a removed spinner says nothing on its own.
      </P>

      <H2>Motion</H2>
      <P>
        The spinner rotates only when <InlineCode>motion-safe</InlineCode>; with reduced motion it shows a still arc, so
        pair it with visible text like “Loading…”.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <><InlineCode>role=&quot;status&quot;</InlineCode> with an <InlineCode>aria-label</InlineCode> from <InlineCode>label</InlineCode>; don’t also add a second live region with the same text.</>,
          "If visible text next to the spinner says the same thing, hide that text with aria-hidden (as in the first example) or keep only one of them announced.",
          <>Set <InlineCode>aria-busy</InlineCode> on the region that is updating.</>,
          "Rotation stops when reduced motion is preferred.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The shape is <InlineCode>SpinnerIcon</InlineCode> from <InlineCode>components/ui/icons.tsx</InlineCode>; its stroke
        stays 1.8px at every size. Change colour with <InlineCode>text-*</InlineCode> utilities.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "Main Brand: 16, 24 or 32px." },
          { name: "label", type: "string", default: '"Loading"', description: "Main Brand: accessible name (aria-label)." },
          { name: "…props", type: 'Omit<React.ComponentProps<"svg">, "children">', description: "className and svg attributes, as in shadcn." },
        ]}
      />
    </>
  )
}
