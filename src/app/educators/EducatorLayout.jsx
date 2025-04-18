import Faq from "@/components/pages/Faq";
import JoinUs from "@/components/pages/home/JoinUs";
import SecondaryHeader from "@/Layouts/SecondaryHeader";

const menu = [
    {
        href: "/educators",
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
                href: "/educators/curriculum/maths",
                name: "Math",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
            {
                href: "/educators/curriculum/english",
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
                name: "Assessments",
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

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges." },
];



const EducatorLayout = ({ children, faq = false, joinus = false, faqs, faqColor = "bg-[#FFCE49] dark:bg-[#212121]", faqQuestionColor = "text-[#8F0E00] dark:text-white", descriptionClasses = "text-white", headingColor = "text-[#8F0E00] dark:text-[#FFCE49]" }) => {
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
                    headingColor={headingColor}
                    faqs={faqs}
                    faqQuestionColor={faqQuestionColor}
                    faqQuestionFontFamily="font-luckiest"
                    faqQuestionFontSize=" text-3xl"
                    faqQuestionFontWeight="font-normal"
                    faqAnswerFontSize="text-lg"
                    faqAnswerFontWeight="font-medium"
                    customStyles=""
                    bgColor={faqColor}
                />
            }
            {joinus &&
                <JoinUs
                    heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
                    headingColor={"text-black dark:text-[#FFCE49]"}
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