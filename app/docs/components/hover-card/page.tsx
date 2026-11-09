import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Hover Card" }

export default function HoverCardPage() {
  return (
    <>
      <DocHeader
        slug="hover-card"
        title="Hover Card"
        description="A preview of what’s behind a link, shown when a pointer hovers or keyboard focus lands on it. Supplementary only: everything in it must also exist at the destination."
      />
      <ComponentPreview name="hover-card-demo" />

      <H2>Installation</H2>
      <Installation item="hover-card" />

      <H2>Usage</H2>
      <CodeBlock code={`import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/people/dana">@dana</a>
  </HoverCardTrigger>
  <HoverCardContent>
    Dana Lee · Product designer
  </HoverCardContent>
</HoverCard>`} />
      <P>The API matches shadcn/ui: the same three parts, with the panel sized and spaced to the Figma master.</P>

      <H2>Composition</H2>
      <P>
        <InlineCode>HoverCard</InlineCode> holds state and timing · <InlineCode>HoverCardTrigger</InlineCode> is the link
        (use <InlineCode>asChild</InlineCode> on an <InlineCode>a</InlineCode> or Next.js <InlineCode>Link</InlineCode>) ·{" "}
        <InlineCode>HoverCardContent</InlineCode> is the panel. Put non-interactive preview content inside — an avatar,
        name, summary or metadata. For interactive content use a{" "}
        <Link className="underline" href="/docs/components/popover">Popover</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Side</H3>
      <P>
        <InlineCode>side</InlineCode> picks the preferred edge (<InlineCode>bottom</InlineCode> by default); the card flips
        when there isn’t room.
      </P>
      <ComponentPreview name="hover-card-side" />

      <H3>Delay</H3>
      <P>
        <InlineCode>openDelay</InlineCode> (default 700ms) avoids flashing cards while the pointer passes over links;{" "}
        <InlineCode>closeDelay</InlineCode> (default 300ms) gives the pointer time to move into the card. Here both are
        tuned for a file link.
      </P>
      <ComponentPreview name="hover-card-delay" />

      <H2>Open and close</H2>
      <P>
        Opens after <InlineCode>openDelay</InlineCode> on hover or when the trigger receives keyboard focus; closes after{" "}
        <InlineCode>closeDelay</InlineCode> once pointer and focus have left both trigger and card. Clicking the trigger
        follows the link. <InlineCode>open</InlineCode> / <InlineCode>onOpenChange</InlineCode> control it from code.
      </P>

      <H2>Focus</H2>
      <P>
        Focus stays on the trigger; the card never takes it. Keep links and buttons out of the card — keyboard users can’t
        reach them reliably.
      </P>

      <H2>Dismissal</H2>
      <P>Escape closes it, as does moving the pointer away or moving focus off the trigger.</P>

      <H2>Scrolling</H2>
      <P>The card doesn’t scroll. Keep the preview to a few lines; link to the full page for more.</P>

      <H2>Positioning</H2>
      <P>
        Rendered in a portal, 8px from the trigger (<InlineCode>sideOffset</InlineCode>), centred on it
        (<InlineCode>align</InlineCode>), 368px wide and never wider than the viewport minus 2rem.
      </P>

      <H2>RTL</H2>
      <P>
        <InlineCode>align=&quot;start&quot;</InlineCode> / <InlineCode>&quot;end&quot;</InlineCode> follow the writing
        direction; <InlineCode>side=&quot;left&quot;</InlineCode> / <InlineCode>&quot;right&quot;</InlineCode> are physical.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "The card is not announced by screen readers and is not available on touch devices — treat it as a visual enhancement.",
          "The trigger must be a real link with a meaningful name; its destination holds the same information.",
          "Opens on keyboard focus as well as hover; Escape closes it.",
          "Don’t put interactive elements inside the card.",
          "Decorative icons in the trigger or card should be aria-hidden.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The panel uses <InlineCode>--popover</InlineCode> and <InlineCode>--border</InlineCode> with 16px padding and an
        8px gap; it has no shadow. Change the width with <InlineCode>className</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "HoverCard open / defaultOpen", type: "boolean", description: "Controlled or initial open state." },
          { name: "HoverCard onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
          { name: "HoverCard openDelay", type: "number", default: "700", description: "Delay before opening, in ms." },
          { name: "HoverCard closeDelay", type: "number", default: "300", description: "Delay before closing, in ms." },
          { name: "HoverCardContent side", type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: "Preferred edge of the trigger." },
          { name: "HoverCardContent align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment along that edge." },
          { name: "HoverCardContent sideOffset", type: "number", default: "8", description: "Gap from the trigger in px." },
        ]}
      />
      <P className="mt-4">Every other prop passes to the matching Radix Hover Card primitive.</P>
    </>
  )
}
