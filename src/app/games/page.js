"use client";
import Banner from "@/components/pages/games/Banner";
import Dashboard from "@/components/pages/games/Dashboard";
import GameFeature from "@/components/pages/games/GameFeature";
import GamePreview from "@/components/pages/games/GamePreview";
import ProdigyWorld from "@/components/pages/games/ProdigyWorld";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import GameLayout from "./GameLayout";
import { useEffect, useState } from 'react';

export default function Games() {
  const [item, setItems] = useState({ title: '', card: [] });
  const [resourceSection, setResourceSection] = useState({ title: '', card: [] });
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=games&populate=GamesMetaData&populate=GamesMetaData.BannerSection&populate=GamesMetaData.GamePracticeSection&populate=GamesMetaData.supportSection&populate=GamesMetaData.GameHomeworkSection&populate=GamesMetaData.GameDashboardSection&populate=GamesMetaData.BannerSection.button&populate=GamesMetaData.GamePracticeSection.card&populate=GamesMetaData.supportSection.card&populate=GamesMetaData.GameHomeworkSection.card&populate=GamesMetaData.GameDashboardSection.title&populate=GamesMetaData.GameDashboardSection.list&populate=GamesMetaData.GameDiveDeepSection&populate=GamesMetaData.GameDiveDeepSection.button&populate=GamesMetaData.GameResourceSection&populate=GamesMetaData.GameResourceSection.card&populate=GamesMetaData.GameQuestionSection&populate=GamesMetaData.GameQuestionSection.QuestionsList&populate=GamesMetaData.GameQuestionSection.button");
        const data = await response.json();

        const metaData = data.data[0]?.GamesMetaData[0];

        setItems(metaData?.supportSection?.[0] || { title: '', card: [] });
        setResourceSection(metaData?.GameResourceSection?.[0] || { title: '', card: [] });

        const faqData = metaData?.GameQuestionSection?.[0]?.QuestionsList || [];
        const formattedFaqs = faqData.map(q => ({
          question: q.question_text,
          answer: q.question_answer,
        }));
        setFaqs(formattedFaqs);

      } catch (error) {
        console.error("Failed to fetch Data", error);
      }
    }

    fetchData();
  }, []);

  const staticImages = [
    "/images/4876975.jpg",
    "/images/8550090.jpg"
  ];

  const cards =
    item.card.length > 0
      ? item.card.map((card, index) => ({
          imgSrc: staticImages[index] || "",
          heading: card.title,
          description: card.description,
        }))
      : [
          {
            imgSrc: "/images/4876975.jpg",
            heading: "Teachers, reclaim your time.",
            description: "Let Kurixel turn lessons into interactive adventures your students will actually love."
          },
          {
            imgSrc: "/images/8550090.jpg",
            heading: "Parents, end the homework drama.",
            description: "Say goodbye to nagging and hello to a world where your child wants to learn."
          }
        ];

  const resourceCards =
    resourceSection.card.length > 0
      ? resourceSection.card.map((item) => ({
          text: item.title,
          linkText: item.link || "Learn More",
          link: "#",
        }))
      : [
          { text: "Reports", linkText: "Learn More", link: "#" },
          { text: "Kurixel Membership", linkText: "Learn More", link: "#" },
          { text: "Frequently Asked Questions", linkText: "Learn More", link: "#" }
        ];

  return (
    <GameLayout faq={true} joinus={true} faqs={faqs}>
      <Banner />
      <GameFeature />
      <GamePreview />
      <ParentAccount
        heading={item.title}
        cards={cards}
        bgColor="bg-white"
      />
      <Dashboard />
      <ProdigyWorld />
      <ResourceBlog
        heading={resourceSection.title}
        bgImgSrc="/images/resource_blog2.png"
        resourceCards={resourceCards}
      />
    </GameLayout>
  );
}
