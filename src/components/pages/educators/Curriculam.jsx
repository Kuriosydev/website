import YellowButton from "@/components/buttons/YellowButton";
import ResourceCard from "@/components/cards/ResourceCard";
import Heading from "@/components/texts/Heading";

const engagingAssessments = [
    {
        heading: "Assignments",
        text: "Easily assess your students on over 1,000 standards-aligned skills in math and English as they play Prodigy."
    },
    {
        heading: "Test Preparation",
        text: "Prepare students for standardized testing with adaptive content specifically aligned to your curriculum."
    },
    {
        heading: "Placement Test",
        text: "When students first play Prodigy, a Placement Test runs to give you a baseline view of their grade level."
    },
]

export default function Curriculam() {
    return (
        <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden`}>
            <div className="text-white w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 gap-8">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-8 sm:px-8 md:px-12 lg:px-24 xl:px-24">
                    <div className="w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 items-center justify-center py-10 md:py-0">
                        <img src="/images/curriculam.png" alt="Curriculam" className="w-auto h-auto object-contain" />
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-7/12 xl:w-7/12 gap-8 py-10 md:py-0">
                        <Heading
                            text="Aligned to your curriculum"
                            fontFamily="font-luckiest"
                            fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-0 "
                        />
                        <div className="text-left font-medium text-lg lg:pr-24 py-4">
                            Simplify login for the whole classroom with Clever, ClassLink and Google Classroom while gaining insights into student activity and performance.
                        </div>
                        <div className="flex flex-row flex-wrap items-center justify-start gap-10 py-4">
                            <YellowButton text="See your Math curriculum" />
                            <YellowButton text="See your English curriculum" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 py-10 md:px-10 md:py-20 mt-10 md:mt-0">
                    <Heading
                        text="Level up learning with your free teacher portal"
                        fontFamily="font-luckiest"
                            fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-0 "
                    />
                    <div className="text-center font-medium text-lg py-4 md:py-4">
                        Use your teacher portal and its free features to deliver better student outcomes.
                    </div>
                </div>
                <div className="w-full py-10 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-start justify-start">
                        <Heading
                            text="Set engaging assessments"
                            fontFamily="font-luckiest"
                            fontSize="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-4 "
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            {engagingAssessments?.map((engagingAssessment, index) =>
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
                                    textColor="text-white"
                                />
                            </span>
                            <img src="/images/white_left_arrow.png" alt="White Left Arrow" className="w-8 h-4 object-cover ml-2" />
                        </a>
                    </div>
                </div>
                <div className="w-full py-10 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-start justify-start">
                        <Heading
                            text="Spot learning gaps with reports"
                            fontFamily="font-luckiest"
                            fontSize="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-4 "
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            {engagingAssessments?.map((engagingAssessment, index) =>
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
                                    textColor="text-white"
                                />
                            </span>
                            <img src="/images/white_left_arrow.png" alt="White Left Arrow" className="w-8 h-4 object-cover ml-2" />
                        </a>
                    </div>
                </div>
                <div className="w-full py-10 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-16">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-start justify-start">
                        <Heading
                            text="Motivate and challenge students"
                            fontFamily="font-luckiest"
                            fontSize="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-left md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-4 "
                        />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 sm:px-8 md:px-10 lg:px-20 xl:px-20">
                            {engagingAssessments?.map((engagingAssessment, index) =>
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
                                    textColor="text-white"
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
