/*
 * App data layer (example). A real app would call an API here; this keeps an
 * in-memory list and simulates latency and failures so every UI state can be
 * seen. Business rules live here and in lib/validation.ts — never in
 * components/ui.
 */

export type ProjectStatus = "planned" | "active" | "done"

export type Project = {
  id: string
  name: string
  owner: string
  status: ProjectStatus
  description: string
  updatedAt: string
}

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  planned: "Planned",
  active: "Active",
  done: "Done",
}

let projects: Project[] = [
  { id: "p1", name: "Website redesign", owner: "amina@example.com", status: "active", description: "New marketing site on the design system.", updatedAt: "2026-11-02" },
  { id: "p2", name: "Mobile onboarding", owner: "kebede@example.com", status: "planned", description: "First-run flow for the iOS and Android apps.", updatedAt: "2026-10-28" },
  { id: "p3", name: "Billing migration", owner: "sara@example.com", status: "done", description: "Move invoices to the new provider.", updatedAt: "2026-10-12" },
]

/** Simulated scenarios for the demo: "error" fails the request, "empty" returns nothing. */
export type Scenario = "normal" | "error" | "empty"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function listProjects({ query = "", status = "all", scenario = "normal" }: {
  query?: string
  status?: ProjectStatus | "all"
  scenario?: Scenario
}) {
  await wait(700)
  if (scenario === "error") throw new Error("The projects service didn’t respond.")
  if (scenario === "empty") return []
  const q = query.trim().toLowerCase()
  return projects.filter(
    (p) =>
      (status === "all" || p.status === status) &&
      (!q || p.name.toLowerCase().includes(q) || p.owner.toLowerCase().includes(q))
  )
}

export async function createProject(input: Omit<Project, "id" | "updatedAt">) {
  await wait(900)
  if (projects.some((p) => p.name.toLowerCase() === input.name.trim().toLowerCase())) {
    throw new Error("A project with this name already exists.")
  }
  const project: Project = {
    ...input,
    name: input.name.trim(),
    id: `p${Date.now()}`,
    updatedAt: new Date().toISOString().slice(0, 10),
  }
  projects = [project, ...projects]
  return project
}
