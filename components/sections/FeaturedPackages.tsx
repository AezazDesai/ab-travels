import Link from 'next/link'
import { TravelPackage } from '@/types'
import PackageCard from '@/components/ui/PackageCard'
import SectionHeading from '@/components/ui/SectionHeading'

interface FeaturedPackagesProps {
  packages: TravelPackage[]
}

export default function FeaturedPackages({ packages }: FeaturedPackagesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <SectionHeading
            label="Featured Packages"
            title="Handpicked "
            highlight="Travel Deals"
            description="Our most popular packages, trusted by hundreds of travellers from Navsari and across Gujarat."
            centered={false}
            className="mb-0"
          />
          <Link
            href="/packages"
            className="shrink-0 px-6 py-3 border-2 border-[var(--sky)] text-[var(--sky-dark)] font-semibold rounded-full hover:bg-[var(--sky)] hover:text-white transition-all text-sm"
          >
            View All Packages →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
