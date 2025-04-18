import YellowButton from "@/components/buttons/YellowButton";
import Heading from "@/components/texts/Heading";

export default function ParentsResearchEngage() {
  return (
    <section className="w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-black">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <div className="text-white text-left flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8 px-10">
            <img
              src="/images/reserach3.png"
              alt="creative gameplay image"
              className="w-3/4 h-3/4 object-cover"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8 px-10">
            <Heading
              text="Ready for a smarter way to engage students?"
              fontFamily="font-luckiest"
              fontSize="text-3xl sm:text-3xl md:text-4xl lg:text-5xl"
              fontWeight="font-bold"
              textAlign="text-left"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-white"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 "
            />
            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white py-2">
              <YellowButton text="Sign up today!" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
