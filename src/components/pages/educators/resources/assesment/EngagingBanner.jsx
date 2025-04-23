"use client";

import Heading from "@/components/texts/Heading";
import { useState } from "react";

export default function EngagingBanner() {
  const ChevronDown = ({ size = 16, className = '' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
  const [expandedItem, setExpandedItem] = useState(null);

  const menuItems = [
    {
      id: 'Placement_Test',
      label: 'Placement Test',
      description: "Kurixel meets every learner where they are right from the beginning. With one short, game-based assessment, Kurixel quickly identifies each learner’s strengths and areas for growth so no one gets bored or overwhelmed. Whether you're a teacher or parent, you'll get clear, real-time results that help you understand where your learner is and where they’re ready to go next."
    },
    {
      id: 'Assessments',
      label: 'Assessments',
      description: 'Kurixel’s assessment tools are built right into the gameplay, giving teachers real insights without interrupting the fun. From the moment students start exploring Kurixel Math or English, the platform begins identifying their strengths, skill gaps, and learning pace.'
    },
  ];

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="Power up learning"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="text-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white">
          Create personalized, standards-aligned tasks, then let students explore, play, and grow.
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center sm:items-center md:items-center lg:items-center xl:items-center justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">

          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <nav className="flex flex-col py-4 text-xl">
              {menuItems.map((item) => (
                <div key={item.id} className="border-b border-black last:border-b-0 dark:border-white">
                  <button
                    className={`flex items-center justify-between w-full px-4 py-3 font-medium text-left ${expandedItem === item.id
                      ? 'text-gray-900 bg-gray-50 dark:text-[#8F0E00]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-[#FFCE49] dark:hover:text-[#8F0E00] '
                      }`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <span className="font-semibold">{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${expandedItem === item.id ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {expandedItem === item.id && (
                    <div className="px-4 py-3 bg-gray-50 text-lg text-gray-700">
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="w-full items-end justify-end sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <img src="/images/image20.png" alt="creative gameplay image" className="w-4/5 h-4/5 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
