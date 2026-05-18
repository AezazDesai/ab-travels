export type PackageCategory = 'domestic' | 'international' | 'umrah' | 'hajj'
export type TransportMode = 'flight' | 'train' | 'both'
export type SortOption = 'default' | 'price-low' | 'price-high' | 'popular' | 'latest'

export interface ChildCharge {
  label: string   // e.g. "0 to 2 Years"
  price: string   // e.g. "₹4,000"
  note?: string   // e.g. "No seat / No meal"
}

export interface TravelPackage {
  id: string
  slug: string
  title: string
  subtitle: string
  category: PackageCategory
  duration: string
  price: string
  originalPrice?: string        // for strikethrough
  priceNote: string
  images: string[]              // multiple images
  videoUrl?: string             // YouTube embed URL
  highlights: string[]
  inclusions: string[]
  exclusions: string[]          // new
  childCharges?: ChildCharge[]  // new
  transport: TransportMode      // new
  description: string
  whatsappNumber: string
  featured: boolean
  badge?: string
  popular?: boolean
  createdAt: string             // for "latest" sort
}

export interface Category {
  id: PackageCategory
  label: string
  description: string
  icon: string
  image: string
  count: number
}

export interface WhyChooseUsItem {
  icon: string
  title: string
  description: string
}