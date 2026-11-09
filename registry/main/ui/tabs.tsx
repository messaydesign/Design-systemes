"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Tabs — Figma "Tabs" (150:1479) + "Tabs / Trigger" (150:1383)
 * Trigger: 48px, 16px inline padding, DM Sans 16/24.
 *   Selected = SemiBold + selected text, plus geometry:
 *     Line → 2px brand-primary bottom rule · Pill → ghost-selected tint
 *   Hover = surface-hover · Focus = 1px outline, 2px offset · Disabled = disabled text
 * Layout: 24px between list and panel; 8px between triggers.
 * Horizontal stacks list over panel; Vertical puts the list at the inline start.
 * Radix supplies tablist/tab/tabpanel roles, roving focus and RTL arrows.
 */

type TabsVariant = "line" | "pill"

const TabsVariantContext = React.createContext<TabsVariant>("line")

function Tabs({ className, orientation = "horizontal", ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      orientation={orientation}
      className={cn("flex gap-6 data-[orientation=horizontal]:flex-col", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  variant = "line",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & { variant?: TabsVariant }) {
  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        data-variant={variant}
        className={cn(
          // Scrolls on narrow screens instead of shrinking targets; the 3px
          // gutter keeps the focus outline from being clipped.
          "-m-[3px] flex shrink-0 gap-2 overflow-x-auto p-[3px] data-[orientation=vertical]:flex-col data-[orientation=vertical]:overflow-visible",
          className
        )}
        {...props}
      />
    </TabsVariantContext.Provider>
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const variant = React.useContext(TabsVariantContext)
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      data-variant={variant}
      className={cn(
        "relative inline-flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-[var(--radius)] px-4 whitespace-nowrap",
        "font-sans text-base leading-6 font-normal text-foreground outline-none",
        "transition-[background-color,color] duration-150",
        "hover:bg-[var(--surface-hover)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus-color)]",
        "data-[state=active]:font-semibold data-[state=active]:text-[var(--button-selected-text)]",
        "data-[variant=line]:data-[state=active]:border-b-2 data-[variant=line]:data-[state=active]:border-[var(--brand-primary)]",
        "data-[variant=pill]:data-[state=active]:bg-[var(--button-ghost-selected-background)] data-[variant=pill]:data-[state=active]:hover:bg-[var(--button-ghost-selected-background)]",
        "disabled:pointer-events-none disabled:text-[var(--disabled-text)] disabled:data-[state=active]:text-[var(--disabled-text)]",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-2 rounded-[var(--radius)] outline-none",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus-color)]",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
