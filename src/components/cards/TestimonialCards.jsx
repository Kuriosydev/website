export default function TestimonialCards({
    comment,
    author,
    authorImage
}) {
    return (
        <div className="relative flex flex-col bg-[#FFCE49] rounded-xl items-start mx-4 my-8 w-80 h-96 gap-6 px-12 py-8 md:w-3/12">
            <div className="text-left hidden">
                <img src="/images/testimonial.png" alt="comment" className="w-full h-full object-contain" />
            </div>
            <div className="text-left font-medium text-lg mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                {`"${comment}"`}
            </div>
            <div className="text-left flex font-semibold text-xl items-center justify-center">
                <img src="/images/minus.png" alt="minus" className="w-4 h-0.5" />
                <span className="px-2">{author}</span>
            </div>
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 rounded-full border-8 border-white w-40 h-40 overflow-hidden">
                <img src={authorImage} alt="Author Image" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}