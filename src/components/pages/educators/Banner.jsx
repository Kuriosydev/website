import ImageBanner from "@/components/banners/ImageBanner";

export default function Banner() {
    return (
        <ImageBanner
            col={2}
            bgColor={"bg-[#FFCE49] dark:bg-[#001032]"}
            heading="Learning Through Play. Growth Through Adventure."
            description="Welcome to Kurixel—where imagination meets education! Kids build real skills while having real fun."
            vidSrc="/videos/news_banner_vid_2.mp4"
            buttontext="Teachers, sign up now"
            link="#"
        />

    )
}
