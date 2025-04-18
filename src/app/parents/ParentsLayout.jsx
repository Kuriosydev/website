import Faq from "@/components/pages/Faq";
import JoinUs from "@/components/pages/home/JoinUs";
import SecondaryHeader from "@/Layouts/SecondaryHeader";

const menu = [
    {
        href: "/parents",
        name: "Overview",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "/parents/membership",
        name: "Membership",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/parents/research",
        name: "Research",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "/parents/resources",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/contact-us",
        name: "Support",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
];


const faqs = [
    {
        question: "How can I stay involved in my child’s learning with Kurixel?",
        answer: "With a free Kurixel parent account, you can track your child’s progress, view monthly report, and celebrate their milestones all from your own dashboard."
    },
    {
        question: "Will Kurixel really help my child learn, or is it just a game?",
        answer: "Kurixel is designed by educators to blend real curriculum with engaging gameplay. Every challenge is rooted in skill-building, so while kids are having fun, they’re also mastering math concepts aligned to academic standards."
    },
    {
        question: "How much time should my child spend on Kurixel each week?",
        answer: "Even 10–15 minutes a day can make a meaningful impact. The goal is progress, not pressure."
    },
    {
        question: "Is my child’s data safe on Kurixel?",
        answer: "Yes. We take your family’s privacy seriously. Kurixel is fully compliant with COPPA, FERPA, and other major privacy laws. We never sell personal data, and we only collect what’s needed to enhance your child’s learning experience."
    },
];

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges." },
];

export default function ParentsLayout({ children, faq = false, joinus = false }) {
    return (
        <>
            <SecondaryHeader
                pageName="Educators"
                menu={menu}
                buttonText="Sign Up"
                buttonStyles="mr-2 px-6 py-2 md:px-8 md:py-2.5"
            />
            {children}
            {faq &&
                <Faq
                    heading="Frequently Asked Questions"
                    headingColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    description=""
                    faqs={faqs}
                    buttonText="More FAQ"
                    faqQuestionColor="text-[#8F0E00] dark:text-white"
                    faqQuestionFontFamily="font-luckiest"
                    faqQuestionFontSize=" text-3xl"
                    faqQuestionFontWeight="font-normal"
                    faqAnswerFontSize="text-lg"
                    faqAnswerFontWeight="font-medium"
                    customStyles=""
                    bgColor="bg-[#FFCE49] dark:bg-[#212121]"
                />
            }
            {joinus &&
                <JoinUs
                    heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
                    headingColor={"text-black"}
                    headingStyle={"md:mt-10"}
                    subHeading={"Get insider perks, secret rewards, and early access to new games."}
                    subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
                    list={whyJoin}
                />
            }
        </>
    )
}
