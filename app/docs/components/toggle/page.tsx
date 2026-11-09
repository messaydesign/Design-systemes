import type { Metadata } from "next"
import Link from "next/link"

import {
  A11yList,
  Callout,
  CodeBlock,
  ComponentPreview,
  DocHeader,
  H2,
  H3,
  InlineCode,
  Installation,
  P,
  PropsTable,
} from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Toggle" }

export default function TogglePage() {
  return (
    <>
      <DocHeader
        slug="toggle"
        title="Toggle"
        description="A two-state button that turns a setting or view option on and off. Default and Outline variants, three sizes and three corner styles."
      />
      <ComponentPreview name="toggle-demo" />

      <H2>Installation</H2>
      <Installation item="toggle" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Toggle } from "@/components/ui/toggle"

<Toggle aria-label="Show hidden files">
  <FileIcon />
</Toggle>`}
      />
      <P>
        Use a toggle for an option that takes effect immediately, such as a view setting in a toolbar. For a form
        setting that is saved later, use a checkbox or switch. For a set of options, use{" "}
        <Link className="underline" href="/docs/components/toggle-group">Toggle Group</Link>.
      </P>

      <H2>Examples</H2>

      <H3>Variants</H3>
      <P>
        Default uses the Ghost face and Outline the Outline face. Off on the left, on (<InlineCode>defaultPressed</InlineCode>)
        on the right: the on state adds the selected tint and border.
      </P>
      <ComponentPreview name="toggle-variants" />

      <H3>Sizes</H3>
      <P>
        Sizes use shadcn names and match Button heights: <InlineCode>sm</InlineCode> 40 · default 48 ·{" "}
        <InlineCode>lg</InlineCode> 56. Small keeps a 48px touch target.
      </P>
      <ComponentPreview name="toggle-sizes" />

      <H3>Icons and text</H3>
      <P>
        A toggle can hold an icon, text, or both. Icon-only toggles need an <InlineCode>aria-label</InlineCode> that
        names the option, not its state (“Show hidden files”, not “Hidden files on”).
      </P>
      <ComponentPreview name="toggle-text" />

      <H3>Loading</H3>
      <Callout tone="missing" title="Loading">
        Toggle has no loading state in Figma or code. If switching takes time, update the pressed state optimistically
        and report failures with a toast.
      </Callout>

      <H3>Disabled</H3>
      <P>
        <InlineCode>disabled</InlineCode> works in both states and removes the toggle from the tab order.
      </P>
      <ComponentPreview name="toggle-disabled" />

      <H3>Corners</H3>
      <P>Default (8px), Soft (16px) and Pill, as on Button.</P>
      <ComponentPreview name="toggle-corners" />

      <H3>Controlled</H3>
      <P>
        Pass <InlineCode>pressed</InlineCode> and <InlineCode>onPressedChange</InlineCode> to keep the state in your
        app.
      </P>
      <ComponentPreview name="toggle-controlled" />

      <H2>RTL</H2>
      <P>
        Icon and label order follow the reading direction. Use the RTL switch above any preview to check.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders a native <InlineCode>&lt;button&gt;</InlineCode> with <InlineCode>aria-pressed</InlineCode>; screen readers announce “toggle button, pressed”.</>,
          "Space and Enter switch it.",
          "The label stays the same in both states; aria-pressed carries the state.",
          "The on state has a border and tint, not just a colour change.",
          "Every size has at least a 48×48px target and a 1px focus ring with a 2px offset.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Faces come from <InlineCode>buttonVariants</InlineCode> (Ghost and Outline) and the{" "}
        <InlineCode>--button-*</InlineCode> tokens. <InlineCode>toggleVariants</InlineCode> is exported and shared with
        Toggle Group, so a variant you add there applies to both.
      </P>

      <H2>API reference</H2>
      <PropsTable
        caption="Toggle props"
        rows={[
          { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Ghost face or Outline face." },
          { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "40px, 48px or 56px." },
          { name: "corner", type: '"default" | "soft" | "pill"', default: '"default"', description: "8px, 16px or fully rounded." },
          { name: "pressed / onPressedChange", type: "boolean / (pressed: boolean) => void", description: "Controlled state." },
          { name: "defaultPressed", type: "boolean", default: "false", description: "Initial state (uncontrolled)." },
          { name: "disabled", type: "boolean", default: "false", description: "Not interactive." },
          { name: "…props", type: 'React.ComponentProps<"button">', description: "All native button attributes." },
        ]}
      />
    </>
  )
}
