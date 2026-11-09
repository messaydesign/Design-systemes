"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

// Validation rules live in your app, not in the component.
function validateEmail(value: string) {
  if (!value) return "Enter your email address."
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return "Enter an email like name@example.com."
  return null
}

export default function InputForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [sent, setSent] = React.useState(false)
  return (
    <form
      noValidate
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const value = String(new FormData(event.currentTarget).get("email") ?? "")
        const message = validateEmail(value)
        setError(message)
        setSent(!message)
        if (message) event.currentTarget.querySelector<HTMLInputElement>("input")?.focus()
      }}
    >
      <Field validation={error ? "error" : sent ? "success" : "none"}>
        <FieldLabel htmlFor="newsletter-email">Email</FieldLabel>
        <FieldControl>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={error ? true : undefined}
            aria-describedby="newsletter-email-msg"
          />
        </FieldControl>
        <FieldMessage id="newsletter-email-msg">
          {error ?? (sent ? "Thanks — you’re subscribed." : "We send one email a month.")}
        </FieldMessage>
      </Field>
      <Button type="submit" className="self-start">
        Subscribe
      </Button>
    </form>
  )
}
