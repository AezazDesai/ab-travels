'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, Plane, Train, PlaneTakeoff } from 'lucide-react'
import { TravelPackage } from '@/types'
import { getPackageWhatsAppLink } from '@/lib/utils'

const categoryColors: Record<string, string> = {
  domestic: 'bg-green-100 text-green-700',
  international: 'bg-blue-100 text-blue-700',
  umrah: 'bg-purple-100 text-purple-700',
  hajj: 'bg-amber-100 text-amber-700',
}

const categoryLabels: Record<string, string> = {
  domestic: 'Domestic',
  international: 'International',
  umrah: 'Umrah',
  hajj: 'Hajj',
}

const transportConfig = {
  flight: { icon: Plane,         label: 'By Flight' },
  train:  { icon: Train,         label: 'By Train'  },
  both:   { icon: PlaneTakeoff,  label: 'Flight / Train' },
}

export default function PackageCard({ pkg }: { pkg: TravelPackage }) {
  const whatsappLink = getPackageWhatsAppLink(pkg.whatsappNumber, pkg.title)
  const Transport = transportConfig[pkg.transport]

  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-[var(--gray-soft)] flex flex-col group">

      {/* Clickable top — image + content */}
      <Link href={`/packages/${pkg.slug}`} className="block">

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={pkg.images[0]}
            alt={pkg.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Top badges */}
          {pkg.badge && (
            <span className="absolute top-3 left-3 bg-[var(--sky)] text-white text-xs font-bold px-3 py-1 rounded-full">
              {pkg.badge}
            </span>
          )}
          <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[pkg.category]}`}>
            {categoryLabels[pkg.category]}
          </span>

          {/* Transport badge — bottom left of image */}
          <span className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
            <Transport.icon size={11} />
            {Transport.label}
          </span>

          {/* Image count indicator */}
          {pkg.images.length > 1 && (
            <span className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
              1/{pkg.images.length}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 pb-3">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-bold text-[var(--navy)] leading-snug">{pkg.title}</h3>
          </div>

          <p className="text-sm text-[var(--text-secondary)] flex items-center gap-1 mb-3">
            <MapPin size={13} className="text-[var(--sky)]" />
            {pkg.subtitle}
          </p>

          {/* Price tag */}
          <div className="flex items-baseline gap-2 mb-3">
            {pkg.originalPrice && (
              <span className="text-sm text-[var(--text-muted)] line-through">
                {pkg.originalPrice}
              </span>
            )}
            <span className="text-xl font-bold text-[var(--sky-dark)]">{pkg.price}</span>
            <span className="text-xs text-[var(--text-muted)]">{pkg.priceNote}</span>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-2">
            {pkg.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {pkg.highlights.slice(0, 3).map((h) => (
              <span key={h} className="text-xs bg-[var(--gray-soft)] text-[var(--navy)] px-2.5 py-1 rounded-full">
                {h}
              </span>
            ))}
            {pkg.highlights.length > 3 && (
              <span className="text-xs bg-[var(--gray-soft)] text-[var(--text-muted)] px-2.5 py-1 rounded-full">
                +{pkg.highlights.length - 3} more
              </span>
            )}
          </div>

          {/* Duration */}
          <div className="flex items-center pt-3 border-t border-[var(--gray-soft)]">
            <span className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
              <Clock size={14} className="text-[var(--sky)]" />
              {pkg.duration}
            </span>
          </div>
        </div>
      </Link>

      {/* CTA row */}
      <div className="px-5 pb-5 grid grid-cols-2 gap-2 mt-auto">
        <Link
          href={`/packages/${pkg.slug}`}
          className="flex items-center justify-center py-2.5 text-sm font-semibold text-[var(--sky-dark)] border-2 border-[var(--sky)] rounded-xl hover:bg-[var(--sky)] hover:text-white transition-all"
        >
          View Details
        </Link>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-sm rounded-xl transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}