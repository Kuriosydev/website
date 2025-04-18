import ImageBanner from "@/components/banners/ImageBanner";
export default function ParentsResearchBanner() {
  return (
    <ImageBanner
      col={2}
      bgColor={"bg-[#FFCE49]"}
      heading="Kurixel makes a real difference"
      description="When learning feels like play, students stay motivated, build confidence, and make meaningful progress and that’s exactly what Kurixel is designed to do."
      imgsrc="/images/image 8.png"
      buttons={[
        {
          text: "Sign Up Now",
          source: "/images/Group.png",
          alt: "Sign Up Now",
          className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
        }
      ]}
    />
  )
}
