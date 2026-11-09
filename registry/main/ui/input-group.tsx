"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

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
 *
 * shadcn API: wrap prefixes/suffixes in <InputGroupAddon align="inline-start |
 * inline-end | block-start | block-end">. Icons and InputGroupText may also be
 * placed directly inside InputGroup, in source order.
 */

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="input-group"
      className={cn(
        "group/input-group relative flex min-h-8 w-full min-w-0 items-center gap-2 rounded-lg border border-input bg-[var(--input-surface)] px-[15px]",
        "font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground",
        "transition-[background-color,border-color] duration-150",
        // Block addons stack above / below the control.
        "has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:items-stretch has-[>[data-align=block-start]]:py-[7px]",
        "has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:items-stretch has-[>[data-align=block-end]]:py-[7px]",
        "hover:border-[var(--input-outline-hover)] hover:bg-accent",
        "has-[[data-slot=input-group-control]:focus]:border-[var(--input-outline-focus)] has-[[data-slot=input-group-control]:focus]:bg-[var(--input-surface)]",
        "has-[[aria-invalid=true]]:border-[var(--status-error-border)]",
        "data-[validation=warning]:border-[var(--status-warning-border)] data-[validation=success]:border-[var(--status-success-border)]",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:border-[var(--disabled-border)] data-[disabled=true]:bg-[var(--input-surface-disabled)] data-[disabled=true]:text-[var(--disabled-text)]",
        "has-[[data-slot=input-group-control]:disabled]:pointer-events-none has-[[data-slot=input-group-control]:disabled]:border-[var(--disabled-border)] has-[[data-slot=input-group-control]:disabled]:bg-[var(--input-surface-disabled)] has-[[data-slot=input-group-control]:disabled]:text-[var(--disabled-text)]",
        "[&>svg]:pointer-events-none [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex shrink-0 cursor-text items-center gap-2 whitespace-nowrap text-foreground select-none [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first",
        "inline-end": "order-last",
        "block-start": "order-first w-full justify-start",
        "block-end": "order-last w-full justify-start",
      },
    },
    defaultVariants: { align: "inline-start" },
  }
)

/** Prefix / suffix slot. Clicking it (outside a button) focuses the control. */
function InputGroupAddon({
  className,
  align = "inline-start",
  onClick,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || (event.target as HTMLElement).closest("button")) return
        event.currentTarget.parentElement
          ?.querySelector<HTMLElement>("[data-slot=input-group-control]")
          ?.focus()
      }}
      {...props}
    />
  )
}

function InputGroupInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input-group-control"
      className={cn(
        "min-h-6 min-w-0 flex-1 self-stretch bg-transparent font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground outline-none",
        "placeholder:text-[var(--input-placeholder)] disabled:cursor-not-allowed disabled:text-[var(--disabled-text)] disabled:placeholder:text-[var(--disabled-text)]",
        "[&::-webkit-search-cancel-button]:hidden",
        className
      )}
      {...props}
    />
  )
}

/** Multiline control. Matches the Textarea control's 120px height and 16px padding. */
function InputGroupTextarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="input-group-control"
      className={cn(
        "min-h-[118px] min-w-0 flex-1 resize-none self-stretch bg-transparent py-[15px] font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground outline-none",
        // With a block addon the group already pads 8px vertically.
        "group-has-[>[data-align^=block]]/input-group:min-h-20 group-has-[>[data-align^=block]]/input-group:py-0",
        "placeholder:text-[var(--input-placeholder)] disabled:cursor-not-allowed disabled:text-[var(--disabled-text)] disabled:placeholder:text-[var(--disabled-text)]",
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
      className={cn(
        "flex shrink-0 items-center gap-2 whitespace-nowrap text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Ghost action inside the group, 48px hit area. Sizes map to the Button scale:
 * xs / icon-xs = 32px (fits the 32px group), sm / icon-sm = 40px (use in block
 * addons or taller groups). Icon-only buttons need an aria-label.
 */
function InputGroupButton({ className, size = "xs", variant = "ghost", ...props }: ButtonProps) {
  return (
    <Button
      data-slot="input-group-button"
      size={size}
      variant={variant}
      // Figma centres the 32px face in a 48px-wide wrapper.
      className={cn("mx-2 text-foreground [[data-align^=block]>&]:mx-0", className)}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  inputGroupAddonVariants,
}
