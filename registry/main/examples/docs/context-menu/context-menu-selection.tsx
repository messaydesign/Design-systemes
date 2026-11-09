"use client"

import * as React from "react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/main/ui/context-menu"

export default function ContextMenuSelection() {
  const [grid, setGrid] = React.useState(true)
  const [rulers, setRulers] = React.useState(false)
  const [zoom, setZoom] = React.useState("100")

  return (
    <ContextMenu>
      <ContextMenuTrigger tabIndex={0} className="outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-ring flex h-40 w-full max-w-80 flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-border bg-muted p-4 text-center text-sm text-muted-foreground">
        <span>Canvas — right-click for view options</span>
        <span>
          Grid {grid ? "on" : "off"} · Rulers {rulers ? "on" : "off"} · {zoom}%
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem checked={grid} onCheckedChange={setGrid}>
          Show grid
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={rulers} onCheckedChange={setRulers}>
          Show rulers
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>Zoom</ContextMenuLabel>
        <ContextMenuRadioGroup value={zoom} onValueChange={setZoom}>
          <ContextMenuRadioItem value="50">50%</ContextMenuRadioItem>
          <ContextMenuRadioItem value="100">100%</ContextMenuRadioItem>
          <ContextMenuRadioItem value="200">200%</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
