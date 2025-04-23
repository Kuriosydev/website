import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";

const gameFeature1 = [
    {
        imgSrc: "/images/4118011.jpg",
        heading: "Discover",
        description: "Wander through enchanted environments and shape your own evolving world.",
    },
    {
        imgSrc: "/images/5484597.jpg",
        heading: "Craft with Purpose",
        description: "Design expressive items and unlock custom recipes that reflect your style and creativity.",
    },
    {
        imgSrc: "/images/560.jpg",
        heading: "Power Up with Knowledge",
        description: "Solve skill-building challenges to create, explore, and grow.",
    },
];

const gameFeature2 = [
    {
        imgSrc: "/images/marketplaces.png",
        heading: "Trade, Style & Thrive",
        description: "Visit magical marketplaces to buy and sell outfits, and rare finds.",
    },
    {
        imgSrc: "/images/chase_goal.jpg",
        heading: "Chase Your Goals",
        description: "Complete daily quests or long-term challenges that unlock new realms.",
    },
    {
        imgSrc: "/images/reward.jpg",
        heading: "Rewards & Rare Treasures",
        description: "Earn rewards for your achievements and trade them for exclusive boosts, limited-time items, and special surprises hidden across the Kurixel world.",
    },
];

export default function GameEnglishFeature() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex flex-row flex-wrap items-center justify-center">
                    <Heading
                        text="Learn Through Wonder. Create Without Limits."
                        fontFamily="font-luckiest"
                        fontSize="text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
                        fontWeight="font-normal"
                        textAlign="text-center"
                        letterSpacing="md:tracking-wider"
                        textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                        customStyle="py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
                    />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 dark:text-white">
                    In the world of Kurixel, curiosity leads the way. Every quest, puzzle, and battle is powered by curriculum-aligned math practice. With surprises at every turn, students solve problems to unlock new worlds, conquer challenges, and level up all while building real math skills.
                </div>
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 md:px-0 px-10">
                    <div className="flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 px-2 sm:px-4 md:px-20 lg:px-40 xl:px-12 py-0 sm:py-4 md:py-6 lg:py-8 xl:py-10">
                        {gameFeature1?.map((gameFeature, index) => (
                            <CircularCard key={index} {...gameFeature} textColor="text-black" isRow={true} />
                        ))}
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-6/12 xl:w-6/12 px-2 sm:px-4 md:px-20 lg:px-40 xl:px-12">
                        <img src="/images/gameEnglishFeature.png" alt="gameEnglishFeature" className="w-full md:w-full h-full rounded-4xl" />
                    </div>
                    <div className="flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 px-2 sm:px-4 md:px-20 lg:px-40 xl:px-12 py-0 sm:py-4 md:py-6 lg:py-8 xl:py-10">
                        {gameFeature2?.map((gameFeature, index) => (
                            <CircularCard key={index} {...gameFeature} textColor="text-black" isRow={true} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
