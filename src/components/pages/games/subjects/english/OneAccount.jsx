"use client"
import { useEffect, useState } from "react";
import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";



export default function OneAccount() {
            const [item, setItem] = useState({
                title: '',
                description: '',
                list1: '',
                list2: '',
                list3: '',
              });
            
              useEffect(() => {
                async function fetchData() {
                  try {
                    const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=game-english&populate=GameEnglishPage&populate=GameEnglishPage.DashboardSection.title");
                    const data = await response.json();
                   
                    const bannerComponent = data.data[0]?.GameEnglishPage[0]?.DashboardSection[0];
                    console.log(bannerComponent?.title[0]?.title,"working")
                    setItem({
                      title:bannerComponent?.title[0]?.title || '',
                      description: bannerComponent?.title[0]?.description || '',
                      list1: bannerComponent?.title[1]?.title || '',
                      list2:bannerComponent?.title[2]?.title || '',
                      list3:bannerComponent?.title[3]?.title || '',
                    });
                  } catch (error) {
                    console.error('Failed to fetch Data', error);
                  }
                }
            
                fetchData();
              }, []);

              const listData = [
                {
                    text: item.list1
                },
                { text: item.list2 },
                { text: item.list3 },
            ];
    return (
        <section className="w-full h-auto bg-[#8F0E00] dark:bg-[#212121]">
            <div className="flex flex-col items-center justify-center w-full h-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="py-10">
                    <Heading
                        text={item.title}
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-center"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-white dark:text-[#FFCE49]"
                        customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-44"
                    />
                </div>

                <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center  text-white">
                    {item.description}
                </div>

                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-start justify-between w-full gap-10 py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12">
                    <div className="flex flex-col items-start justify-between w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 gap-6 lg:pr-24">
                        <BulletList
                            lists={listData}
                            bullet={true}
                            isFooter={false}
                            isLink={false}
                            textClasses="font-semibold text-sm sm:text-base md:text-xl text-white"
                            liClass="py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 ml-5 sm:ml-0 md:ml-0 lg:ml-16"
                            bulletColor="white"
                        />
                    </div>

                    <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 max-w-3xl">
                        <VideoPreview
                            src="/videos/news_banner_vid_2.mp4"
                            controls={false}
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            wrapperClass="w-full md:w-full h-full rounded-4xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
