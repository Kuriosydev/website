"use client"
import ImageButtons from "@/components/buttons/ImageButtons";
import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";
import { useEffect, useState } from "react";

export default function HowWork() {
    const [section, setSection] = useState({
        title: '',
        description: '',
        card: [],
        buttonText: '',
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators&populate=EducatorsMetaData&populate=EducatorsMetaData.banner.BannerComponent&populate=EducatorsMetaData.banner.BannerComponent.button&populate=EducatorsMetaData.reviewCardSection.EducatorsCard.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection&populate=EducatorsMetaData.howKurixelWorksSection.card.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection.button&populate=EducatorsMetaData.oneClickLoginSection&populate=EducatorsMetaData.oneClickLoginSection.button&populate=EducatorsMetaData.curriculumSection&populate=EducatorsMetaData.curriculumSection.button&populate=EducatorsMetaData.levelUpSection&populate=EducatorsMetaData.levelUpSection.firstCard&populate=EducatorsMetaData.levelUpSection.secondCard&populate=EducatorsMetaData.prodigySection&populate=EducatorsMetaData.prodigySection.card&populate=EducatorsMetaData.teachersBlogSection&populate=EducatorsMetaData.teachersBlogSection.LearnMore");
                const data = await response.json();

                const howWork = data.data[0].EducatorsMetaData[0].howKurixelWorksSection[0];

                const cards = howWork.card[0]?.ParentsCard?.map((item, index) => ({
                    title: item.title,
                    description: item.description,
                    videoSrc: "/videos/news_banner_vid_2.mp4", // static video
                    link: "https://www.example.com",           // static link
                })) || [];

                setSection({
                    title: howWork.title,
                    description: howWork.description,
                    card: cards,
                    buttonText: howWork.button[0]?.Title || '',
                });

            } catch (error) {
                console.error("Failed to fetch HowWork data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <section className="w-full h-auto bg-[#FFCE49] relative overflow-hidden dark:bg-[#212121]">
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <Heading
                    text={section.title}
                    fontFamily="font-luckiest"
                    fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                    fontWeight="font-bold"
                    textAlign="text-center"
                    letterSpacing="tracking-wide"
                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                />
                <div className="flex flex-row flex-wrap items-center justify-center text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 md:px-20 lg:px-40 xl:px-12 text-justify lg:text-center dark:text-white">
                    {section.description}
                </div>
                <div className="flex flex-col md:flex-row flex-wrap items-start justify-between px-10 md:px-0 lg:px-24 py-16">
                    <GameCards type="video" data={section.card} />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 md:px-24">
                    <ImageButtons
                        text={section.buttonText}
                        source="/images/Group.png"
                        alt={section.buttonText}
                        className=" px-10 py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                        textSize="text-base"
                    />
                </div>
            </div>
        </section>
    );
}
