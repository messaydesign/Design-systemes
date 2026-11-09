"use client"

import * as React from "react"

import { Field, FieldCounter, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Textarea } from "@/registry/main/ui/textarea"

const MAX = 120

export default function FieldWithCounter() {
  const [bio, setBio] = React.useState("")
  const over = bio.length > MAX
  return (
    <Field validation={over ? "error" : "none"} className="max-w-sm">
      <FieldLabel htmlFor="bio" requirement="Optional">Bio</FieldLabel>
      <Textarea
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        aria-invalid={over || undefined}
        aria-describedby="bio-msg bio-count"
      />
      <div className="flex gap-2">
        <FieldMessage id="bio-msg">{over ? `Keep it under ${MAX} characters.` : "A line or two about you."}</FieldMessage>
        <FieldCounter id="bio-count" value={bio.length} max={MAX} />
      </div>
    </Field>
  )
}
