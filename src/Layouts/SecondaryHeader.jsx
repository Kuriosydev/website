import ImageButtons from "@/components/buttons/ImageButtons";
import NavLink from "@/components/links/NavLink";

export default function SecondaryHeader({ pageName, menu, buttonImgSrc = "/images/Group.png", buttonText, buttonStyles = "mr-6" }) {
    return (
        <header className="z-50 md:flex hidden bg-black/25 sticky top-1 h-20 overflow-visible text-black items-center justify-center sm:justify-center lg:justify-between xl:justify-between px-4 md:px-8 lg:px-10 py-4 backdrop-blur-[10px]">
            {pageName && <h1 className="text-lg text-white font-semibold hidden sm:hidden md:hidden lg:block xl:block">{pageName}</h1>}
            <nav className="flex flex-wrap items-center">
                {menu?.map((menuItem, index) => (
                    <NavLink key={index} href={menuItem.href} text={menuItem.name} className={menuItem.styles} dropdown={menuItem.dropdown ? menuItem.childrens : []} isRelative={false} />
                ))}
                <div className="hidden items-center justify-center z-[6] md:flex">
                    <ImageButtons
                        text={buttonText}
                        source={buttonImgSrc}
                        alt={buttonText + " button"}
                        className={buttonStyles}
                    />
                </div>
            </nav>
        </header>
    );
}
