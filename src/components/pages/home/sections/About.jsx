import StoreButton from "@/components/buttons/StoreButton";
import Feature from "@/components/texts/Feature";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";

const features = [
    {
        imgSource: "/images/kid_friendly.svg",
        heading: "Safe & Kid Friendly",
        text: "No weird stuff. Just fun and learning.",
    },
    {
        imgSource: "/images/smart_play.svg",
        heading: "Smart Play",
        text: "Math, science, and art are hidden in every quest.",
    },
    {
        imgSource: "/images/always_fresh.svg",
        heading: "Always Fresh",
        text: "New levels, characters, and challenges added all the time.",
    },
];

export default function About() {
    return (
        <section className="w-auto h-auto my-2 z-50">
            <div className="flex flex-col items-center justify-center w-auto h-auto">
                <Heading
                    text="Play Anywhere, Learn Everywhere!"
                    fontFamily="font-luckiest"
                    fontSize="text-5xl md:text-7xl"
                    fontWeight="font-bold"
                    textAlign="text-center"
                    letterSpacing="md:tracking-wider"
                    textColor="text-[#8F0E00]"
                    customStyle="mt-10 px-4 md:px-64"
                />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full mt-10 px-10 sm:px-6 md:px-16 gap-8">
                {/* Left Column */}
                <div className="flex flex-col items-start justify-start w-full md:w-1/2 h-full">
                    <div className="font-bold text-base md:text-2xl md:leading-14">Take Kurixel with you anywhere.</div>
                    <div className="w-full mt-1">
                        {features?.map((feature, index) =>
                            <Feature
                                key={index}
                                imgSource={feature?.imgSource}
                                imgAlt={feature?.heading}
                                heading={feature?.heading}
                                headingColor={"text-white"}
                                headingSize={"text-base md:text-2xl"}
                                headingWeight={"font-bold"}
                                headingSpacing={"tracking-wide"}
                                headingStyle={"md:leading-14"}
                                text={feature?.text}
                                textColor={"text-white"}
                                textSize={"text-xs md:text-base"}
                                textWeight={"font-normal"}
                                textSpacing={"md:tracking-wide"}
                                textStyle={"md:leading-7"}
                                bgColor={"bg-[#8F0E00]"}
                                border={"border-2 border-[#8F0E00]"}
                                borderRounded={"rounded-2xl md:rounded-3xl"}
                                otherClasses={"my-3 md:my-4"}
                            />
                        )}
                    </div>
                    <div className="font-bold text-base md:text-2xl md:leading-14 mt-4 md:mt-6">Download Now</div>
                    <StoreButton />
                </div>
                <div className="w-full md:w-1/2 max-w-3xl">
                    <div className="relative w-full pt-[66.25%]">
                        <img
                            src="/images/2149554978 1.png"
                            alt="Tablet on Stone"
                            className="absolute top-0 left-0 w-full h-full object-contain"
                        />

                        <div className="absolute top-[2%] left-[18%] w-[60%] h-[70%] rotate-[0.7deg] rounded-xl overflow-hidden z-50">
                            <VideoPreview
                                src="/videos/preview.mp4"
                                controls={false}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                wrapperClass="w-full h-full "
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
