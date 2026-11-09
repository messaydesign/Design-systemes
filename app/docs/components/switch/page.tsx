import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Switch" }

export default function SwitchPage() {
  return (
    <>
      <DocHeader
        slug="switch"
        title="Switch"
        description="A toggle for a setting that takes effect immediately. A 48×32 pill track with a 16px thumb, in two sizes, with on, off, disabled and error states."
      />
      <ComponentPreview name="switch-demo" />

      <H2>Installation</H2>
      <Installation item="switch" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane mode</Label>
</div>`} />
      <P>
        The API matches shadcn/ui, including <InlineCode>size=&quot;sm&quot; | &quot;default&quot;</InlineCode>. Use a
        switch for settings that apply right away; use a Checkbox when the choice is only applied on submit.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        For settings lists, put <InlineCode>FieldLabel</InlineCode> and <InlineCode>FieldDescription</InlineCode> in{" "}
        <InlineCode>FieldContent</InlineCode> and the switch at the end of a horizontal <InlineCode>Field</InlineCode>.
        Link the description with <InlineCode>aria-describedby</InlineCode>.
      </P>
      <ComponentPreview name="switch-description" />

      <H3>Sizes</H3>
      <P>
        <InlineCode>default</InlineCode> is Figma’s 48×32 track with a 16px thumb. <InlineCode>sm</InlineCode> is a 3/4
        scale (36×24, 12px thumb) that keeps an invisible 48px touch target — use it in dense tables and menus.
      </P>
      <ComponentPreview name="switch-sizes" />

      <H3>Validation</H3>
      <P>
        Set <InlineCode>aria-invalid</InlineCode> for the error border and explain the problem in a{" "}
        <InlineCode>FieldError</InlineCode>. Field’s <InlineCode>validation</InlineCode> doesn’t colour switches.
      </P>
      <ComponentPreview name="switch-validation" />

      <H3>Required, read-only and disabled</H3>
      <P>
        Figma’s Off / On × Disabled. Hover, focus and pressed are interactive. <InlineCode>disabled</InlineCode> greys
        out the track and thumb and a following <InlineCode>Label</InlineCode>. There’s no read-only mode;{" "}
        <InlineCode>required</InlineCode> is passed to the hidden form input.
      </P>
      <ComponentPreview name="switch-states" />

      <H3>Form integration</H3>
      <P>
        With a <InlineCode>name</InlineCode>, a checked switch submits <InlineCode>name=value</InlineCode> (default{" "}
        <InlineCode>&quot;on&quot;</InlineCode>) like a checkbox; an unchecked one submits nothing. Control it with{" "}
        <InlineCode>checked</InlineCode> / <InlineCode>onCheckedChange</InlineCode> to update text that depends on it.
      </P>
      <ComponentPreview name="switch-form" />

      <H2>RTL</H2>
      <P>The thumb mirrors under <InlineCode>dir=&quot;rtl&quot;</InlineCode>: off sits at the right edge and slides left when switched on.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders <InlineCode>&lt;button role=&quot;switch&quot;&gt;</InlineCode> with <InlineCode>aria-checked</InlineCode>; Space and Enter toggle it.</>,
          <>Give it a visible <InlineCode>&lt;label htmlFor&gt;</InlineCode> that names the setting, not the state (“Wi-Fi”, not “Turn on Wi-Fi”).</>,
          "Don’t change the label text when toggled; the checked state is announced.",
          <>Focus shows a brand border plus a 3px neutral backplate; the thumb animation is turned off with <InlineCode>prefers-reduced-motion</InlineCode>.</>,
          "Both sizes keep at least a 48px touch target.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        The track uses <InlineCode>--input-surface</InlineCode>, <InlineCode>--border-control</InlineCode> and{" "}
        <InlineCode>--primary</InlineCode> (hover / active variants when on); the thumb colour is the local{" "}
        <InlineCode>--thumb</InlineCode> variable. Target <InlineCode>[data-slot=switch-thumb]</InlineCode> to restyle the
        thumb.
      </P>

      <H2>API reference</H2>
      <H3>Switch</H3>
      <PropsTable
        rows={[
          { name: "size", type: '"default" | "sm"', default: '"default"', description: "48×32 or 36×24 track (shadcn sizes)." },
          { name: "checked / defaultChecked", type: "boolean", description: "On state (controlled / uncontrolled)." },
          { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when toggled." },
          { name: "disabled", type: "boolean", default: "false", description: "Disabled colours; not focusable or submitted." },
          { name: "required", type: "boolean", default: "false", description: "Passed to the hidden form input." },
          { name: "name / value", type: "string", default: 'value: "on"', description: "Submitted with the form when on." },
          { name: "aria-invalid", type: "boolean", description: "Error border (Main Brand)." },
        ]}
      />
      <P>Remaining props pass through to the Radix <InlineCode>Switch.Root</InlineCode> button.</P>
    </>
  )
}
