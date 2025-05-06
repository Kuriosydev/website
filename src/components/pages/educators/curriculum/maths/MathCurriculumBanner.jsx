"use client"
import { useEffect, useState } from 'react';
import ImageBanner from "@/components/banners/ImageBanner";

const countryDropdown = [
    {
        name: "1",
        value: "1"
    },
    {
        name: "2",
        value: "2"
    },
    {
        name: "3",
        value: "3"
    },
    {
        name: "4",
        value: "4"
    },
    {
        name: "5",
        value: "5"
    },
    {
        name: "6",
        value: "6"
    },
    {
        name: "7",
        value: "7"
    },
    {
        name: "8",
        value: "8"
    }
]

export default function MathCurriculumBanner() {
    const [item, setItem] = useState({
        title: 'Aligned Math Skills',
        description: 'Fully aligned curriculum standards',
      });
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-curriculum-math&populate=EducatorsCurriculumMathPage.BannerSection&populate=EducatorsCurriculumMathPage.BannerSection.backgroundImage");
            const data = await response.json();
           
            const bannerComponent = data.data[0]?.EducatorsCurriculumMathPage[0]?.BannerSection;
            console.log(bannerComponent,"bannerComponent")
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

      const imageSrc = item.backgroundImage  && item.backgroundImage.length > 0
      ? `https://cms.kurixel.com${item.backgroundImage[0].url}`
      : "/images/maths_curr_banner.png"
    return (
        <ImageBanner
            col={2}
            bgColor={"bg-[#FFCE49]"}
            heading={item.title}
            description={item.description}
            imgsrc={imageSrc}
            dropdown={countryDropdown}
            buttontext="View Curriculum"
            link="/educators/curriculum"
        />
    )
}
