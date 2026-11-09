"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"

export default function ButtonLoading() {
  const [saving, setSaving] = React.useState(false)
  return (
    <>
      <Button
        loading={saving}
        onClick={() => {
          setSaving(true)
          window.setTimeout(() => setSaving(false), 2000)
        }}
      >
        Save changes
      </Button>
      <Button variant="secondary" loading loadingText="Saving…">
        Save changes
      </Button>
    </>
  )
}
