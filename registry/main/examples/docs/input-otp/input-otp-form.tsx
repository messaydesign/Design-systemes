"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { Field, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/main/ui/input-otp"

const LENGTH = 6

export default function InputOTPForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [verified, setVerified] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <form
      noValidate
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        // The single underlying <input> submits the whole code under `name`.
        const code = String(new FormData(event.currentTarget).get("code") ?? "")
        const message = code.length < LENGTH ? `Enter all ${LENGTH} digits.` : code === "123456" ? null : "That code is incorrect. Try 123456."
        setError(message)
        setVerified(!message)
        if (message) inputRef.current?.focus()
      }}
    >
      <Field validation={error ? "error" : verified ? "success" : "none"} className="w-fit">
        <FieldLabel htmlFor="otp-form">Verification code</FieldLabel>
        <InputOTP
          ref={inputRef}
          id="otp-form"
          name="code"
          maxLength={LENGTH}
          pattern="^\d+$"
          aria-invalid={error ? true : undefined}
          aria-describedby="otp-form-msg"
          onChange={() => setError(null)}
        >
          <InputOTPGroup>
            {Array.from({ length: LENGTH }, (_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <FieldMessage id="otp-form-msg">
          {error ?? (verified ? "Verified — you’re signed in." : "Check your authenticator app.")}
        </FieldMessage>
      </Field>
      <Button type="submit" className="self-start">
        Verify
      </Button>
    </form>
  )
}
