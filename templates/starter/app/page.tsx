import { PageHeader } from "@/components/patterns/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { title: "Change the brand", text: "Edit the --brand-* tokens at the top of app/globals.css." },
  { title: "Add a page", text: "Create app/<route>/page.tsx and add it to lib/navigation.ts." },
  { title: "Add components", text: "Run npx shadcn@latest add @main/<name>. See the docs for each one." },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Welcome" description="This starter is wired to Main Brand UI. Replace this page with your own." />
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <Card key={step.title}>
            <CardHeader>
              <CardDescription>Step {i + 1}</CardDescription>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{step.text}</CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Documentation</CardTitle>
          <CardDescription>Previews, source and props for every component.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild>
            <a href="http://localhost:3000/docs">Open the docs</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
