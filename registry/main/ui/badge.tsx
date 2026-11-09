import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Badge — Figma "Badge" (144:220)
 * 24px pill, 8px padding, DM Sans Medium 14/24, optional 16px icon.
 * Default (brand primary) · Secondary · Outline · Destructive. Non-interactive by default.
 */
const badgeVariants = cva(
  "inline-flex h-6 w-fit shrink-0 items-center gap-2 rounded-full border border-transparent px-[7px] font-sans text-sm leading-6 font-medium whitespace-nowrap [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--brand-primary)] text-[var(--brand-on-primary)]",
        secondary: "bg-[var(--surface)] text-foreground",
        outline: "border-[var(--input-outline)] text-foreground",
        destructive: "bg-[var(--status-error-background)] text-[var(--status-error-text)]",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
