import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Collapsible" }

export default function CollapsiblePage() {
  return (
    <>
      <DocHeader
        slug="collapsible"
        title="Collapsible"
        description="A single panel that a trigger shows or hides. Unstyled Radix Collapsible, composed with a Button and your own content."
      />
      <ComponentPreview name="collapsible-demo" />

      <H2>Installation</H2>
      <Installation item="collapsible" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

<Collapsible>
  <CollapsibleTrigger>Show more</CollapsibleTrigger>
  <CollapsibleContent>Extra content.</CollapsibleContent>
</Collapsible>`}
      />
      <P>
        Use Collapsible for one optional section, such as “Advanced settings” or the rest of a list. For several related
        sections use <Link className="underline" href="/docs/components/accordion">Accordion</Link>. The API is the same
        as shadcn/ui.
      </P>

      <H2>Composition</H2>
      <P>
        The parts carry no styles. Following Figma, render the trigger as an outline or ghost{" "}
        <InlineCode>Button</InlineCode> with <InlineCode>asChild</InlineCode> and a <InlineCode>ChevronDownIcon</InlineCode>{" "}
        that rotates on <InlineCode>[data-state=open]</InlineCode>, and stack the content with an 8px gap.
      </P>

      <H2>Examples</H2>
      <H3>Closed and open</H3>
      <P>Uncontrolled: the first row stays visible and the trigger reveals the rest. Use <InlineCode>defaultOpen</InlineCode> to start open.</P>
      <ComponentPreview name="collapsible-demo" />

      <H3>Controlled</H3>
      <P>
        <InlineCode>open</InlineCode> and <InlineCode>onOpenChange</InlineCode> let you keep the state, for example to
        remember it between visits.
      </P>
      <ComponentPreview name="collapsible-controlled" />

      <H2>Alignment and spacing</H2>
      <P>
        Use <InlineCode>flex flex-col gap-2</InlineCode> on the root for the Figma 8px rhythm. Put the trigger next to the
        heading it controls, at the inline end, so it’s clear what opens.
      </P>

      <H2>Responsive</H2>
      <P>Collapsible content is a good way to keep secondary detail out of the way on small screens; on wide screens consider showing it open by default.</P>

      <H2>RTL</H2>
      <P>No directional styles; the layout you compose follows the document direction.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>The trigger gets <InlineCode>aria-expanded</InlineCode> and <InlineCode>aria-controls</InlineCode>; Space and Enter toggle it.</>,
          "Give the trigger a visible label that says what it reveals (“Details”, “Advanced settings”), not just a chevron. Icon-only triggers need an aria-label.",
          "Closed content is unmounted, so it isn’t read or focusable.",
          "Add motion-reduce:transition-none to any chevron or height animation you add.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Style each part with <InlineCode>className</InlineCode>. To animate height, use the{" "}
        <InlineCode>--radix-collapsible-content-height</InlineCode> variable on <InlineCode>CollapsibleContent</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        caption="Collapsible props"
        rows={[
          { name: "open", type: "boolean", description: "Controlled open state." },
          { name: "defaultOpen", type: "boolean", default: "false", description: "Initial open state when uncontrolled." },
          { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when the trigger toggles." },
          { name: "disabled", type: "boolean", default: "false", description: "Prevent toggling." },
        ]}
      />
      <PropsTable
        caption="Parts"
        rows={[
          { name: "CollapsibleTrigger asChild", type: "boolean", default: "false", description: "Render your Button as the trigger." },
          { name: "CollapsibleContent forceMount", type: "true", description: "Keep content mounted while closed." },
        ]}
      />
    </>
  )
}
