import { MetadataRoute } from 'next'
import packages from '@/data/packages.json'

const BASE_URL = 'https://abtravels.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/packages`, priority: 0.9 },
    { url: `${BASE_URL}/domestic`, priority: 0.8 },
    { url: `${BASE_URL}/international`, priority: 0.8 },
    { url: `${BASE_URL}/umrah-hajj`, priority: 0.8 },
    { url: `${BASE_URL}/about`, priority: 0.6 },
    { url: `${BASE_URL}/contact`, priority: 0.7 },
    { url: `${BASE_URL}/legal/terms`, priority: 0.3 },
    { url: `${BASE_URL}/legal/privacy`, priority: 0.3 },
    { url: `${BASE_URL}/legal/refund`, priority: 0.3 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const packagePages = packages.packages.map((pkg) => ({
    url: `${BASE_URL}/packages/${pkg.slug}`,
    lastModified: new Date(pkg.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...packagePages]
}