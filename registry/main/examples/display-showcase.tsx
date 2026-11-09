"use client"

import * as React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/main/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/registry/main/ui/alert"
import { AspectRatio } from "@/registry/main/ui/aspect-ratio"
import { Avatar, AvatarBadge, AvatarFallback } from "@/registry/main/ui/avatar"
import { Badge } from "@/registry/main/ui/badge"
import { Button } from "@/registry/main/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/main/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/main/ui/collapsible"
import { Empty, EmptyContent, EmptyDescription, EmptyMedia, EmptyTitle } from "@/registry/main/ui/empty"
import { ArrowRightIcon, ChevronDownIcon, FileIcon, UserIcon } from "@/registry/main/ui/icons"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/registry/main/ui/item"
import { Kbd, KbdGroup } from "@/registry/main/ui/kbd"
import { Progress } from "@/registry/main/ui/progress"
import { Separator } from "@/registry/main/ui/separator"
import { Skeleton } from "@/registry/main/ui/skeleton"
import { Spinner } from "@/registry/main/ui/spinner"
import { PreviewFrame, Section } from "@/registry/main/examples/preview-frame"

const grid = "grid gap-8 md:grid-cols-2"

function ProjectItem({ variant }: { variant?: "default" | "outline" | "muted" }) {
  return (
    <Item variant={variant}>
      <ItemMedia>
        <Avatar>
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Project overview</ItemTitle>
        <ItemDescription>A concise description of this item.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon" aria-label="Open project">
          <ArrowRightIcon />
        </Button>
      </ItemActions>
    </Item>
  )
}

function Content() {
  const [open, setOpen] = React.useState(true)
  return (
    <div className="flex flex-col gap-12">
      <div className={grid}>
        {(["default", "soft"] as const).map((corner) => (
          <Card key={corner} corner={corner}>
            <CardHeader>
              <CardTitle>Project settings</CardTitle>
              <CardDescription>Manage the details your team sees.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectItem />
            </CardContent>
            <CardFooter>
              <Button corner={corner}>Save changes</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-[var(--text-secondary)]">Item · Default / Outline / Muted</h3>
        <ProjectItem />
        <ProjectItem variant="outline" />
        <ProjectItem variant="muted" />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <Avatar size="sm"><AvatarFallback>MM</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>MM</AvatarFallback></Avatar>
        <Avatar size="lg"><AvatarFallback>MM</AvatarFallback></Avatar>
        <Avatar><AvatarFallback><UserIcon /></AvatarFallback></Avatar>
        <Avatar size="lg"><AvatarFallback><UserIcon /></AvatarFallback></Avatar>
        <Avatar><AvatarFallback><Spinner size="default" /></AvatarFallback></Avatar>
        <Avatar>
          <AvatarFallback>MM</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Separator orientation="vertical" className="h-12" />
        <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
        <Kbd>Esc</Kbd>
      </div>

      <div className={grid}>
        <Accordion type="single" collapsible defaultValue="a">
          <AccordionItem value="a">
            <AccordionTrigger>How does this work?</AccordionTrigger>
            <AccordionContent>
              Use this section to explain the details. Content wraps and the section grows with the answer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
            <AccordionContent>Yes — changes apply from the next billing period.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="c">
            <AccordionTrigger>Is my data exported?</AccordionTrigger>
            <AccordionContent>Exports are available as CSV from Settings.</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Collapsible open={open} onOpenChange={setOpen} className="flex flex-col items-start gap-2">
          <CollapsibleTrigger asChild>
            <Button variant="outline">
              Advanced settings
              <ChevronDownIcon className={open ? "rotate-180" : ""} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="w-full">
            <ProjectItem />
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {[
          ["16 / 9", 16 / 9],
          ["4 / 3", 4 / 3],
          ["1 / 1", 1],
          ["3 / 4", 3 / 4],
        ].map(([label, ratio]) => (
          <AspectRatio key={label as string} ratio={ratio as number}>
            <div className="flex size-full items-center justify-center rounded-[var(--radius)] bg-[var(--muted-background)] text-sm text-[var(--text-secondary)]">
              {label}
            </div>
          </AspectRatio>
        ))}
      </div>
    </div>
  )
}

function Feedback() {
  const statuses = [
    ["info", "Status update"],
    ["success", "Changes saved"],
    ["warning", "Storage almost full"],
    ["error", "Upload failed"],
  ] as const
  return (
    <div className="flex flex-col gap-12">
      <div className={grid}>
        {statuses.map(([status, title]) => (
          <React.Fragment key={status}>
            <Alert status={status}>
              <AlertTitle>{title}</AlertTitle>
              <AlertDescription>Explain what happened and what to do next.</AlertDescription>
            </Alert>
            <Alert status={status} appearance="outline">
              <AlertTitle>{title}</AlertTitle>
              <AlertDescription>Outline appearance.</AlertDescription>
            </Alert>
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Badge>Label</Badge>
        <Badge variant="secondary">Label</Badge>
        <Badge variant="outline">Label</Badge>
        <Badge variant="destructive">Label</Badge>
        <Badge variant="secondary">
          <UserIcon />
          With icon
        </Badge>
        <Separator orientation="vertical" className="h-6" />
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {[0, 25, 50, 75, 100].map((v) => (
          <div key={v} className="flex flex-col gap-2">
            <Progress value={v} aria-label={`${v}% complete`} />
            <span className="text-sm text-[var(--text-secondary)]">{v}%</span>
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <Progress value={null} aria-label="Loading" />
          <span className="text-sm text-[var(--text-secondary)]">Loading…</span>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-12" aria-busy="true">
        <div className="flex w-72 flex-col gap-2">
          <Skeleton className="h-4 w-72" />
          <Skeleton className="h-4 w-56" />
        </div>
        <Skeleton className="size-12 rounded-full" />
        <div className="flex w-72 flex-col gap-2">
          <Skeleton className="h-12 w-72" />
          <Skeleton className="h-12 w-72" />
          <Skeleton className="h-12 w-48" />
        </div>
      </div>

      <div className={grid}>
        <Empty>
          <EmptyMedia>
            <FileIcon />
          </EmptyMedia>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>Create a project to get started.</EmptyDescription>
          <EmptyContent>
            <Button>Create project</Button>
          </EmptyContent>
        </Empty>
        <Empty>
          <EmptyMedia>
            <FileIcon />
          </EmptyMedia>
          <EmptyTitle>No results for “roadmap”</EmptyTitle>
          <EmptyDescription>Try a different search or clear your filters.</EmptyDescription>
          <EmptyContent>
            <Button variant="outline">Clear filters</Button>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  )
}

export function DisplayShowcase() {
  return (
    <PreviewFrame>
      <Section title="Content and layout">
        <Content />
      </Section>
      <Section title="Feedback">
        <Feedback />
      </Section>
    </PreviewFrame>
  )
}
