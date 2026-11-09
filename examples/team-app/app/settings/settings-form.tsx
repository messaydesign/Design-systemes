"use client"

import * as React from "react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldControl, FieldLabel, FieldMessage } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SettingsForm() {
  const [saved, setSaved] = React.useState(false)
  const [confirmText, setConfirmText] = React.useState("")
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSaved(true)
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Workspace</CardTitle>
            <CardDescription>Shown to everyone in your team.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Field>
              <FieldLabel htmlFor="ws-name">Workspace name</FieldLabel>
              <FieldControl>
                <Input id="ws-name" defaultValue="Team Projects" onChange={() => setSaved(false)} />
              </FieldControl>
            </Field>
            <Field>
              <FieldLabel htmlFor="ws-tz">Time zone</FieldLabel>
              <FieldControl>
                <Select defaultValue="africa-addis" onValueChange={() => setSaved(false)}>
                  <SelectTrigger id="ws-tz" aria-describedby="ws-tz-help">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="africa-addis">Addis Ababa</SelectItem>
                    <SelectItem value="europe-london">London</SelectItem>
                    <SelectItem value="america-new-york">New York</SelectItem>
                  </SelectContent>
                </Select>
              </FieldControl>
              <FieldMessage id="ws-tz-help">Used for due dates and reminders.</FieldMessage>
            </Field>
            {saved ? (
              <Alert status="success" role="status">
                <AlertDescription>Settings saved.</AlertDescription>
              </Alert>
            ) : null}
          </CardContent>
          <CardFooter className="justify-end">
            <Button type="submit">Save settings</Button>
          </CardFooter>
        </Card>
      </form>

      <Card>
        <CardHeader>
          <CardTitle>Delete workspace</CardTitle>
          <CardDescription>Removes all projects for everyone. This can’t be undone.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Dialog onOpenChange={() => setConfirmText("")}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete workspace</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete “Team Projects”?</DialogTitle>
                <DialogDescription>Type the workspace name to confirm.</DialogDescription>
              </DialogHeader>
              <Field>
                <FieldLabel htmlFor="confirm-name">Workspace name</FieldLabel>
                <FieldControl>
                  <Input id="confirm-name" value={confirmText} onChange={(e) => setConfirmText(e.target.value)} autoComplete="off" />
                </FieldControl>
              </Field>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive" disabled={confirmText !== "Team Projects"}>
                    Delete workspace
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  )
}
