import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";

const data = [
  {
    title: "Discover why kids learn best when they’re having fun and how Kurixel turns play into powerful, research-backed learning.",
    description: "New research shows that play is one of the most effective ways for kids to build real skills.",
    imageSrc: "/images/blog1.png",
    link: "/news/1"
  },
  {
    title: "From Frustration to Fun: How Game-Based Progress Monitoring Helps Kids Grow in Math",
    description: "Kurixel turns progress tracking into a playful, stress-free experience that gives kids room to grow and parents real insight without the test anxiety.",
    imageSrc: "/images/blog2.png",
    link: "/news/2"
  },
  {
    title: "Why a Positive Mindset Matters: The Link Between Math Confidence and Long-Term Success",
    description: "A confident learner is a successful learner. See how Kurixel helps kids build math confidence through encouragement, small wins, and a mindset that grows over time.",
    imageSrc: "/images/blog3.png",
    link: "/news/3"
  },
];
export default function ParentsReasearchDataDriven() {

  return (
    <section className="w-full h-auto bg-[#FFCE49] relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="Powered by proven learning methods"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-wrap items-start justify-between px-10 sm:px-10 md:px-0 lg:px-24 py-16">
          <GameCards type={3} data={data} />
        </div>
      </div>
    </section>
  );
}
