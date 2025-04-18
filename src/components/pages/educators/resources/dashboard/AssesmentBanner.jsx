import ImageBanner from "@/components/banners/ImageBanner";

export default function AssesmentBanner() {
  return (
    <ImageBanner
      col={2}
      bgColor={"bg-[#FFCE49]"}
      heading="Uncover Learning Gaps "
      description="Instantly see which skills they’ve mastered, where they’re still growing, and which topics may need a little extra support."
      imgsrc="/images/frame (1).png"
      buttons={[
        {
          text: "Start free as a teacher",
          source: "/images/Group.png",
          alt: "Get started button",
          className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
        }
      ]}
      textAfterButton="Sign up and start exploring today!"
    />
  )
}
