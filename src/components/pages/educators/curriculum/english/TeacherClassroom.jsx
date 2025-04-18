import React from "react";
import Heading from "@/components/texts/Heading";
import YellowButton from "@/components/buttons/YellowButton";
export default function TeacherClassroom() {
  return (
    <section className={`w-full h-auto bg-red relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <Heading
          text="Teachers — Align Prodigy to your classroom lessons"
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[black]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <Heading
          text="With a free teacher account, it’s as easy as ABC!"
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[back]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
            <img
              src="/images/frame.png"
              alt="Kids image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
            <Heading
              text="Connect your classroom in just a few minutes. Log in to Prodigy through Google Classroom, Clever or via email and access powerful teacher tools, right away."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="‍Differentiate for every student. As Prodigy’s adaptive algorithm meets students where they are, you can choose the exact English skills you want them to work on with your Assessments tool."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
                        <Heading
              text="‍‍See student progress instantly. Get actionable insights on how your class is performing through data-driven teacher Reports."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <YellowButton
            text="Create your teacher account"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
