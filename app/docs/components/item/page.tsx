import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Item" }

export default function ItemPage() {
  return (
    <>
      <DocHeader
        slug="item"
        title="Item"
        description="A row with leading media, a title and description, and trailing actions — for people, files, settings and other lists."
      />
      <ComponentPreview name="item-demo" />

      <H2>Installation</H2>
      <Installation item="item" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"

<Item variant="outline">
  <ItemMedia>…</ItemMedia>
  <ItemContent>
    <ItemTitle>Title</ItemTitle>
    <ItemDescription>Description</ItemDescription>
  </ItemContent>
  <ItemActions>…</ItemActions>
</Item>`} />

      <H2>Composition</H2>
      <P>
        All parts are optional. <InlineCode>ItemMedia</InlineCode> holds a 48px avatar or icon,{" "}
        <InlineCode>ItemContent</InlineCode> grows to fill the row, <InlineCode>ItemActions</InlineCode> sits at the end.
        Wrap repeated items in <InlineCode>ItemGroup</InlineCode>.
      </P>

      <H2>Examples</H2>
      <H3>Variants</H3>
      <ComponentPreview name="item-variants" />
      <H3>Lists</H3>
      <P>
        <InlineCode>ItemGroup</InlineCode> is a list (<InlineCode>role=&quot;list&quot;</InlineCode>) and each Item inside it
        becomes a list item. Label the group with <InlineCode>aria-label</InlineCode> when there’s no visible heading.
        For sortable, column-based data use a table (not built yet).
      </P>
      <ComponentPreview name="item-group" />
      <H3>As a link</H3>
      <P>
        <InlineCode>asChild</InlineCode> renders the whole row as your link. Don’t put other buttons or links inside a
        linked Item.
      </P>
      <ComponentPreview name="item-link" />

      <H2>Spacing and responsive behaviour</H2>
      <P>
        16px padding inside a 1px border and 16px between parts. Content truncates instead of pushing actions off-screen;
        on narrow screens consider moving secondary actions into a menu.
      </P>

      <H2>RTL</H2>
      <P>Media and actions swap sides automatically; directional icons such as chevrons mirror.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "Inside ItemGroup, items are announced as a list with a count.",
          "Icon-only actions need an aria-label that names the item (“Open Amina’s profile”, not “Open”).",
          "A linked Item is one tab stop; keep its title meaningful because it becomes the link text.",
        ]}
      />

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Item variant", type: '"default" | "outline" | "muted"', default: '"default"', description: "No border, subtle border or muted background." },
          { name: "Item asChild", type: "boolean", default: "false", description: "Render the child (e.g. a link) with item styles." },
          { name: "ItemGroup", type: 'React.ComponentProps<"div">', description: "List wrapper with 8px gap; items get role=listitem." },
          { name: "Other parts", type: 'React.ComponentProps<"div" | "p">', description: "Accept className and native attributes." },
        ]}
      />
    </>
  )
}
