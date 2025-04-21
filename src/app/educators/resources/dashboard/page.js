
import AssesmentBanner from "@/components/pages/educators/resources/dashboard/AssesmentBanner";
import EngagingBanner from "@/components/pages/educators/resources/dashboard/EngagingBanner";
import Portal from "@/components/pages/educators/resources/dashboard/Portal";
import WhyProdigy from "@/components/pages/educators/resources/dashboard/WhyProdigy";
import JoinUs from "@/components/pages/home/JoinUs";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import EducatorLayout from "../../EducatorLayout";

const whyJoin = [
  { text: "Be the first to try new levels." },
  { text: "Unlock members-only outfits and power-ups." },
  { text: "Get behind-the-scenes insights." },
  { text: "Participate in exclusive contests and challenges." },
];

const faqs = [
  {
    question: "What curriculum does Prodigy use?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "What does Prodigy do to protect safety and privacy?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "What's the difference between Prodigy English and Prodigy Math?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    question: "Can I log on to Prodigy English with my Prodigy Math account?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "How does Prodigy Math progress in difficulty?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "What are Prodigy Epics?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "How do I connect with other Prodigy parents?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
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

const cards = [
  {
    imgSrc: "/images/circular_assessment.jpg",
    heading: "Learning That Feels Like Play",
    description: "Say goodbye to worksheets that get tossed aside. Kurixel turns skill-building into epic quests, where students engage deeply without even realizing they're practicing.",
  },
  {
    imgSrc: "/images/circular_assessment2.jpg",
    heading: "Aligned With What You Already Teach",
    description: "Every learning moment is thoughtfully designed to match your curriculum goals, so you can reinforce key reading and language skills while students explore and create.",
  },
]

export default function Dashboard() {
  return (
    <EducatorLayout>
      <AssesmentBanner />
      <EngagingBanner />
      <ParentAccount
        heading="Teaching Tools That Work With You"
        cards={cards}
      />
      <Portal />
      <WhyProdigy />
      <JoinUs
        heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
        headingColor={"text-black"}
        headingStyle={"md:mt-10"}
        subHeading={
          "Get insider perks, secret rewards, and early access to new games."
        }
        subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
        list={whyJoin}
      />
    </EducatorLayout>
  );
}
