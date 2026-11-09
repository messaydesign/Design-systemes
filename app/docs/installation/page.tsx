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

      <H2>Existing project</H2>
      <H3>1. Initialise shadcn</H3>
      <CodeBlock lang="bash" code="npx shadcn@latest init --base radix" />
      <P>Choose the Radix base: these components import from <InlineCode>radix-ui</InlineCode>.</P>
      <H3>2. Add the registry</H3>
      <P>In <InlineCode>components.json</InlineCode>, register the namespace so you can write <InlineCode>@main/button</InlineCode>:</P>
      <CodeBlock lang="json" code={`{
  "registries": {
    "@main": "${REGISTRY_URL}/r/{name}.json"
  }
}`} />
      <H3>3. Add the theme and components</H3>
      <CodeBlock lang="bash" code={`npx shadcn@latest add @main/theme
npx shadcn@latest add @main/button @main/input @main/field @main/select @main/dialog @main/card`} />
      <P>The theme writes the colour, radius and font tokens into your CSS. Each component also pulls in what it depends on.</P>
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
