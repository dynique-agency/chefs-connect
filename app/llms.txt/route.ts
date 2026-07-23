import { SITE_URL, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export async function GET() {
  const body = `# Chefs Connect

> Freelance horecapersoneel (koks & bediening) en fine-dining catering voor bedrijven en particulieren in Nederland en België.

Chefs Connect koppelt ervaren freelance koks en bedieningsprofessionals aan restaurants, hotels, cateraars en particuliere evenementen. Daarnaast werft Chefs Connect freelancers zelf: koks en bedieningsmedewerkers die via een vast netwerk opdrachten krijgen aangeboden in plaats van los te solliciteren.

## Voor bedrijven (personeel inhuren)
- [Personeel inhuren](${siteUrl('https://chefs-connect.nl/zoek-personeel')}): aanvraagformulier en overzicht van de dienstverlening
- [Horecaspecialist worden](${siteUrl('https://chefs-connect.nl/horecaspecialist')}): voor freelancers die zich bij het netwerk aansluiten
- Stadsgerichte pagina's (personeel-{stad}) voor Maastricht, Eindhoven, Tilburg, Breda, Den Bosch, Nijmegen, Utrecht, Venlo, Helmond, Antwerpen, Hasselt, Gent, Brugge en Brussel

## Voor freelancers (opdrachten vinden)
- Stadsgerichte pagina's voor koks (vacature-kok-{stad}) en bediening (vacature-bediening-{stad}) in dezelfde 14 steden

## Events & catering
- [Evenementen overzicht](${siteUrl('https://chefs-connect.nl/evenementen')}): catering voor bedrijfsfeesten, bruiloften en cateringpartnerschappen met locaties

## Kennisbank
- [Freelance kok worden: zo begin je](${siteUrl('https://chefs-connect.nl/kennisbank/freelance-kok-worden')}): stappenplan voor koks die zzp'er willen worden
- [Freelancen of vast in de horeca](${siteUrl('https://chefs-connect.nl/kennisbank/freelancen-of-vast-in-de-horeca')}): eerlijke vergelijking tussen freelance en vast contract

## Optional
- [Over ons](${siteUrl('https://chefs-connect.nl/over-ons')})
- [Contact](${siteUrl('https://chefs-connect.nl/contact')})
- Actief in Nederland (chefs-connect.nl) en België (chefs-connect.be)
- Volledige sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
