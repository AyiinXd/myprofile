import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['devanagari', 'latin', 'latin-ext'],
})

export const metadata: Metadata = {
  title: 'AyiinXd',
  description: 'BioData AyiinXd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-gradient-to-r from-violet-950 to-sky-950`}>{children}</body>
    </html>
  )
}
