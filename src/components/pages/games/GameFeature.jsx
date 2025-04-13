import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";

const gameFeature1 = [
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Explore an ever-expanding world",
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
    imgSrc: "/images/Ellipse.png",
    heading: "Parent portal",
    description: "See instant data on your child's progress, all in one place.",
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

export default function GameFeature() {
  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Heading
            text="There's lots to explore in the world of Prodigy Math, and behind every adventure is curriculum-aligned math practice."
            fontFamily="font-luckiest"
            fontSize="text-2xl md:text-5xl"
            fontWeight="font-normal"
            textAlign="text-center"
            letterSpacing="md:tracking-wider"
            textColor="text-[#8F0E00]"
            customStyle="mt-10 px-10 md:px-44"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center text-lg font-medium px-10 md:py-8 md:px-96 text-center">
          With new challenges around every corner, students must answer adaptive math questions to win battles and complete quests.
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center md:mt-0 mt-12 md:px-0 px-10">
          <div className="flex flex-row flex-wrap items-center justify-center w-full md:w-3/12 pl-4 md:pl-20 pr-4 md:pr-8">
            {gameFeature1?.map((gameFeature, index) => (
              <CircularCard key={index} {...gameFeature} textColor="text-black" isRow={true} />
            ))}
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center w-full md:w-6/12 my-8 md:my-0">
            <VideoPreview
              src="/videos/news_banner_vid_2.mp4"
              controls={false}
              autoPlay={true}
              muted={true}
              loop={true}
              wrapperClass="w-full md:w-full h-full rounded-2xl"
            />
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center w-full md:w-3/12 pl-4 md:pl-8 pr-4 md:pr-20">
            {gameFeature2?.map((gameFeature, index) => (
              <CircularCard key={index} {...gameFeature} textColor="text-black" isRow={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
