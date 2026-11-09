import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Kbd" }

export default function KbdPage() {
  return (
    <>
      <DocHeader
        slug="kbd"
        title="Kbd"
        description="Shows a keyboard key or shortcut, alone, in text, or next to the action it triggers."
      />
      <ComponentPreview name="kbd-demo" />

      <H2>Installation</H2>
      <Installation item="kbd" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Kbd, KbdGroup } from "@/components/ui/kbd"

<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`}
      />
      <P>
        Same parts as shadcn/ui. Each <InlineCode>Kbd</InlineCode> is one key; <InlineCode>KbdGroup</InlineCode> sets
        keys of a shortcut 8px apart.
      </P>

      <H2>Examples</H2>
      <H3>Inline</H3>
      <P>Inside running text, keys sit on the baseline. Spell out modifier symbols with an <InlineCode>abbr</InlineCode> title where people may not know them.</P>
      <ComponentPreview name="kbd-inline" />

      <H3>In a button</H3>
      <P>
        Show the shortcut next to the label and declare it with <InlineCode>aria-keyshortcuts</InlineCode>. Inside small
        controls, reduce the key with <InlineCode>className</InlineCode> (<InlineCode>h-6 px-1.5 text-xs</InlineCode>).
      </P>
      <ComponentPreview name="kbd-button" />

      <H2>Alignment and spacing</H2>
      <P>Keys are 32px tall with 8px padding and grow with their label. Groups use an 8px gap; add a visual “+” between keys only if your audience needs it.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders the native <InlineCode>&lt;kbd&gt;</InlineCode> element; <InlineCode>KbdGroup</InlineCode> is also a <InlineCode>kbd</InlineCode>, matching HTML’s nested-kbd pattern for key combinations.</>,
          "Screen readers may read symbols such as ⌘ or ⇧ inconsistently; add a title or visually hidden text with the key name.",
          <>Kbd only describes a shortcut. Implement the shortcut yourself and expose it with <InlineCode>aria-keyshortcuts</InlineCode> on the control.</>,
          "Show the right modifier for the platform (⌘ on macOS, Ctrl elsewhere).",
        ]}
      />

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Kbd", type: 'React.ComponentProps<"kbd">', description: "One key: 32px, muted fill, input-colour border." },
          { name: "KbdGroup", type: 'React.ComponentProps<"kbd">', description: "Inline-flex wrapper with an 8px gap." },
        ]}
      />
    </>
  )
}
