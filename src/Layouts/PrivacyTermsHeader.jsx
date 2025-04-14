"use client";
import MenuIcon from "@/components/icons/MenuIcon";
import NavLink from "@/components/links/NavLink";
import SiteLogo from "@/components/logo/SiteLogo";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function PrivacyTermsHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <>
            <header className="bg-[#F5C345] sticky top-0 h-20 text-black flex items-center justify-between duration-300 ease-in-out z-[10000] flex-shrink-0 px-[38px] " id="header">
                <SiteLogo />
                <nav className="hidden md:flex items-center" id="navbar">
                    <NavLink href="/terms-of-use" text="Prodigy Home" className='md:mr-12' textColor="text-black" borderColor="border-black" />
                    <NavLink href="/educators" text="Play Prodigy" className='md:mr-12' textColor="text-black" borderColor="border-black" />
                </nav>
                <div onClick={toggleSidebar} className="cursor-pointer md:hidden">
                    <MenuIcon />
                </div>
            </header>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
    )
}
