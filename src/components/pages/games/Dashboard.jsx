import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";

const listData = [
    { text: "Built for Play. Designed for Growth." },
    { text: "Build math confidence through puzzles, quests, and battles." },
    { text: "Strengthen language skills by creating, crafting, and storytelling." },
    { text: "Stay curious with new content that adapts to their pace and progress." },
];

export default function Dashboard() {
    return (
        <section className="w-full h-auto bg-[#FFCE49] dark:bg-[#212121]">
            <div className="flex flex-col items-center justify-center w-full h-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="py-10">
                    <Heading
                        text="One Account. Endless Adventures."
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-center"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-[#8F0E00] dark:text-white"
                        customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
                    />
                </div>

                <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center  dark:text-white">
                    Kurixel transforms screen time into quest time. Unlock a universe of learning with a single Kurixel dashboard.
                </div>

                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-start justify-between w-full gap-10 py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12">
                    <div className="flex flex-col items-start justify-between w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 gap-6 lg:pr-24">
                        <BulletList
                            lists={listData}
                            bullet={true}
                            isFooter={false}
                            isLink={false}
                            textClasses="font-semibold text-sm sm:text-base md:text-xl"
                            liClass="py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 ml-5 sm:ml-0 md:ml-0 lg:ml-16"
                        />
                    </div>

                    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 max-w-3xl">
                        <div className="relative w-full pt-[66.25%]">
                            <img
                                src="/images/2149554978 1.png"
                                alt="Tablet on Stone"
                                className="absolute top-0 left-0 w-full h-full object-contain"
                            />

                            <div className="absolute top-[2%] left-[18%] w-[60%] h-[70%] rotate-[0.7deg] rounded-xl overflow-hidden z-50">
                                <VideoPreview
                                    src="/videos/preview.mp4"
                                    controls={false}
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    wrapperClass="w-full h-full "
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}