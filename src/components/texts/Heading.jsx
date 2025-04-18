"use client";

import clsx from "clsx";


export default function Heading({
    text,
    fontFamily = "font-luckiest",
    fontSize = "text-7xl",
    fontWeight = "font-bold",
    textAlign = "text-center",
    letterSpacing = "tracking-wide",
    textColor = "text-[#8F0E00]",
    customStyle = "",
}) {
    return (
        <div
            className={clsx(
                fontFamily,
                fontSize,
                fontWeight,
                textAlign,
                letterSpacing,
                textColor,
                customStyle
            )}
        >
            {text}
        </div>
    );
}




