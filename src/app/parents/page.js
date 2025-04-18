import AppStores from "@/components/pages/parents/AppStores";
import Banner from "@/components/pages/parents/Banner";
import KidsFeature from "@/components/pages/parents/KidsFeature";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ParentTestimonals from "@/components/pages/parents/ParentTestimonals";
import Prodigy from "@/components/pages/parents/Prodigy";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import Statictics from "@/components/pages/parents/Statictics";
import ParentsLayout from "./ParentsLayout";

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges." },
];

const menu = [
    {
        href: "/parents/overview",
        name: "Overview",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Membership",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/parents/research",
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
        href: "/support",
        name: "Support",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
];


const resourceCards = [
    {
        text: "Simple tips to keep learning fun, focused, and stress-free.",
        linkText: "Learn More",
        link: "#",
    },
    {
        text: "Discover ways to support your child’s growth mindset at home.",
        linkText: "Learn More",
        link: "#",
    },
    {
        text: "Ways to Celebrate Your Child’s Progress",
        linkText: "Learn More",
        link: "#",
    }
];


const cards = [
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Parent Dashboard",
        description: "Real-time insights, right at your fingertips",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Monthly Report",
        description: "A clear snapshot, delivered to your inbox",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Progress Tracking",
        description: "Know exactly where they stand",
    },
];

export default function ForParents() {
    return (
        <ParentsLayout faq={true} joinus={true}>
            <Banner />
            <Statictics />
            <ParentTestimonals />
            <KidsFeature />
            <AppStores />
            <Prodigy />
            <ParentAccount
                heading="Stay connected to your child’s learning"
                buttonText="Create your parent account"
                buttonColor="bg-[#FFCE49]"
                cards={cards}
            />
            <ResourceBlog
                heading="Parent Resources"
                bgImgSrc="/images/resource_blog.png"
                resourceCards={resourceCards}
            />
        </ParentsLayout>
    )
}
