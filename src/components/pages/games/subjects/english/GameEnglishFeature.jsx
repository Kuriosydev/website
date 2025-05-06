"use client"
import { useEffect, useState } from "react";
import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";

// Fallback images in case CMS images are not available
const fallbackImages = [
  "/images/4118011.jpg",
  "/images/5484597.jpg",
  "/images/560.jpg",
  "/images/marketplaces.png",
  "/images/chase_goal.jpg",
  "/images/reward.jpg",
];

export default function GameEnglishFeature() {
  const [practiceTitle, setPracticeTitle] = useState("");
  const [practiceDescription, setPracticeDescription] = useState("");
  const [cards, setCards] = useState([]);
  const [centerImage, setCenterImage] = useState("/images/game_screen1.jpeg");

  useEffect(() => {
    fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=game-english&populate=GameEnglishPage&populate=GameEnglishPage.PracticeSection.image&populate=GameEnglishPage.PracticeSection.card.image")
      .then((res) => res.json())
      .then((data) => {
        const section = data?.data?.[0]?.GameEnglishPage?.[0]?.PracticeSection?.[0];
        setPracticeTitle(section?.title || "");
        setPracticeDescription(section?.description || "");
        setCards(section?.card || []);
        
        // Set center image if available in the API response
        if (section?.image && section.image.length > 0) {
          setCenterImage(`https://cms.kurixel.com${section.image[0].url}`);
        }
      })
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  // Create feature arrays with dynamic images from the API
  const gameFeature1 = cards.slice(0, 3).map((card, i) => ({
    imgSrc: card.image && card.image.length > 0 
      ? `https://cms.kurixel.com${card.image[0].url}`
      : fallbackImages[i],
    heading: card.title,
    description: card.description,
  }));

  const gameFeature2 = cards.slice(3).map((card, i) => ({
    imgSrc: card.image && card.image.length > 0 
      ? `https://cms.kurixel.com${card.image[0].url}`
      : fallbackImages[i + 3],
    heading: card.title,
    description: card.description,
  }));

  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Heading
            text={practiceTitle}
            fontFamily="font-luckiest"
            fontSize="text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
            fontWeight="font-normal"
            textAlign="text-center"
            letterSpacing="md:tracking-wider"
            textColor="text-[#8F0E00] dark:text-[#FFCE49]"
            customStyle="py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 dark:text-white">
          {practiceDescription}
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 md:px-0 px-10">
          <div className="flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 px-2 sm:px-4 md:px-20 lg:px-40 xl:px-12 py-0 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            {gameFeature1.map((feature, index) => (
              <CircularCard key={index} {...feature} textColor="text-black" isRow={true} />
            ))}
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-6/12 xl:w-6/12 px-2 sm:px-4 md:px-20 lg:px-40 xl:px-12">
            <img src={centerImage} alt="gameEnglishFeature" className="w-full md:w-full h-full rounded-4xl" />
          </div>
          <div className="flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 px-2 sm:px-4 md:px-20 lg:px-40 xl:px-12 py-0 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            {gameFeature2.map((feature, index) => (
              <CircularCard key={index} {...feature} textColor="text-black" isRow={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}