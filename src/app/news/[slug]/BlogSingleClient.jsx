"use client";

import SocialIcons from "@/components/icons/SocialIcons";
import Heading from "@/components/texts/Heading";
import { useFetchSingleBlog } from "@/hooks/query/blogs/useBlogs";

export default function BlogSingleClient({ id }) {
    const { data: blog } = useFetchSingleBlog(id);
    console.log("blog: ", blog);

    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 gap-4">
                <div className="flex flex-row flex-wrap items-start justify-between px-4 sm:px-4 md:px-4 lg:px-10 xl:px-10">
                    <div className=" hidden w-2/12 pr-2 md:px-6">
                        <h3 className="font-bold text-xl md:text-3xl text-[#98A2B3] text-left md:text-right">Share</h3>
                        <div className="flex flex-col gap-8 py-4 items-end">
                            <SocialIcons socialName="facebook" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                            <SocialIcons socialName="twitter" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                            <SocialIcons socialName="pinterest" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                        </div>
                    </div>
                    <div className="w-full text-left pl-7 pr-8 md:pl-14 md:pr-16">
                        {blog &&
                            <div className={`flex flex-col gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4 py-10 sm:py-10 md:py-14 lg:py-14 xl:py-14 dark:bg-transparent dark:text-white `}>
                                <Heading
                                    text={blog?.title}
                                    fontFamily="font-luckiest"
                                    fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                                    fontWeight="font-normal"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                    customStyle="py-4"
                                />

                                {blog?.author &&
                                    <div className="flex justify-start items-start w-full py-4">
                                        <div className="flex flex-row flex-wrap items-center gap-6">
                                            {blog?.authorImage &&
                                                <div className="rounded-full w-10 md:w-12 lg:w-20 xl:w-20 h-10 md:h-12 lg:h-20 xl:h-20">
                                                    <img src={blog?.authorImage} alt="author" className="w-16 h-16 object-contain " />
                                                </div>
                                            }
                                            {(blog?.author || blog?.publishedDate) &&
                                                <div className="md:block hidden">
                                                    <p className="text-lg text-[#0A1D56] font-bold dark:text-white">{blog?.author}</p>
                                                    <p className="text-[#667085] text-xs font-bold">{blog?.publishedDate}</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }

                                {blog?.subtitle &&
                                    <Heading
                                        text={blog?.subtitle}
                                        fontFamily="font-luckiest"
                                        fontSize="text-xl sm:text-xl md:text-2xl lg:text-3xl"
                                        fontWeight="font-normal"
                                        textAlign="text-left"
                                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                        textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                        customStyle="py-4"
                                    />
                                }

                                {blog?.excerpt &&
                                    <div className="w-full font-normal text-justify text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl py-4">
                                        {Array.isArray(blog?.excerpt)
                                            ? blog?.excerpt?.map((item, index) => <p key={index} className="py-4">{item}</p>)
                                            : <p className="py-4">{blog?.excerpt}</p>
                                        }
                                    </div>
                                }

                                {blog?.content && blog?.content?.map((row, index) =>
                                    <div key={index} className="w-full font-normal text-justify text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl py-4">
                                        <Heading
                                            text={row?.heading}
                                            fontFamily="font-luckiest"
                                            fontSize="text-xl sm:text-xl md:text-2xl lg:text-3xl"
                                            fontWeight="font-normal"
                                            textAlign="text-left"
                                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                            textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                            customStyle="py-4"
                                        />

                                        {Array.isArray(row?.paragraphs) &&
                                            row?.paragraphs?.map((paragraph, index) =>
                                                <div key={index} className="w-full font-normal text-justify text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl py-4">
                                                    {Array.isArray(paragraph)
                                                        ?
                                                        <ul className="px-8 list-disc marker:text-black dark:marker:text-white">
                                                            {paragraph?.map((item, index) =>
                                                                <li key={index} className="py-2 marker:text-black dark:marker:text-white">{item}</li>
                                                            )}
                                                        </ul>
                                                        : <p>{paragraph}</p>
                                                    }
                                                </div>
                                            )
                                        }

                                    </div>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
