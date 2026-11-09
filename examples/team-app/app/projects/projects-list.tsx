"use client"

import * as React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { EmptyState, ErrorState, LoadingRows } from "@/components/patterns/async-states"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldControl, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { listProjects, STATUS_LABEL, type Project, type ProjectStatus, type Scenario } from "@/lib/projects"

type State = { kind: "loading" } | { kind: "error"; message: string } | { kind: "ready"; projects: Project[] }

export function ProjectsList() {
  const params = useSearchParams()
  const scenario = (params.get("simulate") as Scenario | null) ?? "normal"
  const created = params.get("created")

  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState<ProjectStatus | "all">("all")
  const [state, setState] = React.useState<State>({ kind: "loading" })
  const [attempt, setAttempt] = React.useState(0)

  React.useEffect(() => {
    let cancelled = false
    listProjects({ query, status, scenario })
      .then((projects) => !cancelled && setState({ kind: "ready", projects }))
      .catch((error: Error) => !cancelled && setState({ kind: "error", message: error.message }))
    return () => {
      cancelled = true
    }
  }, [query, status, scenario, attempt])

  const filtering = query !== "" || status !== "all"
  const reload = (fn: () => void) => {
    setState({ kind: "loading" })
    fn()
  }

  return (
    <div className="flex flex-col gap-6">
      {created ? (
        <Alert variant="success">
          <AlertTitle>Project created</AlertTitle>
          <AlertDescription>“{created}” is now in the list.</AlertDescription>
        </Alert>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-[1fr_200px]">
        <Field>
          <FieldLabel htmlFor="project-search">Search</FieldLabel>
          <FieldControl>
            <Input
              id="project-search"
              type="search"
              placeholder="Name or owner"
              value={query}
              onChange={(e) => reload(() => setQuery(e.target.value))}
            />
          </FieldControl>
        </Field>
        <Field>
          <FieldLabel htmlFor="project-status">Status</FieldLabel>
          <FieldControl>
            <Select value={status} onValueChange={(v) => reload(() => setStatus(v as ProjectStatus | "all"))}>
              <SelectTrigger id="project-status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                {Object.entries(STATUS_LABEL).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FieldControl>
        </Field>
      </div>

      <div aria-live="polite" aria-busy={state.kind === "loading"}>
        {state.kind === "loading" ? <LoadingRows label="Loading projects" /> : null}

        {state.kind === "error" ? (
          <ErrorState
            title="Couldn’t load projects"
            description={state.message}
            onRetry={() => reload(() => setAttempt((n) => n + 1))}
          />
        ) : null}

        {state.kind === "ready" && state.projects.length === 0 ? (
          filtering ? (
            <EmptyState
              title="No matching projects"
              description="Try another name or status."
              action={
                <Button variant="outline" onClick={() => reload(() => (setQuery(""), setStatus("all")))}>
                  Clear filters
                </Button>
              }
            />
          ) : (
            <EmptyState
              title="No projects yet"
              description="Create the first project for your team."
              action={
                <Button asChild>
                  <Link href="/projects/new">New project</Link>
                </Button>
              }
            />
          )
        ) : null}

        {state.kind === "ready" && state.projects.length > 0 ? (
          <ul className="flex flex-col gap-3">
            {state.projects.map((project) => (
              <li key={project.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>
                      {project.owner} · updated {project.updatedAt}
                    </CardDescription>
                    <div className="col-start-2 row-span-2 row-start-1">
                      <Badge variant={project.status === "active" ? "default" : project.status === "done" ? "secondary" : "outline"}>
                        {STATUS_LABEL[project.status]}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
