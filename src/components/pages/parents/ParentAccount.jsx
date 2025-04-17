import YellowButton from "@/components/buttons/YellowButton";
import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";

export default function ParentAccount({
    heading,
    buttonText,
    buttonColor,
    cards,
    bgColor = "bg-[#8F0E00]",
}) {
    return (
        <section className={`w-full h-auto ${bgColor} relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                {heading &&
                    <div className="flex flex-col items-center justify-center">
                        <Heading
                            text={heading}
                            fontFamily="font-luckiest"
                            fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                            fontWeight="font-normal"
                            textAlign="text-center"
                            letterSpacing="tracking-normal sm:tracking-normal md:tracking-wide lg:tracking-wider"
                            textColor={`${bgColor == "bg-[#8F0E00]" ? "text-white" : "text-[#8F0E00]"} dark:text-white`}
                            customStyle="py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
                        />
                    </div>
                }
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap items-center justify-center py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 gap-8">
                    {cards?.map((card, index) => (
                        <CircularCard key={index} {...card} textColor={`${bgColor == "bg-[#8F0E00]" ? "text-white" : "text-black"} dark:text-white`} />
                    ))}
                </div>

                {buttonText &&
                    <div className="w-full flex flex-col items-center justify-center mt-20">
                        <YellowButton text={buttonText} />
                    </div>
                }
            </div>
        </section>
    )
}
