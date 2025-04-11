import ResourceBlog from "@/components/pages/for-parents/ResourceBlog";
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
        href: "/educators/overview",
        name: "Overview",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Features",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "#",
        name: "Curriculam",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/educators/research",
        name: "Research",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/educators/administrators",
        name: "Administrators",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "/support",
        name: "Support",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
];


const resourceCards = [
    {
        text: "A Parent's Guide to Kurixel: Goals, Reports, Memberships",
        linkText: "Learn More",
        link: "#",
    },
    {
        text: "Is a Kurixel Membership Worth It?",
        linkText: "Learn More",
        link: "#",
    },
    {
        text: "What Is Prodigy? Your Top Questions, Answered!",
        linkText: "Learn More",
        link: "#",
    }
];

export default function Educators() {
    return (
        <>
            <SecondaryHeader
                pageName="Educators"
                menu={menu}
                buttonText="Sign Up"
                buttonStyles="mr-2 px-6 py-2 md:px-8 md:py-2.5"
            />
            <ResourceBlog
                heading="Parent resources from our blog"
                bgImgSrc="/images/resource_blog.png"
                resourceCards={resourceCards}
            />
            <JoinUs
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
