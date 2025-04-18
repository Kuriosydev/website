export default function ArrowButton({ onClick, className, direction }) {
    return (
        <div
            onClick={onClick}
            className={`relative border-none bg-cover bg-center p-0 cursor-pointer ${className}`}
            role="button"
            tabIndex={0}
        >
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-20 xl:h-20 bg-cover bg-center z-10">
                {direction === "left" && (
                    <img
                        src="/images/Group_166.png"
                        alt="Left Arrow"
                        className="w-full h-full object-contain"
                    />
                )}
                {direction === "right" && (
                    <img
                        src="/images/Group_37.png"
                        alt="Right Arrow"
                        className="w-full h-full object-contain"
                    />
                )}
            </div>
        </div>
    );
}
