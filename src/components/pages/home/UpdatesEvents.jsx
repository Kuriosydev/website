import EventCard from "@/components/cards/EventCard";
import Heading from "@/components/texts/Heading";

const events = [
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: 'https://www.example.com',
        title: 'New Levels Unlocked',
        description: 'Crystal Caves expansion now available. More puzzles, more fun!'
    },
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: 'https://www.example.com',
        title: 'Community Challenge',
        description: 'Join the upcoming Treasure Hunt event for exclusive in-game rewards.'
    },
    {
        imageSrc: '/images/gamplay_screenshot1.png',
        link: 'https://www.example.com',
        title: 'Kurixel Studios is Growing',
        description: 'More creativity, more fun, and more mind-blowing games are on the way!'
    }
];

export default function UpdatesEvents({ isImage = true, bgColor }) {
    return (
        <section className={`w-full h-auto  ${bgColor || ""} dark:bg-[#212121]`}>
            {/* Heading */}
            <div className="flex flex-col  items-center justify-center w-full h-full">
                <Heading
                    text="LATEST UPDATES & EVENTS"
                    fontFamily="font-luckiest"
                    fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                    fontWeight="font-bold"
                    textAlign="text-center"
                    letterSpacing="tracking-wide sm:tracking-wider"
                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    customStyle="mt-10 px-4 sm:px-8 md:px-32 lg:px-64"
                />
            </div>

            <div className="flex flex-col items-center justify-center mt-12 px-4 sm:px-6 md:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 w-full max-w-screen-xl ">
                    {events?.map((event, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex justify-center sm:justify-center md:justify-start"
                        >
                            <EventCard
                                imageSrc={event.imageSrc}
                                link={event.link}
                                title={event.title}
                                description={event.description}
                                className="w-full h-full max-w-[320px]" // Optional max-width to limit card width on mobile
                            />
                        </div>

                    ))}
                </div>
            </div>

            {isImage ? (
                <div className="relative w-full h-auto md:-mt-48 flex items-center justify-center opacity-25 mt-10">
                    <div className="w-full ">
                        <img
                            src="/images/updates_background.png"
                            alt="Updates and events Background"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            ) : (
                <div className="relative w-full h-auto pb-8 md:pb-16"></div>
            )}
        </section>
    );
}
