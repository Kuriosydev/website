import YellowButton from "@/components/buttons/YellowButton";
import CircularCard from "@/components/cards/CircularCard";
import Heading from "@/components/texts/Heading";

const gameFeature2 = [
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Teachers — Align Prodigy to your classroom lessons",
    description: "",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Assign targeted skills and track progress with ease",
    description: "",
  },
  {
    imgSrc: "/images/Ellipse.png",
    heading: "Get instant insights to support every learner",
    description: "",
  },
];

export default function TeacherClassroom() {
  return (
    <section className={`w-full h-auto bg-[#8F0E00] relative overflow-hidden dark:bg-black`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="Built to Fit Your Classroom"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-white dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="text-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white">
          Kurixel gives teachers the tools to bring engaging, curriculum-based learning into any environment.
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <img src="/images/frame.png" alt="creative gameplay image" className="w-full h-full object-contain" />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            {gameFeature2?.map((gameFeature, index) => (
              <CircularCard key={index} {...gameFeature} textColor="text-white" isRow={true} image={false} />
            ))}

            <div className="py-4 sm:py-4 md:py-8">
              <YellowButton
                text="Create your teacher account"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
