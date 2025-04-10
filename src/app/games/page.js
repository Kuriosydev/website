import Banner from "@/components/pages/games/Banner";
import JoinUs from "@/components/pages/home/sections/JoinUs";
import SecondaryHeader from "@/Layouts/SecondaryHeader";

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges" },
];

const menu = [
    {
        href: "#",
        name: "Maths",
        styles: "mr-5 md:mr-12",
        dropdown: true
    },
    {
        href: "/games/english",
        name: "Maths",
        styles: "mr-5 md:mr-12",
        dropdown: false
    },
    {
        href: "#",
        name: "Memberships",
        styles: "mr-5 md:mr-12",
        dropdown: true
    },
    {
        href: "/support",
        name: "Support",
        styles: "mr-5 md:mr-12",
        dropdown: false
    },
];

export default function Games() {
    return (
        <>
            <SecondaryHeader
                pageName="Games"
                menu={menu}
                buttonText="Buy Membership"
                buttonStyles="px-6 py-2 md:px-8 md:py-2.5"
            />
            <Banner />
            <JoinUs
                sectionStyle={"mt-8"}
                heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
                headingColor={"text-black"}
                headingStyle={"md:mt-10"}
                subHeading={"Get insider perks, secret rewards, and early access to new games."}
                subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
                list={whyJoin}
            />
        </>
    )
}
