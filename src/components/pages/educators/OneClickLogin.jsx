import Heading from "@/components/texts/Heading";

export default function OneClickLogin() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex flex-col items-center justify-center">
                    <Heading
                        text="Seamless Login"
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                        customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
                    />
                    <div className="flex flex-row flex-wrap items-center justify-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-8 sm:px-10 md:px-20 lg:px-40 xl:px-12 text-justify sm:text-justify md:text-justify lg:text-center xl:text-center dark:text-white">
                        Jump straight into the adventure with easy sign-in through Google Classroom or Clever. Just one click and you're ready to play, learn, and grow. Teachers and parents get instant visibility into student progress, making it easier than ever to guide every learning journey.
                    </div>

                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-12 md:px-24 py-8 sm:py-8 md:py-16 lg:py-16 gap-8 mx-auto">
                        <div className="w-52 md:w-80 lg:w-80 xl:w-80 h-24 md:h-36 lg:h-36 xl:h-36 rounded-2xl md:rounded-3xl items-center justify-center overflow-hidden bg-gray-50 border-2 border-gray-200">
                            <img src="/images/clever.png" alt="Login Links" className="w-full h-full object-fill px-10 sm:px-10 md:px-16 lg:px-16 xl:px-16 py-6 sm:py-6 md:py-12 lg:py-12 xl:py-12" />
                        </div>
                        <div className="w-52 md:w-80 lg:w-80 xl:w-80 h-24 md:h-36 lg:h-36 xl:h-36 rounded-2xl md:rounded-3xl items-center justify-center overflow-hidden bg-gray-50 border-2 border-gray-200">
                            <img src="/images/google.png" alt="Login Links" className="w-full h-full object-fill px-10 sm:px-10 md:px-16 lg:px-16 xl:px-16 py-3 sm:py-3 md:py-6 lg:py-6 xl:py-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
