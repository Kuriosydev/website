import NavLink from "../links/NavLink";

export default function BulletList({
    lists,
    bullet,
    bulletColor,
    isFooter,
    isLink = true,
    className
}) {
    return (
        <ul className={`mt-4 space-y-2 ${bullet ? "list-disc list-outside" : "list-none"} ${bullet ? `marker:text-${bulletColor}` : ""}`}>
            {
                lists && lists.map((list, index) => (
                    <li
                        key={index}
                        className={`text-${bulletColor} ${bullet ? `marker:text-${bulletColor}` : ""}`}
                    >
                        {isLink ? (
                            <NavLink href={list.href} text={list.text} isFooter={isFooter} />
                        ) : (
                            <span className={`text-sm sm:text-base md:text-lg ${className}`}>{list.text}</span>
                        )}
                    </li>
                ))
            }
        </ul>
    );
}
