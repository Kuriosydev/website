import JoinUs from "../home/sections/JoinUs";


const whyJoin = [
    { text: "Be the first to try new levels." },
    { text: "Unlock members-only outfits and power-ups." },
    { text: "Get behind-the-scenes insights." },
    { text: "Participate in exclusive contests and challenges" },
];

export default function ContactUsContent() {
    return (
        <section className={`w-full h-auto bg-[#FFCE49] relative z-0 overflow-hidden -mt-40`}>
            <div className="w-full min-h-auto relative overflow-hidden pt-36 md:pt-44 pb-14 md:pb-20">
                <JoinUs
                    heading={"JOIN THE KURIXEL EXPLORERS CLUB"}
                    headingColor={"text-black"}
                    headingStyle={"md:mt-10"}
                    subHeading={"Get insider perks, secret rewards, and early access to new games."}
                    subHeadingStyle={"items-start justify-start mt-4 md:mt-8"}
                    list={whyJoin}
                />
            </div>
        </section>
    )
}
