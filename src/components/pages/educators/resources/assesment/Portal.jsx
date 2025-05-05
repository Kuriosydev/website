"use client"; // If you're using Next.js App Router

import { useEffect, useState } from "react";
import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";
import axios from "axios";

export default function Portal() {
  const [portalData, setPortalData] = useState({
    title: "",
    description: "",
    list: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-assessment&populate=EducatorAssessmentPage.list&populate=EducatorAssessmentPage.card"
        );

        const pageData = res.data?.data?.[0]?.EducatorAssessmentPage || [];

        const portalSection = pageData.find(
          (section) => section.__component === "shared.educators-assissments-portal-section"
        );

        if (portalSection) {
          const { title, description, list } = portalSection;
          setPortalData({
            title: title || "",
            description: description || "",
            list: list || [],
          });
        }
      } catch (error) {
        console.error("Failed to fetch portal data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        {portalData.title && (
          <Heading
            text={portalData.title}
            fontFamily="font-luckiest"
            fontSize="text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
            fontWeight="font-normal"
            textAlign="text-center"
            letterSpacing="md:tracking-wider"
            textColor="text-[#8F0E00] dark:text-[#FFCE49]"
            customStyle="py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
          />
        )}
        {portalData.description && (
          <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 dark:text-white">
            {portalData.description}
          </div>
        )}
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <img src="/images/group257.png" alt="creative gameplay image" className="w-full h-full object-contain" />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            {portalData.list.map((item, index) => (
              <CircularCard
                key={index}
                heading={item.title}
                description={item.description}
                imgSrc="/images/Ellipse.png"
                textColor="text-black"
                isRow={true}
                image={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
