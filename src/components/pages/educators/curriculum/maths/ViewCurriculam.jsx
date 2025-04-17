import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";

const listData = [
    { text: "Your students will solve curriculum-aligned Ontario Math Curriculum math problems through Prodigy Math Game’s engaging game-based platform. It provides instant feedback and automatically adapts content to help students overcome trouble spots and build math skills." },
];

export default function ViewCurriculam() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <Heading
                    text="View Curriculum coverage by grade"
                    fontFamily="font-luckiest"
                    fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
                    fontWeight="font-bold"
                    textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                    textColor="text-[#8F0E00]"
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
            </div>
        </section>
    )
}
