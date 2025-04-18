"use client";

import { useState, React } from "react";
import Heading from "@/components/texts/Heading";

export default function ViewCurriculum() {
  const grades = Array.from({ length: 8 }, (_, i) => i + 1); // Grade 1 to 8
  const subjects = ["Language", "Reading", "Writing"];

  const options = grades.flatMap((grade) =>
    subjects.map((subject) => `Grade ${grade} ${subject}`)
  );

  const [selected, setSelected] = useState("");

  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
            <Heading
              text="Explore Your Language Arts Adventure"
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[#8F0E00]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="Your students will solve curriculum-aligned Ontario Math Curriculum math problems through Prodigy Math Game’s engaging game-based platform. It provides instant feedback and automatically adapts content to help students overcome trouble spots and build math skills."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
            <img
              src="/images/image 31.png"
              alt="Kids image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full max-w-sm mx-auto mt-10">
              <label
                htmlFor="grade-select"
                className="block mb-2 text-lg font-semibold"
              >
                Select a Grade Subject
              </label>
              <select
                id="grade-select"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  -- Choose an option --
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              
            </div>
        </div>
        <Heading
          text="Master Language Arts Through Play"
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
              src="/images/image (6).png"
              alt="Kids image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
            <Heading
              text="At Kurixel, reading and writing come to life. Learners unlock stories, earn rewards, and level up their skills while they play."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            {/* <Heading
              text="To earn coins, gather items and keep building, players answer skill-building language and reading questions, aligned to the Common Core State Standards."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            /> */}

          </div>
        </div>
      </div>
    </section>
  );
}
