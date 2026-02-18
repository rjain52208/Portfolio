import type { Metadata } from 'next'
import './globals.css'
import ParticlesBackground from '@/components/ParticlesBackground'

export const metadata: Metadata = {
  title: 'Riddhi Jain | Full Stack Developer & Data Analyst',
  description: 'Portfolio of Riddhi Jain - Full Stack Developer, Data Analyst, and ML Engineer',
  keywords: 'Full Stack Developer, Data Analyst, React, Next.js, Django, Python, Machine Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  )
}
