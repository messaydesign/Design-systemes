import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Input" }

export default function InputPage() {
  return (
    <>
      <DocHeader
        slug="input"
        title="Input"
        description="A single-line text control. Compact 32px face inside a 48px touch area, with hover, focus, read-only, disabled and validation states."
      />
      <ComponentPreview name="input-demo" />

      <H2>Installation</H2>
      <Installation item="input" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Input } from "@/components/ui/input"

<Input type="email" placeholder="name@example.com" />`} />
      <P>
        Always give an input a visible label. Wrap it in <Link className="underline" href="#label-and-helper-text">Field</Link>{" "}
        to get the label, helper text, validation colours and the 48px control area from Figma.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        <InlineCode>FieldLabel</InlineCode> shows a right-aligned <InlineCode>requirement</InlineCode> (“Required” or
        “Optional”); <InlineCode>FieldMessage</InlineCode> is helper text. Link them with{" "}
        <InlineCode>aria-describedby</InlineCode>.
      </P>
      <ComponentPreview name="input-field" />

      <H3>Validation</H3>
      <P>
        Set <InlineCode>validation</InlineCode> on Field to colour the control and give the message its status icon. Errors
        also need <InlineCode>aria-invalid</InlineCode> on the input. Messages always pair colour with text and an icon.
      </P>
      <ComponentPreview name="input-validation" />

      <H3>Required, read-only and disabled</H3>
      <P>
        Use native <InlineCode>required</InlineCode>, <InlineCode>readOnly</InlineCode> and{" "}
        <InlineCode>disabled</InlineCode>. Read-only values stay focusable and copyable; disabled ones don’t submit.
      </P>
      <ComponentPreview name="input-states" />

      <H3>Shape</H3>
      <P>Figma “Shape”: 8px corners (default) or Rounded (pill).</P>
      <ComponentPreview name="input-shape" />

      <H3>Form integration</H3>
      <P>
        The component holds no validation rules. Validate in your app (here on submit), then reflect the result through
        Field. On error, move focus to the first invalid field.
      </P>
      <ComponentPreview name="input-form" />
      <Callout title="Add-ons, search and password controls">
        Prefixes, icons and inline buttons use <InlineCode>Input Group</InlineCode>; it is built but not documented yet —
        see the <Link className="underline" href="/docs/playground/forms/more">playground</Link>.
      </Callout>
      <Callout tone="missing" title="Comfortable 48px density">
        Figma’s optional 48px control density is not implemented; inputs are always Compact 32px.
      </Callout>

      <H2>RTL</H2>
      <P>Padding and text alignment are logical; text direction follows the document or a <InlineCode>dir</InlineCode> attribute.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Pair every input with a <InlineCode>&lt;label&gt;</InlineCode> (FieldLabel); placeholders are not labels.</>,
          <>Set <InlineCode>type</InlineCode> and <InlineCode>autoComplete</InlineCode> so browsers and password managers can help.</>,
          <>Link helper and error text with <InlineCode>aria-describedby</InlineCode>; error messages are announced (role=&quot;alert&quot;).</>,
          "Focus changes the outline to the brand colour; validation colours are always backed by message text.",
          "The Field control area reserves a 48px touch height around the 32px face.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Colours come from <InlineCode>--input-surface</InlineCode>, <InlineCode>--input-outline</InlineCode>,{" "}
        <InlineCode>--input-outline-focus</InlineCode> and the <InlineCode>--status-*</InlineCode> tokens. Add sizes or
        shapes by extending <InlineCode>inputVariants</InlineCode>.
      </P>

      <H2>API reference</H2>
      <H3>Input</H3>
      <PropsTable
        rows={[
          { name: "shape", type: '"default" | "rounded"', default: '"default"', description: "8px corners or pill." },
          { name: "aria-invalid", type: "boolean", description: "Error border. Field also sets the border colour." },
          { name: "data-validation", type: '"warning" | "success"', description: "Warning or success border without Field." },
          { name: "…props", type: 'React.ComponentProps<"input">', description: "All native input attributes." },
        ]}
      />
      <H3>Field</H3>
      <PropsTable
        rows={[
          { name: "validation", type: '"none" | "error" | "warning" | "success"', default: '"none"', description: "Colours child controls and sets FieldMessage status." },
          { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Label above or beside the control." },
          { name: "FieldLabel requirement", type: "ReactNode", description: "Right-aligned “Required” / “Optional” text." },
          { name: "FieldMessage status", type: '"helper" | "info" | "success" | "warning" | "error"', description: "Defaults to the Field’s validation." },
        ]}
      />
    </>
  )
}
