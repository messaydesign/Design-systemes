"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/main/ui/button"

/*
 * Alert Dialog — Figma "Overlay / Panel" Kind=Alert Dialog (148:531), "Alert Dialog" (148:1586)
 * Same panel as Dialog, no close button: the user must choose an action.
 * Action defaults to the Destructive button; Cancel to Outline.
 */

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogPortal = AlertDialogPrimitive.Portal

function AlertDialogOverlay({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn("fixed inset-0 z-50 bg-[var(--overlay)]", className)}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  corner = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & { corner?: "default" | "soft" }) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto",
          "border border-border bg-popover p-[23px] text-foreground shadow-[0_2px_8px_0_var(--effect-outer)] outline-none",
          corner === "soft" ? "rounded-xl" : "rounded-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-dialog-header" className={cn("flex flex-col gap-4", className)} {...props} />
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-dialog-footer" className={cn("flex flex-wrap items-center gap-2", className)} {...props} />
  )
}

function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("font-sans text-base leading-6 md:text-sm md:leading-5 font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  variant = "destructive",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> & {
  variant?: "default" | "destructive"
}) {
  return (
    <AlertDialogPrimitive.Action
      data-slot="alert-dialog-action"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="alert-dialog-cancel"
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
