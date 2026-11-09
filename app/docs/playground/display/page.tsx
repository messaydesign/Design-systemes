import type { Metadata } from "next"
import { DisplayShowcase } from "@/registry/main/examples/display-showcase"

export const metadata: Metadata = { title: "Content and feedback playground" }

export default function DisplayPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Playground · all states</p>
        <h1 className="font-heading text-4xl font-bold tracking-tight">Content and feedback</h1>
        <p className="max-w-2xl text-muted-foreground">
          Card, Item, Avatar, Accordion, Collapsible, Separator, Kbd, Aspect Ratio, Alert, Badge,
          Progress, Skeleton, Spinner and Empty — from Figma pages “06 · Content and layout” and “07 · Feedback”.
        </p>
      </header>
      <DisplayShowcase />
    </div>
  )
}
