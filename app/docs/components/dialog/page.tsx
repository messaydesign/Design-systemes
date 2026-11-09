import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Dialog" }

export default function DialogPage() {
  return (
    <>
      <DocHeader
        slug="dialog"
        title="Dialog"
        description="A modal window for a focused task. It traps focus, dims the page behind it and returns focus to the trigger when it closes."
      />
      <ComponentPreview name="dialog-demo" />

      <H2>Installation</H2>
      <Installation item="dialog" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Button } from "@/components/ui/button"
import {
  Dialog, DialogClose, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>What this dialog is for.</DialogDescription>
    </DialogHeader>
    …
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`} />

      <H2>Composition</H2>
      <P>
        <InlineCode>Dialog</InlineCode> holds state · <InlineCode>DialogTrigger</InlineCode> opens it ·{" "}
        <InlineCode>DialogContent</InlineCode> is the panel (with overlay and close button) ·{" "}
        <InlineCode>DialogHeader</InlineCode> with <InlineCode>DialogTitle</InlineCode> and{" "}
        <InlineCode>DialogDescription</InlineCode> · your content · <InlineCode>DialogFooter</InlineCode> with actions
        (secondary first, primary last). For confirmations of destructive actions use Alert Dialog.
      </P>

      <H2>Examples</H2>
      <H3>Open and close from code</H3>
      <P>
        Control <InlineCode>open</InlineCode> when the dialog must stay open during async work. Here the dialog ignores
        dismissal while saving.
      </P>
      <ComponentPreview name="dialog-controlled" />

      <H3>Scrolling</H3>
      <P>Keep the header and footer in view by scrolling a region inside the content. Make that region focusable.</P>
      <ComponentPreview name="dialog-scroll" />

      <H3>Without the close button</H3>
      <P>
        <InlineCode>showCloseButton=&#123;false&#125;</InlineCode> hides the × when the footer already offers a clear way
        out. Escape still closes.
      </P>
      <ComponentPreview name="dialog-no-close" />

      <H2>Focus and dismissal</H2>
      <P>
        Focus moves to the first focusable element on open (use <InlineCode>onOpenAutoFocus</InlineCode> to choose another)
        and returns to the trigger on close. Escape, clicking the overlay and the close button dismiss it; prevent
        that with <InlineCode>onEscapeKeyDown</InlineCode> / <InlineCode>onPointerDownOutside</InlineCode> and{" "}
        <InlineCode>event.preventDefault()</InlineCode> only when closing would lose work.
      </P>

      <H2>Positioning</H2>
      <P>
        The panel is centred and up to 480px wide (<InlineCode>max-w-[calc(100%-2rem)]</InlineCode> on small screens).
        Change width with <InlineCode>className</InlineCode> on DialogContent. On phones consider a{" "}
        <Link className="underline" href="/docs/components/sheet">Sheet</Link> for long forms.
      </P>
      <Callout tone="missing" title="Loading and error states">
        Figma shows Dialog Loading and Error masters; there are no dedicated props. Compose them with Button{" "}
        <InlineCode>loading</InlineCode> (above) and an Alert inside the content.
      </Callout>

      <H2>RTL</H2>
      <P>The close button and footer order are logical and mirror in right-to-left layouts.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>A <InlineCode>DialogTitle</InlineCode> is required (use <InlineCode>className=&quot;sr-only&quot;</InlineCode> to hide it visually).</>,
          "role=dialog with aria-modal; content behind is inert while open.",
          "Focus is trapped inside and restored to the trigger on close.",
          "The close button has the accessible name “Close” and a 48px target.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Panel colours use <InlineCode>--surface-elevated</InlineCode> and <InlineCode>--border-subtle</InlineCode>; the
        backdrop uses <InlineCode>--overlay</InlineCode>. <InlineCode>corner=&quot;soft&quot;</InlineCode> gives 16px
        corners.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Dialog open / defaultOpen", type: "boolean", description: "Controlled or initial open state." },
          { name: "Dialog onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
          { name: "DialogContent corner", type: '"default" | "soft"', default: '"default"', description: "8px or 16px corners." },
          { name: "DialogContent showCloseButton", type: "boolean", default: "true", description: "Show the × button." },
          { name: "DialogContent onOpenAutoFocus / onEscapeKeyDown / onPointerDownOutside", type: "(event) => void", description: "Radix focus and dismissal hooks." },
        ]}
      />
    </>
  )
}
