"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Popover — Figma "Popover" (135:792)
 * Anchored, non-modal surface: 16px padding, 8px gap, subtle border, outer shadow.
 * Corner: Default 8 · Soft 16 · Pill (short content only).
 */

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverAnchor = PopoverPrimitive.Anchor
const PopoverClose = PopoverPrimitive.Close

function PopoverContent({
  className,
  align = "center",
  sideOffset = 8,
  corner = "default",
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> & { corner?: "default" | "soft" | "pill" }) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 flex w-[400px] max-w-[calc(100vw-2rem)] flex-col gap-2 p-[15px] outline-none",
          "border border-[var(--border-subtle)] bg-[var(--surface-elevated)] font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground shadow-[0_2px_8px_0_var(--effect-outer)]",
          corner === "soft" ? "rounded-[var(--radius-soft)]" : corner === "pill" ? "rounded-full" : "rounded-[var(--radius)]",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger }
