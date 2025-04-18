import GameCards from "@/components/cards/GameCards";
import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";

const events = [
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: '#',
        title: 'Where Curiosity Becomes Adventure',
        description: "Every quest strengthens critical thinking, problem-solving, and academic skills without losing the magic of imagination.",
        buttonText: "See the research",
        buttonLink: "#",
        isImageButton: false
    },
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: '#',
        title: 'Designed for Students. Built for Educators. Backed by Schools.',
        description: "Kurixel empowers the whole learning ecosystem with an engaging platform that sparks lifelong curiosity. ",
        buttonText: "See the research",
        buttonLink: "#",
        isImageButton: false
    },
];

const listData = [
    { text: "Unlock Brighter Thinking Through Play" },
    { text: "Our interactive, story-driven games help students build confidence through consistent practice, personalized challenges, and joyful discovery. " },
];

export default function WhyProdigy() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row  flex-wrap items-start justify-between mx-auto px-10 md:px-24">
                    <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 md:py-0">
                        <Heading
                            text="Why Kurixel?"
                            fontFamily="font-luckiest"
                            fontSize="text-2xl sm:text-3xl md:text-5xl lg:text-5xl"
                            fontWeight="font-bold"
                            textAlign="text-left sm:text-center md:text-left lg:text-left xl:text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                            customStyle="py-2 sm:py-2 md:py-2 lg:py-7 xl:py-8"
                        />
                        <div className="font-medium text-left text-base md:text-lg py-2 sm:py-2 md:py-0 lg:py-0 xl:py-0 ">
                            <BulletList
                                lists={listData}
                                bullet={true}
                                isFooter={false}
                                isLink={false}
                                textClasses="font-semibold text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl"
                                liClass="py-1"
                            />
                        </div>
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 sm:py-10 md:py-10 lg:py-0 xl:py-0">
                        <GameCards type={1} data={events} />
                    </div>
                </div>
            </div>
        </section>
    )
}
