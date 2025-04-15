export default function EventCard({ imageSrc, link, title, description, className }) {
    return (
        <div
            className={`w-full max-w-[90%] sm:max-w-xs md:max-w-sm bg-white border border-gray-100 rounded-lg shadow-xl ${className} z-50 my-4 md:my-0`}
        >
            <a href={link}>
                <div className="w-full aspect-[16/9] overflow-hidden rounded-t-lg p-2">
                    <img
                        className="w-full h-full object-cover rounded-md"
                        src={imageSrc}
                        alt={title + " image"}
                    />
                </div>
            </a>
            <div className="p-4 sm:p-5">
                <a href={link}>
                    <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-medium text-base sm:text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
}
