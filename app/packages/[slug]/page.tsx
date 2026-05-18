import { notFound } from 'next/navigation'
import data from '@/data/packages.json'
import { TravelPackage } from '@/types'
import PackageDetailClient from './PackageDetailClient'

const packages = data.packages as TravelPackage[]

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) return {}
  return {
    title: `${pkg.title} — AB Travels, Navsari`,
    description: pkg.description,
  }
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)
  if (!pkg) notFound()
  return <PackageDetailClient pkg={pkg} />
}