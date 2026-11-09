import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Alert" }

export default function AlertPage() {
  return (
    <>
      <DocHeader
        slug="alert"
        title="Alert"
        description="A short, persistent message in the page: neutral, info, success, warning or error, in a tinted or outline style."
      />
      <ComponentPreview name="alert-demo" />

      <H2>Installation</H2>
      <Installation item="alert" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

<Alert variant="warning">
  <AlertTitle>Storage almost full</AlertTitle>
  <AlertDescription>Free up space or upgrade your plan.</AlertDescription>
</Alert>`}
      />
      <P>
        Use an alert for information about the current page that should stay visible until the situation changes. For
        brief confirmations use a toast; for decisions that block the flow use an{" "}
        <Link className="underline" href="/docs/components/alert-dialog">Alert Dialog</Link>.
      </P>
      <Callout title="shadcn/ui compatible">
        <InlineCode>variant=&quot;default&quot;</InlineCode> and <InlineCode>&quot;destructive&quot;</InlineCode> work as in
        shadcn, including passing an icon as the first child. Main Brand adds the <InlineCode>info</InlineCode>,{" "}
        <InlineCode>success</InlineCode> and <InlineCode>warning</InlineCode> variants, automatic status icons, the{" "}
        <InlineCode>appearance</InlineCode> prop and the <InlineCode>icon</InlineCode> prop.
      </Callout>

      <H2>Composition</H2>
      <P>
        An alert is a two-column grid: a 16px icon column (only when an svg is present) and the text column holding{" "}
        <InlineCode>AlertTitle</InlineCode>, <InlineCode>AlertDescription</InlineCode> and any actions, 8px apart. Keep the
        title to a few words and put the detail in the description.
      </P>

      <H2>Examples</H2>
      <H3>Variants</H3>
      <P>
        Figma Info, Success, Warning and Error map to <InlineCode>info</InlineCode>, <InlineCode>success</InlineCode>,{" "}
        <InlineCode>warning</InlineCode> and <InlineCode>destructive</InlineCode>; each shows its status icon
        automatically. <InlineCode>default</InlineCode> is neutral and shows no icon unless you pass one.
      </P>
      <ComponentPreview name="alert-variants" />

      <H3>Outline</H3>
      <P>
        <InlineCode>appearance=&quot;outline&quot;</InlineCode> keeps the status border and text colour on the page
        background — useful inside cards or when several alerts stack.
      </P>
      <ComponentPreview name="alert-outline" />

      <H3>Custom icon</H3>
      <P>
        <InlineCode>icon</InlineCode> replaces the status icon; <InlineCode>icon=&#123;null&#125;</InlineCode> hides it.
        Alternatively pass an svg as the first child, shadcn style, on the default variant.
      </P>
      <ComponentPreview name="alert-icon" />

      <H3>With actions</H3>
      <P>Buttons go after the description, in the text column. Keep to one primary action.</P>
      <ComponentPreview name="alert-action" />

      <H2>Status</H2>
      <P>
        Pick the variant from what happened, not how urgent it should look: success after a completed action, warning
        when something needs attention soon, destructive when something failed or data is at risk. The icon and title
        carry the meaning, so it isn’t conveyed by colour alone.
      </P>

      <H2>Live regions</H2>
      <P>
        <InlineCode>destructive</InlineCode> alerts render <InlineCode>role=&quot;alert&quot;</InlineCode> (assertive);
        every other variant renders <InlineCode>role=&quot;status&quot;</InlineCode> (polite). Screen readers announce an
        alert when it is <em>added</em> to the page, so render the container conditionally after an event. For alerts that
        are part of the initial page content, pass <InlineCode>role=&#123;undefined&#125;</InlineCode> or another role to
        override.
      </P>

      <H2>Motion</H2>
      <P>Alerts don’t animate. If you add an entrance animation, wrap it in <InlineCode>motion-safe:</InlineCode>.</P>

      <H2>RTL</H2>
      <P>The icon column sits at the inline start and text is start-aligned, so both mirror in right-to-left layouts.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Destructive alerts are <InlineCode>role=&quot;alert&quot;</InlineCode>; the others are <InlineCode>role=&quot;status&quot;</InlineCode>. Don’t put the same message in a second live region.</>,
          "Status icons are aria-hidden; the title must say what happened (“Couldn’t save changes”, not “Error”).",
          "Status text colours meet 4.5:1 contrast on both the tinted and outline backgrounds.",
          "Don’t auto-dismiss alerts; if one can be closed, give the close button an aria-label and move focus sensibly.",
          "For form errors, link each message to its field and consider a validation summary.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Colours come from the <InlineCode>--status-&#123;info,success,warning,error&#125;-&#123;border,background,text&#125;</InlineCode>{" "}
        tokens. Add a variant by extending <InlineCode>alertVariants</InlineCode> and the <InlineCode>icons</InlineCode> map
        in <InlineCode>components/ui/alert.tsx</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        caption="Alert props"
        rows={[
          { name: "variant", type: '"default" | "info" | "success" | "warning" | "destructive"', default: '"default"', description: "Status. destructive is Figma “Error”; default is neutral with no automatic icon." },
          { name: "appearance", type: '"default" | "outline"', default: '"default"', description: "Main Brand: tinted background or page background with status border." },
          { name: "icon", type: "React.ReactNode", description: "Main Brand: replace the status icon; null hides it." },
          { name: "role", type: "string", default: '"alert" (destructive) | "status"', description: "Live-region role; override for static alerts." },
          { name: "…props", type: 'React.ComponentProps<"div">', description: "className and div attributes." },
        ]}
      />
      <PropsTable
        caption="Parts"
        rows={[
          { name: "AlertTitle", type: 'React.ComponentProps<"div">', description: "SemiBold title." },
          { name: "AlertDescription", type: 'React.ComponentProps<"div">', description: "Regular body text; may hold paragraphs and links." },
        ]}
      />
      <P>
        Also exported: <InlineCode>alertVariants(&#123; variant, appearance &#125;)</InlineCode>.
      </P>
    </>
  )
}
