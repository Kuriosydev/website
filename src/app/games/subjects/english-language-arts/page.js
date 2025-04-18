import Faq from "@/components/pages/Faq";
import GamePreview from "@/components/pages/games/GamePreview";
import GameEnglishBanner from "@/components/pages/games/subject/english/GameEnglishBanner";
import GameEnglishDashboard from "@/components/pages/games/subject/english/GameEnglishDashboard";
import GameEnglishEngaging from "@/components/pages/games/subject/english/GameEnglishEngaging";
import JoinUs from "@/components/pages/home/JoinUs";
import ParentAccount from "@/components/pages/parents/ParentAccount";


const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges" },
];

const faqs = [
    {
        question: "Do I need separate Kurixel accounts for each subject?",
        answer: "Not at all! Math and English may offer different learning journeys, but you only need one Kurixel account to explore them both. Players can easily switch between subjects by following the prompts in the game. For parents and teachers, progress reports, assessments, and other tools for both subjects are available right from your existing dashboard. New to Kurixel? [Create your free account today.]"
    },
    {
        question: "Does Kurixel’s English Language Arts program follow academic standards?",
        answer: "It sure does! Kurixel’s ELA journey is thoughtfully built around key concepts from the Common Core, focusing on reading, writing, and language skills. Our team is actively expanding the experience with new content, more grade levels, and fresh learning goals. Be sure to check back for updates!"
    }
];


const cards = [
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Adaptive Assessments",
        description: "Seamlessly connect gameplay to your lesson plans. ",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Progress Tracking",
        description: "Monitor student growth as they explore, build, and learn.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Curriculum",
        description: "Kurixel ensures your students stay on track while having fun",
    }
];

export default function EnglishGame() {
    return (
        <>
            <GameEnglishBanner />
            <GameEnglishEngaging />
            <GamePreview />
            <ParentAccount
                heading="Empower Your Teaching with Smart Tools"
                cards={cards}
                bgColor="bg-white"
            />
            <GameEnglishDashboard/>
            <Faq
                bgColor="bg-[#8F0E00]"
                heading="Frequently Asked Questions"
                headingColor="text-white"
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
