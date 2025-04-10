
export default function EventCard({ imageSrc, link, title, description, className }) {
    return (


        <div className={`max-w-xs md:max-w-sm bg-white border border-gray-100 rounded-lg shadow-xl ${className} z-50 my-4 md:my-0`}>
            <a href={link}>
                <img className="rounded-t-lg p-2" src={imageSrc} alt={title + " image"} />
            </a>
            <div className="p-5">
                <a href={link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">{title}</h5>
                </a>
                <p className="mb-3 font-medium text-lg ">
                    {description}
                </p>
            </div>
        </div>

    )
}
