"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/main/ui/button"
import { CloseIcon } from "@/registry/main/ui/icons"

/*
 * Sheet — Figma "Sheet" (148:1733) built from "Overlay / Panel" Kind=Sheet (148:679)
 * Side Trailing/Leading are logical: "end" / "start" mirror in RTL.
 * ("right"/"left"/"top"/"bottom" are accepted for shadcn compatibility.)
 * Full-height 480px panel, same header/footer anatomy as Dialog.
 */

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

type Side = "end" | "start" | "right" | "left" | "top" | "bottom"

const sideClasses: Record<Side, string> = {
  end: "inset-y-0 end-0 h-full w-full max-w-[480px]",
  start: "inset-y-0 start-0 h-full w-full max-w-[480px]",
  right: "inset-y-0 right-0 h-full w-full max-w-[480px]",
  left: "inset-y-0 left-0 h-full w-full max-w-[480px]",
  top: "inset-x-0 top-0 max-h-[80dvh] w-full",
  bottom: "inset-x-0 bottom-0 max-h-[80dvh] w-full",
}

function SheetOverlay({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn("fixed inset-0 z-50 bg-[var(--overlay)]", className)}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "end",
  corner = "default",
  showCloseButton = true,
  closeLabel = "Close sheet",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: Side
  corner?: "default" | "soft"
  showCloseButton?: boolean
  closeLabel?: string
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        data-close={showCloseButton}
        className={cn(
          "group/dialog fixed z-50 flex flex-col gap-4 overflow-y-auto",
          "border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-[23px] text-foreground shadow-[0_2px_8px_0_var(--effect-outer)] outline-none",
          corner === "soft" ? "rounded-[var(--radius-soft)]" : "rounded-[var(--radius)]",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            aria-label={closeLabel}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "absolute end-[23px] top-[23px]")}
          >
            <CloseIcon />
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-4 group-data-[close=true]/dialog:pe-14", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sheet-footer" className={cn("flex flex-wrap items-center gap-2", className)} {...props} />
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-sans text-base leading-6 font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("font-sans text-base leading-6 text-foreground", className)}
      {...props}
    />
  )
}

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger }
