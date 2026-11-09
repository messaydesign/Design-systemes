import type { Metadata } from "next"
import Link from "next/link"

import {
  A11yList,
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

export const metadata: Metadata = { title: "Breadcrumb" }

export default function BreadcrumbPage() {
  return (
    <>
      <DocHeader
        slug="breadcrumb"
        title="Breadcrumb"
        description="Shows where the current page sits in the site hierarchy and links back to each ancestor. Default and Collapsed, mirrored in right-to-left layouts."
      />
      <ComponentPreview name="breadcrumb-demo" />

      <H2>Installation</H2>
      <Installation item="breadcrumb" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Projects</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />
      <P>
        Use a breadcrumb on pages more than one level deep. It complements the main navigation; it does not replace it.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>Breadcrumb</InlineCode> is the <InlineCode>&lt;nav&gt;</InlineCode> landmark ·{" "}
        <InlineCode>BreadcrumbList</InlineCode> the ordered list · <InlineCode>BreadcrumbItem</InlineCode> one step ·{" "}
        <InlineCode>BreadcrumbLink</InlineCode> an ancestor · <InlineCode>BreadcrumbPage</InlineCode> the current page
        (last) · <InlineCode>BreadcrumbSeparator</InlineCode> between items · <InlineCode>BreadcrumbEllipsis</InlineCode>{" "}
        for collapsed ancestors. Part names match shadcn/ui.
      </P>

      <H2>Examples</H2>

      <H3>Custom separator</H3>
      <P>
        Pass children to <InlineCode>BreadcrumbSeparator</InlineCode> to replace the default chevron. It stays hidden
        from assistive technology.
      </P>
      <ComponentPreview name="breadcrumb-separator" />

      <H3>With a router link</H3>
      <P>
        <InlineCode>asChild</InlineCode> on <InlineCode>BreadcrumbLink</InlineCode> styles your router’s link, such as
        Next.js <InlineCode>Link</InlineCode>, for client-side navigation.
      </P>
      <ComponentPreview name="breadcrumb-link" />

      <H2>Active state</H2>
      <P>
        The last item is <InlineCode>BreadcrumbPage</InlineCode>: plain text with{" "}
        <InlineCode>aria-current=&quot;page&quot;</InlineCode>, not a link. Ancestors are underlined so they read as
        links without relying on colour.
      </P>

      <H2>Nesting</H2>
      <P>
        Show the full path from the top level down to the current page, one item per level. Don’t add steps that have no
        page of their own.
      </P>

      <H2>Orientation</H2>
      <P>Breadcrumbs are horizontal only and wrap onto a second line when space runs out.</P>

      <H2>Overflow</H2>
      <P>
        For deep paths, keep the first and last two items and put the rest behind <InlineCode>BreadcrumbEllipsis</InlineCode>{" "}
        (Figma “Collapsed”). It is a real button; wrap it in a <InlineCode>DropdownMenuTrigger asChild</InlineCode> that
        lists the hidden links.
      </P>
      <ComponentPreview name="breadcrumb-collapsed" />

      <H2>Responsive</H2>
      <P>
        Collapse only on small screens by hiding the middle items with <InlineCode>md:</InlineCode> utilities. Resize
        the window below 768px to see the ellipsis.
      </P>
      <ComponentPreview name="breadcrumb-responsive" />

      <H2>RTL</H2>
      <P>
        Items follow the reading direction and the chevron separator mirrors to point left. Use the RTL switch above any
        preview to check.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders <InlineCode>&lt;nav aria-label=&quot;Breadcrumb&quot;&gt;</InlineCode> with an ordered list; override the label if a page has more than one.</>,
          <>The current page has <InlineCode>aria-current=&quot;page&quot;</InlineCode> and is not a link.</>,
          <>Separators are <InlineCode>role=&quot;presentation&quot;</InlineCode> and <InlineCode>aria-hidden</InlineCode>, so they aren’t read out.</>,
          <>The ellipsis button is labelled “Show hidden pages” and is 48px tall with a target at least 48px wide.</>,
          "Links show a 1px focus outline with a 2px offset; each row is at least 48px tall.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Links hover to <InlineCode>--button-selected-text</InlineCode>. Change gaps on{" "}
        <InlineCode>BreadcrumbList</InlineCode> with <InlineCode>className</InlineCode>; see{" "}
        <Link className="underline" href="/docs/theming">Theming</Link> for colour tokens.
      </P>

      <H2>API reference</H2>
      <PropsTable
        caption="Breadcrumb parts"
        rows={[
          { name: "Breadcrumb aria-label", type: "string", default: '"Breadcrumb"', description: "Name of the nav landmark." },
          { name: "BreadcrumbLink asChild", type: "boolean", default: "false", description: "Style the child (e.g. Next.js Link) instead of rendering <a>." },
          { name: "BreadcrumbLink …props", type: 'React.ComponentProps<"a">', description: "href and all anchor attributes." },
          { name: "BreadcrumbPage …props", type: 'React.ComponentProps<"span">', description: "Always sets aria-current=\"page\"." },
          { name: "BreadcrumbSeparator children", type: "React.ReactNode", default: "<ChevronRightIcon />", description: "Custom separator; decorative." },
          { name: "BreadcrumbEllipsis aria-label", type: "string", default: '"Show hidden pages"', description: "A native <button>; use as a DropdownMenuTrigger child." },
        ]}
      />
    </>
  )
}
