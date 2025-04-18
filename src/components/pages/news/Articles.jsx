import Blog from "@/components/cards/Blog";
import BlogTwoCols from "@/components/cards/BlogTwoCols";
import GameCards from "@/components/cards/GameCards";
import SocialIcons from "@/components/icons/SocialIcons";
import Heading from "@/components/texts/Heading";

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

    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-8 md:py-16 gap-4">
                <div className="flex flex-row flex-wrap items-start justify-between px-6 md:px-20">
                    <div className="w-2/12 pr-2 md:px-12">
                        <h3 className="font-bold text-xl md:text-3xl text-[#98A2B3] text-left md:text-right">Share</h3>
                        <div className="flex flex-col gap-8 py-4 items-end">
                            <SocialIcons socialName="facebook" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                            <SocialIcons socialName="twitter" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                            <SocialIcons socialName="pinterest" socialLink="#" color="[#98A2B3]" borderColor="white" height="10" width="10" fontSize="3xl" />
                        </div>
                    </div>
                    <div className="w-10/12 text-left border-l-4 border-[#98A2B3] pl-7 pr-8 md:pl-14 md:pr-16">
                        <Blog
                            heading="New Features of Kurixel"
                            headingFontFamily="font-luckiest"
                            headingFontSize="text-3xl md:text-6xl"
                            headingFontWeight="font-normal"
                            headingTextAlign="text-left"
                            headingTextColor="text-[#8F0E00]"
                            headingCustomStyle=""
                            text="The fancy moon going in little artist painting. Thirty days of lavender in the dreamy light inside. Other perfect oh plants, for and again. I've honey feeling. Caring dreamland projects noteworthy than minimal, their it oh pretty feeling may. Include pink be."
                            author={author}
                            imgSrc="/images/image1.png"
                        />

                        <BlogTwoCols
                            heading="Take Kurixel with you anywhere."
                            headingFontFamily="font-luckiest"
                            headingFontSize="text-2xl md:text-4xl"
                            headingFontWeight="font-normal"
                            headingTextAlign="text-left"
                            headingTextColor="text-[#8F0E00]"
                            headingCustomStyle=""
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
                            videoSrc="/videos/news_banner_vid_2.mp4"
                            blogCustomClass="py-8 md:py-12"
                        />

                        <BlogTwoCols
                            heading="Take Kurixel with you anywhere."
                            headingFontFamily="font-luckiest"
                            headingFontSize="text-2xl md:text-4xl"
                            headingFontWeight="font-normal"
                            headingTextAlign="text-left"
                            headingTextColor="text-[#8F0E00]"
                            headingCustomStyle=""
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
                            imgSrc="/images/image1.png"
                            blogCustomClass="py-8 md:py-12"
                        />

                        <div className="flex flex-row flex-wrap items-start justify-between md:py-8">
                            <Heading
                                text="Events & Promotions"
                                fontFamily="font-luckiest"
                                fontSize="text-5xl md:text-7xl"
                                fontWeight="font-normal"
                                textAlign="text-left"
                                letterSpacing=""
                                textColor="text-[#8F0E00]"
                                customStyle=""
                            />
                        </div>

                        <div className="flex flex-row flex-wrap items-start justify-between">
                            <GameCards type="video" data={data} customDivClass="flex flex-wrap items-start justify-between gap-6" />
                        </div>

                        <BlogTwoCols
                            heading="Take Kurixel with you anywhere."
                            headingFontFamily="font-luckiest"
                            headingFontSize="text-2xl md:text-4xl"
                            headingFontWeight="font-normal"
                            headingTextAlign="text-left"
                            headingTextColor="text-[#8F0E00]"
                            headingCustomStyle=""
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
                            imgSrc="/images/image1.png"
                            blogCustomClass="py-8 md:py-12"
                        />

                        <div className="flex flex-col flex-wrap items-start justify-between md:py-8 gap-8">
                            <Heading
                                text="Take Kurixel with you anywhere."
                                fontFamily="font-luckiest"
                                fontSize="text-2xl md:text-4xl"
                                fontWeight="font-normal"
                                textAlign="text-left"
                                letterSpacing=""
                                textColor="text-[#8F0E00]"
                                customStyle=""
                            />

                            <div className="w-full h-auto text-lg font-normal ">
                                <p className="py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                <p className="py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
