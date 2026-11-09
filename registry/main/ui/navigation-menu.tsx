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
 *
 * shadcn API: `viewport` on NavigationMenu, plus NavigationMenuViewport and
 * NavigationMenuIndicator. Deliberate deviation: `viewport` defaults to false
 * (shadcn: true) so each panel opens inline below its own trigger, which is
 * the Figma design. `viewport` (true) renders one shared shadcn-style viewport
 * below the whole row; the panel styling (border, surface, radius) moves to
 * the viewport and its size animates between panels.
 */

function NavigationMenu({
  className,
  children,
  viewport = false,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn("group/navigation-menu relative flex max-w-max flex-1 items-center", className)}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
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
        "absolute start-0 flex w-max flex-col gap-2 p-[15px] text-foreground",
        // Inline (viewport={false}): the content is the panel, 8px below its trigger.
        "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:z-50 group-data-[viewport=false]/navigation-menu:mt-2",
        "group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:border-border group-data-[viewport=false]/navigation-menu:bg-popover",
        // In a viewport: the viewport draws the panel; content sits at its origin.
        "group-data-[viewport=true]/navigation-menu:top-0",
        "[&_[data-slot=navigation-menu-link]]:w-60",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute start-0 top-full isolate z-50 flex">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "relative mt-2 h-(--radix-navigation-menu-viewport-height) w-(--radix-navigation-menu-viewport-width) max-w-[calc(100vw-2rem)] overflow-hidden",
          "rounded-lg border border-border bg-popover text-foreground",
          "transition-[width,height] duration-150 motion-reduce:transition-none",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-[1] flex h-2 items-end justify-center overflow-hidden transition-opacity duration-150 data-[state=hidden]:opacity-0",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border" />
    </NavigationMenuPrimitive.Indicator>
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
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
