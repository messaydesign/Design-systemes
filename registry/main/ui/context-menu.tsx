"use client"

import * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon, ChevronRightIcon } from "@/registry/main/ui/icons"

/*
 * Context Menu — Figma "Context Menu" (148:1972) using
 * "Menu / Content" (137:112) and "Menu / Item" (137:111).
 * Panel: 320px, 8px padding, 8px gap, subtle border, outer shadow.
 * Item: 48px, 16px inline padding, 16px icon, DM Sans 16/24.
 * Kinds: Action · Destructive (variant) · Checkbox · Radio · Submenu.
 * Opens on right-click / long-press / Shift+F10 at the pointer.
 * Action-menu semantics (menuitem*), not a listbox.
 */

const panel =
  "z-50 flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2 overflow-y-auto rounded-lg border border-border bg-popover p-[7px] text-foreground shadow-[0_2px_8px_0_var(--effect-outer)] outline-none"

const item =
  "relative flex h-12 w-full cursor-pointer items-center gap-2 rounded-lg px-4 font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground outline-none select-none data-[highlighted]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:text-[var(--disabled-text)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

function ContextMenuContent({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(panel, "max-h-(--radix-context-menu-content-available-height)", className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuGroup({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group
      data-slot="context-menu-group"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function ContextMenuItem({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & { variant?: "default" | "destructive" }) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-variant={variant}
      className={cn(item, "data-[variant=destructive]:text-[var(--status-error-text)] data-[variant=destructive]:[&_svg]:text-foreground", className)}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(item, className)}
      {...props}
    >
      <span className="flex size-4 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem data-slot="context-menu-radio-item" className={cn(item, className)} {...props}>
      <span className="flex size-4 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Label>) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      className={cn("font-sans text-sm leading-6 md:leading-5 font-medium text-foreground", className)}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("-mx-2 h-px bg-border", className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn("ms-auto font-sans text-sm leading-6 md:leading-5 font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger>) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      className={cn(item, "data-[state=open]:bg-accent", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ms-auto size-4" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.SubContent
        data-slot="context-menu-sub-content"
        className={cn(panel, "w-60", className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
}
