import YellowButton from "@/components/buttons/YellowButton";
import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";

const listData = [
  { text: "Designed for home learning" },
  { text: "Backed by real curriculum standards" },
  { text: "Built to make growth feel magical" },
];

export default function ParentsSupport() {
  return (
    <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-[#212121]`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="Parents — Stay Connected to Your Child’s Learning"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-white dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />

        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <img src="/images/image (10).png" alt="creative gameplay image" className="w-full h-full object-contain" />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <div className="text-cenleftter text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white py-4 sm:py-4 md:py-8">
              Kurixel grows with your child. Our adaptive system personalizes each step, helping learners move forward with confidence while you stay in the loop with tools that make it easy to track progress and celebrate milestones.
            </div>
            <div className="py-4 sm:py-4 md:py-8">
              <BulletList
                lists={listData}
                bullet={true}
                isFooter={false}
                isLink={false}
                textClasses="font-semibold text-white text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg"
                liClass="py-1"
                bulletColor="white"
              />
            </div>
            <div className="py-4 sm:py-4 md:py-8">
              <YellowButton
                text="Create your parent account"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
