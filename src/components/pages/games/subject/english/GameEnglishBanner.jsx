import React from 'react'
import ImageBanner from "@/components/banners/ImageBanner";
export default function GameEnglishBanner() {
  return (
            <ImageBanner
                col={2}
                bgColor={"bg-[#FFCE49]"}
                heading="Spark Imagination with Kurixel"
                subHeading="Through immersive adventures, learners strengthen their reading and language skills in ways that feel more like play than practice."
                imgsrc="/images/frame (3).png"
                buttons={[
                    {
                      text: "Get Started ",
                      source: "/images/Group.png",
                      alt: "Get Started ",
                      className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                    },
                    {
                      text: "Unlock Language Learning",
                      source: "/images/Group.png",
                      alt: "Unlock Language Learning",
                      className: "px-10 py-4 sm:py-4 md:px-8 md:py-6 lg:py-8 xl:py-10"
                    }
                  ]}
                // secondSubHeading="Prodigy English features hundreds of language arts questions, aligned with Common Core State Standards for 1st to 6th grade — with more skills to come!"
            />
  )
}
