import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
 * Text control — Figma ".Building blocks/Text control" (27:1946)
 * States: Default · Hover · Focus · Pressed · Read only · Disabled
 * Compact 32px, 8px padding (inside a 1px stroke), DM Sans 16/24.
 * Validation comes from aria-invalid (error) or data-validation
 * ("warning" | "success"), usually set by <Field>.
 * Shape: default 8px radius · rounded = pill (Figma Shape=Rounded).
 */
const inputVariants = cva(
  [
    "flex h-8 w-full min-w-0 border border-[var(--input-outline)] bg-[var(--input-surface)] px-[7px]",
    "font-sans text-base leading-6 text-[var(--input-text)] placeholder:text-[var(--input-placeholder)]",
    "transition-[color,background-color,border-color] duration-150 outline-none",
    "hover:border-[var(--input-outline-hover)] hover:bg-[var(--surface-hover)]",
    "focus:border-[var(--input-outline-focus)] focus:bg-[var(--input-surface)]",
    "read-only:bg-[var(--surface)] read-only:hover:border-[var(--input-outline)]",
    "aria-invalid:border-[var(--status-error-border)]",
    "data-[validation=warning]:border-[var(--status-warning-border)]",
    "data-[validation=success]:border-[var(--status-success-border)]",
    "disabled:cursor-not-allowed disabled:border-[var(--disabled-border)] disabled:bg-[var(--input-surface-disabled)]",
    "disabled:text-[var(--disabled-text)] disabled:placeholder:text-[var(--disabled-text)]",
    "file:mr-2 file:border-0 file:bg-transparent file:font-sans file:text-sm file:font-medium file:text-foreground",
  ],
  {
    variants: {
      shape: {
        default: "rounded-[var(--radius)]",
        rounded: "rounded-[var(--radius-input-pill)] px-[15px]",
      },
    },
    defaultVariants: { shape: "default" },
  }
)

function Input({
  className,
  type,
  shape,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ shape }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
