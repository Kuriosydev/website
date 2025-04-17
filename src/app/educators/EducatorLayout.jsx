import Faq from "@/components/pages/Faq";
import JoinUs from "@/components/pages/home/JoinUs";
import SecondaryHeader from "@/Layouts/SecondaryHeader";

const menu = [
    {
        href: "/educators/overview",
        name: "Overview",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Curriculum",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: [
            {
                href: "/educators/curriculum/math",
                name: "Math",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
            {
                href: "/educators/overview/english-language-arts",
                name: "English Language Arts",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
        ]
    },
    {
        href: "#",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: [
            {
                href: "/educators/resources/dashboard",
                name: "Dashboard",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
            {
                href: "/educators/resources/assesment",
                name: "Assesment",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
        ]
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
        question: "Why Kurixel?",
        answer: "Kurixel offers a rich, game-based learning environment that turns academic practice into an interactive adventure. With so many digital tools available, few captivate students the way Kurixel does. It transforms learning into a world of challenges, creativity, and rewards that students actually look forward to."
    },
    {
        question: "How Does Kurixel Protect Student Privacy?",
        answer: "Kurixel is committed to safeguarding student data. We follow strict privacy standards, collect only the information necessary to support learning, and never sell or share personal data. Our platform is fully compliant with major student privacy laws, ensuring a secure and trusted learning environment for every user. Is Kurixel Aligned with School, State or National Standards? Yes! Kurixel is built to align with a wide range of educational standards at the school, state, and national levels."
    },
];

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges" },
];



const EducatorLayout = ({ children, faq = false, joinus = false }) => {
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
                    headingColor="text-[#8F0E00]"
                    faqs={faqs}
                    faqQuestionColor="text-[#8F0E00]"
                    faqQuestionFontFamily="font-luckiest"
                    faqQuestionFontSize=" text-3xl"
                    faqQuestionFontWeight="font-normal"
                    faqAnswerFontSize="text-lg"
                    faqAnswerFontWeight="font-medium"
                    customStyles=""
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

export default EducatorLayout