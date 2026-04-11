import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdate = '2025-04-06';

  return [
    {
      url: 'https://chefs-connect.nl',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://chefs-connect.nl/zoek-personeel',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://chefs-connect.nl/horecaspecialist',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://chefs-connect.nl/evenementen',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://chefs-connect.nl/over-ons',
      lastModified: lastUpdate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://chefs-connect.nl/contact',
      lastModified: lastUpdate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
