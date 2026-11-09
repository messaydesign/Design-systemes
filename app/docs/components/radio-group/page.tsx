import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Radio Group" }

export default function RadioGroupPage() {
  return (
    <>
      <DocHeader
        slug="radio-group"
        title="Radio Group"
        description="A set of options where exactly one can be selected. 24px circles inside 48×32 touch targets, with arrow-key navigation, vertical or horizontal layout and error states."
      />
      <ComponentPreview name="radio-group-demo" />

      <H2>Installation</H2>
      <Installation item="radio-group" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="comfortable" aria-label="Row density">
  <div className="flex items-center gap-1">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-1">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`} />

      <H2>Composition</H2>
      <P>
        Same parts as shadcn/ui: <InlineCode>RadioGroup</InlineCode> holds the value and layout ·{" "}
        <InlineCode>RadioGroupItem</InlineCode> is one option, paired with its own <InlineCode>Label</InlineCode>. Main
        Brand extras: the group lays itself out (column, or a wrapping row with{" "}
        <InlineCode>orientation=&quot;horizontal&quot;</InlineCode>), items have a 48×32 touch target, and{" "}
        <InlineCode>aria-invalid</InlineCode> gives the error border.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        Name the group with a <InlineCode>FieldSet</InlineCode> and <InlineCode>FieldLegend</InlineCode>, describe it
        with <InlineCode>FieldDescription</InlineCode>, and give each option its own hint through{" "}
        <InlineCode>aria-describedby</InlineCode>.
      </P>
      <ComponentPreview name="radio-group-fieldset" />

      <H3>Horizontal</H3>
      <P>
        <InlineCode>orientation=&quot;horizontal&quot;</InlineCode> lays items out in a row that wraps, 16px apart, and
        makes Left/Right the arrow keys. Use it for two or three short options.
      </P>
      <ComponentPreview name="radio-group-horizontal" />

      <H3>Choice card</H3>
      <P>
        Wrap a horizontal <InlineCode>Field</InlineCode> in <InlineCode>FieldLabel</InlineCode> to make the whole card
        clickable; the card gets the brand border and subtle fill when its item is checked (shadcn’s choice-card pattern).
      </P>
      <ComponentPreview name="radio-group-choice-card" />

      <H3>Validation</H3>
      <P>
        Field’s <InlineCode>validation</InlineCode> doesn’t reach radio items, so set{" "}
        <InlineCode>aria-invalid</InlineCode> on each <InlineCode>RadioGroupItem</InlineCode> for the error border and on
        the group for assistive tech, and link a <InlineCode>FieldError</InlineCode> with{" "}
        <InlineCode>aria-describedby</InlineCode>.
      </P>
      <ComponentPreview name="radio-group-validation" />

      <H3>Required, read-only and disabled</H3>
      <P>
        <InlineCode>disabled</InlineCode> works on one item (skipped by the arrow keys) or the whole group.{" "}
        <InlineCode>required</InlineCode> on the group is passed to the hidden form inputs. There is no read-only mode;
        disable the group or show the value as text.
      </P>
      <ComponentPreview name="radio-group-disabled" />

      <H3>Form integration</H3>
      <P>
        Give the group a <InlineCode>name</InlineCode> and it submits the selected value with the form. Validate in your
        app — here on submit — and move focus to the group when nothing is selected.
      </P>
      <ComponentPreview name="radio-group-form" />

      <H2>RTL</H2>
      <P>
        Radix reads the document direction (or a <InlineCode>dir</InlineCode> prop), so Left/Right follow the reading
        order in horizontal groups; the layout uses logical gaps.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>The group has <InlineCode>role=&quot;radiogroup&quot;</InlineCode>; each item is a <InlineCode>role=&quot;radio&quot;</InlineCode> button with <InlineCode>aria-checked</InlineCode>.</>,
          "Tab moves into the group to the selected (or first) item; arrow keys move and select; Tab leaves the group.",
          <>Name the group with a <InlineCode>&lt;legend&gt;</InlineCode> (FieldSet + FieldLegend) or <InlineCode>aria-label</InlineCode>, and every item with a <InlineCode>&lt;label htmlFor&gt;</InlineCode>.</>,
          "The 48×32 item is the touch target; focus adds a neutral backplate and a brand border.",
          "Errors are shown as text, not only as the red border.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Item colours are local variables (<InlineCode>--rb-bg</InlineCode>, <InlineCode>--rb-border</InlineCode>,{" "}
        <InlineCode>--rb-dot</InlineCode>) mapped to <InlineCode>--brand-primary</InlineCode>,{" "}
        <InlineCode>--border-control</InlineCode>, <InlineCode>--input-surface</InlineCode> and the{" "}
        <InlineCode>--disabled-*</InlineCode> tokens. Override the group gap with <InlineCode>className</InlineCode> (e.g.{" "}
        <InlineCode>gap-y-0</InlineCode> for dense lists).
      </P>

      <H2>API reference</H2>
      <H3>RadioGroup</H3>
      <PropsTable
        rows={[
          { name: "value / defaultValue", type: "string", description: "Selected value (controlled / uncontrolled)." },
          { name: "onValueChange", type: "(value: string) => void", description: "Called when the selection changes." },
          { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Column, or a wrapping row; also sets the arrow keys." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables every item." },
          { name: "required", type: "boolean", default: "false", description: "Passed to the hidden form inputs." },
          { name: "name", type: "string", description: "Form field name for the selected value." },
          { name: "loop", type: "boolean", default: "true", description: "Arrow keys wrap from last to first." },
        ]}
      />
      <H3>RadioGroupItem</H3>
      <PropsTable
        rows={[
          { name: "value", type: "string", description: "Required. The value this item selects." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables this item only." },
          { name: "aria-invalid", type: "boolean", description: "Error border (Main Brand)." },
        ]}
      />
      <P>Remaining props pass through to the Radix <InlineCode>RadioGroup.Root</InlineCode> and <InlineCode>RadioGroup.Item</InlineCode>.</P>
    </>
  )
}
