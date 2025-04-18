import Faq from "@/components/pages/Faq";
import JoinUs from "@/components/pages/home/JoinUs";
import AppStores from "@/components/pages/parents/AppStores";
import Banner from "@/components/pages/parents/Banner";
import KidsFeature from "@/components/pages/parents/KidsFeature";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ParentTestimonals from "@/components/pages/parents/ParentTestimonals";
import Prodigy from "@/components/pages/parents/Prodigy";
import ParentsReasearchDataDriven from "@/components/pages/parents/research/ParentsReasearchDataDriven";
import ParentsResearchBanner from "@/components/pages/parents/research/ParentsResearchBanner";
import ParentsResearchEngage from "@/components/pages/parents/research/ParentsResearchEngage";
import ParentsResearchProdigy from "@/components/pages/parents/research/ParentsResearchProdigy";
import ParentsResearchProdigyEnglish from "@/components/pages/parents/research/ParentsResearchProdigyEnglish";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import Statictics from "@/components/pages/parents/Statictics";
import SecondaryHeader from "@/Layouts/SecondaryHeader";

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges" },
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

const faqs = [
    {
        question: "What kind of learning does Kurixel follow?",
        answer: "We blend core academic concepts with game-based adventures to make learning feel like play! Our curriculum aligns with widely recognized educational standards while adding a creative twist. Whether it's math missions, science quests, or logic puzzles, every game is crafted to help kids learn by doing—and having fun while they're at it."
    },
    {
        question: "How does Kurixel keep kids safe?",
        answer: "Your child's safety is our top priority. Kurixel follows strict privacy protocols and secure data practices. We never share personal info, and all interactions are designed with child-safe, COPPA-compliant systems. Our virtual world is fun-first and safe-always."
    },
    {
        question: "Can I use the same account for all Kurixel games?",
        answer: "Absolutely! One account unlocks everything in the Kurixel universe. Whether you're diving into a math dungeon or crafting your next big invention, your progress follows you across every world."
    },
    {
        question: "Does the learning get more challenging over time?",
        answer: "Yep! Kurixel's smart progression system tailors the gameplay to your child's level. As players build skills, the game evolves offering new challenges to keep things exciting and just the right amount of tricky."
    },
];

const cards = [
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Parent portal",
        description: "See instant data on your child's progress, all in one place.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Monthly report card",
        description: "Get a detailed, skill-by-skill breakdown delivered straight to your inbox each month.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Curriculum Progress report",
        description: "Find out which grade-level math skills your child has mastered from their curriculum.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "More powerful parent tools",
        description: "Members get even more ways to support learning. Set Goals for your child, send in-game Cheers, print custom Practice Sheets and more!",
    }
];

export default function page() {
   return (
        <>
            <ParentsResearchBanner />
            <ParentsResearchProdigy />
            <ParentsResearchProdigyEnglish />
            <ParentsReasearchDataDriven/>
           <ParentsResearchEngage/>
        </>
    )
}
