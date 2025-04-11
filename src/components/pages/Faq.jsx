import Accordian from "../accordian/Accordian";
import Heading from "../texts/Heading";

export default function Faq({
    bgColor = "bg-[#FFCE49]",
    heading,
    headingColor,
    description,
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
        <section className={`w-full h-auto ${bgColor} relative overflow-hidden z-30`}>
            <div className={`${customStyles} w-full h-full px-16`}>
                <div className="flex flex-row">
                    <div className="flex flex-col items-center justify-center w-1/2">
                        <Heading
                            text={heading}
                            fontFamily="font-luckiest"
                            fontSize="text-5xl md:text-7xl"
                            fontWeight="font-normal"
                            textAlign="text-left"
                            letterSpacing="md:tracking-wider"
                            textColor={headingColor}
                            customStyle="mr-14"
                        />
                        <div className="text-left mt-12 font-medium text-lg">
                            {description}
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-1/2">
                        <img
                            src="/images/faq_circle.png"
                            alt="FAQ Circle"
                            className="absolute w-auto top-0 -right-20 z-0"
                        />
                        <img
                            src="/images/faq_girl.png"
                            alt="FAQ Girl"
                            className="relative w-auto z-10"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-12 mt-20">
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
            </div>
        </section>
    )
}
