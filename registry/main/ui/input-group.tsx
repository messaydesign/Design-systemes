"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/registry/main/ui/button"

/*
 * Input Group — Figma "Input Group" (135:2202)
 * One bordered 32px container (16px inline padding inside the 1px stroke,
 * 8px gap) holding text prefixes/suffixes, a 16px icon, the editable input
 * and compact 32px icon actions with 48px hit areas. Covers Search,
 * Password and URL-style controls. States follow the Text control:
 * hover · focus (brand outline) · invalid · warning/success · disabled.
 * Prefix/suffix text is visual context only — keep a real label.
 */

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="input-group"
      className={cn(
        "relative flex h-8 w-full min-w-0 items-center gap-2 rounded-[var(--radius)] border border-[var(--input-outline)] bg-[var(--input-surface)] px-[15px]",
        "font-sans text-base leading-6 text-[var(--input-text)]",
        "transition-[background-color,border-color] duration-150",
        "hover:border-[var(--input-outline-hover)] hover:bg-[var(--surface-hover)]",
        "has-[[data-slot=input-group-control]:focus]:border-[var(--input-outline-focus)] has-[[data-slot=input-group-control]:focus]:bg-[var(--input-surface)]",
        "has-[[aria-invalid=true]]:border-[var(--status-error-border)]",
        "data-[validation=warning]:border-[var(--status-warning-border)] data-[validation=success]:border-[var(--status-success-border)]",
        "has-[[data-slot=input-group-control]:disabled]:pointer-events-none has-[[data-slot=input-group-control]:disabled]:border-[var(--disabled-border)] has-[[data-slot=input-group-control]:disabled]:bg-[var(--input-surface-disabled)] has-[[data-slot=input-group-control]:disabled]:text-[var(--disabled-text)]",
        "[&>svg]:pointer-events-none [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input-group-control"
      className={cn(
        "h-full min-w-0 flex-1 bg-transparent font-sans text-base leading-6 text-[var(--input-text)] outline-none",
        "placeholder:text-[var(--input-placeholder)] disabled:cursor-not-allowed disabled:text-[var(--disabled-text)] disabled:placeholder:text-[var(--disabled-text)]",
        "[&::-webkit-search-cancel-button]:hidden",
        className
      )}
      {...props}
    />
  )
}

/** Text prefix or suffix (e.g. "https://", ".com", a currency). */
function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="input-group-text"
      className={cn("shrink-0 whitespace-nowrap text-foreground", className)}
      {...props}
    />
  )
}

/** 32px Ghost icon action with a 48px hit area. Give it an aria-label. */
function InputGroupButton({ className, size = "icon-xs", variant = "ghost", ...props }: ButtonProps) {
  return (
    <Button
      data-slot="input-group-button"
      size={size}
      variant={variant}
      // Figma centres the 32px face in a 48px-wide wrapper.
      className={cn("mx-2 text-[var(--input-text)]", className)}
      {...props}
    />
  )
}

export { InputGroup, InputGroupButton, InputGroupInput, InputGroupText }
