import JoinUsForm from "@/components/forms/JoinUsForm";
import SocialIcons from "@/components/icons/SocialIcons";
import BulletList from "@/components/lists/BulletList";
import Heading from "@/components/texts/Heading";

export default function JoinUs({
    sectionBackGroundColor = "bg-[#FFCE49]",
    sectionStyle,
    heading,
    headingColor = "text-[#8F0E00]",
    headingSize = "text-4xl md:text-6xl",
    headingWeight = "font-bold",
    headingSpacing = "tracking-wider",
    headingStyle,
    subHeading,
    subHeadingColor = "text-black",
    subHeadingSize = "text-base md:text-2xl",
    subHeadingWeight = "font-medium",
    subHeadingSpacing = "tracking-wide",
    subHeadingStyle,
    list = [],
    listBullet = true,
    listBulletColor = "black",
    listStyles = "font-bold text-base md:text-2xl mt-3 md:mt-6"
}) {
    return (
        <section className={`w-full h-auto ${sectionBackGroundColor} ${sectionStyle}`}>
            {/* Heading */}
            <div className="flex flex-col md:flex-row w-full h-full px-6 sm:px-8 md:px-12 pb-12">
                <div className="flex flex-col mt-8 md:mt-6 w-full md:w-1/2">
                    <Heading
                        text={heading}
                        fontFamily="font-luckiest"
                        fontSize={headingSize}
                        fontWeight={headingWeight}
                        textAlign="text-left"
                        letterSpacing={headingSpacing}
                        textColor={headingColor}
                        customStyle={headingStyle}
                    />

                    <div className={`${subHeadingStyle} ${subHeadingColor} ${subHeadingSize} ${subHeadingWeight} ${subHeadingSpacing}`}>
                        {subHeading}
                    </div>

                    {list && (
                        <>
                            <div className="font-bold text-xl md:text-2xl mt-4 md:mt-8">Why Join?</div>
                            <div>
                                <BulletList lists={list} bullet={listBullet} bulletColor={listBulletColor} isFooter={false} isLink={false} className={listStyles} />
                            </div>
                        </>
                    )}
                </div>

                {/* Right section with JoinUsForm and SocialIcons */}
                <div className="flex flex-col mt-8 md:mt-16 w-full md:w-1/2">
                    <JoinUsForm />
                    <div className="w-full flex flex-col mt-6 md:mt-8 lg:ml-24">
                        <div className="flex gap-4 sm:gap-[1vw] mt-4 sm:mt-[2vh]">
                            <SocialIcons socialName="instagram" socialLink="#" color="black" borderColor="black" height="10" width="10" fontSize="lg" />
                            <SocialIcons socialName="facebook" socialLink="#" color="black" borderColor="black" height="10" width="10" fontSize="lg" />
                            <SocialIcons socialName="twitter" socialLink="#" color="black" borderColor="black" height="10" width="10" fontSize="lg" />
                            <SocialIcons socialName="youtube" socialLink="#" color="black" borderColor="black" height="10" width="10" fontSize="lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
