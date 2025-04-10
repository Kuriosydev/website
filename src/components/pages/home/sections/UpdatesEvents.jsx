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
        <section className={`w-full h-auto mt-8 ${bgColor}`}>
            {/* Heading */}
            <div className="flex flex-col mt-2 items-center justify-center w-full h-full">
                <Heading
                    text="LATEST UPDATES & EVENTS"
                    fontFamily="font-luckiest"
                    fontSize="text-5xl md:text-7xl"
                    fontWeight="font-bold"
                    textAlign="text-center"
                    letterSpacing="md:tracking-wider"
                    textColor="text-[#8F0E00]"
                    customStyle="mt-10 px-4 md:px-64"
                />
            </div>
            <div className="flex flex-col items-center justify-center mt-16 ">
                <div className="flex flex-col md:flex-row items-center justify-center mt-4">
                    {events?.map((event, index) => (
                        <EventCard
                            key={index}
                            imageSrc={event.imageSrc}
                            link={event.link}
                            title={event.title}
                            description={event.description}
                            className="mx-4"
                        />
                    ))}
                </div>
            </div>
            {isImage ?
                <div className="relative w-full h-auto md:-mt-48 items-center justify-center  opacity-25">
                    <img src="/images/updates_background.png" alt="Updates and events Background" className="w-full h-full object-cover" />
                </div>
                : <div className="relative w-full h-auto pb-8 md:pb-16"></div>
            }

        </section>
    )
}
