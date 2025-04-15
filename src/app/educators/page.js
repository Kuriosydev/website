import Banner from "@/components/pages/educators/Banner";
import Curriculam from "@/components/pages/educators/Curriculam";
import EducatorTestimonials from "@/components/pages/educators/EducatorTestimonials";
import HowWork from "@/components/pages/educators/HowWork";
import OneClickLogin from "@/components/pages/educators/OneClickLogin";
import WhyProdigy from "@/components/pages/educators/WhyProdigy";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import EducatorLayout from "./EducatorLayout";


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

const testimonials = [
    {
        comment: "Kurixel is a great way to get kids who don't like math into math.",
        author: "Ensley Guerrero",
        authorImage: "/images/author1.png"
    },
    {
        comment: "I love that Kurixel is fun for students. ",
        author: "Karina Vega",
        authorImage: "/images/author2.png"
    },
    {
        comment: "Kurixel is a great way to get kids who don't like math into math.",
        author: "Journey Vaughn",
        authorImage: "/images/author3.png"
    }
];


export default function Educators() {
    return (
        <EducatorLayout faq={true} joinus={true}>
            <Banner />
            <EducatorTestimonials testimonials={testimonials} />
            <HowWork />
            <OneClickLogin />
            <Curriculam />
            <WhyProdigy />
            <ResourceBlog
                heading="Parent resources from our blog"
                bgImgSrc="/images/resource_blog.png"
                resourceCards={resourceCards}
            />
        </EducatorLayout>
    )
}
