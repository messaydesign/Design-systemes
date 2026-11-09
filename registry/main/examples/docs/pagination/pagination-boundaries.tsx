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

const prevent = (event: React.MouseEvent) => event.preventDefault()

function Pages({ current, label }: { current: number; label: string }) {
  return (
    <Pagination aria-label={label}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#previous" disabled={current === 1} onClick={prevent} />
        </PaginationItem>
        {[1, 2, 3].map((n) => (
          <PaginationItem key={n}>
            <PaginationLink href={`#page-${n}`} isActive={n === current} onClick={prevent}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#next" disabled={current === 3} onClick={prevent} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default function PaginationBoundaries() {
  return (
    <div className="flex flex-col gap-4">
      <Pages current={1} label="Pagination, first page" />
      <Pages current={2} label="Pagination, middle page" />
      <Pages current={3} label="Pagination, last page" />
    </div>
  )
}
