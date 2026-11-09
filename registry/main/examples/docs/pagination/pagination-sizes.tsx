"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/main/ui/pagination"

const prevent = (event: React.MouseEvent) => event.preventDefault()

export default function PaginationSizes() {
  return (
    <div className="flex flex-col gap-4">
      {(["xs", "icon-sm", "icon"] as const).map((size) => (
        <Pagination key={size} aria-label={`Pagination, ${size} links`}>
          <PaginationContent>
            {[1, 2, 3].map((n) => (
              <PaginationItem key={n}>
                <PaginationLink href={`#page-${n}`} size={size} isActive={n === 2} onClick={prevent}>
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      ))}
    </div>
  )
}
