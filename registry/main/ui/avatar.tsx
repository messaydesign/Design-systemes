"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { WarningIcon } from "@/registry/main/ui/icons"

/*
 * Avatar — Figma "Avatar" (142:254)
 * Sizes 32 · 48 · 64. Muted circle, DM Sans Medium 14 initials fallback,
 * image cover-cropped to the circle. Loading/Error fall back to initials;
 * <AvatarBadge status="error"> adds Figma's 16px error indicator.
 */
const sizes = { sm: "size-8", default: "size-12", lg: "size-16" } as const

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & { size?: keyof typeof sizes }) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex shrink-0 items-center justify-center rounded-full bg-muted select-none",
        sizes[size],
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("size-full rounded-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center overflow-hidden rounded-full font-sans text-sm leading-6 md:leading-5 font-medium text-foreground",
        "[&_svg]:size-4 group-data-[size=lg]/avatar:[&_svg]:size-8",
        className
      )}
      {...props}
    />
  )
}

/**
 * Figma error indicator: 16px circle on the bottom-end edge with a 12px warning glyph.
 * Pass children to replace the glyph (then give it your own aria-label if it carries meaning).
 */
function AvatarBadge({ className, children, ...props }: React.ComponentProps<"span">) {
  const custom = children !== undefined && children !== null
  return (
    <span
      data-slot="avatar-badge"
      role={custom ? undefined : "img"}
      aria-label={custom ? undefined : "Image failed to load"}
      className={cn(
        "absolute end-0 bottom-0 z-10 flex size-4 items-center justify-center rounded-full border border-[var(--status-error-border)] bg-[var(--status-error-background)] text-[var(--status-error-icon)] [&>svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    >
      {custom ? children : <WarningIcon className="size-3" />}
    </span>
  )
}

/** Overlapping stack of Avatars; each gets a 2px ring in the page background colour. */
function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2 has-data-[size=lg]:-space-x-4",
        "*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

/** "+N" bubble at the end of an AvatarGroup; follows the group's avatar size. */
function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-12 shrink-0 items-center justify-center rounded-full bg-muted ring-2 ring-background select-none",
        "font-sans text-sm leading-6 md:leading-5 font-medium text-foreground",
        "group-has-data-[size=sm]/avatar-group:size-8 group-has-data-[size=lg]/avatar-group:size-16",
        "[&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-8",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage }
