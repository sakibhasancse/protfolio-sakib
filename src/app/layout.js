import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sakib Hasan - Senior Backend Developer',
  description: 'Senior Backend-Focused Full Stack Developer specializing in Node.js, AWS, and scalable architectures.',
  keywords: 'backend developer, nodejs, aws, full stack, typescript, microservices',
  authors: [{ name: 'Sakib Hasan' }],
  creator: 'Sakib Hasan',
  openGraph: {
    title: 'Sakib Hasan - Senior Backend Developer',
    description: 'Senior Backend-Focused Full Stack Developer specializing in Node.js, AWS, and scalable architectures.',
    url: 'https://sakib-hasan.dev',
    siteName: 'Sakib Hasan Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sakib Hasan - Senior Backend Developer',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}