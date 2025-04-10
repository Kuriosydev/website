export default function ImageButtons({ source, text, alt, onClick, icon, className = "px-6 py-2 md:px-8 md:py-5", textSize, textColor }) {
    return (
        <button
            onClick={onClick}
            className={`relative inline-flex items-center justify-center border-none bg-center bg-cover bg-no-repeat rounded-md ${className}`}
            style={{
                backgroundImage: `url(${source})`,
            }}
        >
            {icon && (
                <span
                    className={`mr-2 text-${textColor || 'white'} text-${textSize || 'base'} font-montserrat`}
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                    <i className={`${icon} text-sm md:text-xl`}></i>
                </span>
            )}
            <span
                className={`text-${textColor || 'white'} text-${textSize || 'base'} font-montserrat whitespace-nowrap`}
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
                {text}
            </span>
        </button>
    );
}
