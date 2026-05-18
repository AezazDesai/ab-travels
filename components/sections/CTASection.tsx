import { getWhatsAppLink } from '@/lib/utils'
import Link from 'next/link'

const WHATSAPP_NUMBER = '9909957177'

export default function CTASection() {
  return (
    <section className="py-20 bg-[var(--navy)] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--sky)]/10" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-[var(--sky)]/5" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--sky)] bg-white/10 px-3 py-1.5 rounded-full mb-5">
          Ready to Travel?
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Let's Plan Your
          <span className="text-[var(--sky)]"> Dream Trip </span>
          Together
        </h2>
        <p className="text-sky-100/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Contact us directly on WhatsApp for instant quotes, package customisation, and personalised travel advice from our expert team in Navsari.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={getWhatsAppLink(WHATSAPP_NUMBER)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-green-900/30 text-base"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
          <Link
            href="/packages"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition-all text-base backdrop-blur-sm"
          >
            Browse All Packages
          </Link>
        </div>

        <p className="mt-8 text-sky-100/40 text-sm">
          📍 At-Tankal, Navsari, Gujarat &nbsp;•&nbsp; 📞 {WHATSAPP_NUMBER}
        </p>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
