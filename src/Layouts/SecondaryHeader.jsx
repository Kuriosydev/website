import ImageButtons from "@/components/buttons/ImageButtons";
import NavLink from "@/components/links/NavLink";

export default function SecondaryHeader({ pageName, menu, buttonImgSrc = "/images/Group.png", buttonText, buttonStyles = "mr-6" }) {
    return (
        <header className="md:flex hidden bg-black/25 sticky top-1 h-20 overflow-hidden text-black items-center justify-between px-4 md:px-[38px] py-4 z-10 backdrop-blur-[10px]">
            {pageName && <h1 className="text-lg text-white font-semibold hidden md:block">{pageName}</h1>}
            <nav className="flex items-center">
                {menu?.map((menuItem, index) => (
                    <NavLink key={index} href={menuItem.href} text={menuItem.name} className={menuItem.styles} />
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
