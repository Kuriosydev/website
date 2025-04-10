import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
    return (
        <Link href="/" >
            <Image
                src="/images/770d8a6e475e6a6ca253170285c3fdc4.png"
                alt="Kurixel Logo"
                width={200} // Adjust width as needed
                height={80} // Adjust height as needed
                className="w-auto md:h-[4rem] flex-shrink-0 opacity-100 h-[5vh]"
                priority // Ensures it's loaded quickly
            />
        </Link>
    )
}
