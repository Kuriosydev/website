import ImageBanner from "@/components/banners/ImageBanner";

const countryDropdown = [
    {
        name: "India",
        value: "IND"
    },
    {
        name: "Australia",
        value: "AUS"
    },
    {
        name: "England",
        value: "ENG"
    },
    {
        name: "Srilanka",
        value: "SL"
    }
]

export default function MathCurriculumBanner() {
    return (
        <ImageBanner
            col={2}
            bgColor={"bg-[#FFCE49]"}
            heading="Math Skills & Curriculum Standards"
            subHeading="Prodigy Math Game features more than 1,500 mathematical skills, aligned with curriculum standards for grades 1 to 8."
            imgsrc="/images/maths_curr_banner.png"
            dropdown={countryDropdown}
        />
    )
}
