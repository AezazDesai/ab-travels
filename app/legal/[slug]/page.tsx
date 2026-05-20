import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import terms from '@/data/legal/terms.json'
import privacy from '@/data/legal/privacy.json'
import refund from '@/data/legal/refund.json'

const legalPages = { terms, privacy, refund } as Record<string, typeof terms>

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = legalPages[slug]
  if (!page) return {}
  return {
    title: `${page.title} — AB Travels`,
    description: page.intro,
  }
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = legalPages[slug]
  if (!page) notFound()

  return (
    <>
      {/* Header */}
      <div className="hero-gradient pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[var(--sky)] bg-white/10 px-3 py-1.5 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {page.title}
          </h1>
          <p className="text-sky-100/60 text-sm">
            Last updated: {new Date(page.lastUpdated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-14 bg-[var(--cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="bg-[var(--sky)]/10 border border-[var(--sky)]/20 rounded-2xl p-5 mb-8">
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{page.intro}</p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {page.sections.map((section) => (
              <div key={section.heading} className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)]">
                <h2 className="text-base font-bold text-[var(--navy)] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {section.heading}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-10 text-center text-sm text-[var(--text-muted)]">
            <p>Questions? Contact us at{' '}
              <a href="mailto:info@abtravels.net" className="text-[var(--sky-dark)] hover:underline">info@abtravels.net</a>
              {' '}or WhatsApp{' '}
              <a href="https://wa.me/919909957177" className="text-[var(--sky-dark)] hover:underline" target="_blank" rel="noopener noreferrer">+91 9909957177</a>
            </p>
            <p className="mt-2">AB Travels · The AB Group · UDYAM-GJ-16-0006896 · Navsari, Gujarat</p>
          </div>
        </div>
      </section>
    </>
  )
}