import ImageBanner from "@/components/banners/ImageBanner";

export default function AssesmentBanner() {
  return (
    <ImageBanner
      col={2}
      bgColor={"bg-[#FFCE49]"}
      heading="Design lessons your students will love"
      description="Bring your curriculum to life. Kurixel keeps learning fun for students while giving you built-in grading and real-time performance insights."
      imgsrc="/images/frame (1).png"
      buttons={[
        {
          text: "Start free as a teacher",
          source: "/images/Group.png",
          alt: "Get started button",
          className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
        }
      ]}
      secondSubHeading="Sign up and start exploring today!"
    />
  )
}
