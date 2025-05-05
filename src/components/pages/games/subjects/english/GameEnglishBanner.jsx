"use client"
import { useEffect, useState } from 'react';
import ImageBanner from "@/components/banners/ImageBanner";

export default function GameEnglishBanner() {
        const [item, setItem] = useState({
            title: '',
            description: '',
            buttonText: '',
            link: '#'
          });
        
          useEffect(() => {
            async function fetchData() {
              try {
                const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=game-english&populate=GameEnglishPage.banner");
                const data = await response.json();
                console.log(data.data[0],"working")
                const bannerComponent = data.data[0]?.GameEnglishPage[0]?.banner[0];
    
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
    return (
        <ImageBanner
            col={2}
            bgColor={"bg-[#FFCE49]"}
            heading={item.title}
            description={item.description}
            imgsrc="/images/image30.png"
            buttons={[
                {
                    text: "Get Started",
                    source: "/images/Group.png",
                    alt: "Teachers sign up button",
                    className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                },
                {
                    text: "Unlock Language Learning",
                    source: "/images/Group.png",
                    alt: "Teachers sign up button",
                    className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                }
            ]}
        />
    )
}
