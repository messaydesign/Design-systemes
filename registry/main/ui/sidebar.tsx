"use client"

import * as React from "react"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/main/ui/button"
import { ArrowRightIcon } from "@/registry/main/ui/icons"
import { navItemClasses } from "@/registry/main/ui/nav-item"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/registry/main/ui/sheet"

/*
 * Sidebar — Figma "Sidebar" (150:1946), Expanded/Collapsed × LTR/RTL.
 * Panel: surface fill, 1px subtle border, 8px radius, 16px padding,
 * 16px between every child. Expanded 288px; Collapsed 80px (48px icon
 * targets, labels visually hidden, tooltips on hover/focus).
 * Items are Navigation / Item rows with aria-current="page".
 * Below 768px the same content opens in a modal Sheet from the inline start.
 * Collapse is a layout preference: ⌘B / Ctrl+B toggles it.
 */

const MOBILE_QUERY = "(max-width: 767px)"

type SidebarContextValue = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.")
  return context
}

function useIsMobile() {
  return React.useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(MOBILE_QUERY)
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    },
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false
  )
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const open = openProp ?? internalOpen

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (openProp === undefined) setInternalOpen(value)
      onOpenChange?.(value)
    },
    [openProp, onOpenChange]
  )

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) setOpenMobile((value) => !value)
    else setOpen(!open)
  }, [isMobile, open, setOpen])

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "b" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [toggleSidebar])

  const value = React.useMemo<SidebarContextValue>(
    () => ({
      state: open ? "expanded" : "collapsed",
      open,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile,
      toggleSidebar,
    }),
    [open, setOpen, openMobile, isMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={value}>
      <div data-slot="sidebar-wrapper" className={cn("flex w-full gap-6", className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

const panelClasses =
  "flex flex-col gap-4 rounded-lg border border-border bg-muted p-[15px] text-foreground"

function Sidebar({
  className,
  children,
  "aria-label": ariaLabel = "Main",
  ...props
}: React.ComponentProps<"nav">) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent side="start" className="w-72 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
          <nav
            data-slot="sidebar"
            data-state="expanded"
            data-mobile="true"
            aria-label={ariaLabel}
            className={cn("group/sidebar flex h-full flex-col gap-4 p-4", className)}
            {...props}
          >
            {children}
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav
      data-slot="sidebar"
      data-state={state}
      aria-label={ariaLabel}
      className={cn(
        "group/sidebar shrink-0 transition-[width] duration-200 motion-reduce:transition-none",
        panelClasses,
        "w-72 data-[state=collapsed]:w-20",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  )
}

/**
 * Collapse/expand control. Expanded: "Collapse sidebar" Ghost button.
 * Collapsed: 48px icon button named "Expand sidebar". On mobile it opens the
 * Sheet, so it can also live outside the Sidebar (e.g. in a top bar).
 */
function SidebarTrigger({ className, onClick, children, ...props }: React.ComponentProps<typeof Button>) {
  const { state, isMobile, openMobile, toggleSidebar } = useSidebar()
  const collapsed = !isMobile && state === "collapsed"
  return (
    <Button
      data-slot="sidebar-trigger"
      variant="ghost"
      size={collapsed ? "icon" : "default"}
      aria-expanded={isMobile ? openMobile : state === "expanded"}
      aria-label={collapsed ? "Expand sidebar" : undefined}
      // Inside the mobile Sheet the Sheet's own close button does this job.
      className={cn("self-start group-data-[mobile=true]/sidebar:hidden", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      {collapsed ? <ArrowRightIcon /> : (children ?? (isMobile ? "Menu" : "Collapse sidebar"))}
    </Button>
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return <main data-slot="sidebar-inset" className={cn("min-w-0 flex-1", className)} {...props} />
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-header" className={cn("flex flex-col gap-4", className)} {...props} />
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn(
        "-m-[3px] flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-[3px]",
        // Collapsed tooltips must escape the column.
        "group-data-[state=collapsed]/sidebar:overflow-visible",
        className
      )}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-footer" className={cn("mt-auto flex flex-col gap-4", className)} {...props} />
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-group" className={cn("flex flex-col gap-4", className)} {...props} />
}

function SidebarGroupLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-label"
      className={cn(
        "font-sans text-sm leading-6 md:leading-5 font-medium text-foreground",
        "group-data-[state=collapsed]/sidebar:sr-only",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul data-slot="sidebar-menu" className={cn("flex flex-col gap-4", className)} {...props} />
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li data-slot="sidebar-menu-item" className={cn("relative", className)} {...props} />
}

type SidebarMenuButtonProps = React.ComponentProps<"a"> & {
  /** Render the child element (e.g. Next.js Link) with item styles. */
  asChild?: boolean
  /** Current page: aria-current="page". */
  isActive?: boolean
  /** Shown beside the icon while collapsed (hover and keyboard focus). */
  tooltip?: string
}

/**
 * A Navigation / Item link. Put the icon first and wrap the label in a
 * <span>; the label is visually hidden when the sidebar is collapsed.
 */
function SidebarMenuButton({
  asChild,
  isActive,
  tooltip,
  className,
  onClick,
  children,
  ...props
}: SidebarMenuButtonProps) {
  const { state, isMobile, setOpenMobile } = useSidebar()
  const showTooltip = Boolean(tooltip) && state === "collapsed" && !isMobile
  const Comp = asChild ? Slot.Root : "a"

  return (
    <>
      <Comp
        data-slot="sidebar-menu-button"
        aria-current={isActive ? "page" : undefined}
        className={cn(
          navItemClasses,
          "peer/menu-button",
          "group-data-[state=collapsed]/sidebar:size-12 group-data-[state=collapsed]/sidebar:justify-center group-data-[state=collapsed]/sidebar:px-0",
          "group-data-[state=collapsed]/sidebar:[&>span]:sr-only",
          className
        )}
        onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
          onClick?.(event)
          // Close the mobile Sheet after navigating.
          if (isMobile) setOpenMobile(false)
        }}
        {...props}
      >
        {children}
      </Comp>
      {showTooltip && (
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none invisible absolute start-[calc(100%+8px)] top-1/2 z-50 -translate-y-1/2 opacity-0",
            "rounded-lg bg-[var(--tooltip-background)] p-2 font-sans text-xs leading-4 whitespace-nowrap text-[var(--tooltip-text)]",
            "transition-opacity duration-150 peer-hover/menu-button:visible peer-hover/menu-button:opacity-100",
            "peer-focus-visible/menu-button:visible peer-focus-visible/menu-button:opacity-100"
          )}
        >
          {tooltip}
        </span>
      )}
    </>
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
}
