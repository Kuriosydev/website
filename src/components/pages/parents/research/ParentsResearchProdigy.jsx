
"use client"
import { useEffect, useState } from "react";
import Heading from "@/components/texts/Heading";


export default function ParentsResearchProdigy() {
    const [bannerData, setBannerData] = useState(null);
    const [bannerData2, setBannerData2] = useState(null);
    useEffect(() => {
      async function fetchBannerData() {
        try {
          const res = await fetch(
            "https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=second-research&populate=SecondResearchPage.list&populate=SecondResearchPage.card&populate=SecondResearchPage.banner"
          );
          const json = await res.json();
          const page = json?.data?.[0]?.SecondResearchPage[1] || [];
          const page2 = json?.data?.[0]?.SecondResearchPage[2] || [];
          // console.log(page,"page");
          // const banner = page.find(
          //   (section) => section.__component === "shared.title-desc-btn-img-bg-component"
          // );

          setBannerData(page);
          setBannerData2(page2);
        } catch (err) {
          console.error("Error fetching banner data:", err);
        }
      }
  
      fetchBannerData();
    }, []);
 
    if (!bannerData) return null; // or a loading indicator

  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text={bannerData.title}
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
              {bannerData.description}
              {/* At Kurixel, every math journey is crafted by learning experts. Just like your child’s favorite teachers, they understand what sparks confidence, curiosity, and joy in young learners. */}
            </div>
            {/* <div className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white py-2">
              Backed by research and aligned with educational standards, we break big ideas into playful, step-by-step challenges that make learning feel natural and rewarding.
              Whether your child is just starting out or ready to take on new challenges, Kurixel meets them right where they are.            
            </div> */}
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
             {bannerData2.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
