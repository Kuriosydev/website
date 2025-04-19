import ImageBanner from "@/components/banners/ImageBanner";

const countryDropdown = [
    {
        name: "1",
        value: "1"
    },
    {
        name: "2",
        value: "2"
    },
    {
        name: "3",
        value: "3"
    },
    {
        name: "4",
        value: "4"
    },
    {
        name: "5",
        value: "5"
    },
    {
        name: "6",
        value: "6"
    },
    {
        name: "7",
        value: "7"
    },
    {
        name: "8",
        value: "8"
    }
]

export default function MathCurriculumBanner() {
    return (
        <ImageBanner
            col={2}
            bgColor={"bg-[#FFCE49]"}
            heading="Aligned Math Skills"
            description="Fully aligned curriculum standards"
            imgsrc="/images/maths_curr_banner.png"
            dropdown={countryDropdown}
            buttontext="View Curriculum"
            link="/educators/curriculum"
        />
    )
}
