import type { Metadata } from "next"
import Link from "next/link"

import {
  A11yList,
  Callout,
  CodeBlock,
  ComponentPreview,
  DocHeader,
  H2,
  H3,
  InlineCode,
  Installation,
  P,
  PropsTable,
} from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Sidebar" }

export default function SidebarPage() {
  return (
    <>
      <DocHeader
        slug="sidebar"
        title="Sidebar"
        description="The app’s main navigation panel. Collapses off-canvas or to icons on desktop, opens as a sheet on phones, and remembers its state. Same API as the shadcn/ui sidebar."
      />
      <ComponentPreview name="sidebar-demo" align="start" />

      <H2>Installation</H2>
      <Installation item="sidebar" />

      <H2>Usage</H2>
      <P>
        In an app the sidebar lives in the root layout: <InlineCode>SidebarProvider</InlineCode> wraps the whole page,{" "}
        <InlineCode>Sidebar</InlineCode> is fixed to the viewport edge and <InlineCode>SidebarInset</InlineCode> holds the
        page content. The starter’s <InlineCode>components/app-shell.tsx</InlineCode> does exactly this:
      </P>
      <CodeBlock
        code={`"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader,
  SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarRail, SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader>…</SidebarHeader>
        <SidebarContent>
          <nav aria-label="Main">
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/projects"} tooltip="Projects">
                    <Link href="/projects" aria-current={pathname === "/projects" ? "page" : undefined}>
                      <FileIcon />
                      <span>Projects</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </nav>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b border-border px-4">
          <SidebarTrigger />
        </header>
        <div className="flex-1 p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}`}
      />
      <CodeBlock
        code={`// app/layout.tsx
import { AppShell } from "@/components/app-shell"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}`}
      />
      <Callout title="Previews on this page are contained">
        The real sidebar is <InlineCode>position: fixed</InlineCode> to the viewport. So it fits in a preview, each
        example gives the provider <InlineCode>relative isolate h-[560px] min-h-0 overflow-hidden</InlineCode> and the
        sidebar <InlineCode>className=&quot;absolute h-full&quot;</InlineCode>. Leave those out in your app.
      </Callout>

      <H2>Composition</H2>
      <P>
        <InlineCode>SidebarProvider</InlineCode> (state, ⌘B shortcut, cookie) · <InlineCode>Sidebar</InlineCode> (the
        panel) with <InlineCode>SidebarHeader</InlineCode>, a scrolling <InlineCode>SidebarContent</InlineCode> and{" "}
        <InlineCode>SidebarFooter</InlineCode> · inside content, <InlineCode>SidebarGroup</InlineCode> with{" "}
        <InlineCode>SidebarGroupLabel</InlineCode>, optional <InlineCode>SidebarGroupAction</InlineCode> and{" "}
        <InlineCode>SidebarMenu</InlineCode> · each <InlineCode>SidebarMenuItem</InlineCode> holds a{" "}
        <InlineCode>SidebarMenuButton</InlineCode> plus optional <InlineCode>SidebarMenuAction</InlineCode>,{" "}
        <InlineCode>SidebarMenuBadge</InlineCode> and <InlineCode>SidebarMenuSub</InlineCode> · <InlineCode>SidebarRail</InlineCode>{" "}
        and <InlineCode>SidebarTrigger</InlineCode> toggle it · <InlineCode>SidebarInset</InlineCode> is the page. Every
        part and prop from shadcn/ui is here, styled to the Figma 48px item rows and 16px spacing.
      </P>

      <H2>Examples</H2>

      <H3>Floating</H3>
      <P>
        <InlineCode>variant=&quot;floating&quot;</InlineCode> draws the panel as a bordered card 8px in from the edge.
        This is what the starter app uses.
      </P>
      <ComponentPreview name="sidebar-floating" align="start" />

      <H3>Inset</H3>
      <P>
        <InlineCode>variant=&quot;inset&quot;</InlineCode> keeps the panel flat and frames{" "}
        <InlineCode>SidebarInset</InlineCode> as a card on the sidebar surface.
      </P>
      <ComponentPreview name="sidebar-inset" align="start" />

      <H3>Actions and badges</H3>
      <P>
        <InlineCode>SidebarGroupAction</InlineCode> adds a button to a group label. <InlineCode>SidebarMenuAction</InlineCode>{" "}
        sits at the end of an item (here opening a menu; <InlineCode>showOnHover</InlineCode> reveals it on hover or
        focus) and <InlineCode>SidebarMenuBadge</InlineCode> shows a count. Both hide when collapsed to icons.
      </P>
      <ComponentPreview name="sidebar-actions" align="start" />

      <H3>Loading</H3>
      <P>
        <InlineCode>SidebarMenuSkeleton</InlineCode> renders a 48px placeholder row; <InlineCode>showIcon</InlineCode>{" "}
        adds the icon square. Announce the loading state with a status message.
      </P>
      <ComponentPreview name="sidebar-skeleton" align="start" />

      <H3>Right side and controlled state</H3>
      <P>
        <InlineCode>side=&quot;right&quot;</InlineCode> for a details panel. Pass <InlineCode>open</InlineCode> and{" "}
        <InlineCode>onOpenChange</InlineCode> to the provider to control it.
      </P>
      <ComponentPreview name="sidebar-right" align="start" />

      <H2>Active state</H2>
      <P>
        Menu buttons that navigate must render a link: use <InlineCode>asChild</InlineCode>, set{" "}
        <InlineCode>isActive</InlineCode> for the style and pass <InlineCode>aria-current=&quot;page&quot;</InlineCode> on
        the link so screen readers announce the current page. Either attribute applies the brand-subtle highlight.
      </P>
      <CodeBlock
        code={`<SidebarMenuButton asChild isActive={active}>
  <Link href="/projects" aria-current={active ? "page" : undefined}>
    <FileIcon />
    <span>Projects</span>
  </Link>
</SidebarMenuButton>`}
      />

      <H2>Nesting</H2>
      <P>
        <InlineCode>SidebarMenuSub</InlineCode> with <InlineCode>SidebarMenuSubItem</InlineCode> and{" "}
        <InlineCode>SidebarMenuSubButton</InlineCode> adds one indented level. Wrap the item in a{" "}
        <InlineCode>Collapsible</InlineCode> to expand and collapse it. Keep to one sub
        level; sub-menus hide when the sidebar is collapsed to icons.
      </P>
      <ComponentPreview name="sidebar-submenu" align="start" />

      <H2>Orientation</H2>
      <P>
        The sidebar is always vertical. <InlineCode>side</InlineCode> chooses the left or right edge.
      </P>

      <H2>Overflow</H2>
      <P>
        <InlineCode>SidebarContent</InlineCode> scrolls on its own while header and footer stay put. Long labels truncate
        with an ellipsis; when collapsed to icons the label is clipped but stays the accessible name, and{" "}
        <InlineCode>tooltip</InlineCode> shows it on hover and keyboard focus.
      </P>

      <H2>Responsive</H2>
      <P>
        From 768px the sidebar sits beside the page. <InlineCode>collapsible</InlineCode> sets what collapsing does:{" "}
        <InlineCode>offcanvas</InlineCode> slides it out, <InlineCode>icon</InlineCode> shrinks it to an 80px icon rail
        (Figma Collapsed), <InlineCode>none</InlineCode> keeps it fixed. Below 768px it opens as a modal{" "}
        <Link className="underline" href="/docs/components/sheet">Sheet</Link> from the trigger; close it after
        navigation with <InlineCode>setOpenMobile(false)</InlineCode> from <InlineCode>useSidebar()</InlineCode>. The
        open state is saved in the <InlineCode>sidebar_state</InlineCode> cookie; read it on the server to pass{" "}
        <InlineCode>defaultOpen</InlineCode> and avoid a flash.
      </P>

      <H2>RTL</H2>
      <P>
        Menu content uses logical spacing, so icons, badges, actions and sub-menu indents mirror in right-to-left
        layouts. <InlineCode>side</InlineCode> is physical, as in shadcn/ui: in an RTL app pass{" "}
        <InlineCode>side=&quot;right&quot;</InlineCode> to put the sidebar at the reading start.
      </P>
      <Callout tone="missing" title="Automatic RTL placement">
        Figma’s RTL sidebar sits on the right automatically. In code, <InlineCode>side</InlineCode> does not follow{" "}
        <InlineCode>dir</InlineCode>; set it yourself (the RTL switch on these previews flips the content, not the side).
      </Callout>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Wrap menus in <InlineCode>&lt;nav aria-label=&quot;…&quot;&gt;</InlineCode>; the sidebar itself is not a landmark.</>,
          <>Navigating items are links with <InlineCode>aria-current=&quot;page&quot;</InlineCode> on the current one; buttons are for actions.</>,
          <><InlineCode>SidebarTrigger</InlineCode> is labelled “Toggle Sidebar” and sets <InlineCode>aria-expanded</InlineCode>. ⌘B / Ctrl+B toggles from anywhere.</>,
          <><InlineCode>SidebarRail</InlineCode> is a pointer-only shortcut (<InlineCode>tabIndex=-1</InlineCode>); always keep a trigger for keyboard users.</>,
          "Menu buttons are 48px tall (48×48px when collapsed); icon-collapsed labels remain the accessible name, and the tooltip is aria-hidden.",
          "On phones the sheet traps focus, closes with Escape and returns focus to the trigger.",
          <>Icon-only menu and group actions need an <InlineCode>aria-label</InlineCode>.</>,
        ]}
      />

      <H2>Customization</H2>
      <P>
        Colours come from the <InlineCode>--sidebar</InlineCode>, <InlineCode>--sidebar-foreground</InlineCode> and{" "}
        <InlineCode>--sidebar-border</InlineCode> tokens; the active item uses <InlineCode>--primary-subtle</InlineCode>{" "}
        and <InlineCode>--primary-strong</InlineCode>. Change widths with the <InlineCode>--sidebar-width</InlineCode>{" "}
        (18rem) and <InlineCode>--sidebar-width-icon</InlineCode> (5rem) variables in the provider’s{" "}
        <InlineCode>style</InlineCode>.
      </P>
      <CodeBlock
        code={`<SidebarProvider style={{ "--sidebar-width": "20rem" } as React.CSSProperties}>`}
      />

      <H2>API reference</H2>
      <H3>SidebarProvider</H3>
      <PropsTable
        caption="SidebarProvider props"
        rows={[
          { name: "defaultOpen", type: "boolean", default: "true", description: "Initial desktop state (uncontrolled)." },
          { name: "open / onOpenChange", type: "boolean / (open: boolean) => void", description: "Controlled desktop state." },
          { name: "style", type: "React.CSSProperties", description: "Override --sidebar-width and --sidebar-width-icon." },
        ]}
      />
      <H3>Sidebar</H3>
      <PropsTable
        caption="Sidebar props"
        rows={[
          { name: "side", type: '"left" | "right"', default: '"left"', description: "Physical edge of the viewport." },
          { name: "variant", type: '"sidebar" | "floating" | "inset"', default: '"sidebar"', description: "Flush with a border, a floating card, or flat with an inset page." },
          { name: "collapsible", type: '"offcanvas" | "icon" | "none"', default: '"offcanvas"', description: "Slide out, shrink to icons, or never collapse." },
        ]}
      />
      <H3>SidebarMenuButton</H3>
      <PropsTable
        caption="SidebarMenuButton props"
        rows={[
          { name: "asChild", type: "boolean", default: "false", description: "Render the child (a link) with menu button styles." },
          { name: "isActive", type: "boolean", default: "false", description: "Active style via data-active. Pair with aria-current on links." },
          { name: "tooltip", type: "string | TooltipContent props", description: "Label shown beside the button when collapsed to icons." },
          { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Outline adds a 1px ring on the background colour." },
          { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "40px, 48px or 56px tall." },
        ]}
      />
      <H3>Other parts</H3>
      <PropsTable
        caption="Other sidebar parts"
        rows={[
          { name: "SidebarMenuAction showOnHover", type: "boolean", default: "false", description: "Hide until the item is hovered or focused (desktop)." },
          { name: "SidebarMenuAction / SidebarGroupAction / SidebarGroupLabel asChild", type: "boolean", default: "false", description: "Render the child element instead." },
          { name: "SidebarMenuSkeleton showIcon", type: "boolean", default: "false", description: "Add an icon placeholder to the row." },
          { name: "SidebarMenuSubButton size", type: '"sm" | "md"', default: '"md"', description: "32px or 40px tall sub-item." },
          { name: "SidebarMenuSubButton isActive / asChild", type: "boolean", default: "false", description: "Active style; render the child link." },
          { name: "SidebarTrigger …props", type: "Button props", description: "A 48px ghost icon button that calls toggleSidebar()." },
        ]}
      />
      <H3>useSidebar</H3>
      <PropsTable
        caption="useSidebar return value"
        rows={[
          { name: "state", type: '"expanded" | "collapsed"', description: "Desktop state." },
          { name: "open / setOpen", type: "boolean / (open: boolean) => void", description: "Desktop open state." },
          { name: "openMobile / setOpenMobile", type: "boolean / (open: boolean) => void", description: "Phone sheet state." },
          { name: "isMobile", type: "boolean", description: "True below 768px." },
          { name: "toggleSidebar", type: "() => void", description: "Toggles whichever applies." },
        ]}
      />
      <P>
        Also exported: <InlineCode>SidebarInput</InlineCode>, <InlineCode>SidebarSeparator</InlineCode>,{" "}
        <InlineCode>SidebarGroupContent</InlineCode>.
      </P>
    </>
  )
}
