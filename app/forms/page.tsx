import { FormsShowcase } from "@/registry/main/examples/forms-showcase"

export default function FormsPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Main Brand UI · Phase 2</p>
        <h1 className="text-4xl font-bold tracking-tight">Forms</h1>
        <p className="max-w-2xl text-muted-foreground">
          Label, Input, Textarea, Field, Checkbox, Radio Group, Switch, Select and Native Select —
          built from the Figma “03 · Forms” page.
        </p>
      </header>
      <FormsShowcase />
    </main>
  )
}
