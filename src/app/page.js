"use client"
import About from '@/components/pages/home/About';
import Banner from '@/components/pages/home/Banner';
import GameInfo from '@/components/pages/home/GameInfo';
import Intro from '@/components/pages/home/Intro';
import JoinUs from '@/components/pages/home/JoinUs';
import UpdatesEvents from '@/components/pages/home/UpdatesEvents';
import { useEffect, useState } from 'react';




export default function Home() {
  const [contactUsData, setContactUsData] = useState({
    title: '',
    secondary_title: '',
    ContactUsList: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=home&filters[slug][$eq]=footer&populate=HomeMetaData.banner.banner.button&populate=HomeMetaData.playAnyWhereSection.content_left_card_1&populate=HomeMetaData.playAnyWhereSection.content_left_card_2&populate=HomeMetaData.playAnyWhereSection.content_left_card_3&populate=HomeMetaData.playAnyWhereSection.DownloadNow&populate=HomeMetaData.playAnyWhereSection.AppStore&populate=HomeMetaData.playAnyWhereSection.GoogleStore&populate=HomeMetaData.playAnyWhereSection.app_preview_image&populate=HomeMetaData.adventureSection&populate=HomeMetaData.adventureSection.wooden_button&populate=HomeMetaData.adventureSection.slider_button&populate=HomeMetaData.updateAndEventsSection&populate=HomeMetaData.updateAndEventsSection.EventsCard&populate=HomeMetaData.contactUsSection&populate=HomeMetaData.contactUsSection.ContactUsList&populate=HomeMetaData.contactUsSection.ContactUsList&filters[slug][$eq]=footer&populate=Footer&populate=Footer.quick_links&populate=Footer.quick_links_support_anchor&populate=Footer.social_media_footer_links');
        const data = await response.json();
        setContactUsData(data.data[1].HomeMetaData[0].contactUsSection[0]);
      } catch (error) {
        console.error('Failed to fetch contact us section:', error);
      }
    }

    fetchData();
  }, []);

  const whyJoin = contactUsData.ContactUsList.map(item => ({ text: item.title }));


  return (
    <>
      <Banner />
      <Intro />
      <About />
      <GameInfo />
      <UpdatesEvents />
      <JoinUs
        heading={contactUsData.title}
        headingStyle={"md:mt-10"}
        subHeading={"Get insider perks, secret rewards, and early access to new games."}
        subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
        list={whyJoin}
      />
    </>
  );
}
