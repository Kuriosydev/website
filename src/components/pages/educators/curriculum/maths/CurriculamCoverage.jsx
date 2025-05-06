"use client"
import { useEffect, useState } from 'react';
import ImageButtons from "@/components/buttons/ImageButtons";
import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";

const gameFeature2 = [
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Students",
        description: "master key math concepts.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Teachers",
        description: "can track progress and ensure curriculum alignment.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Parents",
        description: "see real growth.",
    },
];

export default function CurriculamCoverage() {
          const [item, setItem] = useState({
              description: 'Smart, Adaptive Learning Meets Creative Gameplay',
              list: [],
            });
          
            useEffect(() => {
              async function fetchData() {
                try {
                  const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-curriculum-math&populate=EducatorsCurriculumMathPage&populate=EducatorsCurriculumMathPage.list&populate=EducatorsCurriculumMathPage.image");
                  const data = await response.json();
                 
                  const bannerComponent = data.data[0]?.EducatorsCurriculumMathPage[1];
                  console.log(bannerComponent.list,"main")
                  setItem({
                    description: bannerComponent?.description || '',
                    list: bannerComponent?.list?.map(item => ({ 
                        imgSrc: "/images/Ellipse.png",
                        heading: item.title,
                        description: item.description

                     })) || []
                  });
                } catch (error) {
                  console.error('Failed to fetch Data', error);
                }
              }
          
              fetchData();
            }, []);

            const imageSrc = item.image  && item.image.length > 0
            ? `https://cms.kurixel.com${item.image[0].url}`
            : "/images/creativeGameplay.png"
const gameFeature2 = [
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Students",
        description: "master key math concepts.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Teachers",
        description: "can track progress and ensure curriculum alignment.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Parents",
        description: "see real growth.",
    },
];
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
                <Heading
                    text={item.description}
                    fontFamily="font-luckiest"
                    fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                    fontWeight="font-bold"
                    textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                />
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2  py-4 sm:py-4 md:py-8">
                        <img src={imageSrc} alt="creative gameplay image" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2  py-4 sm:py-4 md:py-8">
                        {item.list?.map((gameFeature, index) => (
                            <CircularCard key={index} {...gameFeature} textColor="text-black" isRow={true} image={false} className="dark:text-white" />
                        ))}

                        {/* <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white">
                            Ready to level up your learning journey?
                        </div> */}
                        <div className="py-4 sm:py-4 md:py-8">
                            <ImageButtons
                                text="Create a free account"
                                source="/images/Group.png"
                                alt="Teachers, sign up now"
                                className=" px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                                textSize="text-base"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
