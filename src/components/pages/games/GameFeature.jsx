import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";

const gameFeature1 = [
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Discover a World of Endless Adventures new skills, new quests, nonstop fun",
    description: "filled with new adventures",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Monthly report card",
    description: "Get a detailed, skill-by-skill breakdown delivered straight to your inbox each month.",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Curriculum Progress report",
    description: "Find out which grade-level math skills your child has mastered from their curriculum.",
  },
];

const gameFeature2 = [
  {
    imgSrc: "/images/child_progress.jpg",
    heading: "Discover a World of Endless Adventures new skills, new quests, nonstop fun",
    description: "See instant data on your child's progress, all in one place.",
  },
  {
    imgSrc: "/images/monthly_report.jpg",
    heading: "Monthly report card",
    description: "Get a detailed, skill-by-skill breakdown delivered straight to your inbox each month.",
  },
  {
    imgSrc: "/images/curriculum_report.jpg",
    heading: "Curriculum Progress report",
    description: "Find out which grade-level math skills your child has mastered from their curriculum.",
  },
];

export default function GameFeature() {
  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Heading
            text="Solve. Explore. Conquer."
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
          <div className="flex flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-full xl:w-6/12 px-2 sm:px-4 md:px-20 lg:px-20 xl:px-12">
            <VideoPreview
              src="/videos/news_banner_vid_2.mp4"
              controls={false}
              autoPlay={true}
              muted={true}
              loop={true}
              wrapperClass="w-full md:w-full h-full rounded-4xl"
            />
          </div>
          <div className="flex-col sm:flex-col md:flex-col lg:flex-row xl:lg:flex-row flex-wrap items-center justify-center w-full sm:w-full md:w-full lg:w-full xl:w-6/12 px-2 sm:px-4 md:px-20 lg:px-20 xl:px-12 py-0 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            {gameFeature2?.map((gameFeature, index) => (
              <CircularCard key={index} {...gameFeature} textColor="text-black" isRow={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
