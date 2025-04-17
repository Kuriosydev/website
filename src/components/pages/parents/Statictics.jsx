import Heading from "@/components/texts/Heading";

const data = [
    {
        heading: "3x",
        description: "Students were three times more likely to stay engaged in lessons when using Kurixel’s game-based learning."
    },
    {
        heading: "91%",
        description: "91%** of parents said their child looked forward to learning with Kurixel each week."
    },
];

export default function Statictics() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-black`}>
            <div className="w-full h-full relative overflow-hidden py-14">
                <div className="flex flex-row flex-wrap items-center justify-center ">
                    {data?.map((item, index) =>
                        <div key={index} className="relative flex flex-col items-center mx-6 my-2 w-full h-full  px-4 py-8 md:w-3/12 text-xl ">
                            <Heading
                                text={item.heading}
                                fontFamily="font-luckiest"
                                fontSize="text-6xl md:text-8xl"
                                fontWeight="font-normal"
                                textAlign="text-center"
                                letterSpacing="md:tracking-wider"
                                textColor="text-[#8F0E00] dark:text-[#FFCE49]"
                                customStyle=""
                            />
                            <div className="text-left font-medium text-lg  dark:text-white">
                                {item.description}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 md:px-0 md:mt-10  dark:text-white">
                    <div className="text-left font-medium text-lg">
                        **Based on a user experience survey conducted by Kurixel Education.
                    </div>
                </div>
            </div>
        </section>
    )
}
