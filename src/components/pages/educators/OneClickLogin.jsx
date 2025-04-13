import Heading from "@/components/texts/Heading";

export default function OneClickLogin() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-8 md:py-16 gap-8">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        text="One-click login for you and your students"
                        fontFamily="font-luckiest"
                        fontSize="text-5xl md:text-7xl"
                        fontWeight="font-normal"
                        textAlign="text-center"
                        letterSpacing=""
                        textColor="text-[#8F0E00]"
                        customStyle="px-8 md:px-36"
                    />
                    <div className="text-center font-medium text-lg py-8 md:px-72 px-12">
                        Simplify login for the whole classroom with Clever, ClassLink and Google Classroom while gaining insights into student activity and performance.
                    </div>

                    <div className="px-12 md:px-24 md:py-16">
                        <img src="/images/loginLinks.png" alt="Login Links" className="w-full h-full" />

                    </div>
                </div>
            </div>
        </section>
    )
}
