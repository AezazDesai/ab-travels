'use client'

import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '@/lib/utils'
import Link from 'next/link'

const WHATSAPP_NUMBER = '9909957177'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    label: 'Domestic Tours',
    title: 'Discover the Soul',
    highlight: 'of India',
    sub: 'From golden deserts to snowy peaks — explore every corner of incredible India.',
  },
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
    label: 'International Tours',
    title: 'The World Awaits',
    highlight: 'Your Journey',
    sub: "Handpicked international packages from Navsari to the world's finest destinations.",
  },
  {
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&q=80',
    label: 'Umrah & Hajj',
    title: 'Sacred Journeys,',
    highlight: 'Trusted Hands',
    sub: 'Complete Umrah & Hajj arrangements with years of experience and devotion.',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/85 via-[var(--navy)]/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span
            key={`label-${current}`}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--sky)] bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-5 animate-fade-in-up"
          >
            {slide.label}
          </span>

          <h1
            key={`title-${current}`}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in-up delay-100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {slide.title}
            <br />
            <span className="text-[var(--sky)]">{slide.highlight}</span>
          </h1>

          <p
            key={`sub-${current}`}
            className="text-lg text-sky-100/80 leading-relaxed mb-8 animate-fade-in-up delay-200"
          >
            {slide.sub}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <Link
              href="/packages"
              className="px-7 py-3.5 bg-[var(--sky)] hover:bg-[var(--sky-dark)] text-[var(--navy)] font-bold rounded-full transition-all hover:shadow-lg hover:shadow-sky-400/30 text-sm"
            >
              Explore Packages
            </Link>
            <a
              href={getWhatsAppLink(WHATSAPP_NUMBER)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-green-400/30 flex items-center gap-2 text-sm"
            >
              <WhatsAppIcon />
              Book via WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 animate-fade-in-up delay-400">
            {[
              { value: '50,000+', label: 'Happy Travellers' },
              { value: '50+', label: 'Destinations' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</p>
                <p className="text-xs text-sky-200/70 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-[var(--sky)]' : 'w-2 h-2 bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase rotate-90 mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
