import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
 * Textarea control — Figma ".Building blocks/Textarea control" (27:1950)
 * Same states and tokens as Input; 120px default height, 16px padding.
 * Shape rounded = 24px radius (Figma: multiline Rounded).
 */
const textareaVariants = cva(
  [
    "flex min-h-30 w-full min-w-0 resize-y border border-input bg-[var(--input-surface)] p-[15px]",
    "font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground placeholder:text-[var(--input-placeholder)]",
    "transition-[color,background-color,border-color] duration-150 outline-none",
    "hover:border-[var(--input-outline-hover)] hover:bg-accent",
    "focus:border-[var(--input-outline-focus)] focus:bg-[var(--input-surface)]",
    "read-only:bg-muted read-only:hover:border-input",
    "aria-invalid:border-[var(--status-error-border)]",
    "data-[validation=warning]:border-[var(--status-warning-border)]",
    "data-[validation=success]:border-[var(--status-success-border)]",
    "disabled:cursor-not-allowed disabled:border-[var(--disabled-border)] disabled:bg-[var(--input-surface-disabled)]",
    "disabled:text-[var(--disabled-text)] disabled:placeholder:text-[var(--disabled-text)]",
  ],
  {
    variants: {
      shape: {
        default: "rounded-lg",
        rounded: "rounded-[var(--radius-input-multiline)]",
      },
    },
    defaultVariants: { shape: "default" },
  }
)

function Textarea({
  className,
  shape,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ shape }), className)}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
