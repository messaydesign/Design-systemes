"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"

export default function ButtonSelected() {
  const [view, setView] = React.useState("list")
  return (
    <div role="group" aria-label="View" className="flex gap-2">
      {["list", "board", "calendar"].map((v) => (
        <Button key={v} variant="secondary" selected={view === v} onClick={() => setView(v)}>
          {v[0].toUpperCase() + v.slice(1)}
        </Button>
      ))}
    </div>
  )
}
