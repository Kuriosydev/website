"use client";
import ArrowButton from "@/components/buttons/ArrowButton";
import ImageButtons from "@/components/buttons/ImageButtons";
import CenterSlickSlider from "@/components/sliders/CenterSlickSlider";
import Heading from "@/components/texts/Heading";
import { useRef } from "react";

const buttons = ['Epic Worlds', 'Creative Quests', 'Multiplayer Fun', 'Learning Disguised as Fun'];

export default function GameInfo() {
   const sliderRef = useRef(null);

   const next = () => sliderRef.current?.slickNext();
   const prev = () => sliderRef.current?.slickPrev();

   return (
      <section className="w-full h-auto mt-8 bg-[#FFCE49]">
         {/* Decorations */}
         <div className="flex flex-row justify-between w-full absolute -mt-20">
            <img src="/images/game_sky_left.png" className="h-36 md:h-60 sm:h-20 w-auto" />
            <img src="/images/game_sky_right.png" className="h-36 md:h-60 sm:h-20 w-auto" />
         </div>

         {/* Heading */}
         <div className="flex flex-col mt-2 items-center justify-center w-full h-full">
            <Heading
               text="The Ultimate Learning Adventure"
               fontFamily="font-luckiest"
               fontSize="text-5xl md:text-7xl"
               fontWeight="font-bold"
               textAlign="text-center"
               letterSpacing="md:tracking-wider"
               textColor="text-[#8F0E00]"
               customStyle="mt-10 px-4 md:px-64"
            />
            <div className="font-bold text-base md:text-2xl md:leading-14">The Ultimate Learning Adventure</div>

            <div className="flex flex-col md:flex-row items-center justify-center mt-4 ">
               {buttons.map((button, index) => (
                  <ImageButtons
                     key={index}
                     text={button}
                     source="/images/Group.png"
                     alt={button}
                     className="my-2 md:mr-8 px-6 py-2 md:px-8 md:py-5"
                     textSize="text-base"
                  />
               ))}
               <ArrowButton direction="left" className="ml-4 hidden md:inline-block " onClick={prev} />
               <ArrowButton direction="right" className="ml-4 hidden md:inline-block " onClick={next} />
            </div>
            <div className="flex flex-row md:hidden items-center justify-center mt-12">
               <ArrowButton direction="left" className="ml-4" onClick={prev} />
               <ArrowButton direction="right" className="ml-4" onClick={next} />
            </div>
         </div>

         {/* Subtext */}
         <div className="font-medium text-base md:text-2xl items-center justify-center md:items-start md:justify-start md:leading-14 mt-4 px-6 md:px-56">
            Explore futuristic cities and enchanted forests.
         </div>

         {/* Slick Carousel */}
         <div className="flex flex-col items-center justify-center mt-4 md:mt-16 pb-4 md:pb-12 z-50">
            <CenterSlickSlider sliderRef={sliderRef} />

            <div className="absolute w-full h-auto items-center justify-center z-10 mt-24 md:-mt-20">
               <img src="/images/game_backgroung.png" alt="Game Screenshot Background" className="w-full h-full object-cover" />
            </div>
         </div>

      </section>
   );
}
