import TestimonialCards from "@/components/cards/TestimonialCards";

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


export default function ParentTestimonals() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
                <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-8 pb-24">
                    {testimonials?.map((testimonial, index) => <TestimonialCards key={index} {...testimonial} />)}
                </div>
            </div>
        </section>
    )
}
