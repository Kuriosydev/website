import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

export default function ThemeToggle() {
    return (
        <div className="ml-[0.5vw] relative w-16 h-8 rounded-2xl cursor-pointer shadow-md transition-colors duration-500 border border-[#FDDA78] bg-[var(--light-toggle-background)] dark:bg-[var(--dark-toggle-background)]" id="toggle">
            <div className="absolute left-0.5 flex flex-row top-[3px] w-1/2 h-6 rounded-2xl bg-[var(--light-toggle-button)] transition-transform duration-500 ease-in-out toggle-move">
                <div className="absolute w-full h-full flex justify-center items-center">
                    <SunIcon primaryPathFill="#FFC400" svgFill="none" />
                    <MoonIcon primaryPathFill="#FFE282" secondaryPathFill="#FFC400" svgFill="none" opcatity="0"/>
                </div>
                <div className="absolute w-full h-full flex justify-center items-center ml-8">
                    <SunIcon primaryPathFill="#FFC400" svgFill="none" opcatity="0"/>
                    <MoonIcon primaryPathFill="#FFE282" secondaryPathFill="#FFC400" svgFill="none" />
                </div>
            </div>
        </div>
    )
}
