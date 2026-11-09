"use client"

import * as React from "react"

import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/registry/main/ui/input-group"

export default function InputGroupPassword() {
  const [visible, setVisible] = React.useState(false)
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="new-password">Password</FieldLabel>
      <FieldControl>
        <InputGroup >
          <InputGroupInput
            id="new-password"
            type={visible ? "text" : "password"}
            autoComplete="new-password"
            aria-describedby="new-password-help"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton aria-pressed={visible} aria-controls="new-password" onClick={() => setVisible((v) => !v)}>
              {visible ? "Hide" : "Show"}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </FieldControl>
      <FieldMessage id="new-password-help">At least 12 characters.</FieldMessage>
    </Field>
  )
}
