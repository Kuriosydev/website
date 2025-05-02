"use client"
import Banner from "@/components/pages/games/Banner";
import Dashboard from "@/components/pages/games/Dashboard";
import GameFeature from "@/components/pages/games/GameFeature";
import GamePreview from "@/components/pages/games/GamePreview";
import ProdigyWorld from "@/components/pages/games/ProdigyWorld";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import GameLayout from "./GameLayout";
import { useEffect, useState } from 'react';

const faqs = [
    {
        question: "What kind of learning does Kurixel follow?",
        answer: "We blend core academic concepts with game-based adventures to make learning feel like play! Our curriculum aligns with widely recognized educational standards while adding a creative twist. Whether it's math missions, science quests, or logic puzzles, every game is crafted to help kids learn by doing—and having fun while they're at it."
    },
    {
        question: "How does Kurixel keep kids safe?",
        answer: "Your child's safety is our top priority. Kurixel follows strict privacy protocols and secure data practices. We never share personal info, and all interactions are designed with child-safe, COPPA-compliant systems. Our virtual world is fun-first and safe-always."
    },
    {
        question: "Can I use the same account for all Kurixel games?",
        answer: "Absolutely! One account unlocks everything in the Kurixel universe. Whether you're diving into a math dungeon or crafting your next big invention, your progress follows you across every world."
    },
    {
        question: "Does the learning get more challenging over time?",
        answer: "Yep! Kurixel's smart progression system tailors the gameplay to your child's level. As players build skills, the game evolves offering new challenges to keep things exciting and just the right amount of challanges."
    },
];

export default function Games() {
    const [item, setItems] = useState({
        title: '',
        card: [],
      });

      const [resourceSection, setResourceSection] = useState({
        title: '',
        card: [],
      });
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("http://localhost:1337/api/cms-pages?filters[slug][$eq]=games&populate=GamesMetaData&populate=GamesMetaData.BannerSection&populate=GamesMetaData.GamePracticeSection&populate=GamesMetaData.supportSection&populate=GamesMetaData.GameHomeworkSection&populate=GamesMetaData.GameDashboardSection&populate=GamesMetaData.BannerSection.button&populate=GamesMetaData.GamePracticeSection.card&populate=GamesMetaData.supportSection.card&populate=GamesMetaData.GameHomeworkSection.card&populate=GamesMetaData.GameDashboardSection.title&populate=GamesMetaData.GameDashboardSection.list&populate=GamesMetaData.GameDiveDeepSection&populate=GamesMetaData.GameDiveDeepSection.button&populate=GamesMetaData.GameResourceSection&populate=GamesMetaData.GameResourceSection.card");
            const data = await response.json();
            console.log(data.data[0],"working")
            setItems(data.data[0].GamesMetaData[0].supportSection[0]);
            setResourceSection(data.data[0].GamesMetaData[0].GameResourceSection[0]);
          } catch (error) {
            console.error('Failed to fetch Data', error);
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
              imgSrc: staticImages[index] || "", // static image by index
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
                  link: "#", // Replace with actual `item.url` if available
                }))
              : [
                  {
                    text: "Reports",
                    linkText: "Learn More",
                    link: "#",
                  },
                  {
                    text: "Kurixel Membership",
                    linkText: "Learn More",
                    link: "#",
                  },
                  {
                    text: "Frequently Asked Questions",
                    linkText: "Learn More",
                    link: "#",
                  }
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
    )
}
