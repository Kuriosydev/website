import GameCards from "@/components/cards/GameCards";
import Heading from "@/components/texts/Heading";
const data = [
  {
    imageSrc: "/images/image (11).png",
    link: "https://www.example.com",
    title: "Discover why kids learn best when they’re having fun and how Kurixel turns play into powerful, research-backed learning",
    description:
      "New research shows that play is one of the most effective ways for kids to build real skills.",
    viewLink:
      "https://docs.google.com/document/d/1AKcmFFHC6msxyP6zamTT7BpGPtf3AeupzhNn2hqS3Os/edit?usp=sharing",
  },
  {
    imageSrc: "/images/image (12).png",
    link: "https://www.example.com",
    title: "From Frustration to Fun: How Game-Based Progress Monitoring Helps Kids Grow in Math",
    description:
      "Kurixel turns progress tracking into a playful, stress-free experience that gives kids room to grow and parents real insight without the test anxiety.",
    viewLink:
      "https://docs.google.com/document/d/1AKcmFFHC6msxyP6zamTT7BpGPtf3AeupzhNn2hqS3Os/edit?usp=sharing",
  },
  {
    imageSrc: "/images/image (13).png",
    link: "https://www.example.com",
    title: "Why a Positive Mindset Matters: The Link Between Math Confidence and Long-Term Success",
    description:
      "A confident learner is a successful learner. See how Kurixel helps kids build math confidence through encouragement, small wins, and a mindset that grows over time.",
    viewLink:
      "https://docs.google.com/document/d/1AKcmFFHC6msxyP6zamTT7BpGPtf3AeupzhNn2hqS3Os/edit?usp=sharing",
  },
];
export default function ParentsReasearchDataDriven() {
  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="From Frustration to Fun: How Game-Based Progress Monitoring Helps Kids Grow in Math"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center">
          Kurixel turns progress tracking into a playful, stress-free experience that gives kids room to grow and parents real insight without the test anxiety.
        </div>

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-wrap items-start justify-between px-10 sm:px-10 md:px-0 lg:px-24 py-16">
          <GameCards type="events" data={data} />
        </div>
      </div>
    </section>
  );
}
