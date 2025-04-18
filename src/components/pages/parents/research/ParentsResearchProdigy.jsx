
import Heading from "@/components/texts/Heading";


export default function ParentsResearchProdigy() {
  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="Kurixel Math – Where Learning Feels Like Play, and Every Skill Matters"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />

        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8 px-10">
            <Heading
              text="Meaningful Math Moments"
              fontFamily="font-luckiest"
              fontSize="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
              fontWeight="font-bold"
              textAlign="text-left"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-black dark:text-white"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 "
            />
            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white py-2">
              At Kurixel, every math journey is crafted by learning experts. Just like your child’s favorite teachers, they understand what sparks confidence, curiosity, and joy in young learners.
            </div>
            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white py-2">
              Backed by research and aligned with educational standards, we break big ideas into playful, step-by-step challenges that make learning feel natural and rewarding.
              Whether your child is just starting out or ready to take on new challenges, Kurixel meets them right where they are.            </div>
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8 px-10">
            <img
              src="/images/reserach.png"
              alt="creative gameplay image"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8 px-10">
            <img
              src="/images/image 10.png"
              alt="creative gameplay image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8 px-10">
            <Heading
              text="For the Grown-Ups Who Guide the Way"
              fontFamily="font-luckiest"
              fontSize="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
              fontWeight="font-bold"
              textAlign="text-left"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-black dark:text-white"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 "
            />
            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white py-2">
              Parents and teachers are everyday heroes in a child’s learning story. That’s why Kurixel gives you the tools and insights to stay connected to your child’s progress every step of the way.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
