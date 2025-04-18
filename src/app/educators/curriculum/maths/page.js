import CurriculamCoverage from "@/components/pages/educators/curriculum/maths/CurriculamCoverage";
import MathCurriculumBanner from "@/components/pages/educators/curriculum/maths/MathCurriculumBanner";
import TeachersAccount from "@/components/pages/educators/curriculum/maths/TeachersAccount";
import ViewCurriculam from "@/components/pages/educators/curriculum/maths/ViewCurriculam";
import EducatorLayout from "../../EducatorLayout";

export default function MathCurriculum() {
    return (
        <EducatorLayout joinus={true}>
            <MathCurriculumBanner />
            <ViewCurriculam />
            <CurriculamCoverage />
            <TeachersAccount />
        </EducatorLayout>
    )
}
