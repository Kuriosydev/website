import React from "react";
import Heading from "@/components/texts/Heading";
import YellowButton from "@/components/buttons/YellowButton";
import ImageButtons from "@/components/buttons/ImageButtons";

export default function Portal() {
  return (
    <section className={`w-full h-auto bg-[white] relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <Heading
          text="Also included in your portal"
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[black]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <Heading
          text="With Prodigy's free teacher portal, you'll have access to a range of features designed to support your everyday instruction."
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[black]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
            <img
              src="/images/frame (2).png"
              alt="Kids image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Everything You Need, All in One Place
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Simplify your workflow and supercharge classroom engagement
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Progress Reports Made Simple
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Track student growth across skills, lessons, and assignments with clear, real-time data that helps you teach with intention.
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Collaborative Classrooms
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Stay in sync with colleagues and support your learners together.
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Motivational Class Goals
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Set playful, skill-driven challenges that inspire your students to keep learning.
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Connect, Invite & Share
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            Easily link your classroom and invite parents into the journey
            </div>
                        <ImageButtons
                          text="Learn More"
                          source="/images/Group.png"
                          alt="Enter the Game Portal Background"
                          className=" px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                        />
          </div>
        </div>
      </div>
    </section>
  );
}
