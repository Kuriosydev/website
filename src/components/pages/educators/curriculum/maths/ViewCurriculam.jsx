import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";
import Feature from "@/components/texts/Feature";
import ImageButtons from "@/components/buttons/ImageButtons";

const listData = [
  {
    text: "Your students will solve curriculum-aligned Ontario Math Curriculum math problems through Prodigy Math Game’s engaging game-based platform. It provides instant feedback and automatically adapts content to help students overcome trouble spots and build math skills.",
  },
];

const features = [
  {
    imgSource: "",
    heading: "Boost your child's confidence and skills.",
    text: "When your child plays Kurixel, they'll master curriculum-aligned math and English skills in a safe, fun and secure environment.",
  },
  {
    imgSource: "",
    heading: "Boost your child's confidence and skills.",
    text: "When your child plays Kurixel, they'll master curriculum-aligned math and English skills in a safe, fun and secure environment.",
  },
  {
    imgSource: "",
    heading: "Boost your child's confidence and skills.",
    text: "When your child plays Kurixel, they'll master curriculum-aligned math and English skills in a safe, fun and secure environment.",
  },
];

export default function ViewCurriculam() {
  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <Heading
          text="Explore Grade-Level Learning with Kurixel"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />

        <Heading
          text="Kurixel’s immersive gameplay experience is built around core curriculum standards ensuring your child or student is always learning what matters most."
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />

        <BulletList
          lists={listData}
          bullet={true}
          isFooter={false}
          isLink={false}
          textClasses="font-semibold text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl"
          liClass="py-1"
        />

        <Heading
          text="Smart, Adaptive Learning Meets Creative Gameplay"
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <Heading
          text="As students play Prodigy Math Game, curriculum-aligned math questions adapt to match their individual progress. Prodigy offers an engaging in-game experience while students practice important math skills required for their grade level."
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
            <img
              src="/images/image 25.png"
              alt="Kids image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
            <Heading
              text="Students"
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="master key math concepts."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="Teachers"
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="can track progress and ensure curriculum alignment."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="Parents"
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <Heading
              text="see real growth."
              fontFamily="font-luckiest"
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              fontWeight="font-bold"
              textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
              letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
              textColor="text-[black]"
              customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
            />
            <ImageButtons
              text="Ready to level up your learning journey?"
              source="/images/Group.png"
              alt="Enter the Game Portal Background"
              className=" px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
