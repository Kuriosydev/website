import React from "react";
import Heading from "@/components/texts/Heading";

export default function ParentsResearchProdigyEnglish() {
  return (
    <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
            <img
              src="/images/image 10.png"
              alt="Kids image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
            <Heading
              text="Kurixel Language – Where Stories Spark Skills"
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[white]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="Kurixel Language blends trusted learning strategies with playful storytelling to help kids strengthen their reading, comprehension, and vocabulary skills one fun challenge at a time. Built around classroom standards and inspired by the joy of discovery, Kurixel turns reading practice into an exciting adventure. Because when learning feels like a story worth telling, kids stay curious, confident, and motivated to grow."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[white]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
