import { MetadataRoute } from 'next'

export function GET(): MetadataRoute.Sitemap {
  // Return your sitemap data here
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
    },
    // Add more URLs as needed
  ]
}