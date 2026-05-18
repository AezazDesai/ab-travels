import Link from 'next/link'
import { Category } from '@/types'
import SectionHeading from '@/components/ui/SectionHeading'

interface CategoriesSectionProps {
  categories: Category[]
}

export default function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Explore by Type"
          title="Find Your Perfect "
          highlight="Journey"
          description="From spiritual pilgrimages to international adventures — we have a package crafted just for you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              href={`/packages?category=${cat.id}`}
              className="group relative rounded-2xl overflow-hidden shadow-md card-hover cursor-pointer block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background image */}
              <div className="h-64 relative">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-[var(--navy)]/30 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-3xl mb-2">{cat.icon}</span>
                <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {cat.label}
                </h3>
                <p className="text-sky-200/80 text-xs mt-1">{cat.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {cat.count} Packages
                  </span>
                  <span className="text-[var(--sky)] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
