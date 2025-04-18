export default function TestimonialCards({
    comment,
    author,
    authorImage
}) {
    return (
        <div className="relative flex flex-col bg-[#FFCE49] rounded-xl items-start mx-auto my-8 w-auto h-auto gap-6 px-6 py-6 
                        sm:w-72 sm:px-6 sm:py-6 
                        md:w-3/12 md:px-8 md:py-8 
                        lg:w-80 lg:px-10 lg:py-10 
                        xl:w-96 xl:px-12 xl:py-12">
            <div className="text-left font-medium text-base mt-4 
                            sm:text-base sm:mt-4 
                            md:text-lg md:mt-6 
                            lg:text-lg lg:mt-8 
                            xl:text-xl xl:mt-10">
                {`"${comment}"`}
            </div>
            {author &&
                <div className="text-left flex font-semibold text-lg items-center justify-center 
                            sm:text-lg 
                            md:text-xl 
                            lg:text-xl 
                            xl:text-2xl pb-10 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-18">
                    <img src="/images/minus.png" alt="minus" className="w-4 h-0.5" />
                    <span className="px-2">{author}</span>
                </div>
            }
            {authorImage &&
                <div className="absolute -bottom-15 sm:-bottom-15 md:-bottom-15 lg:-bottom-20 xl:-bottom-20 left-1/2 transform -translate-x-1/2 rounded-full border-8 border-white 
                            w-28 h-28 
                            sm:w-28 sm:h-28 
                            md:w-32 md:h-32 
                            lg:w-36 lg:h-36 
                            xl:w-40 xl:h-40 overflow-hidden">
                    <img src={authorImage} alt="Author Image" className="w-full h-full object-cover" />
                </div>
            }
        </div>
    );
}
