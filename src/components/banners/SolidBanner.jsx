"use client"
import ImageButtons from "../buttons/ImageButtons";
import Heading from "../texts/Heading";
import VideoPreview from "../videos/VideoPreview";
import { useEffect, useState } from 'react';

export default function SolidBanner({ col = 2, bgColor = "bg-[#FFCE49]" }) {
    const [item, setItems] = useState({
        title: '',
        description: '',
        backgroundImage: [],
        button: []
    });
    
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=games&populate=GamesMetaData.BannerSection.backgroundImage&populate=GamesMetaData.BannerSection.button");
            const data = await response.json();
            console.log("Banner data:", data.data[0].GamesMetaData[0].BannerSection[0]);
            setItems(data.data[0].GamesMetaData[0].BannerSection[0]);
          } catch (error) {
            console.error('Failed to fetch Data', error);
          }
        }
    
        fetchData();
    }, []);

    // Get the video URL from the API or use a fallback
    const videoSrc = item.backgroundImage && item.backgroundImage.length > 0
        ? `https://cms.kurixel.com${item.backgroundImage[0].url}`
        : "/videos/news_banner_vid_2.mp4";
    
    return (
        <section className={`w-full h-auto ${bgColor} relative z-0 overflow-hidden -mt-40  dark:bg-[#212121]`}>
            <div className="w-full min-h-auto relative overflow-hidden pt-36 md:pt-44 pb-14 md:pb-20">
                {
                    col === 2
                        ?
                        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row  w-full h-auto items-center justify-center md:items-start md:justify-start">
                            <div className="w-full sm:w-full md:w-full lg:w-7/12 xl:w-7/12 flex flex-col text-left text-xl px-9 md:pl-12">
                                <Heading
                                    text={item.title}
                                    fontFamily="font-luckiest"
                                    fontSize="text-5xl md:text-7xl"
                                    fontWeight="font-normal"
                                    textAlign="text-center md:text-left"
                                    letterSpacing="md:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                    customStyle="mt-10"
                                />
                                <div className="font-medium text-center md:text-left text-base md:text-lg mt-10 md:px-0 dark:text-white">
                                    {item.description}
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-start mt-8 md:mt-14">
                                   
                                            <ImageButtons
                                                text="Teachers, sign up now"
                                                source="/images/Group.png"
                                                alt="Teachers, sign up now Background"
                                                className="md:mr-12 px-6 py-2 md:px-8 md:py-5"
                                            />
                                            <ImageButtons
                                                text="Parents, sign up now"
                                                source="/images/Group.png"
                                                alt="Parents, sign up now Background"
                                                className="mt-6 md:mt-0 md:mr-12 px-6 py-2 md:px-8 md:py-5"
                                            />
                                       
                                </div>
                            </div>
                            <div className="w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 flex flex-col items-center justify-center  text-xl px-4 sm:px-6 md:px-8 lg:px-18 xl:px-20 mt-12 md:mt-12 lg:mt-0 xl:mt-0">
                                <VideoPreview
                                    src={videoSrc}
                                    controls={false}
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    wrapperClass="w-auto sm:w-auto md:w-full lg:w-[150%] xl:w-[150%] h-full rounded-4xl"
                                />
                            </div>
                        </div>
                        :
                        <div className="">
                            {/* Optional 1-column fallback */}
                        </div>
                }
            </div>
        </section>
    );
}