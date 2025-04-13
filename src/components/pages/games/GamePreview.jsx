import VideoPreview from "@/components/videos/VideoPreview";

export default function GamePreview() {
    return (
        <section className={`w-full h-auto bg-[#FFCE49] relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-4 md:py-10">
                <div className="flex flex-wrap items-center justify-center w-auto h-full my-auto mx-auto px-12 md:px-44 md:py-10">
                    <VideoPreview
                        src="/videos/news_banner_vid_2.mp4"
                        controls={false}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        wrapperClass="w-full md:w-full h-full rounded-2xl"
                    />
                </div>
            </div>
        </section>
    )
}
