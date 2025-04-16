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
        description: "Our teacher's dashboard gives you a front-row seat to student growth. Monitor student progress, identify learning gaps, and celebrate growth",
    },
];

export default function HowWork() {
    return (
        <section className={`w-full h-auto bg-[#FFCE49] relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-8 md:py-16 gap-8">
                <Heading
                    text="How Kurixel Transforms Learning"
                    fontFamily="font-luckiest"
                    fontSize="text-5xl md:text-7xl"
                    fontWeight="font-normal"
                    textAlign="text-center"
                    letterSpacing=""
                    textColor="text-[#8F0E00]"
                    customStyle="px-8 md:px-36"
                />
                <div className="text-center font-medium text-lg py-8">
                    Where play meets adventure — and every answer unlocks a new world.
                </div>
                <div className="flex flex-row flex-wrap items-start justify-between px-10 md:px-24 py-16">
                    <GameCards type="video" data={data} />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 md:px-24">
                    <ImageButtons
                        text="Teachers, sign up now"
                        source="/images/Group.png"
                        alt="Teachers, sign up now"
                        className="my-2 px-6 py-3 md:px-5 md:py-8"
                        textSize="text-base"
                    />
                </div>
            </div>
        </section>
    )
}
