import Faq from "@/components/pages/Faq";
import Banner from "@/components/pages/games/Banner";
import Dashboard from "@/components/pages/games/Dashboard";
import GameFeature from "@/components/pages/games/GameFeature";
import GamePreview from "@/components/pages/games/GamePreview";
import ProdigyWorld from "@/components/pages/games/ProdigyWorld";
import JoinUs from "@/components/pages/home/JoinUs";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
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
                href: "#",
                name: "Math",
                styles: "mr-5 md:mr-12",
                dropdown: false,
                childrens: []
            },
            {
                href: "#",
                name: "English Language Arts",
                styles: "mr-5 md:mr-12",
                dropdown: false,
                childrens: []
            },
        ]
    },
    {
        href: "#",
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


const resourceCards = [
    {
        text: "Reports",
        linkText: "Learn More",
        link: "#",
    },
    {
        text: "Kurixel Membership",
        linkText: "Learn More",
        link: "#",
    },
    {
        text: "Frequently Asked Questions",
        linkText: "Learn More",
        link: "#",
    }
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


const cards = [

    {
        imgSrc: "/images/Ellipse.png",
        heading: "Earn Epic Rewards",
        description: "Get a detailed, skill-by-skill breakdown delivered straight to your inbox each month.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Curriculum Progress report",
        description: "Find out which grade-level math skills your child has mastered from their curriculum.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "More powerful parent tools",
        description: "Members get even more ways to support learning. Set Goals for your child, send in-game Cheers, print custom Practice Sheets and more!",
    }
];

export default function Games() {
    return (
        <>
            <SecondaryHeader
                pageName="Games"
                menu={menu}
                buttonText="Let's Play"
                buttonStyles="px-6 py-2 md:px-8 md:py-2.5"
            />
            <Banner />
            <GameFeature />
            <GamePreview />
            <ParentAccount
                heading="Teachers, reclaim your time. Let Kurixel turn lessons into interactive adventures your students will actually love."
                cards={cards}
                bgColor="bg-white"
            />
            <ParentAccount
                heading="Parents, end the homework drama. Say goodbye to nagging and hello to a world where your child wants to learn."
                cards={cards}
            />
            <Dashboard />
            <ProdigyWorld />
            <ResourceBlog
                heading="Resources"
                bgImgSrc="/images/resource_blog2.png"
                resourceCards={resourceCards}
            />
            <Faq
                bgColor="bg-[#8F0E00] dark:bg-[#212121]"
                heading="Frequently Asked Questions"
                headingColor="text-white dark:text-[#FFCE49]"
                faqs={faqs}
                buttonText="More FAQ"
                faqQuestionColor="text-white"
                faqQuestionFontFamily="font-luckiest"
                faqQuestionFontSize=" text-3xl"
                faqQuestionFontWeight="font-normal"
                faqAnswerFontSize="text-lg"
                faqAnswerFontWeight="font-medium"
                faqAnswerColor="text-white"
                customStyles="pb-12"
                description="Got questions? We've got answers! Whether you're a parent, a learner, or just curious about what makes Kurixel so magical, explore below to learn more."
                descriptionClasses="text-white"
            />
            <JoinUs
                heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
                headingColor={"text-black"}
                headingStyle={"md:mt-10"}
                subHeading={"Get insider perks, secret rewards, and early access to new games."}
                subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
                list={whyJoin}
            />
        </>
    )
}
