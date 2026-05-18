'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Home, Package, Moon, Info, Mail, Globe, MapPin, ChevronDown } from 'lucide-react'
import { cn, getWhatsAppLink } from '@/lib/utils'

const WHATSAPP_NUMBER = '9909957177'

// Packages dropdown children
const packageDropdown = [
  { label: 'All Packages',    href: '/packages',       icon: Package, desc: 'Browse everything' },
  { label: 'Domestic',        href: '/domestic',       icon: MapPin,  desc: 'Tours across India' },
  { label: 'International',   href: '/international',  icon: Globe,   desc: 'Worldwide destinations' },
  { label: 'Umrah & Hajj',    href: '/umrah-hajj',     icon: Moon,    desc: 'Sacred pilgrimages' },
]

// Top-level links (no dropdown)
const navLinks = [
  { label: 'Home',    href: '/',        icon: Home },
  { label: 'About',   href: '/about',   icon: Info },
  { label: 'Contact', href: '/contact', icon: Mail },
]

export default function Navbar() {
  const [isOpen,       setIsOpen]       = useState(false)
  const [scrolled,     setScrolled]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [pkgMobileOpen, setPkgMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const linkBase = (active = false) => cn(
    'flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all',
    scrolled
      ? active
        ? 'bg-[var(--gray-soft)] text-[var(--sky-dark)]'
        : 'text-[var(--navy)] hover:bg-[var(--gray-soft)] hover:text-[var(--sky-dark)]'
      : active
        ? 'text-white bg-white/10'
        : 'text-white/90 hover:text-white hover:bg-white/10'
  )

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--sky)] shadow-sm">
              <Image src="/images/logo.png" alt="AB Travels" width={96} height={96} className="object-cover w-full h-full" quality={100} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className={cn('font-bold text-xl leading-none transition-colors', scrolled ? 'text-[var(--navy)]' : 'text-white')}
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  AB Travels
                </p>
                <span className={cn('text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none',
                  scrolled ? 'bg-[var(--sky)]/20 text-[var(--sky-dark)]' : 'bg-white/15 text-sky-200')}>
                  Since 2015
                </span>
              </div>
              <p className={cn('text-xs transition-colors mt-0.5', scrolled ? 'text-[var(--text-muted)]' : 'text-sky-200')}>
                At-Tankal, Navsari
              </p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Home */}
            <Link href="/" className={linkBase()}>
              <Home size={14} /> Home
            </Link>

            {/* Packages dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className={linkBase(dropdownOpen)}
              >
                <Package size={14} />
                Packages
                <ChevronDown size={13} className={cn('transition-transform duration-200', dropdownOpen ? 'rotate-180' : '')} />
              </button>

              {/* Dropdown panel */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[var(--gray-soft)] overflow-hidden z-50">
                  {packageDropdown.map(({ label, href, icon: Icon, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-[var(--gray-soft)] transition-colors group/item"
                    >
                      <div className="w-8 h-8 bg-[var(--sky)]/10 group-hover/item:bg-[var(--sky)]/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        <Icon size={14} className="text-[var(--sky-dark)]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--navy)]">{label}</p>
                        <p className="text-xs text-[var(--text-muted)]">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About + Contact */}
            {navLinks.slice(1).map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href} className={linkBase()}>
                <Icon size={14} /> {label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${WHATSAPP_NUMBER}`}
              className={cn('flex items-center gap-1.5 text-sm font-medium transition-colors',
                scrolled ? 'text-[var(--navy)]' : 'text-white/90')}>
              <Phone size={15} /> {WHATSAPP_NUMBER}
            </a>
            <a href={getWhatsAppLink(WHATSAPP_NUMBER)} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:shadow-md">
              <WhatsAppIconSmall /> WhatsApp
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className={cn('lg:hidden p-2 rounded-lg transition-colors', scrolled ? 'text-[var(--navy)]' : 'text-white')}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={cn(
        'lg:hidden transition-all duration-300 overflow-hidden',
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="bg-white border-t border-[var(--gray-soft)] px-4 py-4 shadow-xl space-y-1">

          {/* Home */}
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-[var(--navy)] font-medium rounded-xl hover:bg-[var(--gray-soft)] transition-colors"
            onClick={() => setIsOpen(false)}>
            <Home size={16} className="text-[var(--sky-dark)]" /> Home
          </Link>

          {/* Packages accordion */}
          <div>
            <button
              onClick={() => setPkgMobileOpen((o) => !o)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 text-[var(--navy)] font-medium rounded-xl hover:bg-[var(--gray-soft)] transition-colors"
            >
              <span className="flex items-center gap-3">
                <Package size={16} className="text-[var(--sky-dark)]" /> Packages
              </span>
              <ChevronDown size={15} className={cn('text-[var(--text-muted)] transition-transform', pkgMobileOpen ? 'rotate-180' : '')} />
            </button>

            {/* Sub-links */}
            <div className={cn('overflow-hidden transition-all duration-300', pkgMobileOpen ? 'max-h-64' : 'max-h-0')}>
              <div className="ml-4 pl-4 border-l-2 border-[var(--gray-soft)] space-y-0.5 py-1">
                {packageDropdown.map(({ label, href, icon: Icon }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-[var(--navy)] rounded-lg hover:bg-[var(--gray-soft)] transition-colors"
                    onClick={() => { setIsOpen(false); setPkgMobileOpen(false) }}>
                    <Icon size={14} className="text-[var(--sky-dark)]" /> {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About + Contact */}
          {navLinks.slice(1).map(({ label, href, icon: Icon }) => (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-4 py-3 text-[var(--navy)] font-medium rounded-xl hover:bg-[var(--gray-soft)] transition-colors"
              onClick={() => setIsOpen(false)}>
              <Icon size={16} className="text-[var(--sky-dark)]" /> {label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="pt-3 border-t border-[var(--gray-soft)] flex flex-col gap-2">
            <a href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 px-4 py-3 text-[var(--navy)] font-medium">
              <Phone size={16} /> {WHATSAPP_NUMBER}
            </a>
            <a href={getWhatsAppLink(WHATSAPP_NUMBER)} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl">
              <WhatsAppIconSmall /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function WhatsAppIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}