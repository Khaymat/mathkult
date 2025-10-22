import { MetadataRoute } from 'next'
import { getAllKonsep } from '@/lib/konsep'
import { getAllPraktekData } from '@/lib/praktek-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mathkult.com' // Replace with your actual domain

  const konsepUrls = (await getAllKonsep()).map(konsep => ({
    url: `${baseUrl}/konsep/${konsep.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }));

  const praktekUrls = getAllPraktekData().map(praktek => ({
    url: `${baseUrl}/praktek/${praktek.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/konsep`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/praktek`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.9,
    },
  ];

  return [...staticUrls, ...konsepUrls, ...praktekUrls];
}
