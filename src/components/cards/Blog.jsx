import BlackButton from "../buttons/BlackButton";
import Heading from "../texts/Heading";

export default function Blog({
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
    imgSrc
}) {
    return (
        <div className={`flex flex-col ${bgColor} ${blogCustomClass} gap-8 dark:bg-transparent dark:text-white`}>
            <Heading
                text={heading}
                fontFamily={headingFontFamily}
                fontSize={headingFontSize}
                fontWeight={headingFontWeight}
                textAlign={headingTextAlign}
                letterSpacing=""
                textColor={headingTextColor}
                customStyle={headingCustomStyle}
            />
            <div className="w-full text-lg font-normal">
                {text}
            </div>

            {author &&
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-row flex-wrap items-center gap-6">
                        <div className="rounded-full w-20 h-20">
                            <img src={author.img} alt="author" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="md:block hidden">
                            <p className="text-lg text-[#0A1D56] font-bold dark:text-white">{author.name}</p>
                            <p className="text-[#667085] text-xs font-bold">{author.publishedDate}</p>
                        </div>
                    </div>

                    <div>
                        <BlackButton text="18 Comments" />
                    </div>
                </div>
            }
            <div className="flex flex-col items-center justify-center rounded-2xl">
                <img src={imgSrc} alt="Image" className="w-full h-64 object-cover rounded-fill rounded-2xl" />
            </div>
        </div>
    )
}
