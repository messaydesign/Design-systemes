"use client"

import * as React from "react"

import { Chip } from "@/registry/main/ui/chip"
import {
  Field,
  FieldControl,
  FieldCounter,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldMessage,
  FieldSet,
} from "@/registry/main/ui/field"
import { SearchIcon, UserIcon } from "@/registry/main/ui/icons"
import { Input } from "@/registry/main/ui/input"
import { InputGroup, InputGroupButton, InputGroupInput, InputGroupText } from "@/registry/main/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/main/ui/input-otp"
import { Slider } from "@/registry/main/ui/slider"
import { Textarea } from "@/registry/main/ui/textarea"
import {
  ValidationSummary,
  ValidationSummaryDescription,
  ValidationSummaryList,
  ValidationSummaryTitle,
} from "@/registry/main/ui/validation-summary"
import { PreviewFrame, Section } from "@/registry/main/examples/preview-frame"

const grid = "grid gap-8 md:grid-cols-2"

function InputGroups() {
  const [show, setShow] = React.useState(false)
  return (
    <div className={grid}>
      <Field>
        <FieldLabel htmlFor="ig-url">Website</FieldLabel>
        <FieldControl>
          <InputGroup>
            <InputGroupText>https://</InputGroupText>
            <InputGroupInput id="ig-url" placeholder="Enter your name" />
            <InputGroupText>.com</InputGroupText>
          </InputGroup>
        </FieldControl>
      </Field>
      <Field>
        <FieldLabel htmlFor="ig-search">Search</FieldLabel>
        <FieldControl>
          <InputGroup>
            <SearchIcon />
            <InputGroupInput id="ig-search" type="search" placeholder="Enter your name" />
          </InputGroup>
        </FieldControl>
      </Field>
      <Field>
        <FieldLabel htmlFor="ig-action">Search with action</FieldLabel>
        <FieldControl>
          <InputGroup>
            <InputGroupInput id="ig-action" placeholder="Enter your name" />
            <InputGroupButton aria-label="Search">
              <SearchIcon />
            </InputGroupButton>
          </InputGroup>
        </FieldControl>
      </Field>
      <Field>
        <FieldLabel htmlFor="ig-combined">Combined</FieldLabel>
        <FieldControl>
          <InputGroup>
            <InputGroupText>https://</InputGroupText>
            <SearchIcon />
            <InputGroupInput id="ig-combined" placeholder="Enter your name" />
            <InputGroupButton aria-label="Search">
              <SearchIcon />
            </InputGroupButton>
          </InputGroup>
        </FieldControl>
      </Field>
      <Field validation="error">
        <FieldLabel htmlFor="ig-password">Password</FieldLabel>
        <FieldControl>
          <InputGroup>
            <InputGroupInput id="ig-password" type={show ? "text" : "password"} defaultValue="hunter2" aria-invalid />
            <InputGroupButton
              aria-label={show ? "Hide password" : "Show password"}
              aria-pressed={show}
              className="w-auto px-2 text-xs"
              onClick={() => setShow((v) => !v)}
            >
              {show ? "Hide" : "Show"}
            </InputGroupButton>
          </InputGroup>
        </FieldControl>
        <FieldMessage>Use at least 12 characters.</FieldMessage>
      </Field>
      <Field>
        <FieldLabel htmlFor="ig-disabled">Disabled</FieldLabel>
        <FieldControl>
          <InputGroup>
            <UserIcon />
            <InputGroupInput id="ig-disabled" placeholder="Unavailable" disabled />
          </InputGroup>
        </FieldControl>
      </Field>
    </div>
  )
}

function Sliders() {
  const [single, setSingle] = React.useState([50])
  const [range, setRange] = React.useState([25, 75])
  return (
    <div className={grid}>
      {[
        { label: "Budget", value: single, set: setSingle, names: ["Budget"] },
        { label: "Price range", value: range, set: setRange, names: ["Minimum price", "Maximum price"] },
      ].map(({ label, value, set, names }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="font-sans text-sm leading-6 font-medium">{label}</span>
          <span className="text-base leading-6">{value.join(" – ")}</span>
          <Slider value={value} onValueChange={set} thumbLabels={names} />
          <div className="flex justify-between text-base leading-6">
            <span>0</span>
            <span>100</span>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <span className="font-sans text-sm leading-6 font-medium">Budget (disabled)</span>
        <span className="text-base leading-6 text-[var(--disabled-text)]">50</span>
        <Slider defaultValue={[50]} disabled thumbLabels={["Budget"]} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-sans text-sm leading-6 font-medium">Range (disabled)</span>
        <span className="text-base leading-6 text-[var(--disabled-text)]">25 – 75</span>
        <Slider defaultValue={[25, 75]} disabled thumbLabels={["Minimum", "Maximum"]} />
      </div>
    </div>
  )
}

function Otp() {
  const [value, setValue] = React.useState("34")
  return (
    <div className="flex flex-col gap-6">
      <Field>
        <FieldLabel htmlFor="otp">Verification code</FieldLabel>
        <FieldControl>
          <InputOTP id="otp" maxLength={6} value={value} onChange={setValue}>
            <InputOTPGroup>
              {Array.from({ length: 6 }, (_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </FieldControl>
        <FieldMessage>Enter the 6-digit code we sent you.</FieldMessage>
      </Field>
      <Field>
        <FieldLabel htmlFor="otp-disabled">Disabled</FieldLabel>
        <FieldControl>
          <InputOTP id="otp-disabled" maxLength={6} defaultValue="123456" disabled>
            <InputOTPGroup>
              {Array.from({ length: 6 }, (_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </FieldControl>
      </Field>
    </div>
  )
}

function Chips() {
  const [tags, setTags] = React.useState(["Design", "Research", "Engineering"])
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <Chip key={tag} onRemove={() => setTags((t) => t.filter((x) => x !== tag))}>
          {tag}
        </Chip>
      ))}
      <Chip>Static</Chip>
      <Chip disabled onRemove={() => {}}>
        Disabled
      </Chip>
      {tags.length < 3 && (
        <button
          type="button"
          className="text-sm text-[var(--button-link-default-text)] underline"
          onClick={() => setTags(["Design", "Research", "Engineering"])}
        >
          Reset
        </button>
      )}
    </div>
  )
}

function FieldSets() {
  const [bio, setBio] = React.useState("")
  return (
    <div className="flex flex-col gap-12">
      {(["vertical", "horizontal"] as const).map((orientation) => (
        <FieldSet key={orientation} className={orientation === "vertical" ? "max-w-[400px]" : undefined}>
          <FieldLegend>Contact details</FieldLegend>
          <FieldDescription>We will use these details to contact you.</FieldDescription>
          <FieldGroup orientation={orientation}>
            <Field>
              <FieldLabel htmlFor={`fs-name-${orientation}`}>Full name</FieldLabel>
              <FieldControl>
                <Input id={`fs-name-${orientation}`} placeholder="Enter your name" />
              </FieldControl>
              <FieldMessage>Helpful guidance for this field.</FieldMessage>
            </Field>
            <Field>
              <FieldLabel htmlFor={`fs-email-${orientation}`}>Email</FieldLabel>
              <FieldControl>
                <InputGroup>
                  <UserIcon />
                  <InputGroupInput id={`fs-email-${orientation}`} type="email" placeholder="name@example.com" />
                </InputGroup>
              </FieldControl>
              <FieldMessage>Helpful guidance for this field.</FieldMessage>
            </Field>
          </FieldGroup>
        </FieldSet>
      ))}
      <Field validation={bio.length > 200 ? "error" : "none"} className="max-w-[400px]">
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} aria-describedby="bio-count" />
        <div className="flex gap-2">
          <FieldMessage>{bio.length > 200 ? "Keep it under 200 characters." : "A short introduction."}</FieldMessage>
          <FieldCounter id="bio-count" value={bio.length} max={200} />
        </div>
      </Field>
      <div className="flex flex-wrap gap-8">
        <FieldCounter value={0} max={200} className="ms-0" />
        <FieldCounter value={200} max={200} className="ms-0" />
        <FieldCounter value={201} max={200} className="ms-0" />
        <FieldCounter value={0} max={200} disabled className="ms-0" />
      </div>
    </div>
  )
}

function Summaries() {
  return (
    <div className={grid}>
      <ValidationSummary status="info">
        <ValidationSummaryTitle>A few things to know</ValidationSummaryTitle>
        <ValidationSummaryDescription>Your information is kept in this form.</ValidationSummaryDescription>
      </ValidationSummary>
      <ValidationSummary status="success">
        <ValidationSummaryTitle>Your changes are saved</ValidationSummaryTitle>
        <ValidationSummaryDescription>Your information is kept in this form.</ValidationSummaryDescription>
      </ValidationSummary>
      <ValidationSummary status="warning">
        <ValidationSummaryTitle>Review before continuing</ValidationSummaryTitle>
        <ValidationSummaryDescription>Your information is kept in this form.</ValidationSummaryDescription>
      </ValidationSummary>
      <ValidationSummary status="error">
        <ValidationSummaryTitle>Please fix the following fields</ValidationSummaryTitle>
        <ValidationSummaryList>
          <li>
            <a href="#fs-email-vertical">Email — enter a valid address</a>
          </li>
          <li>
            <a href="#bio">Preferences — choose an option</a>
          </li>
        </ValidationSummaryList>
      </ValidationSummary>
    </div>
  )
}

export function FormExtrasShowcase() {
  return (
    <PreviewFrame>
      <Section title="Input Group · Text / Icon / Button / Combined / Password">
        <InputGroups />
      </Section>
      <Section title="Slider · Single / Range / Disabled">
        <Sliders />
      </Section>
      <Section title="OTP">
        <Otp />
      </Section>
      <Section title="Chip">
        <Chips />
      </Section>
      <Section title="Field Set · Counter">
        <FieldSets />
      </Section>
      <Section title="Validation Summary">
        <Summaries />
      </Section>
    </PreviewFrame>
  )
}
