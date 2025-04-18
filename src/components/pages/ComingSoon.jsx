import Heading from "../texts/Heading";

export default function ComingSoon({
    heading,
    subheading,
    description
}) {
    return (
        <section className="w-auto h-auto">
            <div className="w-full min-h-screen relative overflow-hidden -mt-36 pt-[80px]">
                <img
                    src="/images/frame_177_1.png"
                    alt="Banner"
                    className="absolute top-0 left-0 w-full h-full object-cover object-left md:object-center -z-10 block dark:hidden"
                />
                <img
                    src="/images/dark/home_banner.png"
                    alt="Banner"
                    className="absolute top-0 left-0 w-full h-full object-cover object-left md:object-center -z-10 hidden dark:block"
                />
                {/* Optional overlay */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/40 sm:bg-transparent" />

                {(heading || subheading || description) &&
                    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center px-4 w-full max-w-screen-xl mx-auto">
                        {heading &&
                            <Heading
                                text={heading}
                                fontFamily="font-luckiest"
                                fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
                                fontWeight="font-bold"
                                textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                            />
                        }
                        {subheading &&
                            <Heading
                                text={subheading}
                                fontFamily="font-luckiest"
                                fontSize="text-xl sm:text-xl md:text-2xl lg:text-3xl"
                                fontWeight="font-bold"
                                textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                textColor="text-[#8F0E00] dark:text-white"
                                customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                            />
                        }
                        {description &&
                            <p className="mt-4 font-medium text-[18px] leading-[22px] tracking-[0] text-white sm:text-black text-center break-keep dark:text-white sm:dark:text-white md:dark:text-white lg:dark:text-white xl:dark:text-white">
                                {description}
                            </p>
                        }
                    </div>
                }
            </div>
        </section >
    )
}
