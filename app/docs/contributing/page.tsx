import type { Metadata } from "next"

import { CodeBlock, DocHeader, H2, InlineCode, P } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Contributing" }

const checklist = [
  "Matches Figma: sizes measured, light and dark, LTR and RTL.",
  "Uses tokens only — no new hex values in components.",
  "Accessible: keyboard, visible focus, 48px targets, names, no colour-only meaning.",
  "Composable: className and native props pass through; no app logic inside.",
  "Lint, type-check and registry build pass; installs into the starter and builds.",
  "Docs page with preview, installation, usage, examples, accessibility, API and Figma link.",
  "CHANGELOG entry, marked Breaking when it is.",
]

export default function ContributingPage() {
  return (
    <>
      <DocHeader
        title="Contributing"
        description="How bugs are reported, components proposed and releases versioned. The full guide is CONTRIBUTING.md in the repository."
      />
      <H2>Report a bug</H2>
      <P>
        Open an issue with the Bug template: component, expected and actual behaviour, browser, theme and direction.
        If you fixed it in your copy, include the diff.
      </P>
      <H2>Propose a component</H2>
      <P>
        Check the coverage page first. Then open a Component proposal with the problem and at least two products that need
        it. New components start in Figma with a Component guide, then get code and a docs page. Product-specific
        components stay in your product.
      </P>
      <H2>Review checklist</H2>
      <ul className="flex max-w-[70ch] flex-col gap-2 ps-5 leading-7 text-[var(--text-secondary)] [&>li]:list-disc">
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <H2>Versions and releases</H2>
      <P>
        The registry follows semantic versioning: patch for fixes, minor for new components, props or tokens, major for
        renamed or removed API and visual changes teams must review. Copied components never change on their own; each
        CHANGELOG entry names the items so you can review them:
      </P>
      <CodeBlock lang="bash" code="npx shadcn@latest add @main/button --diff components/ui/button.tsx" />
      <P>
        Breaking entries include a migration note. See <InlineCode>CHANGELOG.md</InlineCode>.
      </P>
    </>
  )
}
