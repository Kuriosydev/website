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
      <header className="bg-black/25 sticky top-0 h-20 text-black flex items-center justify-between duration-300 ease-in-out z-[10000] flex-shrink-0 px-4 md:px-8 lg:px-10 backdrop-blur-[10px]" id="header">
        <SiteLogo />
        <nav className="hidden md:flex items-center text-xl" id="navbar">
          <NavLink href="/games" text="Games" className='mr-2 sm:mr-4 md:mr-4 lg:mr-12 xl:mr-16' />
          <NavLink href="/educators" text="Educators" className='mr-2 sm:mr-4 md:mr-4 lg:mr-12 xl:mr-16' />
          <NavLink href="/parents" text="Parents" className='mr-2 sm:mr-4 md:mr-4 lg:mr-12 xl:mr-16' />
          <NavLink href="/news" text="News" className='mr-2 sm:mr-4 md:mr-4 lg:mr-12 xl:mr-10' />
          <div className="flex items-center justify-center z-[6]">
            <ImageButtons
              text="Login"
              source="/images/Group.png"
              alt="Log In Background"
              isLink={true}
              link="/login"
              className='mr-4 px-3 sm:px-3 md:px-3 lg:px-3 xl:px-3 py-2 sm:py-2 md:py-4 lg:py-6 xl:py-8 '
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
