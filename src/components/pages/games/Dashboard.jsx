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
        <section className="w-full h-auto bg-[#FFCE49]">
            <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-16">
                <div className="py-10">
                    <Heading
                        text="One Account. Endless Adventures."
                        fontFamily="font-luckiest"
                        fontSize="text-4xl md:text-6xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-center"
                        letterSpacing="md:tracking-wider"
                        textColor="text-[#8F0E00]"
                        customStyle="px-4"
                    />
                </div>

                <div className="text-lg font-medium text-center max-w-4xl mb-10">
                    Kurixel transforms screen time into quest time. Unlock a universe of learning with a single Kurixel dashboard.
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 py-10">
                    <div className="flex flex-col items-start justify-between w-full md:w-1/2 gap-6 md:pr-24">
                        <BulletList
                            lists={listData}
                            bullet={true}
                            isFooter={false}
                            isLink={false}
                            textClasses="font-semibold text-sm sm:text-base md:text-xl"
                            liClass="py-4"
                        />
                    </div>

                    <div className="w-full md:w-1/2 max-w-3xl">
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