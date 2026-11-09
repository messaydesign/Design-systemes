import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/*
 * Badge — Figma "Badge" (144:220)
 * 24px pill, 8px padding, DM Sans Medium 14/24, optional 16px icon.
 * Default (brand primary) · Secondary · Outline · Destructive, plus shadcn's Ghost
 * (no fill, accent on hover when rendered as a link) and Link. Non-interactive by default.
 */
const badgeVariants = cva(
  "inline-flex h-6 w-fit shrink-0 items-center gap-2 rounded-full border border-transparent px-[7px] font-sans text-sm leading-6 font-medium whitespace-nowrap [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:pointer-events-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-ring",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-foreground",
        outline: "border-input text-foreground",
        destructive: "bg-[var(--status-error-background)] text-[var(--status-error-text)]",
        ghost: "text-foreground [a&]:hover:bg-accent",
        link: "text-primary-strong underline underline-offset-4 [a&]:hover:text-[var(--primary-strong-hover)]",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"
  return <Comp data-slot="badge" data-variant={variant} className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
