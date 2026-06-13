import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdate = new Date().toISOString().split('T')[0];

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
    {
      url: 'https://chefs-connect.nl/personeel-maastricht',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://chefs-connect.nl/personeel-eindhoven',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://chefs-connect.nl/personeel-tilburg',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://chefs-connect.nl/personeel-breda',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://chefs-connect.nl/personeel-den-bosch',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://chefs-connect.nl/personeel-nijmegen',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://chefs-connect.nl/maastricht',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://chefs-connect.nl/catering-bedrijfsfeest',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://chefs-connect.nl/catering-bruiloft',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://chefs-connect.nl/cateringpartner',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://chefs-connect.nl/kennisbank',
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://chefs-connect.nl/kennisbank/freelance-kok-worden',
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
