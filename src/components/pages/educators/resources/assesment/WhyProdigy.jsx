import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";

const events = [
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: '#',
        title: 'Kurixel Ignites a Love for Learning',
        description: "Students using Kurixel master skills through story-rich adventures that spark curiosity and build confidence.",
        buttonText: "Learn more",
        buttonLink: "/news",
        isImageButton: false
    },
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: '#',
        title: 'Learning That Sticks—Anywhere, Anytime',
        description: "Kurixel goes where your learners go. Whether in school or at home, kids stay connected to meaningful learning that feels like play",
        buttonText: "Learn more",
        buttonLink: "/news",
        isImageButton: false
    },
];

const listData = [
    { text: "Unlock Brighter Thinking Through Play" },
    { text: "Our interactive, story-driven games help students build confidence through consistent practice, personalized challenges, and joyful discovery." },
    // { text: "Our interactive, story-driven games help students build confidence through consistent practice, personalized challenges, and joyful discovery. " },
];

export default function WhyProdigy() {
    return (
        <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row  flex-wrap items-start justify-between mx-auto px-10 md:px-24">
                    <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 md:py-0">
                        <Heading
                            text="Unlock Brighter Thinking Through Play"
                            fontFamily="font-luckiest"
                            fontSize="text-xl sm:text-xl md:text-2xl lg:text-4xl"
                            fontWeight="font-bold"
                            textAlign="text-left"
                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                            textColor="text-white dark:text-[#FFCE49]"
                            customStyle=""
                        />
                        <div className="text-left text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white">
                            Our interactive, story-driven games help students build confidence through consistent practice, personalized challenges, and joyful discovery.
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
