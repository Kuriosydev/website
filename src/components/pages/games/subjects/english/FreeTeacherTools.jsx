"use client"
import { useEffect, useState } from "react";
import ParentAccount from "@/components/pages/parents/ParentAccount";

const staticImages = [
  "/images/adaptive_assessments.webp",
  "/images/progress_tracking.png",
  "/images/curriculum.jpg"
];

export default function FreeTeacherTools() {
  const [heading, setHeading] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=game-english&populate=GameEnglishPage&populate=GameEnglishPage.TeachersSection&populate=GameEnglishPage.TeachersSection.card")
      .then((res) => res.json())
      .then((data) => {
        const section = data?.data?.[0]?.GameEnglishPage?.[0]?.TeachersSection?.[0];
        setHeading(section?.title || "");
        const fetchedCards = section?.card || [];
        const mergedCards = fetchedCards.map((card, i) => ({
          imgSrc: staticImages[i], // keep images static
          heading: card.title,
          description: card.description,
        }));
        setCards(mergedCards);
      })
      .catch((err) => console.error("Failed to fetch TeachersSection:", err));
  }, []);

  return (
    <ParentAccount
      heading={heading}
      cards={cards}
      bgColor="bg-white"
    />
  );
}
