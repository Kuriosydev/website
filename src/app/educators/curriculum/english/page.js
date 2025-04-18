import EnglishCurriculumBanner from "@/components/pages/educators/curriculum/english/EnglishCurriculumBanner";
import ParentsSupport from "@/components/pages/educators/curriculum/english/ParentsSupport";
import TeacherClassroom from "@/components/pages/educators/curriculum/english/TeacherClassroom";
import ViewCurriculum from "@/components/pages/educators/curriculum/english/ViewCurriculum";
import EducatorLayout from "../../EducatorLayout";

const testimonials = [
    {
        comment: "Struggling students love Prodigy. They think they're playing a game, but in reality, they are learning and practicing. Some of my heaviest users of Prodigy have become my best students. There is a positive correlation between Prodigy usage and student performance.",
        author: "Kimberly Martin",
        authorImage: "/images/image (7).png"
    },
    {
        comment: "Over the last year, our team has collaborated to create over 8,000 English Language Arts questions. Our mission is to build on each child's love of learning and meet each student where they are. Whether students are learning something new, or revisiting a",
        author: "Clayton Carr",
        authorImage: "/images/image (8).png"
    },
    {
        comment: " am more involved in my daughters learning because of my Prodigy parent account. I am able to follow her progress, and even watch her play",
        author: "Jezer Urena",
        authorImage: "/images/image (9).png"
    }
];

export default function MathCurriculum() {
    return (
        <EducatorLayout joinus={true}>
            <EnglishCurriculumBanner />
            <ViewCurriculum />
            <TeacherClassroom />
            <ParentsSupport />
        </EducatorLayout>
    )
}
