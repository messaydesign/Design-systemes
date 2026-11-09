import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Popover" }

export default function PopoverPage() {
  return (
    <>
      <DocHeader
        slug="popover"
        title="Popover"
        description="A non-modal panel anchored to a trigger, for small interactive content — a quick setting, a short form, extra detail — without leaving the page."
      />
      <ComponentPreview name="popover-demo" />

      <H2>Installation</H2>
      <Installation item="popover" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Button } from "@/components/ui/button"
import {
  Popover, PopoverContent, PopoverDescription,
  PopoverHeader, PopoverTitle, PopoverTrigger,
} from "@/components/ui/popover"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
      <PopoverDescription>A short explanation.</PopoverDescription>
    </PopoverHeader>
    …
  </PopoverContent>
</Popover>`} />
      <P>
        The API matches shadcn/ui, including <InlineCode>PopoverHeader</InlineCode>, <InlineCode>PopoverTitle</InlineCode>{" "}
        and <InlineCode>PopoverDescription</InlineCode>. Main Brand adds <InlineCode>corner</InlineCode> on the content and
        exports <InlineCode>PopoverClose</InlineCode>.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>Popover</InlineCode> holds state · <InlineCode>PopoverTrigger</InlineCode> toggles it (or{" "}
        <InlineCode>PopoverAnchor</InlineCode> positions it against another element) ·{" "}
        <InlineCode>PopoverContent</InlineCode> is the panel · an optional <InlineCode>PopoverHeader</InlineCode> with{" "}
        <InlineCode>PopoverTitle</InlineCode> and <InlineCode>PopoverDescription</InlineCode> · your content ·{" "}
        <InlineCode>PopoverClose</InlineCode> for an explicit close action. For plain text hints use{" "}
        <Link className="underline" href="/docs/components/tooltip">Tooltip</Link>; for a list of commands use{" "}
        <Link className="underline" href="/docs/components/dropdown-menu">Dropdown Menu</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Corner</H3>
      <P>
        Figma Default, Soft and Pill map to <InlineCode>corner</InlineCode>. As in Figma, Pill keeps the 8px panel and
        rounds the controls inside it (buttons, inputs, select triggers) into pills.
      </P>
      <ComponentPreview name="popover-corner" />

      <H3>Side and alignment</H3>
      <P>
        <InlineCode>side</InlineCode> picks the edge of the trigger and <InlineCode>align</InlineCode> the alignment along it
        (<InlineCode>&quot;center&quot;</InlineCode> by default). The panel flips and shifts to stay in the viewport.
      </P>
      <ComponentPreview name="popover-side" />

      <H3>Controlled with a form</H3>
      <P>
        Control <InlineCode>open</InlineCode> to close the popover after submitting. <InlineCode>PopoverClose</InlineCode>{" "}
        wraps the cancel button.
      </P>
      <ComponentPreview name="popover-controlled" />

      <H2>Open and close</H2>
      <P>
        The trigger toggles the popover. Use <InlineCode>open</InlineCode> / <InlineCode>onOpenChange</InlineCode> to drive
        it from code and <InlineCode>PopoverClose</InlineCode> for an in-panel close button. Popovers open on click, never
        on hover — use <Link className="underline" href="/docs/components/hover-card">Hover Card</Link> for previews.
      </P>

      <H2>Focus</H2>
      <P>
        Focus moves into the panel on open (the first focusable element, or the panel itself) and returns to the trigger on
        close. Focus is not trapped: tabbing out of the panel moves on through the page and closes the popover. Pass{" "}
        <InlineCode>onOpenAutoFocus=&#123;(e) =&gt; e.preventDefault()&#125;</InlineCode> to leave focus on the trigger.
      </P>

      <H2>Dismissal</H2>
      <P>
        Escape and clicking outside close it. Use <InlineCode>onInteractOutside</InlineCode> or{" "}
        <InlineCode>onEscapeKeyDown</InlineCode> with <InlineCode>event.preventDefault()</InlineCode> sparingly — the page
        stays interactive, so an unclosable popover gets in the way.
      </P>

      <H2>Scrolling</H2>
      <P>
        The page keeps scrolling while a popover is open, and the panel follows its trigger. The panel itself doesn’t
        scroll; if content can grow, cap it with <InlineCode>max-h-(--radix-popover-content-available-height)</InlineCode>{" "}
        and <InlineCode>overflow-y-auto</InlineCode>, or use a Dialog.
      </P>

      <H2>Positioning</H2>
      <P>
        Rendered in a portal, 8px from the trigger (<InlineCode>sideOffset</InlineCode>), 400px wide by default and never
        wider than the viewport minus 2rem. Set the width with <InlineCode>className</InlineCode>. Collision handling comes
        from Radix (<InlineCode>avoidCollisions</InlineCode>, <InlineCode>collisionPadding</InlineCode>).
      </P>

      <H2>RTL</H2>
      <P>
        <InlineCode>align=&quot;start&quot;</InlineCode> / <InlineCode>&quot;end&quot;</InlineCode> follow the writing
        direction. <InlineCode>side=&quot;left&quot;</InlineCode> / <InlineCode>&quot;right&quot;</InlineCode> are physical,
        so swap them yourself when the placement should mirror.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "The trigger gets aria-expanded and aria-controls; the panel has role=dialog.",
          <>Give the panel an accessible name: add <InlineCode>aria-labelledby</InlineCode> pointing at the title, or an <InlineCode>aria-label</InlineCode>. PopoverTitle is a styled div, not a heading.</>,
          "Enter or Space on the trigger opens it; Escape closes it and returns focus to the trigger.",
          "Non-modal: content behind stays reachable, and focus is not trapped.",
          "Don’t put essential, one-time information only in a popover — it is easy to dismiss by accident.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The panel uses <InlineCode>--popover</InlineCode>, <InlineCode>--border</InlineCode> and the outer shadow with 16px
        padding and an 8px gap. Override width, padding or gap with <InlineCode>className</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Popover open / defaultOpen", type: "boolean", description: "Controlled or initial open state." },
          { name: "Popover onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
          { name: "Popover modal", type: "boolean", default: "false", description: "Trap focus and block the page (Radix)." },
          { name: "PopoverContent corner", type: '"default" | "soft" | "pill"', default: '"default"', description: "Default 8px, Soft 16px; Pill keeps the 8px panel and makes buttons and inputs inside fully rounded (Figma)." },
          { name: "PopoverContent side", type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: "Preferred edge of the trigger." },
          { name: "PopoverContent align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment along that edge." },
          { name: "PopoverContent sideOffset", type: "number", default: "8", description: "Gap from the trigger in px." },
          { name: "PopoverContent onOpenAutoFocus / onEscapeKeyDown / onInteractOutside", type: "(event) => void", description: "Radix focus and dismissal hooks." },
        ]}
      />
      <P className="mt-4">
        Every other prop passes to the matching Radix Popover primitive. Header, Title and Description are plain{" "}
        <InlineCode>div</InlineCode> / <InlineCode>p</InlineCode> elements.
      </P>
    </>
  )
}
