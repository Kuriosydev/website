'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Accordion({
    items,
    qFontWeight,
    qColor,
    qFontFamily,
    qFontSize,
    ansFontWeight,
    ansColor,
    ansFontFamily,
    ansFontSize
}) {
    const [activeIndex, setActiveIndex] = useState(null);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Ensure theme is mounted before rendering anything using it
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    if (!mounted) return null; // Prevent mismatches during SSR

    return (
        <div className="text-black p-4 w-full mx-auto rounded-md dark:text-white">
            {items.map((faq, index) => (
                <div key={index} className={`border-b-2 ${qColor === 'text-white' ? "border-white" : "border-black"} py-2 dark:border-white`}>
                    <div
                        className="flex justify-between items-center cursor-pointer font-bold"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className={`${qFontWeight} ${qColor} ${qFontFamily} ${qFontSize} py-4`}>{faq.question}</h3>
                        {activeIndex === index
                            ? <img src={`${qColor === 'text-white' || theme === 'dark' ? "/images/white_minus.png" : "/images/minus.png"}`} alt="minus Icon" className='w-8 object-fill' />
                            : <img src={`${qColor === 'text-white' || theme === 'dark' ? "/images/white_plus.png" : "/images/plus.png"}`} alt="Plus Icon" className='w-8 h-8' />
                        }
                    </div>
                    {activeIndex === index && (
                        <p className={`mt-4 ${ansColor} ${ansFontFamily} ${ansFontWeight} ${ansFontSize}`}>{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
