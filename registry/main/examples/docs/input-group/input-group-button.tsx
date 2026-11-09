"use client"

import * as React from "react"

import { Field, FieldControl, FieldLabel } from "@/registry/main/ui/field"
import { CheckIcon, FileIcon } from "@/registry/main/ui/icons"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/registry/main/ui/input-group"

const LINK = "https://example.com/invite/7f3a9c"

export default function InputGroupWithButton() {
  const [copied, setCopied] = React.useState(false)
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="invite-link">Invite link</FieldLabel>
      <FieldControl>
        <InputGroup >
          <InputGroupInput id="invite-link" readOnly value={LINK} />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              aria-label={copied ? "Copied" : "Copy link"}
              onClick={() => {
                void navigator.clipboard?.writeText(LINK)
                setCopied(true)
              }}
            >
              {copied ? <CheckIcon /> : <FileIcon />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </FieldControl>
      <span aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </Field>
  )
}
