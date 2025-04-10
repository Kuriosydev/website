"use client";
import ImageButtons from "@/components/buttons/ImageButtons";
import MenuIcon from "@/components/icons/MenuIcon";
import NavLink from "@/components/links/NavLink";
import SiteLogo from "@/components/logo/SiteLogo";
import ThemeToggle from "@/components/toggle-buttons/ThemeToggle";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <>
      <header className="bg-black/25 sticky top-0 h-20 text-black flex items-center justify-between duration-300 ease-in-out z-[10000] flex-shrink-0 px-[38px] backdrop-blur-[10px]" id="header">
        <SiteLogo />
        <nav className="hidden md:flex items-center" id="navbar">
          <NavLink href="/games" text="Games" className='md:mr-12' />
          <NavLink href="/educators" text="Educators" className='md:mr-12' />
          <NavLink href="/for-parents" text="For Parents" className='md:mr-12' />
          <NavLink href="/news" text="News" className='md:mr-12' />
          <div className="flex items-center justify-center z-[6]">
            <ImageButtons
              text="Help And Support"
              source="/images/Group.png"
              alt="Help And Support Background"
              className='mr-12 px-6 py-2 md:px-8 md:py-5'
            />
          </div>
          <ThemeToggle />
        </nav>
        <div onClick={toggleSidebar} className="cursor-pointer md:hidden">
          <MenuIcon />
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  )
}
