import Heading from "@/components/texts/Heading";
import Link from "next/link";

export default function TermsAndConditions() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
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
                        <div className=" font-semibold">
                            Effective Date:
                        </div>
                        <div className="font-normal px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                            April 16, 2025
                        </div>
                    </div>
                    <div className="flex items-start justify-start">
                        <div className=" font-semibold">
                            Last Updated:
                        </div>
                        <div className="font-normal px-2 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                            April 16, 2025
                        </div>
                    </div>

                    <div className="">
                        Welcome to (“we,” “us,” or “our”). These Terms and Conditions (“Terms”) govern your use of our educational gaming platform, including our website, mobile applications, and related services (collectively, the “Services”). By accessing or using the Service whether as a student, educator, parent, or guardian you agree to be bound by these Terms and by our Privacy Policy. If you do not agree to these Terms, please do not use the Services.
                    </div>

                    <div className="">
                        <ol className="list-decimal text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg px-2 sm:px-2 md:px-4 lg:px-2 xl:px-4">
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Eligibility and Use by Children"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    The Services are designed for children, parents or guardians, and educators. Children under the age of 13 may use the Services only with verifiable parental consent or under the supervision of a school or teacher, in accordance with the Children’s Online Privacy Protection Act (COPPA). Parents and educators are responsible for managing and supervising any child’s use of the Services. If you are an educator or school administrator, you represent that you have the authority to agree to these Terms on behalf of your educational institution.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Account Registration and Responsibility"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    To access certain features, you may be required to create an account. When creating an account, you agree to provide accurate information and to maintain the confidentiality of your login credentials. You are responsible for any activity under your account. Parents, guardians, and educators who create or manage accounts on behalf of children agree to monitor use and ensure the child’s experience is appropriate. We reserve the right to suspend or terminate any account that violates these Terms or is used in a way that could be harmful or unlawful.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Acceptable Use of the Services"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    By using the Services, you agree to use them in a safe, respectful, and lawful manner. You must not use the Services for commercial purposes, share unauthorized personal information, access another user’s account, upload harmful content, or attempt to reverse-engineer or interfere with our platform. Automated tools, bots, or scraping technologies are strictly prohibited. We reserve the right to remove users or take legal action for violations.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Acceptable Use of the Services"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    All content and materials on the Services including but not limited to text, artwork, audio, code, avatars, and game design are owned by Kurixel Inc. or its licensors. These materials are protected under intellectual property laws and are provided for personal, non-commercial educational use only. You may not reproduce, republish, transmit, or create derivative works from any part of the Services without written permission.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="User-Generated Content"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    Some areas of the platform may allow users to submit content, including usernames, custom avatars, or written responses. By submitting such content, you grant us a non-exclusive, royalty-free license to use and display it solely for purposes related to the Services. You agree not to submit content that is offensive, illegal, or violates the
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Privacy and Data Protection"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    Your use of the Services is subject to our Privacy Policy. We are committed to protecting your personal information and complying with applicable privacy laws. For child users, we comply with COPPA by limiting data collection, obtaining necessary consent, and offering tools for parents to review or delete their child’s information. When an educator creates a child’s account through a school, the school may act as the parent’s agent in providing consent under COPPA.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Payments, Subscriptions, and Refunds"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    If you choose to purchase a subscription or other paid feature, you agree to pay all applicable fees through our approved payment providers. All prices are in U.S. dollars and subject to change. We may modify features or pricing at any time. Unless otherwise stated, purchases are non-refundable. You are responsible for any charges incurred through your account.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Termination and Suspension"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    You may stop using the Services at any time. You may also request to delete your account and associated data. We may suspend or terminate access to the Services if we believe you have violated these Terms or created risk or harm to the platform, other users, or our company. Following termination, we are not obligated to retain or recover user data except where required by law.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Disclaimers"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    The Services are provided “as is” and “as available.” We do not guarantee uninterrupted or error-free performance, nor do we make warranties regarding the accuracy or fitness for a particular purpose. You use the Services at your own risk. We are not liable for any indirect, incidental, or consequential damages arising from use of the Services, including data loss, unauthorized access, or connectivity issues.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Limitation of Liability and Indemnification"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    To the fullest extent allowed by law, our liability to you is limited to the greater of (a) the total amount you paid us in the last 6 months, or (b) fifty U.S. dollars ($50). You agree to indemnify and hold harmless Kurixel Inc., our affiliates, and employees from any claims or disputes arising from your use of the Services or violation of these Terms.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Updates to These Terms"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    We may update these Terms occasionally to reflect changes to our platform, policies, or legal obligations. If we make significant updates, we will notify you by email or within the Services. Continued use of the Services after updates means you accept the new Terms.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Governing Law and Jurisdiction"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law rules. Disputes will be resolved in the courts of New Castle County, Delaware, unless otherwise required by local law.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Contact Information"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    If you have questions or concerns about these Terms, please contact us at <Link href="/contact-us" className="text-blue-600">Kurixel Inc.</Link>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
