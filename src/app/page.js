import About from '@/components/pages/home/About';
import Banner from '@/components/pages/home/Banner';
import GameInfo from '@/components/pages/home/GameInfo';
import Intro from '@/components/pages/home/Intro';
import JoinUs from '@/components/pages/home/JoinUs';
import UpdatesEvents from '@/components/pages/home/UpdatesEvents';


const whyJoin = [
  { text: "Be the first to try new levels." },
  { text: "Unlock members-only outfits and power-ups." },
  { text: "Get behind-the-scenes insights." },
  { text: "Participate in exclusive contests and challenges." },
];

export default function Home() {
  return (
    <>
      <Banner />
      <Intro />
      <About />
      <GameInfo />
      <UpdatesEvents />
      <JoinUs
        heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
        headingStyle={"md:mt-10"}
        subHeading={"Get insider perks, secret rewards, and early access to new games."}
        subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
        list={whyJoin}
      />
    </>
  );
}
