import Heading from "@/components/texts/Heading";
import ParentsLayout from "../ParentsLayout";

export default function ParentResources() {
    return (
        <ParentsLayout>
            <section className="w-full h-auto bg-[#FFCE49] relative overflow-hidden dark:bg-[#212121] -mt-44">
                <div className="w-full h-full relative overflow-hidden pt-44">
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-1 text-black">
                        <div className="w-full py-4 sm:py-4 md:py-8 px-10">
                            <Heading
                                text="Learning Resources"
                                fontFamily="font-luckiest"
                                fontSize="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                                fontWeight="font-bold"
                                textAlign="text-left"
                                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                customStyle=""
                            />
                            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white py-2">
                                Support for Parents, Educators & Curious Minds — Coming Soon
                            </div>
                            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white py-2">
                                This page will feature resources to help parents and educators support their learners both in and out of the game.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-1 text-black">
                        <div className="w-full py-4 sm:py-4 md:py-8 px-10">
                            <Heading
                                text="What to Expect"
                                fontFamily="font-luckiest"
                                fontSize="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                                fontWeight="font-bold"
                                textAlign="text-left"
                                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                customStyle=""
                            />
                            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white py-2">
                                Here’s a sneak peek of what’s coming:
                                Guides to help you get started with the game
                                Tips for connecting gameplay with learning goals
                                Printable activities and extension ideas
                                Tools for classroom or homeschool integration
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-1 text-black">
                        <div className="w-full py-4 sm:py-4 md:py-8 px-10">
                            <Heading
                                text="Launching Soon"
                                fontFamily="font-luckiest"
                                fontSize="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                                fontWeight="font-bold"
                                textAlign="text-left"
                                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                customStyle=""
                            />
                            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white py-2">
                                Want to stay in the loop as we get closer to launch?
                                Join Our Early Access List
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ParentsLayout>
    )
}
