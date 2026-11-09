"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldControl, FieldCounter, FieldLabel, FieldMessage } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  ValidationSummary,
  ValidationSummaryList,
  ValidationSummaryTitle,
} from "@/components/ui/validation-summary"
import { createProject, STATUS_LABEL, type ProjectStatus } from "@/lib/projects"
import { DESCRIPTION_MAX, FIELD_LABELS, validateProject, type FormErrors, type ProjectForm } from "@/lib/validation"

const empty: ProjectForm = { name: "", owner: "", status: "", description: "" }

export function ProjectForm() {
  const router = useRouter()
  const [values, setValues] = React.useState<ProjectForm>(empty)
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [submitted, setSubmitted] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [serverError, setServerError] = React.useState<string | null>(null)
  const summaryRef = React.useRef<HTMLDivElement>(null)

  const set = <K extends keyof ProjectForm>(key: K, value: ProjectForm[K]) => {
    const next = { ...values, [key]: value }
    setValues(next)
    // After the first submit, re-validate as the user fixes things.
    if (submitted) setErrors(validateProject(next))
  }

  const invalid = (key: keyof ProjectForm) => (errors[key] ? "error" : "none")
  const errorEntries = Object.entries(errors) as [keyof ProjectForm, string][]

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    setServerError(null)
    const found = validateProject(values)
    setErrors(found)
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    setSaving(true)
    try {
      const project = await createProject({ ...values, status: values.status as ProjectStatus })
      router.push(`/projects?created=${encodeURIComponent(project.name)}`)
    } catch (error) {
      setServerError((error as Error).message)
      setSaving(false)
    }
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex max-w-2xl flex-col gap-6">
      {errorEntries.length ? (
        <ValidationSummary status="error" ref={summaryRef}>
          <ValidationSummaryTitle>Fix {errorEntries.length === 1 ? "this field" : `these ${errorEntries.length} fields`}</ValidationSummaryTitle>
          <ValidationSummaryList>
            {errorEntries.map(([key, message]) => (
              <li key={key}>
                <a href={`#project-${key}`}>
                  {FIELD_LABELS[key]} — {message}
                </a>
              </li>
            ))}
          </ValidationSummaryList>
        </ValidationSummary>
      ) : null}
      {serverError ? (
        <Alert variant="destructive">
          <AlertTitle>Couldn’t create the project</AlertTitle>
          <AlertDescription>{serverError}</AlertDescription>
        </Alert>
      ) : null}

      <Card>
        <CardContent className="flex flex-col gap-6">
          <Field validation={invalid("name")}>
            <FieldLabel htmlFor="project-name" requirement="Required">Project name</FieldLabel>
            <FieldControl>
              <Input
                id="project-name"
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby="project-name-msg"
                autoComplete="off"
              />
            </FieldControl>
            <FieldMessage id="project-name-msg">{errors.name ?? "3–60 characters, unique in your workspace."}</FieldMessage>
          </Field>

          <Field validation={invalid("owner")}>
            <FieldLabel htmlFor="project-owner" requirement="Required">Owner</FieldLabel>
            <FieldControl>
              <Input
                id="project-owner"
                type="email"
                value={values.owner}
                onChange={(e) => set("owner", e.target.value)}
                aria-invalid={errors.owner ? true : undefined}
                aria-describedby="project-owner-msg"
                autoComplete="email"
              />
            </FieldControl>
            <FieldMessage id="project-owner-msg">{errors.owner ?? "Who answers questions about this project."}</FieldMessage>
          </Field>

          <Field validation={invalid("status")}>
            <FieldLabel htmlFor="project-status" requirement="Required">Status</FieldLabel>
            <FieldControl>
              <Select value={values.status} onValueChange={(v) => set("status", v)}>
                <SelectTrigger
                  id="project-status"
                  aria-invalid={errors.status ? true : undefined}
                  aria-describedby="project-status-msg"
                >
                  <SelectValue placeholder="Choose a status" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(STATUS_LABEL).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FieldControl>
            {errors.status ? <FieldMessage id="project-status-msg">{errors.status}</FieldMessage> : null}
          </Field>

          <Field validation={invalid("description")}>
            <FieldLabel htmlFor="project-description" requirement="Optional">Description</FieldLabel>
            <Textarea
              id="project-description"
              value={values.description}
              onChange={(e) => set("description", e.target.value)}
              aria-invalid={errors.description ? true : undefined}
              aria-describedby="project-description-msg project-description-count"
            />
            <div className="flex gap-2">
              <FieldMessage id="project-description-msg">{errors.description ?? "What is this project for?"}</FieldMessage>
              <FieldCounter id="project-description-count" value={values.description.length} max={DESCRIPTION_MAX} />
            </div>
          </Field>

          <div className="flex min-h-12 items-center gap-1">
            <Checkbox id="project-notify" defaultChecked />
            <Label htmlFor="project-notify">Notify the team</Label>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="button" variant="outline" onClick={() => router.push("/projects")} disabled={saving}>
            Cancel
          </Button>
          <Button type="submit" loading={saving} loadingText="Creating…">
            Create project
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
