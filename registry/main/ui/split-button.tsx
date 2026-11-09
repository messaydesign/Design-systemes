"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/registry/main/ui/button"
import { ChevronDownIcon } from "@/registry/main/ui/icons"

/*
 * Split Button — Figma "Split Button" (143:4065)
 * Primary main action + 48px dropdown trigger joined by a 1px
 * brand-on-primary seam; outer corners only (Default 8 / Soft 16 / Pill).
 * States: Default · Disabled · Loading. While loading the main action keeps
 * its width and the trigger is disabled, so actions can't conflict.
 * Two native buttons with their own names; the trigger sits at the logical
 * end, so RTL mirrors automatically. Wrap SplitButtonTrigger in a
 * DropdownMenuTrigger (asChild) for the menu.
 */

type SplitButtonContextValue = {
  corner: "default" | "soft" | "pill"
  loading: boolean
  disabled: boolean
}

const SplitButtonContext = React.createContext<SplitButtonContextValue>({
  corner: "default",
  loading: false,
  disabled: false,
})

const startCorner = { default: "rounded-s-lg", soft: "rounded-s-xl", pill: "rounded-s-full" }
const endCorner = { default: "rounded-e-lg", soft: "rounded-e-xl", pill: "rounded-e-full" }

function SplitButton({
  className,
  corner = "default",
  loading = false,
  disabled = false,
  ...props
}: React.ComponentProps<"div"> & Partial<SplitButtonContextValue>) {
  return (
    <SplitButtonContext.Provider value={{ corner, loading, disabled }}>
      <div
        role="group"
        data-slot="split-button"
        className={cn("flex w-fit items-stretch [&>*:focus-visible]:z-10", className)}
        {...props}
      />
    </SplitButtonContext.Provider>
  )
}

function SplitButtonAction({ className, ...props }: Omit<ButtonProps, "variant" | "corner" | "asChild">) {
  const { corner, loading, disabled } = React.useContext(SplitButtonContext)
  return (
    <Button
      data-slot="split-button-action"
      loading={loading}
      disabled={disabled}
      className={cn("rounded-none", startCorner[corner], className)}
      {...props}
    />
  )
}

function SplitButtonTrigger({
  className,
  children,
  "aria-label": ariaLabel = "More options",
  ...props
}: Omit<ButtonProps, "variant" | "corner" | "asChild" | "loading">) {
  const { corner, loading, disabled } = React.useContext(SplitButtonContext)
  return (
    <Button
      data-slot="split-button-trigger"
      size="icon"
      aria-label={ariaLabel}
      disabled={disabled || loading}
      className={cn("rounded-none border-s-primary-foreground", endCorner[corner], className)}
      {...props}
    >
      {children ?? <ChevronDownIcon />}
    </Button>
  )
}

export { SplitButton, SplitButtonAction, SplitButtonTrigger }
