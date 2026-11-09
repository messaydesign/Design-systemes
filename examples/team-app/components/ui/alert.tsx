import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { CheckIcon, CloseIcon, InfoIcon, WarningIcon } from "@/components/ui/icons"

/*
 * Alert — Figma "Alert" (144:286)
 * Variant: Default (neutral) · Info · Success · Warning · Destructive (Figma "Error")
 *   × Appearance: Default (tinted) · Outline.
 * 16px padding/gap, 8px radius, 16px status icon, SemiBold title + Regular
 * description in the status text colour. Icon + title carry meaning, not colour alone.
 *
 * API follows shadcn: `variant` "default" | "destructive" plus our status
 * variants. Default shows no automatic icon (pass an svg child, as in shadcn);
 * the status variants show their icon unless `icon` overrides it (null hides it).
 */
const alertVariants = cva(
  [
    // Grid like shadcn: a 16px icon column appears only when an svg child is
    // present (our status icon or one passed by the caller); text parts sit in column 2.
    "grid w-full grid-cols-[0_1fr] items-start gap-y-2 rounded-lg border p-[15px] font-sans text-base leading-6 md:text-sm md:leading-5",
    "has-[>svg]:grid-cols-[--spacing(4)_1fr] has-[>svg]:gap-x-4 [&>:not(svg)]:col-start-2",
    "[&>svg]:row-span-full [&>svg]:mt-1 [&>svg]:size-4 [&>svg]:shrink-0 md:[&>svg]:mt-0.5",
  ],
  {
    variants: {
      variant: {
        default: "border-border bg-card text-foreground [&>svg]:text-foreground",
        info: "border-[var(--status-info-border)] bg-[var(--status-info-background)] text-[var(--status-info-text)]",
        success: "border-[var(--status-success-border)] bg-[var(--status-success-background)] text-[var(--status-success-text)]",
        warning: "border-[var(--status-warning-border)] bg-[var(--status-warning-background)] text-[var(--status-warning-text)]",
        destructive: "border-[var(--status-error-border)] bg-[var(--status-error-background)] text-[var(--status-error-text)]",
      },
      appearance: {
        default: "",
        outline: "bg-background",
      },
    },
    defaultVariants: { variant: "default", appearance: "default" },
  }
)

const icons = { info: InfoIcon, success: CheckIcon, warning: WarningIcon, destructive: CloseIcon } as const

function Alert({
  className,
  variant = "default",
  appearance,
  icon,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    /** Override the status icon; pass null to hide it. */
    icon?: React.ReactNode
  }) {
  const Icon = variant && variant !== "default" ? icons[variant] : null
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role={variant === "destructive" ? "alert" : "status"}
      className={cn(alertVariants({ variant, appearance }), className)}
      {...props}
    >
      {icon === undefined ? Icon && <Icon /> : icon}
      {children}
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
