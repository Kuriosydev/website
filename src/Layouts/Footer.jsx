import SocialIcons from "@/components/icons/SocialIcons";
import BulletList from "@/components/lists/BulletList";
import SiteLogo from "@/components/logo/SiteLogo";
import Link from "next/link";

const quickLinksList = [
  { href: "/games", text: "Game" },
  { href: "/", text: "About Us" },
  { href: "/news", text: "News" },
  { href: "/contact-us", text: "Join Us" },
];

const supportList = [
  { href: "/contact-us", text: "Contact Us" },
  { href: "/contact-us", text: "Help Center" },
];

export default function Footer() {
  return (
    <footer className="relative bg-cover bg-center flex flex-col ">
      <div className="absolute inset-0 z-10 bg-[rgba(91,7,7,1)] dark:bg-[#212121]">
        <Link href="/">
          <img
            src="/images/ca0ad6cbee22479a434887931d2b542c.png"
            alt="Footer Background"
            className="w-full h-full object-cover opacity-15 absolute inset-0 dark:hidden"
          />
        </Link>
      </div>

      <div className="relative flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center sm:justify-center  md:justify-between lg:justify-between  items-center md:items-start lg:items-start p-4 sm:p-6 md:p-8 z-10 gap-8 sm:gap-10 md:gap-0">
        <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 flex flex-col items-center sm:items-center md:items-start lg:items-start text-white mt-6 sm:mt-10 md:mt-12 text-center sm:text-center md:text-left lg:text-left">
          <SiteLogo />
          <h3 className="mt-4 text-left text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl font-bold">Fun Learning, Seriously!</h3>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 mt-4 sm:mt-6 md:mt-0 flex justify-center">
          <div className="text-center sm:text-center md:text-left lg:text-left">
            <h3 className="text-white font-bold text-lg sm:text-xl">QUICK LINKS</h3>
            <BulletList lists={quickLinksList} bullet={true} bulletColor="white" isFooter={true} />
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 mt-4 sm:mt-6 md:mt-0 flex justify-center">
          <div className="text-center sm:text-center md:text-left lg:text-left">
            <h3 className="text-white font-bold text-lg sm:text-xl">SUPPORT</h3>
            <BulletList lists={supportList} bullet={true} bulletColor="white" isFooter={true} />
          </div>
        </div>


        <div className="w-full sm:w-3/4 md:w-1/5 flex flex-col items-center justify-center mt-8 sm:mt-10 md:mt-12 md:mr-8">
          <div className="text-white text-sm sm:text-base text-center">Connect with fellow explorers:</div>
          <div className="flex gap-4 sm:gap-[1vw] mt-4 sm:mt-[2vh]">
            <SocialIcons socialName="instagram" socialLink="https://www.instagram.com/kurixel/?hl=en" color="white" borderColor="white" height="10" width="10" fontSize="lg" />
            <SocialIcons socialName="facebook" socialLink="https://www.facebook.com/profile.php?id=61574613231561" color="white" borderColor="white" height="10" width="10" fontSize="lg" />
            <SocialIcons socialName="twitter" socialLink="https://x.com/Kurixel" color="white" borderColor="white" height="10" width="10" fontSize="lg" />
            <SocialIcons socialName="youtube" socialLink="https://www.youtube.com/channel/UC5LsNMmHWObVbvhzTuQwu0A" color="white" borderColor="white" height="10" width="10" fontSize="lg" />
          </div>
        </div>
      </div>

      <div className="relative z-10 h-[10vh] flex justify-center items-center bg-[#5B0707] dark:bg-black px-2 sm:px-4 text-center">
        <div className="flex font-medium text-white text-xs sm:text-sm md:text-base">
          <div className="border-r-2 border-white px-3">&copy; {new Date().getFullYear()} KURIXEL Studios. All rights reserved. </div>
          <div className="font-medium text-white text-xs sm:text-sm md:text-base border-r-2 border-white px-3">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="font-medium text-white text-xs sm:text-sm md:text-base px-3">
            <Link href="/terms-of-use">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
