import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-notosans"
})

export const metadata: Metadata = {
  title: "Arrowheads Inc. - AI Innovation",
  description: "Cutting-edge AI solutions for real-world challenges",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${notoSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


