'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavLink({ href, text, onClick, isMobile, isFooter, className, textColor = "text-white", borderColor = "border-white ", dropdown }) {
    const pathname = usePathname();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSubMenuDropdownOpen, setSubMenuDropdownOpen] = useState(false);

    // Check if the pathname is equal to the current href or starts with the href (for parent/child)
    const isActive = pathname === href || pathname.startsWith(href + '/');

    const baseClass = isFooter
        ? `${textColor} font-medium hover:text-gray-700`
        : isMobile
            ? `block mb-5 text-lg ${textColor} no-underline`
            : `no-underline md:text-lg font-medium tracking-[1px] ${textColor} cursor-pointer`;

    const activeClass = isActive && !isMobile && !isFooter
        ? `border-b-[0.2rem] ${borderColor} py-2`
        : "";

    const handleClick = (e) => {
        if (dropdown?.length > 0) {
            // Toggle the parent dropdown menu
            setDropdownOpen(prev => !prev);
        }
        if (onClick) onClick(e);
    };

    const handleSubMenuClick = (e) => {
        // Toggle the child submenu dropdown
        setSubMenuDropdownOpen(prev => !prev);
    };

    return dropdown?.length > 0 ? (
        <>
            <Link
                href={href}
                onClick={handleClick}
                className={`${className || ""} ${baseClass} ${activeClass}`}
            >
                <span>
                    {text}
                    <i className='fa fa-chevron-down text-base text-white px-4'></i>
                </span>
            </Link>

            {isDropdownOpen && (
                <div className='flex flex-col items-start justify-between text-white'>
                    <ul className='px-4'>
                        {dropdown.map((item, index) => {
                            // Check if the dropdown item or its sub-menu should be active
                            const isDropdownItemActive = pathname === item?.href || pathname.startsWith(item?.href + '/');

                            return (
                                <li className='py-1' key={index}>
                                    <Link
                                        href={item?.href}
                                        onClick={handleSubMenuClick}
                                        className={`${item?.styles || ""} ${isDropdownItemActive ? activeClass : ""}`}
                                    >
                                        {item?.dropdown ? (
                                            <>
                                                <span>
                                                    {item?.name}
                                                    <i className='fa fa-chevron-down text-xs text-white px-4'></i>
                                                </span>

                                                {isSubMenuDropdownOpen && (
                                                    <div className='flex flex-col items-start justify-between text-white'>
                                                        <ul className='px-4'>
                                                            {item?.childrens?.map((subitem, row) => {
                                                                // Check if the sub-item should be active
                                                                const isSubItemActive = pathname === subitem?.href || pathname.startsWith(subitem?.href + '/');
                                                                return (
                                                                    <li className='py-1' key={row}>
                                                                        <Link
                                                                            href={subitem?.href}
                                                                            onClick={subitem?.onClick}
                                                                            className={`${subitem?.styles || ""} ${isSubItemActive ? activeClass : ""}`}
                                                                        >
                                                                            {subitem?.name}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <>{item?.name}</>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
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
