import Accordian from "../accordian/Accordian";
import ImageButtons from "../buttons/ImageButtons";
import Heading from "../texts/Heading";

export default function Faq({
    bgColor = "bg-[#FFCE49]",
    heading,
    headingColor,
    description,
    descriptionClasses = "text-left mt-12 font-medium text-lg",
    faqs,
    faqQuestionColor,
    faqQuestionFontFamily,
    faqQuestionFontSize,
    faqQuestionFontWeight,
    faqAnswerColor,
    faqAnswerFontFamily,
    faqAnswerFontSize,
    faqAnswerFontWeight,
    buttonText,
    accordianPlusColor,
    customStyles,
}) {
    return (
        <section className={`w-full h-auto ${bgColor} relative overflow-hidden `}>
            <div className={`${customStyles} w-full h-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12`}>
                <div className="flex flex-row">
                    <div className="flex flex-col items-center justify-center w-1/2 gap-4">
                        <Heading
                            text={heading}
                            fontFamily="font-luckiest"
                            fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
                            fontWeight="font-normal"
                            textAlign="text-left"
                            letterSpacing="tracking-normal sm:tracking-normal md:tracking-wide lg:tracking-wider"
                            textColor={headingColor}
                            customStyle="py-4 sm:py-5 md:py-6 lg:py-0 xl:py-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
                        />

                        {description &&
                            <div className={`${descriptionClasses} flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left sm:text-left md:text-justify lg:text-left xl:text-left`}>
                                {description}
                            </div>
                        }

                    </div>
                    <div className="relative flex flex-col items-center justify-center w-1/2">
                        <img
                            src={`${bgColor === 'bg-[#FFCE49]' ? "/images/faq_circle.png" : "/images/faq_circle_yellow.png"}`}
                            alt="FAQ Circle"
                            className="absolute w-auto sm:w-1/2 md:w-3/6 lg:w-3/8 xl:w-3/8 top-0 -right-20 z-0"
                        />
                        <img
                            src="/images/faq_girl.png"
                            alt="FAQ Girl"
                            className="relative w-[100%] md:w-auto z-10"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-10 sm:py-10 md:py-14 lg:py-16 xl:py-20 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                    <Accordian
                        items={faqs}
                        qFontFamily={faqQuestionFontFamily}
                        qColor={faqQuestionColor}
                        qFontWeight={faqQuestionFontWeight}
                        qFontSize={faqQuestionFontSize}
                        ansFontFamily={faqAnswerFontFamily}
                        ansColor={faqAnswerColor}
                        ansFontWeight={faqAnswerFontWeight}
                        ansFontSize={faqAnswerFontSize}
                    />
                </div>
                {buttonText &&
                    <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
                        <ImageButtons
                            text={buttonText}
                            source="/images/Group.png"
                            alt={buttonText + "button"}
                            className=' md:mr-12 px-6 py-2 md:px-14 md:py-5'
                        />
                    </div>
                }
            </div>
        </section>
    )
}
