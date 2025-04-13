import Link from "next/link";

export default function ResourceCard({
    bgColor,
    heading,
    text,
    href,
    linkText,
    customStyles,
}) {

    const textClasses = heading ? "font-normal text-xl" : "font-semibold text-sm md:font-normal md:text-lg";
    const linkClasses = heading ? "font-medium text-3xl" : "font-semibold text-sm md:font-normal md:text-lg";

    return (
        <div className={`${bgColor} ${customStyles} w-full sm:w-1/2 lg:w-1/3 h-auto min-h-[13rem] p-4 sm:p-6 md:p-8 rounded-xl shadow-md`}>
            {heading &&
                <div className="mb-4 text-black font-normal text-xl font-luckiest leading-snug">
                    {heading}
                </div>
            }
            {text &&
                <div className={`mb-6 text-black ${textClasses} leading-snug`}>
                    {text}
                </div>
            }
            {href &&
                <div className="text-left">
                    <Link href={href}>
                        <span className={`text-black underline ${linkClasses}`}>{linkText}</span>
                    </Link>
                </div>
            }
        </div>
    );
}
