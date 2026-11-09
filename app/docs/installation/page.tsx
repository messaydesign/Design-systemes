import type { Metadata } from "next"
import Link from "next/link"

import { Callout, CodeBlock, DocHeader, H2, H3, InlineCode, P } from "@/components/docs/blocks"
import { REGISTRY_URL } from "@/lib/docs/source"

export const metadata: Metadata = { title: "Installation" }

export default function InstallationPage() {
  return (
    <>
      <DocHeader
        title="Installation"
        description="Start a new app from the starter, or add Main Brand UI to an existing Next.js project with Tailwind CSS v4."
      />

      <H2>Requirements</H2>
      <P>React 19, Tailwind CSS v4 and the <InlineCode>radix-ui</InlineCode> package. Examples use Next.js App Router; other React frameworks work with the same files.</P>

      <H2>New app from the starter</H2>
      <P>
        The starter has the theme, fonts, an app shell with navigation, the core components and an example page. Copy
        <InlineCode>templates/starter</InlineCode> from this repository:
      </P>
      <CodeBlock lang="bash" code={`cp -R templates/starter my-app
cd my-app
npm install
npm run dev`} />
      <P>Then <Link className="underline" href="/docs/theming">change the brand colour</Link> and start adding pages.</P>

      <H2>New project with the CLI</H2>
      <P>
        Create a Next.js app already set up with the Main Brand style — dependencies, <InlineCode>cn()</InlineCode>,
        theme tokens and base styles — exactly like <InlineCode>shadcn init</InlineCode>:
      </P>
      <CodeBlock lang="bash" code={`npx shadcn@latest init ${REGISTRY_URL}/r/style.json --template next --base radix`} />
      <P>
        The Next template includes shadcn’s default Button; replace it with ours and add the{" "}
        <InlineCode>@main</InlineCode> namespace (next step) so you can add components by name.
      </P>
      <CodeBlock lang="bash" code={`npx shadcn@latest add ${REGISTRY_URL}/r/button.json --overwrite`} />

      <H2>Existing project</H2>
      <H3>1. Initialise with the Main Brand style</H3>
      <CodeBlock lang="bash" code={`npx shadcn@latest init ${REGISTRY_URL}/r/style.json --base radix`} />
      <P>
        Choose the Radix base: these components import from <InlineCode>radix-ui</InlineCode>. If the project already uses
        shadcn, run <InlineCode>npx shadcn@latest add {REGISTRY_URL}/r/style.json</InlineCode> instead — it adds our tokens
        and keeps values you have already set.
      </P>
      <H3>2. Add the registry namespace</H3>
      <P>In <InlineCode>components.json</InlineCode>, so you can write <InlineCode>@main/button</InlineCode>:</P>
      <CodeBlock lang="json" code={`{
  "registries": {
    "@main": "${REGISTRY_URL}/r/{name}.json"
  }
}`} />
      <H3>3. Add components</H3>
      <CodeBlock lang="bash" code={`npx shadcn@latest add @main/button @main/input @main/field @main/select @main/dialog @main/card`} />
      <P>
        Names, props and parts follow shadcn/ui, so shadcn examples and blocks work with these components; Main Brand adds
        Figma-specific extras (corner styles, loading, validation states, more sizes).
      </P>
      <H3>4. Load the fonts</H3>
      <P>The theme expects DM Sans, Manrope, Inter and Roboto Mono as CSS variables; without them it falls back to system fonts.</P>
      <CodeBlock code={`// app/layout.tsx
import { DM_Sans, Inter, Manrope, Roboto_Mono } from "next/font/google"

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] })
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] })
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const robotoMono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] })

// <html className={\`\${dmSans.variable} \${manrope.variable} \${inter.variable} \${robotoMono.variable}\`}>`} />

      <H2>Updating components</H2>
      <P>
        Copied components don’t update by themselves. When the changelog lists a fix you want:
      </P>
      <CodeBlock lang="bash" code={`# What would change?
npx shadcn@latest add @main/button --dry-run
npx shadcn@latest add @main/button --diff components/ui/button.tsx

# Take the new version (then re-apply your own edits)
npx shadcn@latest add @main/button --overwrite`} />
      <Callout title="Make updates painless">
        Prefer adding variants or wrapping a component over editing its internals, keep a short “local changes” comment at
        the top of files you edit, and commit before overwriting so <InlineCode>git diff</InlineCode> shows what to
        re-apply.
      </Callout>
    </>
  )
}
