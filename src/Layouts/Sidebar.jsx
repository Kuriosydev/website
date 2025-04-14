import ImageButtons from "@/components/buttons/ImageButtons";
import NavLink from "@/components/links/NavLink";
import ThemeToggle from "@/components/toggle-buttons/ThemeToggle";
import { useEffect, useRef } from "react";
import ButtonImage from '../../public/images/Group.png';

const educatorSubMenu = [
    {
        href: "/educators/overview",
        name: "Overview",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Features",
        dropdown: true,
        childrens: []
    },
    {
        href: "#",
        name: "Curriculam",
        dropdown: true,
        childrens: []
    },
    {
        href: "/educators/research",
        name: "Research",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Resources",
        dropdown: true,
        childrens: []
    },
    {
        href: "/educators/administrators",
        name: "Administrators",
        dropdown: false,
        childrens: []
    },
    {
        href: "/support",
        name: "Support",
        dropdown: false,
        childrens: []
    },
];

const gameSubMenu = [
    {
        href: "#",
        name: "Maths",
        styles: "mr-5 md:mr-12",
        dropdown: true
    },
    {
        href: "/games/english",
        name: "Maths",
        styles: "mr-5 md:mr-12",
        dropdown: false
    },
    {
        href: "#",
        name: "Memberships",
        styles: "mr-5 md:mr-12",
        dropdown: true
    },
    {
        href: "/support",
        name: "Support",
        styles: "mr-5 md:mr-12",
        dropdown: false
    },
];

const parentSubMenu = [
    {
        href: "/for-parents/overview",
        name: "Overview",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Membership",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/for-parents/research",
        name: "Research",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/support",
        name: "Support",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
];

export default function Sidebar({ isOpen, onClose }) {
    const sidebarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 w-[250px] h-full bg-[var(--navbar-bg)] shadow-lg z-[10000] p-5 box-border transition-all duration-500 md:hidden ${isOpen ? "right-0 opacity-100" : "right-[-250px] opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex items-center justify-center z-[6] mb-4">
                <ImageButtons
                    text="JOIN US"
                    source={ButtonImage}
                    alt="Join Us Background"
                    className="px-6 py-2 md:px-8 md:py-5"
                />
            </div>
            <NavLink href="/games" text="Games" isMobile={true} dropdown={gameSubMenu} />
            <NavLink href="/educators" text="Educators" isMobile={true} dropdown={educatorSubMenu} />
            <NavLink href="/for-parents" text="For Parents" isMobile={true} dropdown={parentSubMenu} />
            <NavLink href="/news" text="News" isMobile={true} />
            <ThemeToggle />
        </div>
    );
}
