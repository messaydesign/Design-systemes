"use client"

import * as React from "react"

import { Checkbox } from "@/registry/main/ui/checkbox"
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldMessage,
} from "@/registry/main/ui/field"
import { Input } from "@/registry/main/ui/input"
import { Label } from "@/registry/main/ui/label"
import { NativeSelect, NativeSelectOption } from "@/registry/main/ui/native-select"
import { RadioGroup, RadioGroupItem } from "@/registry/main/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/registry/main/ui/select"
import { Switch } from "@/registry/main/ui/switch"
import { Textarea } from "@/registry/main/ui/textarea"
import { PreviewFrame, Section } from "@/registry/main/examples/preview-frame"

const grid = "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"

function TextFields() {
  const fields = [
    { validation: "none", message: "Helpful guidance for this field." },
    { validation: "error", message: "Enter a valid value." },
    { validation: "warning", message: "Please review this value." },
    { validation: "success", message: "Looks good." },
  ] as const
  return (
    <div className={grid}>
      {fields.map(({ validation, message }) => (
        <Field key={validation} validation={validation}>
          <FieldLabel htmlFor={`name-${validation}`}>Full name</FieldLabel>
          <FieldControl>
            <Input
              id={`name-${validation}`}
              placeholder="Enter your name"
              aria-invalid={validation === "error" || undefined}
              aria-describedby={`name-${validation}-msg`}
            />
          </FieldControl>
          <FieldMessage id={`name-${validation}-msg`}>{message}</FieldMessage>
        </Field>
      ))}
      <Field>
        <FieldLabel htmlFor="email" requirement="Required">
          Email
        </FieldLabel>
        <FieldControl>
          <Input id="email" type="email" shape="rounded" placeholder="you@example.com" required />
        </FieldControl>
        <FieldDescription>Rounded shape (pill).</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="team" requirement="Optional">
          Team
        </FieldLabel>
        <FieldControl>
          <Input id="team" defaultValue="Design systems" readOnly />
        </FieldControl>
        <FieldDescription>Read only.</FieldDescription>
      </Field>
      <Field disabled>
        <FieldLabel htmlFor="company">Company</FieldLabel>
        <FieldControl>
          <Input id="company" placeholder="Not editable" disabled />
        </FieldControl>
        <FieldDescription>Disabled.</FieldDescription>
      </Field>
    </div>
  )
}

function Textareas() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <Field>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <Textarea id="message" placeholder="A clear message that can grow with your content." />
        <FieldMessage>Up to 200 characters.</FieldMessage>
      </Field>
      <Field validation="error">
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <Textarea id="bio" shape="rounded" defaultValue="Too short" aria-invalid />
        <FieldMessage>Tell us a little more.</FieldMessage>
      </Field>
    </div>
  )
}

function Choices() {
  const [all, setAll] = React.useState<boolean | "indeterminate">("indeterminate")
  return (
    <div className={grid}>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-[var(--text-secondary)]">Checkbox</h3>
        {[
          ["cb-1", "Option label", false, false],
          ["cb-2", "Checked", true, false],
          ["cb-4", "Disabled", false, true],
          ["cb-5", "Disabled checked", true, true],
        ].map(([id, label, checked, disabled]) => (
          <div key={id as string} className="flex h-8 items-center gap-2">
            <Checkbox id={id as string} defaultChecked={checked as boolean} disabled={disabled as boolean} />
            <Label htmlFor={id as string} className="text-base font-normal">
              {label}
            </Label>
          </div>
        ))}
        <div className="flex h-8 items-center gap-2">
          <Checkbox id="cb-3" checked={all} onCheckedChange={setAll} />
          <Label htmlFor="cb-3" className="text-base font-normal">
            Indeterminate (click me)
          </Label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-[var(--text-secondary)]">Radio group</h3>
        <RadioGroup defaultValue="design" aria-label="Discipline">
          {[
            ["design", "Product design", false],
            ["research", "Research", false],
            ["eng", "Engineering", false],
            ["legal", "Unavailable", true],
          ].map(([value, label, disabled]) => (
            <div key={value as string} className="flex h-8 items-center gap-2">
              <RadioGroupItem value={value as string} id={`r-${value}`} disabled={disabled as boolean} />
              <Label htmlFor={`r-${value}`} className="text-base font-normal">
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-[var(--text-secondary)]">Switch</h3>
        {[
          ["sw-1", "Enable notifications", false, false],
          ["sw-2", "Weekly digest", true, false],
          ["sw-3", "Disabled", false, true],
          ["sw-4", "Disabled on", true, true],
        ].map(([id, label, checked, disabled]) => (
          <div key={id as string} className="flex h-8 items-center gap-2">
            <Switch id={id as string} defaultChecked={checked as boolean} disabled={disabled as boolean} />
            <Label htmlFor={id as string} className="text-base font-normal">
              {label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

function Selects() {
  return (
    <div className={grid}>
      <Field>
        <FieldLabel htmlFor="discipline">Select</FieldLabel>
        <FieldControl>
          <Select>
            <SelectTrigger id="discipline">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Choose an option</SelectLabel>
                <SelectItem value="design">Product design</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="eng">Engineering</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="none" disabled>
                  Unavailable option
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FieldControl>
        <FieldMessage>Helpful guidance for this field.</FieldMessage>
      </Field>
      <Field validation="error">
        <FieldLabel htmlFor="country">Select · error</FieldLabel>
        <FieldControl>
          <Select defaultValue="fr">
            <SelectTrigger id="country" shape="rounded" aria-invalid>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr" showCheck>
                France
              </SelectItem>
              <SelectItem value="de" showCheck>
                Germany
              </SelectItem>
              <SelectItem value="et" showCheck>
                Ethiopia
              </SelectItem>
            </SelectContent>
          </Select>
        </FieldControl>
        <FieldMessage>Choose a supported country.</FieldMessage>
      </Field>
      <Field>
        <FieldLabel htmlFor="native">Native select</FieldLabel>
        <FieldControl>
          <NativeSelect id="native" defaultValue="research">
            <NativeSelectOption value="design">Product design</NativeSelectOption>
            <NativeSelectOption value="research">Research</NativeSelectOption>
            <NativeSelectOption value="eng">Engineering</NativeSelectOption>
          </NativeSelect>
        </FieldControl>
        <FieldMessage>Uses the platform picker on mobile.</FieldMessage>
      </Field>
    </div>
  )
}

function Messages() {
  return (
    <FieldGroup className="max-w-sm gap-2">
      <FieldMessage status="helper">Helpful field guidance</FieldMessage>
      <FieldMessage status="info">Additional information</FieldMessage>
      <FieldMessage status="success">Looks good</FieldMessage>
      <FieldMessage status="warning">Please review this value</FieldMessage>
      <FieldMessage status="error">Enter a valid value</FieldMessage>
    </FieldGroup>
  )
}

export function FormsShowcase() {
  return (
    <PreviewFrame>
      <Section title="Text field · validation, shape, read only, disabled">
        <TextFields />
      </Section>
      <Section title="Textarea">
        <Textareas />
      </Section>
      <Section title="Checkbox · Radio · Switch">
        <Choices />
      </Section>
      <Section title="Select">
        <Selects />
      </Section>
      <Section title="Field messages">
        <Messages />
      </Section>
    </PreviewFrame>
  )
}
