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
        <section className={`w-full h-auto ${bgColor} relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:pb-24">
                {heading &&
                    <div className="flex flex-col items-center justify-center">
                        <Heading
                            text={heading}
                            fontFamily="font-luckiest"
                            fontSize="text-5xl md:text-7xl"
                            fontWeight="font-normal"
                            textAlign="text-center"
                            letterSpacing="md:tracking-wider"
                            textColor={`${bgColor == "bg-[#8F0E00]" ? "text-white" : "text-[#8F0E00]"}`}
                            customStyle="mt-10 px-8 md:px-64"
                        />
                    </div>
                }
                <div className="flex flex-col md:flex-row items-center justify-center px-8 mt-24 md:gap-0 gap-y-24">
                    {cards?.map((card, index) => (
                        <CircularCard key={index} {...card} textColor={`${bgColor == "bg-[#8F0E00]" ? "text-white" : "text-black"}`} />
                    ))}
                </div>

                {buttonText &&
                    <div className="w-full flex flex-col items-center justify-center mt-20">
                        <button className={`${buttonColor || "bg-[#FFCE49]"} text-black font-bold py-4 px-8 rounded-xl`}>
                            {buttonText}
                        </button>
                    </div>
                }
            </div>
        </section>
    )
}
