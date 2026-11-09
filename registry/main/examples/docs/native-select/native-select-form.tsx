"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { NativeSelect, NativeSelectOption } from "@/registry/main/ui/native-select"

export default function NativeSelectForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [saved, setSaved] = React.useState<string | null>(null)

  return (
    <form
      noValidate
      className="flex w-full max-w-xs flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        const value = String(new FormData(event.currentTarget).get("language") ?? "")
        const message = value ? null : "Choose a language."
        setError(message)
        setSaved(message ? null : value)
        if (message) event.currentTarget.querySelector("select")?.focus()
      }}
    >
      <Field validation={error ? "error" : saved ? "success" : "none"}>
        <FieldLabel htmlFor="language" requirement="Required">
          Language
        </FieldLabel>
        <FieldControl>
          <NativeSelect
            id="language"
            name="language"
            required
            defaultValue=""
            aria-invalid={error ? true : undefined}
            aria-describedby="language-msg"
          >
            <NativeSelectOption value="" disabled>
              Select a language
            </NativeSelectOption>
            <NativeSelectOption value="en">English</NativeSelectOption>
            <NativeSelectOption value="de">Deutsch</NativeSelectOption>
            <NativeSelectOption value="fr">Français</NativeSelectOption>
          </NativeSelect>
        </FieldControl>
        <FieldMessage id="language-msg">{error ?? (saved ? "Language saved." : "Used for emails and the interface.")}</FieldMessage>
      </Field>
      <Button type="submit" className="self-start">
        Save
      </Button>
    </form>
  )
}
