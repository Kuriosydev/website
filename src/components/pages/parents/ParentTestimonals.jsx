"use client";
import { useEffect, useState } from "react";
import TestimonialCards from "@/components/cards/TestimonialCards";

export default function ParentTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch(
          "http://localhost:1337/api/cms-pages?filters[slug][$eq]=parents&populate=ParentsMetaData&populate=ParentsMetaData.bannerReviewCard"
        );
        const data = await response.json();

        const cards =
          data.data[0]?.ParentsMetaData[0]?.bannerReviewCard?.map((item) => ({
            comment: item.title || "",
            author: item.description || "",
          })) || [];

        setTestimonials(cards);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
      <div className="w-full h-full relative overflow-hidden pb-14 md:py-10">
        <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-8 pb-24">
          {testimonials.map((testimonial, index) => (
            <TestimonialCards key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
