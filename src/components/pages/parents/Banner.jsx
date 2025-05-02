"use client"
import ImageBanner from "@/components/banners/ImageBanner";
import { useEffect, useState } from 'react';

export default function Banner() {
        const [item, setItem] = useState({
            title: '',
            description: '',
          });
        
          useEffect(() => {
            async function fetchData() {
              try {
                const response = await fetch("http://localhost:1337/api/cms-pages?filters[slug][$eq]=parents&populate=ParentsMetaData&populate=ParentsMetaData.banner&populate=ParentsMetaData.bannerCard&populate=ParentsMetaData.bannerReviewCard&populate=ParentsMetaData.playtimeSection&populate=ParentsMetaData.playtimeSection.ParentsCard&populate=ParentsMetaData.playtimeSection.GooglePlayButton&populate=ParentsMetaData.playtimeSection.ApplePlayButton&populate=ParentsMetaData.learingSection&populate=ParentsMetaData.learingSection.parentsCard&populate=ParentsMetaData.supportSection&populate=ParentsMetaData.supportSection.ParentsSupportCard&populate=ParentsMetaData.supportSection.button&populate=ParentsMetaData.resourcesSection.card&populate=ParentsMetaData.questionSection&populate=ParentsMetaData.questionSection.QuestionsList&populate=ParentsMetaData.questionSection.button");
                const data = await response.json();
                console.log(data.data[0],"working")
                const bannerComponent = data.data[0]?.ParentsMetaData[0]?.banner[0];
    
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
        <>
            <ImageBanner
                col={1}
                bgColor={"bg-[#FFCE49] dark:bg-[#001032]"}
                description={item.description}
                heading={item.title}
            />
        </>
    )
}
