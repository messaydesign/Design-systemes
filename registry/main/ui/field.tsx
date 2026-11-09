"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/registry/main/ui/label"
import { CheckIcon, InfoIcon, WarningIcon } from "@/registry/main/ui/icons"

/*
 * Field — Figma "Field" (135:2039), "Forms/Text field" (28:796),
 * "Forms/Field label" (31:657) and "Forms/Field message" (31:658).
 *
 *   <Field validation="error">
 *     <FieldLabel htmlFor="name" requirement="Required">Full name</FieldLabel>
 *     <Input id="name" aria-invalid />          // border color comes from Field
 *     <FieldMessage>Enter a valid value.</FieldMessage>
 *   </Field>
 *
 * Labels stay visible; status messages always pair text with an icon.
 */

type Validation = "none" | "error" | "warning" | "success"

const FieldContext = React.createContext<{ validation: Validation }>({ validation: "none" })

const fieldVariants = cva("group/field flex w-full gap-2", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row items-start [&>[data-slot=field-label]]:min-h-12 [&>[data-slot=field-label]]:shrink-0",
    },
  },
  defaultVariants: { orientation: "vertical" },
})

function Field({
  className,
  orientation,
  validation = "none",
  disabled,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof fieldVariants> & { validation?: Validation; disabled?: boolean }) {
  return (
    <FieldContext.Provider value={{ validation }}>
      <div
        role="group"
        data-slot="field"
        data-validation={validation}
        data-invalid={validation === "error" || undefined}
        data-disabled={disabled || undefined}
        className={cn(
          fieldVariants({ orientation }),
          // Pass validation down to the control without prop drilling.
          "data-[validation=error]:[&_[data-slot=input]]:border-[var(--status-error-border)] data-[validation=error]:[&_[data-slot=textarea]]:border-[var(--status-error-border)] data-[validation=error]:[&_[data-slot=select-trigger]]:border-[var(--status-error-border)] data-[validation=error]:[&_[data-slot=native-select]]:border-[var(--status-error-border)]",
          "data-[validation=warning]:[&_[data-slot=input]]:border-[var(--status-warning-border)] data-[validation=warning]:[&_[data-slot=textarea]]:border-[var(--status-warning-border)] data-[validation=warning]:[&_[data-slot=select-trigger]]:border-[var(--status-warning-border)] data-[validation=warning]:[&_[data-slot=native-select]]:border-[var(--status-warning-border)]",
          "data-[validation=success]:[&_[data-slot=input]]:border-[var(--status-success-border)] data-[validation=success]:[&_[data-slot=textarea]]:border-[var(--status-success-border)] data-[validation=success]:[&_[data-slot=select-trigger]]:border-[var(--status-success-border)] data-[validation=success]:[&_[data-slot=native-select]]:border-[var(--status-success-border)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </FieldContext.Provider>
  )
}

/** Wraps the control and reserves the 48px touch height from Figma's "Control area". */
function FieldControl({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-control"
      className={cn("flex min-h-12 w-full flex-col justify-center", className)}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  requirement,
  children,
  ...props
}: React.ComponentProps<typeof Label> & {
  /** Right-aligned "Required" / "Optional" text (Figma Field label State). */
  requirement?: React.ReactNode
}) {
  return (
    <Label data-slot="field-label" className={cn("w-full justify-between", className)} {...props}>
      <span>{children}</span>
      {requirement ? (
        <span className="text-sm font-normal text-[var(--text-secondary)]">{requirement}</span>
      ) : null}
    </Label>
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn("font-sans text-sm leading-6 text-[var(--text-secondary)]", className)}
      {...props}
    />
  )
}

const messageVariants = cva("flex w-full items-start gap-2 font-sans text-sm leading-6 [&>svg]:mt-1 [&>svg]:size-4", {
  variants: {
    status: {
      helper: "text-[var(--text-secondary)]",
      info: "text-[var(--status-info-text)] [&>svg]:text-[var(--status-info-icon)]",
      success: "text-[var(--status-success-text)] [&>svg]:text-[var(--status-success-icon)]",
      warning: "text-[var(--status-warning-text)] [&>svg]:text-[var(--status-warning-icon)]",
      error: "text-[var(--status-error-text)] [&>svg]:text-[var(--status-error-icon)]",
    },
  },
})

const statusIcon = {
  helper: null,
  info: InfoIcon,
  success: CheckIcon,
  warning: WarningIcon,
  error: WarningIcon,
} as const

type MessageStatus = keyof typeof statusIcon

/**
 * Helper or status message. Status defaults to the parent Field's validation
 * (none → helper). Errors are announced to assistive tech.
 */
function FieldMessage({
  className,
  status,
  children,
  ...props
}: React.ComponentProps<"p"> & { status?: MessageStatus }) {
  const { validation } = React.useContext(FieldContext)
  const resolved: MessageStatus = status ?? (validation === "none" ? "helper" : validation)
  const Icon = statusIcon[resolved]
  if (!children) return null
  return (
    <p
      data-slot="field-message"
      data-status={resolved}
      role={resolved === "error" ? "alert" : undefined}
      className={cn(messageVariants({ status: resolved }), className)}
      {...props}
    >
      {Icon ? <Icon /> : null}
      <span className="min-w-0 flex-1">{children}</span>
    </p>
  )
}

/** Alias kept for shadcn compatibility. */
function FieldError(props: Omit<React.ComponentProps<typeof FieldMessage>, "status">) {
  return <FieldMessage status="error" {...props} />
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="field-group" className={cn("flex w-full flex-col gap-6", className)} {...props} />
}

export {
  Field,
  FieldControl,
  FieldLabel,
  FieldDescription,
  FieldMessage,
  FieldError,
  FieldGroup,
  type Validation,
}
