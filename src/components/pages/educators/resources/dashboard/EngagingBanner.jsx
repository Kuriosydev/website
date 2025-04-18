"use client";

import { React, useState } from "react";
import Heading from "@/components/texts/Heading";
import YellowButton from "@/components/buttons/YellowButton";

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
    <section className={`w-full h-auto bg-red relative overflow-hidden`}>
      <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <Heading
          text="Teach with Precision"
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[#8F0E00]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <Heading
          text="Kurixel’s smart reports give you real-time insight into how your students learn"
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[black]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-wrap items-center justify-center px-4 sm:px-10 md:px-20 lg:px-20">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
          <nav className="flex flex-col py-4">
        {menuItems.map((item) => (
          <div key={item.id} className="border-b border-gray-100 last:border-b-0">
            <button
              className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left ${
                expandedItem === item.id 
                  ? 'text-gray-900 bg-gray-50' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="font-semibold">{item.label}</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${
                  expandedItem === item.id ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {expandedItem === item.id && (
              <div className="px-4 py-3 bg-gray-50 text-sm text-gray-700">
                <p className="mb-2 font-semibold">{item.label}</p>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </nav>
          </div>

          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row flex-wrap items-center justify-center">
            <img
              src="/images/image 21.png"
              alt="Kids image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <Heading
          text="Assessment Report"
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[black]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
        <Heading
          text="See how your students perform when they complete a Prodigy assessment, including Assignments and Plans.  Available for Prodigy Math and Prodigy English."
          fontFamily="font-luckiest"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
          fontWeight="font-bold"
          textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
          letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
          textColor="text-[black]"
          customStyle="py-2 sm:py-2 md:py-6 lg:py-7 xl:py-8 px-4 sm:px-10 md:px-20 lg:px-20"
        />
      </div>
    </section>
  );
}
