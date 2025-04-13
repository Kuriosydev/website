import ImageButtons from "@/components/buttons/ImageButtons";
import Heading from "@/components/texts/Heading";
import VideoPreview from "@/components/videos/VideoPreview";

export default function Dashboard() {
    return (
        <section className="w-full h-auto bg-[#FFCE49]">
            <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-16">
                <div className="py-10">
                    <Heading
                        text="One dashboard. Two subjects."
                        fontFamily="font-luckiest"
                        fontSize="text-4xl md:text-6xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-center"
                        letterSpacing="md:tracking-wider"
                        textColor="text-[#8F0E00]"
                        customStyle="px-4"
                    />
                </div>

                <div className="text-lg font-medium text-center max-w-4xl mb-10">
                    Get access to all of Kurixel's tools and insights for Kurixel Math and Kurixel English when you sign up for one account.
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 py-10">
                    <div className="flex flex-col items-start justify-between w-full md:w-1/2 gap-6 md:pr-24">
                        <Heading
                            text="Kurixel English"
                            fontFamily="font-luckiest"
                            fontSize="text-2xl md:text-4xl"
                            fontWeight="font-normal"
                            textAlign="text-left"
                            letterSpacing="md:tracking-wider"
                            textColor="text-[#8F0E00]"
                        />
                        <p className="text-lg font-medium text-left">
                            Inspire kids to create their own unique world with this brand-new life simulation game. Aligned to Common Core reading and language standards for 1st to 6th grade, every question answered gives players more energy to gather resources, complete goals and stay creative.
                        </p>
                        <ImageButtons
                            text="Create A Free Account"
                            source="/images/Group.png"
                            alt="Create A Free Account"
                            className="my-2 px-6 py-3 md:px-8 md:py-5"
                            textSize="text-base"
                        />
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
            </div>
        </section>
    );
}