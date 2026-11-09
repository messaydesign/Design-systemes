import * as React from "react"

import { cn } from "@/lib/utils"

/*
 * Card — Figma "Card" (142:433)
 * 16px padding, 24px gap, subtle border, no shadow.
 * Header: SemiBold 16/24 title + Regular 16/24 secondary description, 8px gap.
 * Corner: Default 8 · Soft 16 · Pill (compact custom content only).
 */
function Card({
  className,
  corner = "default",
  ...props
}: React.ComponentProps<"div"> & { corner?: "default" | "soft" | "pill" }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 border border-border bg-card p-[15px] font-sans text-base leading-6 text-foreground",
        corner === "soft" ? "rounded-xl" : corner === "pill" ? "rounded-full" : "rounded-lg",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min items-start gap-2 has-[[data-slot=card-action]]:grid-cols-[1fr_auto]",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cn("font-semibold text-foreground", className)} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={cn("text-muted-foreground", className)} {...props} />
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  // Sits beside the title and description, at the inline end.
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn(className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cn("flex flex-wrap items-center gap-2", className)} {...props} />
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
