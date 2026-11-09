"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { buttonVariants, type Button } from "@/registry/main/ui/button"
import { ChevronLeftIcon } from "@/registry/main/ui/icons"

/*
 * Pagination — Figma "Pagination" (150:1350), First/Middle/Last × LTR/RTL.
 * Every control sits in a 48×48 wrapper; wrappers are 8px apart.
 * Page numbers: XS Button face (32px, 8px inline padding, Inter SemiBold
 * Button/XS type) — Ghost, and the
 * current page uses the selected outline (aria-current="page").
 * Previous/Next: 48px ghost icon buttons with 24px directional icons that
 * mirror in RTL. Disabled boundary controls render without an href.
 *
 * shadcn API: PaginationLink `size` takes Button size names. It defaults to
 * "xs" (the XS page-number face) rather than shadcn's "icon", so plain
 * shadcn page links keep the Figma look. Previous/Next accept PaginationLink
 * props but stay icon-only (size "icon", 48px) with an aria-label.
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

type PaginationLinkProps = {
  isActive?: boolean
  /** Boundary controls: rendered without href and skipped by Tab. */
  disabled?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({ className, isActive, disabled, size = "xs", href, ...props }: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      data-active={isActive || undefined}
      data-size={size}
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled || undefined}
      href={disabled ? undefined : href}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        // The 48px wrapper is the touch target; drop Button's own extender.
        "after:hidden",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  "aria-label": ariaLabel = "Previous page",
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink data-slot="pagination-previous" aria-label={ariaLabel} {...props} size="icon">
      <ChevronLeftIcon />
    </PaginationLink>
  )
}

function PaginationNext({
  "aria-label": ariaLabel = "Next page",
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink data-slot="pagination-next" aria-label={ariaLabel} {...props} size="icon">
      <ChevronLeftIcon className="-scale-x-100 rtl:scale-x-100" />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden="true"
      className={cn("flex size-12 items-center justify-center font-button text-base leading-6 font-semibold md:text-sm md:leading-5", className)}
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
