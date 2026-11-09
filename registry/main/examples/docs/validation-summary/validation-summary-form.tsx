"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldControl, FieldGroup, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"
import {
  ValidationSummary,
  ValidationSummaryList,
  ValidationSummaryTitle,
} from "@/registry/main/ui/validation-summary"

type Errors = Partial<Record<"vs-name" | "vs-email", string>>

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (!String(data.get("name") ?? "").trim()) errors["vs-name"] = "Enter your full name"
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(data.get("email") ?? ""))) errors["vs-email"] = "Enter an email like name@example.com"
  return errors
}

export default function ValidationSummaryForm() {
  const [errors, setErrors] = React.useState<Errors | null>(null)
  const summaryRef = React.useRef<HTMLDivElement>(null)
  const entries = Object.entries(errors ?? {}) as [keyof Errors, string][]

  React.useEffect(() => {
    // Error summaries are focusable (tabIndex -1): move focus there after submit.
    if (errors && Object.keys(errors).length) summaryRef.current?.focus()
  }, [errors])

  return (
    <form
      noValidate
      className="flex w-full max-w-md flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault()
        setErrors(validate(new FormData(event.currentTarget)))
      }}
    >
      {errors && entries.length ? (
        <ValidationSummary ref={summaryRef} status="error" aria-labelledby="vs-form-title">
          <ValidationSummaryTitle id="vs-form-title">
            Fix {entries.length} {entries.length === 1 ? "problem" : "problems"} to continue
          </ValidationSummaryTitle>
          <ValidationSummaryList>
            {entries.map(([id, message]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => {
                    event.preventDefault()
                    document.getElementById(id)?.focus()
                  }}
                >
                  {message}
                </a>
              </li>
            ))}
          </ValidationSummaryList>
        </ValidationSummary>
      ) : null}
      {errors && !entries.length ? (
        <ValidationSummary status="success">
          <ValidationSummaryTitle>Details saved</ValidationSummaryTitle>
        </ValidationSummary>
      ) : null}
      <FieldGroup>
        <Field validation={errors?.["vs-name"] ? "error" : "none"}>
          <FieldLabel htmlFor="vs-name">Full name</FieldLabel>
          <FieldControl>
            <Input id="vs-name" name="name" autoComplete="name" aria-invalid={errors?.["vs-name"] ? true : undefined} aria-describedby="vs-name-msg" />
          </FieldControl>
          <FieldMessage id="vs-name-msg">{errors?.["vs-name"]}</FieldMessage>
        </Field>
        <Field validation={errors?.["vs-email"] ? "error" : "none"}>
          <FieldLabel htmlFor="vs-email">Email</FieldLabel>
          <FieldControl>
            <Input id="vs-email" name="email" type="email" autoComplete="email" aria-invalid={errors?.["vs-email"] ? true : undefined} aria-describedby="vs-email-msg" />
          </FieldControl>
          <FieldMessage id="vs-email-msg">{errors?.["vs-email"]}</FieldMessage>
        </Field>
      </FieldGroup>
      <Button type="submit" className="self-start">
        Save details
      </Button>
    </form>
  )
}
