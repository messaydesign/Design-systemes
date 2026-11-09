import * as React from "react"

import { cn } from "@/lib/utils"
import { CloseIcon } from "@/registry/main/ui/icons"

/*
 * Chip — Figma "Forms/Chip" (30:21)
 * 32px, 8px inline padding inside a 1px subtle stroke, 8px gap, 8px radius,
 * surface fill, DM Sans Medium 14/24, optional 16px remove icon.
 * States: Default · Hover/Pressed (surface-hover) · Focus (brand stroke,
 * from the remove button) · Disabled (disabled fill and text).
 * The remove control is a real button with its own name and a 48px hit area.
 */

type ChipProps = React.ComponentProps<"span"> & {
  /** Shows the remove button when provided. */
  onRemove?: () => void
  /** Accessible name for the remove button. Defaults to "Remove <label>". */
  removeLabel?: string
  disabled?: boolean
}

function Chip({ className, children, onRemove, removeLabel, disabled, ...props }: ChipProps) {
  const label = removeLabel ?? (typeof children === "string" ? `Remove ${children}` : "Remove")
  return (
    <span
      data-slot="chip"
      data-disabled={disabled || undefined}
      className={cn(
        "inline-flex h-8 max-w-full items-center gap-2 rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface)] px-[7px]",
        "font-sans text-sm leading-6 md:leading-5 font-medium text-foreground transition-[background-color,border-color] duration-150",
        "[&:has(button:enabled):hover]:bg-[var(--surface-hover)] has-[button:focus-visible]:border-[var(--brand-primary)]",
        "data-[disabled]:bg-[var(--disabled-background)] data-[disabled]:text-[var(--disabled-text)]",
        className
      )}
      {...props}
    >
      <span className="min-w-0 truncate">{children}</span>
      {onRemove ? (
        <button
          type="button"
          data-slot="chip-remove"
          aria-label={label}
          disabled={disabled}
          onClick={onRemove}
          className={cn(
            "relative inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-sm text-[var(--text-secondary)] outline-none",
            "after:absolute after:top-1/2 after:left-1/2 after:size-12 after:-translate-x-1/2 after:-translate-y-1/2",
            "disabled:cursor-default disabled:text-[var(--disabled-text)]"
          )}
        >
          <CloseIcon className="size-4" />
        </button>
      ) : null}
    </span>
  )
}

export { Chip, type ChipProps }
