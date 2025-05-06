"use client"
import { useEffect, useState } from 'react';
import ImageBanner from "@/components/banners/ImageBanner";

export default function AssesmentBanner() {
  const [item, setItem] = useState({
    title: 'Uncover Learning Gaps ',
    description: 'Instantly see which skills they’ve mastered, where they’re still growing, and which topics may need a little extra support.',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-report&populate=EducatorsReportPage&populate=EducatorsReportPage.banner&populate=EducatorsReportPage&populate=EducatorsReportPage.banner.image");
        const data = await response.json();
       
        const bannerComponentTitle = data.data[0]?.EducatorsReportPage[0]?.banner[0];
        const bannerComponentSmallTitle = data.data[0]?.EducatorsReportPage[0];
        console.log(bannerComponentTitle,"bannerComponentTitle")
        setItem({
          title: bannerComponentTitle?.smallTitle || '',
          description: bannerComponentSmallTitle?.smallTitle || '',
        });
      } catch (error) {
        console.error('Failed to fetch Data', error);
      }
    }

    fetchData();
  }, []);

  const imageSrc = item.image  && item.image.length > 0
  ? `https://cms.kurixel.com${item.image[0].url}`
  : "/images/frame1.png"

  return (
    <ImageBanner
      col={2}
      bgColor={"bg-[#FFCE49]"}
      heading={item.title}
      description={item.description}
      imgsrc={imageSrc}
      buttons={[
        {
          text: "Start free as a teacher",
          source: "/images/Group.png",
          alt: "Get started button",
          className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
        }
      ]}
      textAfterButton="Sign up and start exploring today!"
    />
  )
}
