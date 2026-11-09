import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Card" }

export default function CardPage() {
  return (
    <>
      <DocHeader
        slug="card"
        title="Card"
        description="A bordered surface that groups related content and actions: a header, content and footer."
      />
      <ComponentPreview name="card-demo" />

      <H2>Installation</H2>
      <Installation item="card" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter>…</CardFooter>
</Card>`} />

      <H2>Composition</H2>
      <P>
        All parts are optional. <InlineCode>CardAction</InlineCode> sits at the end of the header for a single
        secondary action. Put the primary action last in <InlineCode>CardFooter</InlineCode>.
      </P>

      <H2>Examples</H2>
      <H3>Header action</H3>
      <ComponentPreview name="card-action" />
      <H3>Corners</H3>
      <P>Default (8px) and Soft (16px) match the Figma “Corner style”. Pill (fully rounded) is also available.</P>
      <ComponentPreview name="card-corners" />

      <H2>Alignment and spacing</H2>
      <P>
        Cards use 16px padding inside a 1px border and 24px between header, content and footer. Use a CSS grid to lay cards out —{" "}
        <InlineCode>grid gap-4 sm:grid-cols-2 lg:grid-cols-3</InlineCode> — so they reflow on small screens.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>A Card is a plain <InlineCode>&lt;div&gt;</InlineCode>. If the whole card is a link, put the link on the title and stretch it, rather than wrapping interactive content in a link.</>,
          <>CardTitle is a <InlineCode>div</InlineCode>; render a heading inside it (or use <InlineCode>asChild</InlineCode>-style markup) when the card starts a page section.</>,
        ]}
      />

      <H2>Customization</H2>
      <P>
        Uses <InlineCode>--card</InlineCode>, <InlineCode>--card-foreground</InlineCode> and{" "}
        <InlineCode>--border-subtle</InlineCode>. Override padding or layout with <InlineCode>className</InlineCode> on
        any part.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Card corner", type: '"default" | "soft" | "pill"', default: '"default"', description: "8px, 16px or fully rounded corners." },
          { name: "All parts", type: 'React.ComponentProps<"div">', description: "Accept className and div attributes." },
        ]}
      />
    </>
  )
}
