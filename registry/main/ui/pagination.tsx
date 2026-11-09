"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/main/ui/button"
import { ChevronLeftIcon } from "@/registry/main/ui/icons"

/*
 * Pagination — Figma "Pagination" (150:1350), First/Middle/Last × LTR/RTL.
 * Every control sits in a 48×48 wrapper; wrappers are 8px apart.
 * Page numbers: XS Button face (32px, Inter SemiBold 12) — Ghost, and the
 * current page uses the selected outline (aria-current="page").
 * Previous/Next: 48px ghost icon buttons with 24px directional icons that
 * mirror in RTL. Disabled boundary controls render without an href.
 */

function Pagination({ className, "aria-label": ariaLabel = "Pagination", ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      aria-label={ariaLabel}
      className={cn("flex justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul data-slot="pagination-content" className={cn("flex items-center gap-2", className)} {...props} />
}

function PaginationItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="pagination-item"
      className={cn("flex min-h-12 min-w-12 items-center justify-center", className)}
      {...props}
    />
  )
}

type PaginationLinkProps = React.ComponentProps<"a"> & {
  isActive?: boolean
  /** Boundary controls: rendered without href and skipped by Tab. */
  disabled?: boolean
  size?: "page" | "icon"
}

function PaginationLink({ className, isActive, disabled, size = "page", href, ...props }: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      data-active={isActive || undefined}
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled || undefined}
      href={disabled ? undefined : href}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size: size === "icon" ? "icon" : "xs",
        }),
        // The 48px wrapper is the touch target; drop Button's own extender.
        "after:hidden",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({ "aria-label": ariaLabel = "Previous page", ...props }: PaginationLinkProps) {
  return (
    <PaginationLink data-slot="pagination-previous" aria-label={ariaLabel} size="icon" {...props}>
      <ChevronLeftIcon />
    </PaginationLink>
  )
}

function PaginationNext({ "aria-label": ariaLabel = "Next page", ...props }: PaginationLinkProps) {
  return (
    <PaginationLink data-slot="pagination-next" aria-label={ariaLabel} size="icon" {...props}>
      <ChevronLeftIcon className="-scale-x-100 rtl:scale-x-100" />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden="true"
      className={cn("flex size-12 items-center justify-center font-button text-xs leading-6 font-semibold", className)}
      {...props}
    >
      …
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
