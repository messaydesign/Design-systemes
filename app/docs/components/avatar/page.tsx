import type { Metadata } from "next"

import { A11yList, CodeBlock, ComponentPreview, DocHeader, H2, H3, InlineCode, Installation, P, PropsTable } from "@/components/docs/blocks"

export const metadata: Metadata = { title: "Avatar" }

export default function AvatarPage() {
  return (
    <>
      <DocHeader
        slug="avatar"
        title="Avatar"
        description="A person’s photo in a circle, falling back to initials or an icon while loading or when there’s no image."
      />
      <ComponentPreview name="avatar-demo" />

      <H2>Installation</H2>
      <Installation item="avatar" />

      <H2>Usage</H2>
      <CodeBlock code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="/photos/amina.jpg" alt="Amina Mekonnen" />
  <AvatarFallback>AM</AvatarFallback>
</Avatar>`} />

      <H2>Examples</H2>
      <H3>Sizes</H3>
      <P>32, 48 (default) and 64px, matching Figma.</P>
      <ComponentPreview name="avatar-sizes" />
      <H3>Fallbacks and loading</H3>
      <P>
        The fallback shows until the image loads and stays if it fails. Use <InlineCode>delayMs</InlineCode> to avoid a
        flash of initials on fast connections.
      </P>
      <ComponentPreview name="avatar-fallback" />
      <H3>Error badge</H3>
      <P>Figma’s error state: a 16px warning badge on the bottom-end edge.</P>
      <ComponentPreview name="avatar-error" />

      <H2>Accessibility</H2>
      <A11yList
        items={[
          <>Give <InlineCode>AvatarImage</InlineCode> an <InlineCode>alt</InlineCode> with the person’s name — or <InlineCode>alt=&quot;&quot;</InlineCode> when the name is already shown next to it.</>,
          "Initials alone aren’t a name; show the name nearby or use aria-label.",
          <>AvatarBadge is announced as “Image failed to load”; pass <InlineCode>aria-label</InlineCode> to change it.</>,
        ]}
      />

      <H2>Customization</H2>
      <P>
        Background uses <InlineCode>--muted-background</InlineCode>. For a square avatar, pass{" "}
        <InlineCode>className=&quot;rounded-[var(--radius)]&quot;</InlineCode> to Avatar, AvatarImage and AvatarFallback.
      </P>

      <H2>API reference</H2>
      <PropsTable
        rows={[
          { name: "Avatar size", type: '"sm" | "default" | "lg"', default: '"default"', description: "32, 48 or 64px." },
          { name: "AvatarImage src / alt", type: "string", description: "Image and its text alternative." },
          { name: "AvatarFallback delayMs", type: "number", description: "Wait before showing the fallback." },
          { name: "AvatarBadge", type: 'React.ComponentProps<"span">', description: "Error indicator; override aria-label as needed." },
        ]}
      />
    </>
  )
}
