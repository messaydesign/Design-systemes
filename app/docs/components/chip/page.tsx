import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Chip" }

export default function ChipPage() {
  return (
    <>
      <DocHeader
        slug="chip"
        title="Chip"
        description="A compact item that shows a selected value, tag or filter, with an optional remove button. 32px high, with hover, focus, pressed and disabled states."
      />
      <ComponentPreview name="chip-demo" />

      <H2>Installation</H2>
      <Installation item="chip" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Chip } from "@/components/ui/chip"

<Chip onRemove={() => removeTag("design")}>Design</Chip>`} />
      <P>
        Chip is a Main Brand component (there’s no shadcn/ui equivalent). It’s a <InlineCode>&lt;span&gt;</InlineCode>{" "}
        with an optional real <InlineCode>&lt;button&gt;</InlineCode> for removing it. For a status label use{" "}
        <Link className="underline" href="/docs/components/badge">Badge</Link>; for an on/off filter use Toggle.
      </P>

      <H2>Examples</H2>
      <H3>Removable</H3>
      <P>
        Passing <InlineCode>onRemove</InlineCode> shows the remove button. Its accessible name defaults to “Remove{" "}
        <em>label</em>” when the children are a string; pass <InlineCode>removeLabel</InlineCode> otherwise. Render
        chips in a list so screen readers announce how many there are.
      </P>
      <ComponentPreview name="chip-removable" />

      <H3>Label and helper text</H3>
      <P>
        Chips don’t have labels of their own — name the list (<InlineCode>aria-label</InlineCode> on the{" "}
        <InlineCode>&lt;ul&gt;</InlineCode>) or the input they belong to, as in the form example below.
      </P>

      <H3>Validation</H3>
      <P>
        Chips have no error state. Validate the collection (too many, duplicates) and show the message on the related
        input’s Field.
      </P>

      <H3>Required, read-only and disabled</H3>
      <P>
        <InlineCode>disabled</InlineCode> uses the disabled fill and text and disables the remove button. For a chip
        that can never be removed, leave out <InlineCode>onRemove</InlineCode> instead.
      </P>
      <ComponentPreview name="chip-disabled" />

      <H3>Form integration</H3>
      <P>
        A tag input: Enter adds the typed value as a chip, the remove button deletes it and returns focus to the input,
        and hidden inputs submit the tags with the surrounding form.
      </P>
      <ComponentPreview name="chip-form" />
      <Callout tone="missing" title="Selectable chips and icons">
        Chips are display-only: there’s no selected / toggle state and no leading-icon slot. Use Toggle or Toggle Group
        for selectable filters.
      </Callout>

      <H2>RTL</H2>
      <P>Padding and gap are symmetric, so the remove button follows the text to the left in RTL.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>The chip itself isn’t focusable; only the remove button is, with a name like “Remove Berlin”.</>,
          "Focusing the remove button gives the chip a brand border.",
          "After removing a chip, move focus somewhere sensible (the input, or the next chip) so keyboard users don’t lose their place.",
          "The 16px remove icon has a 48px hit area.",
          "Long labels truncate; keep them short or show the full text elsewhere.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Uses <InlineCode>--surface</InlineCode> (fill), <InlineCode>--border</InlineCode>, <InlineCode>--accent</InlineCode>{" "}
        (hover), <InlineCode>--primary</InlineCode> (focus) and the <InlineCode>--disabled-*</InlineCode> tokens. Style
        the button with <InlineCode>[data-slot=chip-remove]</InlineCode>.
      </P>

      <H2>API reference</H2>
      <H3>Chip</H3>
      <PropsTable
        rows={[
          { name: "onRemove", type: "() => void", description: "Shows the remove button and handles its click." },
          { name: "removeLabel", type: "string", default: '"Remove <children>"', description: "Accessible name for the remove button; \"Remove\" if children aren’t a string." },
          { name: "disabled", type: "boolean", description: "Disabled colours; disables the remove button." },
          { name: "…props", type: 'React.ComponentProps<"span">', description: "Native span attributes." },
        ]}
      />
    </>
  )
}
