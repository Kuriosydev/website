import Heading from "@/components/texts/Heading";

const data = [
    {
        heading: "2x",
        description: "Students reported an average of twice the level of math enjoyment in just a few months."
    },
    {
        heading: "68%",
        description: "In one school district, students mastered an average of 68% more math skills per month."
    },
    {
        heading: "96%",
        description: "96%** of parents and teachers were satisfied with the educational impact of Prodigy Math."
    }
];

export default function Statictics() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
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
                                textColor="text-[#8F0E00]"
                                customStyle=""
                            />
                            <div className="text-left font-medium text-lg">
                                {item.description}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center px-10 md:px-0 md:mt-10">
                    <div className="text-left font-medium text-lg">
                        **Based on a survey of parents and a survey of teachers commissioned by Kurixel Education.
                    </div>
                </div>
            </div>
        </section>
    )
}
