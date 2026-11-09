"use client"

import * as React from "react"

import { Alert, AlertDescription } from "@/registry/main/ui/alert"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/main/ui/alert-dialog"
import { Button } from "@/registry/main/ui/button"

// Control `open` to keep the dialog up while the request runs and to show an error if it fails.
// The first attempt fails on purpose so both states are visible.
export default function AlertDialogAsync() {
  const [open, setOpen] = React.useState(false)
  const [pending, setPending] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const attempts = React.useRef(0)

  function revoke() {
    setPending(true)
    setError(null)
    window.setTimeout(() => {
      setPending(false)
      attempts.current += 1
      if (attempts.current % 2 === 1) {
        setError("The server didn’t respond. Check your connection and try again.")
        return
      }
      setOpen(false)
    }, 1200)
  }

  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        if (pending) return
        setOpen(next)
        if (!next) setError(null)
      }}
    >
      <AlertDialogTrigger asChild>
        <Button variant="outline">Revoke API key</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Revoke “Production” key?</AlertDialogTitle>
          <AlertDialogDescription>Apps using this key stop working immediately.</AlertDialogDescription>
        </AlertDialogHeader>
        {error ? (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : null}
        <AlertDialogFooter>
          <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
          {/* A plain Button, not AlertDialogAction, so clicking doesn't close the dialog. */}
          <Button variant="destructive" loading={pending} loadingText="Revoking…" onClick={revoke}>
            {error ? "Try again" : "Revoke key"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
