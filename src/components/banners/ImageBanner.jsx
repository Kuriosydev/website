"use client";
import { useEffect, useState } from "react";
import ImageButtons from "../buttons/ImageButtons";
import Heading from "../texts/Heading";
import VideoPreview from "../videos/VideoPreview";

export default function ImageBanner({
  col,
  bgColor,
  heading,
  description,
  imgsrc,
  vidSrc,
  subHeading,
  dropdown,
  buttontext,
  link,
  buttons = [],
  textAfterButton,
}) {

        const [playtime, setPlaytime] = useState({
          title: "",
          description: "",
        });
      
        useEffect(() => {
          async function fetchPlaytimeContent() {
            try {
              const response = await fetch(
                "https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=news&populate=NewsMetaData&populate=NewsMetaData.banner&populate=NewsMetaData.updatesAndEventsSection&populate=NewsMetaData.updatesAndEventsSection.card&populate=NewsMetaData.NewsSection"
              );
              const data = await response.json();
      
              const section =
                data.data[0]?.NewsMetaData[0]?.banner?.[0] || {};
      
              setPlaytime({
                title: section.title || "",
                description: section.description || "",
              });
            } catch (error) {
              console.error("Failed to fetch content:", error);
            }
          }
      
          fetchPlaytimeContent();
        }, []);

  return (
    <section className={`w-full h-auto ${bgColor} relative z-0 overflow-hidden -mt-28 sm:-mt-28 md:-mt-40 lg:-mt-40 xl:-mt-40 dark:bg-[#001032]`}>
      <div className="w-full max-h-full relative overflow-hidden pt-36 md:pt-44 pb-14 md:pb-20">
        {col === 1 &&
          <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="absolute top-8 md:-left-12 h-full hidden md:block -z-10">
              <img src="/images/left_tree.png" alt="Left Tree Image" className="w-[100%] h-full object-contain block dark:hidden" />
              <img src="/images/dark/left_tree.png" alt="Left Tree Image" className="w-[100%] h-full object-contain hidden dark:block" />
            </div>

            <div className="flex flex-col w-full h-auto items-center justify-center">
              <Heading
                text={heading}
                fontFamily="font-luckiest"
                fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                fontWeight="font-bold"
                textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
              />
              <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center dark:text-white">
                {description}
              </div>
            </div>
          </div>
        }

        {col === 2 &&
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row w-full h-full items-center justify-center md:items-start md:justify-start px-6 md:px-8 lg:px-12 xl:px-12">
            <div className="w-full sm:w-full md:w-full lg:w-7/12 xl:w-7/12 flex flex-col items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start text-left text-xl ">
              <div className="absolute top-0 md:-left-28 h-auto hidden lg:block xl:block -z-10">
                <img src="/images/left_tree.png" alt="Left Tree Image" className="w-[80%] h-full object-cover block dark:hidden" />
                <img src="/images/dark/left_tree.png" alt="Left Tree Image" className="w-[100%] h-full object-cover hidden dark:block " />
              </div>
              <Heading
                text={heading}
                fontFamily="font-luckiest"
                fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-5xl"
                fontWeight="font-bold"
                textAlign="text-center sm:text-center md:text-center lg:text-left xl:text-left"
                letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                customStyle="py-2 sm:py-2 md:py-6 lg:py-4 xl:py-4 px-4 sm:px-10 md:px-20 lg:px-20"
              />
              <div className="flex flex-row flex-wrap items-center sm:items-center md:items-center lg:items-start xl:items-start justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start text-base sm:text-base md:text-lg lg:text-lg xl:text-lg font-medium px-8 sm:px-10 md:px-20 lg:px-20 xl:px-20 text-justify sm:text-justify md:text-justify lg:text-left xl:text-left dark:text-white">
                {subHeading &&
                  <Heading
                    text={subHeading}
                    fontFamily="font-luckiest"
                    fontSize="text-xl sm:text-2xl md:text-2xl lg:text-2xl"
                    fontWeight="font-bold"
                    textAlign="text-center sm:text-center md:text-center lg:text-left xl:text-left"
                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 "
                  />
                }

                <p className="py-2 sm:py-2 md:py-2 lg:py-2 xl:py-2 dark:text-white">{description}</p>

                {dropdown &&
                  <select name="" className="bg-white text-black px-4 py-2 rounded-lg w-1/2">
                    <option value="">Select Grade Level</option>
                    {
                      dropdown.map((item, index) =>
                        <option key={index} value={item.value}>{item.name}</option>
                      )
                    }
                  </select>
                }
              </div>
              <div className="flex flex-col md:flex-row items-center justify-start mt-2 px-20">
                {buttons.length > 0
                  ? buttons?.map((item, index) =>
                    <ImageButtons
                      key={index}
                      text={item.text}
                      source="/images/Group.png"
                      alt="Teachers, sign up now Background"
                      isLink={true}
                      link={item.link}
                    />
                  ) : <ImageButtons
                    text={buttontext}
                    source="/images/Group.png"
                    alt="Teachers, sign up now Background"
                    isLink={true}
                    link={link}
                  />
                }
              </div>
              <div className="text-base text-white font-medium px-20 hidden">
                {textAfterButton}
              </div>
            </div>
            <div className="w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 flex flex-col items-center justify-center  text-xl px-4 sm:px-10 md:px-20 lg:px-0 mt-12 md:mt-12 lg:mt-0 xl:mt-0 ml-0 sm:ml-0 md:ml-0 lg:ml-18 xl:ml-20">
              {
                imgsrc &&
                <img src={imgsrc} alt="image" className="w-auto sm:w-auto md:w-full lg:w-full xl:w-[90%] h-full" />
              }
              {
                vidSrc &&
                <VideoPreview
                  src={vidSrc}
                  controls={false}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  wrapperClass="w-auto sm:w-auto md:w-full lg:w-[150%] xl:w-[150%] h-full rounded-4xl"
                />
              }
            </div>
          </div>
        }

        {col === 3 &&
          <div className="flex flex-col md:flex-row w-full h-auto items-center justify-center md:items-start md:justify-start gap-4 md:ml-12 md:mt-8">
            <div className="w-full md:w-5/12 full flex flex-col text-left text-xl px-9 md:pl-28">
              <div className="absolute top-20 md:-left-20 h-auto hidden md:block -z-10">
                <img src="/images/left_tree.png" alt="Left Tree Image" className="w-[70%] h-full object-cover block dark:hidden" />
                <img src="/images/dark/left_tree.png" alt="Left Tree Image" className="w-[85%] h-full object-cover hidden dark:block" />
              </div>
              <Heading
                text={playtime.title}
                fontFamily="font-luckiest"
                fontSize="text-5xl md:text-7xl"
                fontWeight="font-normal"
                textAlign="text-center md:text-left"
                letterSpacing="md:tracking-wider"
                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                customStyle="mt-10"
              />
              <div className="font-medium text-center md:text-left text-base md:text-3xl mt-10 md:px-0 dark:text-white">
                {playtime.description}
              </div>
            </div>
            <div className="w-full md:w-3/12 flex flex-col text-center md:text-left text-xl h-auto md:h-[27rem] px-14 md:px-0">
              <VideoPreview
                src="/videos/news_banner_vid_2.mp4"
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                wrapperClass="w-full h-full rounded-2xl"
                position="object-fill py-8 md:py-0"
              />
            </div>
            <div className="w-full md:w-4/12 flex flex-col text-center md:text-left text-xl h-[27rem] px-14 md:px-0">
              <VideoPreview
                src="/videos/news_banner_vid_2.mp4"
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                wrapperClass="w-full h-full rounded-2xl"
                position="object-fill py-8 md:py-0"
              />
            </div>
          </div>
        }
      </div>
    </section>
  )
}
