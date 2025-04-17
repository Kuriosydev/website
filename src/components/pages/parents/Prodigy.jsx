import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";

const events = [
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: 'https://www.example.com',
        title: 'Kurixel Math',
        description: 'Discover the magic of math! Players embark on a journey filled with quests, battles, spells and rewards. Every battle brings more skill-building math questions for students to solve.',
        buttonText: "Discover Prodigy Math",
        buttonLink: "#"
    },
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: 'https://www.example.com',
        title: 'Kurixel English',
        description: 'Power your imagination! Create a custom-built world through reading and language practice. Every correct answer gives students more energy to gather supplies and build up your village.',
        buttonText: "Discover Prodigy Math",
        buttonLink: "#"
    },
];

export default function Prodigy() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        text="Learning made fun, in more ways than one"
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
                        fontWeight="font-bold"
                        textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-[#8F0E00] dark:text-white"
                        customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                    />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center  dark:text-white">
                    Our safe, curriculum-aligned games make online learning an adventure!
                </div>

                <div className="flex flex-col items-center justify-center px-10 md:px-20 mt-5">
                    <GameCards type={4} data={events} />
                </div>
            </div>
        </section>
    )
}
