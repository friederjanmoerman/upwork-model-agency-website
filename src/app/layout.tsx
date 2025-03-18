import { ReactNode } from "react"
import ThemeRegistry from "@/components/ThemeRegistry"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "800"],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
