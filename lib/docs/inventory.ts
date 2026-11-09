/**
 * Component inventory — every component guide in the Figma file mapped to
 * its code and documentation. Drives the docs sidebar and coverage matrix.
 *
 * Figma links point at each component's "Component guide" frame.
 */

export const FIGMA_FILE = "https://www.figma.com/design/qpIsumHqsH59PzDoG0CDlC/Design-system"

export function figmaUrl(node: string) {
  return `${FIGMA_FILE}?node-id=${node.replace(":", "-")}`
}

export type Group =
  | "Actions"
  | "Forms"
  | "Navigation"
  | "Overlays"
  | "Content and layout"
  | "Feedback"
  | "Data"
  | "Conversation"

/** documented: has a docs page · built: in the registry, no page yet ·
 *  partial: covered by another component or only some states · design-only: Figma only. */
export type Status = "documented" | "built" | "partial" | "design-only"

export type InventoryItem = {
  slug: string
  name: string
  group: Group
  /** Figma "Component guide" frame. */
  figma: string
  /** Registry item(s) that implement it. */
  code: string[]
  status: Status
  /** Supported properties in code (short). */
  props: string
  /** Variants, states and examples to demonstrate (from the Figma masters). */
  examples: string
  /** Missing designs, code or documentation. */
  missing?: string
  /** Extra doc sections beyond the group template. */
  sections?: string[]
}

/** Sections every component page has. */
export const COMMON_SECTIONS = ["Preview", "Installation", "Usage", "Examples", "RTL", "Accessibility", "API reference"]

/** Component-specific sections by group (from the documentation brief). */
export const GROUP_SECTIONS: Record<Group, string[]> = {
  Actions: ["Variants", "Sizes", "Icons", "Loading", "Disabled"],
  Forms: ["Label and helper text", "Validation", "Required / disabled / read-only", "Form integration"],
  Navigation: ["Active state", "Nesting", "Orientation", "Overflow", "Responsive"],
  Overlays: ["Composition", "Open and close", "Focus", "Dismissal", "Scrolling", "Positioning"],
  "Content and layout": ["Composition", "Alignment", "Spacing", "Responsive"],
  Feedback: ["Status", "Live regions", "Motion"],
  Data: ["Data structure", "Formatting", "Sorting", "Filtering", "Pagination", "Selection", "Empty and loading"],
  Conversation: ["Composition", "Streaming and loading", "Errors", "Live regions"],
}

export const GROUPS: Group[] = [
  "Actions",
  "Forms",
  "Navigation",
  "Overlays",
  "Content and layout",
  "Feedback",
  "Data",
  "Conversation",
]

const i = (
  group: Group,
  name: string,
  figma: string,
  code: string[],
  status: Status,
  props: string,
  examples: string,
  missing?: string,
  sections?: string[]
): InventoryItem => ({
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  name,
  group,
  figma,
  code,
  status,
  props,
  examples,
  missing,
  sections,
})

export const INVENTORY: InventoryItem[] = [
  // 02 · Actions
  i("Actions", "Button", "187:868", ["button"], "documented",
    "variant, size, corner, selected, loading, loadingText, asChild",
    "6 variants × Default/Hover/Pressed/Selected/Disabled; XS–XXL and icon sizes; Default/Soft/Pill corners; loading; link",
    undefined, ["Corners", "Selected", "As link"]),
  i("Actions", "Button Group", "187:913", ["button-group"], "built",
    "orientation, corner", "Horizontal/Vertical × Default/Soft/Pill × LTR/RTL", "Docs page"),
  i("Actions", "Split Button", "187:980", ["split-button"], "built",
    "corner, loading, disabled; Action + Trigger parts", "Default/Disabled/Loading × corners × LTR/RTL", "Docs page"),
  i("Actions", "Toggle", "187:1033", ["toggle"], "built",
    "variant, corner, pressed/defaultPressed", "Default/Outline × Selected × Default/Hover/Pressed/Focus/Disabled", "Docs page"),
  i("Actions", "Toggle Group", "187:1072", ["toggle-group"], "built",
    "type, orientation, variant, corner", "Single/Multiple × Horizontal/Vertical", "Docs page"),

  // 03 · Forms
  i("Forms", "Label", "187:19106", ["label"], "built", "htmlFor", "Field label Required/Optional", "Docs page"),
  i("Forms", "Input", "187:17973", ["input", "field"], "documented",
    "shape, aria-invalid, data-validation, readOnly, disabled", "Default/Hover/Focus/Pressed/Read only/Disabled × validation × 8px/Rounded",
    "Docs page; Comfortable 48px density"),
  i("Forms", "Textarea", "187:18173", ["textarea"], "built", "shape, validation", "Textarea control states", "Docs page"),
  i("Forms", "Field", "187:17007", ["field"], "built",
    "validation, orientation; Label, Control, Description, Message, Error, Counter", "Text field Validation None/Error/Warning/Success; Field message statuses", "Docs page"),
  i("Forms", "Field Set", "187:17060", ["field"], "built", "FieldSet, FieldLegend, FieldGroup orientation", "Vertical/Horizontal", "Docs page"),
  i("Forms", "Field Group", "187:17290", ["field"], "built", "orientation", "Vertical/Horizontal", "Docs page"),
  i("Forms", "Counter", "187:19162", ["field"], "built", "value, max, disabled", "Normal/Limit reached/Exceeded/Disabled", "Docs page"),
  i("Forms", "Validation Summary", "187:19189", ["validation-summary"], "built", "status; Title, Description, List", "Info/Success/Warning/Error", "Docs page"),
  i("Forms", "Input Group", "187:17143", ["input-group"], "built", "Text, Input, Button parts", "Text/Icon/Button/Combined add-ons", "Docs page"),
  i("Forms", "Password Field", "187:18071", ["input-group"], "partial", "Composed from Input Group", "Masked/Partial/Visible × states", "Dedicated password-reveal component and eye icon"),
  i("Forms", "Search Field", "187:18122", ["input-group"], "partial", "Composed from Input Group", "Search control states", "Clear button"),
  i("Forms", "Number Field", "187:18220", [], "design-only", "—", "Number control with steppers", "Code and docs"),
  i("Forms", "Phone Field", "187:18275", [], "design-only", "—", "Country code + number", "Code and docs"),
  i("Forms", "Payment Field", "187:18330", [], "design-only", "—", "Card number, expiry, CVC", "Code and docs"),
  i("Forms", "Date Field", "187:18381", [], "design-only", "—", "Date control states", "Code (needs Calendar) and docs"),
  i("Forms", "Date Range Field", "187:18432", [], "design-only", "—", "Date range control states", "Code (needs Calendar) and docs"),
  i("Forms", "Select", "187:17180", ["select"], "documented", "shape; Trigger, Content, Item(showCheck), Label", "Closed/Open, option states", "Docs page"),
  i("Forms", "Native Select", "187:17367", ["native-select"], "built", "shape", "Native select states", "Docs page"),
  i("Forms", "Option List", "187:16897", ["select"], "partial", "Inside Select content", "Option list states", "Standalone listbox"),
  i("Forms", "Combobox", "187:17233", [], "design-only", "—", "Closed/Open/Filtered/Empty", "Code (needs cmdk) and docs"),
  i("Forms", "Multiselect", "187:18589", [], "design-only", "—", "Chips inside control, open list", "Code (needs cmdk) and docs"),
  i("Forms", "Input OTP", "187:18640", ["input-otp"], "built", "maxLength, value, disabled; Group, Slot, Separator", "Empty/Partial/Filled × states", "Docs page; Loading state"),
  i("Forms", "Checkbox", "187:18800", ["checkbox"], "built", "checked (incl. indeterminate), disabled", "Unchecked/Checked/Indeterminate × states", "Docs page"),
  i("Forms", "Checkbox Group", "187:18907", ["checkbox", "field"], "partial", "Composed with FieldSet", "Group layouts × validation", "Dedicated group component"),
  i("Forms", "Radio Group", "187:18962", ["radio-group"], "built", "value, orientation, disabled", "Group layouts × validation", "Docs page"),
  i("Forms", "Switch", "187:18870", ["switch"], "built", "checked, disabled", "Off/On × states", "Docs page"),
  i("Forms", "Slider", "187:17420", ["slider"], "built", "value, min, max, step, thumbLabels, disabled", "Single/Range × Default/Focus/Disabled", "Docs page"),
  i("Forms", "Chip", "187:19046", ["chip"], "built", "onRemove, removeLabel, disabled", "Default/Hover/Focus/Pressed/Disabled", "Docs page"),
  i("Forms", "Calendar", "187:16616", [], "design-only", "—", "Single/Range, day states, locale examples", "Code (needs react-day-picker) and docs"),
  i("Forms", "Date Picker", "187:16954", [], "design-only", "—", "Single/Range × Closed/Open", "Code and docs"),
  i("Forms", "File Upload", "187:19271", [], "design-only", "—", "Dropzone/Button × Empty/Hover/Drag over/Uploading/Uploaded/Error/Disabled", "Code and docs"),
  i("Forms", "File Item", "187:19224", [], "design-only", "—", "Queued/Uploading/Processing/Uploaded/Error", "Code and docs"),

  // 04 · Navigation
  i("Navigation", "Navigation Item", "187:20120", ["nav-item"], "built", "href, isActive, disabled, asChild", "Default/Current/Hover/Focus/Disabled × LTR/RTL", "Docs page"),
  i("Navigation", "Tabs", "187:20346", ["tabs"], "built", "orientation; List variant line/pill", "Line/Pill × Selected × states; Horizontal/Vertical", "Docs page"),
  i("Navigation", "Breadcrumb", "187:20153", ["breadcrumb"], "built", "List, Item, Link, Page, Separator, Ellipsis", "Default/Collapsed × LTR/RTL", "Docs page"),
  i("Navigation", "Pagination", "187:20196", ["pagination"], "built", "Link isActive/disabled, Previous, Next, Ellipsis", "First/Middle/Last × LTR/RTL", "Docs page"),
  i("Navigation", "Menubar", "187:20443", ["menubar"], "built", "Menu, Trigger, Content, Item variants, Sub", "Closed/Open", "Docs page"),
  i("Navigation", "Navigation Menu", "187:20512", ["navigation-menu"], "built", "Trigger, Content, Link variant item/link", "Closed/Open", "Docs page"),
  i("Navigation", "Sidebar", "187:20571", ["sidebar"], "built", "Provider open/defaultOpen, MenuButton isActive/tooltip, Trigger", "Expanded/Collapsed × LTR/RTL; mobile Sheet", "Docs page"),

  // 05 · Overlays and menus
  i("Overlays", "Dialog", "187:21428", ["dialog"], "documented", "Content corner; Header, Title, Description, Footer, Close", "Closed/Open/Loading/Error × corners × LTR/RTL", "Docs page; Loading/Error examples"),
  i("Overlays", "Alert Dialog", "187:21467", ["alert-dialog"], "built", "Action, Cancel", "Closed/Open/Loading/Error", "Docs page"),
  i("Overlays", "Sheet", "187:21506", ["sheet"], "built", "side start/end/top/bottom", "Trailing/Leading × Closed/Open", "Docs page"),
  i("Overlays", "Drawer", "187:21545", [], "design-only", "—", "Bottom/Top × Closed/Open", "Code (needs vaul) and docs"),
  i("Overlays", "Popover", "187:21627", ["popover"], "built", "Content corner, side, align", "Default/Soft/Pill", "Docs page"),
  i("Overlays", "Tooltip", "187:21121", ["tooltip"], "built", "side, sideOffset", "Top/Bottom/Start/End", "Docs page"),
  i("Overlays", "Hover Card", "187:21185", ["hover-card"], "built", "openDelay, side", "Closed/Open", "Docs page"),
  i("Overlays", "Dropdown Menu", "187:21078", ["dropdown-menu"], "built", "Item variant, CheckboxItem, RadioItem, Sub, Shortcut", "Menu / Item kinds × Default/Highlighted/Disabled", "Docs page"),
  i("Overlays", "Context Menu", "187:21584", ["context-menu"], "built", "Same parts as Dropdown Menu", "Closed/Open", "Docs page"),
  i("Overlays", "Command", "187:21224", [], "design-only", "—", "Default/Filtered/Empty/Loading/Error", "Code (needs cmdk) and docs"),

  // 06 · Content and layout
  i("Content and layout", "Card", "187:22361", ["card"], "documented", "corner; Header, Title, Description, Content, Footer", "Default/Soft/Pill", "Docs page"),
  i("Content and layout", "Item", "187:22312", ["item"], "built", "variant; Media, Content, Title, Description, Actions", "Default/Outline/Muted", "Docs page"),
  i("Content and layout", "Avatar", "187:22285", ["avatar"], "built", "size; Image, Fallback, Badge", "32/48/64 × Initials/Icon/Image/Loading/Error", "Docs page"),
  i("Content and layout", "Accordion", "187:22469", ["accordion"], "built", "type single/multiple, collapsible", "Single/Multiple; item states", "Docs page"),
  i("Content and layout", "Collapsible", "187:22530", ["collapsible"], "built", "open, onOpenChange", "Closed/Open", "Docs page"),
  i("Content and layout", "Separator", "187:22260", ["separator"], "built", "orientation, decorative", "Horizontal/Vertical", "Docs page"),
  i("Content and layout", "Aspect Ratio", "187:22606", ["aspect-ratio"], "built", "ratio", "16:9, 4:3, 1:1, 3:4", "Docs page"),
  i("Content and layout", "Kbd", "187:22641", ["kbd"], "built", "Kbd, KbdGroup", "Key, shortcut group", "Docs page"),
  i("Content and layout", "Media Placeholder", "187:22573", [], "design-only", "—", "Placeholder media", "Code and docs"),
  i("Content and layout", "Scroll Area", "187:22670", [], "design-only", "—", "Vertical/Horizontal/Both content", "Code (Radix Scroll Area) and docs"),
  i("Content and layout", "Resizable", "187:22894", [], "design-only", "—", "Handle states, panel groups", "Code (needs react-resizable-panels) and docs"),
  i("Content and layout", "Carousel", "187:22998", [], "design-only", "—", "Item states, controls", "Code (needs embla-carousel) and docs"),

  // 07 · Feedback
  i("Feedback", "Alert", "187:23822", ["alert"], "built", "status, appearance; Title, Description", "Info/Success/Warning/Error × Default/Outline", "Docs page"),
  i("Feedback", "Badge", "187:23764", ["badge"], "built", "variant, asChild", "Default/Secondary/Outline/Destructive", "Docs page"),
  i("Feedback", "Progress", "187:23733", ["progress"], "built", "value (null = indeterminate)", "0/25/50/75/100/Indeterminate", "Docs page"),
  i("Feedback", "Skeleton", "187:23793", ["skeleton"], "built", "className", "Text/Avatar/Card", "Docs page"),
  i("Feedback", "Spinner", "187:23961", ["spinner"], "built", "size", "16/24/32", "Docs page"),
  i("Feedback", "Empty", "187:23859", ["empty"], "built", "Media, Title, Description, Content", "Default/Filtered/Error", "Docs page"),
  i("Feedback", "Toast", "187:23908", [], "design-only", "—", "Default/Success/Info/Warning/Error/Loading", "Code (needs sonner) and docs"),

  // 08 · Data visualization
  i("Data", "Status Badge", "187:24029", [], "design-only", "—", "Neutral/Success/Warning/Error/Info", "Code and docs"),
  i("Data", "Table", "187:24181", [], "design-only", "—", "Head sort states, Row Default/Hover/Selected/Loading, Cell content types", "Code and docs"),
  i("Data", "Data Table", "187:24372", [], "design-only", "—", "Default/Sorted/Filtered/Selected/Loading/Empty/Error", "Code (needs @tanstack/react-table) and docs"),
  i("Data", "Chart", "187:24816", [], "design-only", "—", "Bar/Line/Area × Default/Loading/Empty/Error; legend, tooltip, accessible data", "Code (engine decision pending in Figma brief) and docs"),

  // 09 · Conversation
  i("Conversation", "Message", "187:25653", [], "design-only", "—", "Start/End × LTR/RTL × Default/Streaming/Error", "Code and docs"),
  i("Conversation", "Bubble", "187:25534", [], "design-only", "—", "7 variants × corners", "Code and docs"),
  i("Conversation", "Message Scroller", "187:25716", [], "design-only", "—", "Reading history/Live/Loading history/Empty/Error", "Code and docs"),
  i("Conversation", "Attachment", "187:25485", [], "design-only", "—", "Horizontal/Vertical × Idle/Uploading/Processing/Done/Error/Disabled", "Code and docs"),
  i("Conversation", "Code Block", "187:25563", [], "design-only", "—", "Code/Terminal/Diff × Default/Copied/Loading/Error", "Code and docs"),
  i("Conversation", "Marker", "187:25618", [], "design-only", "—", "Inline/Bordered/Separator × Default/Loading/Error", "Code and docs"),
  i("Conversation", "Questionnaire", "187:25960", [], "design-only", "—", "Question kinds and stages through Complete", "Code and docs"),
  i("Conversation", "Trace", "187:26114", [], "design-only", "—", "Line Pending/Running/Complete/Error × Collapsed/Expanded", "Code and docs"),
]

export function sectionsFor(item: InventoryItem) {
  return [...COMMON_SECTIONS.slice(0, 4), ...GROUP_SECTIONS[item.group], ...(item.sections ?? []), ...COMMON_SECTIONS.slice(4)]
}

export function bySlug(slug: string) {
  return INVENTORY.find((item) => item.slug === slug)
}
