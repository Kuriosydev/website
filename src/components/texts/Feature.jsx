
export default function Feature({
    imgSource,
    imgAlt,
    heading,
    headingColor,
    headingSize,
    headingWeight,
    headingSpacing,
    headingStyle,
    text,
    textColor,
    textSize,
    textWeight,
    textSpacing,
    textStyle,
    bgColor,
    border,
    borderRounded,
    otherClasses
}) {
    return (
        <div className={`flex p-2 flex-row items-center justify-center w-auto h-20 md:h-24 ${bgColor} ${border} ${borderRounded} ${otherClasses}`}>
            <div className="flex flex-col items-center justify-center w-1/4 h-full md:my-2 md:ml-4 rounded-xl md:rounded-2xl bg-[#FFDB52]">
                <img src={imgSource} alt={imgAlt} className="p-1.5 w-full h-full" />
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full ml-4 py-4">
                <div className={`${headingSize} md:leading-14 ${headingColor} ${headingWeight} ${headingSpacing} ${headingStyle}`}>
                    {heading}
                </div>
                <div className={`${textSize} md:leading-7 ${textColor} ${textWeight} ${textSpacing} ${textStyle} md:-mt-4`}>
                    {text}
                </div>
            </div>
        </div>
    )
}
