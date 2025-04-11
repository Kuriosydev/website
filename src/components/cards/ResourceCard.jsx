import Link from "next/link";

export default function ResourceCard({
    bgColor,
    text,
    href,
    linkText,
    customStyles,
}) {
    return (
        <div className={`${bgColor} ${customStyles} w-1/2 h-52 p-8 rounded-xl shadow-md`}>
            <div className="mb-6 text-black font-semibold text-sm leading-snug">
                {text}
            </div>
            <div className="text-left">
                <Link href={href}>
                    <span className="text-black font-semibold underline text-sm">{linkText}</span>
                </Link>
            </div>
        </div>
    );
}
