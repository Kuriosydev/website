'use client';

import { useEffect, useState } from 'react';
import GameCards from '@/components/cards/GameCards';

export default function WhyProdigy() {
  const [cards, setCards] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-report&populate=EducatorsReportPage.list&populate=EducatorsReportPage.card");
        const json = await res.json();

        const pageData = json?.data?.[0]?.EducatorsReportPage || [];

        const prodigyBlock = pageData.find(
          (block) => block.__component === 'shared.prodigy-component'
        );

        if (prodigyBlock) {
          const cards = prodigyBlock.card?.map((c) => ({
            imageSrc: '/images/game_screen1.jpeg', // default image or dynamic if available
            link: '#',
            title: c.title,
            description: '',
            buttonText: c.description || 'Learn More',
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
    <section className="w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-start justify-between mx-auto px-10 md:px-24">

          <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 flex flex-col gap-4 py-10 md:py-0">
            <div className="text-left text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white">
              "{quote.text}"
              <div className="text-left flex font-semibold text-lg items-center justify-center sm:text-lg md:text-xl lg:text-xl xl:text-2xl mt-4">
                <img src={quote.authorIcon} alt="minus" className="w-4 h-0.5" />
                <span className="px-2 text-white">{quote.author}</span>
              </div>
            </div>
          </div>

          <div className="lg:w-8/12 xl:w-8/12 flex flex-col gap-4 py-10">
            <GameCards type={1} data={cards} />
          </div>
        </div>
      </div>
    </section>
  );
}
