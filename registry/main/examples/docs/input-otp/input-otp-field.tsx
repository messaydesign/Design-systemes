import { Field, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/main/ui/input-otp"

export default function InputOTPField() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="otp-field">Verification code</FieldLabel>
      {/* Digits only: the pattern rejects other characters as they’re typed or pasted. */}
      <InputOTP id="otp-field" maxLength={6} pattern="^\d+$" aria-describedby="otp-field-help">
        <InputOTPGroup>
          {Array.from({ length: 6 }, (_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <FieldMessage id="otp-field-help">We sent a 6-digit code to +49 ••• ••• 21.</FieldMessage>
    </Field>
  )
}
