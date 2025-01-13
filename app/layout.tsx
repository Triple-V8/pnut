import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const comic = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>PNUT - The Most Wanted Memecoin</title>
      </head>
      <body className={`${inter.className} ${comic.variable}`}>
        {children}
      </body>
    </html>
  )
}

