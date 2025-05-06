"use client"
import { useEffect, useState } from "react";
import Heading from "@/components/texts/Heading";
import Link from "next/link";

export default function TermsAndConditions() {
    const [termsData, setTermsData] = useState({
        effectiveDate: "April 16, 2025",
        lastUpdated: "April 16, 2025",
        termsItems: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTermsData() {
            try {
                const response = await fetch(
                    "https://cms.kurixel.com/api/cms-pages?filters[slug][$eq]=terms-of-use&populate=TermsOfUsePage&populate=TermsOfUsePage.list"
                );
                
                if (!response.ok) {
                    throw new Error("Failed to fetch terms data");
                }
                
                const data = await response.json();
                
                if (data.data && data.data.length > 0) {
                    const pageData = data.data[0];
                    const termsPage = pageData.TermsOfUsePage && pageData.TermsOfUsePage[0];
                    
                    if (termsPage) {
                        // Extract the published and updated dates from the CMS data
                        const effectiveDate = new Date(pageData.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });
                        
                        const lastUpdated = new Date(pageData.updatedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });
                        
                        setTermsData({
                            effectiveDate,
                            lastUpdated,
                            termsItems: termsPage.list || []
                        });
                    }
                }
            } catch (err) {
                console.error("Error fetching terms data:", err);
                setError("Failed to load terms and conditions. Please try again later.");
            } finally {
                setLoading(false);
            }
        }

        fetchTermsData();
    }, []);

    if (loading) {
        return (
            <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8F0E00]"></div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
                <div className="flex justify-center items-center py-20">
                    <div className="text-[#8F0E00] text-xl">{error}</div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]">
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex flex-col items-start justify-start px-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-black text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg font-medium text-justify gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 dark:text-white">
                    <Heading
                        text="Terms and Conditions"
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
                            {termsData.effectiveDate}
                        </div>
                    </div>
                    <div className="flex items-start justify-start">
                        <div className="font-semibold">
                            Last Updated:
                        </div>
                        <div className="font-normal px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                            {termsData.lastUpdated}
                        </div>
                    </div>

                    <div className="">
                        Welcome to ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our educational gaming platform, including our website, mobile applications, and related services (collectively, the "Services"). By accessing or using the Service whether as a student, educator, parent, or guardian you agree to be bound by these Terms and by our Privacy Policy. If you do not agree to these Terms, please do not use the Services.
                    </div>

                    <div className="">
                        <ol className="list-decimal text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg px-2 sm:px-2 md:px-4 lg:px-2 xl:px-4">
                            {termsData.termsItems.map((item, index) => (
                                <li key={item.id || index} className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                    <Heading
                                        text={item.title}
                                        fontFamily="font-luckiest"
                                        fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                        fontWeight="font-bold"
                                        textAlign="text-left"
                                        letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                        textColor="text-[#8F0E00] dark:text-white"
                                        customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                    />

                                    <div className="">
                                        {item.description}
                                        {item.title === "Contact Information" && 
                                            <span> <Link href="/contact-us" className="text-blue-600">Kurixel Inc.</Link></span>
                                        }
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