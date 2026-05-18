import { Metadata } from 'next'
import CTASection from '@/components/sections/CTASection'
import { MapPin, Phone, Award, Heart, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — AB Travels Navsari',
  description: 'Learn about AB Travels — your trusted local travel agency from At-Tankal, Navsari, Gujarat. Specialising in domestic tours, international packages, Umrah and Hajj.',
}

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="hero-gradient pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--sky)] bg-white/10 px-3 py-1.5 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            About AB Travels
          </h1>
          <p className="text-sky-100/70 text-lg max-w-2xl mx-auto">
            A trusted name in travel from the heart of Navsari, Gujarat.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[var(--sky-dark)] bg-[var(--sky-light)]/30 px-3 py-1 rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Neighbours,<br />Your Travel Partners
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                AB Travels is a hometown travel agency proudly based in At-Tankal, Navsari, Gujarat. We started with a simple mission — to make quality travel accessible, affordable, and hassle-free for every family in our community.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Over the years, we have helped hundreds of families from Navsari and surrounding areas explore India's most beautiful destinations, experience international travel, and fulfil their sacred Umrah and Hajj obligations.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We handle everything — from visa and ticketing to hotel bookings and guided tours — so you can travel with complete peace of mind.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[var(--gray-soft)]">
                {[
                  { value: '500+', label: 'Happy Families' },
                  { value: '50+', label: 'Destinations' },
                  { value: '10+', label: 'Years in Service' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-bold text-[var(--sky-dark)]"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {s.value}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Heart, title: 'Passion for Travel', desc: 'We love travel and it shows in every package we design for you.' },
                { icon: Award, title: 'Experience & Trust', desc: 'Years of experience and hundreds of satisfied customers speak for us.' },
                { icon: Globe, title: 'Wide Network', desc: 'Strong relationships with airlines, hotels and tour operators worldwide.' },
                { icon: MapPin, title: 'Local Roots', desc: 'Born and based in Navsari — we truly understand the Gujarat traveller.' },
              ].map((item) => (
                <div key={item.title} className="bg-[var(--cream)] rounded-2xl p-5 border border-[var(--gray-soft)]">
                  <div className="w-10 h-10 bg-[var(--sky)]/15 rounded-xl flex items-center justify-center mb-3">
                    <item.icon size={20} className="text-[var(--sky-dark)]" />
                  </div>
                  <h4 className="font-bold text-[var(--navy)] text-sm mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
