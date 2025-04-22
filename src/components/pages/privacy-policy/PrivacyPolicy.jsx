import Heading from "@/components/texts/Heading";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden dark:bg-[#212121]`}>
            <div className="w-full h-full relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <div className="flex flex-col items-start justify-start px-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-black text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg font-medium text-justify gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 dark:text-white">
                    <Heading
                        text="Privacy Policy"
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

                    <div className="">
                        At Kurixel Inc. (“we,” “us,” or “our”), we are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, and protect the information of users who interact with our educational games, websites, mobile applications, and related services (collectively, the “Services”). We comply with all applicable privacy regulations, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act and California Privacy Rights Act (CCPA/CPRA), the Children’s Online Privacy Protection Act (COPPA), and other U.S. state and international laws.
                    </div>

                    <div className="">
                        <ol className="list-decimal text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg px-2 sm:px-2 md:px-4 lg:px-2 xl:px-4">
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Who This Policy Covers"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    This Privacy Policy applies to all users of our Services, including student users (children or learners engaging with our content), parent or guardian users (adults managing or approving student accounts), and educator or school users (teachers and administrators using our platform in an educational context).
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Information We Collect"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                        We collect different types of information depending on your role and how you use the Services. Information you provide directly includes your name, <Link href="/contact-us" className="text-blue-600">email</Link> address, username, password, and contact information. If you are a parent, guardian, or educator, we may collect your relationship to the student user. Payment data such as billing address and transaction information is processed securely by third-party providers; we do not store full credit card details. Users may also provide user-generated content such as in-game answers, profile information, and support messages.
                                    </p>
                                    <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                        We automatically collect information about your device and usage. This includes your IP address, browser type, device type, operating system, and in-app behavior (such as session activity, progress, and interaction with features). We may also receive limited information from third-party login providers (e.g., Google or Apple) and analytics platforms that help us improve user experience.
                                    </p>
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Why We Collect Your Data"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    We use the data we collect to provide, maintain, and improve our Services. This includes personalizing learning content, tracking progress, sending necessary notifications, processing payments, responding to inquiries, and maintaining account security. We also use aggregated data to analyze user behavior, enhance features, and ensure legal compliance. We do not collect more data than necessary for these purposes and always strive to respect the privacy of our users.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="How We Share Your Data"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    We do not sell your personal data. We may share your information with trusted service providers that help us operate our Services, such as hosting companies, analytics vendors, customer support platforms, and payment processors. These third parties are bound by confidentiality and data protection agreements. In certain educational settings, we may share data with schools, educators, or authorized parents or guardians. If legally required, we may disclose data to law enforcement or regulatory bodies. A list of our third-party providers and their privacy practices is available upon request.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Your Rights and Choices"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                        You have the right to control your information. If you no longer wish to receive marketing or promotional <Link href="/contact-us" className="text-blue-600">email</Link>s from us, you can unsubscribe by clicking the link in the <Link href="/contact-us" className="text-blue-600">email</Link> or contacting us at [insert contact <Link href="/contact-us" className="text-blue-600">email</Link>]. You will still receive service-related communications essential to your account, such as billing updates or password resets.
                                    </p>
                                    <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                        Your privacy rights may vary based on your location. If you are a California resident, you have the right to access, correct, delete, or limit the use of your personal information, and to request information about how we collect and use it. You may also opt out of data “sharing” under CPRA definitions, though we do not share personal information for advertising purposes.
                                    </p>
                                    <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                        Residents of Virginia, Colorado, Connecticut, and Utah have similar rights, including access, deletion, correction of personal information, and the ability to opt out of profiling or targeted advertising. We do not currently engage in profiling or behavioral advertising.
                                    </p>
                                    <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                        If you are located in the European Union or the United Kingdom, you have the right to access, correct, delete, or restrict processing of your data, object to certain uses, withdraw consent at any time, and request a copy of your personal data in a portable format. You may also lodge a complaint with your local data protection authority. To exercise any of these rights, contact us at [insert contact <Link href="/contact-us" className="text-blue-600">email</Link>]. We may require you to verify your identity before responding.
                                    </p>
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Cookies and Tracking Technologies"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    We use cookies and similar technologies to support functionality and measure performance. Cookies help us remember user preferences, maintain login sessions, and analyze how users interact with our platform. You can control cookies through your browser or device settings. Please note that some features of our Services may not work properly if cookies are disabled. We do not use cookies for targeted advertising to children.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Children’s Privacy"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    Protecting children’s privacy is core to our mission. We comply with COPPA in the U.S. and GDPR-K for children in the EU. If your child is under 13 (or the digital age of consent in your region), we will obtain verifiable parental or guardian consent before collecting any personal information. We limit the collection of children’s data to what is necessary for educational purposes, and we do not use it for marketing or behavioral advertising. Parents have the right to access, review, or delete their child’s personal information at any time. If a child’s account is created by a school or teacher, the school may act as the parent’s agent for purposes of granting consent under applicable laws.
                                </div>

                                <ol className="list-[upper-alpha] pl-5 py-1 sm:py-1 md:py-3 lg:py-4">
                                    <li>
                                        <Heading
                                            text="FERPA Compliance (For U.S. Schools)"
                                            fontFamily="font-luckiest"
                                            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                            fontWeight="font-bold"
                                            textAlign="text-left"
                                            letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                            textColor="text-[#8F0E00] dark:text-white"
                                            customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                        />

                                        <div className="">
                                            <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                                If you are a school or educational institution in the United States using our Services with students, we comply with the Family Educational Rights and Privacy Act (FERPA). Under FERPA, schools may act as the parent’s agent and provide consent for the collection and use of student data strictly for educational purposes.
                                            </p>
                                            <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                                We enter into agreements with schools and districts to ensure student information is handled in accordance with FERPA requirements. We do not use personally identifiable information from students for any purpose other than to deliver and improve our educational Services, and we do not sell or disclose student information to third parties except as required to provide the Services or as authorized by the school.
                                            </p>
                                            <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                                Schools and educational agencies retain control over student records and may review, correct, or request deletion of student information at any time by contacting us. Upon termination of the school agreement or at the request of the school, we will delete or return student data in accordance with FERPA and our data retention policy.
                                            </p>
                                            <p className="py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3">
                                                If your institution requires a Data Processing Agreement (DPA) or custom terms for compliance, please contact us at [insert contact <Link href="/contact-us" className="text-blue-600">email</Link>] to initiate the process.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Data Security and Retention"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    We maintain strict safeguards to protect your information. This includes encryption of data in transit and at rest, limited employee access to personal data, and regular security reviews. We store your personal data only for as long as necessary to fulfill the purposes described in this policy or to meet legal obligations. Student data is typically retained for a defined period after inactivity (e.g., two years), after which it is securely deleted or anonymized. You may request account deletion at any time.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="International Transfers"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    If you access our Services from outside the United States, your information may be transferred to and processed in the U.S. or other countries that may not have the same level of data protection as your home country. We use appropriate legal safeguards such as Standard Contractual Clauses (SCCs) or parental/school consent to protect your data during international transfers, and ensure that your rights are maintained regardless of location.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Changes to This Privacy Policy"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or industry practices. If we make any material changes, we will notify you through prominent in-app messages, <Link href="/contact-us" className="text-blue-600">email</Link>, or on our website. The revised version will be effective as of the date listed at the top of the policy. Your continued use of the Services after an update constitutes acceptance of the revised policy.
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Contact Us"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact <Link href="/contact-us" className="text-blue-600">Kurixel Inc.</Link>
                                </div>
                            </li>
                            <li className="px-2 py-1 sm:py-1 md:py-3 lg:py-4">
                                <Heading
                                    text="Additional Disclosures for Other Jurisdictions"
                                    fontFamily="font-luckiest"
                                    fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                                    fontWeight="font-bold"
                                    textAlign="text-left"
                                    letterSpacing="tracking-wide sm:tracking-wide md:tracking-wide lg:tracking-wider"
                                    textColor="text-[#8F0E00] dark:text-white"
                                    customStyle="py-1 sm:py-1 md:py-3 lg:py-4"
                                />

                                <div className="">
                                    If required, we may supplement this policy with additional disclosures for other jurisdictions, including but not limited to Brazil (LGPD), Canada (PIPEDA), India (DPDP Act), or other countries as applicable.
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
