'use client';

import { useEffect, useState } from 'react';
import GameCards from '@/components/cards/GameCards';
import Heading from "@/components/texts/Heading";

export default function WhyProdigy() {
  const [cards, setCards] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-assessment&populate=EducatorAssessmentPage.list&populate=EducatorAssessmentPage.card");
        const json = await res.json();

        const pageData = json?.data?.[0]?.EducatorAssessmentPage || [];

        const prodigyBlock = pageData.find(
          (block) => block.__component === 'shared.prodigy-component'
        );

        if (prodigyBlock) {
          const cards = prodigyBlock.card?.map((c) => ({
            imageSrc: '/images/game_screen1.jpeg', // default image or dynamic if available
            link: '#',
            title: c.title,
            description:  c.description,
            buttonText: 'Learn More',
            buttonLink: '/news',
            isImageButton: false,
          }));

          // Split the quote text by "minus" as per your example
          const [quoteText, , author] = (prodigyBlock.title || '').split('minus');

          setCards(cards);
          setQuote({
            text: quoteText?.trim(),
            author: author?.trim(),
            authorIcon: "/images/white_minus.png",
          });
        }
      } catch (err) {
        console.error("Failed to load data", err);
      }
    }

    fetchData();
  }, []);

  if (!cards.length || !quote) return null;

  return (
    <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row  flex-wrap items-start justify-between mx-auto px-10 md:px-24">
                    <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 md:py-0">
                        <Heading
                            text={quote.text}
                            fontFamily="font-luckiest"
                            fontSize="text-xl sm:text-xl md:text-2xl lg:text-4xl"
                            fontWeight="font-bold"
                            textAlign="text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white dark:text-[#FFCE49]"
                            customStyle=""
                        />
                        <div className="text-left text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white">
                            Our interactive, story-driven games help students build confidence through consistent practice, personalized challenges, and joyful discovery.
                        </div>
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 sm:py-10 md:py-10 lg:py-0 xl:py-0">
                        <GameCards type={1} data={cards} />
                    </div>
                </div>
            </div>
        </section>
  );
}
