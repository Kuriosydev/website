import GamePreview from '@/components/pages/games/GamePreview'
import FreeTeacherTools from '@/components/pages/games/subjects/english/FreeTeacherTools'
import GameEnglishBanner from '@/components/pages/games/subjects/english/GameEnglishBanner'
import GameEnglishFeature from '@/components/pages/games/subjects/english/GameEnglishFeature'
import OneAccount from '@/components/pages/games/subjects/english/OneAccount'
import GameLayout from '../../GameLayout'

const faqs = [
    {
        question: "Do I need separate Kurixel accounts for each subject?",
        answer: "Not at all! Math and English may offer different learning journeys, but you only need one Kurixel account to explore them both.Players can easily switch between subjects by following the prompts in the game. For parents and teachers, progress reports, assessments, and other tools for both subjects are available right from your existing dashboard. New to Kurixel? [Create your free account today.]"
    },
    {
        question: "Does Kurixel’s English Language Arts program follow academic standards?",
        answer: "It sure does! Kurixel’s ELA journey is thoughtfully built around key concepts from the Common Core, focusing on reading, writing, and language skills. Our team is actively expanding the experience with new content, more grade levels, and fresh learning goals. Be sure to check back for updates!"
    }
];

export default function GameEnglish() {
    return (
        <GameLayout faq={true} joinus={true} faqs={faqs} faqColor="bg-white dark:bg-[#212121]" faqQuestionColor="text-black dark:text-white" descriptionClasses="text-black dark:text-white" headingColor="text-black dark:text-[#FFCE49]">
            <GameEnglishBanner />
            <GameEnglishFeature />
            <GamePreview />
            <FreeTeacherTools />
            <OneAccount />
        </GameLayout>
    )
}
