import { DisplayShowcase } from "@/registry/main/examples/display-showcase"

export default function DisplayPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Main Brand UI · Phase 4</p>
        <h1 className="text-4xl font-bold tracking-tight">Content and feedback</h1>
        <p className="max-w-2xl text-muted-foreground">
          Card, Item, Avatar, Accordion, Collapsible, Separator, Kbd, Aspect Ratio, Alert, Badge,
          Progress, Skeleton, Spinner and Empty — from Figma pages “06 · Content and layout” and “07 · Feedback”.
        </p>
      </header>
      <DisplayShowcase />
    </main>
  )
}
