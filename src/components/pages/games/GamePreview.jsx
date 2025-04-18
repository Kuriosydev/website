import VideoPreview from "@/components/videos/VideoPreview";

export default function GamePreview() {
    return (
        <section className={`w-full h-auto bg-[#FFCE49] relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex flex-wrap items-center justify-center w-auto h-full my-auto mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
                    <VideoPreview
                        src="/videos/news_banner_vid_2.mp4"
                        controls={false}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        wrapperClass="w-full md:w-full h-full rounded-4xl"
                    />
                </div>
            </div>
        </section>
    )
}
