import { Shield, Headphones, BadgeIndianRupee, Users, MapPin, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { WhyChooseUsItem } from '@/types'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield,
  HeadphonesIcon: Headphones,
  BadgeIndianRupee,
  Users,
  MapPin,
  Star,
}

interface WhyChooseUsSectionProps {
  items: WhyChooseUsItem[]
}

export default function WhyChooseUsSection({ items }: WhyChooseUsSectionProps) {
  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why AB Travels"
          title="Your Journey, Our "
          highlight="Promise"
          description="We're not just a travel agency — we're your neighbours from Navsari who care about every trip you take."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Shield
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-soft)] card-hover group"
              >
                <div className="w-12 h-12 bg-[var(--sky-light)]/40 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--sky)] transition-colors">
                  <Icon size={22} className="text-[var(--sky-dark)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[var(--navy)] text-base mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
