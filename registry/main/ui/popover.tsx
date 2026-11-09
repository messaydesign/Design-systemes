"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Popover — Figma "Popover" (135:792)
 * Anchored, non-modal surface: 16px padding, 8px gap, subtle border, outer shadow.
 * Corner: Default 8 · Soft 16 · Pill (short content only).
 * Optional PopoverHeader: SemiBold title + secondary description, 8px apart.
 */

function Popover(props: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger(props: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverAnchor(props: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

function PopoverClose(props: React.ComponentProps<typeof PopoverPrimitive.Close>) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />
}

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
          "border border-border bg-popover font-sans text-base leading-6 text-foreground shadow-[0_2px_8px_0_var(--effect-outer)]",
          corner === "soft"
            ? "rounded-xl"
            : corner === "pill"
              ? // Figma Pill: the panel keeps 8px; controls inside become pills.
                "rounded-lg [&_[data-slot=button]]:rounded-full [&_[data-slot=input]]:rounded-full [&_[data-slot=select-trigger]]:rounded-full"
              : "rounded-lg",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="popover-header" className={cn("flex flex-col gap-2", className)} {...props} />
}

function PopoverTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <div
      data-slot="popover-title"
      className={cn("font-sans text-base leading-6 font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function PopoverDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="popover-description"
      className={cn("font-sans text-sm leading-6 text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
}
