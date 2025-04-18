import Banner from "@/components/pages/games/Banner";
import Dashboard from "@/components/pages/games/Dashboard";
import GameFeature from "@/components/pages/games/GameFeature";
import GamePreview from "@/components/pages/games/GamePreview";
import ProdigyWorld from "@/components/pages/games/ProdigyWorld";
import ParentAccount from "@/components/pages/parents/ParentAccount";
import ResourceBlog from "@/components/pages/parents/ResourceBlog";
import GameLayout from "./GameLayout";



const resourceCards = [
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



const cards = [

    {
        imgSrc: "/images/Ellipse.png",
        heading: "Earn Epic Rewards",
    },
    {
        imgSrc: "/images/Ellipse.png",
        heading: "Team Up, and Play",
    }
];


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
        answer: "Yep! Kurixel's smart progression system tailors the gameplay to your child's level. As players build skills, the game evolves offering new challenges to keep things exciting and just the right amount of tricky."
    },
];

export default function Games() {
    return (
        <GameLayout faq={true} joinus={true} faqs={faqs}>
            <Banner />
            <GameFeature />
            <GamePreview />
            <ParentAccount
                heading="Teachers, reclaim your time. Let Kurixel turn lessons into interactive adventures your students will actually love."
                cards={cards}
                bgColor="bg-white"
            />
            <ParentAccount
                heading="Parents, end the homework drama. Say goodbye to nagging and hello to a world where your child wants to learn."
                cards={cards}
            />
            <Dashboard />
            <ProdigyWorld />
            <ResourceBlog
                heading="Resources"
                bgImgSrc="/images/resource_blog2.png"
                resourceCards={resourceCards}
            />
        </GameLayout>
    )
}
