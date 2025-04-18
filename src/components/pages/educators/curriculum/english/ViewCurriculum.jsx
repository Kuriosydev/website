import Accordian from "@/components/accordian/Accordian";
import Heading from "@/components/texts/Heading";

export default function ViewCurriculum() {
  const grades = Array.from({ length: 8 }, (_, i) => i + 1); // Grade 1 to 6
  const subjects = ["Language", "Reading", "Writing"];

  const dropdown = grades.flatMap((grade) =>
    subjects.map((subject) => `Grade ${grade} ${subject}`)
  );

  const faqs = [];

  dropdown.map((item, index) => (
    faqs.push({
      question: item,
      answer: item
    })
  ))



  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="Explore Your Language Arts Adventure"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8">
            <select className="bg-white text-black px-4 py-2 rounded-lg w-1/2 border-2 border-black">
              <option value="">Select Grade Level</option>
              {dropdown.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8">
            <img
              src="/images/image 31.png"
              alt="creative gameplay image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
          <Accordian
            items={faqs}
            qFontFamily={"font-luckiest"}
            qColor={"text-[#8F0E00] dark:text-white"}
            qFontWeight={"font-normal"}
            qFontSize={"text-3xl"}
            ansFontWeight={"font-medium"}
            ansFontSize={"text-lg"}
          />
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
          <Heading
            text="Master Language Arts Through Play"
            fontFamily="font-luckiest"
            fontSize="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
            fontWeight="font-bold"
            textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
            textColor="text-black dark:text-white"
            customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 "
          />
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8">
            <img
              src="/images/englisworks.png"
              alt="creative gameplay image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8">
            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white">
              At Kurixel, reading and writing come to life. Learners unlock stories, earn rewards, and level up their skills while they play.
            </div>
            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold dark:text-white py-4 sm:py-4 md:py-8">
              Discover the Kurixel English experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
