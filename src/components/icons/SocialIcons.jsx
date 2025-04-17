export default function SocialIcons({ socialName, socialLink, socialIcon, color, borderColor, height, width, fontSize }) {
    const socialIcons = {
        facebook: "fa-brands fa-facebook-f",
        twitter: "fa-brands fa-x-twitter",
        instagram: "fa-brands fa-instagram",
        youtube: "fa-brands fa-youtube",
        pinterest: "fa-brands fa-pinterest",
    };

    const iconClass = socialIcons[socialName] || socialIcon;

    const iconPadding = socialName === 'facebook' ? 'px-3 py-2' : 'p-2';

    return (
        <a href={socialLink} className={`text-${fontSize} text-${color} dark:text-white`} target="_blank" rel="noopener noreferrer">
            <div className={`h-${height} w-${width} rounded-full border border-${borderColor} dark:border-white flex items-center justify-center`}>
                <i className={`${iconClass} ${iconPadding}`}></i>
            </div>
        </a>
    );
}
