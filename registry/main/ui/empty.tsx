import * as React from "react"

import { cn } from "@/lib/utils"

/*
 * Empty — Figma "Empty" (144:357): first use, filtered no-results and error.
 * 32px padding, 16px gap, centred; 32px icon, SemiBold title, secondary
 * description, explicit recovery action. Don't show while still loading.
 */
function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex w-full flex-col items-center gap-4 rounded-lg border border-border bg-background p-[31px] text-center font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground",
        className
      )}
      {...props}
    />
  )
}

function EmptyMedia({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="empty-media" className={cn("flex items-center justify-center [&_svg]:size-8", className)} {...props} />
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="empty-title" className={cn("font-semibold", className)} {...props} />
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="empty-description" className={cn("max-w-[400px] text-muted-foreground", className)} {...props} />
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="empty-content" className={cn("flex flex-wrap justify-center gap-2", className)} {...props} />
}

export { Empty, EmptyContent, EmptyDescription, EmptyMedia, EmptyTitle }
