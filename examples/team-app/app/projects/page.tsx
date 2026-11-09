import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

import { LoadingRows } from "@/components/patterns/async-states"
import { PageHeader } from "@/components/patterns/page-header"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@/components/ui/icons"
import { ProjectsList } from "./projects-list"

export const metadata: Metadata = { title: "Projects" }

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Projects"
        description="Everything your team is working on."
        actions={
          <Button asChild>
            <Link href="/projects/new">
              <PlusIcon />
              New project
            </Link>
          </Button>
        }
      />
      <Suspense fallback={<LoadingRows label="Loading projects" />}>
        <ProjectsList />
      </Suspense>
      <p className="text-sm text-muted-foreground">
        Demo states: <Link className="underline" href="/projects?simulate=error">error</Link> ·{" "}
        <Link className="underline" href="/projects?simulate=empty">empty</Link> ·{" "}
        <Link className="underline" href="/projects">normal</Link>
      </p>
    </div>
  )
}
