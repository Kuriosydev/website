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
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        text="Learning made fun, in more ways than one"
                        fontFamily="font-luckiest"
                        fontSize="text-5xl md:text-7xl"
                        fontWeight="font-normal"
                        textAlign="text-center"
                        letterSpacing="md:tracking-wider"
                        textColor="text-[#8F0E00]"
                        customStyle="mt-10 px-8 md:px-36"
                    />
                </div>
                <div className="w-auto h-auto flex flex-wrap items-center justify-center mx-10 md:px-72 text-lg font-medium py-5">
                    Our safe, curriculum-aligned games make online learning an adventure!
                </div>

                <div className="flex flex-col items-center justify-center px-10 md:px-20 mt-5">
                    <GameCards type={4} data={events} />
                </div>
            </div>
        </section>
    )
}
