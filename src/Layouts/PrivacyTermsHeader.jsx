"use client";
import MenuIcon from "@/components/icons/MenuIcon";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function PrivacyTermsHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <>
            <header className="bg-[#F5C345] sticky top-0 h-20 text-black flex items-center justify-between duration-300 ease-in-out z-[10000] flex-shrink-0 px-[38px]" id="header">
                <Link href="/" >
                    <img
                        src="/images/770d8a6e475e6a6ca253170285c3fdc4.png"
                        alt="Site Logo"
                        className="mx-auto md:mx-0 lg:mx-0 w-[40%] sm:w-[40%] md:w-[40%] lg:w-[14%] xl:w-[14%] opacity-100 h-auto"
                    />
                </Link>

                <div onClick={toggleSidebar} className="cursor-pointer md:hidden">
                    <MenuIcon />
                </div>
            </header>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
    );
}
