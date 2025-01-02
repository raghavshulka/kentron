import { MetadataRoute } from 'next'
    
type ChangeFreq = 'yearly' | 'monthly' | 'weekly' | 'daily' | 'always' | 'hourly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kentron.ai' // Your domain

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/mobile-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ui-ux-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.5,
    },
  ];

  return routes;
}