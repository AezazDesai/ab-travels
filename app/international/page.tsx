import { Metadata } from 'next'
import { Suspense } from 'react'
import CategoryPageClient from '@/components/ui/CategoryPageClient'

export const metadata: Metadata = {
  title: 'International Tour Packages — AB Travels Navsari',
  description: 'International travel packages from Navsari, Gujarat. Dubai, Thailand, Europe and more — best prices with complete visa and flight support.',
}

export default function InternationalPage() {
  return (
    <Suspense>
      <CategoryPageClient
        category="international"
        emoji="✈️"
        title="International Tour Packages"
        description="Discover the world beyond borders. Handpicked international destinations with complete visa assistance, flights and hotel bookings."
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80"
      />
    </Suspense>
  )
}