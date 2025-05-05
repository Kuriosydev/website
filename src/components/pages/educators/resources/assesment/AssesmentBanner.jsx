"use client"
import { useEffect, useState } from 'react';
import ImageBanner from "@/components/banners/ImageBanner";

export default function AssesmentBanner() {
    const [item, setItem] = useState({
      title: 'Design lessons your students will love',
      description: 'Bring your curriculum to life. Kurixel keeps learning fun for students while giving you built-in grading and real-time performance insights.',
    });
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-assessment&populate=EducatorAssessmentPage.list&populate=EducatorAssessmentPage.card&populate=EducatorAssessmentPage.banner");
          const data = await response.json();
         
          const bannerComponentTitle = data.data[0]?.EducatorAssessmentPage[0]?.banner[0];
          const bannerComponentSmallTitle = data.data[0]?.EducatorAssessmentPage[0];
          console.log(bannerComponentTitle,"bannerComponentTitle")
          setItem({
            title: bannerComponentTitle?.title || '',
            description: bannerComponentTitle?.description || '',
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
      heading="Design lessons your students will love"
      description="Bring your curriculum to life. Kurixel keeps learning fun for students while giving you built-in grading and real-time performance insights."
      imgsrc="/images/frame1.png"
      buttons={[
        {
          text: "Start free as a teacher",
          source: "/images/Group.png",
          alt: "Get started button",
          className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
        }
      ]}
      secondSubHeading="Sign up and start exploring today!"
    />
  )
}
