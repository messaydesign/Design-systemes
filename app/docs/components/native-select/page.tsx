import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Native Select" }

export default function NativeSelectPage() {
  return (
    <>
      <DocHeader
        slug="native-select"
        title="Native Select"
        description="A real <select> styled like the Select control. It uses the platform picker, so it’s the better choice on mobile and for long, simple lists."
      />
      <ComponentPreview name="native-select-demo" />

      <H2>Installation</H2>
      <Installation item="native-select" />

      <H2>Usage</H2>
      <CodeBlock code={`import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

<NativeSelect defaultValue="todo" aria-label="Status">
  <NativeSelectOption value="todo">To do</NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
</NativeSelect>`} />

      <H2>Composition</H2>
      <P>
        Same parts as shadcn/ui: <InlineCode>NativeSelect</InlineCode> (the <InlineCode>&lt;select&gt;</InlineCode> with
        its chevron) · <InlineCode>NativeSelectOption</InlineCode> · <InlineCode>NativeSelectOptGroup</InlineCode>. Like
        shadcn, <InlineCode>size</InlineCode> is <InlineCode>&quot;sm&quot; | &quot;default&quot;</InlineCode> instead of
        the native numeric attribute. Main Brand extra: <InlineCode>shape</InlineCode>. Need search, icons or custom
        option layouts? Use <Link className="underline" href="/docs/components/select">Select</Link>.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        Wrap it in Field with a <InlineCode>FieldLabel</InlineCode> and <InlineCode>FieldMessage</InlineCode>, and set{" "}
        <InlineCode>autoComplete</InlineCode> where it applies (here <InlineCode>country</InlineCode>).
      </P>
      <ComponentPreview name="native-select-field" />

      <H3>Option groups</H3>
      <P><InlineCode>NativeSelectOptGroup label</InlineCode> renders a native <InlineCode>&lt;optgroup&gt;</InlineCode> heading.</P>
      <ComponentPreview name="native-select-groups" />

      <H3>Validation</H3>
      <P>
        Field’s <InlineCode>validation</InlineCode> colours the border for error, warning and success. Errors also need{" "}
        <InlineCode>aria-invalid</InlineCode>. A disabled empty first option works as a placeholder that can’t be
        re-selected.
      </P>
      <ComponentPreview name="native-select-validation" />

      <H3>Required, read-only and disabled</H3>
      <P>
        Native <InlineCode>required</InlineCode> and <InlineCode>disabled</InlineCode>, on the select or on single
        options. <InlineCode>&lt;select&gt;</InlineCode> has no read-only attribute — disable it, or show the value as text
        with a hidden input if it must be submitted.
      </P>
      <ComponentPreview name="native-select-states" />

      <H3>Shape</H3>
      <P>Figma “Shape”: 8px corners (default) or Rounded (pill with 16px start padding).</P>
      <ComponentPreview name="native-select-shape" />

      <H3>Form integration</H3>
      <P>
        Give it a <InlineCode>name</InlineCode>; the value submits like any native select. Validate in your app and move
        focus to the select on error.
      </P>
      <ComponentPreview name="native-select-form" />
      <Callout title="Small size">
        <InlineCode>size=&quot;sm&quot;</InlineCode> is accepted for shadcn compatibility, but Figma has one 32px control
        height, so both sizes render at 32px.
      </Callout>

      <H2>RTL</H2>
      <P>Padding and the chevron use logical properties, so the chevron moves to the left in RTL.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "It’s a real <select>: keyboard, screen-reader and mobile pickers work as users expect.",
          <>Give it a visible <InlineCode>&lt;label htmlFor&gt;</InlineCode>; the chevron is decorative.</>,
          <>Link helper and error text with <InlineCode>aria-describedby</InlineCode>.</>,
          "Validation colours are always backed by message text with an icon.",
          "Text is 16px on small screens so iOS doesn’t zoom on focus.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Uses the same tokens as Input: <InlineCode>--input-surface</InlineCode>,{" "}
        <InlineCode>--input-outline-hover</InlineCode>, <InlineCode>--input-outline-focus</InlineCode>,{" "}
        <InlineCode>--status-error-border</InlineCode> and <InlineCode>--radius-input-pill</InlineCode>. The open option
        list is drawn by the browser and can’t be styled reliably.
      </P>

      <H2>API reference</H2>
      <H3>NativeSelect</H3>
      <PropsTable
        rows={[
          { name: "shape", type: '"default" | "rounded"', default: '"default"', description: "8px corners or pill (Main Brand)." },
          { name: "size", type: '"sm" | "default"', default: '"default"', description: "shadcn size; both are 32px today. Replaces the native numeric size." },
          { name: "aria-invalid", type: "boolean", description: "Error border. Field also sets the border colour." },
          { name: "…props", type: 'Omit<React.ComponentProps<"select">, "size">', description: "All other native select attributes, on the <select>." },
        ]}
      />
      <P>
        <InlineCode>className</InlineCode> styles the <InlineCode>&lt;select&gt;</InlineCode>, not the wrapper.{" "}
        <InlineCode>NativeSelectOption</InlineCode> and <InlineCode>NativeSelectOptGroup</InlineCode> pass all props to
        the native <InlineCode>&lt;option&gt;</InlineCode> and <InlineCode>&lt;optgroup&gt;</InlineCode>.
      </P>
    </>
  )
}
