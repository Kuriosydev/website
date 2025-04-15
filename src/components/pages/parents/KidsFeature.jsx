import Feature from "@/components/texts/Feature";
import Heading from "@/components/texts/Heading";

const features = [
    {
        imgSource: "",
        heading: "Boost your child's confidence and skills.",
        text: "When your child plays Kurixel, they'll master curriculum-aligned math and English skills in a safe, fun and secure environment.",
    },
    {
        imgSource: "",
        heading: "Boost your child's confidence and skills.",
        text: "When your child plays Kurixel, they'll master curriculum-aligned math and English skills in a safe, fun and secure environment.",
    },
    {
        imgSource: "",
        heading: "Boost your child's confidence and skills.",
        text: "When your child plays Kurixel, they'll master curriculum-aligned math and English skills in a safe, fun and secure environment.",
    },
];

export default function KidsFeature() {
    return (
        <section className={`w-full h-auto bg-[#FFCE49] relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        text="Kids don't have to choose between homework and playtime with Kurixel"
                        fontFamily="font-luckiest"
                        fontSize="text-5xl md:text-7xl"
                        fontWeight="font-normal"
                        textAlign="text-center"
                        letterSpacing="md:tracking-wider"
                        textColor="text-[#8F0E00]"
                        customStyle="mt-10 px-8 md:px-20"
                    />
                </div>
                <div className="w-auto h-auto flex text-center flex-wrap items-center justify-center mx-10 md:px-72 text-lg font-medium py-5">
                    Trusted by more than 3 million teachers around the world, our online educational platform keeps learning fun for your child.
                </div>

                <div className="flex flex-row flex-wrap items-center justify-center px-10 md:px-20 ">
                    <div className="w-1/2 flex flex-row flex-wrap items-center justify-center">
                        <img src="/images/kids.png" alt="Kids image" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-0 md:px-10">
                        {features?.map((feature, index) => (
                            <Feature
                                key={index}
                                variant="left"
                                imgSource={feature?.imgSource}
                                imgAlt={feature?.heading}
                                heading={feature?.heading}
                                headingColor={"text-white"}
                                headingSize={"text-base md:text-2xl"}
                                headingWeight={"font-bold"}
                                headingSpacing={"tracking-wide"}
                                headingStyle={"md:leading-14"}
                                text={feature?.text}
                                textColor={"text-white"}
                                textSize={"text-xs md:text-base"}
                                textWeight={"font-normal"}
                                textSpacing={"md:tracking-wide"}
                                textStyle={"md:leading-7"}
                                bgColor={"bg-[#8F0E00]"}
                                border={"border-2 border-[#8F0E00]"}
                                borderRounded={"rounded-2xl md:rounded-3xl"}
                                otherClasses={"my-3 md:my-4 w-full"} // Make each feature take full width in its container
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
