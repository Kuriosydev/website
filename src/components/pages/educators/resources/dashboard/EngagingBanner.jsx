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
      id: 'SkillCheckpoints',
      label: 'Skill Checkpoints',
      description: "View assessment results woven into gameplay to understand each learner's grasp of key concepts."
    },
    {
      id: 'PlacementInsights',
      label: 'Placement Insights',
      description: 'Start students at the right level with adaptive placement data that meets them where they are.'
    },
    {
      id: 'ProgressGlance',
      label: 'Progress at a Glance',
      description: 'Monitor growth over time across reading, comprehension, and language-building milestones.'
    },
    {
      id: 'DeeperUnderstanding',
      label: 'Deeper Understanding',
      description: 'See how well students are engaging with texts and applying their comprehension skills.'
    },
    {
      id: 'ActivityEngagement',
      label: 'Activity & Engagement',
      description: 'Track how often and how long students play.'
    },
  ];

  const handleItemClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-16">
        <Heading
          text="Teach with Precision"
          fontFamily="font-luckiest"
          fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00] dark:text-[#FFCE49]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="text-center text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium dark:text-white">
          Kurixel’s smart reports give you real-time insight into how your students learn
        </div>
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center sm:items-center md:items-center lg:items-center xl:items-center justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <nav className="flex flex-col py-4 text-xl">
              {menuItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    className={`flex items-center justify-between w-full px-4 py-3 font-medium text-left ${expandedItem === item.id
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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

          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 py-4 sm:py-4 md:py-8">
            <img src="/images/image20.png" alt="creative gameplay image" className="w-4/5 h-4/5 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}