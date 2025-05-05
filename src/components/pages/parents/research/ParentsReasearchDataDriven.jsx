"use client";
import { useEffect, useState } from "react";
import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";

export default function ParentsReasearchDataDriven() {
  const [bannerData, setBannerData] = useState(null);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    async function fetchBannerData() {
      try {
        const res = await fetch(
          "https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=second-research&populate=SecondResearchPage.list&populate=SecondResearchPage.card&populate=SecondResearchPage.banner"
        );
        const json = await res.json();
        const pageSections = json?.data?.[0]?.SecondResearchPage || [];

        const banner = pageSections[4]; // Adjust index as needed
        setBannerData(banner);

        // Extract card data from the same section
        const cards = banner?.card?.map((item, index) => ({
          title: item.title,
          description: item.learnMoreText,
          imageSrc: `/images/blog${index + 1}.png`, // optionally use dynamic images
          link: `/news/${index}`,
        })) || [];

        setCardsData(cards);
      } catch (err) {
        console.error("Error fetching banner data:", err);
      }
    }

    fetchBannerData();
  }, []);

  if (!bannerData) return null;

  return (
    <section className="w-full h-auto bg-[#FFCE49] relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text={bannerData.title}
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-wrap items-start justify-between px-10 sm:px-10 md:px-0 lg:px-24 py-16">
          <GameCards type={3} data={cardsData} />
        </div>
      </div>
    </section>
  );
}
