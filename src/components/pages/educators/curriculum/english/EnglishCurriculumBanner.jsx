"use client"
import { useEffect, useState } from 'react';
import ImageBanner from "@/components/banners/ImageBanner";

export default function EnglishCurriculumBanner() {
  const [item, setItem] = useState({
    title: 'Kurixel Language Arts – Aligned. Engaging. Always Growing.',
    description: 'Kurixel’s Language Arts world is packed with interactive challenges that build reading, writing, and grammar skills',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-curriculum-english&populate=EducatorsCurriculumEnglishPage&populate=EducatorsCurriculumEnglishPage.BannerSection");
        const data = await response.json();
        const bannerComponent = data.data[0]?.EducatorsCurriculumEnglishPage[0]?.BannerSection;
        setItem({
          title: bannerComponent?.title || '',
          description: bannerComponent?.description || '',
        });
      } catch (error) {
        console.error('Failed to fetch Data', error);
      }
    }

    fetchData();
  }, []);
  return (
    <ImageBanner
      col={2}
      bgColor={"bg-[#FFCE49]"}
      heading={item.title}
      description={item.description}
      imgsrc="/images/image 30.png"
      buttons={[
        {
          text: "Parents, sign up now!",
          source: "/images/Group.png",
          alt: "Teachers sign up button",
          className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
        },
        {
          text: "Teachers, sign up now!",
          source: "/images/Group.png",
          alt: "Learn more button",
          className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
        }
      ]}
    // secondSubHeading="Prodigy English features hundreds of language arts questions, aligned with Common Core State Standards for 1st to 6th grade — with more skills to come!"
    />
  )
}
