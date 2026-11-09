import type { Metadata } from "next"

import { Callout, CodeBlock, DocHeader, H2, H3, InlineCode, P } from "@/components/docs/blocks"
import { readTokens } from "@/lib/docs/tokens"

export const metadata: Metadata = { title: "Theming and tokens" }

const groups: { title: string; test: (name: string) => boolean; note?: string }[] = [
  { title: "Theme (shadcn tokens)", test: (n) => ["background", "foreground", "card", "card-foreground", "popover", "popover-foreground", "primary", "primary-foreground", "secondary", "secondary-foreground", "muted", "muted-foreground", "accent", "accent-foreground", "destructive", "destructive-foreground", "border", "input", "ring", "radius"].includes(n) || n.startsWith("chart-") || n.startsWith("sidebar") },
  { title: "Brand extensions", test: (n) => /^primary-(hover|active|strong|subtle)/.test(n) },
  { title: "Figma names (aliases)", test: (n) => n.startsWith("brand-") || ["text-primary", "text-secondary", "surface", "surface-elevated", "surface-hover", "muted-background", "border-subtle", "input-outline", "button-focus-color"].includes(n) },
  { title: "Surfaces and overlay", test: (n) => ["surface-pressed", "border-disabled", "border-control", "overlay", "skeleton", "tooltip-background", "tooltip-text", "selected-background"].includes(n) },
  { title: "Inputs", test: (n) => n.startsWith("input-") || n.startsWith("disabled-") },
  { title: "Status", test: (n) => n.startsWith("status-") },
  { title: "Buttons", test: (n) => n.startsWith("button-") },
  { title: "Radius", test: (n) => n.startsWith("radius") },
]

function isColor(value: string) {
  return /^(#|rgb|hsl|oklch|var\()/.test(value)
}

export default function ThemingPage() {
  const tokens = readTokens()
  return (
    <>
      <DocHeader
        title="Theming and tokens"
        description="All colours, radii and fonts are CSS variables. Names match the Figma variables, with shadcn’s semantic names layered on top."
      />

      <H2>Change the brand</H2>
      <P>
        Theming works like shadcn/ui: CSS variables named <InlineCode>--background</InlineCode>,{" "}
        <InlineCode>--primary</InlineCode>, <InlineCode>--muted-foreground</InlineCode>… hold the values and components use
        them through utilities such as <InlineCode>bg-primary</InlineCode> and <InlineCode>text-muted-foreground</InlineCode>.
        Main Brand adds a few <InlineCode>--primary-*</InlineCode> extensions for hover, pressed, brand text and selected
        tints, which shadcn doesn’t have. Edit them in <InlineCode>:root</InlineCode> and <InlineCode>.dark</InlineCode>:
      </P>
      <CodeBlock lang="css" code={`/* Example: a blue brand */
:root {
  --primary: #2f6bff;
  --primary-foreground: #ffffff;
  --ring: var(--primary-strong);

  /* Main Brand extensions */
  --primary-hover: #1f55db;
  --primary-active: #1844b0;             /* pressed */
  --primary-active-foreground: #ffffff;
  --primary-strong: #1844b0;             /* brand text, borders, focus */
  --primary-strong-hover: #12388f;       /* link hover */
  --primary-strong-active: #0d2a6b;      /* link pressed */
  --primary-subtle: #eef3ff;             /* selected backgrounds */
}

.dark {
  --primary-strong: #8fb0ff;
  --primary-strong-hover: #b3caff;
  --primary-strong-active: #d1defe;
  --primary-subtle: #0f1d40;
}`} />
      <P>
        Neutral colours (<InlineCode>--background</InlineCode>, <InlineCode>--muted</InlineCode>,{" "}
        <InlineCode>--accent</InlineCode>, <InlineCode>--border</InlineCode>, <InlineCode>--input</InlineCode>), charts
        (<InlineCode>--chart-1…5</InlineCode>) and the sidebar (<InlineCode>--sidebar-*</InlineCode>) work the same way.
        Figma variable names (<InlineCode>--brand-primary</InlineCode>, <InlineCode>--text-secondary</InlineCode>,{" "}
        <InlineCode>--surface</InlineCode>…) are kept as aliases of these, so designs and code use the same names.
      </P>
      <Callout tone="warning" title="Check contrast">
        <InlineCode>--brand-strong</InlineCode> is used for text and focus rings: keep at least 4.5:1 against{" "}
        <InlineCode>--background</InlineCode>, and 3:1 for <InlineCode>--brand-primary</InlineCode> against its
        surroundings.
      </Callout>

      <H2>Radius and fonts</H2>
      <P>
        <InlineCode>--radius</InlineCode> (8px) and <InlineCode>--radius-soft</InlineCode> (16px) drive the Default and
        Soft corner styles. Fonts are mapped in <InlineCode>@theme inline</InlineCode>: <InlineCode>--font-sans</InlineCode>{" "}
        (DM Sans, body), <InlineCode>--font-heading</InlineCode> (Manrope), <InlineCode>--font-button</InlineCode> (Inter)
        and <InlineCode>--font-mono</InlineCode> (Roboto Mono).
      </P>

      <H2>Text size</H2>
      <P>
        Component text is responsive. Below 768px body text is 16px on a 24px line (so phones don’t zoom into form
        fields); from 768px it is 14px on a 20px line. Labels and helper text stay 14px and tighten to a 20px line.
        Buttons keep their own size scale (XS 12 → XXL 20).
      </P>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th scope="col" className="px-4 py-2 text-start font-medium">Text</th>
              <th scope="col" className="px-4 py-2 text-start font-medium">Mobile</th>
              <th scope="col" className="px-4 py-2 text-start font-medium">≥768px</th>
              <th scope="col" className="px-4 py-2 text-start font-medium">Classes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Body, values, menu items</td>
              <td className="px-4 py-2">16 / 24</td>
              <td className="px-4 py-2">14 / 20</td>
              <td className="px-4 py-2 font-mono text-[13px]">text-base leading-6 md:text-sm md:leading-5</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Labels, helper, badges</td>
              <td className="px-4 py-2">14 / 24</td>
              <td className="px-4 py-2">14 / 20</td>
              <td className="px-4 py-2 font-mono text-[13px]">text-sm leading-6 md:leading-5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <P>Use the same classes in your own components so they line up with the library.</P>

      <H2>Dark mode</H2>
      <P>
        Add the <InlineCode>dark</InlineCode> class to <InlineCode>&lt;html&gt;</InlineCode>. Menus, dialogs and selects render
        in portals at the end of the page, so set the class on the root rather than on a section.
      </P>

      <H2>Token reference</H2>
      <P>Generated from this site’s <InlineCode>app/globals.css</InlineCode>, so it is always current.</P>
      {groups.map((g) => {
        const rows = tokens.filter((t) => g.test(t.name))
        if (!rows.length) return null
        return (
          <section key={g.title} className="flex flex-col gap-3">
            <H3>{g.title}</H3>
            {g.note ? <P>{g.note}</P> : null}
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[560px] text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th scope="col" className="px-4 py-2 text-start font-medium">Token</th>
                    <th scope="col" className="px-4 py-2 text-start font-medium">Light</th>
                    <th scope="col" className="px-4 py-2 text-start font-medium">Dark</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((t) => (
                    <tr key={t.name} className="border-t border-border">
                      <td className="px-4 py-2 font-mono text-[13px]">
                        <span className="flex items-center gap-2">
                          {isColor(t.value) ? (
                            <span aria-hidden="true" className="size-4 shrink-0 rounded-sm border border-border" style={{ background: `var(--${t.name})` }} />
                          ) : null}
                          --{t.name}
                        </span>
                      </td>
                      <td className="px-4 py-2 font-mono text-[13px] text-muted-foreground">{t.value}</td>
                      <td className="px-4 py-2 font-mono text-[13px] text-muted-foreground">
                        {t.dark ?? "same"}
                        {t.darkComment?.includes("derived") ? " · derived" : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )
      })}
      <Callout tone="missing" title="Spacing and type-scale tokens">
        Spacing uses Tailwind’s 4px scale (Figma’s 8px grid = 2, 4, 6…) and text styles are applied as utilities. Named
        spacing and typography tokens matching Figma are planned.
      </Callout>
    </>
  )
}
