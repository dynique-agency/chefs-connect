'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Quote, ChefHat, Users, Calendar } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  age: string;
  role: string;
  specialty: string;
  quote: string;
  story: string[];
  image: string;
  imageAvailable: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Gert-Jan',
    age: '38 jaar',
    role: 'Oprichter',
    specialty: 'Chef & Patissier',
    quote: 'Hard werken. Eerlijk ondernemen. Altijd leveren.',
    story: [
      'Mijn naam is Gert-Jan, 38 jaar en geboren in Hoek van Holland.',
      'Met meer dan 20 jaar ervaring in de horeca is gastronomie voor mij nooit zomaar werk geweest — het is een levensstijl.',
      'Als jong mannetje van 13 liep ik al bij een bevriende patisserie mee op de zaterdagen voor de voetbal.',
      'Na het afronden van de koksopleiding begon mijn carrière als patissier bij het prestigieuze Kurhaus* in Scheveningen. Hier werd de basis gelegd voor mijn passie voor kwaliteit, discipline en verfijning.',
      'Vervolgens zette ik mijn carrière voort in Amsterdam, waar ik de kans kreeg om te werken bij toonaangevende restaurants zoals Ron Blaauw en Restaurant Moon.',
      'Deze periode heeft mijn visie op gastvrijheid en topgastronomie sterk gevormd.',
      'In 2018 koos ik bewust voor het freelance chef-bestaan. Die weg leidde mij naar Limburg — een regio waar de liefde voor gastronomie diepgeworteld is.',
      'Ik werkte hier onder andere bij La Butte aux Bois en Restaurant NOON, waar ik mijn ervaring verder kon verdiepen.',
      'In 2024 zette ik samen met mijn compagnon Mitchell de volgende stap met de oprichting van ChefsConnect.',
      'Wat begon als een netwerk in Limburg groeide al snel uit tot een organisatie die actief is in heel Nederland en België.'
    ],
    image: '/about-team.png',
    imageAvailable: false
  },
  {
    id: 2,
    name: 'Mitchell',
    age: '31 jaar',
    role: 'Oprichter',
    specialty: 'Sterrenzaken & Hospitality',
    quote: 'Geen standaard bemiddeling, maar een premium aanpak.',
    story: [
      'Ik ben Mitchell Deneke, 31 jaar en oprichter van ChefsConnect.',
      'Mijn carrière begon in de keuken, waar ik jarenlang heb gewerkt in toonaangevende zaken zoals Beluga Loves You, De Leuf, Château Neercanne, Harry\'s en La Butte aux Bois.',
      'In deze omgevingen leerde ik niet alleen de technische kant van het vak, maar vooral wat discipline, structuur en constante kwaliteit betekenen op het hoogste niveau van de gastronomie.',
      'Naast mijn werk in sterrenzaken heb ik ervaring opgedaan als privéchef in Oostenrijk, waar exclusiviteit, vertrouwen en persoonlijke service centraal stonden.',
      'Die periode heeft mijn kijk op hospitality verdiept en mij laten inzien hoe belangrijk het is om met de juiste mensen te werken.',
      'ChefsConnect is ontstaan vanuit mijn eigen ervaringen in de horeca. Ik heb zelf gezien hoe uitdagend het kan zijn om sterke, betrouwbare chefs te vinden die écht passen binnen een team.',
      'Daarom bouw ik vandaag aan een netwerk dat anders werkt: persoonlijk, direct en gefocust op kwaliteit.',
      'Een premium aanpak waarbij chefs en horecazaken kunnen rekenen op rust, professionaliteit en mensen die precies weten wat er moet gebeuren.'
    ],
    image: '/about-team.png',
    imageAvailable: false
  },
  {
    id: 3,
    name: 'Marcel',
    age: '23 jaar',
    role: 'Horeca Planner',
    specialty: 'Organisatie & Planning',
    quote: 'Met de juiste planning ontstaat ruimte om het verschil te maken.',
    story: [
      'Mijn naam is Marcel, ik ben 23 jaar en geboren in Poznań, Polen.',
      'Op zesjarige leeftijd verhuisde ik naar Belgisch Limburg, waar ik op 15-jarige leeftijd mijn eerste stappen zette in de horeca.',
      'Sindsdien heeft deze sector mijn professionele ontwikkeling volledig gevormd.',
      'Mijn carrière begon in de afwas, in een periode waarin ik werk combineerde met voetbal op hoog niveau.',
      'Die combinatie leerde mij al vroeg discipline, structuur en doorzettingsvermogen — eigenschappen die vandaag nog steeds de basis vormen van mijn manier van werken.',
      'Door de jaren heen groeide ik stap voor stap door: van afwas naar bediening, van ontbijtkeuken naar fulltime service.',
      'Later bekleedde ik functies als assistent maître en uiteindelijk assistent banqueting manager bij La Butte aux Bois.',
      'In die rol ontwikkelde ik niet alleen leidinggevende vaardigheden, maar ook een sterk organisatorisch inzicht en het vermogen om onder druk rust en overzicht te bewaren.',
      'Als Horeca Planner ligt mijn kracht in structuur, planning en het creëren van rust binnen dynamische omgevingen.',
      'Voor mij moet het totaalplaatje kloppen: een fantastische gastbeleving, een professioneel team en een organisatie die efficiënt functioneert.'
    ],
    image: '/about-team.png',
    imageAvailable: false
  }
];

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Optimized scroll-based effects
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  // Subtle parallax - reduced for performance
  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

  return (
    <div ref={cardRef} className="relative">
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ width: progressWidth }}
        className="absolute -top-12 left-0 h-0.5 bg-gradient-to-r from-gold to-gold/30"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start ${
          !isEven ? 'md:grid-flow-dense' : ''
        }`}
      >
        {/* Image Section with Parallax */}
        <motion.div
          ref={imageRef}
          className={`${!isEven ? 'md:col-start-2' : ''} relative group sticky top-24`}
        >
          {/* Number Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
            className="absolute -top-6 -left-6 z-10 w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-xl"
          >
            <span className="text-2xl font-playfair text-brown font-bold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </motion.div>

          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cream via-white to-gold/10 border-2 border-brown/10 shadow-2xl group">
            {member.imageAvailable ? (
              <motion.div style={{ y: imageY }} className="w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </motion.div>
            ) : (
              <>
                {/* Static gradient background - optimized */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-gold/5" />

                {/* Premium placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12">
                  {/* Main initial circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, type: 'spring', bounce: 0.4 }}
                    className="relative mb-6 md:mb-8"
                  >
                    {/* Main circle */}
                    <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-gold/40 bg-gradient-to-br from-gold/10 to-transparent flex items-center justify-center shadow-xl">
                      <span className="text-5xl md:text-7xl font-playfair text-gold/70 font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </motion.div>

                  {/* Text with better styling */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                  >
                    <p className="text-brown/50 text-xs md:text-sm font-inter uppercase tracking-[0.2em]">
                      Foto volgt binnenkort
                    </p>
                  </motion.div>
                </div>
              </>
            )}
            
            {/* Animated corner accents */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-gold/50"
            />
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-gold/50"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className={`${!isEven ? 'md:col-start-1 md:row-start-1' : ''} space-y-8`}>
          {/* Header */}
          <div className="space-y-4">
            {/* Name - optimized */}
            <motion.h3
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair text-5xl md:text-6xl lg:text-7xl leading-none text-brown"
            >
              {member.name}
            </motion.h3>
            
            {/* Role & Specialty Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm font-inter uppercase tracking-wider">
                <Users className="w-4 h-4" />
                {member.role}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brown/5 border border-brown/20 text-brown text-sm font-inter uppercase tracking-wider">
                <ChefHat className="w-4 h-4" />
                {member.specialty}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cream border border-brown/10 text-brown/60 text-sm font-inter">
                <Calendar className="w-4 h-4" />
                {member.age}
              </span>
            </motion.div>
          </div>

          {/* Story - Optimized reveals */}
          <div className="space-y-5">
            {member.story.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + idx * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-brown/80 leading-loose text-base md:text-lg relative pl-4 border-l border-transparent hover:border-gold/30 transition-colors duration-300"
                style={{ wordSpacing: '0.05em' }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Quote - Clean & Professional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative my-10 py-8 px-6 md:px-10 bg-gold/5 border-l-4 border-gold"
          >
            {/* Subtle opening quote */}
            <Quote className="absolute top-6 left-6 w-8 h-8 text-gold/20" strokeWidth={2} />

            {/* Quote content */}
            <div className="relative pl-8">
              <div className="text-xs text-gold/80 font-inter uppercase tracking-wider mb-3">
                Motto
              </div>
              <p className="font-playfair text-xl md:text-2xl text-brown italic leading-relaxed">
                {member.quote}
              </p>
            </div>
          </motion.div>

          {/* Signature with draw effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="pt-8 border-t border-brown/10"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="font-playfair text-3xl text-brown/30 italic"
            >
              — {member.name}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Connecting line between sections */}
      {index < teamMembers.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block absolute left-1/2 -bottom-20 w-px h-40 bg-gradient-to-b from-gold/50 to-transparent origin-top"
        />
      )}
    </div>
  );
}

export default function TeamStack() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Static background elements - optimized */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-brown/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header with enhanced animations */}
      <div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="inline-block px-6 py-2 bg-gold/10 border border-gold/30 text-gold text-sm uppercase tracking-widest font-inter shadow-lg"
          >
            Het Team
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-brown"
          >
            Ervaring die <span className="text-gold italic">spreekt</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-brown/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Elk verhaal uniek. Elke achtergrond waardevol. Samen één missie: 
            de horeca naar een hoger niveau tillen.
          </motion.p>
        </motion.div>
      </div>

      {/* Team Members with storytelling spacing */}
      <div className="max-w-7xl mx-auto px-6 space-y-40 md:space-y-48 relative z-10">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.id} member={member} index={index} />
        ))}
      </div>

      {/* Final decorative element */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md mx-auto mt-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
      />
    </section>
  );
}
