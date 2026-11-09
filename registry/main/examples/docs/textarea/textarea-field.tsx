"use client"

import * as React from "react"

import { Field, FieldCounter, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Textarea } from "@/registry/main/ui/textarea"

const MAX = 160

export default function TextareaField() {
  const [bio, setBio] = React.useState("")
  return (
    <Field validation={bio.length > MAX ? "error" : "none"} className="max-w-md">
      <FieldLabel htmlFor="bio" requirement="Optional">
        Bio
      </FieldLabel>
      <Textarea
        id="bio"
        value={bio}
        onChange={(event) => setBio(event.target.value)}
        aria-invalid={bio.length > MAX || undefined}
        aria-describedby="bio-help bio-count"
        placeholder="A sentence or two about you"
      />
      <div className="flex gap-4">
        <FieldMessage id="bio-help">
          {bio.length > MAX ? `Shorten your bio to ${MAX} characters.` : "Shown on your public profile."}
        </FieldMessage>
        <FieldCounter id="bio-count" value={bio.length} max={MAX} />
      </div>
    </Field>
  )
}
