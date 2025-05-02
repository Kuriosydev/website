"use client"
import { useEffect, useState } from "react";
import ImageButtons from "@/components/buttons/ImageButtons";
import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";

export default function ProdigyWorld() {
  const [sectionData, setSectionData] = useState({
    title: '',
    description: '',
    buttonText: ''
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=games&populate=GamesMetaData.GameDiveDeepSection.button");
        const data = await response.json();

        const diveDeep = data.data[0]?.GamesMetaData[0]?.GameDiveDeepSection[0];
        const button = diveDeep?.button?.[0]?.Title || "";

        setSectionData({
          title: diveDeep?.title || '',
          description: diveDeep?.description || '',
          buttonText: button
        });
      } catch (error) {
        console.error("Error fetching GameDiveDeepSection data", error);
      }
    }

    fetchData();
  }, []);

  const listData = sectionData.description
    ? sectionData.description.split("\n").map(text => ({ text }))
    : [];

  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-black">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-start justify-between gap-1 sm:gap-1 md:gap-2 lg:gap-10 xl:gap-14">
          <div className="w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 flex flex-col px-6 sm:px-8 md:px-10 lg:px-0 xl:px-0 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 -ml-0 sm:-ml-0 md:ml-0 lg:-ml-40 xl:-ml-40">
            <VideoPreview
              src="/videos/news_banner_vid_2.mp4"
              controls={false}
              autoPlay={true}
              muted={true}
              loop={true}
              wrapperClass="w-full h-full rounded-4xl"
            />
          </div>

          <div className="w-full sm:w-full md:w-full lg:w-7/12 xl:w-7/12 flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
            <Heading
              text={sectionData.title}
              fontFamily="font-luckiest"
              fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
              fontWeight="font-normal"
              textAlign="text-left"
              letterSpacing="tracking-normal sm:tracking-normal md:tracking-wide lg:tracking-wider"
              textColor="text-[#8F0E00] dark:text-[#FFCE49]"
              customStyle="py-4 sm:py-5 md:py-6 lg:py-0 xl:py-0 px-4 sm:px-10 md:px-20 lg:px-0"
            />

            <div className="font-medium text-left text-base md:text-lg py-2 sm:py-2 md:py-2 lg:py-0 xl:py-0 px-10 sm:px-10 md:px-20 lg:px-0">
              <BulletList
                lists={listData}
                bullet={true}
                isFooter={false}
                isLink={false}
                textClasses="font-semibold text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl"
                liClass="py-1"
              />
            </div>

            <div className="w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 text-center sm:text-center md:text-center lg:text-left xl:text-left">
              <ImageButtons
                text={sectionData.buttonText}
                source="/images/Group.png"
                alt="Enter the Game Portal Background"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
