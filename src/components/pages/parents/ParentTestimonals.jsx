import TestimonialCards from "@/components/cards/TestimonialCards";

const testimonials = [
    {
        comment: "We used to struggle through math worksheets—now she logs into Kurixel on her own. It’s made a huge difference.",
        author: "R. Marks",
    },
    {
        comment: "Kurixel turned screen time into learning time. As a parent, I’m thrilled to see fun and education finally go hand in hand.",
        author: "D. Thomas",
    },
    {
        comment: "I was skeptical at first, but Kurixel really surprised me. My daughter thinks it’s a game, but I can see how much she’s learning.",
        author: "L. Garcia",
    }
];


export default function ParentTestimonals() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
                <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-8 pb-24">
                    {testimonials?.map((testimonial, index) => <TestimonialCards key={index} {...testimonial} />)}
                </div>
            </div>
        </section>
    )
}
