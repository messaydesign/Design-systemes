"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldControl, FieldLabel } from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/main/ui/popover"

// Control `open` to close the popover after a successful submit.
export default function PopoverControlled() {
  const [open, setOpen] = React.useState(false)
  const [label, setLabel] = React.useState("Untitled")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Rename “{label}”</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" aria-labelledby="popover-rename-title">
        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault()
            const value = new FormData(event.currentTarget).get("name")
            if (typeof value === "string" && value.trim()) setLabel(value.trim())
            setOpen(false)
          }}
        >
          <PopoverHeader>
            <PopoverTitle id="popover-rename-title">Rename file</PopoverTitle>
            <PopoverDescription>Press Enter to save or Escape to cancel.</PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="popover-rename">Name</FieldLabel>
            <FieldControl>
              <Input id="popover-rename" name="name" defaultValue={label} />
            </FieldControl>
          </Field>
          <div className="flex justify-end gap-2">
            <PopoverClose asChild>
              <Button type="button" variant="outline" size="sm">
                Cancel
              </Button>
            </PopoverClose>
            <Button type="submit" size="sm">
              Save
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
