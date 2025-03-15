import { ReactNode } from "react"
import ThemeRegistry from "@/components/ThemeRegistry" // ✅ Use the wrapper

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
