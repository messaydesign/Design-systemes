import { Field, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/main/ui/input-otp"

export default function InputOTPDisabled() {
  return (
    <Field disabled className="w-fit">
      <FieldLabel htmlFor="otp-disabled">Verification code</FieldLabel>
      <InputOTP id="otp-disabled" maxLength={6} defaultValue="12" disabled aria-describedby="otp-disabled-help">
        <InputOTPGroup>
          {Array.from({ length: 6 }, (_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <FieldMessage id="otp-disabled-help">Too many attempts. Try again in 5 minutes.</FieldMessage>
    </Field>
  )
}
