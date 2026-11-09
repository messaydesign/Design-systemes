"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { buttonVariants, type ButtonProps } from "@/registry/main/ui/button"

/*
 * Alert Dialog — Figma "Overlay / Panel" Kind=Alert Dialog (148:531), "Alert Dialog" (148:1586)
 * Same panel as Dialog, no close button: the user must choose an action.
 * Action defaults to the Destructive button; Cancel to Outline.
 *
 * size="sm": 320px panel, header centred and stacked, footer buttons in two
 * equal columns. With AlertDialogMedia, the default size places the 64px
 * media tile beside the title and description from 640px up.
 */

type AlertDialogButtonProps = Pick<ButtonProps, "variant" | "size" | "corner">

function AlertDialog(props: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger(props: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogPortal(props: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
}

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
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  corner?: "default" | "soft"
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto",
          "data-[size=sm]:max-w-[320px]",
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
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "flex flex-col gap-4",
        // sm: stacked and centred.
        "group-data-[size=sm]/alert-dialog-content:items-center group-data-[size=sm]/alert-dialog-content:text-center",
        // default + media, ≥640px: media in its own column spanning title and description.
        "sm:group-data-[size=default]/alert-dialog-content:has-[>[data-slot=alert-dialog-media]]:grid sm:group-data-[size=default]/alert-dialog-content:has-[>[data-slot=alert-dialog-media]]:grid-cols-[auto_1fr] sm:group-data-[size=default]/alert-dialog-content:has-[>[data-slot=alert-dialog-media]]:grid-rows-[auto_1fr]",
        "[&>[data-slot=alert-dialog-media]]:row-span-2 has-[>[data-slot=alert-dialog-media]]:[&>:not([data-slot=alert-dialog-media])]:col-start-2",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-wrap items-center gap-2",
        "group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2",
        className
      )}
      {...props}
    />
  )
}

/** 64px muted tile for an icon or illustration above / beside the title. */
function AlertDialogMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "inline-flex size-16 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-8",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("font-sans text-base leading-6 font-semibold text-foreground", className)}
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
      className={cn("font-sans text-base leading-6 text-foreground", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  variant = "destructive",
  size = "default",
  corner = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> & AlertDialogButtonProps) {
  return (
    <AlertDialogPrimitive.Action
      data-slot="alert-dialog-action"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, corner }), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  corner = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> & AlertDialogButtonProps) {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="alert-dialog-cancel"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, corner }), className)}
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
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
