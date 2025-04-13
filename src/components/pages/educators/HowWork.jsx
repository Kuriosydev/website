import ImageButtons from "@/components/buttons/ImageButtons";
import GameCards from "@/components/cards/GameCards";
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

export default function HowWork() {
    return (
        <section className={`w-full h-auto bg-[#FFCE49] relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-8 md:py-16 gap-8">
                <Heading
                    text="How Kurixel works"
                    fontFamily="font-luckiest"
                    fontSize="text-5xl md:text-7xl"
                    fontWeight="font-normal"
                    textAlign="text-center"
                    letterSpacing=""
                    textColor="text-[#8F0E00]"
                    customStyle="px-8 md:px-36"
                />
                <div className="text-center font-medium text-lg py-8">
                    Boost engagement in your classroom with two captivating learning games.
                </div>
                <div className="flex flex-row flex-wrap items-start justify-between px-10 md:px-24 py-16">
                    <GameCards type="video" data={data} />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 md:px-24">
                    <ImageButtons
                        text="Create your free teacher account"
                        source="/images/Group.png"
                        alt="Create your free teacher account"
                        className="my-2 px-6 py-3 md:px-5 md:py-8"
                        textSize="text-base"
                    />
                </div>
            </div>
        </section>
    )
}
