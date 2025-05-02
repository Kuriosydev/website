"use client"
import { useEffect, useState } from 'react';
import GameCards from "@/components/cards/GameCards";
import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";

export default function WhyProdigy() {
    const [prodigySection, setProdigySection] = useState({
        title: '',
        description: '',
        card: [],
    });

    useEffect(() => {
       
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:1337/api/cms-pages?filters[slug][$eq]=educators&populate=EducatorsMetaData&populate=EducatorsMetaData.banner.BannerComponent&populate=EducatorsMetaData.banner.BannerComponent.button&populate=EducatorsMetaData.reviewCardSection.EducatorsCard.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection&populate=EducatorsMetaData.howKurixelWorksSection.card.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection.button&populate=EducatorsMetaData.oneClickLoginSection&populate=EducatorsMetaData.oneClickLoginSection.button&populate=EducatorsMetaData.curriculumSection&populate=EducatorsMetaData.curriculumSection.button&populate=EducatorsMetaData.levelUpSection&populate=EducatorsMetaData.levelUpSection.firstCard&populate=EducatorsMetaData.levelUpSection.secondCard&populate=EducatorsMetaData.prodigySection&populate=EducatorsMetaData.prodigySection.card&populate=EducatorsMetaData.teachersBlogSection&populate=EducatorsMetaData.teachersBlogSection.LearnMore");
                const data = await response.json();
                const item = data.data[0]?.EducatorsMetaData[0]?.prodigySection[0]; 
                setProdigySection({
                    title: item.title,
                    description: item.description,
                    card: item.card
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-start justify-between mx-auto px-10 md:px-24">
                    <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 md:py-0">
                        <Heading
                            text={prodigySection.title}
                            fontFamily="font-luckiest"
                            fontSize="text-2xl sm:text-3xl md:text-5xl lg:text-5xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-center md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                            customStyle="py-2 sm:py-2 md:py-2 lg:py-7 xl:py-8"
                        />
                        <div className="font-medium text-left text-base md:text-lg py-2 sm:py-2 md:py-0 lg:py-0 xl:py-0">
                            <BulletList
                                lists={[{ text: prodigySection.description }]}
                                bullet={true}
                                isFooter={false}
                                isLink={false}
                                textClasses="font-semibold text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl"
                                liClass="py-1"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 sm:py-10 md:py-10 lg:py-0 xl:py-0">
                    <GameCards
    type={1}
    data={prodigySection.card && prodigySection.card.length > 0 ? prodigySection.card.map(card => ({
        imageSrc: '/images/game_screen5.jpeg',
        link: '#', 
        title: card.title,
        description: card.description,
        buttonText: "See the research",
        buttonLink: "/parents/research",
        isImageButton: false
    })) : []}
/>

                    </div>
                </div>
            </div>
        </section>
    );
}
