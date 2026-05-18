'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import data from '@/data/packages.json'
import PackageCard from '@/components/ui/PackageCard'
import { TravelPackage, PackageCategory, SortOption } from '@/types'

const packages = data.packages as TravelPackage[]

const filters: { id: PackageCategory | 'all'; label: string; emoji: string }[] = [
  { id: 'all',           label: 'All Packages',   emoji: '🌍' },
  { id: 'domestic',      label: 'Domestic',        emoji: '🇮🇳' },
  { id: 'international', label: 'International',   emoji: '✈️' },
  { id: 'umrah',         label: 'Umrah',           emoji: '🕌' },
  { id: 'hajj',          label: 'Hajj',            emoji: '🕋' },
]

const sortOptions: { id: SortOption; label: string }[] = [
  { id: 'default',    label: 'Default Sorting'          },
  { id: 'popular',    label: 'Sort by Popularity'       },
  { id: 'price-low',  label: 'Sort by Price: Low to High' },
  { id: 'price-high', label: 'Sort by Price: High to Low' },
  { id: 'latest',     label: 'Sort by Latest'           },
]

const validCategories = filters.map((f) => f.id)

function parsePrice(price: string): number {
  return parseInt(price.replace(/[^0-9]/g, '')) || 0
}

export default function PackagesClient() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') as PackageCategory | 'all' | null

  const [active, setActive]     = useState<PackageCategory | 'all'>(
    categoryParam && validCategories.includes(categoryParam) ? categoryParam : 'all'
  )
  const [sort, setSort]         = useState<SortOption>('default')
  const [sortOpen, setSortOpen] = useState(false)

  useEffect(() => {
    setActive(categoryParam && validCategories.includes(categoryParam) ? categoryParam : 'all')
  }, [categoryParam])

  const filtered = useMemo(() => {
    let list = active === 'all' ? packages : packages.filter((p) => p.category === active)

    switch (sort) {
      case 'price-low':  list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price)); break
      case 'price-high': list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price)); break
      case 'popular':    list = [...list].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)); break
      case 'latest':     list = [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break
    }
    return list
  }, [active, sort])

  const currentSortLabel = sortOptions.find((s) => s.id === sort)?.label ?? 'Default Sorting'

  return (
    <>
      {/* Page header */}
      <div className="hero-gradient pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--sky)] bg-white/10 px-3 py-1.5 rounded-full mb-4">
            All Packages
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Find Your Perfect Package
          </h1>
          <p className="text-sky-100/70 text-lg max-w-2xl mx-auto">
            Browse our complete collection — domestic, international, Umrah & Hajj packages.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[var(--cream)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter + Sort row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    active === f.id
                      ? 'bg-[var(--sky)] text-white shadow-md'
                      : 'bg-white text-[var(--navy)] border border-[var(--gray-soft)] hover:border-[var(--sky)]'
                  }`}
                >
                  {f.emoji} {f.label}
                </button>
              ))}
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen((o) => !o)}
                className="flex items-center gap-2 pl-4 pr-3 py-2.5 bg-white border border-[var(--gray-soft)] rounded-full text-sm font-medium text-[var(--navy)] hover:border-[var(--sky)] transition-colors min-w-[200px] justify-between"
              >
                {currentSortLabel}
                <span className="w-7 h-7 rounded-full bg-[var(--sky)] flex items-center justify-center shrink-0">
                  <ChevronDown size={14} className={`text-white transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </span>
              </button>

              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[var(--gray-soft)] overflow-hidden z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => { setSort(option.id); setSortOpen(false) }}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        sort === option.id
                          ? 'bg-[var(--sky)] text-white font-semibold'
                          : 'text-[var(--navy)] hover:bg-[var(--gray-soft)]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="text-[var(--text-muted)] text-sm mb-6">
            Showing {filtered.length} package{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[var(--text-muted)]">
              <p className="text-5xl mb-4">🧳</p>
              <p className="text-lg font-medium">No packages found.</p>
              <p className="text-sm mt-2">Try a different filter or contact us on WhatsApp.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}