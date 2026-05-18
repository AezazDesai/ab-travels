import data from '@/data/packages.json'
import HeroSection from '@/components/sections/HeroSection'
import CategoriesSection from '@/components/sections/CategoriesSection'
import FeaturedPackages from '@/components/sections/FeaturedPackages'
import UmrahHajjBanner from '@/components/sections/UmrahHajjBanner'
import WhyChooseUsSection from '@/components/sections/WhyChooseUs'
import CTASection from '@/components/sections/CTASection'
import { TravelPackage, Category, WhyChooseUsItem } from '@/types'

export default function HomePage() {
  const packages = data.packages as TravelPackage[]
  const categories = data.categories as Category[]
  const whyChooseUs = data.whyChooseUs as WhyChooseUsItem[]
  const featured = packages.filter((p) => p.featured)

  return (
    <>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <FeaturedPackages packages={featured} />
      <UmrahHajjBanner />
      <WhyChooseUsSection items={whyChooseUs} />
      <CTASection />
    </>
  )
}
