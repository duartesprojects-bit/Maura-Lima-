import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/salon-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mauralima.com.br';

  const serviceUrls = SERVICES.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...serviceUrls,
  ];
}
