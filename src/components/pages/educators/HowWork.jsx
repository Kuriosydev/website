import ImageButtons from "@/components/buttons/ImageButtons";
import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";

const data = [
    {
        videoSrc: '/videos/news_banner_vid_2.mp4',
        link: 'https://www.example.com',
        title: 'Kurixel Quests',
        description: "Kurixel's immersive learning games turn lessons into epic journeys. Every click brings knowledge to life. They can play anywhere and learn everywhere. ",
    },
    {
        videoSrc: '/videos/news_banner_vid_2.mp4',
        link: 'https://www.example.com',
        title: 'Learning through action',
        description: "As players explore, solve puzzles, and conquer challenges, they’re answering curriculum-aligned questions designed by real educators.",
    },
    {
        videoSrc: '/videos/news_banner_vid_2.mp4',
        link: 'https://www.example.com',
        title: 'Teachers guide the adventure',
        description: "Our teacher's dashboard gives you a front-row seat to student growth. Monitor student progress, identify learning gaps, and celebrate growth.",
    },
];

export default function HowWork() {
    return (
        <section className={`w-full h-auto bg-[#FFCE49] relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <Heading
                    text="How Kurixel Transforms Learning"
                    fontFamily="font-luckiest"
                    fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                    fontWeight="font-bold"
                    textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                />
                <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center dark:text-white">
                    Where play meets adventure and every answer unlocks a new world.
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-wrap items-start justify-between px-10 sm:px-10 md:px-0 lg:px-24 py-16">
                    <GameCards type="video" data={data} />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 md:px-24">
                    <ImageButtons
                        text="Teachers, sign up now"
                        source="/images/Group.png"
                        alt="Teachers, sign up now"
                        className=" px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                        textSize="text-base"
                    />
                </div>
            </div>
        </section>
    )
}
