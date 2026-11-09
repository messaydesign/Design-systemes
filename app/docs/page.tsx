import type { Metadata } from "next"
import Link from "next/link"

import { Callout, DocHeader, H2, InlineCode, P } from "@/components/docs/blocks"
import { INVENTORY } from "@/lib/docs/inventory"
import { Card, CardDescription, CardHeader, CardTitle } from "@/registry/main/ui/card"

export const metadata: Metadata = { title: "Introduction" }

const steps = [
  { href: "/docs/installation", title: "Install", text: "Start from the starter app, or add the theme and components to an existing project." },
  { href: "/docs/theming", title: "Theme", text: "Change the brand colour, radius and fonts in one place." },
  { href: "/docs/components/button", title: "Components", text: "Previews, source, props and accessibility for each component." },
  { href: "/docs/coverage", title: "Coverage", text: "What exists in Figma, in code and in these docs." },
]

export default function DocsHome() {
  const built = INVENTORY.filter((i) => i.status !== "design-only").length
  return (
    <>
      <DocHeader
        title="Main Brand UI"
        description="Accessible React components built from the Main Brand Figma library. You copy the source into your app, own it and customise it."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {steps.map((s) => (
          <Link key={s.href} href={s.href} className="group rounded-[var(--radius)] outline-offset-2 focus-visible:outline focus-visible:outline-[var(--button-focus-color)]">
            <Card className="h-full transition-colors group-hover:bg-[var(--surface-hover)]">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.text}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <H2>How it works</H2>
      <P>
        Main Brand UI is a <strong>source-copy</strong> library, like shadcn/ui. The shadcn CLI copies a component’s
        file into <InlineCode>components/ui</InlineCode> together with the brand theme. From then on the code is yours:
        change it, extend it, or add domain components next to it. Upstream fixes are adopted deliberately — see{" "}
        <Link className="underline" href="/docs/installation#updating-components">Updating components</Link>.
      </P>
      <P>
        Three things stay in sync: the <a className="underline" href="https://www.figma.com/design/qpIsumHqsH59PzDoG0CDlC/Design-system">Figma library</a>,
        the registry in this repository and these docs. Token names match Figma variables, and every component page
        links to its Figma guide.
      </P>

      <H2>What’s included</H2>
      <P>
        {built} of {INVENTORY.length} Figma components have code. Five have full documentation so far (Button, Input,
        Select, Dialog, Card); the rest are listed on the coverage page with what is missing.
      </P>
      <Callout title="Scope">
        The library gives you building blocks and patterns, not every screen. Keep business logic — validation rules,
        data fetching, domain models — in your app, and add domain-specific components alongside these.
      </Callout>
    </>
  )
}
