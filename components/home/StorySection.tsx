'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StorySection() {
  const [isHovered, setIsHovered] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !paragraph1Ref.current || !paragraph2Ref.current || !paragraph3Ref.current) return;

    // Function to setup text reveal animation
    const setupTextReveal = (element: HTMLElement, color: string = '#FFF') => {
      const text = element.textContent || '';
      const words = text.split(' ');
      element.textContent = '';
      element.style.display = 'flex';
      element.style.flexWrap = 'wrap';
      element.style.columnGap = '0.25em';
      element.style.rowGap = '0.1em';
      
      words.forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.opacity = '0.2';
        span.style.display = 'inline-block';
        span.style.color = color;
        element.appendChild(span);
      });

      const spans = element.querySelectorAll('span');
      
      gsap.fromTo(
        spans,
        { opacity: 0.2 },
        {
          opacity: 1,
          duration: 1,
          stagger: {
            amount: element === titleRef.current ? 0.6 : 1.0,
            ease: 'power2.out',
          },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 0.5,
            markers: false,
          },
        }
      );
    };

    // Apply to all text elements
    setupTextReveal(titleRef.current, '#FFF');
    setupTextReveal(paragraph1Ref.current, '#4B5346');
    setupTextReveal(paragraph2Ref.current, '#4B5346');
    setupTextReveal(paragraph3Ref.current, '#4B5346');

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-6 bg-chefs-black">
      {/* Vertical Lines Background - Magazine Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full relative">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-white"
              style={{
                left: `${(100 / 6) * (i + 1)}%`,
                opacity: 0.05,
              }}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Large Image Left */}
          <ScrollReveal direction="right" delay={0.1}>
            <div
              className="relative w-full aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Restaurant atmosphere"
                fill
                className="object-cover transition-all duration-700 ease-in-out"
                style={{
                  filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Text Right */}
          <div>
            <h2
              ref={titleRef}
              className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
            >
              De Filosofie
            </h2>
            <div className="space-y-6 font-inter text-lg leading-relaxed">
              <p ref={paragraph1Ref}>
                Onze filosofie is gebaseerd op respect voor het ambacht en
                de kunst van gastvrijheid. We begrijpen dat elke chef, elke
                serveerder en elk teamlid uniek is, met eigen passies en
                talenten.
              </p>
              <p ref={paragraph2Ref}>
                Door deze individualiteit te erkennen en te waarderen,
                creëren we partnerships die niet alleen vandaag succesvol
                zijn, maar ook op de lange termijn bloeien.
              </p>
              <p ref={paragraph3Ref}>
                Chefs Connect is meer dan een platform – het is een
                gemeenschap van professionals die streven naar perfectie in
                elke maaltijd, elke service en elke ontmoeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
