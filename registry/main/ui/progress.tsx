"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Progress — Figma "Forms/Progress" (31:656)
 * 8px pill track (--surface-pressed) with a brand-primary value.
 * value={null} renders Figma's Indeterminate state (a 1/3 bar that slides,
 * static when reduced motion is preferred).
 */
function Progress({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const indeterminate = value === null || value === undefined
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-[var(--surface-pressed)]", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full rounded-full bg-primary transition-[width] duration-300 motion-reduce:transition-none",
          indeterminate && "w-1/3 motion-safe:animate-[progress-indeterminate_1.4s_ease-in-out_infinite]"
        )}
        style={indeterminate ? undefined : { width: `${Math.min(100, Math.max(0, value ?? 0))}%` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
