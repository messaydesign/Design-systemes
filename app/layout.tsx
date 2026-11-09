import type { Metadata } from "next"
import Link from "next/link"
import { DM_Sans, Inter, Manrope, Roboto_Mono } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] })
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] })
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const robotoMono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Main Brand UI",
  description: "Components built from the Main Brand Figma design system.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${manrope.variable} ${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <nav className="border-b">
          <div className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3 sm:px-8">
            <span className="font-heading font-bold">Main Brand UI</span>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Button
            </Link>
            <Link href="/forms" className="text-sm text-muted-foreground hover:text-foreground">
              Forms
            </Link>
            <Link href="/overlays" className="text-sm text-muted-foreground hover:text-foreground">
              Overlays
            </Link>
            <Link href="/display" className="text-sm text-muted-foreground hover:text-foreground">
              Display
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
