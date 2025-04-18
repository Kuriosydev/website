import React from 'react'
import Heading from "@/components/texts/Heading";
import YellowButton from "@/components/buttons/YellowButton";

export default function GameEnglishDashboard() {
  return (
      <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden`}>
        <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
          <Heading
            text="One dashboard. Two subjects."
            fontFamily="font-luckiest"
            fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
            fontWeight="font-bold"
            textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
            textColor="text-[white]"
            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
          />
          <div className="flex text-[white] flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
          Unlock a universe of learning with a single Kurixel dashboard.
        </div>
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">

            <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
              <Heading
                text="Prodigy Math"
                fontFamily="font-luckiest"
                fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
                fontWeight="font-bold"
                textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                textColor="text-[white]"
                customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
              />
              <Heading
                text="Epic adventures meet math practice in an adaptive math game for grades 1 to 8! With the help of their wizard avatars and exciting pets, students must complete quests, win math battles and work to free their world from the Puppetmaster's control — all while practicing over 1,500 math skills."
                fontFamily="font-luckiest"
                fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
                fontWeight="font-bold"
                textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                textColor="text-[white]"
                customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
              />
  
              <YellowButton text="Sign up Now" />
            </div>
            <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
              <img
                src="/images/Rectangle 57.png"
                alt="Kids image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
