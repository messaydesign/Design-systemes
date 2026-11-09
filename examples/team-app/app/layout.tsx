import type { Metadata } from "next"
import { DM_Sans, Inter, Manrope, Roboto_Mono } from "next/font/google"

import { AppShell } from "@/components/app-shell"
import "./globals.css"

/* Brand fonts, exposed as the CSS variables the theme expects. */
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] })
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] })
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const robotoMono = Roboto_Mono({ variable: "--font-roboto-mono", subsets: ["latin"] })

const APP_NAME = "Team Projects"

export const metadata: Metadata = {
  title: { default: APP_NAME, template: `%s · ${APP_NAME}` },
}

/* Applies the saved theme before first paint. */
const THEME_SCRIPT = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${manrope.variable} ${inter.variable} ${robotoMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="bg-background font-sans text-foreground">
        <AppShell appName={APP_NAME}>{children}</AppShell>
      </body>
    </html>
  )
}
