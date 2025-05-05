"use client"
import { useEffect, useState } from "react";
import ImageBanner from "@/components/banners/ImageBanner";

export default function ParentsResearchBanner() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    async function fetchBannerData() {
      try {
        const res = await fetch(
          "https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=second-research&populate=SecondResearchPage.list&populate=SecondResearchPage.card&populate=SecondResearchPage.banner"
        );
        const json = await res.json();
        const page = json?.data?.[0]?.SecondResearchPage || [];
        const banner = page.find(
          (section) => section.__component === "shared.title-desc-btn-img-bg-component"
        );

        setBannerData(banner);
      } catch (err) {
        console.error("Error fetching banner data:", err);
      }
    }

    fetchBannerData();
  }, []);

  if (!bannerData) return null; // or a loading indicator

  return (
    <ImageBanner
      col={2}
      bgColor={"bg-[#FFCE49]"}
      heading={bannerData.title}
      description={bannerData.description}
      imgsrc="/images/image 8.png" // Still hardcoded unless image comes from CMS
      buttons={[
        {
          text: "Sign Up Now",
          source: "/images/Group.png",
          alt: "Sign Up Now",
          className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
        }
      ]}
    />
  );
}
