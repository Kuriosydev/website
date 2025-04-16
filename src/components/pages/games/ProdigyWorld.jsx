import ImageButtons from "@/components/buttons/ImageButtons";
import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";


const listData = [
    { text: "Game-first learning: Kids lead the way with choices that matter" },
    { text: "Real academic alignment: Math and language skills woven into gameplay" },
    { text: "One login, multiple adventures: Access all subjects from a single dashboard" },
    { text: "Anytime, anywhere: Learn at home, on the go, or in the classroom" },
];

export default function ProdigyWorld() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-10 md:py-14">
                <div className="flex flex-row flex-wrap items-start justify-between md:-ml-44">
                    <div className="w-5/12 hidden md:flex flex-col">
                        <VideoPreview
                            src="/videos/news_banner_vid_2.mp4"
                            controls={false}
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            wrapperClass="w-full md:w-full h-full rounded-2xl"
                        />
                    </div>

                    <div className="w-full md:w-7/12 flex flex-col gap-8">
                        <Heading
                            text="What Makes Kurixel Different?"
                            fontFamily="font-luckiest"
                            fontSize="text-2xl md:text-6xl"
                            fontWeight="font-normal"
                            textAlign="text-left"
                            letterSpacing=""
                            textColor="text-[#8F0E00]"
                            customStyle=" px-10 md:px-10"
                        />

                        <div className="font-medium text-left text-base md:text-lg px-14">
                            <BulletList
                                lists={listData}
                                bullet={true}
                                isFooter={false}
                                isLink={false}
                                textClasses="font-semibold text-sm sm:text-base md:text-xl"
                                liClass="py-1"
                            />
                        </div>

                        <div className="w-3/12 ml-8">
                            <ImageButtons
                                text="Enter the Game Portal"
                                source="/images/Group.png"
                                alt="Enter the Game Portal Background"
                                className="md:mr-8 px-6 py-2 md:px-8 md:py-5"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
