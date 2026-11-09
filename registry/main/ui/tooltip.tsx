"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Tooltip — Figma "Tooltip" (148:148)
 * Inverse bubble (dark on light, light on dark): 8px padding, 8px radius,
 * DM Sans 12/16, 192px text width, 8px rotated-square arrow.
 * Text-only, never focusable; the trigger keeps its own accessible name.
 */

function TooltipProvider({
  delayDuration = 300,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />
}

function Tooltip(props: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

const TooltipTrigger = TooltipPrimitive.Trigger

function TooltipContent({
  className,
  sideOffset = 4,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-w-[208px] rounded-lg bg-[var(--tooltip-background)] p-2",
          "font-sans text-xs leading-4 text-[var(--tooltip-text)]",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow width={11.314} height={5.657} className="fill-[var(--tooltip-background)]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
