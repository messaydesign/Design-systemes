"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Checkbox } from "@/registry/main/ui/checkbox"
import { Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/registry/main/ui/field"

const channels = [
  { value: "email", label: "Email" },
  { value: "sms", label: "Text message" },
  { value: "push", label: "Push notification" },
]

export default function CheckboxForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [saved, setSaved] = React.useState<string[] | null>(null)

  return (
    <form
      noValidate
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        // Checked checkboxes submit their name/value like native inputs.
        const values = new FormData(event.currentTarget).getAll("channel").map(String)
        const message = values.length ? null : "Choose at least one channel."
        setError(message)
        setSaved(message ? null : values)
        if (message) event.currentTarget.querySelector<HTMLButtonElement>("[role=checkbox]")?.focus()
      }}
    >
      <FieldSet aria-describedby="channels-msg">
        <FieldLegend variant="label">Notify me by</FieldLegend>
        <FieldGroup className="gap-0">
          {channels.map((channel) => (
            <div key={channel.value} className="flex items-center gap-1">
              <Checkbox
                id={`channel-${channel.value}`}
                name="channel"
                value={channel.value}
                aria-invalid={error ? true : undefined}
              />
              <FieldLabel htmlFor={`channel-${channel.value}`}>{channel.label}</FieldLabel>
            </div>
          ))}
        </FieldGroup>
        <Field validation={error ? "error" : "none"}>
          <FieldError id="channels-msg">{error}</FieldError>
        </Field>
      </FieldSet>
      <Button type="submit" className="self-start">
        Save preferences
      </Button>
      {saved ? (
        <p role="status" className="text-sm text-muted-foreground">
          Saved: {saved.join(", ")}.
        </p>
      ) : null}
    </form>
  )
}
