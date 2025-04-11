'use client';

import { useState } from 'react';

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

    const toggleAccordion = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className=" text-black p-4 w-full mx-auto rounded-md">
            {items.map((faq, index) => (
                <div key={index} className="border-b-2 border-black py-2">
                    <div
                        className="flex justify-between items-center cursor-pointer font-bold"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className={`${qFontWeight} ${qColor} ${qFontFamily} ${qFontSize} py-4`}>{faq.question}</h3>
                        {activeIndex === index
                            ? <img src="/images/minus.png" alt="minus Icon" className='w-8 object-fill' />
                            : <img src="/images/plus.png" alt="Plus Icon" className='w-8 h-8' />
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
