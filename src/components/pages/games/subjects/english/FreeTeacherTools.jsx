import ParentAccount from "@/components/pages/parents/ParentAccount";

const cards = [
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Adaptive Assessments",
        description: "Seamlessly connect gameplay to your lesson plans.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Progress Tracking",
        description: "Monitor student growth as they explore, build, and learn.",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Curriculum",
        description: "Kurixel ensures your students stay on track while having fun.",
    }
];

export default function FreeTeacherTools() {
    return (
        <ParentAccount
            heading="Empower Your Teaching with Smart Tools"
            cards={cards}
            bgColor="bg-white"
        />
    )
}
