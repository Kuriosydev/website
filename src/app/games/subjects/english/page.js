'use client' // If using Next.js App Router with client component

import { useEffect, useState } from 'react'
import GamePreview from '@/components/pages/games/GamePreview'
import FreeTeacherTools from '@/components/pages/games/subjects/english/FreeTeacherTools'
import GameEnglishBanner from '@/components/pages/games/subjects/english/GameEnglishBanner'
import GameEnglishFeature from '@/components/pages/games/subjects/english/GameEnglishFeature'
import OneAccount from '@/components/pages/games/subjects/english/OneAccount'
import GameLayout from '../../GameLayout'

export default function GameEnglish() {
    const [faqs, setFaqs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=game-english&populate=GameEnglishPage&populate=GameEnglishPage.QuestionSection&populate=GameEnglishPage.QuestionSection.QuestionsList&populate=GameEnglishPage.QuestionSection.button')
                const data = await res.json()

                const questions = data?.data?.[0]?.GameEnglishPage?.[0]?.QuestionSection?.[0]?.QuestionsList || []

                const formattedFaqs = questions.map(q => ({
                    question: q.question_text,
                    answer: q.question_answer
                }))

                setFaqs(formattedFaqs)
            } catch (error) {
                console.error("Failed to fetch FAQs:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <GameLayout
            faq={true}
            joinus={true}
            faqs={faqs}
            faqColor="bg-white dark:bg-[#212121]"
            faqQuestionColor="text-black dark:text-white"
            descriptionClasses="text-black dark:text-white"
            headingColor="text-black dark:text-[#FFCE49]"
        >
            <GameEnglishBanner />
            <GameEnglishFeature />
            <GamePreview />
            <FreeTeacherTools />
            <OneAccount />
        </GameLayout>
    )
}
