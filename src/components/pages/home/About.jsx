"use client"
import StoreButton from "@/components/buttons/StoreButton";
import Feature from "@/components/texts/Feature";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";
import { useEffect, useState } from 'react';



export default function About() {
      const [bannerData, setBannerData] = useState({
        Title: 'Play Anywhere, Learn Everywhere!',
        content_left_heading: 'Take Kurixel with you anywhere.',
        content_left_card_1: [{ content_left_title: '', content_left_description: '' }],
        content_left_card_2: [{ content_left_title: '', content_left_description: '' }],
        content_left_card_3: [{ content_left_title: '', content_left_description: '' }],
      });
    
      useEffect(() => {
        async function fetchBannerData() {
          try {
            const response = await fetch('https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=home&filters[slug][$eq]=footer&populate=HomeMetaData.banner.banner.button&populate=HomeMetaData.playAnyWhereSection.content_left_card_1&populate=HomeMetaData.playAnyWhereSection.content_left_card_2&populate=HomeMetaData.playAnyWhereSection.content_left_card_3&populate=HomeMetaData.playAnyWhereSection.DownloadNow&populate=HomeMetaData.playAnyWhereSection.AppStore&populate=HomeMetaData.playAnyWhereSection.GoogleStore&populate=HomeMetaData.playAnyWhereSection.app_preview_image&populate=HomeMetaData.adventureSection&populate=HomeMetaData.adventureSection.wooden_button&populate=HomeMetaData.adventureSection.slider_button&populate=HomeMetaData.updateAndEventsSection&populate=HomeMetaData.updateAndEventsSection.EventsCard&populate=HomeMetaData.contactUsSection&populate=HomeMetaData.contactUsSection.ContactUsList&populate=HomeMetaData.contactUsSection.ContactUsList&filters[slug][$eq]=footer&populate=Footer&populate=Footer.quick_links&populate=Footer.quick_links_support_anchor&populate=Footer.social_media_footer_links');
            const data = await response.json();
            console.log(data.data[1].HomeMetaData[0].playAnyWhereSection[0].content_left_card_1[0].content_left_title,"data")
            setBannerData(data.data[1].HomeMetaData[0].playAnyWhereSection[0]);
          } catch (error) {
            console.error('Failed to fetch banner data:', error);
          }
        }
    
        fetchBannerData();
      }, []);

      const features = [
        {
            imgSource: "/images/kid_friendly.png",
            heading: bannerData?.content_left_card_1?.[0]?.content_left_title,
            text: bannerData?.content_left_card_1[0]?.content_left_description,
        },
        {
            imgSource: "/images/smart_play.svg",
            heading: bannerData?.content_left_card_2?.[0]?.content_left_title,
            text: bannerData?.content_left_card_2[0]?.content_left_description,
        },
        {
            imgSource: "/images/always_fresh.svg",
            heading: bannerData?.content_left_card_3?.[0]?.content_left_title,
            text: bannerData?.content_left_card_3[0]?.content_left_description,
        },
    ];
    return (
        <section className="w-full h-auto z-50 dark:bg-black">
            <div className="flex flex-col items-center justify-center w-full h-auto">
                <Heading
                    text={bannerData.Title}
                    fontFamily="font-luckiest"
                    fontSize="text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
                    fontWeight="font-normal"
                    textAlign="text-center"
                    letterSpacing="md:tracking-wider"
                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    customStyle="py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
                />
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-center w-full h-auto mt-10 px-4 sm:px-6 md:px-16 gap-8">
                {/* Left Column */}
                <div className="flex flex-col items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-full">
                    <div className="font-bold text-base sm:text-xl md:text-2xl md:leading-14 text-black dark:text-white">{bannerData.content_left_heading}</div>
                    <div className="w-full mt-1">
                        {features?.map((feature, index) =>
                            <Feature
                                key={index}
                                imgSource={feature?.imgSource}
                                imgAlt={feature?.heading}
                                heading={feature?.heading}
                                headingColor={"text-white dark:text-black"}
                                headingSize={"text-base sm:text-xl md:text-2xl"}
                                headingWeight={"font-bold"}
                                headingSpacing={"tracking-wide"}
                                headingStyle={"md:leading-14"}
                                text={feature?.text}
                                textColor={"text-white dark:text-black"}
                                textSize={"text-xs sm:text-sm md:text-base"}
                                textWeight={"font-normal"}
                                textSpacing={"md:tracking-wide"}
                                textStyle={"md:leading-7"}
                                bgColor={"bg-[#8F0E00] dark:bg-[#FFCE49]"}
                                border={"border-2 border-[#8F0E00] dark:border-[#FFCE49]"}
                                borderRounded={"rounded-2xl md:rounded-3xl"}
                                otherClasses={"my-3 sm:my-4 md:my-6"}
                            />
                        )}
                    </div>
                    <div className="font-bold text-base sm:text-xl md:text-2xl md:leading-14 mt-4 sm:mt-6 md:mt-8 text-black dark:text-white">Download Now</div>
                    <StoreButton />
                </div>
                {/* Right Column */}
                <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 max-w-3xl">
                    <div className="relative w-full pt-[66.25%]">
                        <img
                            src="/images/2149554978 1.png"
                            alt="Tablet on Stone"
                            className="absolute top-0 left-0 w-full h-full object-contain"
                        />

                        <div className="absolute top-[2%] left-[18%] w-[60%] h-[70%] rotate-[0.7deg] rounded-xl overflow-hidden z-50">
                            <VideoPreview
                                src="/videos/preview.mp4"
                                controls={false}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                wrapperClass="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
