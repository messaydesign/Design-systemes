import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { CheckIcon, InfoIcon, WarningIcon } from "@/registry/main/ui/icons"

/*
 * Validation Summary — Figma "Forms/Validation summary" (31:660)
 * Info · Success · Warning · Error. 16px padding inside a 1px status
 * stroke, 8px gap, 8px radius, status background, 16px status icon,
 * Medium 14 title and Regular 14 details in the status text colour.
 * Error summaries are focusable (tabIndex -1) so forms can move focus here
 * on submit; list each problem as a link to its field.
 */

const summaryVariants = cva(
  "flex w-full flex-col gap-2 rounded-lg border p-[15px] font-sans text-sm leading-6 md:leading-5 outline-none [&>svg]:size-4",
  {
    variants: {
      status: {
        info: "border-[var(--status-info-border)] bg-[var(--status-info-background)] text-[var(--status-info-text)] [&>svg]:text-[var(--status-info-icon)]",
        success: "border-[var(--status-success-border)] bg-[var(--status-success-background)] text-[var(--status-success-text)] [&>svg]:text-[var(--status-success-icon)]",
        warning: "border-[var(--status-warning-border)] bg-[var(--status-warning-background)] text-[var(--status-warning-text)] [&>svg]:text-[var(--status-warning-icon)]",
        error: "border-[var(--status-error-border)] bg-[var(--status-error-background)] text-[var(--status-error-text)] [&>svg]:text-[var(--status-error-icon)]",
      },
    },
    defaultVariants: { status: "info" },
  }
)

const icons = { info: InfoIcon, success: CheckIcon, warning: WarningIcon, error: WarningIcon }

function ValidationSummary({
  className,
  status = "info",
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof summaryVariants>) {
  const Icon = icons[status ?? "info"]
  return (
    <div
      data-slot="validation-summary"
      data-status={status}
      role={status === "error" ? "alert" : "status"}
      tabIndex={status === "error" ? -1 : undefined}
      className={cn(summaryVariants({ status }), className)}
      {...props}
    >
      <Icon />
      {children}
    </div>
  )
}

function ValidationSummaryTitle({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="validation-summary-title" className={cn("font-medium", className)} {...props} />
}

function ValidationSummaryDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="validation-summary-description" className={className} {...props} />
}

/** List of problems; each item usually links to the field (href="#field-id"). */
function ValidationSummaryList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="validation-summary-list"
      className={cn("flex flex-col gap-2 [&_a]:underline [&_a]:decoration-from-font", className)}
      {...props}
    />
  )
}

export { ValidationSummary, ValidationSummaryDescription, ValidationSummaryList, ValidationSummaryTitle }
