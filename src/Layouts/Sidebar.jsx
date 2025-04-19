import ImageButtons from "@/components/buttons/ImageButtons";
import NavLink from "@/components/links/NavLink";
import ThemeToggle from "@/components/toggle-buttons/ThemeToggle";
import { useEffect, useRef } from "react";
import ButtonImage from '../../public/images/Group.png';

const educatorSubMenu = [
    {
        href: "/educators",
        name: "Overview",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "#",
        name: "Curriculum",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: [
            {
                href: "/educators/curriculum/maths",
                name: "Math",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
            {
                href: "/educators/curriculum/english",
                name: "English Language Arts",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
        ]
    },
    {
        href: "#",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: [
            {
                href: "/educators/resources/dashboard",
                name: "Dashboard",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
            {
                href: "/educators/resources/assesment",
                name: "Assessments",
                styles: "mr-5 md:mr-8",
                dropdown: false,
                childrens: []
            },
        ]
    },
    {
        href: "/contact-us",
        name: "Support",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
];

const gameSubMenu = [
    {
        href: "#",
        name: "Subjects",
        styles: "mr-5 md:mr-12",
        dropdown: true,
        childrens: [
            {
                href: "/games",
                name: "Math",
                styles: "mr-5 md:mr-12",
                dropdown: false,
                childrens: []
            },
            {
                href: "/games/subjects/english",
                name: "English Language Arts",
                styles: "mr-5 md:mr-12",
                dropdown: false,
                childrens: []
            },
        ]
    },
    {
        href: "/games/membership",
        name: "Memberships",
        styles: "mr-5 md:mr-12",
        dropdown: true,
        childrens: []
    },
    {
        href: "/contact-us",
        name: "Support",
        styles: "mr-5 md:mr-12",
        dropdown: false,
        childrens: []
    },
];

const parentSubMenu = [
    {
        href: "/parents",
        name: "Overview",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "/parents/membership",
        name: "Membership",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/parents/research",
        name: "Research",
        styles: "mr-5 md:mr-8",
        dropdown: false,
        childrens: []
    },
    {
        href: "/parents/resources",
        name: "Resources",
        styles: "mr-5 md:mr-8",
        dropdown: true,
        childrens: []
    },
    {
        href: "/contact-us",
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
            className={`overflow-y-scroll fixed top-0 right-0 w-[250px] h-full bg-[#18272A] shadow-lg z-[10000] p-5 box-border transition-all duration-500 md:hidden ${isOpen ? "right-0 opacity-100" : "right-[-250px] opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex items-center justify-center z-[6] mb-4">
                <ImageButtons
                    text="Log In"
                    source={ButtonImage}
                    alt="Join Us Background"
                    className="px-6 py-2 md:px-8 md:py-5"
                />
            </div>
            <NavLink href="/games" text="Games" isMobile={true} dropdown={gameSubMenu} />
            <NavLink href="/educators" text="Educators" isMobile={true} dropdown={educatorSubMenu} />
            <NavLink href="/parents" text="Parents" isMobile={true} dropdown={parentSubMenu} />
            <NavLink href="/news" text="News" isMobile={true} />
            <ThemeToggle />
        </div>
    );
}
