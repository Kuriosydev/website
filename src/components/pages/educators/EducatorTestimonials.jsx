import TestimonialCards from "@/components/cards/TestimonialCards";
import Heading from "@/components/texts/Heading";

export default function EducatorTestimonials({ heading, testimonials }) {
    return (
        <section className="w-full h-auto bg-white relative overflow-hidden">
            <div className="w-full h-full relative overflow-hidden pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20">

                {heading && (
                    <div className="flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
                        <Heading
                            text={heading}
                            fontFamily="font-luckiest"
                            fontSize="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl"
                            fontWeight="font-bold"
                            textAlign="text-center md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-[#8F0E00]"
                            customStyle="py-4 sm:py-4 md:py-6 lg:py-8 xl:py-10"
                        />
                    </div>
                )}

                <div className="flex flex-wrap justify-center gap-10 sm:gap-10 md:gap-4 lg:gap-12 xl:gap-12 px-8 sm:px-8 md:px-4 lg:px-6 xl:px-8">
                    {testimonials?.map((testimonial, index) => (
                        <TestimonialCards key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
