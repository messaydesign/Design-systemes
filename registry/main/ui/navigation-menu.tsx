"use client"

import * as React from "react"
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/main/ui/button"
import { ChevronDownIcon } from "@/registry/main/ui/icons"
import { navItemClasses } from "@/registry/main/ui/nav-item"

/*
 * Navigation Menu — Figma "Navigation Menu" (150:1787), Closed/Open.
 * Site navigation (links), not application commands (use Menubar).
 * Row: 8px gap. Trigger = Large Ghost button with a 24px trailing chevron;
 * open trigger uses the Ghost Selected face. Top-level links use the Link
 * button variant. Content panel: surface-elevated, 1px subtle border,
 * 8px radius, 16px padding, 8px gap, Navigation / Item rows (240px), 8px
 * below the trigger, aligned to the inline start.
 */

function NavigationMenu({ className, children, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn("relative flex max-w-max flex-1 items-center", className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("flex flex-1 list-none items-center gap-2", className)}
      {...props}
    />
  )
}

function NavigationMenuItem({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" className={cn("relative", className)} {...props} />
}

const navigationMenuTriggerStyle = () =>
  cn(
    buttonVariants({ variant: "ghost" }),
    "data-[state=open]:border-[var(--button-ghost-selected-border)] data-[state=open]:bg-[var(--button-ghost-selected-background)] data-[state=open]:text-[var(--button-selected-text)]",
    "data-[state=open]:hover:bg-[var(--button-ghost-selected-background)]"
  )

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="size-6" />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "absolute start-0 top-full z-50 mt-2 flex w-max flex-col gap-2",
        "rounded-lg border border-border bg-popover p-[15px] text-foreground",
        "[&_[data-slot=navigation-menu-link]]:w-60",
        className
      )}
      {...props}
    />
  )
}

/**
 * variant="item" (default) is a Navigation / Item row for panels;
 * variant="link" is a top-level link styled as the Link button.
 * Pass `active` for the current page (sets aria-current="page").
 */
function NavigationMenuLink({
  className,
  variant = "item",
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link> & { variant?: "item" | "link" }) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      data-variant={variant}
      className={cn(variant === "link" ? buttonVariants({ variant: "link" }) : navItemClasses, className)}
      {...props}
    />
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
}
