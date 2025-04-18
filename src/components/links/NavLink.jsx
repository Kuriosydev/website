'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavLink({
    href,
    text,
    onClick,
    isMobile,
    isFooter,
    className,
    textColor = "text-white",
    borderColor = "border-white ",
    dropdown,
    isRelative = true
}) {
    const pathname = usePathname();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [subMenuOpenIndex, setSubMenuOpenIndex] = useState(null); // per-submenu

    const isActive = pathname === href || pathname.startsWith(href + '/');

    const baseClass = isFooter
        ? `${textColor} font-medium hover:text-gray-700`
        : isMobile
            ? `block mb-5 text-base sm:text-xs md:text-base lg:text-lg xl:text-xl ${textColor} no-underline`
            : `no-underline text-base sm:text-xs md:text-base lg:text-lg xl:text-xl font-medium tracking-[1px] ${textColor} cursor-pointer`;

    const activeClass = isActive && !isMobile && !isFooter
        ? `border-b-[0.2rem] ${borderColor} py-2`
        : "";

    useEffect(() => {
        const handler = () => {
            setDropdownOpen(false);
            setSubMenuOpenIndex(null);
        };

        window.addEventListener('navlink:dropdown:close', handler);

        return () => {
            window.removeEventListener('navlink:dropdown:close', handler);
        };
    }, []);


    const handleClick = (e) => {
        if (dropdown?.length > 0) {
            e.preventDefault();

            if (isDropdownOpen) {
                // Just close if already open
                setDropdownOpen(false);
                setSubMenuOpenIndex(null);
            } else {
                // Emit event to close other dropdowns and open this one
                window.dispatchEvent(new Event('navlink:dropdown:close'));
                setDropdownOpen(true);
            }

            return; // Don't run onClick for parent menu in dropdown mode
        }

        if (onClick) onClick(e);
    };



    const toggleSubMenu = (e, index) => {
        e.preventDefault();
        setSubMenuOpenIndex(prev => (prev === index ? null : index));
    };

    return dropdown?.length > 0 ? (
        <div className={`${isRelative ? "items-start justify-between" : "relative group"} text-white`}>
            <Link
                href={href}
                onClick={handleClick}
                className={`${className || ""} ${baseClass} ${activeClass} flex items-center`}
            >
                <span>
                    {text}
                    <i className='fa fa-chevron-down text-white px-1 sm:px-1 md:px-2 lg:px-3 xl:px-4'></i>
                </span>
            </Link>

            {isDropdownOpen && (
                <ul className={`${isRelative ? "px-4" : "absolute top-full left-0 mt-2 bg-[#FFCE49] backdrop-blur-[10px] text-white rounded-md shadow-lg z-50 w-64 py-2 dark:bg-black dark:text-white"}`}>
                    {dropdown.map((item, index) => {
                        const isDropdownItemActive = pathname === item?.href || pathname.startsWith(item?.href + '/');
                        const hasSubMenu = item.dropdown && item.childrens.length > 0;
                        const isSubOpen = subMenuOpenIndex === index;

                        return (
                            <li className={`${isRelative ? 'py-1' : 'group relative hover:bg-[#8F0E00]/60'}`} key={index}>
                                <Link
                                    href={item?.href}
                                    onClick={hasSubMenu ? (e) => toggleSubMenu(e, index) : onClick}
                                    className={`${item?.styles || ""} ${isDropdownItemActive ? activeClass : ""} ${isRelative ? "" : "block px-4 py-2 text-lg font-medium text-white "}`}
                                >
                                    {item.name}
                                    {hasSubMenu && (
                                        <i className='fa fa-chevron-down text-base text-white pl-2'></i>
                                    )}
                                </Link>

                                {/* Submenu */}
                                {hasSubMenu && isSubOpen && (
                                    <ul className={`${isRelative ? "px-4" : "absolute top-full left-0 mt-2 hover:bg-[#8F0E00]/60 bg-[#FFCE49] rounded-md shadow-lg z-50 w-48 py-2"}`}>
                                        {item.childrens.map((subitem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    href={subitem.href}
                                                    onClick={subitem?.onClick}
                                                    className={`${isRelative ? "py-1" : "block px-4 py-2 text-lg font-medium text-[#8F0E00] "} ${subitem.styles || ""}`}
                                                >
                                                    {subitem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    ) : (
        <Link
            href={href}
            onClick={onClick}
            className={`${className || ""} ${baseClass} ${activeClass}`}
        >
            {text}
        </Link>
    );
}
