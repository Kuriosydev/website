"use client"
import Heading from "@/components/texts/Heading";
import { useEffect, useState } from 'react';

export default function Statistics() {
  const [descriptions, setDescriptions] = useState(["", ""]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=parents&populate=ParentsMetaData&populate=ParentsMetaData.bannerCard");
        const data = await response.json();
        const bannerCards = data.data[0]?.ParentsMetaData[0]?.bannerCard || [];

        // Extract descriptions from bannerCard (fallback to empty string if not found)
        const fetchedDescriptions = [
          bannerCards[0]?.description || "",
          bannerCards[1]?.description || "",
        ];

        setDescriptions(fetchedDescriptions);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }

    fetchData();
  }, []);

  // Static headings
  const headings = ["3x", "91%"];

  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-black">
      <div className="w-full h-full relative overflow-hidden py-14">
        <div className="flex flex-row flex-wrap items-center justify-center">
          {headings.map((heading, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center mx-6 my-2 w-full h-full px-4 py-8 md:w-3/12 text-xl"
            >
              <Heading
                text={heading}
                fontFamily="font-luckiest"
                fontSize="text-6xl md:text-8xl"
                fontWeight="font-normal"
                textAlign="text-center"
                letterSpacing="md:tracking-wider"
                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                customStyle=""
              />
              <div className="text-left font-medium text-lg dark:text-white">
                {descriptions[index]}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center px-10 md:px-0 md:mt-10 dark:text-white">
          <div className="text-left font-medium text-lg">
            **Based on a user experience survey conducted by Kurixel Education.
          </div>
        </div>
      </div>
    </section>
  );
}
