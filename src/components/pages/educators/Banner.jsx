import ImageBanner from "@/components/banners/ImageBanner";

export default function Banner() {
    return (
        <ImageBanner
            col={2}
            bgColor={"bg-[#FFCE49]"}
            heading="Learning That Feels Like Play. Adventure That Sparks Growth."
            description="Welcome to Kurixel where imagination, exploration, and education collide! We transform traditional learning into action-packed adventures kids love. Designed for Grades 1-8 to help learners build real skills while having real fun. No boring drills. No pressure. Just pure discovery.
                  Play Anywhere. Level Up Every Day."
            vidSrc="/videos/news_banner_vid_2.mp4"
        />

    )
}
