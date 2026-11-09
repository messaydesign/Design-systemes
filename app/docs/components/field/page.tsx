import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Field" }

export default function FieldPage() {
  return (
    <>
      <DocHeader
        slug="field"
        title="Field"
        description="Lays out a form control with its label, description, helper text and status message, and passes validation colour to the control."
      />
      <ComponentPreview name="field-demo" />

      <H2>Installation</H2>
      <Installation item="field" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Field, FieldControl, FieldLabel, FieldMessage } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

<Field validation="error">
  <FieldLabel htmlFor="email" requirement="Required">Email</FieldLabel>
  <FieldControl>
    <Input id="email" aria-invalid aria-describedby="email-msg" />
  </FieldControl>
  <FieldMessage id="email-msg">Enter a valid email address.</FieldMessage>
</Field>`} />

      <H2>Composition</H2>
      <P>
        <InlineCode>Field</InlineCode> wraps one control · <InlineCode>FieldLabel</InlineCode> (with an optional
        right-aligned <InlineCode>requirement</InlineCode>) · <InlineCode>FieldDescription</InlineCode> above the control ·{" "}
        <InlineCode>FieldControl</InlineCode> reserves Figma’s 48px touch height around 32px controls ·{" "}
        <InlineCode>FieldMessage</InlineCode> below for helper or status text · <InlineCode>FieldCounter</InlineCode> for
        character limits. Group fields with <InlineCode>FieldGroup</InlineCode> and name a group with{" "}
        <InlineCode>FieldSet</InlineCode> + <InlineCode>FieldLegend</InlineCode>.
      </P>

      <H2>Examples</H2>
      <H3>Validation</H3>
      <P>
        <InlineCode>validation</InlineCode> colours the control’s border (Input, Textarea, Select, Native Select, Input
        Group) and sets the message’s status and icon. Add <InlineCode>aria-invalid</InlineCode> to the control for errors.
      </P>
      <ComponentPreview name="field-validation" align="start" />

      <H3>FieldMessage or FieldError?</H3>
      <P>
        Use <InlineCode>FieldMessage</InlineCode>: it follows the Field’s validation, so one element switches between helper
        text and the error. <InlineCode>FieldError</InlineCode> is the same component fixed to the error status, kept for
        shadcn compatibility. Pass <InlineCode>status</InlineCode> to show info, success or warning messages without
        changing the control.
      </P>
      <ComponentPreview name="field-message-status" align="start" />

      <H3>Horizontal</H3>
      <P>Label beside the control, for dense settings forms. Give labels a fixed width so controls line up.</P>
      <ComponentPreview name="field-horizontal" />

      <H3>Field set and groups</H3>
      <P>
        A real <InlineCode>&lt;fieldset&gt;</InlineCode> names related fields for screen readers.{" "}
        <InlineCode>FieldGroup orientation=&quot;horizontal&quot;</InlineCode> puts fields side by side and stacks them below
        640px.
      </P>
      <ComponentPreview name="field-set" align="start" />

      <H3>Character counter</H3>
      <ComponentPreview name="field-counter" />

      <H3>Form integration</H3>
      <P>
        Field holds no rules. Validate in your app, then set <InlineCode>validation</InlineCode> and the message — see the{" "}
        <Link className="underline" href="/docs/components/input#form-integration">Input form example</Link>.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Field renders <InlineCode>role=&quot;group&quot;</InlineCode>; FieldLabel is a real <InlineCode>&lt;label&gt;</InlineCode> — always pass <InlineCode>htmlFor</InlineCode>.</>,
          <>Connect description, message and counter to the control with <InlineCode>aria-describedby</InlineCode>.</>,
          <>Error messages render with <InlineCode>role=&quot;alert&quot;</InlineCode>, so they’re announced when they appear.</>,
          "Status messages always pair colour with an icon and text.",
          <>FieldCounter is <InlineCode>aria-live=&quot;polite&quot;</InlineCode>.</>,
        ]}
      />

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Field validation", type: '"none" | "error" | "warning" | "success"', default: '"none"', description: "Colours child controls; default status for FieldMessage." },
          { name: "Field orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Label above or beside the control." },
          { name: "Field disabled", type: "boolean", description: "Sets data-disabled for styling; disable the control itself too." },
          { name: "FieldLabel requirement", type: "ReactNode", description: "Right-aligned “Required” / “Optional”." },
          { name: "FieldMessage status", type: '"helper" | "info" | "success" | "warning" | "error"', description: "Overrides the Field’s validation. Renders nothing without children." },
          { name: "FieldCounter value / max", type: "number", description: "Shows “value / max”; error colour above max." },
          { name: "FieldCounter disabled", type: "boolean", description: "Disabled text colour." },
          { name: "FieldGroup orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "24px gap; horizontal stacks below 640px." },
        ]}
      />
    </>
  )
}
