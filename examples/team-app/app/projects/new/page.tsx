import type { Metadata } from "next"

import { PageHeader } from "@/components/patterns/page-header"
import { ProjectForm } from "./project-form"

export const metadata: Metadata = { title: "New project" }

export default function NewProjectPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="New project" description="Projects group the work, people and updates for one goal." />
      <ProjectForm />
    </div>
  )
}
