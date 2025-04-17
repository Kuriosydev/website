import AppStores from "@/components/pages/parents/AppStores";
import Banner from "@/components/pages/parents/Banner";
import KidsFeature from "@/components/pages/parents/KidsFeature";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ParentTestimonals from "@/components/pages/parents/ParentTestimonals";
import Prodigy from "@/components/pages/parents/Prodigy";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import Statictics from "@/components/pages/parents/Statictics";
import ParentsLayout from "./ParentsLayout";


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
                heading="Support your child's math learning with a Kurixel parent account"
                buttonText="Get a parent account now"
                buttonColor="bg-[#FFCE49]"
                cards={cards}
            />
            <ResourceBlog
                heading="Parent resources from our blog"
                bgImgSrc="/images/resource_blog.png"
                resourceCards={resourceCards}
            />
        </ParentsLayout>
    )
}
