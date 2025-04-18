import AssesmentBanner from "@/components/pages/educators/resources/assesment/AssesmentBanner";
import EngagingBanner from "@/components/pages/educators/resources/assesment/EngagingBanner";
import Portal from "@/components/pages/educators/resources/assesment/Portal";
import WhyProdigy from "@/components/pages/educators/resources/assesment/WhyProdigy";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import EducatorLayout from "../../EducatorLayout";

const whyJoin = [
  { text: "Be the first to try new levels." },
  { text: "Unlock members-only outfits and power-ups." },
  { text: "Get behind-the-scenes insights." },
  { text: "Participate in exclusive contests and challenges." },
];


const testimonials = [
  {
    comment:
      "Kurixel is a great way to get kids who don't like math into math.",
    author: "Ensley Guerrero",
    authorImage: "/images/author1.png",
  },
  {
    comment: "I love that Kurixel is fun for students. ",
    author: "Karina Vega",
    authorImage: "/images/author2.png",
  },
  {
    comment:
      "Kurixel is a great way to get kids who don't like math into math.",
    author: "Journey Vaughn",
    authorImage: "/images/author3.png",
  },
];

export default function Assessments() {
  const cards = [
    {
      imgSrc: "/images/Ellipse.png",
      heading: "Learning That Feels Like Play",
      description: "Say goodbye to worksheets that get tossed aside. Kurixel turns skill-building into epic quests, where students engage deeply without even realizing they're practicing.",
    },
    {
      imgSrc: "/images/Ellipse.png",
      heading: "Aligned With What You Already Teach",
      description: "Every learning moment is thoughtfully designed to match your curriculum goals, so you can reinforce key reading and language skills while students explore and create.",
    },
  ];


  return (
    <EducatorLayout joinus={true} >
      <AssesmentBanner />
      <EngagingBanner />
      <ParentAccount
        heading="Teaching Tools That Work With You"
        cards={cards}
      />
      <Portal />
      <WhyProdigy />
    </EducatorLayout>
  );
}
