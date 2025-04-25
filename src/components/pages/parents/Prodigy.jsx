import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";

const events = [
    {
        imageSrc: '/images/game_screen1.jpeg',
        link: '#',
        title: 'Play. Battle. Learn. Repeat.',
        description: 'Players conquer math challenges, earn rewards, and grow with every quest they complete.',
        buttonText: "Explore More",
        buttonLink: "/games"
    },
    {
        imageSrc: '/images/game_screen4.jpeg',
        link: '#',
        title: 'Reading, writing, and world-building',
        description: "Students grow their vocabulary while shaping a world that's uniquely their own.",
        buttonText: "Explore More",
        buttonLink: "/games/subjects/english"
    },
];

export default function Prodigy() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        text="Where curiosity meets confidence"
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                        customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                    />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center  dark:text-white">
                    Kurixel blends playful adventures with real learning goals so kids feel safe, supported, and excited to keep exploring.
                </div>

                <div className="flex flex-col items-center justify-center px-10 md:px-20 mt-5">
                    <GameCards type={4} data={events} />
                </div>
            </div>
        </section>
    )
}
