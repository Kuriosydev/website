"use client"

import { useEffect, useState } from "react"

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500)
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        if (isVisible) {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // <- Smooth scrolling enabled
            })
        }
    }

    return (
        <button
            aria-label="Scroll to top"
            title="Back to top"
            className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-300 ease-in-out cursor-pointer ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            onClick={scrollToTop}
            style={{ zIndex: 99999 }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100">
                <defs>
                    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFCE49" />
                        <stop offset="100%" stopColor="#8F0E00" />
                    </radialGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <path
                    d="M15,40 Q10,50 15,60 Q30,90 50,90 Q70,90 85,60 Q90,50 85,40 Q70,10 50,10 Q30,10 15,40 Z"
                    fill="url(#bg)"
                    filter="url(#glow)"
                    stroke="#FFCE49"
                    strokeWidth="2"
                />
                <g
                    stroke="#ffffff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                >
                    <line x1="50" y1="65" x2="50" y2="35" />
                    <polyline points="40,45 50,35 60,45" />
                </g>
            </svg>
        </button>
    )
}

export default ScrollToTopButton
