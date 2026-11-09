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

export const metadata: Metadata = { title: "Split Button" }

export default function SplitButtonPage() {
  return (
    <>
      <DocHeader
        slug="split-button"
        title="Split Button"
        description="A primary action joined to a menu of related alternatives. Two native buttons with a shared seam, three corner styles, and loading and disabled states that cover both halves."
      />
      <ComponentPreview name="split-button-demo" />

      <H2>Installation</H2>
      <Installation item="split-button" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SplitButton, SplitButtonAction, SplitButtonTrigger } from "@/components/ui/split-button"

<SplitButton aria-label="Publish options">
  <SplitButtonAction>Publish</SplitButtonAction>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <SplitButtonTrigger aria-label="More publish options" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Schedule for later</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SplitButton>`}
      />
      <P>
        Use a split button when one action is the common choice and a few close variations exist. If every option is
        equal, use a single <Link className="underline" href="/docs/components/button">Button</Link> that opens a menu.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>SplitButton</InlineCode> holds the shared <InlineCode>corner</InlineCode>,{" "}
        <InlineCode>loading</InlineCode> and <InlineCode>disabled</InlineCode> state ·{" "}
        <InlineCode>SplitButtonAction</InlineCode> is the main action · <InlineCode>SplitButtonTrigger</InlineCode> is the
        48px chevron button, usually wrapped in a <InlineCode>DropdownMenuTrigger asChild</InlineCode>. shadcn/ui has no
        split button (it composes one from Button Group); this is a Main Brand extra.
      </P>

      <H2>Examples</H2>

      <H3>Variants</H3>
      <P>The split button is always Primary, as in Figma: it marks the main action of a view.</P>
      <Callout tone="missing" title="Secondary and outline split buttons">
        There is no <InlineCode>variant</InlineCode> prop. For a lower-emphasis version, compose a{" "}
        <Link className="underline" href="/docs/components/button-group">Button Group</Link> with an outline Button and an
        icon Button.
      </Callout>

      <H3>Sizes</H3>
      <P>
        <InlineCode>size</InlineCode> is set per part. Pair Button sizes with their square icon size so both halves are
        the same height: <InlineCode>sm</InlineCode> + <InlineCode>icon-sm</InlineCode>, default +{" "}
        <InlineCode>icon</InlineCode>, <InlineCode>lg</InlineCode> + <InlineCode>icon-lg</InlineCode>.
      </P>
      <ComponentPreview name="split-button-sizes" />

      <H3>Icons</H3>
      <P>Add an icon before the action label as a child. Replace the trigger’s chevron by passing children.</P>
      <ComponentPreview name="split-button-icons" />

      <H3>Loading</H3>
      <P>
        <InlineCode>loading</InlineCode> on <InlineCode>SplitButton</InlineCode> shows the spinner in the action (keeping
        its width, with <InlineCode>loadingText</InlineCode> if given) and disables the trigger so the two can’t
        conflict. Click Deploy to try it.
      </P>
      <ComponentPreview name="split-button-loading" />

      <H3>Disabled</H3>
      <P>
        <InlineCode>disabled</InlineCode> on <InlineCode>SplitButton</InlineCode> disables both halves. Prefer explaining
        why the action is unavailable.
      </P>
      <ComponentPreview name="split-button-disabled" />

      <H3>Corners</H3>
      <P>Default (8px), Soft (16px) and Pill round the outer corners only.</P>
      <ComponentPreview name="split-button-corners" />

      <H2>RTL</H2>
      <P>
        The trigger sits at the logical end and corners are logical, so the whole control mirrors in right-to-left
        layouts. Align the menu with <InlineCode>align=&quot;end&quot;</InlineCode> so it lines up with the trigger in
        both directions.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders <InlineCode>role=&quot;group&quot;</InlineCode> with two native buttons and two tab stops; label the group with <InlineCode>aria-label</InlineCode>.</>,
          <>The trigger is named “More options” by default; give it a specific <InlineCode>aria-label</InlineCode> such as “More publish options”.</>,
          <>With a DropdownMenu, the trigger gets <InlineCode>aria-haspopup</InlineCode> and <InlineCode>aria-expanded</InlineCode>, and the menu supports arrow keys and typeahead.</>,
          <>Loading sets <InlineCode>aria-busy</InlineCode> on the action and disables the trigger.</>,
          "Both halves are at least 48px tall; the focused half rises above the seam so its ring stays visible.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Both halves are Primary Buttons, so they follow the <InlineCode>--button-*</InlineCode> tokens. The seam is a
        1px border in <InlineCode>--primary-foreground</InlineCode> on the trigger.
      </P>

      <H2>API reference</H2>
      <H3>SplitButton</H3>
      <PropsTable
        caption="SplitButton props"
        rows={[
          { name: "corner", type: '"default" | "soft" | "pill"', default: '"default"', description: "Outer corner radius for both halves." },
          { name: "loading", type: "boolean", default: "false", description: "Spinner in the action; trigger disabled." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables both halves." },
          { name: "…props", type: 'React.ComponentProps<"div">', description: "Includes aria-label." },
        ]}
      />
      <H3>SplitButtonAction</H3>
      <PropsTable
        caption="SplitButtonAction props"
        rows={[
          { name: "size", type: "Button size", default: '"default"', description: "Height of the action." },
          { name: "loadingText", type: "string", description: "Visible text next to the spinner while loading." },
          { name: "…props", type: "Button props without variant, corner, asChild", description: "onClick, type and other button attributes." },
        ]}
      />
      <H3>SplitButtonTrigger</H3>
      <PropsTable
        caption="SplitButtonTrigger props"
        rows={[
          { name: "aria-label", type: "string", default: '"More options"', description: "Accessible name of the icon-only trigger." },
          { name: "size", type: "Button size", default: '"icon"', description: "Match the action: icon-sm, icon or icon-lg." },
          { name: "children", type: "React.ReactNode", default: "<ChevronDownIcon />", description: "Custom trigger icon." },
          { name: "…props", type: "Button props without variant, corner, asChild, loading", description: "Spread by DropdownMenuTrigger asChild." },
        ]}
      />
    </>
  )
}
