"use client"

import * as React from "react"

import { Chip } from "@/registry/main/ui/chip"
import { Field, FieldControl, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"

const MAX = 5

export default function ChipForm() {
  const [tags, setTags] = React.useState(["urgent", "billing"])
  const [draft, setDraft] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function add() {
    const tag = draft.trim().toLowerCase()
    if (!tag) return
    if (tags.includes(tag)) return setError(`“${tag}” is already added.`)
    if (tags.length >= MAX) return setError(`Add up to ${MAX} tags.`)
    setTags([...tags, tag])
    setDraft("")
    setError(null)
  }

  return (
    <Field validation={error ? "error" : "none"} className="max-w-sm">
      <FieldLabel htmlFor="tag-input">Tags</FieldLabel>
      {tags.length ? (
        <ul aria-label="Tags" className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              {/* Hidden inputs submit the tags with the surrounding form. */}
              <input type="hidden" name="tags" value={tag} />
              <Chip
                onRemove={() => {
                  setTags(tags.filter((t) => t !== tag))
                  inputRef.current?.focus()
                }}
              >
                {tag}
              </Chip>
            </li>
          ))}
        </ul>
      ) : null}
      <FieldControl>
        <Input
          ref={inputRef}
          id="tag-input"
          value={draft}
          placeholder="Type a tag and press Enter"
          aria-invalid={error ? true : undefined}
          aria-describedby="tag-msg"
          onChange={(event) => {
            setDraft(event.target.value)
            setError(null)
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
              add()
            }
          }}
        />
      </FieldControl>
      <FieldMessage id="tag-msg">{error ?? `${tags.length} of ${MAX} tags.`}</FieldMessage>
    </Field>
  )
}
