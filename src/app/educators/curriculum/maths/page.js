import MathCurriculumBanner from "@/components/pages/educators/curriculum/maths/MathCurriculumBanner";
import ViewCurriculam from "@/components/pages/educators/curriculum/maths/ViewCurriculam";
import EducatorTestimonials from "@/components/pages/educators/EducatorTestimonials";
import EducatorLayout from "../../EducatorLayout";
import TeachersAccount from "@/components/pages/educators/curriculum/maths/TeachersAccount";
import Prodigy from "@/components/pages/educators/curriculum/maths/prodigy";

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

export default function MathCurriculum() {
    return (
        <EducatorLayout joinus={true}>
            <MathCurriculumBanner />
            <ViewCurriculam/>
            <TeachersAccount/>
            {/* <EducatorTestimonials heading="Here's what teachers are saying" testimonials={testimonials} /> */}
        </EducatorLayout>
    )
}
