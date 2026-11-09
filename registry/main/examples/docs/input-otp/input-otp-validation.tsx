import { Field, FieldLabel, FieldMessage } from "@/registry/main/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/main/ui/input-otp"

export default function InputOTPValidation() {
  return (
    <Field validation="error" className="w-fit">
      <FieldLabel htmlFor="otp-invalid">Verification code</FieldLabel>
      <InputOTP id="otp-invalid" maxLength={6} defaultValue="482913" aria-invalid aria-describedby="otp-invalid-msg">
        <InputOTPGroup>
          {Array.from({ length: 6 }, (_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <FieldMessage id="otp-invalid-msg">That code has expired. Request a new one.</FieldMessage>
    </Field>
  )
}
