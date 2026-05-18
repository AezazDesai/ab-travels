import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'AB Travels — Travel Agency in Navsari, Gujarat',
  description: 'AB Travels is a trusted travel agency based in At-Tankal, Navsari, Gujarat. We offer domestic tours, international packages, Umrah and Hajj packages at the best prices.',
  keywords: 'travel agency navsari, AB travels, umrah packages gujarat, hajj packages navsari, domestic tours india, international tours gujarat',
  openGraph: {
    title: 'AB Travels — Navsari, Gujarat',
    description: 'Your trusted travel partner from Navsari, Gujarat. Domestic, International, Umrah & Hajj packages.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton number="9909957177" variant="floating" />
      </body>
    </html>
  )
}
