"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldMessage } from "@/registry/main/ui/field"
import { Slider } from "@/registry/main/ui/slider"

export default function SliderForm() {
  const [budget, setBudget] = React.useState([500])
  const [error, setError] = React.useState<string | null>(null)
  const [saved, setSaved] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        // Inside a form, Slider renders a hidden input per thumb with `name`.
        const value = Number(new FormData(event.currentTarget).get("budget"))
        const message = value < 200 ? "Campaigns need a budget of at least €200." : null
        setError(message)
        setSaved(message ? null : `Budget set to €${value} per month.`)
      }}
    >
      <Field validation={error ? "error" : saved ? "success" : "none"} className="gap-0">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Monthly budget</span>
          <span className="text-muted-foreground tabular-nums">€{budget[0]}</span>
        </div>
        <Slider
          name="budget"
          value={budget}
          onValueChange={setBudget}
          min={0}
          max={2000}
          step={50}
          thumbLabels={["Monthly budget"]}
        />
        <FieldMessage>{error ?? saved ?? "You can change this at any time."}</FieldMessage>
      </Field>
      <Button type="submit" className="self-start">
        Save budget
      </Button>
    </form>
  )
}
