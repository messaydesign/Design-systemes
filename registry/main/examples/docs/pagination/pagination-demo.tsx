"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/main/ui/pagination"

const TOTAL = 10

/** Pages to show: first, last, and the current page with its neighbours. */
function pageRange(page: number, total: number) {
  const pages = new Set([1, total, page - 1, page, page + 1])
  return [...pages].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b)
}

export default function PaginationDemo() {
  const [page, setPage] = React.useState(5)
  const go = (next: number) => (event: React.MouseEvent) => {
    event.preventDefault()
    setPage(next)
  }
  const pages = pageRange(page, TOTAL)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`#page-${page - 1}`} disabled={page === 1} onClick={go(page - 1)} />
        </PaginationItem>
        {pages.map((n, i) => (
          <React.Fragment key={n}>
            {i > 0 && n - pages[i - 1] > 1 ? (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            ) : null}
            <PaginationItem>
              <PaginationLink href={`#page-${n}`} isActive={n === page} onClick={go(n)}>
                {n}
              </PaginationLink>
            </PaginationItem>
          </React.Fragment>
        ))}
        <PaginationItem>
          <PaginationNext href={`#page-${page + 1}`} disabled={page === TOTAL} onClick={go(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
