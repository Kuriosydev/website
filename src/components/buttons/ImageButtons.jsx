'use client';

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
    const baseClasses = `relative inline-flex items-center justify-center border-none rounded-md overflow-hidden ${className} cursor-pointer`;

    const isValidLink = isLink && typeof link === "string";

    const Wrapper = isValidLink ? Link : 'button';
    const wrapperProps = isValidLink
        ? {
            href: link,
            role: "button",
        }
        : {
            type: isSubmit ? "submit" : "button",
        };

    return (
        <Wrapper {...wrapperProps} className={baseClasses}>
            <div className="flex flex-col items-center space-y-4">
                <div
                    onClick={onClick}
                    className="button-overlay"
                    aria-label={alt || text}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            onClick?.();
                        }
                    }}
                >
                    {icon && (
                        <span
                            className={`mr-2 text-${textColor || 'white'} text-${textSize || 'base'} font-montserrat`}
                            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                        >
                            <i className={`${icon} text-sm md:text-xl`}></i>
                        </span>
                    )}
                    <span className={`text-${textColor || 'white'} text-${textSize || 'base'} font-montserrat break-words whitespace-normal`} style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                        {text}
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}