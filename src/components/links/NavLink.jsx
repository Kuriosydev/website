'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, text, onClick, isMobile, isFooter, className, textColor = "text-white", borderColor = "border-white " }) {
    const pathname = usePathname();

    const isActive = pathname === href;

    const baseClass = isFooter
        ? `${textColor} font-medium hover:text-gray-700`
        : isMobile
            ? `block mb-5 text-lg ${textColor} no-underline`
            : `no-underline md:text-lg font-medium tracking-[1px] ${textColor} cursor-pointer`;

    const activeClass = isActive && !isMobile && !isFooter
        ? `border-b-[0.2rem] ${borderColor} pb-[2px]`
        : "";

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`${className || ""} ${baseClass} ${activeClass}`}
        >
            {text}
        </Link>
    );
}
