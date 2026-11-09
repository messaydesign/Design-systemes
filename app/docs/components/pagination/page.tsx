import type { Metadata } from "next"

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

export const metadata: Metadata = { title: "Pagination" }

export default function PaginationPage() {
  return (
    <>
      <DocHeader
        slug="pagination"
        title="Pagination"
        description="Moves between pages of a long list or set of results. Page links, previous and next controls and an ellipsis, each in a 48px target."
      />
      <ComponentPreview name="pagination-demo" />

      <H2>Installation</H2>
      <Installation item="pagination" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="?page=1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="?page=3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      />
      <P>
        Give every page a real URL (for example <InlineCode>?page=3</InlineCode>) so results can be shared and the back
        button works. The component renders links; you decide which pages to show.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>Pagination</InlineCode> is the <InlineCode>&lt;nav&gt;</InlineCode> landmark ·{" "}
        <InlineCode>PaginationContent</InlineCode> the list · <InlineCode>PaginationItem</InlineCode> a 48×48px slot ·{" "}
        <InlineCode>PaginationLink</InlineCode> a page number · <InlineCode>PaginationPrevious</InlineCode> /{" "}
        <InlineCode>PaginationNext</InlineCode> icon-only boundary controls · <InlineCode>PaginationEllipsis</InlineCode>{" "}
        for skipped pages. The API is shadcn/ui’s; links use the XS Button face by default instead of shadcn’s icon size.
      </P>

      <H2>Examples</H2>

      <H3>First, middle and last page</H3>
      <P>
        Figma’s First/Middle/Last states: on the first page Previous is disabled, on the last page Next is. A disabled
        control renders without <InlineCode>href</InlineCode>, sets <InlineCode>aria-disabled</InlineCode> and is
        skipped by Tab.
      </P>
      <ComponentPreview name="pagination-boundaries" />

      <H3>Sizes</H3>
      <P>
        <InlineCode>size</InlineCode> on <InlineCode>PaginationLink</InlineCode> takes Button size names. The default{" "}
        <InlineCode>xs</InlineCode> is the 32px Figma face; <InlineCode>icon-sm</InlineCode> and{" "}
        <InlineCode>icon</InlineCode> give 40px and 48px squares. The 48px slot is the touch target at every size.
      </P>
      <ComponentPreview name="pagination-sizes" />

      <H2>Active state</H2>
      <P>
        <InlineCode>isActive</InlineCode> sets <InlineCode>aria-current=&quot;page&quot;</InlineCode> and switches the
        link from the Ghost to the Outline face, so the current page has a visible border, not just a colour change.
      </P>

      <H2>Nesting</H2>
      <P>Use one pagination per list, placed after the results. Repeat it above only for very long pages.</P>

      <H2>Orientation</H2>
      <P>Pagination is horizontal only.</P>

      <H2>Overflow</H2>
      <P>
        Show the first and last pages, the current page and its neighbours, and a{" "}
        <InlineCode>PaginationEllipsis</InlineCode> for each gap. The demo at the top computes this range for ten pages.
      </P>

      <H2>Responsive</H2>
      <P>
        On narrow screens, replace page numbers with a short status line and keep Previous/Next. Resize below 768px to
        see it.
      </P>
      <ComponentPreview name="pagination-compact" />

      <H2>RTL</H2>
      <P>
        Pages run right to left and the Previous/Next chevrons mirror, so Next still points in the reading direction. Use
        the RTL switch above any preview to check.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Renders <InlineCode>&lt;nav aria-label=&quot;Pagination&quot;&gt;</InlineCode>; give each one a distinct label if a page has several.</>,
          <>The current page has <InlineCode>aria-current=&quot;page&quot;</InlineCode>.</>,
          <>Previous and Next are labelled “Previous page” and “Next page”; override with <InlineCode>aria-label</InlineCode> if needed.</>,
          <>Disabled boundary controls drop <InlineCode>href</InlineCode>, set <InlineCode>aria-disabled</InlineCode> and leave the tab order.</>,
          "The ellipsis is aria-hidden; screen readers move straight to the next page number.",
          "Every control sits in a 48×48px target with a 1px focus outline.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Links are styled with <InlineCode>buttonVariants</InlineCode> (Ghost, and Outline when active), so they follow
        your Button tokens. Override per link with <InlineCode>className</InlineCode>.
      </P>

      <H2>API reference</H2>
      <H3>PaginationLink</H3>
      <PropsTable
        caption="PaginationLink props"
        rows={[
          { name: "isActive", type: "boolean", description: "Current page: Outline face and aria-current=\"page\"." },
          { name: "disabled", type: "boolean", description: "Removes href, sets aria-disabled and tabIndex -1." },
          { name: "size", type: "Button size", default: '"xs"', description: "Any Button size; icon-* sizes are square." },
          { name: "…props", type: 'React.ComponentProps<"a">', description: "href, onClick and all anchor attributes." },
        ]}
      />
      <H3>PaginationPrevious and PaginationNext</H3>
      <PropsTable
        caption="PaginationPrevious and PaginationNext props"
        rows={[
          { name: "aria-label", type: "string", default: '"Previous page" / "Next page"', description: "Accessible name of the icon-only control." },
          { name: "disabled", type: "boolean", description: "Use on the first / last page." },
          { name: "…props", type: "PaginationLink props", description: "Rendered at size \"icon\" (48px) with a mirrored chevron." },
        ]}
      />
      <H3>Pagination</H3>
      <PropsTable
        caption="Pagination props"
        rows={[
          { name: "aria-label", type: "string", default: '"Pagination"', description: "Name of the nav landmark." },
          { name: "className", type: "string", description: "Centred by default; use justify-start to align at the start." },
        ]}
      />
    </>
  )
}
