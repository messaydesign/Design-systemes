"use client"

import * as React from "react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/main/ui/button"
import { ChevronRightIcon } from "@/registry/main/ui/icons"

/*
 * Breadcrumb — Figma "Breadcrumb" (150:169), Default and Collapsed, LTR/RTL.
 * 8px gap, 48px-tall rows, DM Sans 16/24 in text-primary.
 * Ancestors are underlined links; the current page is plain text with
 * aria-current="page". Separators are decorative 16px chevrons that mirror
 * in RTL. Collapsed ancestors sit behind a "…" disclosure control: a Large
 * Ghost button with a text label (48px tall, 24px inline padding, ~60px wide).
 */

function Breadcrumb({ "aria-label": ariaLabel = "Breadcrumb", ...props }: React.ComponentProps<"nav">) {
  return <nav data-slot="breadcrumb" aria-label={ariaLabel} {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn("flex flex-wrap items-center gap-2 font-sans text-base leading-6 text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li data-slot="breadcrumb-item" className={cn("inline-flex min-h-12 items-center gap-2", className)} {...props} />
}

function BreadcrumbLink({ asChild, className, ...props }: React.ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "a"
  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        "rounded-[2px] text-foreground underline decoration-from-font underline-offset-auto",
        "hover:text-[var(--button-selected-text)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn("text-foreground", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("inline-flex items-center [&>svg]:size-4", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}

/**
 * The "…" control for collapsed ancestors. It is a real button, so pass it
 * to a DropdownMenuTrigger (asChild) that lists the hidden links.
 */
function BreadcrumbEllipsis({
  className,
  "aria-label": ariaLabel = "Show hidden pages",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      data-slot="breadcrumb-ellipsis"
      aria-label={ariaLabel}
      className={cn(buttonVariants({ variant: "ghost" }), className)}
      {...props}
    >
      <span aria-hidden="true">…</span>
    </button>
  )
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
