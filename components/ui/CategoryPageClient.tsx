'use client'

import { useState, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'
import data from '@/data/packages.json'
import PackageCard from '@/components/ui/PackageCard'
import { TravelPackage, PackageCategory, SortOption } from '@/types'
import CTASection from '@/components/sections/CTASection'

const allPackages = data.packages as TravelPackage[]

const sortOptions: { id: SortOption; label: string }[] = [
  { id: 'default',    label: 'Default Sorting'            },
  { id: 'popular',    label: 'Sort by Popularity'         },
  { id: 'price-low',  label: 'Price: Low to High'         },
  { id: 'price-high', label: 'Price: High to Low'         },
  { id: 'latest',     label: 'Sort by Latest'             },
]

function parsePrice(price: string): number {
  return parseInt(price.replace(/[^0-9]/g, '')) || 0
}

interface Props {
  category: PackageCategory
  emoji: string
  title: string
  description: string
  image: string
}

export default function CategoryPageClient({ category, emoji, title, description, image }: Props) {
  const [sort, setSort]         = useState<SortOption>('default')
  const [sortOpen, setSortOpen] = useState(false)

  const packages = useMemo(() => {
    let list = allPackages.filter((p) => p.category === category)
    switch (sort) {
      case 'price-low':  list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price)); break
      case 'price-high': list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price)); break
      case 'popular':    list = [...list].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)); break
      case 'latest':     list = [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break
    }
    return list
  }, [sort, category])

  const currentSortLabel = sortOptions.find((s) => s.id === sort)?.label ?? 'Default Sorting'

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[360px] flex items-end overflow-hidden">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--sky)] bg-white/10 px-3 py-1.5 rounded-full mb-4">
            {emoji} {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {title}
          </h1>
          <p className="text-sky-100/75 text-base max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Packages */}
      <section className="py-16 bg-[var(--cream)] min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Sort + count row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <p className="text-[var(--text-muted)] text-sm">
              Showing {packages.length} package{packages.length !== 1 ? 's' : ''}
            </p>

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

          {packages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[var(--text-muted)]">
              <p className="text-5xl mb-4">🧳</p>
              <p className="text-lg font-medium">No packages available yet.</p>
              <p className="text-sm mt-2">Contact us on WhatsApp for custom packages.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}