import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Textarea" }

export default function TextareaPage() {
  return (
    <>
      <DocHeader
        slug="textarea"
        title="Textarea"
        description="A multi-line text control. Same states and tokens as Input — hover, focus, read-only, disabled and validation — with a 120px default height that the user can resize."
      />
      <ComponentPreview name="textarea-demo" />

      <H2>Installation</H2>
      <Installation item="textarea" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here." />`} />
      <P>
        A styled native <InlineCode>&lt;textarea&gt;</InlineCode>, as in shadcn/ui. Main Brand adds{" "}
        <InlineCode>shape</InlineCode> and the warning / success borders. Give it a visible label with{" "}
        <Link className="underline" href="/docs/components/field">Field</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        <InlineCode>FieldLabel</InlineCode> with a <InlineCode>requirement</InlineCode>, helper text in{" "}
        <InlineCode>FieldMessage</InlineCode> and a <InlineCode>FieldCounter</InlineCode> for the character limit. Both
        are linked with <InlineCode>aria-describedby</InlineCode>; going over the limit switches the Field to error.
      </P>
      <ComponentPreview name="textarea-field" />

      <H3>Validation</H3>
      <P>
        <InlineCode>validation</InlineCode> on Field colours the border and gives the message its icon. Errors also need{" "}
        <InlineCode>aria-invalid</InlineCode> on the textarea. Without Field, use <InlineCode>aria-invalid</InlineCode> or{" "}
        <InlineCode>data-validation=&quot;warning&quot; | &quot;success&quot;</InlineCode>.
      </P>
      <ComponentPreview name="textarea-validation" />

      <H3>Required, read-only and disabled</H3>
      <P>
        Native <InlineCode>required</InlineCode>, <InlineCode>readOnly</InlineCode> (muted fill, still focusable and
        copyable) and <InlineCode>disabled</InlineCode>. <InlineCode>Field disabled</InlineCode> greys out the label too.
        Shorten the default height with a class such as <InlineCode>min-h-20</InlineCode>.
      </P>
      <ComponentPreview name="textarea-states" />

      <H3>Shape</H3>
      <P>Figma “Shape”: 8px corners (default) or Rounded, which uses the 24px multiline radius rather than a pill.</P>
      <ComponentPreview name="textarea-shape" />

      <H3>Form integration</H3>
      <P>
        The component holds no rules. Validate in your app (here on submit), reflect the result through Field, and move
        focus to the textarea on error.
      </P>
      <ComponentPreview name="textarea-form" />

      <H2>RTL</H2>
      <P>Padding and text alignment are logical; text direction follows the document or a <InlineCode>dir</InlineCode> attribute. The resize handle moves to the left corner in RTL.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Pair every textarea with a <InlineCode>&lt;label&gt;</InlineCode> (FieldLabel); placeholders are not labels.</>,
          <>Link helper, error and counter text with <InlineCode>aria-describedby</InlineCode>; FieldCounter is <InlineCode>aria-live=&quot;polite&quot;</InlineCode> and errors are announced.</>,
          "Prefer a soft limit with a counter over maxLength, which silently cuts pasted text.",
          "Focus changes the outline to the brand colour; validation colours are always backed by message text.",
          "Text is 16px on small screens so iOS doesn’t zoom on focus.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Colours come from <InlineCode>--input-surface</InlineCode>, <InlineCode>--input-outline-hover</InlineCode>,{" "}
        <InlineCode>--input-outline-focus</InlineCode>, <InlineCode>--input-placeholder</InlineCode> and the{" "}
        <InlineCode>--status-*</InlineCode> tokens; the rounded shape uses <InlineCode>--radius-input-multiline</InlineCode>.
        Add variants by extending <InlineCode>textareaVariants</InlineCode>; turn off resizing with{" "}
        <InlineCode>resize-none</InlineCode>.
      </P>

      <H2>API reference</H2>
      <H3>Textarea</H3>
      <PropsTable
        rows={[
          { name: "shape", type: '"default" | "rounded"', default: '"default"', description: "8px corners or the 24px multiline radius." },
          { name: "aria-invalid", type: "boolean", description: "Error border. Field also sets the border colour." },
          { name: "data-validation", type: '"warning" | "success"', description: "Warning or success border without Field." },
          { name: "…props", type: 'React.ComponentProps<"textarea">', description: "All native textarea attributes (rows, maxLength, readOnly…)." },
        ]}
      />
    </>
  )
}
