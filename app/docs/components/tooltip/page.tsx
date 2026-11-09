import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Tooltip" }

export default function TooltipPage() {
  return (
    <>
      <DocHeader
        slug="tooltip"
        title="Tooltip"
        description="A short text label that appears on hover or keyboard focus. Use it to name icon-only controls or add a one-line hint — never for essential or interactive content."
      />
      <ComponentPreview name="tooltip-demo" />

      <H2>Installation</H2>
      <Installation item="tooltip" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon" aria-label="Add">
      <PlusIcon />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Add</TooltipContent>
</Tooltip>`} />
      <P>
        The API matches shadcn/ui: each <InlineCode>Tooltip</InlineCode> includes its own{" "}
        <InlineCode>TooltipProvider</InlineCode>, so no app-level provider is required. The Main Brand provider defaults to a
        300ms delay (Radix: 700ms).
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>Tooltip</InlineCode> holds state · <InlineCode>TooltipTrigger</InlineCode> (usually{" "}
        <InlineCode>asChild</InlineCode> on a button) · <InlineCode>TooltipContent</InlineCode> is the bubble with its arrow.
        Content is text only; for links, buttons or rich content use a{" "}
        <Link className="underline" href="/docs/components/popover">Popover</Link> or{" "}
        <Link className="underline" href="/docs/components/hover-card">Hover Card</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Side</H3>
      <P>
        <InlineCode>side</InlineCode> picks the preferred edge; the tooltip flips when there isn’t room. Figma Start and End
        correspond to <InlineCode>left</InlineCode> and <InlineCode>right</InlineCode> in left-to-right layouts.
      </P>
      <ComponentPreview name="tooltip-side" />

      <H3>Longer hint</H3>
      <P>
        Text wraps at 192px. A tooltip next to a label can explain a term; keep it to one sentence.
      </P>
      <ComponentPreview name="tooltip-long" />

      <H3>Disabled trigger</H3>
      <P>
        Disabled buttons don’t receive pointer or focus events. Wrap them in a focusable <InlineCode>span</InlineCode> so
        the tooltip can explain why the action is unavailable. <InlineCode>delayDuration=&#123;0&#125;</InlineCode> on the
        Tooltip shows it immediately.
      </P>
      <ComponentPreview name="tooltip-disabled" />

      <H2>Open and close</H2>
      <P>
        Opens after <InlineCode>delayDuration</InlineCode> on hover and immediately on keyboard focus; closes when the
        pointer leaves or focus moves. Control it with <InlineCode>open</InlineCode> / <InlineCode>onOpenChange</InlineCode>{" "}
        only for tours or tests — never make a tooltip the only way to reach information.
      </P>

      <H2>Focus</H2>
      <P>
        The tooltip never takes focus and has no focusable content; focus stays on the trigger. The trigger must itself be
        focusable (a button or link) so keyboard users can open it.
      </P>

      <H2>Dismissal</H2>
      <P>
        Escape closes it without moving focus, as do pointer down and scrolling the page. The pointer can move onto the
        bubble without closing it (hoverable content, WCAG 1.4.13); set{" "}
        <InlineCode>disableHoverableContent</InlineCode> on the provider to turn that off.
      </P>

      <H2>Scrolling</H2>
      <P>Tooltips don’t scroll. If the text needs scrolling it doesn’t belong in a tooltip.</P>

      <H2>Positioning</H2>
      <P>
        Rendered in a portal, 4px from the trigger (<InlineCode>sideOffset</InlineCode>) with a 12×6px arrow, up to 208px
        wide including 8px padding. Use <InlineCode>align</InlineCode> to align it to the start or end of the trigger.
      </P>
      <Callout tone="missing" title="Logical Start / End sides">
        Figma names the sides Top, Bottom, Start and End. <InlineCode>side</InlineCode> only accepts the physical{" "}
        <InlineCode>&quot;left&quot;</InlineCode> / <InlineCode>&quot;right&quot;</InlineCode>, so they don’t mirror in RTL by
        themselves.
      </Callout>

      <H2>RTL</H2>
      <P>
        <InlineCode>align=&quot;start&quot;</InlineCode> / <InlineCode>&quot;end&quot;</InlineCode> follow the writing
        direction. Swap <InlineCode>left</InlineCode> and <InlineCode>right</InlineCode> yourself for right-to-left layouts.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "The bubble has role=tooltip and is linked to the trigger with aria-describedby while open.",
          <>Icon-only triggers still need their own <InlineCode>aria-label</InlineCode>; the tooltip describes, it doesn’t name.</>,
          "Opens on keyboard focus as well as hover; Escape closes it.",
          "Content stays visible while the pointer is over it and until dismissed (WCAG 1.4.13).",
          "Not shown on touch devices — don’t hide essential information in a tooltip.",
          "Colours are inverse (dark on light, light on dark) in both themes, so the bubble stands out from page surfaces.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The bubble uses <InlineCode>--tooltip-background</InlineCode> and <InlineCode>--tooltip-text</InlineCode>; the arrow
        follows the background. Change the maximum width with <InlineCode>className</InlineCode> (for example{" "}
        <InlineCode>max-w-64</InlineCode>).
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Tooltip open / defaultOpen", type: "boolean", description: "Controlled or initial open state." },
          { name: "Tooltip onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
          { name: "Tooltip delayDuration", type: "number", default: "300", description: "Hover delay in ms (inherits the provider value)." },
          { name: "TooltipProvider delayDuration", type: "number", default: "300", description: "Default delay for tooltips under this provider (Main Brand default)." },
          { name: "TooltipContent side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Preferred edge of the trigger." },
          { name: "TooltipContent align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment along that edge." },
          { name: "TooltipContent sideOffset", type: "number", default: "4", description: "Gap from the trigger in px." },
        ]}
      />
      <P className="mt-4">
        Every other prop passes to the matching Radix Tooltip primitive. Because each Tooltip wraps its own provider,
        settings on an outer <InlineCode>TooltipProvider</InlineCode> are overridden; set{" "}
        <InlineCode>delayDuration</InlineCode> on the Tooltip itself.
      </P>
    </>
  )
}
