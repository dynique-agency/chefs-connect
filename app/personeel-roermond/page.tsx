'use client';

import CityStaffingPage from '@/components/locations/CityStaffingPage';

export default function PersoneelRoermondPage() {
  return (
    <CityStaffingPage
      city="Roermond"
      regionLabel="Roermond en Midden-Limburg"
      heroAccent="in Roermond?"
      heroSubtext="Wij leveren ervaren freelance koks op elk niveau in Roermond, van een gewone drukke dienst tot de piekdagen rond het outletcentrum. Snel geregeld, goed gescreend."
      contextEyebrow="Roermond als horecastad"
      contextHeadingLead="Meer bezoekers dan"
      contextHeadingAccent="je zou verwachten"
      contextParagraphs={[
        'Roermond telt ongeveer 58.000 inwoners, maar wie op een drukke zaterdag door de stad loopt zou dat niet zeggen. Designer Outlet Roermond is een van de grootste outletbestemmingen van Europa en trekt het hele jaar door bezoekers uit Duitsland, België en de rest van Nederland. Voor de horeca in en rond de stad betekent dat een personeelsvraag die ver boven wat een stad van deze omvang normaal zou vragen.',
        'Die drukte beperkt zich niet tot het outletcentrum. Ook de historische binnenstad, met terrassen rond de Munsterkerk en de Markt, merkt de aanloop van dagjesmensen. En wie in het weekend uitwaait naar de Maasplassen vindt er een eigen horecascene rond het water.',
        'Wij zijn actief in Roermond en de bredere regio Midden-Limburg, van Weert tot Echt en Roerdalen.',
      ]}
      whyHeadingLead="Wij sturen mensen die"
      whyHeadingAccent="tegen een piekdag kunnen"
      whyParagraphs={[
        'Onze achtergrond zit in de keuken zelf. Meer dan 30 jaar ervaring als head chef in verschillende concepten, van rustige familiezaken tot bediening onder hoogseizoendruk. Dat betekent dat wij niet alleen een cv beoordelen maar weten wat iemand waard is als het druk wordt.',
        'Een keuken die op een zomerse zaterdag duizenden extra bezoekers vanuit het outletcentrum en de Maasplassen moet bedienen, vraagt iets anders dan een rustige doordeweekse dienst. Dat verschil kennen wij, en daar matchen we op.',
      ]}
      formSubject="Chefs Connect: Aanvraag Keukenpersoneel Roermond"
      formLocation="Personeel Roermond"
      relatedLinks={[
        { href: '/personeel-weert', label: 'Kok inhuren Weert' },
        { href: '/personeel-maastricht', label: 'Kok inhuren Maastricht' },
        { href: '/zoek-personeel', label: "Alle regio's" },
      ]}
    />
  );
}
