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
            heading="Aligned Math Skills"
            subHeading="Fully aligned curriculum standards"
            imgsrc="/images/maths_curr_banner.png"
            buttons={[
                {
                  text: "View curriculum",
                  source: "/images/Group.png",
                  alt: "Get started button",
                  className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                }
              ]}
            dropdown={countryDropdown}
        />
    )
}
