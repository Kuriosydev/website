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
        <section className={`w-full h-auto ${bgColor} relative overflow-hidden`}>
            <div className={`${customStyles} w-full h-full px-12 md:px-16 mt-12 md:mt-0`}>
                <div className="flex flex-row">
                    <div className="flex flex-col items-center justify-center w-1/2 gap-4">
                        <Heading
                            text={heading}
                            fontFamily="font-luckiest"
                            fontSize="text-5xl md:text-7xl"
                            fontWeight="font-normal"
                            textAlign="text-left"
                            letterSpacing="md:tracking-wider"
                            textColor={headingColor}
                            customStyle="ml-20 md:ml-0 md:mr-14 "
                        />

                        {description &&
                            <div className={`${descriptionClasses} md:py-4 py-2`}>
                                {description}
                            </div>
                        }

                    </div>
                    <div className="relative flex flex-col items-center justify-center w-1/2">
                        <img
                            src={`${bgColor === 'bg-[#FFCE49]' ? "/images/faq_circle.png" : "/images/faq_circle_yellow.png"}`}
                            alt="FAQ Circle"
                            className="absolute w-auto top-0 -right-20 z-0"
                        />
                        <img
                            src="/images/faq_girl.png"
                            alt="FAQ Girl"
                            className="relative w-[100%] md:w-auto z-10"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
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
