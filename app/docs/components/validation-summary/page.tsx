import type { Metadata } from "next"
import Link from "next/link"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Validation Summary" }

export default function ValidationSummaryPage() {
  return (
    <>
      <DocHeader
        slug="validation-summary"
        title="Validation Summary"
        description="A panel at the top of a form that lists every problem after submit, with links to the fields. Info, success, warning and error statuses."
      />
      <ComponentPreview name="validation-summary-demo" />

      <H2>Installation</H2>
      <Installation item="validation-summary" />

      <H2>Usage</H2>
      <CodeBlock code={`import {
  ValidationSummary, ValidationSummaryList, ValidationSummaryTitle,
} from "@/components/ui/validation-summary"

<ValidationSummary status="error" aria-labelledby="summary-title">
  <ValidationSummaryTitle id="summary-title">There is 1 problem</ValidationSummaryTitle>
  <ValidationSummaryList>
    <li><a href="#email">Enter an email like name@example.com</a></li>
  </ValidationSummaryList>
</ValidationSummary>`} />

      <H2>Composition</H2>
      <P>
        A Main Brand component (no shadcn/ui equivalent): <InlineCode>ValidationSummary</InlineCode> draws the status
        border, background and icon · <InlineCode>ValidationSummaryTitle</InlineCode> (Medium 14) ·{" "}
        <InlineCode>ValidationSummaryDescription</InlineCode> for a sentence · <InlineCode>ValidationSummaryList</InlineCode>{" "}
        for the problems, one <InlineCode>&lt;li&gt;</InlineCode> each, usually a link to the field. For a single
        message inside the page use Alert instead.
      </P>

      <H2>Examples</H2>
      <H3>Validation</H3>
      <P>
        Figma’s four statuses. Error uses <InlineCode>role=&quot;alert&quot;</InlineCode> and is focusable; the others use{" "}
        <InlineCode>role=&quot;status&quot;</InlineCode>. Error and warning share the warning icon, so the colour is never
        the only cue.
      </P>
      <ComponentPreview name="validation-summary-status" align="start" />

      <H3>Label and helper text</H3>
      <P>
        Make the title count the problems (“Fix 2 problems to continue”) and reuse each field’s own error text in the
        list, so the summary and the inline messages match.
      </P>

      <H3>Required, read-only and disabled</H3>
      <P>
        Not applicable to the summary itself. List missing required fields like any other error (“Enter your full
        name”).
      </P>

      <H3>Form integration</H3>
      <P>
        Validate on submit, render the summary above the fields and move focus to it (error summaries have{" "}
        <InlineCode>tabIndex=-1</InlineCode>). Each link focuses its field; inline <InlineCode>FieldMessage</InlineCode>s
        repeat the error next to the control. Submit the empty form to try it.
      </P>
      <ComponentPreview name="validation-summary-form" align="start" />

      <H2>RTL</H2>
      <P>The panel is a vertical stack with symmetric padding; text and list markers follow the document direction.</P>

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Error summaries are <InlineCode>role=&quot;alert&quot;</InlineCode> and <InlineCode>tabIndex=-1</InlineCode>: move focus there on submit so the problems are read out.</>,
          <>Name the panel with <InlineCode>aria-labelledby</InlineCode> pointing at its title.</>,
          <>Each list item links to its field (<InlineCode>href=&quot;#field-id&quot;</InlineCode>) and focuses it when activated.</>,
          "Keep inline errors on the fields too — the summary is an addition, not a replacement.",
          "Status is shown with colour, an icon and the title text.",
        ]}
      />

      <H2>Customization</H2>
      <P>
        Each status uses its <InlineCode>--status-*-border</InlineCode>, <InlineCode>-background</InlineCode>,{" "}
        <InlineCode>-text</InlineCode> and <InlineCode>-icon</InlineCode> tokens. Links are underlined automatically
        inside the list. See <Link className="underline" href="/docs/components/field">Field</Link> for inline messages.
      </P>

      <H2>API reference</H2>
      <H3>ValidationSummary</H3>
      <PropsTable
        rows={[
          { name: "status", type: '"info" | "success" | "warning" | "error"', default: '"info"', description: "Colours, icon and role (alert + focusable for error, status otherwise)." },
          { name: "…props", type: 'React.ComponentProps<"div">', description: "Native div attributes; pass ref to move focus to it." },
        ]}
      />
      <P>
        <InlineCode>ValidationSummaryTitle</InlineCode> and <InlineCode>ValidationSummaryDescription</InlineCode> render{" "}
        <InlineCode>&lt;p&gt;</InlineCode>; <InlineCode>ValidationSummaryList</InlineCode> renders a{" "}
        <InlineCode>&lt;ul&gt;</InlineCode>. All accept their element’s native props.
      </P>
    </>
  )
}
