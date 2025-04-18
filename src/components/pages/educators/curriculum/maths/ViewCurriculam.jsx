import Heading from "@/components/texts/Heading";

const listData = [
  { text: "Your students will solve curriculum-aligned Ontario Math Curriculum math problems through Prodigy Math Game’s engaging game-based platform. It provides instant feedback and automatically adapts content to help students overcome trouble spots and build math skills." },
];

export default function ViewCurriculam() {
  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <Heading
          text="Explore Grade-Level Learning with Kurixel"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />

        <Heading
          text="Prodigy’s in-game content aligns with curriculum's standards from Grade 1-8."
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00]"
          customStyle="hidden py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />

        <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center dark:text-white">
          Kurixel’s immersive gameplay experience is built around core curriculum standards ensuring your child or student is always learning what matters most.
        </div>
      </div>
    </section>
  )
}
