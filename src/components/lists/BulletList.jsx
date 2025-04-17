import NavLink from "../links/NavLink";

export default function BulletList({
    lists,
    bullet,
    bulletColor,
    isFooter,
    isLink = true,
    className,
    textClasses = "text-sm sm:text-base md:text-lg",
    liClass,
    ulClass
}) {
    return (
        <ul className={`mt-4 space-y-2 ${bullet ? isFooter ? "list-none md:list-disc lg:list-disc xl:list-disc list-outside " : "list-disc list-outside" : "list-none"} ${bullet ? `marker:text-${bulletColor}` : ""} ${ulClass} dark:text-white dark:marker:text-white lg:ml-5`}>
            {
                lists && lists.map((list, index) => (
                    <li
                        key={index}
                        className={`text-${bulletColor} ${liClass} ${bullet ? `marker:text-${bulletColor}` : ""} dark:text-white dark:marker:text-white`}
                    >
                        {isLink ? (
                            <NavLink href={list.href} text={list.text} isFooter={isFooter} />
                        ) : (
                            <span className={`${textClasses} ${className}`}>{list.text}</span>
                        )}
                    </li>
                ))
            }
        </ul>
    );
}
