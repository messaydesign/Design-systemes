import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { CheckIcon, CloseIcon, InfoIcon, WarningIcon } from "@/components/ui/icons"

/*
 * Alert — Figma "Alert" (144:286)
 * Status: Info · Success · Warning · Error × Appearance: Default (tinted) · Outline.
 * 16px padding/gap, 8px radius, 16px status icon, SemiBold title + Regular
 * description in the status text colour. Icon + title carry meaning, not colour alone.
 */
const alertVariants = cva(
  "flex w-full items-start gap-4 rounded-[var(--radius)] border p-[15px] font-sans text-base leading-6 [&>svg]:mt-1 [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      status: {
        info: "border-[var(--status-info-border)] bg-[var(--status-info-background)] text-[var(--status-info-text)]",
        success: "border-[var(--status-success-border)] bg-[var(--status-success-background)] text-[var(--status-success-text)]",
        warning: "border-[var(--status-warning-border)] bg-[var(--status-warning-background)] text-[var(--status-warning-text)]",
        error: "border-[var(--status-error-border)] bg-[var(--status-error-background)] text-[var(--status-error-text)]",
      },
      appearance: {
        default: "",
        outline: "bg-[var(--background)]",
      },
    },
    defaultVariants: { status: "info", appearance: "default" },
  }
)

const icons = { info: InfoIcon, success: CheckIcon, warning: WarningIcon, error: CloseIcon } as const

function Alert({
  className,
  status = "info",
  appearance,
  icon,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    /** Override the status icon; pass null to hide it. */
    icon?: React.ReactNode
  }) {
  const Icon = icons[status ?? "info"]
  return (
    <div
      data-slot="alert"
      data-status={status}
      role={status === "error" ? "alert" : "status"}
      className={cn(alertVariants({ status, appearance }), className)}
      {...props}
    >
      {icon === undefined ? <Icon /> : icon}
      <div className="flex min-w-0 flex-1 flex-col gap-2">{children}</div>
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-title" className={cn("font-semibold", className)} {...props} />
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-description" className={cn(className)} {...props} />
}

export { Alert, AlertDescription, AlertTitle, alertVariants }
