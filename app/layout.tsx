import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Developer - Full Stack Engineer',
  description: 'Professional portfolio of John Developer, a Full Stack Engineer specializing in React, Node.js, and Cloud Technologies',
  keywords: ['Full Stack Developer', 'React Developer', 'Software Engineer', 'Web Development', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}