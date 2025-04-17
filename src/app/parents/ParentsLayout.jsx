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
        href: "#",
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
        href: "#",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/support",
        name: "Support",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
];


const faqs = [
    {
        question: "What kind of learning does Kurixel follow?",
        answer: "We blend core academic concepts with game-based adventures to make learning feel like play! Our curriculum aligns with widely recognized educational standards while adding a creative twist. Whether it's math missions, science quests, or logic puzzles, every game is crafted to help kids learn by doing—and having fun while they're at it."
    },
    {
        question: "How does Kurixel keep kids safe?",
        answer: "Your child's safety is our top priority. Kurixel follows strict privacy protocols and secure data practices. We never share personal info, and all interactions are designed with child-safe, COPPA-compliant systems. Our virtual world is fun-first and safe-always."
    },
    {
        question: "Can I use the same account for all Kurixel games?",
        answer: "Absolutely! One account unlocks everything in the Kurixel universe. Whether you're diving into a math dungeon or crafting your next big invention, your progress follows you across every world."
    },
    {
        question: "Does the learning get more challenging over time?",
        answer: "Yep! Kurixel's smart progression system tailors the gameplay to your child's level. As players build skills, the game evolves offering new challenges to keep things exciting and just the right amount of tricky."
    },
];

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges" },
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
                    headingColor="text-[#8F0E00]"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
                    faqs={faqs}
                    buttonText="More FAQ"
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
