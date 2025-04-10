'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, text, onClick, isMobile, isFooter, className }) {
    const pathname = usePathname();

    const isActive = pathname === href;

    const baseClass = isFooter
        ? "text-white font-medium hover:text-gray-700"
        : isMobile
            ? "block mb-5 text-lg text-white no-underline"
            : "no-underline md:text-lg font-medium tracking-[1px] text-white cursor-pointer";

    const activeClass = isActive && !isMobile && !isFooter
        ? "border-b-[0.2rem] border-white pb-[2px]"
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
