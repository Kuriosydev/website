import YellowButton from "@/components/buttons/YellowButton";
import ResourceCard from "@/components/cards/ResourceCard";
import Heading from "@/components/texts/Heading";

const engagingAssessments1 = [
    {
        heading: "Fun Assignments",
        text: "Create interactive tasks and track progress in real time."
    },
    {
        heading: "Test-Ready Content",
        text: "Help learners feel confident with adaptive challenges."
    },
    {
        heading: "Intelligent Placement",
        text: "Assess each student’s skill level to targeted support."
    },
]

const engagingAssessments2 = [
    {
        heading: "Performance Snapshots",
        text: "Get instant visibility. "
    },
    {
        heading: "Track Class Momentum",
        text: "Easily monitor classroom trends. "
    },
    {
        heading: "Mastery Made Measurable",
        text: "Explore comprehension at a glance. "
    },
]


export default function Curriculam() {
    return (
        <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-[#212121]`}>
            <div className="text-white w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 gap-8">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-8 sm:px-8 md:px-12 lg:px-24 xl:px-24">
                    <div className="w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 items-center justify-center py-10 md:py-0">
                        <img src="/images/curriculam.png" alt="Curriculam" className="w-auto h-auto object-contain" />
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-7/12 xl:w-7/12 gap-8 py-10 md:py-0">
                        <Heading
                            text="Built for Classrooms. Backed by Curriculum."
                            fontFamily="font-luckiest"
                            fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white dark:text-[#FFCE49]"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-0 "
                        />
                        <div className="text-left font-medium text-lg lg:pr-24 py-4 dark:text-white">
                            Integrates seamlessly with Clever and Google Classroom making sign-ins a breeze for students and teachers.
                        </div>
                        <div className="flex flex-row flex-wrap items-center justify-start gap-10 py-4">
                            <YellowButton text="Explore Kurixel's Math Pathways" />
                            <YellowButton text="Explore Kurixel's Language Journeys" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 py-10 md:px-10 md:py-20 mt-10 md:mt-0">
                    <Heading
                        text="Your Teacher Dashboard, Supercharged"
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-white dark:text-[#FFCE49]"
                        customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-0 "
                    />
                    <div className="text-center font-medium text-lg py-4 md:py-4 dark:text-white">
                        Unleash the power of Kurixel's educator tools to personalize learning and boost classroom outcomes.
                    </div>
                </div>
                <div className="w-full py-10 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-start justify-start">
                        <Heading
                            text="Craft interactive assessments"
                            fontFamily="font-luckiest"
                            fontSize="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white dark:text-[#FFCE49]"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-4 "
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            {engagingAssessments1?.map((engagingAssessment, index) =>
                                <ResourceCard
                                    key={index}
                                    bgColor="bg-[#FFCE49]"
                                    heading={engagingAssessment?.heading}
                                    text={engagingAssessment?.text}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end w-auto">
                        <a href="#" className="flex items-center space-x-2 py-4 md:py-4 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            <span>
                                <Heading
                                    text="See More"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg md:text-xl"
                                    fontWeight="font-normal"
                                    textAlign="text-left"
                                    letterSpacing=""
                                    textColor="text-white dark:text-[#FFCE49]"
                                />
                            </span>
                            <img src="/images/white_left_arrow.png" alt="White Left Arrow" className="w-8 h-4 object-cover ml-2" />
                        </a>
                    </div>
                </div>
                <div className="w-full py-10 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-start justify-start">
                        <Heading
                            text="Smart Reporting to Uncover Hidden Learning Gaps"
                            fontFamily="font-luckiest"
                            fontSize="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white dark:text-[#FFCE49]"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-4 "
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            {engagingAssessments2?.map((engagingAssessment, index) =>
                                <ResourceCard
                                    key={index}
                                    bgColor="bg-[#FFCE49]"
                                    heading={engagingAssessment?.heading}
                                    text={engagingAssessment?.text}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end w-auto">
                        <a href="#" className="flex items-center space-x-2 py-4 md:py-4 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            <span>
                                <Heading
                                    text="See More"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg md:text-xl"
                                    fontWeight="font-normal"
                                    textAlign="text-left"
                                    letterSpacing=""
                                    textColor="text-white dark:text-[#FFCE49]"
                                />
                            </span>
                            <img src="/images/white_left_arrow.png" alt="White Left Arrow" className="w-8 h-4 object-cover ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
