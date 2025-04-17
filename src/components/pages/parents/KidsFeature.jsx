import Feature from "@/components/texts/Feature";
import Heading from "@/components/texts/Heading";

const features = [
    {
        imgSource: "",
        heading: "Smart Play. Real Learning",
        text: "Kurixel makes math and reading fun so your child builds skills and confidence while they play.",
    },
    {
        imgSource: "",
        heading: "Stay in the Loop",
        text: "Easily follow their progress and celebrate wins together.",
    },
    {
        imgSource: "",
        heading: "Support Without the Stress",
        text: "No need to be a math whiz. Kurixel adapts to your child’s level and grows with them.",
    },
];

export default function KidsFeature() {
    return (
        <section className={`w-full h-auto bg-[#FFCE49] relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        text="Learning That Feels Like Play"
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
                        fontWeight="font-bold"
                        textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                        customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                    />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center  dark:text-white">
                    We’ve created an immersive, story-driven platform where education feels like an adventure. Kurixel makes math magical, reading exciting, and curiosity unstoppable.
                </div>

                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
                        <img src="/images/kids.png" alt="Kids image" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
                        {features?.map((feature, index) => (
                            <Feature
                                key={index}
                                variant="left"
                                imgSource={feature?.imgSource}
                                imgAlt={feature?.heading}
                                heading={feature?.heading}
                                headingColor={"text-white dark:text-black"}
                                headingSize={"text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"}
                                headingWeight={"font-bold"}
                                headingSpacing={"tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"}
                                headingStyle={"leading-7 md:leading-2 lg:leading-10 xl:leading-10"}
                                text={feature?.text}
                                textColor={"text-white dark:text-black py-8"}
                                textSize={"text-xs sm:text-base md:text-base lg:text-lg xl:text-xl"}
                                textWeight={"font-normal"}
                                textSpacing={"tracking-normal sm:tracking-normal md:tracking-normal lg:tracking-wide"}
                                textStyle={"md:leading-7"}
                                bgColor={"bg-[#8F0E00] dark:bg-[#FFCE49]"}
                                border={"border-2 border-[#8F0E00] dark:border-[#FFCE49]"}
                                borderRounded={"rounded-2xl md:rounded-3xl"}
                                otherClasses={"my-3 md:my-4  w-full"} // Make each feature take full width in its container
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
