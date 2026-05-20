import { Metadata } from 'next'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact — AB Travels Navsari',
  description: 'Contact AB Travels in At-Tankal, Navsari for travel packages, Umrah bookings and queries. Reach us on WhatsApp, phone or visit our office.',
}

const WHATSAPP_NUMBER = '9909957177'

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="hero-gradient pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--sky)] bg-white/10 px-3 py-1.5 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact AB Travels
          </h1>
          <p className="text-sky-100/70 text-lg max-w-2xl mx-auto">
            Have a question? Want to book a package? Reach out directly — we're always available.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--navy)]"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Reach Us Directly
              </h2>
              <p className="text-[var(--text-secondary)]">
                The fastest way to reach us is WhatsApp. We typically respond within minutes during business hours.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsAppLink(WHATSAPP_NUMBER)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#1DA851] transition-colors group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm">+91 {WHATSAPP_NUMBER} · Usually replies in minutes</p>
                </div>
              </a>

              {/* Other contacts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)] space-y-5">
                {[
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: WHATSAPP_NUMBER,
                    href: `tel:${WHATSAPP_NUMBER}`,
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'info@abtravels.net',
                    href: 'mailto:info@abtravels.net',
                  },
                  {
                    icon: MapPin,
                    label: 'Address',
                    value: 'Maa Gayatri Complex, Block 101, Char Rasta, Tankal, Navsari, Gujarat – 396560',
                    href: 'https://maps.google.com/?q=Tankal+Navsari+Gujarat',
                  },
                  {
                    icon: Clock,
                    label: 'Hours',
                    value: 'Tue–Sun: 9am–6pm · Monday: Closed',
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-[var(--sky)]/15 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-[var(--sky-dark)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-[var(--navy)] hover:text-[var(--sky-dark)] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-[var(--navy)]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-[var(--gray-soft)] min-h-[400px] bg-[var(--gray-soft)] flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.831973944856!2d73.12807657502658!3d20.859731980747615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be08d621126153d%3A0xbf01f89a9abb4a4e!2sAB%20TRAVELS%20TANKAL%20%7C%20Passport%2C%20Visa%2C%20Flight%20Booking%2C%20WORK%20PERMIT%20and%20Insurance%20services%20near%20Navsari%20Gujarat!5e1!3m2!1sen!2sin!4v1778765915646!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AB Travels Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}