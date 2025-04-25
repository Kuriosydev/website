import GameCards from "@/components/cards/GameCards";

const events = [
    {
        imageSrc: '/images/game_screen1.jpeg',
        link: '#',
        title: 'Boosting Confidence Through Creativity',
        description: "",
        buttonText: "Learn More",
        buttonLink: "/news",
        isImageButton: false
    },
    {
        imageSrc: '/images/game_screen4.jpeg',
        link: '#',
        title: 'The Magic of Meeting Students Where They Are',
        description: "",
        buttonText: "Learn More",
        buttonLink: "/news",
        isImageButton: false
    },
];

const listData = [
    { text: "Why Prodigy?" },
    { text: "Kurixel makes it easy to spot where students are excelling and where they need extra support. It gives our team the tools to tailor instruction and reach every learner right where they are." },
    // { text: "Our interactive, story-driven games help students build confidence through consistent practice, personalized challenges, and joyful discovery. " },
];

export default function WhyProdigy() {
    return (
        <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row  flex-wrap items-start justify-between mx-auto px-10 md:px-24">
                    <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-10 md:py-0">
                        <div className="text-left text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white">
                            "Kurixel makes it easy to spot where students are excelling and where they need extra support. It gives our team the tools to tailor instruction and reach every learner right where they are."
                            <div className="text-left flex font-semibold text-lg items-center justify-center 
                            sm:text-lg 
                            md:text-xl 
                            lg:text-xl 
                            xl:text-2xl">
                                <img src="/images/white_minus.png" alt="minus" className="w-4 h-0.5" />
                                <span className="px-2 text-white">C. Jackson</span>
                            </div>
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
