"use client"

import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Radio — Figma ".Building blocks/Radio" (28:1015), "Forms/Radio group" (29:228)
 * 24px circle inside a 48×32 touch target; selected = brand fill + 8px dot.
 * Options sit 16px apart in both layouts (Figma Stacked / Inline).
 */
function RadioGroup({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      orientation={orientation}
      className={cn("flex gap-4", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "peer group/radio relative inline-flex h-8 w-12 shrink-0 cursor-pointer items-center justify-center rounded-lg outline-none",
        "[--rb-bg:var(--input-surface)] [--rb-border:var(--border-control)] [--rb-dot:var(--brand-on-primary)]",
        "hover:[--rb-bg:var(--surface-hover)]",
        "focus-visible:bg-[var(--selected-background)] focus-visible:[--rb-border:var(--brand-primary)]",
        "data-[state=checked]:[--rb-bg:var(--brand-primary)] data-[state=checked]:[--rb-border:var(--brand-primary)]",
        "data-[state=checked]:hover:[--rb-bg:var(--brand-primary-hover)] data-[state=checked]:hover:[--rb-dot:var(--primary-active-foreground)]",
        "data-[state=checked]:active:[--rb-bg:var(--brand-primary-pressed)] data-[state=checked]:active:[--rb-dot:var(--primary-active-foreground)]",
        "aria-invalid:[--rb-border:var(--status-error-border)]",
        "disabled:pointer-events-none disabled:[--rb-bg:var(--disabled-background)] disabled:[--rb-border:var(--disabled-border)] disabled:[--rb-dot:var(--disabled-text)]",
        "disabled:data-[state=checked]:[--rb-bg:var(--disabled-background)] disabled:data-[state=checked]:[--rb-border:var(--disabled-border)]",
        className
      )}
      {...props}
    >
      <span
        data-slot="radio-group-circle"
        className="flex size-6 items-center justify-center rounded-full border border-[var(--rb-border)] bg-[var(--rb-bg)] transition-colors duration-150"
      >
        <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className="size-2 rounded-full bg-[var(--rb-dot)]"
        />
      </span>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
