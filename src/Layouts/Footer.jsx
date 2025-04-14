import SocialIcons from "@/components/icons/SocialIcons";
import BulletList from "@/components/lists/BulletList";
import SiteLogo from "@/components/logo/SiteLogo";
import Link from "next/link";

const quickLinksList = [
  { href: "#", text: "Home" },
  { href: "#", text: "Game" },
  { href: "#", text: "About Us" },
  { href: "#", text: "News" },
  { href: "#", text: "Join Us" },
];

const supportList = [
  { href: "/contact-us", text: "Contact Us" },
  { href: "#", text: "Help Center" },
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "/terms-of-use", text: "Terms & Services" },
  { href: "/complies", text: "Terms & Services" },
];

export default function Footer() {
  return (
    <footer className="relative bg-cover bg-center flex flex-col">


      <div className="absolute inset-0 z-10 bg-[rgba(91,7,7,1)]">
        <Link href="/">
          <img
            src="/images/ca0ad6cbee22479a434887931d2b542c.png"
            alt="Footer Background"
            className="w-full h-full object-cover opacity-15 absolute inset-0 "
          />
        </Link>
      </div>


      <div className="relative flex flex-col md:flex-row md:justify-between md:items-start items-center justify-center p-4 sm:p-6 md:p-8 z-10 gap-8 sm:gap-10 md:gap-0">
        <div className="w-full sm:w-3/4 md:w-1/3 flex flex-col items-center md:items-center text-white mt-6 sm:mt-10 md:mt-12 text-center md:text-left">
          <SiteLogo />
          <h3 className="mt-4 text-base sm:text-lg md:text-xl font-bold">Fun Learning, Seriously!</h3>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 mt-4 sm:mt-6 md:mt-0">
          <h3 className="text-white font-bold text-lg sm:text-xl">QUICK LINKS</h3>
          <BulletList lists={quickLinksList} bullet={true} bulletColor="white" isFooter={true} />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 mt-4 sm:mt-6 md:mt-0">
          <h3 className="text-white font-bold text-lg sm:text-xl">SUPPORT</h3>
          <BulletList lists={supportList} bullet={true} bulletColor="white" isFooter={true} />
        </div>

        <div className="w-full sm:w-3/4 md:w-1/5 flex flex-col items-center justify-center mt-8 sm:mt-10 md:mt-12 md:mr-8">
          <div className="text-white text-sm sm:text-base text-center">Connect with fellow explorers:</div>
          <div className="flex gap-4 sm:gap-[1vw] mt-4 sm:mt-[2vh]">
            <SocialIcons socialName="instagram" socialLink="#" color="white" borderColor="white" height="10" width="10" fontSize="lg" />
            <SocialIcons socialName="facebook" socialLink="#" color="white" borderColor="white" height="10" width="10" fontSize="lg" />
            <SocialIcons socialName="twitter" socialLink="#" color="white" borderColor="white" height="10" width="10" fontSize="lg" />
            <SocialIcons socialName="youtube" socialLink="#" color="white" borderColor="white" height="10" width="10" fontSize="lg" />
          </div>
        </div>
      </div>

      <div className="relative z-10 h-[10vh] flex justify-center items-center bg-[#5B0707] px-2 sm:px-4 text-center">
        <h4 className="font-medium text-white text-xs sm:text-sm md:text-base">
          © 2025 KURIXEL Studios. All rights reserved. | Privacy Policy | Terms of Service
        </h4>
      </div>
    </footer>
  );
}
