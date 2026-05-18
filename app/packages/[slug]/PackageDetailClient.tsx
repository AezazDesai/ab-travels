'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, CheckCircle, XCircle, ArrowLeft, Plane, Train, PlaneTakeoff, Baby, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { TravelPackage } from '@/types'
import { getPackageWhatsAppLink } from '@/lib/utils'

const transportConfig = {
  flight: { icon: Plane,        label: 'By Flight'      },
  train:  { icon: Train,        label: 'By Train'       },
  both:   { icon: PlaneTakeoff, label: 'Flight / Train' },
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="space-y-3">
      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
        <Image src={images[current]} alt={`${title} - image ${current + 1}`} fill className="object-cover" priority />
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors">
              <ChevronRight size={18} />
            </button>
            <span className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
              {current + 1} / {images.length}
            </span>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                i === current ? 'border-[var(--sky)]' : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              <Image src={img} alt={`Thumb ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function calculateSavings(original: string, current: string): string {
  const saved = parseInt(original.replace(/[^0-9]/g, '')) - parseInt(current.replace(/[^0-9]/g, ''))
  return `₹${saved.toLocaleString('en-IN')}`
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function PackageDetailClient({ pkg }: { pkg: TravelPackage }) {
  const Transport = transportConfig[pkg.transport]
  const whatsappLink = getPackageWhatsAppLink(pkg.whatsappNumber, pkg.title)

  return (
    <>
      <div className="hero-gradient pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/packages" className="inline-flex items-center gap-2 text-sky-200 text-sm hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Packages
          </Link>
        </div>
      </div>

      <section className="py-8 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <ImageGallery images={pkg.images} title={pkg.title} />

              {/* Title + meta */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {pkg.badge && (
                    <span className="text-xs font-bold bg-[var(--sky)] text-white px-3 py-1 rounded-full">{pkg.badge}</span>
                  )}
                  <span className="flex items-center gap-1 text-xs bg-[var(--gray-soft)] text-[var(--navy)] px-3 py-1 rounded-full font-medium">
                    <Transport.icon size={12} /> {Transport.label}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {pkg.title}
                </h1>
                <p className="text-[var(--text-secondary)] flex items-center gap-1.5 text-sm flex-wrap">
                  <MapPin size={14} className="text-[var(--sky)]" /> {pkg.subtitle}
                  <span className="text-[var(--gray-soft)]">•</span>
                  <Clock size={14} className="text-[var(--sky)]" /> {pkg.duration}
                </p>
              </div>

              {/* Overview */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)]">
                <h2 className="text-lg font-bold text-[var(--navy)] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Package Overview</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{pkg.description}</p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)]">
                <h2 className="text-lg font-bold text-[var(--navy)] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Highlights</h2>
                <div className="grid grid-cols-2 gap-3">
                  {pkg.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5">
                      <CheckCircle size={15} className="text-[var(--sky)] shrink-0" />
                      <span className="text-sm text-[var(--text-secondary)]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions + Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)]">
                  <h2 className="text-lg font-bold text-[var(--navy)] mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"><CheckCircle size={13} className="text-green-600" /></span>
                    Inclusions
                  </h2>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)]">
                  <h2 className="text-lg font-bold text-[var(--navy)] mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"><XCircle size={13} className="text-red-500" /></span>
                    Exclusions
                  </h2>
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((exc) => (
                      <li key={exc} className="flex items-start gap-2.5">
                        <XCircle size={14} className="text-red-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Child Charges */}
              {pkg.childCharges && pkg.childCharges.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)]">
                  <h2 className="text-lg font-bold text-[var(--navy)] mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center"><Baby size={13} className="text-[var(--sky-dark)]" /></span>
                    Child Charges
                  </h2>
                  <div className="space-y-3">
                    {pkg.childCharges.map((c) => (
                      <div key={c.label} className="flex items-center justify-between p-3 bg-[var(--cream)] rounded-xl">
                        <div>
                          <p className="text-sm font-semibold text-[var(--navy)]">{c.label}</p>
                          {c.note && <p className="text-xs text-[var(--text-muted)] mt-0.5">{c.note}</p>}
                        </div>
                        <span className="text-base font-bold text-[var(--sky-dark)]">{c.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* YouTube Video */}
              {pkg.videoUrl && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)]">
                  <h2 className="text-lg font-bold text-[var(--navy)] mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"><Play size={12} className="text-red-500 ml-0.5" /></span>
                    Watch Destination Video
                  </h2>
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={pkg.videoUrl}
                      title={`${pkg.title} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)] sticky top-24">
                <div className="mb-5">
                  {pkg.originalPrice && (
                    <p className="text-sm text-[var(--text-muted)] line-through mb-0.5">{pkg.originalPrice}</p>
                  )}
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-[var(--sky-dark)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pkg.price}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">{pkg.priceNote}</p>
                  </div>
                  {pkg.originalPrice && (
                    <p className="text-xs text-green-600 font-medium mt-1">
                      🎉 You save {calculateSavings(pkg.originalPrice, pkg.price)}
                    </p>
                  )}
                </div>

                {pkg.badge && (
                  <div className="bg-[var(--sky)]/10 text-[var(--sky-dark)] text-xs font-bold text-center py-2 rounded-lg mb-4">
                    🏆 {pkg.badge}
                  </div>
                )}

                <div className="space-y-3 mb-6 text-sm divide-y divide-[var(--gray-soft)]">
                  {[
                    { label: 'Duration',   value: pkg.duration },
                    { label: 'Destination', value: pkg.subtitle },
                    { label: 'Transport',  value: Transport.label },
                    { label: 'Category',   value: pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1) },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between py-2.5 first:pt-0">
                      <span className="text-[var(--text-secondary)]">{row.label}</span>
                      <span className="font-semibold text-[var(--navy)]">{row.value}</span>
                    </div>
                  ))}
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-xl transition-colors mb-3">
                  <WhatsAppIcon /> Enquire on WhatsApp
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center w-full py-3 border-2 border-[var(--sky)] text-[var(--sky-dark)] font-semibold rounded-xl hover:bg-[var(--sky)] hover:text-white transition-all text-sm">
                  Contact Us
                </Link>
                <p className="text-xs text-[var(--text-muted)] text-center mt-4">📞 {pkg.whatsappNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}