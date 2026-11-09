import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Checkbox" }

export default function CheckboxPage() {
  return (
    <>
      <DocHeader
        slug="checkbox"
        title="Checkbox"
        description="A control for turning an option on or off, or choosing several options from a list. A 24px box inside a 48×32 touch target, with checked, indeterminate, disabled and error states."
      />
      <ComponentPreview name="checkbox-demo" />

      <H2>Installation</H2>
      <Installation item="checkbox" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

<div className="flex items-center gap-1">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`} />
      <P>
        The API matches shadcn/ui: one <InlineCode>Checkbox</InlineCode> built on Radix, controlled with{" "}
        <InlineCode>checked</InlineCode> / <InlineCode>onCheckedChange</InlineCode> or uncontrolled with{" "}
        <InlineCode>defaultChecked</InlineCode>. Main Brand adds the 48×32 touch target around the box, a neutral focus
        backplate and an error border from <InlineCode>aria-invalid</InlineCode>. Put the label after the checkbox so
        the label greys out with it when disabled.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        Place a <InlineCode>FieldLabel</InlineCode> and <InlineCode>FieldDescription</InlineCode> in{" "}
        <InlineCode>FieldContent</InlineCode> beside the checkbox (the shadcn Field pattern), and link the description
        with <InlineCode>aria-describedby</InlineCode>.
      </P>
      <ComponentPreview name="checkbox-description" />

      <H3>Indeterminate</H3>
      <P>
        Set <InlineCode>checked=&quot;indeterminate&quot;</InlineCode> on a parent checkbox when only some of its children
        are selected. The box shows a minus sign; clicking it here selects or clears everything.
      </P>
      <ComponentPreview name="checkbox-indeterminate" />

      <H3>Validation</H3>
      <P>
        Field’s <InlineCode>validation</InlineCode> colours text controls only, so set{" "}
        <InlineCode>aria-invalid</InlineCode> on the checkbox to get the error border, and show the reason in a{" "}
        <InlineCode>FieldError</InlineCode> linked with <InlineCode>aria-describedby</InlineCode>.
      </P>
      <ComponentPreview name="checkbox-validation" />

      <H3>Required, read-only and disabled</H3>
      <P>
        Figma’s selection and state matrix: unchecked, checked, indeterminate and disabled. Hover, focus and pressed are
        interactive — try them with the mouse and keyboard. <InlineCode>required</InlineCode> is passed to the hidden form
        input; there is no read-only mode (Radix doesn’t support one), so show a fixed value as text or use{" "}
        <InlineCode>disabled</InlineCode>.
      </P>
      <ComponentPreview name="checkbox-states" />

      <H3>Form integration</H3>
      <P>
        Inside a <InlineCode>&lt;form&gt;</InlineCode> each checked checkbox submits its <InlineCode>name</InlineCode> and{" "}
        <InlineCode>value</InlineCode> (default <InlineCode>&quot;on&quot;</InlineCode>), so{" "}
        <InlineCode>FormData.getAll()</InlineCode> works. Group related checkboxes in a{" "}
        <Link className="underline" href="/docs/components/field">FieldSet</Link> with a legend and validate in your app.
      </P>
      <ComponentPreview name="checkbox-form" />
      <Callout title="Checkbox group">
        There is no dedicated Checkbox Group component; compose one from <InlineCode>FieldSet</InlineCode>,{" "}
        <InlineCode>FieldLegend</InlineCode> and checkboxes as above.
      </Callout>

      <H2>RTL</H2>
      <P>The box is centred in its touch target, so it mirrors without changes; use logical spacing (<InlineCode>ps-*</InlineCode>) for nested items.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders a <InlineCode>&lt;button role=&quot;checkbox&quot;&gt;</InlineCode> with <InlineCode>aria-checked</InlineCode> (<InlineCode>&quot;mixed&quot;</InlineCode> when indeterminate). Space toggles it.</>,
          <>Always give it a visible <InlineCode>&lt;label htmlFor&gt;</InlineCode>; clicking the label toggles the checkbox.</>,
          <>A parent “select all” checkbox can point at its children with <InlineCode>aria-controls</InlineCode>.</>,
          <>Group related checkboxes in a <InlineCode>&lt;fieldset&gt;</InlineCode> with a <InlineCode>&lt;legend&gt;</InlineCode> (FieldSet + FieldLegend).</>,
          "The 48×32 root is the touch target; focus adds a neutral backplate and a brand border, and the error border is always paired with message text.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Colours are local variables set per state on the root (<InlineCode>--cb-bg</InlineCode>,{" "}
        <InlineCode>--cb-border</InlineCode>, <InlineCode>--cb-ink</InlineCode>) and map to{" "}
        <InlineCode>--brand-primary</InlineCode>, <InlineCode>--border-control</InlineCode>,{" "}
        <InlineCode>--input-surface</InlineCode>, <InlineCode>--disabled-*</InlineCode> and{" "}
        <InlineCode>--status-error-border</InlineCode>. Style the 24px box with{" "}
        <InlineCode>[data-slot=checkbox-box]</InlineCode>.
      </P>

      <H2>API reference</H2>
      <H3>Checkbox</H3>
      <PropsTable
        rows={[
          { name: "checked", type: 'boolean | "indeterminate"', description: "Controlled state." },
          { name: "defaultChecked", type: 'boolean | "indeterminate"', description: "Initial state when uncontrolled." },
          { name: "onCheckedChange", type: '(checked: boolean | "indeterminate") => void', description: "Called when the state changes." },
          { name: "disabled", type: "boolean", default: "false", description: "Disabled colours; not focusable or submitted." },
          { name: "required", type: "boolean", default: "false", description: "Passed to the hidden form input." },
          { name: "name / value", type: "string", default: 'value: "on"', description: "Submitted with the form when checked." },
          { name: "aria-invalid", type: "boolean", description: "Error border (Main Brand)." },
        ]}
      />
      <P>Remaining props pass through to the Radix <InlineCode>Checkbox.Root</InlineCode> button.</P>
    </>
  )
}
