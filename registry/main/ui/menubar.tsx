"use client"

import * as React from "react"
import { Menubar as MenubarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/main/ui/button"
import { CheckIcon, ChevronRightIcon } from "@/registry/main/ui/icons"

/*
 * Menubar — Figma "Menubar" (150:1672), Closed/Open.
 * Bar: background fill, 1px subtle stroke drawn inside (like Figma), 8px
 * radius, 8px between triggers. Triggers are Large Ghost buttons (48px,
 * Inter SemiBold 16); the open trigger uses the Ghost Selected face.
 * Menus reuse "Menu / Content" + "Menu / Item" from Dropdown Menu, 8px below.
 * Radix supplies menubar/menuitem roles, roving focus, typeahead and RTL arrows.
 */

const panel =
  "z-50 flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2 overflow-y-auto rounded-lg border border-border bg-popover p-[7px] text-foreground shadow-[0_2px_8px_0_var(--effect-outer)] outline-none"

const item =
  "relative flex h-12 w-full cursor-pointer items-center gap-2 rounded-lg px-4 font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground outline-none select-none data-[highlighted]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:text-[var(--disabled-text)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

function Menubar({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "relative flex w-fit items-center gap-2 rounded-lg bg-background",
        // Stroke painted inside and above the triggers, as in Figma, so
        // 48px triggers keep the bar at 48px.
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border",
        className
      )}
      {...props}
    />
  )
}

const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarRadioGroup = MenubarPrimitive.RadioGroup
const MenubarSub = MenubarPrimitive.Sub

function MenubarTrigger({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "data-[state=open]:border-[var(--button-ghost-selected-border)] data-[state=open]:bg-[var(--button-ghost-selected-background)] data-[state=open]:text-[var(--button-selected-text)]",
        "data-[state=open]:hover:bg-[var(--button-ghost-selected-background)]",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(panel, "max-h-(--radix-menubar-content-available-height)", className)}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
}

function MenubarItem({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & { variant?: "default" | "destructive" }) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-variant={variant}
      className={cn(
        item,
        "data-[variant=destructive]:text-[var(--status-error-text)] data-[variant=destructive]:[&_svg]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem data-slot="menubar-checkbox-item" className={cn(item, className)} {...props}>
      <span className="flex size-4 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({ className, children, ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem data-slot="menubar-radio-item" className={cn(item, className)} {...props}>
      <span className="flex size-4 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Label>) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      className={cn("font-sans text-sm leading-6 md:leading-5 font-medium text-foreground", className)}
      {...props}
    />
  )
}

function MenubarSeparator({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("-mx-2 h-px bg-border", className)}
      {...props}
    />
  )
}

function MenubarShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn("ms-auto font-sans text-sm leading-6 md:leading-5 font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

function MenubarSubTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger>) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      className={cn(item, "data-[state=open]:bg-accent", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ms-auto size-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.SubContent data-slot="menubar-sub-content" className={cn(panel, "w-60", className)} {...props} />
    </MenubarPrimitive.Portal>
  )
}

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
}
