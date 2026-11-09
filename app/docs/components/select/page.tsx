import type { Metadata } from "next"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Select" }

export default function SelectPage() {
  return (
    <>
      <DocHeader
        slug="select"
        title="Select"
        description="Choose one option from a short list. A 32px trigger opens a listbox with Figma option states; keyboard and typeahead come from Radix."
      />
      <ComponentPreview name="select-demo" />

      <H2>Installation</H2>
      <Installation item="select" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select>
  <SelectTrigger aria-label="Fruit">
    <SelectValue placeholder="Choose a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectContent>
</Select>`} />
      <P>
        Use Select for 4–15 options. For two or three, use Radio Group; for long or searchable lists, a Combobox (not built
        yet). Native Select is lighter and better on mobile when you don’t need custom option content.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        Give the trigger the field’s <InlineCode>id</InlineCode> so the label points at it. Groups, labels and separators
        organise longer lists; <InlineCode>showCheck</InlineCode> marks the chosen option.
      </P>
      <ComponentPreview name="select-field" />

      <H3>Validation, required and disabled</H3>
      <P>
        Field colours the trigger. Add <InlineCode>aria-invalid</InlineCode> on errors. Disabled options stay visible but
        can’t be chosen.
      </P>
      <ComponentPreview name="select-validation" />

      <H3>Shape</H3>
      <ComponentPreview name="select-shape" />

      <H3>Form integration</H3>
      <P>
        Pass <InlineCode>name</InlineCode> to <InlineCode>Select</InlineCode> and it submits with native forms
        (a hidden select is rendered). Control it with <InlineCode>value</InlineCode> /{" "}
        <InlineCode>onValueChange</InlineCode> when you validate in state.
      </P>
      <Callout title="Portals and theme">
        The list renders in a portal at the end of the page, so it follows the theme class on{" "}
        <InlineCode>&lt;html&gt;</InlineCode>. Scope-limited themes (a dark section on a light page) won’t reach it.
      </Callout>

      <H2>RTL</H2>
      <P>The chevron, padding and list alignment are logical and flip with the document direction.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "Trigger is a combobox button; the list is a listbox with option roles (from Radix).",
          "Arrow keys move, Enter/Space choose, typing jumps to matching options, Escape closes and returns focus.",
          "Label the trigger with a FieldLabel or aria-label.",
          "Selected option is announced; the check mark is a non-colour cue.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The trigger shares the Input tokens; the list uses <InlineCode>--surface-elevated</InlineCode>,{" "}
        <InlineCode>--border-subtle</InlineCode> and <InlineCode>--surface-hover</InlineCode>.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Select value / defaultValue", type: "string", description: "Chosen option." },
          { name: "Select onValueChange", type: "(value: string) => void", description: "Called when the user chooses." },
          { name: "Select name / required / disabled", type: "string / boolean", description: "Native form behaviour." },
          { name: "SelectTrigger shape", type: '"default" | "rounded"', default: '"default"', description: "8px corners or pill." },
          { name: "SelectItem showCheck", type: "boolean", default: "false", description: "Show a check mark on the chosen option." },
          { name: "SelectItem disabled", type: "boolean", description: "Visible but not selectable." },
        ]}
      />
      <P>Other props follow Radix Select.</P>
    </>
  )
}
