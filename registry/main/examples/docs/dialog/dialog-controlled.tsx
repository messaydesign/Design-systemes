"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/main/ui/dialog"

// Keep the dialog open while saving; close it from your own code when done.
export default function DialogControlled() {
  const [open, setOpen] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Publish</Button>
      <Dialog open={open} onOpenChange={(next) => !saving && setOpen(next)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Publish this page?</DialogTitle>
            <DialogDescription>It becomes visible to everyone in your workspace.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" disabled={saving} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              loading={saving}
              loadingText="Publishing…"
              onClick={() => {
                setSaving(true)
                window.setTimeout(() => {
                  setSaving(false)
                  setOpen(false)
                }, 1500)
              }}
            >
              Publish
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
