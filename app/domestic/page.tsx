import { Metadata } from 'next'
import { Suspense } from 'react'
import CategoryPageClient from '@/components/ui/CategoryPageClient'

export const metadata: Metadata = {
  title: 'Domestic Tour Packages — AB Travels Navsari',
  description: 'Explore India with AB Travels. Best domestic tour packages from Navsari — Kashmir, Goa, Rajasthan, Kerala and more. Book via WhatsApp.',
}

export default function DomesticPage() {
  return (
    <Suspense>
      <CategoryPageClient
        category="domestic"
        emoji="🇮🇳"
        title="Domestic Tour Packages"
        description="Explore the incredible diversity of India — from the snow-capped valleys of Kashmir to the sun-kissed beaches of Goa."
        image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80"
      />
    </Suspense>
  )
}