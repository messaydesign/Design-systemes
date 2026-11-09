import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Sheet" }

export default function SheetPage() {
  return (
    <>
      <DocHeader
        slug="sheet"
        title="Sheet"
        description="A modal panel that slides in from an edge of the screen. Use it for side tasks — filters, details, editing — that should keep the page in context."
      />
      <ComponentPreview name="sheet-demo" />

      <H2>Installation</H2>
      <Installation item="sheet" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Button } from "@/components/ui/button"
import {
  Sheet, SheetClose, SheetContent, SheetDescription,
  SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent side="end">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>What this panel is for.</SheetDescription>
    </SheetHeader>
    …
    <SheetFooter>
      <SheetClose asChild><Button variant="outline">Cancel</Button></SheetClose>
      <Button>Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`} />
      <P>
        The API matches shadcn/ui: <InlineCode>right</InlineCode>, <InlineCode>left</InlineCode>,{" "}
        <InlineCode>top</InlineCode> and <InlineCode>bottom</InlineCode> work as in shadcn. Main Brand adds the logical
        sides <InlineCode>start</InlineCode> / <InlineCode>end</InlineCode> (the default) that mirror in RTL, plus{" "}
        <InlineCode>corner</InlineCode>, <InlineCode>showCloseButton</InlineCode> and <InlineCode>closeLabel</InlineCode>.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>Sheet</InlineCode> holds state · <InlineCode>SheetTrigger</InlineCode> opens it ·{" "}
        <InlineCode>SheetContent</InlineCode> is the panel (with overlay and close button) ·{" "}
        <InlineCode>SheetHeader</InlineCode> with <InlineCode>SheetTitle</InlineCode> and{" "}
        <InlineCode>SheetDescription</InlineCode> · your content · <InlineCode>SheetFooter</InlineCode> with actions.
        Add <InlineCode>className=&quot;mt-auto&quot;</InlineCode> to the footer to pin it to the bottom of a side sheet.
      </P>

      <H2>Examples</H2>
      <H3>Side</H3>
      <P>
        Figma Trailing and Leading map to <InlineCode>side=&quot;end&quot;</InlineCode> and{" "}
        <InlineCode>side=&quot;start&quot;</InlineCode>. Top and bottom sheets span the full width and are capped at 80% of
        the viewport height.
      </P>
      <ComponentPreview name="sheet-side" />

      <H3>Navigation</H3>
      <P>
        A leading sheet holds navigation on small screens. Narrow it with <InlineCode>className</InlineCode>, rename the
        close button with <InlineCode>closeLabel</InlineCode> and use <InlineCode>corner=&quot;soft&quot;</InlineCode> for
        16px corners.
      </P>
      <ComponentPreview name="sheet-navigation" />

      <H3>Fixed header and footer</H3>
      <P>
        Long content scrolls in its own region so the header and footer stay in view. Make the region focusable so
        keyboard users can scroll it.
      </P>
      <ComponentPreview name="sheet-scroll" />

      <H2>Open and close</H2>
      <P>
        The trigger opens it; <InlineCode>SheetClose</InlineCode> and the × close it. Control{" "}
        <InlineCode>open</InlineCode> / <InlineCode>onOpenChange</InlineCode> to open it from code or keep it open while
        saving, exactly as with <Link className="underline" href="/docs/components/dialog">Dialog</Link>.
      </P>

      <H2>Focus</H2>
      <P>
        Focus moves into the panel on open (to the first focusable element; change it with{" "}
        <InlineCode>onOpenAutoFocus</InlineCode>), is trapped while open and returns to the trigger on close.
      </P>

      <H2>Dismissal</H2>
      <P>
        Escape, clicking the overlay and the close button dismiss it. Prevent dismissal with{" "}
        <InlineCode>onEscapeKeyDown</InlineCode> / <InlineCode>onPointerDownOutside</InlineCode> and{" "}
        <InlineCode>event.preventDefault()</InlineCode> only when closing would lose work.{" "}
        <InlineCode>showCloseButton=&#123;false&#125;</InlineCode> hides the × when the footer has a clear way out.
      </P>

      <H2>Scrolling</H2>
      <P>
        By default the whole panel scrolls (<InlineCode>overflow-y-auto</InlineCode>). For a fixed header and footer, add{" "}
        <InlineCode>overflow-hidden</InlineCode> to the content and scroll an inner region, as in the example above.
      </P>

      <H2>Positioning</H2>
      <P>
        Start and end sheets are full height and up to 480px wide (full width on phones). Top and bottom sheets are full
        width and up to <InlineCode>80dvh</InlineCode> tall. Every side keeps all four corners rounded and the close
        button 24px from the top and inline end. The panel has no enter/exit transition.
      </P>

      <H2>RTL</H2>
      <P>
        <InlineCode>start</InlineCode> and <InlineCode>end</InlineCode> follow the writing direction: an end sheet opens on
        the left in right-to-left layouts. The close button sits at the inline end. <InlineCode>left</InlineCode> /{" "}
        <InlineCode>right</InlineCode> stay physical.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>role=dialog with aria-modal; a <InlineCode>SheetTitle</InlineCode> is required (hide it with <InlineCode>className=&quot;sr-only&quot;</InlineCode> if needed).</>,
          "Content behind the sheet is inert while open; focus is trapped inside.",
          "Escape closes; focus returns to the trigger.",
          <>The close button is a 48px icon button named by <InlineCode>closeLabel</InlineCode> (“Close sheet” by default).</>,
          "Wrap navigation inside a sheet in a labelled <nav> and mark the current page with aria-current.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The panel uses <InlineCode>--popover</InlineCode>, <InlineCode>--border</InlineCode> and the outer shadow; the
        backdrop uses <InlineCode>--overlay</InlineCode>. Change the width with <InlineCode>className</InlineCode> (for
        example <InlineCode>max-w-80</InlineCode>).
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Sheet open / defaultOpen", type: "boolean", description: "Controlled or initial open state." },
          { name: "Sheet onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
          { name: "SheetContent side", type: '"end" | "start" | "right" | "left" | "top" | "bottom"', default: '"end"', description: "Edge the panel attaches to. start/end are logical (Main Brand); the rest match shadcn." },
          { name: "SheetContent corner", type: '"default" | "soft"', default: '"default"', description: "8px or 16px corners." },
          { name: "SheetContent showCloseButton", type: "boolean", default: "true", description: "Show the × button." },
          { name: "SheetContent closeLabel", type: "string", default: '"Close sheet"', description: "Accessible name of the × button." },
          { name: "SheetContent onOpenAutoFocus / onEscapeKeyDown / onPointerDownOutside", type: "(event) => void", description: "Radix focus and dismissal hooks." },
        ]}
      />
      <P className="mt-4">
        Sheet is built on the Radix Dialog primitive; every other prop passes through to it. Header and Footer are plain{" "}
        <InlineCode>div</InlineCode>s.
      </P>
    </>
  )
}
