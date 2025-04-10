import NavLink from "../links/NavLink";

export default function BulletList({ lists, bullet, bulletColor, isFooter, isLink = true,className }) {
    return (
        <ul className={`mt-4 space-y-2 ${bullet ? "list-disc list-inside" : "list-none"} ${bulletColor ? `marker:text-${bulletColor}` : ""}`}>
            {
                lists && lists.map((list, index) => (
                    <li key={index}>
                        <span className={`${className}`}>
                            {isLink ? <NavLink href={list.href} text={list.text} isFooter={isFooter} /> : list.text}
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}
