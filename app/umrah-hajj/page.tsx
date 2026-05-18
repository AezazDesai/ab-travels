import { Metadata } from 'next'
import data from '@/data/packages.json'
import { TravelPackage } from '@/types'
import PackageCard from '@/components/ui/PackageCard'
import CTASection from '@/components/sections/CTASection'
import { getWhatsAppLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Umrah & Hajj Packages — AB Travels Navsari',
  description: 'Complete Umrah and Hajj packages from Navsari, Gujarat. Visa, flights, hotel, ziyarat and full support included. Contact AB Travels today.',
}

const WHATSAPP_NUMBER = '9909957177'
const packages = data.packages as TravelPackage[]

export default function UmrahHajjPage() {
  const umrahPackages = packages.filter((p) => p.category === 'umrah' || p.category === 'hajj')

  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[420px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1600&q=80"
          alt="Makkah"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--sky)] bg-white/10 px-3 py-1.5 rounded-full mb-5">
              Sacred Pilgrimages
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Umrah & Hajj Packages
            </h1>
            <p className="text-sky-100/80 text-lg leading-relaxed">
              Journey to the holiest places on earth with complete peace of mind. AB Travels has been organising sacred pilgrimages for families across Navsari and Gujarat with care, trust and devotion.
            </p>
          </div>
        </div>
      </div>

      {/* Why trust us for Hajj/Umrah */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: '✈️', label: 'Air Ticket Included' },
              { icon: '🛂', label: 'Visa Assistance' },
              { icon: '🏨', label: 'Near Haram Hotel' },
              { icon: '🗺️', label: 'Ziyarat Tours' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-[var(--gray-soft)]">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <p className="text-sm font-semibold text-[var(--navy)]">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Packages */}
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Available Packages
          </h2>

          {umrahPackages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {umrahPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[var(--text-muted)]">
              <p className="text-4xl mb-3">🕌</p>
              <p className="text-lg font-medium">Packages updating soon.</p>
            </div>
          )}

          {/* Contact prompt */}
          <div className="bg-[var(--navy)] rounded-3xl p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Not Sure Which Package Is Right?
            </h3>
            <p className="text-sky-100/70 mb-6 max-w-xl mx-auto">
              Contact us on WhatsApp and our experienced team will guide you to the best package based on your dates, budget, and group size.
            </p>
            <a
              href={getWhatsAppLink(WHATSAPP_NUMBER, 'Assalamu Alaikum! I need help choosing the right Umrah/Hajj package. Please guide me.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-full transition-all text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Guidance on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
