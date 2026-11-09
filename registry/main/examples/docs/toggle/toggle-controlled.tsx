"use client"

import * as React from "react"

import { InfoIcon } from "@/registry/main/ui/icons"
import { Toggle } from "@/registry/main/ui/toggle"

export default function ToggleControlled() {
  const [pressed, setPressed] = React.useState(false)
  return (
    <div className="flex flex-col items-center gap-4">
      <Toggle variant="outline" pressed={pressed} onPressedChange={setPressed}>
        <InfoIcon />
        Show tips
      </Toggle>
      <p className="text-sm text-muted-foreground">Tips are {pressed ? "on" : "off"}.</p>
    </div>
  )
}
