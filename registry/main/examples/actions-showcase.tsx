"use client"

import * as React from "react"

import { Button } from "@/registry/main/ui/button"
import { ButtonGroup } from "@/registry/main/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/main/ui/dropdown-menu"
import { CheckIcon, PlusIcon } from "@/registry/main/ui/icons"
import { SplitButton, SplitButtonAction, SplitButtonTrigger } from "@/registry/main/ui/split-button"
import { Toggle } from "@/registry/main/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/registry/main/ui/toggle-group"
import { PreviewFrame, Section } from "@/registry/main/examples/preview-frame"

const corners = ["default", "soft", "pill"] as const

function Groups() {
  return (
    <div className="flex flex-col gap-8">
      {corners.map((corner) => (
        <div key={corner} className="flex flex-wrap items-start gap-8">
          <ButtonGroup corner={corner} aria-label="Range">
            <Button variant="outline">Day</Button>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
          </ButtonGroup>
          <ButtonGroup corner={corner} orientation="vertical" aria-label="Range" className="w-40">
            <Button variant="outline">Day</Button>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
          </ButtonGroup>
          <ButtonGroup corner={corner} dir="rtl" aria-label="النطاق">
            <Button variant="outline">يوم</Button>
            <Button variant="outline">أسبوع</Button>
            <Button variant="outline">شهر</Button>
          </ButtonGroup>
        </div>
      ))}
    </div>
  )
}

function SplitDemo({ corner }: { corner: (typeof corners)[number] }) {
  const [loading, setLoading] = React.useState(false)
  return (
    <SplitButton corner={corner} loading={loading} aria-label="Save">
      <SplitButtonAction
        onClick={() => {
          setLoading(true)
          window.setTimeout(() => setLoading(false), 2000)
        }}
      >
        Save
      </SplitButtonAction>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SplitButtonTrigger aria-label="More save options" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Save as draft</DropdownMenuItem>
          <DropdownMenuItem>Save and publish</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SplitButton>
  )
}

function Splits() {
  return (
    <div className="flex flex-col gap-6">
      {corners.map((corner) => (
        <div key={corner} className="flex flex-wrap items-center gap-8">
          <SplitDemo corner={corner} />
          <SplitButton corner={corner} disabled>
            <SplitButtonAction>Save</SplitButtonAction>
            <SplitButtonTrigger aria-label="More save options" />
          </SplitButton>
          <SplitButton corner={corner} loading>
            <SplitButtonAction>Save</SplitButtonAction>
            <SplitButtonTrigger aria-label="More save options" />
          </SplitButton>
          <SplitButton corner={corner} dir="rtl">
            <SplitButtonAction>حفظ</SplitButtonAction>
            <SplitButtonTrigger aria-label="خيارات الحفظ" />
          </SplitButton>
        </div>
      ))}
    </div>
  )
}

function ToggleIcon() {
  // Figma fixture: plus when off, check when on (a non-colour cue).
  return (
    <>
      <PlusIcon className="size-4 group-data-[state=on]/toggle:hidden" />
      <CheckIcon className="hidden size-6 group-data-[state=on]/toggle:block" />
    </>
  )
}

function Toggles() {
  return (
    <div className="flex flex-col gap-4">
      {(["default", "outline"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-6">
          <span className="w-20 text-sm text-[var(--text-secondary)]">{variant}</span>
          <Toggle variant={variant} aria-label="Add to favourites" className="group/toggle">
            <ToggleIcon />
          </Toggle>
          <Toggle variant={variant} defaultPressed aria-label="Add to favourites" className="group/toggle">
            <ToggleIcon />
          </Toggle>
          <Toggle variant={variant} disabled aria-label="Add to favourites" className="group/toggle">
            <ToggleIcon />
          </Toggle>
          <Toggle variant={variant} disabled defaultPressed aria-label="Add to favourites" className="group/toggle">
            <ToggleIcon />
          </Toggle>
          <Toggle variant={variant} aria-label="Bold">
            Bold
          </Toggle>
        </div>
      ))}
    </div>
  )
}

function ToggleGroups() {
  const items = ["Left", "Centre", "Right"]
  return (
    <div className="flex flex-wrap items-start gap-12">
      <ToggleGroup type="single" defaultValue="Left" aria-label="Alignment (single)">
        {items.map((label) => (
          <ToggleGroupItem key={label} value={label} aria-label={label} className="group/toggle">
            <ToggleIcon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup type="multiple" defaultValue={["Left", "Right"]} aria-label="Formatting (multiple)">
        {items.map((label) => (
          <ToggleGroupItem key={label} value={label} aria-label={label} className="group/toggle">
            <ToggleIcon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup type="single" orientation="vertical" defaultValue="Left" aria-label="Alignment (vertical)">
        {items.map((label) => (
          <ToggleGroupItem key={label} value={label} aria-label={label} className="group/toggle">
            <ToggleIcon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <ToggleGroup type="multiple" variant="default" defaultValue={["B"]} aria-label="Text style">
        <ToggleGroupItem value="B">Bold</ToggleGroupItem>
        <ToggleGroupItem value="I">Italic</ToggleGroupItem>
        <ToggleGroupItem value="U">Underline</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

export function ActionsShowcase() {
  return (
    <PreviewFrame>
      <Section title="Button Group · Horizontal / Vertical / RTL × corners">
        <Groups />
      </Section>
      <Section title="Split Button · Default / Disabled / Loading / RTL × corners">
        <Splits />
      </Section>
      <Section title="Toggle · Default / Outline">
        <Toggles />
      </Section>
      <Section title="Toggle Group · Single / Multiple / Vertical">
        <ToggleGroups />
      </Section>
    </PreviewFrame>
  )
}
