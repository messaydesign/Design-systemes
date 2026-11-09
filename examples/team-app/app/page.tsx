import Link from "next/link"

import { PageHeader } from "@/components/patterns/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon } from "@/components/ui/icons"

export default function Overview() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Overview" description="A small app built from the Main Brand starter." />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Active projects", "1"],
          ["Planned", "1"],
          ["Done this quarter", "1"],
        ].map(([label, value]) => (
          <Card key={label}>
            <CardHeader>
              <CardDescription>{label}</CardDescription>
              <CardTitle className="font-heading text-3xl font-bold">{value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Start something new</CardTitle>
          <CardDescription>Create a project and invite your team.</CardDescription>
        </CardHeader>
        <CardContent className="text-[var(--text-secondary)]">
          The form validates as you go after the first submit and lists problems at the top.
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/projects/new">
              New project
              <ArrowRightIcon />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
