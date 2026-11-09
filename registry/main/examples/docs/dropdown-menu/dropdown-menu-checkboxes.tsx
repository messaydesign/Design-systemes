"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"

// Checkbox items toggle without closing the menu when you call preventDefault in onSelect.
export default function DropdownMenuCheckboxes() {
  const [columns, setColumns] = React.useState({ status: true, owner: true, updated: false })
  const toggle = (key: keyof typeof columns) => (checked: boolean) => setColumns((c) => ({ ...c, [key]: checked }))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Columns</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-60">
        <DropdownMenuLabel>Show columns</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={columns.status} onCheckedChange={toggle("status")} onSelect={(e) => e.preventDefault()}>
          Status
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={columns.owner} onCheckedChange={toggle("owner")} onSelect={(e) => e.preventDefault()}>
          Owner
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={columns.updated} onCheckedChange={toggle("updated")} onSelect={(e) => e.preventDefault()}>
          Last updated
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
