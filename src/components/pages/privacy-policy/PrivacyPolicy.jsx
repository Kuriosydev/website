"use client"
import { useState, useEffect } from "react";
import Heading from "@/components/texts/Heading";
import Link from "next/link";

export default function PrivacyPolicy() {
    const [policyData, setPolicyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [effectiveDate, setEffectiveDate] = useState("April 16, 2025"); // Default date in case it's not in API

    useEffect(() => {
        const fetchPrivacyPolicy = async () => {
            try {
                const response = await fetch(
                    "https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=privacy-policy&populate=PrivacyPolicyPage&populate=PrivacyPolicyPage.title"
                );
                
                if (!response.ok) {
                    throw new Error("Failed to fetch privacy policy data");
                }
                
                const data = await response.json();
                
                // Check if we have the expected data structure
                if (data.data && data.data.length > 0 && data.data[0].PrivacyPolicyPage) {
                    setPolicyData(data.data[0]);
                    
                    // You could extract the effective date from createdAt or publishedAt
                    // Example: Format the date as needed
                    const publishDate = new Date(data.data[0].publishedAt);
                    setEffectiveDate(publishDate.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric', 
                        year: 'numeric'
                    }));
                } else {
                    throw new Error("Invalid data structure from API");
                }
            } catch (err) {
                console.error("Error fetching privacy policy:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPrivacyPolicy();
    }, []);

    // Show loading state
    if (loading) {
        return (
            <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
                <div className="w-full h-full flex items-center justify-center py-20">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#8F0E00] mx-auto"></div>
                        <p className="mt-4 text-lg dark:text-white">Loading Privacy Policy...</p>
                    </div>
                </div>
            </section>
        );
    }

    // Show error state
    if (error) {
        return (
            <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
                <div className="w-full h-full flex items-center justify-center py-20">
                    <div className="text-center max-w-lg px-4">
                        <h2 className="text-2xl font-bold text-[#8F0E00] mb-4 dark:text-white">
                            Oops! Something went wrong.
                        </h2>
                        <p className="mb-4 dark:text-white">
                            We couldn't load the privacy policy. Please try again later.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    // Render the policy when data is available
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex flex-col items-start justify-start px-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-black text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg font-medium text-justify gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 dark:text-white">
                    <Heading
                        text={policyData.pagetitle || "Privacy Policy"}
                        fontFamily="font-luckiest"
                        fontSize="text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
                        fontWeight="font-bold"
                        textAlign="text-center sm:text-center md:text-center lg:text-center xl:text-center"
                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                        textColor="text-[#8F0E00] dark:text-white"
                        customStyle="py-2 sm:py-2 md:py-6 lg:py-7"
                    />

                    <div className="flex items-start justify-start">
                        <div className="font-semibold">
                            Effective Date:
                        </div>
                        <div className="font-normal px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                            {effectiveDate}
                        </div>
                    </div>

                    <div className="">
                        At Kurixel Inc. ("we," "us," or "our"), we are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, and protect the information of users who interact with our educational games, websites, mobile applications, and related services (collectively, the "Services"). We comply with all applicable privacy regulations, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act and California Privacy Rights Act (CCPA/CPRA), the Children's Online Privacy Protection Act (COPPA), and other U.S. state and international laws.
                    </div>

                    <div className="">
                        <ol className="list-decimal text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg px-2 sm:px-2 md:px-4 lg:px-2 xl:px-4">
                            {policyData.PrivacyPolicyPage[0].title
                                .filter(section => section.title !== "ERPA Compliance (For U.S. Schools)") // Skip FERPA as we'll handle it specially
                                .map((section, index) => (
                                <li key={section.id} className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                    <Heading
                                        text={section.title}
                                        fontFamily="font-luckiest"
                                        fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                        fontWeight="font-bold"
                                        textAlign="text-left"
                                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                        textColor="text-[#8F0E00] dark:text-white"
                                        customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                    />

                                    <div className="">
                                        {/* Split description text by paragraphs (if any) and render them */}
                                        {section.description.split('\n\n').map((paragraph, pIndex) => (
                                            <p key={`${section.id}-${pIndex}`} className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                                {/* Render email links if found */}
                                                {paragraph.includes('info@kurixel.com') ? (
                                                    renderTextWithEmailLinks(paragraph)
                                                ) : (
                                                    paragraph
                                                )}
                                            </p>
                                        ))}
                                        
                                        {/* Only add FERPA subsection if this is the Children's Privacy section */}
                                        {section.title === "Children's Privacy" && (
                                            <ol className="list-[upper-alpha] pl-5 py-1 sm:py-1 md:py-3 lg:py-4">
                                                <li>
                                                    {/* Find the FERPA section from the data */}
                                                    {(() => {
                                                        const ferpaSection = policyData.PrivacyPolicyPage[0].title.find(
                                                            item => item.title === "FERPA Compliance (For U.S. Schools)"
                                                        );
                                                        
                                                        if (ferpaSection) {
                                                            return (
                                                                <>
                                                                    <Heading
                                                                        text={ferpaSection.title}
                                                                        fontFamily="font-luckiest"
                                                                        fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                                                        fontWeight="font-bold"
                                                                        textAlign="text-left"
                                                                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                                                        textColor="text-[#8F0E00] dark:text-white"
                                                                        customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                                                    />
                                                                    <div className="">
                                                                        {ferpaSection.description.split('\n\n').map((paragraph, pIndex) => (
                                                                            <p key={`ferpa-${pIndex}`} className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                                                                {paragraph.includes('info@kurixel.com') ? 
                                                                                    renderTextWithEmailLinks(paragraph) : 
                                                                                    paragraph
                                                                                }
                                                                            </p>
                                                                        ))}
                                                                    </div>
                                                                </>
                                                            );
                                                        }
                                                        return null;
                                                    })()}
                                                </li>
                                            </ol>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper function to render text with email links
function renderTextWithEmailLinks(text) {
    const emailRegex = /info@kurixel\.com/g;
    const parts = text.split(emailRegex);
    
    if (parts.length === 1) return text;
    
    const result = [];
    parts.forEach((part, index) => {
        result.push(part);
        if (index < parts.length - 1) {
            result.push(
                <a key={`email-${index}`} href="mailto:info@kurixel.com" className="text-blue-600">
                    info@kurixel.com
                </a>
            );
        }
    });
    
    return <>{result}</>;
}