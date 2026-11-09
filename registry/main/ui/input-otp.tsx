"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"

import { cn } from "@/lib/utils"
import { MinusIcon } from "@/registry/main/ui/icons"

/*
 * OTP — Figma ".Building blocks/OTP control" (27:1959) and "Forms/OTP field".
 * Digit cells 40×32, 8px apart, 8px radius, 1px input outline, DM Sans 16/24.
 * States: Default · Hover (surface-hover, darker outline) · Focus (active
 * cell gets the brand outline) · Read only · Disabled · Loading.
 * One real <input> underneath (input-otp) keeps paste, autofill
 * (autoComplete="one-time-code") and screen readers working.
 */

function InputOTP({
  className,
  containerClassName,
  value: valueProp,
  defaultValue,
  onChange,
  ...props
}: React.ComponentProps<typeof OTPInput> & { containerClassName?: string }) {
  // input-otp forwards defaultValue to its <input> while also controlling
  // value, which React warns about; own the uncontrolled state here instead.
  const [internal, setInternal] = React.useState(String(defaultValue ?? ""))
  const value = valueProp ?? internal
  return (
    <OTPInput
      data-slot="input-otp"
      autoComplete="one-time-code"
      value={value}
      onChange={(next: string) => {
        if (valueProp === undefined) setInternal(next)
        onChange?.(next)
      }}
      containerClassName={cn("group/otp flex items-center gap-2 has-disabled:pointer-events-none", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="input-otp-group" className={cn("flex items-center gap-2", className)} {...props} />
}

function InputOTPSlot({ index, className, ...props }: React.ComponentProps<"div"> & { index: number }) {
  const context = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = context?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive || undefined}
      className={cn(
        "relative flex h-8 w-10 items-center justify-center rounded-lg border border-input bg-[var(--input-surface)]",
        "font-sans text-base leading-6 md:text-sm md:leading-5 text-foreground transition-[background-color,border-color] duration-150",
        "group-hover/otp:border-[var(--input-outline-hover)] group-hover/otp:bg-accent",
        "data-[active]:border-[var(--input-outline-focus)] data-[active]:bg-[var(--input-surface)]",
        "group-hover/otp:data-[active]:border-[var(--input-outline-focus)] group-hover/otp:data-[active]:bg-[var(--input-surface)]",
        "group-has-[[aria-invalid=true]]/otp:border-[var(--status-error-border)]",
        "group-has-disabled/otp:border-[var(--disabled-border)] group-has-disabled/otp:bg-[var(--input-surface-disabled)] group-has-disabled/otp:text-[var(--disabled-text)]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-pulse bg-foreground motion-reduce:animate-none" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" className="text-muted-foreground" {...props}>
      <MinusIcon className="size-4" />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
