import Faq from "@/components/pages/Faq";
import JoinUs from "@/components/pages/home/JoinUs";
import SecondaryHeader from "@/Layouts/SecondaryHeader";

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges." },
];

const menu = [
    {
        href: "#",
        name: "Subjects",
        styles: "mr-5 md:mr-12",
        dropdown: true,
        childrens: [
            {
                href: "/games",
                name: "Math",
                styles: "mr-5 md:mr-12",
                dropdown: false,
                childrens: []
            },
            {
                href: "/games/subjects/english",
                name: "English Language Arts",
                styles: "mr-5 md:mr-12",
                dropdown: false,
                childrens: []
            },
        ]
    },
    {
        href: "/games/membership",
        name: "Memberships",
        styles: "mr-5 md:mr-12",
        dropdown: true,
        childrens: []
    },
    {
        href: "/contact-us",
        name: "Support",
        styles: "mr-5 md:mr-12",
        dropdown: false,
        childrens: []
    },
];



const GameLayout = ({ children, faq = false, joinus = false, faqs, faqColor = "bg-[#8F0E00] dark:bg-[#212121]", faqQuestionColor = "text-white", descriptionClasses = "text-white", headingColor = "text-white dark:text-[#FFCE49]" }) => {
    return (
        <>
            <SecondaryHeader
                pageName="Games"
                menu={menu}
                buttonText="Let's Play"
                buttonStyles="px-6 py-2 md:px-8 md:py-2.5"
            />
            {children}
            {faq &&
                <Faq
                    bgColor={faqColor}
                    heading="Frequently Asked Questions"
                    headingColor={headingColor}
                    faqs={faqs}
                    buttonText="More FAQ"
                    faqQuestionColor={faqQuestionColor}
                    faqQuestionFontFamily="font-luckiest"
                    faqQuestionFontSize=" text-3xl"
                    faqQuestionFontWeight="font-normal"
                    faqAnswerFontSize="text-lg"
                    faqAnswerFontWeight="font-medium"
                    faqAnswerColor="text-white"
                    customStyles="pb-12"
                    description="Got questions? We've got answers! Whether you're a parent, a learner, or just curious about what makes Kurixel so magical, explore below to learn more."
                    descriptionClasses={descriptionClasses}
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

export default GameLayout