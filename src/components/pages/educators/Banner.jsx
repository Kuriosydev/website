"use client"
import ImageBanner from "@/components/banners/ImageBanner";
import { useEffect, useState } from 'react';
export default function Banner() {
    const [item, setItem] = useState({
        title: '',
        description: '',
        buttonText: '',
        link: '#'
      });
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators&populate=EducatorsMetaData&populate=EducatorsMetaData.banner.BannerComponent&populate=EducatorsMetaData.banner.BannerComponent.image&populate=EducatorsMetaData.banner.BannerComponent.button&populate=EducatorsMetaData.reviewCardSection.EducatorsCard.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection&populate=EducatorsMetaData.howKurixelWorksSection.card&populate=EducatorsMetaData.howKurixelWorksSection.button&populate=EducatorsMetaData.oneClickLoginSection&populate=EducatorsMetaData.oneClickLoginSection.button&populate=EducatorsMetaData.curriculumSection&populate=EducatorsMetaData.curriculumSection.button&populate=EducatorsMetaData.levelUpSection&populate=EducatorsMetaData.levelUpSection.firstCard&populate=EducatorsMetaData.levelUpSection.secondCard&populate=EducatorsMetaData.prodigySection&populate=EducatorsMetaData.prodigySection.card&populate=EducatorsMetaData.teachersBlogSection&populate=EducatorsMetaData.teachersBlogSection.LearnMore");
            const data = await response.json();
            console.log(data.data[0],"working")
            const bannerComponent = data.data[0]?.EducatorsMetaData[0]?.banner[0]?.BannerComponent[0];

            setItem({
              title: bannerComponent?.title || '',
              description: bannerComponent?.description || '',
              buttonText: bannerComponent?.button?.[0]?.Title || '',
              link: bannerComponent?.button?.[0]?.url || '#'
            });
          } catch (error) {
            console.error('Failed to fetch Data', error);
          }
        }
    
        fetchData();
      }, []);

      const videoSrc = item.image && item.image.length > 0
      ? `https://cms.kurixel.com${item.image[0].url}`
      : "/videos/news_banner_vid_2.mp4"
    return (
        <ImageBanner
            col={2}
            bgColor={"bg-[#FFCE49] dark:bg-[#001032]"}
            heading={item.title}
            description={item.description}
            vidSrc={videoSrc}
            buttontext={item.buttonText}
            link={item.link}
        />

    )
}
