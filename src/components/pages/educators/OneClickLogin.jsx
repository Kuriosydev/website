import Heading from "@/components/texts/Heading";

export default function OneClickLogin() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-8 md:py-16 gap-8">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        text="Seamless Login"
                        fontFamily="font-luckiest"
                        fontSize="text-5xl md:text-7xl"
                        fontWeight="font-normal"
                        textAlign="text-center"
                        letterSpacing=""
                        textColor="text-[#8F0E00]"
                        customStyle="px-8 md:px-36"
                    />
                    <div className="text-center font-medium text-lg py-8 md:px-72 px-12">
                        Jump straight into the adventure with easy sign-in through Google Classroom or Clever. Just one click and you're ready to play, learn, and grow. Teachers and parents get instant visibility into student progress, making it easier than ever to guide every learning journey.
                    </div>

                    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center px-12 md:px-24 md:py-16 gap-8 mx-auto">
                        <div className="w-80 h-36 rounded-3xl items-center justify-center overflow-hidden bg-gray-50 border-2 border-gray-200">
                            <img src="/images/clever.png" alt="Login Links" className="w-full h-full object-fill px-16 py-12" />
                        </div>
                        <div className="w-80 h-36 rounded-3xl items-center justify-center overflow-hidden bg-gray-50 border-2 border-gray-200">
                            <img src="/images/google.png" alt="Login Links" className="w-full h-full object-fill px-16 py-7" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
