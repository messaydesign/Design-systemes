import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Alert Dialog" }

export default function AlertDialogPage() {
  return (
    <>
      <DocHeader
        slug="alert-dialog"
        title="Alert Dialog"
        description="A modal confirmation that interrupts the user and waits for an answer. Unlike Dialog it has no close button and does not close when you click outside."
      />
      <ComponentPreview name="alert-dialog-demo" />

      <H2>Installation</H2>
      <Installation item="alert-dialog" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Button } from "@/components/ui/button"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete this item?</AlertDialogTitle>
      <AlertDialogDescription>This can’t be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`} />
      <P>
        The API matches shadcn/ui, including <InlineCode>size</InlineCode> on the content and{" "}
        <InlineCode>AlertDialogMedia</InlineCode>. Main Brand adds <InlineCode>corner</InlineCode> on the content, and{" "}
        <InlineCode>variant</InlineCode> / <InlineCode>size</InlineCode> / <InlineCode>corner</InlineCode> on Action and
        Cancel so they take any Button face. Action defaults to <InlineCode>destructive</InlineCode>, Cancel to{" "}
        <InlineCode>outline</InlineCode>.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>AlertDialog</InlineCode> holds state · <InlineCode>AlertDialogTrigger</InlineCode> opens it ·{" "}
        <InlineCode>AlertDialogContent</InlineCode> is the panel with its overlay ·{" "}
        <InlineCode>AlertDialogHeader</InlineCode> with an optional <InlineCode>AlertDialogMedia</InlineCode>,{" "}
        <InlineCode>AlertDialogTitle</InlineCode> and <InlineCode>AlertDialogDescription</InlineCode> ·{" "}
        <InlineCode>AlertDialogFooter</InlineCode> with <InlineCode>AlertDialogCancel</InlineCode> first and{" "}
        <InlineCode>AlertDialogAction</InlineCode> last. For anything other than a yes/no decision, use a{" "}
        <Link className="underline" href="/docs/components/dialog">Dialog</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Small</H3>
      <P>
        <InlineCode>size=&quot;sm&quot;</InlineCode> gives a 320px panel with a centred header and two equal-width buttons —
        good for short questions on phones. Here the action is not destructive, so it uses{" "}
        <InlineCode>variant=&quot;default&quot;</InlineCode>.
      </P>
      <ComponentPreview name="alert-dialog-small" />

      <H3>With media</H3>
      <P>
        <InlineCode>AlertDialogMedia</InlineCode> is a 64px muted tile for an icon or illustration. From 640px up it sits
        beside the title and description; below that it stacks above them.
      </P>
      <ComponentPreview name="alert-dialog-media" />

      <H3>Loading and error</H3>
      <P>
        <InlineCode>AlertDialogAction</InlineCode> closes the dialog on click. When the action is async, control{" "}
        <InlineCode>open</InlineCode>, use a plain Button with <InlineCode>loading</InlineCode>, ignore{" "}
        <InlineCode>onOpenChange</InlineCode> while pending, and show failures in an Alert inside the content. The first
        attempt in this example fails on purpose.
      </P>
      <ComponentPreview name="alert-dialog-async" />

      <H2>Open and close</H2>
      <P>
        Uncontrolled by default: the trigger opens it, Action and Cancel close it. Pass{" "}
        <InlineCode>open</InlineCode> and <InlineCode>onOpenChange</InlineCode> to open it from code (for example after a
        failed save) or to keep it open during async work.
      </P>

      <H2>Focus</H2>
      <P>
        On open, focus moves to <InlineCode>AlertDialogCancel</InlineCode>, the safe choice, so pressing Enter by accident
        never confirms a destructive action. Focus is trapped while open and returns to the trigger on close.
      </P>

      <H2>Dismissal</H2>
      <P>
        Escape and Cancel close it. Clicking the overlay does not, and there is no × button: the user must choose. Use{" "}
        <InlineCode>onEscapeKeyDown</InlineCode> with <InlineCode>event.preventDefault()</InlineCode> only while a
        request is running.
      </P>

      <H2>Scrolling</H2>
      <P>
        The panel is capped at <InlineCode>100dvh − 2rem</InlineCode> and scrolls as a whole when content is too tall. An
        alert dialog should never need to scroll; if it does, the message is too long.
      </P>

      <H2>Positioning</H2>
      <P>
        Centred in the viewport, up to 480px wide (320px with <InlineCode>size=&quot;sm&quot;</InlineCode>) and{" "}
        <InlineCode>calc(100% − 2rem)</InlineCode> on small screens. Override the width with{" "}
        <InlineCode>className</InlineCode> on AlertDialogContent.
      </P>
      <Callout tone="missing" title="Loading and Error props">
        Figma has Alert Dialog Loading and Error masters, but the component has no dedicated props. Compose them as in the
        example above: Button <InlineCode>loading</InlineCode> plus an Alert in the content.
      </Callout>

      <H2>RTL</H2>
      <P>
        Padding, the media column and the footer order use logical properties, so the layout mirrors in right-to-left
        documents and the actions stay at the end.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>role=alertdialog with aria-modal; <InlineCode>AlertDialogTitle</InlineCode> labels it and <InlineCode>AlertDialogDescription</InlineCode> describes it — both are required.</>,
          "Content behind the dialog is inert while it is open; focus is trapped inside.",
          "Initial focus goes to Cancel; Tab and Shift+Tab cycle between the buttons; Escape cancels.",
          "Focus returns to the trigger when the dialog closes.",
          "Write button labels that say what happens (“Delete project”), not “Yes” / “OK”.",
          "Decorative icons in AlertDialogMedia should be aria-hidden.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The panel uses <InlineCode>--popover</InlineCode> and <InlineCode>--border</InlineCode> with the outer shadow; the
        backdrop uses <InlineCode>--overlay</InlineCode>. <InlineCode>corner=&quot;soft&quot;</InlineCode> gives 16px
        corners. Action and Cancel accept any Button <InlineCode>variant</InlineCode>, <InlineCode>size</InlineCode> and{" "}
        <InlineCode>corner</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "AlertDialog open / defaultOpen", type: "boolean", description: "Controlled or initial open state." },
          { name: "AlertDialog onOpenChange", type: "(open: boolean) => void", description: "Called when it opens or closes." },
          { name: "AlertDialogContent size", type: '"default" | "sm"', default: '"default"', description: "480px panel, or 320px with a centred header and a two-column footer." },
          { name: "AlertDialogContent corner", type: '"default" | "soft"', default: '"default"', description: "8px or 16px corners (Main Brand)." },
          { name: "AlertDialogContent onOpenAutoFocus / onEscapeKeyDown", type: "(event) => void", description: "Radix focus and dismissal hooks." },
          { name: "AlertDialogAction variant", type: "Button variant", default: '"destructive"', description: "Button face for the confirming action." },
          { name: "AlertDialogCancel variant", type: "Button variant", default: '"outline"', description: "Button face for the cancel action." },
          { name: "AlertDialogAction / Cancel size, corner", type: "Button size / corner", default: '"default"', description: "Button size and corner (Main Brand)." },
          { name: "AlertDialogMedia", type: "div props", description: "64px muted tile for an icon (svg sized to 32px)." },
        ]}
      />
      <P className="mt-4">
        Every other prop passes to the matching Radix Alert Dialog primitive. Header and Footer are plain{" "}
        <InlineCode>div</InlineCode>s.
      </P>
    </>
  )
}
