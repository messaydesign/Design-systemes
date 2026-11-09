"use client"

import * as React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/main/ui/alert-dialog"
import { Button } from "@/registry/main/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/registry/main/ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/main/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"
import { Field, FieldControl, FieldGroup, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/main/ui/hover-card"
import { ChevronDownIcon, PlusIcon, UserIcon } from "@/registry/main/ui/icons"
import { Input } from "@/registry/main/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/main/ui/popover"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/main/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/main/ui/tooltip"
import { PreviewFrame, Section } from "@/registry/main/examples/preview-frame"

function ProfileFields() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="ov-name">Full name</FieldLabel>
        <FieldControl>
          <Input id="ov-name" placeholder="Enter your name" />
        </FieldControl>
        <FieldMessage>Helpful guidance for this field.</FieldMessage>
      </Field>
      <Field>
        <FieldLabel htmlFor="ov-email">Email</FieldLabel>
        <FieldControl>
          <Input id="ov-email" type="email" placeholder="name@example.com" />
        </FieldControl>
        <FieldMessage>Helpful guidance for this field.</FieldMessage>
      </Field>
    </FieldGroup>
  )
}

function Modals() {
  return (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile. Save when you are done.</DialogDescription>
          </DialogHeader>
          <ProfileFields />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Soft corners</Button>
        </DialogTrigger>
        <DialogContent corner="soft">
          <DialogHeader>
            <DialogTitle>Soft dialog</DialogTitle>
            <DialogDescription>Corner style Soft uses a 16px radius.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button corner="soft">Done</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete project</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this project?</AlertDialogTitle>
            <AlertDialogDescription>
              This permanently removes the project and its files. You can’t undo this.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete project</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {(["end", "start"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">Sheet · {side === "end" ? "trailing" : "leading"}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile. Save when you are done.</SheetDescription>
            </SheetHeader>
            <ProfileFields />
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button>Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

function Floating() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="font-semibold">Dimensions</p>
          <p className="text-[var(--text-secondary)]">Set the width for this layer.</p>
          <Field>
            <FieldLabel htmlFor="pop-width">Width</FieldLabel>
            <FieldControl>
              <Input id="pop-width" defaultValue="100%" />
            </FieldControl>
          </Field>
        </PopoverContent>
      </Popover>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="secondary" aria-label="Add item">
            <PlusIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Descriptive control name</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Hover for tooltip (bottom)</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltips supplement, never replace, the label.</TooltipContent>
      </Tooltip>

      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#profile" className="font-medium text-[var(--button-link-default-text)] underline">
            @messay
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex size-12 items-center justify-center rounded-full bg-[var(--muted-background)] text-sm font-medium">
            MM
          </div>
          <p className="font-semibold">Messay M.</p>
          <p>Product designer building considered digital experiences.</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

function Menus() {
  const [statusBar, setStatusBar] = React.useState(true)
  const [panel, setPanel] = React.useState(false)
  const [position, setPosition] = React.useState("bottom")
  return (
    <div className="flex flex-wrap items-start gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            My account
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UserIcon />
              Profile
              <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserIcon />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserIcon />
                Share
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem disabled>
              <UserIcon />
              Billing (disabled)
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <UserIcon />
              Delete project
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            View options
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
            Status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={panel} onCheckedChange={setPanel}>
            Activity panel
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Panel position</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <ContextMenu>
        <ContextMenuTrigger className="flex h-40 w-full max-w-[480px] items-center justify-center rounded-[var(--radius)] border border-dashed border-[var(--border-control)] text-sm text-[var(--text-secondary)]">
          Right-click here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}

export function OverlaysShowcase() {
  return (
    <PreviewFrame>
      <Section title="Dialog · Alert Dialog · Sheet">
        <Modals />
      </Section>
      <Section title="Popover · Tooltip · Hover Card">
        <Floating />
      </Section>
      <Section title="Dropdown Menu · Context Menu">
        <Menus />
      </Section>
    </PreviewFrame>
  )
}
