"use client"

import * as React from "react"

import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { ArrowRightIcon } from "@/registry/main/ui/icons"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/registry/main/ui/input-group"

export default function InputGroupForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [joined, setJoined] = React.useState<string | null>(null)

  return (
    <form
      noValidate
      className="w-full max-w-sm"
      onSubmit={(event) => {
        event.preventDefault()
        const value = String(new FormData(event.currentTarget).get("workspace") ?? "").trim()
        const message = !value ? "Enter a workspace name." : /^[a-z0-9-]+$/.test(value) ? null : "Use lowercase letters, numbers and dashes."
        setError(message)
        setJoined(message ? null : value)
        if (message) event.currentTarget.querySelector("input")?.focus()
      }}
    >
      <Field validation={error ? "error" : joined ? "success" : "none"}>
        <FieldLabel htmlFor="workspace">Workspace</FieldLabel>
        <FieldControl>
          <InputGroup >
            <InputGroupInput
              id="workspace"
              name="workspace"
              autoComplete="off"
              aria-invalid={error ? true : undefined}
              aria-describedby="workspace-msg"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText className="text-muted-foreground">.example.com</InputGroupText>
              <InputGroupButton type="submit" size="icon-xs" aria-label="Join workspace">
                <ArrowRightIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </FieldControl>
        <FieldMessage id="workspace-msg">
          {error ?? (joined ? `Joining ${joined}.example.com…` : "Ask your admin for the workspace name.")}
        </FieldMessage>
      </Field>
    </form>
  )
}
