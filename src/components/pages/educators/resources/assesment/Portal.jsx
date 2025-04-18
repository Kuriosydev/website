import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";

const gameFeature2 = [
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Track Growth with Ease",
    description: "Follow each learner’s progress. Spot trends, celebrate milestones, and adapt instruction with confidence.",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Team Up with Fellow Educators",
    description: "Stay in sync with colleagues and support your learners together.",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Motivate with Collective Goals",
    description: "Set class-wide challenges that unlock in-game achievements.",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Connect, Invite & Share",
    description: "Easily link your classroom and invite parents into the journey",
  }
];

export default function Portal() {
  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">        <Heading
        text="Also included in your portal"
        fontFamily="font-luckiest"
        fontSize="text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
        fontWeight="font-normal"
        textAlign="text-center"
        letterSpacing="md:tracking-wider"
        textColor="text-[#8F0E00] dark:text-[#FFCE49]"
        customStyle="py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
      />
        <div className="flex flex-row flex-wrap items-center justify-center text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 dark:text-white">
          The Kurixel Teacher Portal gives you effortless control, helpful insights, and creative tools.
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <img src="/images/group 257.png" alt="creative gameplay image" className="w-full h-full object-contain" />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            {gameFeature2?.map((gameFeature, index) => (
              <CircularCard key={index} {...gameFeature} textColor="text-black" isRow={true} image={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
