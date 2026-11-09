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

export const metadata: Metadata = { title: "Button" }

export default function ButtonPage() {
  return (
    <>
      <DocHeader
        slug="button"
        title="Button"
        description="Starts an action, submits a form or, rendered as a link, moves to another page. Six variants, five sizes, three corner styles, loading and a persistent selected state."
      />
      <ComponentPreview name="button-demo" />

      <H2>Installation</H2>
      <Installation item="button" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button"

<Button variant="outline">Button</Button>`}
      />
      <P>
        Use a button for actions on the current page. For navigation, render a real link with{" "}
        <InlineCode>asChild</InlineCode> so it opens in new tabs and announces as a link.
      </P>

      <H2>Examples</H2>

      <H3>Variants</H3>
      <P>
        One Primary button per view for the main action. Secondary and Outline for supporting actions, Ghost for
        low-emphasis actions in toolbars, Destructive for actions that delete or can’t be undone.
      </P>
      <ComponentPreview name="button-variants" />

      <H3>Sizes</H3>
      <P>
        Figma sizes map to shadcn names: <InlineCode>xs</InlineCode> 32 · <InlineCode>sm</InlineCode> 40 · default 48
        · <InlineCode>lg</InlineCode> 56 · <InlineCode>xl</InlineCode> 64. XS and Small keep a 48px touch target
        around the smaller face.
      </P>
      <ComponentPreview name="button-sizes" />

      <H3>Icons</H3>
      <P>
        Put icons before or after the label as children; they size automatically (16px up to Small, 24px from Large).
        Icon-only buttons use the <InlineCode>icon-*</InlineCode> sizes and need an <InlineCode>aria-label</InlineCode>.
      </P>
      <ComponentPreview name="button-icons" />

      <H3>Loading</H3>
      <P>
        <InlineCode>loading</InlineCode> keeps the button’s width, shows a spinner, sets{" "}
        <InlineCode>aria-busy</InlineCode> and ignores repeat clicks. Add <InlineCode>loadingText</InlineCode> to show
        visible text; otherwise “Loading” is announced to screen readers.
      </P>
      <ComponentPreview name="button-loading" />

      <H3>Disabled</H3>
      <P>
        Prefer explaining why an action is unavailable. If you must disable, use <InlineCode>disabled</InlineCode> on
        buttons and <InlineCode>aria-disabled</InlineCode> on links.
      </P>
      <ComponentPreview name="button-disabled" />

      <H3>Corners</H3>
      <P>Default (8px), Soft (16px) and Pill match the Figma “Corner style” property.</P>
      <ComponentPreview name="button-corners" />

      <H3>Selected</H3>
      <P>
        <InlineCode>selected</InlineCode> sets <InlineCode>aria-pressed</InlineCode> for a persistent on state. The same
        style applies to <InlineCode>aria-current=&quot;page&quot;</InlineCode> and Radix{" "}
        <InlineCode>data-state=&quot;on&quot;</InlineCode>. For one-of-many choices prefer{" "}
        <Link className="underline" href="/docs/coverage">Toggle Group</Link>.
      </P>
      <ComponentPreview name="button-selected" />

      <H3>As a link</H3>
      <P>
        <InlineCode>asChild</InlineCode> passes the button styles to its only child, such as Next.js{" "}
        <InlineCode>Link</InlineCode>. Loading is ignored in this mode.
      </P>
      <ComponentPreview name="button-link" />

      <H2>RTL</H2>
      <P>
        Buttons use logical spacing, so icons swap sides in right-to-left layouts and directional icons such as{" "}
        <InlineCode>ArrowRightIcon</InlineCode> mirror. Use the RTL switch above any preview to check.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders a native <InlineCode>&lt;button type=&quot;button&quot;&gt;</InlineCode>; set <InlineCode>type=&quot;submit&quot;</InlineCode> in forms.</>,
          "Focus shows a 1px ring with a 2px offset in the brand focus colour.",
          "Every size has at least a 48×48px target.",
          <>Icon-only buttons need an <InlineCode>aria-label</InlineCode>; add a tooltip for sighted users.</>,
          <>Loading sets <InlineCode>aria-busy</InlineCode> and blocks repeat activation without removing focus.</>,
          "Selected state is exposed with aria-pressed, never by colour alone.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Colours come from the <InlineCode>--button-*</InlineCode> tokens in your theme, so changing{" "}
        <Link className="underline" href="/docs/theming">the brand colour</Link> restyles every button. Because you own
        the source, add a variant by extending <InlineCode>buttonVariants</InlineCode> in{" "}
        <InlineCode>components/ui/button.tsx</InlineCode>:
      </P>
      <CodeBlock
        code={`variant: {
  // …existing variants
  success: "bg-[var(--status-success-border)] text-white hover:opacity-90",
},`}
      />
      <Callout title="Keep upstream fixes easy to adopt">
        Add new variants rather than editing existing ones, and note your changes at the top of the file. See{" "}
        <Link className="underline" href="/docs/installation#updating-components">Updating components</Link>.
      </Callout>

      <H2>API reference</H2>
      <PropsTable
        caption="Button props"
        rows={[
          { name: "variant", type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', default: '"default"', description: "Visual style. default is Figma “Primary”." },
          { name: "size", type: '"xs" | "sm" | "default" | "lg" | "xl" | "icon-xs" | "icon-sm" | "icon" | "icon-lg" | "icon-xl"', default: '"default"', description: "Height 32–64px; icon-* sizes are square." },
          { name: "corner", type: '"default" | "soft" | "pill"', default: '"default"', description: "Corner radius: 8px, 16px or fully rounded." },
          { name: "selected", type: "boolean", description: "Persistent on state; sets aria-pressed." },
          { name: "loading", type: "boolean", default: "false", description: "Shows a spinner, keeps width, sets aria-busy and blocks clicks." },
          { name: "loadingText", type: "string", description: "Visible text next to the spinner while loading." },
          { name: "asChild", type: "boolean", default: "false", description: "Style the child element (e.g. a link) instead of rendering a button." },
          { name: "…props", type: 'React.ComponentProps<"button">', description: "All native button attributes." },
        ]}
      />
      <P>
        Also exported: <InlineCode>buttonVariants(&#123; variant, size, corner &#125;)</InlineCode> to style other
        elements as buttons.
      </P>
    </>
  )
}
