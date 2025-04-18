import Image from "next/image";
import Link from "next/link";

export default function ImageButtons({
    source,
    text,
    alt,
    onClick,
    icon,
    className = "px-6 py-2 md:px-8 md:py-5",
    textSize,
    textColor,
    isLink = false,
    link = "",
    isSubmit = false
}) {
    const content = (
        <>
            {icon && (
                <span
                    className={`mr-2 text-${textColor || 'white'} text-${textSize || 'base'} font-montserrat`}
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                    <i className={`${icon} text-sm md:text-xl`}></i>
                </span>
            )}
            <span className={`text-${textColor || 'white'} text-${textSize || 'base'} font-montserrat break-words whitespace-normal max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px]`} style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                {text}
            </span>

            {/* <span
                className={`text-${textColor || 'white'} text-${textSize || 'base'} font-montserrat whitespace-nowrap`}
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
                {text}
            </span> */}
        </>
    );

    const baseClasses = `relative inline-flex items-center justify-center border-none rounded-md overflow-hidden ${className} cursor-pointer`;

    const isValidLink = isLink && typeof link === "string";

    const Wrapper = isValidLink ? Link : 'button';
    const wrapperProps = isValidLink
        ? {
            href: link,
            role: "button",
            "aria-label": alt || text,
        }
        : {
            onClick,
            type: isSubmit ? "submit" : "button",
            "aria-label": alt || text,
        };

    return (
        <Wrapper {...wrapperProps} className={baseClasses}>
            <div className="absolute inset-0 z-0">
                <Image
                    src={source}
                    alt={alt || text}
                    fill
                    className="object-contain w-full h-full"
                    priority
                />
            </div>
            <div className="relative z-10 px-4 py-2 rounded-md items-center">
                {content}
            </div>
        </Wrapper>
    );

}
