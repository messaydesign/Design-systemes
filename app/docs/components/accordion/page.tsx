import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Accordion" }

export default function AccordionPage() {
  return (
    <>
      <DocHeader
        slug="accordion"
        title="Accordion"
        description="A stack of headings that each show or hide a section of content. Built on Radix Accordion, with single or multiple sections open."
      />
      <ComponentPreview name="accordion-demo" />

      <H2>Installation</H2>
      <Installation item="accordion" />

      <H2>Usage</H2>
      <CodeBlock
        code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It follows the WAI-ARIA accordion pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`}
      />
      <P>
        Use an accordion to shorten long pages such as FAQs or settings, where people only need one or two sections at a
        time. Don’t hide content everyone needs, such as errors or required fields. The API matches shadcn/ui.
      </P>

      <H2>Composition</H2>
      <P>
        <InlineCode>Accordion</InlineCode> holds one or more <InlineCode>AccordionItem</InlineCode>s, each with a unique{" "}
        <InlineCode>value</InlineCode>, one <InlineCode>AccordionTrigger</InlineCode> (rendered inside a heading) and one{" "}
        <InlineCode>AccordionContent</InlineCode>. Each item is its own bordered box, as in Figma, rather than shadcn’s
        divided list.
      </P>

      <H2>Examples</H2>
      <H3>Single</H3>
      <P>
        <InlineCode>type=&quot;single&quot;</InlineCode> opens one item at a time. Add{" "}
        <InlineCode>collapsible</InlineCode> so the open item can be closed again; <InlineCode>defaultValue</InlineCode>{" "}
        opens an item on first render (shown in the preview at the top).
      </P>
      <ComponentPreview name="accordion-demo" />

      <H3>Multiple</H3>
      <P>
        <InlineCode>type=&quot;multiple&quot;</InlineCode> lets any number of items stay open; <InlineCode>value</InlineCode>{" "}
        and <InlineCode>defaultValue</InlineCode> become string arrays.
      </P>
      <ComponentPreview name="accordion-multiple" />

      <H3>Disabled</H3>
      <P>
        Set <InlineCode>disabled</InlineCode> on an item, or on the root to disable all of them. The trigger uses the
        disabled text colour and can’t be focused or opened. Say why in the label if you can.
      </P>
      <ComponentPreview name="accordion-disabled" />

      <H3>Controlled</H3>
      <P>
        Pass <InlineCode>value</InlineCode> and <InlineCode>onValueChange</InlineCode> to open items from outside, for
        example a stepper that moves to the next section.
      </P>
      <ComponentPreview name="accordion-controlled" />

      <H2>Alignment and spacing</H2>
      <P>
        Items sit 8px apart. Triggers are at least 48px tall with 16px padding; content has 16px inline padding and 16px
        below. Titles are start-aligned and wrap rather than truncate. <InlineCode>className</InlineCode> on{" "}
        <InlineCode>AccordionContent</InlineCode> styles the inner padded box, as in shadcn.
      </P>

      <H2>Responsive</H2>
      <P>
        Accordions fill their container’s width. Text is 16px on small screens and 14px from the <InlineCode>md</InlineCode>{" "}
        breakpoint. On wide layouts consider showing all sections or using Tabs instead.
      </P>

      <H2>RTL</H2>
      <P>
        Text is start-aligned and the chevron sits at the inline end, so both flip in right-to-left layouts. The chevron
        points right when closed and rotates down when open.
      </P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Each trigger is a <InlineCode>button</InlineCode> inside a heading (<InlineCode>h3</InlineCode>) with <InlineCode>aria-expanded</InlineCode> and <InlineCode>aria-controls</InlineCode>; content is a labelled <InlineCode>region</InlineCode>.</>,
          "Tab moves between triggers; Space or Enter toggles; Arrow Up/Down, Home and End move between triggers (Radix).",
          "Focus shows the brand focus outline with a 2px offset.",
          "Triggers are at least 48px tall for touch.",
          "The chevron rotation is turned off when reduced motion is preferred.",
          "Closed content is removed from the accessibility tree, so don’t put validation errors inside a closed item.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Uses <InlineCode>--border</InlineCode>, <InlineCode>--foreground</InlineCode>, <InlineCode>--ring</InlineCode>{" "}
        and <InlineCode>--disabled-text</InlineCode>. For a divided list like shadcn’s, remove the gap on{" "}
        <InlineCode>Accordion</InlineCode> and use <InlineCode>rounded-none border-x-0 border-t-0</InlineCode> on items.
      </P>

      <H2>API reference</H2>
      <PropsTable
        caption="Accordion props"
        rows={[
          { name: "type", type: '"single" | "multiple"', description: "Required. One or many items open at a time." },
          { name: "collapsible", type: "boolean", default: "false", description: "type=single only: allow closing the open item." },
          { name: "value / defaultValue", type: "string | string[]", description: "Open item(s), controlled or initial. Array for type=multiple." },
          { name: "onValueChange", type: "(value: string | string[]) => void", description: "Called when items open or close." },
          { name: "disabled", type: "boolean", default: "false", description: "Disable every item." },
          { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Arrow-key direction." },
        ]}
      />
      <PropsTable
        caption="AccordionItem props"
        rows={[
          { name: "value", type: "string", description: "Required, unique identifier." },
          { name: "disabled", type: "boolean", default: "false", description: "Prevent opening this item." },
        ]}
      />
      <PropsTable
        caption="AccordionTrigger and AccordionContent"
        rows={[
          { name: "AccordionTrigger", type: "React.ComponentProps<typeof AccordionPrimitive.Trigger>", description: "Button inside a heading; children are the title." },
          { name: "AccordionContent forceMount", type: "true", description: "Keep content mounted when closed (e.g. for animation libraries)." },
          { name: "AccordionContent className", type: "string", description: "Applied to the inner padded box." },
        ]}
      />
    </>
  )
}
