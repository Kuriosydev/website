"use client"
import EventCard from "@/components/cards/EventCard";
import Heading from "@/components/texts/Heading";
import { useEffect, useState } from 'react';


export default function UpdatesEvents({ isImage = true, bgColor }) {

    const [bannerData, setBannerData] = useState({
        title: '',
        EventsCard: [],
      });
    
      useEffect(() => {
        async function fetchBannerData() {
          try {
            const response = await fetch('https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=home&filters[slug][$eq]=footer&populate=HomeMetaData.banner.banner.button&populate=HomeMetaData.playAnyWhereSection.content_left_card_1&populate=HomeMetaData.playAnyWhereSection.content_left_card_2&populate=HomeMetaData.playAnyWhereSection.content_left_card_3&populate=HomeMetaData.playAnyWhereSection.DownloadNow&populate=HomeMetaData.playAnyWhereSection.AppStore&populate=HomeMetaData.playAnyWhereSection.GoogleStore&populate=HomeMetaData.playAnyWhereSection.app_preview_image&populate=HomeMetaData.adventureSection&populate=HomeMetaData.adventureSection.wooden_button&populate=HomeMetaData.adventureSection.slider_button&populate=HomeMetaData.updateAndEventsSection&populate=HomeMetaData.updateAndEventsSection.EventsCard&populate=HomeMetaData.contactUsSection&populate=HomeMetaData.contactUsSection.ContactUsList&populate=HomeMetaData.contactUsSection.ContactUsList&filters[slug][$eq]=footer&populate=Footer&populate=Footer.quick_links&populate=Footer.quick_links_support_anchor&populate=Footer.social_media_footer_links');
            const data = await response.json();
            console.log(data.data[1].HomeMetaData[0].playAnyWhereSection[0].content_left_card_1[0].content_left_title,"data")
            setBannerData(data.data[1].HomeMetaData[0].updateAndEventsSection[0]);
          } catch (error) {
            console.error('Failed to fetch banner data:', error);
          }
        }
    
        fetchBannerData();
      }, []);


      const events = bannerData.EventsCard.length
      ? bannerData.EventsCard.map((card, index) => ({
          imageSrc: `/images/game_screen${index + 1}.jpeg`,
          link: '#',
          title: card.title,
          description: card.description,
        }))
      : [
          {
            imageSrc: '/images/game_screen1.jpeg',
            link: '#',
            title: 'New Levels Unlocked',
            description: 'Crystal Caves expansion now available. More puzzles, more fun!',
          },
          {
            imageSrc: '/images/game_screen2.jpeg',
            link: '#',
            title: 'Community Challenge',
            description: 'Join the upcoming Treasure Hunt event for exclusive in-game rewards.',
          },
          {
            imageSrc: '/images/game_screen3.jpeg',
            link: '#',
            title: 'Kurixel Studios is Growing',
            description: 'More creativity, more fun, and more mind-blowing games are on the way!',
          },
        ];
    
    return (
        <section className={`w-full h-auto  ${bgColor || ""} dark:bg-[#212121]`}>
            {/* Heading */}
            <div className="flex flex-col  items-center justify-center w-full h-full">
                <Heading
                    text="LATEST UPDATES & EVENTS"
                    fontFamily="font-luckiest"
                    fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                    fontWeight="font-bold"
                    textAlign="text-center"
                    letterSpacing="tracking-wide sm:tracking-wider"
                    textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                    customStyle="mt-10 px-4 sm:px-8 md:px-32 lg:px-64"
                />
            </div>

            <div className="flex flex-col items-center justify-center mt-12 px-4 sm:px-6 md:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 w-full max-w-screen-xl ">
                    {events?.map((event, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex justify-center sm:justify-center md:justify-start"
                        >
                            <EventCard
                                imageSrc={event.imageSrc}
                                link={event.link}
                                title={event.title}
                                description={event.description}
                                className="w-full h-full max-w-[320px]" // Optional max-width to limit card width on mobile
                            />
                        </div>

                    ))}
                </div>
            </div>

            {isImage ? (
                <div className="relative w-full h-auto md:-mt-48 flex items-center justify-center opacity-25 mt-10">
                    <div className="w-full ">
                        <img
                            src="/images/updates_background.png"
                            alt="Updates and events Background"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            ) : (
                <div className="relative w-full h-auto pb-8 md:pb-16"></div>
            )}
        </section>
    );
}
