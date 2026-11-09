import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Label" }

export default function LabelPage() {
  return (
    <>
      <DocHeader
        slug="label"
        title="Label"
        description="An accessible name for a form control. Medium 14 text that greys out with a disabled control or Field."
      />
      <ComponentPreview name="label-demo" />

      <H2>Installation</H2>
      <Installation item="label" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Label } from "@/components/ui/label"

<Label htmlFor="email">Email</Label>`} />
      <P>
        The API matches shadcn/ui: a Radix <InlineCode>Label</InlineCode> (a native{" "}
        <InlineCode>&lt;label&gt;</InlineCode> that doesn’t select text on double-click). In forms you usually use{" "}
        <Link className="underline" href="/docs/components/field">FieldLabel</Link>, which is this Label plus Figma’s
        Required / Optional text.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        Figma’s field label has a right-aligned requirement. Use <InlineCode>FieldLabel requirement</InlineCode> for
        “Required” or “Optional”, and put helper text in <InlineCode>FieldMessage</InlineCode> rather than in the label.
      </P>
      <ComponentPreview name="label-requirement" />

      <H3>With a checkbox</H3>
      <P>
        Put the label after a Checkbox, Radio or Switch: they carry the <InlineCode>peer</InlineCode> class, so the label
        picks up the disabled colour when the control is disabled.
      </P>
      <ComponentPreview name="label-checkbox" />

      <H3>Validation</H3>
      <P>
        Labels keep their colour in every validation state; the control border and the message show the status. See{" "}
        <Link className="underline" href="/docs/components/field#validation">Field validation</Link>.
      </P>

      <H3>Required, read-only and disabled</H3>
      <P>
        Inside <InlineCode>Field disabled</InlineCode> the label uses the disabled text colour. “Required” is text, not an
        asterisk; also set <InlineCode>required</InlineCode> on the control so it’s announced.
      </P>
      <ComponentPreview name="label-disabled" />

      <H3>Form integration</H3>
      <P>
        Always pass <InlineCode>htmlFor</InlineCode> with the control’s <InlineCode>id</InlineCode> (or wrap the control
        inside the label). Clicking the label then focuses or toggles the control.
      </P>

      <H2>RTL</H2>
      <P>The label is a flex row with logical gaps; in FieldLabel the requirement moves to the left edge in RTL.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders a native <InlineCode>&lt;label&gt;</InlineCode>; connect it with <InlineCode>htmlFor</InlineCode> so it becomes the control’s accessible name.</>,
          "Keep labels visible and short; don’t replace them with placeholders.",
          <>For controls that aren’t labelable (a Slider thumb, a group of radios) use <InlineCode>aria-label</InlineCode>, <InlineCode>aria-labelledby</InlineCode> or a <InlineCode>&lt;legend&gt;</InlineCode> instead.</>,
          "Write “Required” / “Optional” as text so it’s read out.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Text uses <InlineCode>--foreground</InlineCode> and <InlineCode>--disabled-text</InlineCode> with the Figma
        “Forms/Label” type style (Medium 14/24). Add icons as children — the label is a flex row with an 8px gap.
      </P>

      <H2>API reference</H2>
      <H3>Label</H3>
      <PropsTable
        rows={[
          { name: "htmlFor", type: "string", description: "The id of the control this label names." },
          { name: "…props", type: "React.ComponentProps<typeof LabelPrimitive.Root>", description: "Passed to the Radix Label (a native label)." },
        ]}
      />
    </>
  )
}
