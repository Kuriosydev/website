"use client";
import { useEffect, useState } from "react";
import AppStores from "@/components/pages/parents/AppStores";
import Banner from "@/components/pages/parents/Banner";
import KidsFeature from "@/components/pages/parents/KidsFeature";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ParentTestimonals from "@/components/pages/parents/ParentTestimonals";
import Prodigy from "@/components/pages/parents/Prodigy";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import Statictics from "@/components/pages/parents/Statictics";
import ParentsLayout from "./ParentsLayout";

const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges." },
];

const menu = [
    {
        href: "/parents/overview",
        name: "Overview",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Membership",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/parents/research",
        name: "Research",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/support",
        name: "Support",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
];


const resourceCards = [
    {
        text: "Simple tips to keep learning fun, focused, and stress-free.",
        linkText: "Learn More",
        link: "/news",
    },
    {
        text: "Discover ways to support your child’s growth mindset at home.",
        linkText: "Learn More",
        link: "/news",
    },
    {
        text: "Ways to Celebrate Your Child’s Progress",
        linkText: "Learn More",
        link: "/news",
    }
];


const cards = [
    {
        imgSrc: "/images/parentDashboard.jpg",
        heading: "Parent Dashboard",
        description: "Real-time insights, right at your fingertips",
    },
    {
        imgSrc: "/images/monthlyReport.jpg",
        heading: "Monthly Report",
        description: "A clear snapshot, delivered to your inbox",
    },
    {
        imgSrc: "/images/progressTracking.jpg",
        heading: "Progress Tracking",
        description: "Know exactly where they stand",
    },
];

const staticImages = [
    {
        imgSrc: "/images/parentDashboard.jpg",
    },
    {
        imgSrc: "/images/monthlyReport.jpg",
    },
    {
        imgSrc: "/images/progressTracking.jpg",
    },
  ];

export default function ForParents() {
      const [playtime, setPlaytime] = useState({
        title: "",
        description: "",
        features: [],
      });

      const [resource, setResource] = useState({
        resourceFeatures: [],
      });
    
      useEffect(() => {
        async function fetchPlaytimeContent() {
          try {
            const response = await fetch(
              "http://localhost:1337/api/cms-pages?filters[slug][$eq]=parents&populate=ParentsMetaData&populate=ParentsMetaData.banner&populate=ParentsMetaData.bannerCard&populate=ParentsMetaData.bannerReviewCard&populate=ParentsMetaData.playtimeSection&populate=ParentsMetaData.playtimeSection.ParentsCard&populate=ParentsMetaData.playtimeSection.GooglePlayButton&populate=ParentsMetaData.playtimeSection.ApplePlayButton&populate=ParentsMetaData.learingSection&populate=ParentsMetaData.learingSection.ParentsCard&populate=ParentsMetaData.supportSection&populate=ParentsMetaData.supportSection.ParentsSupportCard&populate=ParentsMetaData.supportSection.button&populate=ParentsMetaData.resourcesSection.card&populate=ParentsMetaData.questionSection&populate=ParentsMetaData.questionSection.QuestionsList&populate=ParentsMetaData.questionSection.button"
            );
            const data = await response.json();
    
            const section =
              data.data[0]?.ParentsMetaData[0]?.supportSection?.[0] || {};
              const resourceSection =
              data.data[0]?.ParentsMetaData[0]?.resourcesSection?.[0] || {};
   
            const features =
              section.card?.map((card,index) => ({
                heading: card.title,
                description: card.description,
                imgSrc: staticImages[index]?.imgSrc || "",
              })) || [];

              const resourceFeatures =
              resourceSection.card?.map((item,index) => ({
                text: item.title,
                linkText: item.description,
                link: "/news",
              })) || [];
    console.log(resourceFeatures,"resourceFeatures")
            setPlaytime({
              title: section.title || "",
              description: section.description || "",
              features,
            });

            setResource({
                resourceFeatures,
              });
          } catch (error) {
            console.error("Failed to fetch playtime content:", error);
          }
        }
    
        fetchPlaytimeContent();
      }, []);

    return (
        <ParentsLayout faq={true} joinus={true}>
            <Banner />
            <Statictics />
            <ParentTestimonals />
            <KidsFeature />
            <AppStores />
            <Prodigy />
            <ParentAccount
                heading={playtime.title}
                buttonText="Create your parent account"
                buttonColor="bg-[#FFCE49]"
                cards={playtime.features}
            />
            <ResourceBlog
                heading="Parent Resources"
                bgImgSrc="/images/resource_blog.png"
                resourceCards={resource.resourceFeatures}
            />
        </ParentsLayout>
    )
}
