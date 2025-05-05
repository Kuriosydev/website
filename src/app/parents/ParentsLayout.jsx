"use client"
import { useEffect, useState } from "react";
import Faq from "@/components/pages/Faq";
import JoinUs from "@/components/pages/home/JoinUs";
import SecondaryHeader from "@/Layouts/SecondaryHeader";

const menu = [
    { href: "/parents", name: "Overview", styles: "mr-5 md:mr-8", dropdown: false, childrens: [] },
    { href: "/parents/membership", name: "Membership", styles: "mr-5 md:mr-8", dropdown: true, childrens: [] },
    { href: "/parents/research", name: "Research", styles: "mr-5 md:mr-8", dropdown: false, childrens: [] },
    { href: "/parents/resources", name: "Resources", styles: "mr-5 md:mr-8", dropdown: true, childrens: [] },
    { href: "/contact-us", name: "Support", styles: "mr-5 md:mr-8", dropdown: false, childrens: [] },
];

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges." },
];

export default function ParentsLayout({ children, faq = false, joinus = false }) {
    const [faqData, setFaqData] = useState({ faqs: [], heading: "", description: "", buttonText: "" });

    useEffect(() => {
        if (faq) {
            fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=parents&populate=ParentsMetaData&populate=ParentsMetaData.questionSection&populate=ParentsMetaData.questionSection.QuestionsList&populate=ParentsMetaData.questionSection.button")
                .then(res => res.json())
                .then(data => {
                    const section = data?.data?.[0]?.ParentsMetaData?.[0]?.questionSection?.[0];

                    const faqs = section?.QuestionsList?.map(q => ({
                        question: q.question_text,
                        answer: q.question_answer || "Answer will be updated soon.",
                    })) || [];

                    const buttonText = section?.button?.[0]?.Title || "More FAQ";

                    setFaqData({
                        heading: section?.title || "FAQs",
                        description: section?.description || "",
                        buttonText,
                        faqs
                    });
                })
                .catch(err => console.error("Failed to fetch FAQ:", err));
        }
    }, [faq]);

    return (
        <>
            <SecondaryHeader
                pageName="Educators"
                menu={menu}
                buttonText="Sign Up"
                buttonStyles="mr-2 px-6 py-2 md:px-8 md:py-2.5"
            />
            {children}

            {faq && faqData.faqs.length > 0 && (
                <Faq
                    heading={faqData.heading}
                    headingColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    description={faqData.description}
                    faqs={faqData.faqs}
                    buttonText={faqData.buttonText}
                    faqQuestionColor="text-[#8F0E00] dark:text-white"
                    faqQuestionFontFamily="font-luckiest"
                    faqQuestionFontSize=" text-3xl"
                    faqQuestionFontWeight="font-normal"
                    faqAnswerFontSize="text-lg"
                    faqAnswerFontWeight="font-medium"
                    customStyles=""
                    bgColor="bg-[#FFCE49] dark:bg-[#212121]"
                />
            )}

            {joinus && (
                <JoinUs
                    heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
                    headingColor={"text-black"}
                    headingStyle={"md:mt-10"}
                    subHeading={"Get insider perks, secret rewards, and early access to new games."}
                    subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
                    list={whyJoin}
                />
            )}
        </>
    );
}
