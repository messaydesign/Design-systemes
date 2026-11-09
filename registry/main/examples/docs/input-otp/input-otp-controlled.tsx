"use client"

import * as React from "react"

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/main/ui/input-otp"

export default function InputOTPControlled() {
  const [value, setValue] = React.useState("")
  return (
    <div className="flex flex-col items-center gap-2">
      <InputOTP maxLength={4} value={value} onChange={setValue} aria-label="PIN">
        <InputOTPGroup>
          {Array.from({ length: 4 }, (_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">
        {value ? `You entered ${value.length} of 4 digits.` : "Enter your 4-digit PIN."}
      </p>
    </div>
  )
}
