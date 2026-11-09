import type { Metadata } from "next"
import Link from "next/link"

import { FormsShowcase } from "@/registry/main/examples/forms-showcase"

export const metadata: Metadata = { title: "Forms playground" }

export default function FormsPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Playground · all states</p>
        <h1 className="font-heading text-4xl font-bold tracking-tight">Forms</h1>
        <p className="max-w-2xl text-muted-foreground">
          Label, Input, Textarea, Field, Checkbox, Radio Group, Switch, Select and Native Select —
          built from the Figma “03 · Forms” page.{" "}
          <Link href="/docs/playground/forms/more" className="underline">More form controls</Link>
        </p>
      </header>
      <FormsShowcase />
    </div>
  )
}
