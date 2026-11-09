import * as React from "react"

import { cn } from "@/lib/utils"

/*
 * Icons from Figma "Icons/*" (nodes 26:17 plus, 26:50 arrow, 26:47 spinner).
 * Ink inherits currentColor. Stroke stays 1.8px at every rendered size,
 * matching both the 24px and 16px masters. Directional icons mirror in RTL.
 */

type IconProps = React.ComponentProps<"svg">

function Icon({ className, children, viewBox = "0 0 24 24", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  )
}

function PlusIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" {...props}>
      <path vectorEffect="non-scaling-stroke" d="M12 5v14M5 12h14" />
    </Icon>
  )
}

function ArrowRightIcon({ className, ...props }: IconProps) {
  return (
    <Icon data-slot="icon" className={cn("rtl:-scale-x-100", className)} {...props}>
      <path vectorEffect="non-scaling-stroke" d="M5 12h14M14 17l5-5-5-5" />
    </Icon>
  )
}

function SpinnerIcon({ className, ...props }: IconProps) {
  return (
    <Icon
      data-slot="spinner"
      viewBox="0 0 16 16"
      className={cn("size-4 motion-safe:animate-spin", className)}
      {...props}
    >
      <path
        vectorEffect="non-scaling-stroke"
        d="M14 8a6 6 0 1 1-6-6"
      />
    </Icon>
  )
}

/* 16px glyphs (Figma Icons/check 26:26, minus 26:20, chevron 26:2,
   warning 26:44, info 26:41). Drawn on a 16px grid. */

function CheckIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 16 16" {...props}>
      <path vectorEffect="non-scaling-stroke" d="M3.333 8 6 10.667 12.667 4" />
    </Icon>
  )
}

function MinusIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 16 16" {...props}>
      <path vectorEffect="non-scaling-stroke" d="M3.333 8h9.334" />
    </Icon>
  )
}

function ChevronDownIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 16 16" {...props}>
      <path vectorEffect="non-scaling-stroke" d="m4 6 4 4 4-4" />
    </Icon>
  )
}

function WarningIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 16 16" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M8 6v3.333M8 11.333V12M8 2 .667 14h14.666L8 2Z"
      />
    </Icon>
  )
}

function InfoIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 16 16" {...props}>
      <path vectorEffect="non-scaling-stroke" d="M8 6.667v4.666M8 4v.667" />
      <circle vectorEffect="non-scaling-stroke" cx="8" cy="8" r="6.667" />
    </Icon>
  )
}

function CloseIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" {...props}>
      <path vectorEffect="non-scaling-stroke" d="M6 6l12 12M18 6 6 18" />
    </Icon>
  )
}

/* Figma Icons/chevron rotated -90° for submenus; mirrors in RTL. */
function ChevronRightIcon({ className, ...props }: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 16 16" className={cn("rtl:-scale-x-100", className)} {...props}>
      <path vectorEffect="non-scaling-stroke" d="m6 4 4 4-4 4" />
    </Icon>
  )
}

/* Figma Icons/left (26:56), 24px grid; mirrors in RTL. */
function ChevronLeftIcon({ className, ...props }: IconProps) {
  return (
    <Icon data-slot="icon" className={cn("rtl:-scale-x-100", className)} {...props}>
      <path vectorEffect="non-scaling-stroke" d="M15 5l-7 7 7 7" />
    </Icon>
  )
}

function UserIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 16 16" {...props}>
      <path
        vectorEffect="non-scaling-stroke"
        d="M13.333 14v-1.333A4.667 4.667 0 0 0 8.667 8 4.667 4.667 0 0 0 4 12.667V14"
      />
      <circle vectorEffect="non-scaling-stroke" cx="8" cy="4.667" r="2.667" />
    </Icon>
  )
}

/* Figma Icons/search (26:5), 16px grid. */
function SearchIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 16 16" {...props}>
      <path vectorEffect="non-scaling-stroke" d="m14 14-3.333-3.333" />
      <circle vectorEffect="non-scaling-stroke" cx="6.667" cy="6.667" r="5.333" />
    </Icon>
  )
}

/* Figma Icons/file (26:32), drawn on a 32px grid. */
function FileIcon(props: IconProps) {
  return (
    <Icon data-slot="icon" viewBox="0 0 32 32" {...props}>
      <path vectorEffect="non-scaling-stroke" d="M25.333 10.667V9.333l-6.666-6.666h-12v26.666h18.666V10.667ZM18.667 2.667v8h6.666" />
    </Icon>
  )
}

export {
  PlusIcon,
  ArrowRightIcon,
  SpinnerIcon,
  CheckIcon,
  MinusIcon,
  ChevronDownIcon,
  WarningIcon,
  InfoIcon,
  CloseIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  UserIcon,
  FileIcon,
  SearchIcon,
}
