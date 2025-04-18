import React from 'react'
import TestimonialCards from "@/components/cards/TestimonialCards";
import Heading from "@/components/texts/Heading";

const testimonials = [
    {
        comment: "Kurixel is a great way to get kids who don't like math into math.",
        author: "Ensley Guerrero",
        authorImage: "/images/author1.png"
    },
    {
        comment: "I love that Kurixel is fun for students. ",
        author: "Karina Vega",
        authorImage: "/images/author2.png"
    },
    {
        comment: "Kurixel is a great way to get kids who don't like math into math.",
        author: "Journey Vaughn",
        authorImage: "/images/author3.png"
    }
];
export default function Prodigy() {
  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <Heading
                  text="Teachers are talking about Prodigy’s curriculum alignment"
                  fontFamily="font-luckiest"
                  fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
                  fontWeight="font-bold"
                  textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                  letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                  textColor="text-[#8F0E00]"
                  customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                />
      <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-8 pb-24">
                    {testimonials?.map((testimonial, index) => <TestimonialCards key={index} {...testimonial} />)}
                </div>
        </div>
        </section>
  )
}
