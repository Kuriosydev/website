import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";

const events = [
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: 'https://www.example.com',
        title: 'Game-based learning built on research',
        description: "Discover how Prodigy's can help improve student outcomes and attitudes in learning.",
        buttonText: "See the research",
        buttonLink: "#",
        isImageButton: false
    },
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: 'https://www.example.com',
        title: 'Prodigy supports students, educators and schools',
        description: "See how Prodigy has helped educators and schools succeed with game-based learning.",
        buttonText: "See the research",
        buttonLink: "#",
        isImageButton: false
    },
];

export default function WhyProdigy() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-8 md:py-16">
                <div className="flex flex-col md:flex-row flex-wrap items-start justify-between mx-auto px-10 md:px-24">
                    <div className="w-full md:w-4/12 flex flex-col gap-8 py-10 md:py-0">
                        <Heading
                            text="Why Prodigy?"
                            fontFamily="font-luckiest"
                            fontSize="text-2xl md:text-5xl"
                            fontWeight="font-normal"
                            textAlign="text-left"
                            letterSpacing=""
                            textColor="text-[#8F0E00]"
                        />
                        <div className="text-left font-medium text-lg">
                            "Students are more confident because of the extra practice they receive with Prodigy Math Game. My students typically score higher on math benchmarks because I'm able to differentiate instruction using the Prodigy reports!"
                        </div>
                    </div>
                    <div className="w-full md:w-8/12 flex flex-col gap-8">
                        <GameCards type={1} data={events} />
                    </div>
                </div>
            </div>
        </section>
    )
}
