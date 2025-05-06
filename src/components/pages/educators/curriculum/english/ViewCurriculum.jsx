"use client";

import Accordian from "@/components/accordian/Accordian";
import Heading from "@/components/texts/Heading";
import { useEffect, useState } from "react";

export default function ViewCurriculum() {
    const [item, setItem] = useState({
      title: 'Explore Your Language Arts Adventure',
    });
    const [item2, setItem2] = useState({
      title: 'Master Language Arts Through Play',
      listTitle: '',
      listDescription: '',
    });
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=educators-curriculum-english&populate=EducatorsCurriculumEnglishPage&populate=EducatorsCurriculumEnglishPage.BannerSection&populate=EducatorsCurriculumEnglishPage.classRoomLessions&populate=EducatorsCurriculumEnglishPage.classRoomLessions.list&populate=EducatorsCurriculumEnglishPage.image");
          const data = await response.json();
          const bannerComponent = data.data[0]?.EducatorsCurriculumEnglishPage[1];
          const bannerComponent2 = data.data[0]?.EducatorsCurriculumEnglishPage[2]?.classRoomLessions;
          console.log(bannerComponent2,"bannerComponent2")
          setItem({
            title: bannerComponent?.title || '',
          });
          setItem2({
            title: bannerComponent2?.header || '',
            listTitle: bannerComponent2?.list[0]?.link,
            listDescription: bannerComponent2?.list[0]?.title,
          });
        } catch (error) {
          console.error('Failed to fetch Data', error);
        }
      }
  
      fetchData();
    }, []);

    const imageSrc = item.image  && item.image.length > 0
    ? `https://cms.kurixel.com${item.image[0].url}`
    : "/images/maths_curr_banner.png"

  const grades = Array.from({ length: 8 }, (_, i) => i + 1); // Grade 1 to 6
  const subjects = ["Language", "Reading", "Writing"];
  const [gradeSkills, setGradeSkills] = useState(null);

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

  useEffect(() => {
    console.log("gradeSkills: ", gradeSkills);
  }, [gradeSkills]);

  const handleOnChange = (e) => {
    console.log("on change: ", e.target.value);
    const val = e.target.value;
    setGradeSkills(`${val} Skills`)
  }

  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text={item.title}
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 py-4 sm:py-4 md:py-8">
            <select onChange={handleOnChange} className="bg-white text-black px-4 py-2 rounded-lg w-1/2 border-2 border-black">
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
              src={imageSrc}
              alt="creative gameplay image"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col text-lg sm:flex-col md:flex-col lg:flex-row xl:flex-row items-start justify-start gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8 dark:text-white">
          {gradeSkills}
        </div>
        <div className="hidden flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-4 sm:py-4 md:py-8">
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
            text={item2.title}
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
             {item2.listTitle}
            </div>
            <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold dark:text-white py-4 sm:py-4 md:py-8">
             {item2.listDescription}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
