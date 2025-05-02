"use client"
import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";
import { useEffect, useState } from 'react';
const gameFeature1 = [
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Discover a World of Endless Adventures new skills, new quests, nonstop fun",
    description: "filled with new adventures",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Monthly report card",
    description: "Get a detailed, skill-by-skill breakdown delivered straight to your inbox each month.",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Curriculum Progress report",
    description: "Find out which grade-level math skills your child has mastered from their curriculum.",
  },
];



export default function GameFeature() {
  const [item, setItems] = useState({
    title: '',
    description: '',
    card: []
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=games&populate=GamesMetaData&populate=GamesMetaData.BannerSection&populate=GamesMetaData.GamePracticeSection&populate=GamesMetaData.supportSection&populate=GamesMetaData.GameHomeworkSection&populate=GamesMetaData.GameDashboardSection&populate=GamesMetaData.BannerSection.button&populate=GamesMetaData.GamePracticeSection.card&populate=GamesMetaData.supportSection.card&populate=GamesMetaData.GameHomeworkSection.card&populate=GamesMetaData.GameDashboardSection.title&populate=GamesMetaData.GameDashboardSection.list&populate=GamesMetaData.GameDiveDeepSection&populate=GamesMetaData.GameDiveDeepSection.button&populate=GamesMetaData.GameResourceSection&populate=GamesMetaData.GameResourceSection.card");
        const data = await response.json();
        console.log(data.data[0],"working")
        setItems(data.data[0].GamesMetaData[0].GamePracticeSection[0]);
      } catch (error) {
        console.error('Failed to fetch Data', error);
      }
    }

    fetchData();
  }, []);

  const staticImages = [
    "/images/child_progress.jpg",
    "/images/monthly_report.jpg",
    "/images/curriculum_report.jpg"
  ];

const gameFeature2 =
  item.card.length > 0
    ? item.card.map((card, index) => ({
        imgSrc: staticImages[index] || "", // assign static image by index
        heading: card.title,
        description: card.description,
      }))
    : [
        {
          imgSrc: "/images/child_progress.jpg",
          heading: "Discover a World of Endless Adventures new skills, new quests, nonstop fun",
          description: "See instant data on your child's progress, all in one place.",
        },
        {
          imgSrc: "/images/monthly_report.jpg",
          heading: "Monthly report card",
          description: "Get a detailed, skill-by-skill breakdown delivered straight to your inbox each month.",
        },
        {
          imgSrc: "/images/curriculum_report.jpg",
          heading: "Curriculum Progress report",
          description: "Find out which grade-level math skills your child has mastered from their curriculum.",
        },
      ];


  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Heading
            text={item.title}
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
        {item.description}
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 md:px-0 px-10">
          <div className="flex flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-full xl:w-6/12 px-2 sm:px-4 md:px-20 lg:px-20 xl:px-12">
            <VideoPreview
              src="/videos/news_banner_vid_2.mp4"
              controls={false}
              autoPlay={true}
              muted={true}
              loop={true}
              wrapperClass="w-full md:w-full h-full rounded-4xl"
            />
          </div>
          <div className="flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-full xl:w-6/12 px-2 sm:px-4 md:px-20 lg:px-20 xl:px-12 py-0 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            {gameFeature2?.map((gameFeature, index) => (
              <CircularCard key={index} {...gameFeature} textColor="text-black" isRow={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
