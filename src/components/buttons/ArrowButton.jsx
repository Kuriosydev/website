export default function ArrowButton({ onClick, className, direction }) {
    return (
        <div
            onClick={onClick}
            className={`relative border-none bg-cover bg-center p-0 cursor-pointer ${className}`}
            role="button"
            tabIndex={0}
        >
            <div className="w-full h-full bg-cover bg-center z-10">
                {direction === "left" && (
                    <img src="/images/Group_166.png" alt="Left Arrow" className="w-full h-full" />
                )}
                {direction === "right" && (
                    <img src="/images/Group_37.png" alt="Right Arrow" className="w-full h-full" />
                )}
            </div>
        </div>
    );
}
