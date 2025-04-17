import ResourceCard from "@/components/cards/ResourceCard";
import Heading from "@/components/texts/Heading";


export default function ResourceBlog({
    bgColor = "bg-white",
    bgImgSrc,
    heading,
    resourceCards,
}) {
    return (
        <section className={`w-full h-auto ${bgColor} relative overflow-hidden z-10 dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:pb-64">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-full h-full bg-black/100">
                        <img src={bgImgSrc} alt="Resource Blog Image" className="w-full h-full object-cover opacity-60" />
                    </div>
                    <div className="absolute">
                        <Heading
                            text={heading}
                            fontFamily="font-luckiest"
                            fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                            fontWeight="font-bold"
                            textAlign="text-center"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white"
                            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="relative md:absolute flex flex-col md:flex-row items-center justify-center px-14 md:px-0 ">
                        {resourceCards?.map((resorce, index) =>
                            <ResourceCard
                                key={index}
                                bgColor="bg-[#FFCE49]"
                                text={resorce.text}
                                href={resorce.link}
                                linkText={resorce.linkText}
                                customStyles="m-6"
                            />
                        )}
                    </div>
                </div>
            </div>

        </section>
    )
}
