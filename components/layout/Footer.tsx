'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ExternalLink, FileText } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/utils'

const WHATSAPP_NUMBER = '9909957177'

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--sky)]">
                <Image src="/images/logo.png" alt="AB Travels" width={96} height={96} className="object-cover w-full h-full" quality={100} />
              </div>
              <div>
                <p className="font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>AB Travels</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-sky-300 text-xs">At-Tankal, Navsari</p>
                  <span className="text-[10px] font-bold bg-[var(--sky)]/20 text-[var(--sky)] px-1.5 py-0.5 rounded-full">Since 2015</span>
                </div>
              </div>
            </div>
            <p className="text-sky-100/70 text-sm leading-relaxed mb-3">
              Your trusted travel partner from Navsari, Gujarat. We make every journey memorable — from domestic getaways to sacred pilgrimages.
            </p>
            {/* MSME Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 mb-5">
              <FileText size={13} className="text-[var(--sky)] shrink-0" />
              <div>
                <p className="text-[10px] text-sky-300/70 leading-none">MSME Registered</p>
                <p className="text-xs font-semibold text-sky-100/80 mt-0.5">UDYAM-GJ-16-0006896</p>
              </div>
            </div>
            <div className="block">
              <a
                href={getWhatsAppLink(WHATSAPP_NUMBER)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-[var(--sky-light)]" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'All Packages', href: '/packages' },
                { label: 'Domestic Tours', href: '/domestic' },
                { label: 'International Tours', href: '/international' },
                { label: 'Umrah & Hajj', href: '/umrah-hajj' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sky-100/70 hover:text-[var(--sky)] text-sm transition-colors flex items-center gap-2">
                    <span className="text-[var(--sky)] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Package Categories */}
          <div>
            <h4 className="font-bold text-base mb-5 text-[var(--sky-light)]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Packages</h4>
            <ul className="space-y-3">
              {[
                { label: '🇮🇳 Domestic Tours', href: '/packages?category=domestic' },
                { label: '✈️ International Tours', href: '/packages?category=international' },
                { label: '🕌 Umrah Packages', href: '/packages?category=umrah' },
                { label: '🕋 Hajj Packages', href: '/packages?category=hajj' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sky-100/70 hover:text-[var(--sky)] text-sm transition-colors flex items-center gap-2">
                    <span className="text-[var(--sky)] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal links */}
            <h4 className="font-bold text-base mt-8 mb-4 text-[var(--sky-light)]" style={{ fontFamily: "'Playfair Display', serif" }}>Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Terms & Conditions', href: '/legal/terms' },
                { label: 'Privacy Policy', href: '/legal/privacy' },
                { label: 'Refund Policy', href: '/legal/refund' },
                { label: 'Sitemap', href: '/sitemap.xml', external: true },
              ].map((link) => (
                <li key={link.href}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-100/70 hover:text-[var(--sky)] text-sm transition-colors flex items-center gap-2"
                    >
                      <span className="text-[var(--sky)] text-xs">›</span>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sky-100/70 hover:text-[var(--sky)] text-sm transition-colors flex items-center gap-2">
                      <span className="text-[var(--sky)] text-xs">›</span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-base mb-5 text-[var(--sky-light)]" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-sky-100/70">
                <MapPin size={16} className="text-[var(--sky)] mt-0.5 shrink-0" />
                <span>Maa Gayatri Complex, Block 101,<br />Char Rasta, Tankal,<br />Navsari, Gujarat – 396560</span>
              </li>
              <li>
                <a href={`tel:${WHATSAPP_NUMBER}`} className="flex items-center gap-3 text-sm text-sky-100/70 hover:text-[var(--sky)] transition-colors">
                  <Phone size={16} className="text-[var(--sky)] shrink-0" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>
                <a href="mailto:info@abtravels.net" className="flex items-center gap-3 text-sm text-sky-100/70 hover:text-[var(--sky)] transition-colors">
                  <Mail size={16} className="text-[var(--sky)] shrink-0" />
                  info@abtravels.net
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-sky-100/70">
                <Clock size={16} className="text-[var(--sky)] mt-0.5 shrink-0" />
                <span>Tue – Sun: 9am – 6pm<br />Monday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-sky-100/50 text-xs">
              © 2015–{new Date().getFullYear()} AB Travels · The AB Group. All rights reserved.
            </p>
            <span className="hidden sm:block text-white/20 text-xs">·</span>
            <p className="text-sky-100/30 text-xs">UDYAM-GJ-16-0006896</p>
          </div>
          <p className="text-sky-100/40 text-xs flex items-center gap-1">
            Designed &amp; Developed with ❤️ by{' '}
            <a
              href="https://aezazdesai.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300/70 hover:text-[var(--sky)] transition-colors inline-flex items-center gap-0.5 group"
            >
              Aezaz Desai
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}