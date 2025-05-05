"use client"
import Banner from "@/components/pages/educators/Banner";
import Curriculam from "@/components/pages/educators/Curriculam";
import EducatorTestimonials from "@/components/pages/educators/EducatorTestimonials";
import HowWork from "@/components/pages/educators/HowWork";
import OneClickLogin from "@/components/pages/educators/OneClickLogin";
import WhyProdigy from "@/components/pages/educators/WhyProdigy";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import EducatorLayout from "./EducatorLayout";
import { useEffect, useState } from 'react';

export default function Educators() {
    const [testimonials, setTestimonials] = useState([]);
    const [resourceCards, setResourceCards] = useState([]);
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        async function fetchEducatorData() {
            try {
                const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators&populate=EducatorsMetaData&populate=EducatorsMetaData.banner.BannerComponent&populate=EducatorsMetaData.banner.BannerComponent.button&populate=EducatorsMetaData.reviewCardSection.EducatorsCard.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection&populate=EducatorsMetaData.howKurixelWorksSection.card&populate=EducatorsMetaData.howKurixelWorksSection.button&populate=EducatorsMetaData.oneClickLoginSection&populate=EducatorsMetaData.oneClickLoginSection.button&populate=EducatorsMetaData.curriculumSection&populate=EducatorsMetaData.curriculumSection.button&populate=EducatorsMetaData.levelUpSection&populate=EducatorsMetaData.levelUpSection.firstCard&populate=EducatorsMetaData.levelUpSection.secondCard&populate=EducatorsMetaData.prodigySection&populate=EducatorsMetaData.prodigySection.card&populate=EducatorsMetaData.teachersBlogSection&populate=EducatorsMetaData.teachersBlogSection.LearnMore&populate=EducatorsMetaData.questionSection&populate=EducatorsMetaData.questionSection.QuestionsList");
                const data = await response.json();

                const metaData = data?.data?.[0]?.EducatorsMetaData?.[0];

                const parentsCard = metaData?.reviewCardSection?.[0]?.EducatorsCard?.[0]?.ParentsCard || [];
                const resourceCard = metaData?.teachersBlogSection?.[0]?.LearnMore || [];
                const questionsList = metaData?.questionSection?.[0]?.QuestionsList || [];

                const formattedTestimonials = parentsCard.map((card, index) => ({
                    comment: card.title?.replace(/^"|"$/g, '') || '',
                    author: card.description || '',
                    authorImage: `/images/author${index + 1}.png`,
                }));

                const formattedResources = resourceCard.map((card) => ({
                    text: card.title?.replace(/^"|"$/g, '') || '',
                    linkText: "Learn More",
                    link: "/news",
                }));

                const formattedFaqs = questionsList.map((q) => ({
                    question: q.question_text,
                    answer: q.question_answer,
                }));

                setTestimonials(formattedTestimonials);
                setResourceCards(formattedResources);
                setFaqs(formattedFaqs);
            } catch (error) {
                console.error("Failed to fetch educator page data:", error);
            }
        }

        fetchEducatorData();
    }, []);

    return (
        <EducatorLayout faq={true} joinus={true} faqs={faqs}>
            <Banner />
            <EducatorTestimonials testimonials={testimonials} />
            <HowWork />
            <OneClickLogin />
            <Curriculam />
            <WhyProdigy />
            <ResourceBlog
                heading="Teachers Resources"
                bgImgSrc="/images/resource_blog.png"
                resourceCards={resourceCards}
            />
        </EducatorLayout>
    );
}
