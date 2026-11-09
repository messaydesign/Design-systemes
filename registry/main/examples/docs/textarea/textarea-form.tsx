"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Textarea } from "@/registry/main/ui/textarea"

// Validation rules live in your app, not in the component.
function validate(value: string) {
  if (!value.trim()) return "Write your feedback before sending."
  if (value.trim().length < 20) return "Add a little more detail (at least 20 characters)."
  return null
}

export default function TextareaForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [sent, setSent] = React.useState(false)

  return (
    <form
      noValidate
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const value = String(new FormData(event.currentTarget).get("feedback") ?? "")
        const message = validate(value)
        setError(message)
        setSent(!message)
        if (message) event.currentTarget.querySelector("textarea")?.focus()
      }}
    >
      <Field validation={error ? "error" : sent ? "success" : "none"}>
        <FieldLabel htmlFor="feedback" requirement="Required">
          Feedback
        </FieldLabel>
        <Textarea
          id="feedback"
          name="feedback"
          required
          aria-invalid={error ? true : undefined}
          aria-describedby="feedback-msg"
        />
        <FieldMessage id="feedback-msg">
          {error ?? (sent ? "Thanks — we read every message." : "Tell us what you like or what to improve.")}
        </FieldMessage>
      </Field>
      <Button type="submit" className="self-start">
        Send feedback
      </Button>
    </form>
  )
}
