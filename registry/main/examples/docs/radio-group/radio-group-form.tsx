"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldError, FieldLabel, FieldLegend, FieldSet } from "@/registry/main/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/main/ui/radio-group"

const sizes = ["Small", "Medium", "Large"]

export default function RadioGroupForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [saved, setSaved] = React.useState<string | null>(null)

  return (
    <form
      noValidate
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        // RadioGroup submits its `name` with the selected value.
        const value = new FormData(event.currentTarget).get("size")
        const message = value ? null : "Choose a size."
        setError(message)
        setSaved(message ? null : String(value))
        if (message) event.currentTarget.querySelector<HTMLButtonElement>("[role=radio]")?.focus()
      }}
    >
      <FieldSet>
        <FieldLegend variant="label">T-shirt size</FieldLegend>
        <RadioGroup
          name="size"
          required
          aria-invalid={error ? true : undefined}
          aria-describedby="size-msg"
          className="gap-y-0"
          onValueChange={() => setError(null)}
        >
          {sizes.map((size) => (
            <div key={size} className="flex items-center gap-1">
              <RadioGroupItem value={size.toLowerCase()} id={`size-${size.toLowerCase()}`} aria-invalid={error ? true : undefined} />
              <FieldLabel htmlFor={`size-${size.toLowerCase()}`}>{size}</FieldLabel>
            </div>
          ))}
        </RadioGroup>
        <Field validation={error ? "error" : "none"}>
          <FieldError id="size-msg">{error}</FieldError>
        </Field>
      </FieldSet>
      <Button type="submit" className="self-start">
        Add to bag
      </Button>
      {saved ? (
        <p role="status" className="text-sm text-muted-foreground">
          Added size {saved}.
        </p>
      ) : null}
    </form>
  )
}
