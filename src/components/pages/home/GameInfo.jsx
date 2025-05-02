"use client";
import ArrowButton from "@/components/buttons/ArrowButton";
import ImageButtons from "@/components/buttons/ImageButtons";
import CenterSlickSlider from "@/components/sliders/CenterSlickSlider";
import Heading from "@/components/texts/Heading";
import { useRef } from "react";
import { useEffect, useState } from 'react';

const buttons = ['Epic Worlds', 'Creative Quests', 'Multiplayer Fun', 'Learning Disguised as Fun'];

export default function GameInfo() {
   const sliderRef = useRef(null);

   const next = () => sliderRef.current?.slickNext();
   const prev = () => sliderRef.current?.slickPrev();
   const [bannerData, setBannerData] = useState({
      title: '',
      secondary_header: '',
      slider_header: '',
    });
  
    useEffect(() => {
      async function fetchBannerData() {
        try {
          const response = await fetch('https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=home&filters[slug][$eq]=footer&populate=HomeMetaData.banner.banner.button&populate=HomeMetaData.playAnyWhereSection.content_left_card_1&populate=HomeMetaData.playAnyWhereSection.content_left_card_2&populate=HomeMetaData.playAnyWhereSection.content_left_card_3&populate=HomeMetaData.playAnyWhereSection.DownloadNow&populate=HomeMetaData.playAnyWhereSection.AppStore&populate=HomeMetaData.playAnyWhereSection.GoogleStore&populate=HomeMetaData.playAnyWhereSection.app_preview_image&populate=HomeMetaData.adventureSection&populate=HomeMetaData.adventureSection.wooden_button&populate=HomeMetaData.adventureSection.slider_button&populate=HomeMetaData.updateAndEventsSection&populate=HomeMetaData.updateAndEventsSection.EventsCard&populate=HomeMetaData.contactUsSection&populate=HomeMetaData.contactUsSection.ContactUsList&populate=HomeMetaData.contactUsSection.ContactUsList&filters[slug][$eq]=footer&populate=Footer&populate=Footer.quick_links&populate=Footer.quick_links_support_anchor&populate=Footer.social_media_footer_links');
          const data = await response.json();
          console.log(data.data[1].HomeMetaData[0].playAnyWhereSection[0].content_left_card_1[0].content_left_title,"data")
          setBannerData(data.data[1].HomeMetaData[0].adventureSection[0]);
        } catch (error) {
          console.error('Failed to fetch banner data:', error);
        }
      }
  
      fetchBannerData();
    }, []);
   

   return (
      <section className="w-full h-auto bg-[#FFCE49] relative overflow-hidden dark:bg-[#212121]">
         {/* Decorations */}
         <div className="flex flex-row justify-between w-full absolute -top-10 sm:-top-6 md:-top-20 left-0 right-0 z-10 dark:hidden">
            <img src="/images/game_sky_left.png" alt="Game Sky Left" className="h-20 sm:h-24 md:h-36 lg:h-44 xl:h-60 w-auto object-contain" />
            <img src="/images/game_sky_right.png" alt="Game Sky Right" className="h-20 sm:h-24 md:h-36 lg:h-44 xl:h-60 w-auto object-contain" />
         </div>

         {/* Heading */}
         <div className="flex flex-col mt-2 items-center justify-center w-full h-full z-20 relative">
            <Heading
               text={bannerData.title}
               fontFamily="font-luckiest"
               fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
               fontWeight="font-bold"
               textAlign="text-center"
               letterSpacing="md:tracking-wider"
               textColor="text-[#8F0E00] dark:text-[#FFCE49]"
               customStyle="mt-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64"
            />
            <div className="font-bold text-sm sm:text-base md:text-xl leading-snug sm:leading-normal"></div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center mt-6 sm:mt-8 gap-2 sm:gap-4 px-2 sm:px-4">
               {buttons.map((button, index) => (
                  <ImageButtons
                     key={index}
                     text={button}
                     source="/images/Group.png"
                     alt={button}
                     className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-5 lg:px-9 lg:py-6 xl:px-10 xl:py-7"
                     textSize="text-sm sm:text-base"
                  />
               ))}
               <ArrowButton direction="left" className="ml-2 hidden md:inline-block" onClick={prev} />
               <ArrowButton direction="right" className="ml-2 hidden md:inline-block" onClick={next} />
            </div>

            {/* Arrows for small devices */}
            <div className="flex flex-row md:hidden items-center justify-center mt-8">
               <ArrowButton direction="left" className="ml-2" onClick={prev} />
               <ArrowButton direction="right" className="ml-2" onClick={next} />
            </div>
         </div>

         {/* Subtext */}
         <div className="font-medium dark:text-white text-sm sm:text-base md:text-xl lg:text-2xl text-center sm:text-left mt-4 px-4 sm:px-6 md:px-16 lg:px-40 xl:px-56">
         {bannerData.secondary_header}
         </div>

         {/* Slick Carousel */}
         <div className="relative z-20 flex flex-col items-center justify-center mt-6 sm:mt-10 md:mt-16 pb-6 md:pb-12">
            <CenterSlickSlider sliderRef={sliderRef} />
         </div>

         {/* Background Image Behind Carousel */}
         <div className="absolute inset-x-0 bottom-0 w-full z-10 dark:hidden">
            <img
               src="/images/game_backgroung.png"
               alt="Game Screenshot Background"
               className="w-full object-cover aspect-[16/9] sm:aspect-[21/9] lg:aspect-[32/9]"
            />
         </div>
      </section>
   );
}
