import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Input Group" }

export default function InputGroupPage() {
  return (
    <>
      <DocHeader
        slug="input-group"
        title="Input Group"
        description="One bordered control that combines an input or textarea with text, icons and buttons — for search, password, URL, currency and message fields."
      />
      <ComponentPreview name="input-group-demo" />

      <H2>Installation</H2>
      <Installation item="input-group" />

      <H2>Usage</H2>
      <CodeBlock code={`import { SearchIcon } from "@/components/ui/icons"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

<InputGroup>
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput type="search" aria-label="Search" placeholder="Search" />
</InputGroup>`} />

      <H2>Composition</H2>
      <P>
        The shadcn/ui parts: <InlineCode>InputGroup</InlineCode> is the bordered 32px container ·{" "}
        <InlineCode>InputGroupInput</InlineCode> or <InlineCode>InputGroupTextarea</InlineCode> is the editable control ·{" "}
        <InlineCode>InputGroupAddon</InlineCode> holds prefixes and suffixes, placed by{" "}
        <InlineCode>align</InlineCode> (<InlineCode>inline-start</InlineCode>, <InlineCode>inline-end</InlineCode>,{" "}
        <InlineCode>block-start</InlineCode>, <InlineCode>block-end</InlineCode>) whatever the source order ·{" "}
        <InlineCode>InputGroupText</InlineCode> for text such as “https://” or a currency ·{" "}
        <InlineCode>InputGroupButton</InlineCode> for ghost actions with a 48px hit area. Clicking an addon outside a
        button focuses the control. Icons and InputGroupText may also sit directly inside InputGroup.
      </P>

      <H2>Examples</H2>
      <H3>Text add-ons</H3>
      <P>
        Prefix and suffix text gives context but isn’t part of the value, and it isn’t a label — keep a real{" "}
        <InlineCode>FieldLabel</InlineCode>. Use <InlineCode>text-muted-foreground</InlineCode> for secondary text.
      </P>
      <ComponentPreview name="input-group-text" />

      <H3>Button</H3>
      <P>
        <InlineCode>InputGroupButton</InlineCode> is a ghost Button that defaults to <InlineCode>size=&quot;xs&quot;</InlineCode>{" "}
        (32px). Use <InlineCode>icon-xs</InlineCode> for icon-only actions and always give them an{" "}
        <InlineCode>aria-label</InlineCode>. Announce the result (“Link copied”) in a live region.
      </P>
      <ComponentPreview name="input-group-button" />

      <H3>Password</H3>
      <P>
        A Show / Hide toggle switches <InlineCode>type</InlineCode> between password and text. Mark it with{" "}
        <InlineCode>aria-pressed</InlineCode> and keep <InlineCode>autoComplete</InlineCode> so password managers still work.
      </P>
      <ComponentPreview name="input-group-password" />

      <H3>Textarea</H3>
      <P>
        <InlineCode>InputGroupTextarea</InlineCode> matches the Textarea control’s 120px height. A{" "}
        <InlineCode>block-end</InlineCode> addon stacks a toolbar below it.
      </P>
      <ComponentPreview name="input-group-textarea" />

      <H3>Validation</H3>
      <P>
        Field’s <InlineCode>validation</InlineCode> colours the group border; <InlineCode>aria-invalid</InlineCode> on the
        input also turns it red on its own. Without Field, set{" "}
        <InlineCode>data-validation=&quot;warning&quot; | &quot;success&quot;</InlineCode> on InputGroup.
      </P>
      <ComponentPreview name="input-group-validation" />

      <H3>Required, read-only and disabled</H3>
      <P>
        Put <InlineCode>required</InlineCode>, <InlineCode>readOnly</InlineCode> and <InlineCode>disabled</InlineCode> on
        the input. A disabled input disables the whole group’s look; you can also set{" "}
        <InlineCode>data-disabled=&quot;true&quot;</InlineCode> on InputGroup. Read-only inputs (see the invite link above)
        keep the normal surface.
      </P>
      <ComponentPreview name="input-group-disabled" />

      <H3>Form integration</H3>
      <P>
        The input submits under its <InlineCode>name</InlineCode>; add-on text doesn’t. A{" "}
        <InlineCode>type=&quot;submit&quot;</InlineCode> InputGroupButton submits the form. Validate in your app and
        reflect it through Field.
      </P>
      <ComponentPreview name="input-group-form" />
      <Callout title="Password and Search fields">
        Figma’s Password Field and Search Field are composed from Input Group as shown above. A dedicated
        password-reveal component with an eye icon and a search clear button are not built yet.
      </Callout>
      <Callout tone="missing" title="Read-only style">
        A read-only input inside the group doesn’t get Input’s muted read-only fill.
      </Callout>

      <H2>RTL</H2>
      <P>
        <InlineCode>inline-start</InlineCode> / <InlineCode>inline-end</InlineCode> are logical, so prefixes move to the
        right in RTL. Keep text that is always left-to-right (URLs, codes) in <InlineCode>dir=&quot;ltr&quot;</InlineCode>.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>InputGroup is a <InlineCode>role=&quot;group&quot;</InlineCode>; the input still needs its own label (<InlineCode>FieldLabel htmlFor</InlineCode> or <InlineCode>aria-label</InlineCode>).</>,
          "Prefix and suffix text is not read as part of the label; repeat important context (like a currency) in the label or helper text.",
          <>Icon-only buttons need an <InlineCode>aria-label</InlineCode>; toggles need <InlineCode>aria-pressed</InlineCode>.</>,
          "Buttons keep a 48px hit area inside the 32px control; icons are decorative.",
          "Focus on the input changes the whole group’s outline to the brand colour.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Same tokens as Input (<InlineCode>--input-surface</InlineCode>, <InlineCode>--input-outline-*</InlineCode>,{" "}
        <InlineCode>--status-*</InlineCode>). Extend <InlineCode>inputGroupAddonVariants</InlineCode> for new
        placements, and pass any Button <InlineCode>variant</InlineCode> to InputGroupButton. See also the{" "}
        <Link className="underline" href="/docs/components/input">Input</Link> page.
      </P>

      <H2>API reference</H2>
      <H3>InputGroup</H3>
      <PropsTable
        rows={[
          { name: "data-validation", type: '"warning" | "success"', description: "Warning or success border without Field." },
          { name: "data-disabled", type: '"true"', description: "Disabled look for the whole group." },
          { name: "…props", type: 'React.ComponentProps<"div">', description: "Native div attributes." },
        ]}
      />
      <H3>InputGroupAddon</H3>
      <PropsTable
        rows={[
          { name: "align", type: '"inline-start" | "inline-end" | "block-start" | "block-end"', default: '"inline-start"', description: "Where the addon sits; block values stack it above or below the control." },
        ]}
      />
      <H3>InputGroupButton</H3>
      <PropsTable
        rows={[
          { name: "size", type: "ButtonProps['size']", default: '"xs"', description: "xs / icon-xs fit the 32px group; sm / icon-sm for block addons or taller groups." },
          { name: "variant", type: "ButtonProps['variant']", default: '"ghost"', description: "Any Button variant." },
        ]}
      />
      <P>
        <InlineCode>InputGroupInput</InlineCode> and <InlineCode>InputGroupTextarea</InlineCode> pass all props to the
        native <InlineCode>&lt;input&gt;</InlineCode> / <InlineCode>&lt;textarea&gt;</InlineCode>;{" "}
        <InlineCode>InputGroupText</InlineCode> to a <InlineCode>&lt;span&gt;</InlineCode>; InputGroupButton to{" "}
        <Link className="underline" href="/docs/components/button">Button</Link>.
      </P>
    </>
  )
}
