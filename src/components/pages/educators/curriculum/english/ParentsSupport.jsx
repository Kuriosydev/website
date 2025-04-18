import React from "react";
import Heading from "@/components/texts/Heading";
import YellowButton from "@/components/buttons/YellowButton";

export default function ParentsSupport() {
  return (
    <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <Heading
          text="Parents — Stay Connected to Your Child’s Learning"
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[white]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
            <img
              src="/images/image (10).png"
              alt="Kids image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
            <Heading
              text="Kurixel grows with your child. Our adaptive system personalizes each step, helping learners move forward with confidence while you stay in the loop with tools that make it easy to track progress and celebrate milestones."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[white]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="Backed by real curriculum standards"
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[white]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="Built to make growth feel magical"
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[white]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />

            <YellowButton text="Create your parent account" />
          </div>
        </div>
      </div>
    </section>
  );
}
