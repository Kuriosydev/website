import TestimonialCards from "@/components/cards/TestimonialCards";
import Heading from "@/components/texts/Heading";


export default function EducatorTestimonials({ heading, testimonials }) {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
                {heading &&
                    <div className="flex flex-row items-center justify-center">
                        <Heading
                            text={heading}
                            fontFamily="font-luckiest"
                            fontSize="text-5xl md:text-7xl"
                            fontWeight="font-normal"
                            textAlign="text-center"
                            letterSpacing=""
                            textColor="text-[#8F0E00]"
                            customStyle="px-12 py-4 md:py-4 md:px-36"
                        />
                    </div>
                }
                <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-8 pb-24">
                    {testimonials?.map((testimonial, index) => <TestimonialCards key={index} {...testimonial} />)}
                </div>
            </div>
        </section>
    )
}
