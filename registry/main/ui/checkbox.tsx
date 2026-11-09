"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon, MinusIcon } from "@/registry/main/ui/icons"

/*
 * Checkbox — Figma ".Building blocks/Checkbox" (28:1014)
 * Selection: Unchecked · Checked · Indeterminate ("indeterminate" checked value)
 * State: Default · Hover · Focus · Pressed · Disabled
 * The root is the 48×32 touch target; the 24px box sits centred inside.
 * Focus shows a neutral backplate on the touch target + brand border.
 */
function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer group/checkbox relative inline-flex h-8 w-12 shrink-0 cursor-pointer items-center justify-center rounded-lg outline-none",
        // State colours as variables consumed by the box below.
        "[--cb-bg:var(--input-surface)] [--cb-border:var(--border-control)] [--cb-ink:var(--brand-on-primary)]",
        "hover:[--cb-bg:var(--surface-hover)]",
        "focus-visible:bg-[var(--selected-background)] focus-visible:[--cb-border:var(--brand-primary)]",
        "data-[state=checked]:[--cb-bg:var(--brand-primary)] data-[state=checked]:[--cb-border:var(--brand-primary)]",
        "data-[state=indeterminate]:[--cb-bg:var(--brand-primary)] data-[state=indeterminate]:[--cb-border:var(--brand-primary)]",
        "data-[state=checked]:hover:[--cb-bg:var(--brand-primary-hover)] data-[state=checked]:hover:[--cb-ink:var(--primary-active-foreground)]",
        "data-[state=indeterminate]:hover:[--cb-bg:var(--brand-primary-hover)] data-[state=indeterminate]:hover:[--cb-ink:var(--primary-active-foreground)]",
        "data-[state=checked]:active:[--cb-bg:var(--brand-primary-pressed)] data-[state=checked]:active:[--cb-ink:var(--primary-active-foreground)]",
        "data-[state=indeterminate]:active:[--cb-bg:var(--brand-primary-pressed)] data-[state=indeterminate]:active:[--cb-ink:var(--primary-active-foreground)]",
        "aria-invalid:[--cb-border:var(--status-error-border)]",
        // Figma Forms/Checkbox Warning/Success: status outline, taken from a parent Field.
        "in-data-[validation=warning]:[--cb-border:var(--status-warning-border)] in-data-[validation=success]:[--cb-border:var(--status-success-border)]",
        "disabled:pointer-events-none disabled:[--cb-bg:var(--disabled-background)] disabled:[--cb-border:var(--disabled-border)] disabled:[--cb-ink:var(--disabled-text)]",
        "disabled:data-[state=checked]:[--cb-bg:var(--disabled-background)] disabled:data-[state=checked]:[--cb-border:var(--disabled-border)]",
        "disabled:data-[state=indeterminate]:[--cb-bg:var(--disabled-background)] disabled:data-[state=indeterminate]:[--cb-border:var(--disabled-border)]",
        className
      )}
      {...props}
    >
      <span
        data-slot="checkbox-box"
        className="flex size-6 items-center justify-center rounded-lg border border-[var(--cb-border)] bg-[var(--cb-bg)] text-[var(--cb-ink)] transition-colors duration-150"
      >
        <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="flex items-center justify-center">
          <CheckIcon className="size-4 group-data-[state=indeterminate]/checkbox:hidden" />
          <MinusIcon className="hidden size-4 group-data-[state=indeterminate]/checkbox:block" />
        </CheckboxPrimitive.Indicator>
      </span>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
