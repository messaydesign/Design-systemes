"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/main/ui/button"
import { CloseIcon } from "@/registry/main/ui/icons"

/*
 * Dialog — Figma "Overlay / Panel" Kind=Dialog (148:322) and "Dialog" (148:1264)
 * 480px panel · 24px padding · 16px gap · 1px subtle border · Default 8 / Soft 16.
 * Header: SemiBold 16/24 title + 48px ghost close (start-aligned row; the
 * title reserves the 48px row height when the close button is shown).
 * Footer: actions start-aligned, 8px gap. Backdrop rgba(0,0,0,.64).
 * Radix owns focus trap, inert background, scroll lock and focus return.
 */

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn("fixed inset-0 z-50 bg-[var(--overlay)]", className)}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  corner = "default",
  showCloseButton = true,
  closeLabel = "Close dialog",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  corner?: "default" | "soft"
  showCloseButton?: boolean
  closeLabel?: string
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        data-close={showCloseButton}
        className={cn(
          "group/dialog fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto",
          "border border-border bg-popover p-[23px] text-foreground shadow-[0_2px_8px_0_var(--effect-outer)] outline-none",
          corner === "soft" ? "rounded-xl" : "rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            aria-label={closeLabel}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "absolute end-[23px] top-[23px]")}
          >
            <CloseIcon />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="dialog-footer" className={cn("flex flex-wrap items-center gap-2", className)} {...props} />
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("font-sans text-base leading-6 font-semibold text-foreground group-data-[close=true]/dialog:min-h-12 group-data-[close=true]/dialog:pe-14", className)}
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("font-sans text-base leading-6 text-foreground", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
