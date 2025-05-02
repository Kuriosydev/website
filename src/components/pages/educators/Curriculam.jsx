"use client"
import YellowButton from "@/components/buttons/YellowButton";
import ResourceCard from "@/components/cards/ResourceCard";
import Heading from "@/components/texts/Heading";
import Link from "next/link";
import { useEffect, useState } from "react";

const engagingAssessments1 = [
    {
        heading: "Fun Assignments",
        text: "Create interactive tasks and track progress in real time."
    },
    {
        heading: "Test-Ready Content",
        text: "Help learners feel confident with adaptive challenges."
    },
    {
        heading: "Intelligent Placement",
        text: "Assess each student’s skill level to targeted support."
    },
]

const engagingAssessments2 = [
    {
        heading: "Performance Snapshots",
        text: "Get instant visibility. "
    },
    {
        heading: "Track Class Momentum",
        text: "Easily monitor classroom trends. "
    },
    {
        heading: "Mastery Made Measurable",
        text: "Explore comprehension at a glance. "
    },
]


export default function Curriculam() {
        const [section, setSection] = useState({
            title: '',
            description: '',
        });

        const [teacherSection, setTeacherSection] = useState({
            title: '',
            description: '',
        });

                useEffect(() => {
                    async function fetchData() {
                        try {
                            const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators&populate=EducatorsMetaData&populate=EducatorsMetaData.banner.BannerComponent&populate=EducatorsMetaData.banner.BannerComponent.button&populate=EducatorsMetaData.reviewCardSection.EducatorsCard.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection&populate=EducatorsMetaData.howKurixelWorksSection.card.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection.button&populate=EducatorsMetaData.oneClickLoginSection&populate=EducatorsMetaData.oneClickLoginSection.button&populate=EducatorsMetaData.curriculumSection&populate=EducatorsMetaData.curriculumSection.button&populate=EducatorsMetaData.levelUpSection&populate=EducatorsMetaData.levelUpSection.firstCard&populate=EducatorsMetaData.levelUpSection.secondCard&populate=EducatorsMetaData.prodigySection&populate=EducatorsMetaData.prodigySection.card&populate=EducatorsMetaData.teachersBlogSection&populate=EducatorsMetaData.teachersBlogSection.LearnMore");
                            const data = await response.json();
            
                            const item = data.data[0].EducatorsMetaData[0].curriculumSection[0]
                            const teacher = data.data[0].EducatorsMetaData[0].curriculumSection[0]

                            setTeacherSection({
                                title: teacher.title,
                                description: teacher.description,
                            });
        
                            setSection({
                                title: item.title,
                                description: item.description,
                            });
            
                        } catch (error) {
                            console.error("Failed to fetch data:", error);
                        }
                    }
            
                    fetchData();
                }, []);
    return (
        <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-[#212121]`}>
            <div className="text-white w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 gap-8">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-8 sm:px-8 md:px-12 lg:px-24 xl:px-24">
                    <div className="w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 items-center justify-center py-10 md:py-0">
                        <img src="/images/curriculam.png" alt="Curriculam" className="w-auto h-auto object-contain" />
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-7/12 xl:w-7/12 gap-8 py-10 md:py-0">
                        <Heading
                            text={section.title}
                            fontFamily="font-luckiest"
                            fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white dark:text-[#FFCE49]"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-0 "
                        />
                        <div className="text-left font-medium text-lg lg:pr-24 py-4 dark:text-white">
                            {section.description}
                        </div>
                        <div className="flex flex-row flex-wrap items-center justify-start gap-10 py-4">
                            <Link href="/educators/curriculum/maths" className="cursor-pointer"><YellowButton text="Explore Kurixel's Math Pathways" /></Link>
                            <Link href="/educators/curriculum/english" className="cursor-pointer"><YellowButton text="Explore Kurixel's Language Journeys" /></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 py-10 md:px-10 md:py-8 mt-10 md:mt-0">
                    <Heading
                        text={teacherSection.title}
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-center"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-white dark:text-[#FFCE49]"
                        customStyle="py-12 sm:py-12 md:py-16 lg:py-20 xl:py-20 px-0 "
                    />
                    <div className="text-center font-medium text-lg  dark:text-white">
                        {teacherSection.description}
                    </div>
                </div>
                <div className="w-full px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-start justify-start">
                        <Heading
                            text="Craft interactive assessments"
                            fontFamily="font-luckiest"
                            fontSize="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white dark:text-[#FFCE49]"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-4 "
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            {engagingAssessments1?.map((engagingAssessment, index) =>
                                <ResourceCard
                                    key={index}
                                    bgColor="bg-[#FFCE49]"
                                    heading={engagingAssessment?.heading}
                                    text={engagingAssessment?.text}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end w-auto">
                        <a href="/educators/resources/assesment" className="flex items-center space-x-2 py-4 md:py-4 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            <span>
                                <Heading
                                    text="See More"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg md:text-xl"
                                    fontWeight="font-normal"
                                    textAlign="text-left"
                                    letterSpacing=""
                                    textColor="text-white dark:text-[#FFCE49]"
                                />
                            </span>
                            <img src="/images/white_left_arrow.png" alt="White Left Arrow" className="w-8 h-4 object-cover ml-2" />
                        </a>
                    </div>
                </div>
                <div className="w-full px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-start justify-start">
                        <Heading
                            text="Smart Reporting to Uncover Hidden Learning Gaps"
                            fontFamily="font-luckiest"
                            fontSize="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white dark:text-[#FFCE49]"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-4 "
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            {engagingAssessments2?.map((engagingAssessment, index) =>
                                <ResourceCard
                                    key={index}
                                    bgColor="bg-[#FFCE49]"
                                    heading={engagingAssessment?.heading}
                                    text={engagingAssessment?.text}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end w-auto">
                        <a href="/contact-us" className="flex items-center space-x-2 py-4 md:py-4 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            <span>
                                <Heading
                                    text="See More"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg md:text-xl"
                                    fontWeight="font-normal"
                                    textAlign="text-left"
                                    letterSpacing=""
                                    textColor="text-white dark:text-[#FFCE49]"
                                />
                            </span>
                            <img src="/images/white_left_arrow.png" alt="White Left Arrow" className="w-8 h-4 object-cover ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
