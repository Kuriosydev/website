export default function Feature({
    variant, // Add a 'variant' prop to control the layout
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
    const baseClasses = `flex p-2 items-center justify-center w-full h-auto ${bgColor} ${border} ${borderRounded} ${otherClasses}`;
    const imageContainerClasses = `flex flex-col items-center justify-center ${imgSource ? "w-32 h-20" : "w-8 h-8"} md:my-2 md:ml-4 rounded-xl md:rounded-2xl bg-[#FFDB52]`;
    const textContainerClasses = `flex flex-col items-start justify-center w-full h-full ml-4 py-4`;
    const headingClasses = `${headingSize} ${headingColor} ${headingWeight} ${headingSpacing} ${headingStyle}`;
    const textClasses = `${textSize} md:leading-7 ${textColor} ${textWeight} ${textSpacing} ${textStyle} md:-mt-4`;

    if (variant === "left") {
        return (
            <div className={`${baseClasses} flex-row md:h-auto`}>
                <div className={imageContainerClasses}>
                    {imgSource && <img src={imgSource} alt={imgAlt} className=" w-full h-full" />}
                </div>
                <div className={textContainerClasses}>
                    <div className={headingClasses}>
                        {heading}
                    </div>
                    <div className={textClasses}>
                        {text}
                    </div>
                </div>
            </div>
        );
    } else if (variant === "right") {
        return (
            <div className={`${baseClasses} flex-col md:h-auto md:flex-row-reverse`}>
                <div className={`flex flex-col items-center justify-center w-full h-auto p-4`}>
                    <div className={headingClasses}>
                        {heading}
                    </div>
                    <div className={`${textClasses} text-center md:mt-2`}>
                        {text}
                    </div>
                </div>
                <div className={`flex items-center justify-center w-full h-20 md:h-24 rounded-xl md:rounded-none bg-[#FFDB52]`}>
                    {imgSource && <img src={imgSource} alt={imgAlt} className="p-2 w-auto h-auto max-h-full max-w-full" />}
                </div>
            </div>
        );
    }

    // Default to the left variant if no variant is specified
    return (
        <div className={`${baseClasses} flex-row md:h-full`}>
            <div className={imageContainerClasses}>
                {imgSource && <img src={imgSource} alt={imgAlt} className="p-1.5 w-full h-full" />}
            </div>
            <div className={textContainerClasses}>
                <div className={headingClasses}>
                    {heading}
                </div>
                <div className={textClasses}>
                    {text}
                </div>
            </div>
        </div>
    );
}