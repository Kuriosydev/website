import Faq from "@/components/pages/Faq";
import JoinUs from "@/components/pages/home/JoinUs";
import AppStores from "@/components/pages/parents/AppStores";
import Banner from "@/components/pages/parents/Banner";
import KidsFeature from "@/components/pages/parents/KidsFeature";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ParentTestimonals from "@/components/pages/parents/ParentTestimonals";
import Prodigy from "@/components/pages/parents/Prodigy";
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
        question: "What curriculum does Prodigy use?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "What does Prodigy do to protect safety and privacy?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "What's the difference between Prodigy English and Prodigy Math?",
        answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        question: "Can I log on to Prodigy English with my Prodigy Math account?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "How does Prodigy Math progress in difficulty?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "What are Prodigy Epics?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "How do I connect with other Prodigy parents?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
        <>
            <SecondaryHeader
                pageName="Parents"
                menu={menu}
                buttonText="Buy Membership"
                buttonStyles="mr-2 px-6 py-2 md:px-8 md:py-5"
            />
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
            <Faq
                heading="Frequently Asked Questions"
                headingColor="text-[#8F0E00]"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
                faqs={faqs}
                buttonText="More FAQ"
                faqQuestionColor="text-[#8F0E00]"
                faqQuestionFontFamily="font-luckiest"
                faqQuestionFontSize=" text-3xl"
                faqQuestionFontWeight="font-normal"
                faqAnswerFontSize="text-lg"
                faqAnswerFontWeight="font-medium"
                customStyles=""
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
