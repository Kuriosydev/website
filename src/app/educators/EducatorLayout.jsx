import Faq from "@/components/pages/Faq";
import JoinUs from "@/components/pages/home/JoinUs";
import SecondaryHeader from "@/Layouts/SecondaryHeader";

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
        name: "Curriculam",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: [
            {
                href: "/educators/curriculam/math",
                name: "Math",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
            {
                href: "/educators/overview/english-language-arts",
                name: "English Language Arts",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
        ]
    },
    {
        href: "/educators/resources",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: [
            {
                href: "/educators/resources/dashboard",
                name: "Dashboard",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
            {
                href: "/educators/resources/assesment",
                name: "Assesment",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
        ]
    },
    {
        href: "/contact-us",
        name: "Support",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
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

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges" },
];



const EducatorLayout = ({ children, faq = false, joinus = false }) => {
    return (
        <>
            <SecondaryHeader
                pageName="Educators"
                menu={menu}
                buttonText="Sign Up"
                buttonStyles="mr-2 px-6 py-2 md:px-8 md:py-2.5"
            />
            {children}
            {faq &&
                <Faq
                    heading="Frequently Asked Questions"
                    headingColor="text-[#8F0E00]"
                    faqs={faqs}
                    faqQuestionColor="text-[#8F0E00]"
                    faqQuestionFontFamily="font-luckiest"
                    faqQuestionFontSize=" text-3xl"
                    faqQuestionFontWeight="font-normal"
                    faqAnswerFontSize="text-lg"
                    faqAnswerFontWeight="font-medium"
                    customStyles=""
                />
            }
            {joinus &&
                <JoinUs
                    heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
                    headingColor={"text-black"}
                    headingStyle={"md:mt-10"}
                    subHeading={"Get insider perks, secret rewards, and early access to new games."}
                    subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
                    list={whyJoin}
                />
            }
        </>
    )
}

export default EducatorLayout