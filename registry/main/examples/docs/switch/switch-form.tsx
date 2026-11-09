"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/registry/main/ui/field"
import { Switch } from "@/registry/main/ui/switch"

export default function SwitchForm() {
  const [publicProfile, setPublicProfile] = React.useState(false)
  const [saved, setSaved] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        // A checked switch submits name=value ("on" by default), like a checkbox.
        const data = new FormData(event.currentTarget)
        setSaved(data.get("public") ? "Your profile is public." : "Your profile is private.")
      }}
    >
      <Field orientation="horizontal" className="items-center justify-between gap-4">
        <FieldContent className="gap-0">
          <FieldLabel htmlFor="public-profile">Public profile</FieldLabel>
          <FieldDescription id="public-profile-help">
            {publicProfile ? "Anyone with the link can see your profile." : "Only people in your team can see your profile."}
          </FieldDescription>
        </FieldContent>
        <Switch
          id="public-profile"
          name="public"
          checked={publicProfile}
          onCheckedChange={setPublicProfile}
          aria-describedby="public-profile-help"
        />
      </Field>
      <Button type="submit" className="self-start">
        Save
      </Button>
      {saved ? (
        <p role="status" className="text-sm text-muted-foreground">
          {saved}
        </p>
      ) : null}
    </form>
  )
}
