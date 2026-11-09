import type { Metadata } from "next"
import Link from "next/link"
import { DM_Sans, Inter, Manrope, Roboto_Mono } from "next/font/google"

import { ThemeToggle } from "@/components/docs/client"
import "./globals.css"

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] })
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] })
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const robotoMono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: "Main Brand UI", template: "%s · Main Brand UI" },
  description: "Components built from the Main Brand Figma design system.",
}

// Apply the saved theme before first paint (no flash).
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${manrope.variable} ${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main"
          className="sr-only z-50 rounded-[var(--radius)] bg-background p-3 focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-background">
          <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-6 px-4 sm:px-8">
            <Link href="/docs" className="font-heading font-bold whitespace-nowrap">
              Main Brand UI
            </Link>
            <nav aria-label="Site" className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto text-sm">
              {[
                ["/docs", "Docs"],
                ["/docs/components", "Components"],
                ["/docs/theming", "Theming"],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-muted-foreground hover:text-foreground">
                  {label}
                </Link>
              ))}
              <a
                href="https://github.com/messaydesign/Design-systemes"
                className="ms-auto text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        <div id="main">{children}</div>
      </body>
    </html>
  )
}
