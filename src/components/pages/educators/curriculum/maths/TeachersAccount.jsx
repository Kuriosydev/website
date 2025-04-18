import ImageButtons from "@/components/buttons/ImageButtons";
import Heading from "@/components/texts/Heading";

export default function TeachersAccount() {
  return (
    <section className={`w-full h-auto bg-[#FFCE49] relative overflow-hidden dark:bg-[#212121]`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="Discover the Fun Side of Math"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8">
            <img src="/images/image 20.png" alt="creative gameplay image" className="w-full h-full object-contain" />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8">
            <div className="text-left text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white">
              Kurixel turns everyday lessons into immersive challenges kids can’t wait to solve.
            </div>

            <div className="py-4 sm:py-4 md:py-8">
              <ImageButtons
                text="Start your journey today"
                source="/images/Group.png"
                alt="Teachers, sign up now"
                className=" px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                textSize="text-base"
              />
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}
