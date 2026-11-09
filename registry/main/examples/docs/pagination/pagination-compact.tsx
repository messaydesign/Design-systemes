"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/main/ui/pagination"

const TOTAL = 8

export default function PaginationCompact() {
  const [page, setPage] = React.useState(3)
  const go = (next: number) => (event: React.MouseEvent) => {
    event.preventDefault()
    setPage(next)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`#page-${page - 1}`} disabled={page === 1} onClick={go(page - 1)} />
        </PaginationItem>
        {/* Phones: a status line instead of page numbers. */}
        <PaginationItem className="px-2 text-sm md:hidden">
          <span aria-live="polite">
            Page {page} of {TOTAL}
          </span>
        </PaginationItem>
        {Array.from({ length: TOTAL }, (_, i) => i + 1).map((n) => (
          <PaginationItem key={n} className="hidden md:flex">
            <PaginationLink href={`#page-${n}`} isActive={n === page} onClick={go(n)}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={`#page-${page + 1}`} disabled={page === TOTAL} onClick={go(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
