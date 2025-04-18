"use client";

import Blog from "@/components/cards/Blog";
import SocialIcons from "@/components/icons/SocialIcons";
import { useFetchAllBlogs } from "@/hooks/query/blogs/useBlogs";

const data = [
    {
        videoSrc: '/videos/news_banner_vid_2.mp4',
        link: 'https://www.example.com',
        title: 'Students play Kurixel games',
        description: "In Prodigy Math, students are wizards engaged in epic math battles. In Prodigy English, students collect and harvest resources to build their very own world",
    },
    {
        videoSrc: '/videos/news_banner_vid_2.mp4',
        link: 'https://www.example.com',
        title: 'Students answer in-game questions',
        description: "As they battle or build, students answer questions to progress. All question content is teacher-made and is delivered through our adaptive algorithm.",
    },
    {
        videoSrc: '/videos/news_banner_vid_2.mp4',
        link: 'https://www.example.com',
        title: 'Teachers motivate & track learning',
        description: "As they play, student data appears in your teacher dashboard, which will help empower you to better understand your students' needs and deliver assessments.",
    },
];

export default function Articles() {
    const author = { img: "/images/author1.png", name: "Ensley Guerrero", publishedDate: "May 15, 2023", };

    const { data: blogs } = useFetchAllBlogs();


    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 gap-4">
                <div className="flex flex-row flex-wrap items-start justify-between px-4 sm:px-4 md:px-4 lg:px-10 xl:px-10">
                    <div className="w-2/12 pr-2 md:px-6">
                        <h3 className="font-bold text-xl md:text-3xl text-[#98A2B3] text-left md:text-right">Share</h3>
                        <div className="flex flex-col gap-8 py-4 items-end">
                            <SocialIcons socialName="facebook" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                            <SocialIcons socialName="twitter" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                            <SocialIcons socialName="pinterest" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                        </div>
                    </div>
                    <div className="w-10/12 text-left border-l-4 border-[#98A2B3] pl-7 pr-8 md:pl-14 md:pr-16">
                        {blogs?.map((blog, index) => {
                            let blogAuthor = {}
                            blogAuthor.img = blog?.authorImage
                            blogAuthor.name = blog?.author

                            return (
                                <Blog
                                    key={blog?.id}
                                    id={blog?.id}
                                    slug={blog?.title?.toLowerCase().split(" ").join("-")}
                                    heading={blog?.title}
                                    headingFontFamily="font-luckiest"
                                    headingfontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                                    headingFontWeight="font-normal"
                                    headingTextAlign="text-left"
                                    headingTextColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                    headingCustomStyle=""
                                    text={blog?.excerpt}
                                    author={blogAuthor}
                                    imgSrc=""
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
