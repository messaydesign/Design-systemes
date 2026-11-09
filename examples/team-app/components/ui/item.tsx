"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

/*
 * Item — Figma "Item" (142:345)
 * 16px padding & gap: leading media (48px avatar/icon), content (SemiBold title +
 * secondary description, 8px apart) and a trailing action (48px ghost button).
 * Variants: Default · Outline (subtle border) · Muted (muted background).
 * Sizes: Default (16px padding & gap) · Small (8px block padding, 8px gap).
 * ItemHeader / ItemFooter take a full row above / below the main row.
 */
const itemVariants = cva(
  [
    "group/item flex w-full flex-wrap items-center rounded-lg border border-transparent font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground",
    "transition-colors duration-150",
    "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "[a]:hover:bg-accent",
  ],
  {
    variants: {
      variant: {
        default: "",
        outline: "border-border",
        muted: "bg-muted",
      },
      size: {
        default: "gap-4 p-[15px]",
        sm: "gap-2 px-[15px] py-[7px]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

const ItemGroupContext = React.createContext(false)

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div"
  // Inside an ItemGroup (role="list") each Item is a list item.
  const inGroup = React.useContext(ItemGroupContext)
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      role={inGroup ? "listitem" : undefined}
      className={cn(itemVariants({ variant, size }), className)}
      {...props}
    />
  )
}

const itemMediaVariants = cva("flex shrink-0 items-center justify-center gap-2 [&_svg]:pointer-events-none", {
  variants: {
    variant: {
      default: "",
      // 48px muted tile with a 24px icon.
      icon: "size-12 rounded-lg border border-border bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6",
      // 48px cover-cropped thumbnail.
      image: "size-12 overflow-hidden rounded-lg [&_img]:size-full [&_img]:object-cover",
    },
  },
  defaultVariants: { variant: "default" },
})

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-2 [&+[data-slot=item-content]]:flex-none", className)}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="item-title" className={cn("flex w-fit items-center gap-2 font-semibold", className)} {...props} />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary-strong",
        className
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="item-actions" className={cn("flex shrink-0 items-center gap-2", className)} {...props} />
}

/** Full-width row above the main row (basis-full inside the wrapping Item). */
function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn("flex basis-full items-center justify-between gap-2", className)}
      {...props}
    />
  )
}

/** Full-width row below the main row. */
function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn("flex basis-full items-center justify-between gap-2", className)}
      {...props}
    />
  )
}

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <ItemGroupContext.Provider value={true}>
      <div role="list" data-slot="item-group" className={cn("group/item-group flex flex-col gap-2", className)} {...props} />
    </ItemGroupContext.Provider>
  )
}

/** 1px subtle rule between Items in an ItemGroup (decorative). */
function ItemSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return <Separator data-slot="item-separator" orientation="horizontal" className={cn("my-0", className)} {...props} />
}

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
  itemMediaVariants,
  itemVariants,
}
