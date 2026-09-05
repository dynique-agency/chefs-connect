'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelOssPage() {
  return (
    <CityStaffingPage
      city="Oss"
      regionLabel="Oss en Noordoost-Brabant"
      heroAccent="in Oss?"
      heroSubtext="Wij verbinden je met ervaren freelance koks op elk niveau. Snel geregeld, goed gescreend. Zodat jij je keuken kunt draaien zoals het hoort."
      contextEyebrow="Oss als horecastad"
      contextHeadingLead="Een nuchtere stad"
      contextHeadingAccent="die hard werkt"
      contextParagraphs={[
        'Oss is een stevige Brabantse stad van zo’n 92.000 inwoners, met een geschiedenis die nauw verweven is met Organon. Het bedrijf zette Oss decennia geleden op de kaart als vestigingsplaats voor de farmaceutische en biotechnologische industrie, en die achtergrond is de stad nooit meer kwijtgeraakt. Oss is eerder een werkende stad dan een toeristische bestemming, met een horeca die vooral draait op inwoners en zakelijke bezoekers.',
        'Die combinatie zorgt voor een gevarieerde vraag. De wekelijkse markt in Oss geldt van oudsher als een van de grotere van Nederland en trekt bezoekers uit de wijde omgeving, terwijl bedrijven in de life sciences en logistiek regelmatig zakelijke lunches, recepties en diners organiseren. Een goede kok in Oss is dan ook breed inzetbaar: net zo goed thuis in gewoon goed eten voor een volle zaak als in representatief werk voor een zakelijk gezelschap.',
        'Wij zijn actief in Oss en plaatsen ook in Uden, Veghel en de bredere regio Noordoost-Brabant, tot aan Den Bosch.',
      ]}
      whyHeadingLead="Wij verbinden je met mensen"
      whyHeadingAccent="die het aankunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het aankomt op de service.',
        'Een zakelijke bijeenkomst bij een bedrijf in Oss vraagt iets anders dan een drukke zaterdag in een buurtrestaurant of een kraam op de markt. Dat verschil kennen wij, en daar matchen we op. Niet wie toevallig beschikbaar is, maar wie er echt bij past.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Oss"
      formLocation="Personeel Oss"
      relatedLinks={[
        { href: '/personeel-den-bosch', label: 'Kok verbinden Den Bosch' },
        { href: '/personeel-nijmegen', label: 'Kok verbinden Nijmegen' },
        { href: '/personeel-tilburg', label: 'Kok verbinden Tilburg' },
        { href: '/zoek-personeel', label: 'Alle regio’s' },
      ]}
      faq={[
        { question: 'Hoe snel kan Chefs Connect een kok voorstellen in Oss?', answer: 'In de meeste gevallen kunnen wij binnen 24 tot 48 uur een passende freelance kok voorstellen voor locaties in Oss en de regio Noordoost-Brabant.' },
        { question: 'Welke koks kunnen jullie voorstellen in Oss?', answer: 'Wij bemiddelen head chefs, plaatsvervangend keukenchefs, zelfstandig werkende koks en complete keukenbrigades voor restaurants, hotels en evenementenlocaties in Oss.' },
        { question: 'Is Chefs Connect ook actief buiten Oss?', answer: 'Ja, wij plaatsen ook in Uden, Veghel en de bredere regio Noordoost-Brabant, tot aan Den Bosch.' },
      ]}
    />
  );
}
