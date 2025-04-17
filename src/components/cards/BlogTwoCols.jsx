import Heading from "../texts/Heading";
import VideoPreview from "../videos/VideoPreview";

export default function BlogTwoCols({
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
    imgSrc,
    videoSrc,
}) {
    return (
        <div className={`flex flex-col md:flex-row items-start justify-between ${bgColor} ${blogCustomClass} gap-8 dark:bg-transparent dark:text-white`}>
            <div className="w-8/12">
                {
                    imgSrc
                        ? (<img src={imgSrc} alt="Image" className="w-full h-auto object-cover rounded-fill rounded-2xl" />
                        )
                        : (
                            <VideoPreview
                                src={videoSrc}
                                controls={false}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                wrapperClass="w-full h-full rounded-2xl"
                                position="object-cover"
                            />
                        )
                }
            </div>
            <div className="4/12">
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
            </div>
        </div>
    )
}
