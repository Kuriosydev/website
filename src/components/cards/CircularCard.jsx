import Heading from "../texts/Heading";

export default function CircularCard({
    imgSrc,
    heading,
    description,
    textColor = "text-white ",
    isRow = false,
    image = true
}) {
    return isRow
        ? (
            <div className={`flex flex-row w-full h-full items-start justify-between py-6 md:py-auto gap-4 md:gap-4`}>
                {image &&
                    <div className="w-24 h-24 bg-white  dark:bg-black rounded-full flex items-center justify-center">
                        <img src={imgSrc} alt="Circle image" className="w-full h-full object-contain" />
                    </div>
                }
                <div className="w-full h-full flex flex-col items-start justify-start">
                    <Heading
                        text={heading}
                        fontFamily=""
                        fontSize="text-base"
                        fontWeight="font-semibold"
                        textAlign="text-left"
                        letterSpacing=""
                        textColor={`${textColor} dark:text-[#FFCE49]`}
                        customStyle=""
                    />
                    <p className={`text-gray-400 text-left text-sm font-medium dark:text-white`}>{description}</p>
                </div>
            </div>
        )
        : (
            <div className="w-96 h-96 flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 px-10 gap-4">
                {image &&
                    <div className="w-52 h-52 bg-white rounded-full flex items-center justify-center ">
                        <img src={imgSrc} alt="Circle image" className="w-full h-full object-cover" />
                    </div>
                }
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <Heading
                        text={heading}
                        fontFamily="font-luckiest"
                        fontSize="text-xl md:text-2xl lg:text-2xl xl:text-3xl"
                        fontWeight="font-normal"
                        textAlign="text-center"
                        letterSpacing="tracking-normal sm:tracking-normal md:tracking-wide lg:tracking-wider"
                        textColor={textColor}
                        customStyle="px-8 sm:px-10 md:px-0 lg:px-0"
                    />
                </div>
                <div className="w-full h-full flex flex-col items-start justify-start">
                    <p className={`${textColor} text-center sm:text-center md:text-left lg:text-left xl:text-left text-base dark:text-white`}>{description}</p>
                </div>
            </div>
        )
}
