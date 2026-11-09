import type { Metadata } from "next"

import { A11yList, Callout, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Input OTP" }

export default function InputOTPPage() {
  return (
    <>
      <DocHeader
        slug="input-otp"
        title="Input OTP"
        description="A one-time code field drawn as separate digit cells. One real input underneath keeps paste, SMS autofill and screen readers working."
      />
      <ComponentPreview name="input-otp-demo" />

      <H2>Installation</H2>
      <Installation item="input-otp" />

      <H2>Usage</H2>
      <CodeBlock code={`import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"

<InputOTP maxLength={6} aria-label="One-time code">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`} />

      <H2>Composition</H2>
      <P>
        Same parts as shadcn/ui, built on <InlineCode>input-otp</InlineCode>: <InlineCode>InputOTP</InlineCode> is the
        input and its state (set <InlineCode>maxLength</InlineCode>) · <InlineCode>InputOTPGroup</InlineCode> lays cells
        out 8px apart · <InlineCode>InputOTPSlot index</InlineCode> draws one 40×32 cell · <InlineCode>InputOTPSeparator</InlineCode>{" "}
        is a decorative dash between groups. Main Brand differences: <InlineCode>autoComplete=&quot;one-time-code&quot;</InlineCode>{" "}
        is set for you, and <InlineCode>defaultValue</InlineCode> works for uncontrolled use.
      </P>

      <H2>Examples</H2>
      <H3>Label and helper text</H3>
      <P>
        Pass <InlineCode>id</InlineCode> and <InlineCode>aria-describedby</InlineCode> to InputOTP — they land on the real
        input, so <InlineCode>FieldLabel htmlFor</InlineCode> names it. <InlineCode>pattern</InlineCode> limits the
        characters; here digits only.
      </P>
      <ComponentPreview name="input-otp-field" />

      <H3>Controlled</H3>
      <P>Use <InlineCode>value</InlineCode> and <InlineCode>onChange</InlineCode> to read the code as it’s typed.</P>
      <ComponentPreview name="input-otp-controlled" />

      <H3>Validation</H3>
      <P>
        <InlineCode>aria-invalid</InlineCode> on InputOTP gives every cell the error border. Field’s{" "}
        <InlineCode>validation</InlineCode> styles the message only, so set both.
      </P>
      <ComponentPreview name="input-otp-validation" />

      <H3>Required, read-only and disabled</H3>
      <P>
        <InlineCode>disabled</InlineCode> greys out all cells and blocks input; <InlineCode>Field disabled</InlineCode>{" "}
        greys out the label. <InlineCode>required</InlineCode> and <InlineCode>readOnly</InlineCode> are passed to the
        input.
      </P>
      <ComponentPreview name="input-otp-disabled" />

      <H3>Form integration</H3>
      <P>
        Give InputOTP a <InlineCode>name</InlineCode> and the whole code submits as one value. Here the code is checked on
        submit (try <InlineCode>123456</InlineCode>); you can also submit automatically with{" "}
        <InlineCode>onComplete</InlineCode>. On error, focus returns to the input through its <InlineCode>ref</InlineCode>.
      </P>
      <ComponentPreview name="input-otp-form" />
      <Callout tone="missing" title="Loading and Read only styles">
        Figma’s Loading state (verifying the code) and the read-only cell style are not implemented. Disable the input
        and show progress text next to it while verifying.
      </Callout>

      <H2>RTL</H2>
      <P>Codes are read left to right in every language; wrap the field in <InlineCode>dir=&quot;ltr&quot;</InlineCode> on RTL pages so the first digit stays on the left.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          "There is one real text input; the cells are visual. Screen readers read the code as a single value.",
          <>Name it with <InlineCode>FieldLabel htmlFor</InlineCode> or <InlineCode>aria-label</InlineCode>, and say where the code was sent in helper text.</>,
          <><InlineCode>autoComplete=&quot;one-time-code&quot;</InlineCode> lets iOS and Android offer the code from SMS; paste fills every cell.</>,
          <>Numeric codes get the numeric keyboard (<InlineCode>inputMode</InlineCode> defaults to numeric).</>,
          "The caret blinks in the active cell and stops with prefers-reduced-motion.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Cells use <InlineCode>--input-surface</InlineCode>, <InlineCode>--input-outline-hover</InlineCode>,{" "}
        <InlineCode>--input-outline-focus</InlineCode>, <InlineCode>--status-error-border</InlineCode> and the{" "}
        <InlineCode>--disabled-*</InlineCode> tokens. Resize cells with <InlineCode>className</InlineCode> on InputOTPSlot;
        use <InlineCode>containerClassName</InlineCode> for the outer layout.
      </P>

      <H2>API reference</H2>
      <H3>InputOTP</H3>
      <PropsTable
        rows={[
          { name: "maxLength", type: "number", description: "Required. Number of characters (and slots)." },
          { name: "value / defaultValue", type: "string", description: "Code (controlled / uncontrolled)." },
          { name: "onChange", type: "(value: string) => void", description: "Called on every change." },
          { name: "onComplete", type: "(value: string) => void", description: "Called when all slots are filled." },
          { name: "pattern", type: "string", description: "Regex source the typed or pasted value must match, e.g. \"^\\d+$\"." },
          { name: "containerClassName", type: "string", description: "Classes for the wrapper around the groups." },
          { name: "aria-invalid", type: "boolean", description: "Error border on every cell." },
          { name: "disabled", type: "boolean", default: "false", description: "Greys out all cells." },
        ]}
      />
      <H3>InputOTPSlot</H3>
      <PropsTable rows={[{ name: "index", type: "number", description: "Required. Which character this cell shows (0-based)." }]} />
      <P>
        Remaining InputOTP props pass through to <InlineCode>OTPInput</InlineCode> from input-otp and its native{" "}
        <InlineCode>&lt;input&gt;</InlineCode>. Group, Slot and Separator accept <InlineCode>div</InlineCode> props.
      </P>
    </>
  )
}
