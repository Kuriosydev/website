import Link from "next/link";
import BlackButton from "../buttons/BlackButton";
import YellowButton from "../buttons/YellowButton";
import Heading from "../texts/Heading";

export default function Blog({
    id,
    slug,
    bgColor = "bg-white",
    blogCustomClass,
    heading,
    headingFontFamily = "font-luckiest",
    headingFontSize = "text-3xl md:text-6xl",
    headingFontWeight = "font-normal",
    headingTextAlign = "text-left",
    headingTextColor = "text-[#8F0E00]",
    headingCustomStyle = "",
    text,
    author,
    imgSrc,
    comments
}) {
    return (
        <div className={`flex flex-col ${bgColor} ${blogCustomClass} gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4 py-10 sm:py-10 md:py-14 lg:py-14 xl:py-14 dark:bg-transparent dark:text-white `}>
            <Heading
                text={heading}
                fontFamily={headingFontFamily}
                fontSize={headingFontSize}
                fontWeight={headingFontWeight}
                textAlign={headingTextAlign}
                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                textColor={headingTextColor}
                customStyle={headingCustomStyle}
            />
            <div className="w-full font-normal text-justify text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {text}
            </div>
            <div className=" flex justify-between items-center w-full">
                <Link href={`/news/${id}`}>
                    <YellowButton text="Read More" />
                </Link>
            </div>
            {author &&
                <div className=" hidden justify-between items-center w-full">
                    <div className="flex flex-row flex-wrap items-center gap-6">
                        {author.img &&
                            <div className="rounded-full w-10 md:w-12 lg:w-20 xl:w-20 h-10 md:h-12 lg:h-20 xl:h-20">
                                <img src={author.img} alt="author" className="w-16 h-16 object-contain " />
                            </div>
                        }
                        {(author.name || author.publishedDate) &&
                            <div className="md:block hidden">
                                <p className="text-lg text-[#0A1D56] font-bold dark:text-white">{author.name}</p>
                                <p className="text-[#667085] text-xs font-bold">{author.publishedDate}</p>
                            </div>
                        }
                    </div>
                    {comments &&
                        <div>
                            <BlackButton text="18 Comments" />
                        </div>
                    }

                </div>
            }

            {imgSrc &&
                <div className="flex flex-col items-center justify-center rounded-2xl py-6 sm:py-6 md:py-8 lg:py-10 xl:py-10">
                    <img src={imgSrc} alt="Image" className="w-full h-64 object-cover rounded-fill rounded-2xl" />
                </div>
            }

        </div>
    )
}
