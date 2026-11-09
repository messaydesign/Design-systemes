import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
 * Empty — Figma "Empty" (144:357): first use, filtered no-results and error.
 * 32px padding, 16px gap, centred; 32px icon, SemiBold title, secondary
 * description, explicit recovery action. Don't show while still loading.
 *
 * shadcn structure (EmptyHeader wrapping media, title and description) and
 * the flat structure render the same spacing.
 */
function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex w-full flex-col items-center gap-4 rounded-lg border border-border bg-background p-[31px] text-center font-sans text-base leading-6 text-foreground",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex w-full max-w-[400px] flex-col items-center gap-4 text-center", className)}
      {...props}
    />
  )
}

const emptyMediaVariants = cva("flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
  variants: {
    variant: {
      // Bare 32px icon (Figma).
      default: "[&_svg]:size-8",
      // 48px muted tile with a 24px icon.
      icon: "size-12 rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6",
    },
  },
  defaultVariants: { variant: "default" },
})

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="empty-title" className={cn("font-semibold", className)} {...props} />
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="empty-description"
      className={cn(
        "max-w-[400px] text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary-strong",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="empty-content" className={cn("flex flex-wrap justify-center gap-2", className)} {...props} />
}

export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, emptyMediaVariants }
