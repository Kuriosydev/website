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


// const resourceCards = [
//     {
//         text: "Discover creative strategies to boost motivation.",
//         linkText: "Learn More",
//         link: "/news",
//     },
//     {
//         text: "Make personalized learning easy and effective.",
//         linkText: "Learn More",
//         link: "/news",
//     },
//     {
//         text: "Turn every session into a meaningful checkpoint.",
//         linkText: "Learn More",
//         link: "/news",
//     }
// ];

const testimonials = [
    {
        comment: "Kurixel is an amazing tool for getting kids who usually don't enjoy math to actually engage with it.",
        author: "E. Guerrero",
        authorImage: "/images/author1.png"
    },
    {
        comment: "I love how Kurixel makes math fun and exciting for students.",
        author: "K. Vega",
        authorImage: "/images/author2.png"
    },
    {
        comment: "Kurixel has really helped my students who usually find math frustrating. It’s so rewarding to see them engaged and feeling more confident.",
        author: "J. Vaughn",
        authorImage: "/images/author3.png"
    }
];

const faqs = [
    {
        question: "Why Kurixel?",
        answer: "Kurixel offers a rich, game-based learning environment that turns academic practice into an interactive adventure. With so many digital tools available, few captivate students the way Kurixel does. It transforms learning into a world of challenges, creativity, and rewards that students actually look forward to."
    },
    {
        question: "How Does Kurixel Protect Student Privacy?",
        answer: "Kurixel is committed to safeguarding student data. We follow strict privacy standards, collect only the information necessary to support learning, and never sell or share personal data. Our platform is fully compliant with major student privacy laws, ensuring a secure and trusted learning environment for every user."
    },
    {
        question: "Is Kurixel Aligned with School, State or National Standards?",
        answer: "Yes! Kurixel is built to align with a wide range of educational standards at the school, state, and national levels."
    },
];


export default function Educators() {

    const [testimonials, setTestimonials] = useState([]);
    const [resourceCards, setResourceCards] = useState([]);

    useEffect(() => {
      async function fetchTestimonials() {
        try {
            const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators&populate=EducatorsMetaData&populate=EducatorsMetaData.banner.BannerComponent&populate=EducatorsMetaData.banner.BannerComponent.button&populate=EducatorsMetaData.reviewCardSection.EducatorsCard.ParentsCard&populate=EducatorsMetaData.howKurixelWorksSection&populate=EducatorsMetaData.howKurixelWorksSection.card&populate=EducatorsMetaData.howKurixelWorksSection.button&populate=EducatorsMetaData.oneClickLoginSection&populate=EducatorsMetaData.oneClickLoginSection.button&populate=EducatorsMetaData.curriculumSection&populate=EducatorsMetaData.curriculumSection.button&populate=EducatorsMetaData.levelUpSection&populate=EducatorsMetaData.levelUpSection.firstCard&populate=EducatorsMetaData.levelUpSection.secondCard&populate=EducatorsMetaData.prodigySection&populate=EducatorsMetaData.prodigySection.card&populate=EducatorsMetaData.teachersBlogSection&populate=EducatorsMetaData.teachersBlogSection.LearnMore");
          const data = await response.json();
  
          const parentsCard = data?.data?.[0]?.EducatorsMetaData?.[0]?.reviewCardSection?.[0]?.EducatorsCard?.[0]?.ParentsCard || [];
          const resourceCard = data?.data?.[0]?.EducatorsMetaData?.[0]?.teachersBlogSection?.[0]?.LearnMore || [];

          const formattedTestimonials = parentsCard.map((card, index) => ({
            comment: card.title?.replace(/^"|"$/g, '') || '',
            author: card.description || '',
            authorImage: `/images/author${index + 1}.png`, // fallback logic based on index
          }));

          const formattedResources = resourceCard.map((card, index) => ({
            text: card.title?.replace(/^"|"$/g, '') || '',
            linkText: "Learn More",
            link: "/news",
          }));
  
          setTestimonials(formattedTestimonials);
          setResourceCards(formattedResources);
        } catch (error) {
          console.error("Failed to fetch testimonials:", error);
        }
      }
  
      fetchTestimonials();
    }, []);

    // const testimonials = [
    //     {
    //         comment: "Kurixel is an amazing tool for getting kids who usually don't enjoy math to actually engage with it.",
    //         author: "E. Guerrero",
    //         authorImage: "/images/author1.png"
    //     },
    //     {
    //         comment: "I love how Kurixel makes math fun and exciting for students.",
    //         author: "K. Vega",
    //         authorImage: "/images/author2.png"
    //     },
    //     {
    //         comment: "Kurixel has really helped my students who usually find math frustrating. It’s so rewarding to see them engaged and feeling more confident.",
    //         author: "J. Vaughn",
    //         authorImage: "/images/author3.png"
    //     }
    // ];
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
    )
}
