import Heading from "@/components/texts/Heading";

export default function PrivacyContent() {
    return (
        <section className={`w-full h-auto bg-white relative overflow-hidden`}>
            <div className="w-full h-full relative overflow-hidden py-10 md:py-10 px-8 md:px-20">
                <div className="flex flex-col items-start justify-between gap-8">
                    <Heading
                        text="Privacy Policy for Students"
                        fontFamily="font-luckiest"
                        fontSize="text-2xl md:text-5xl"
                        fontWeight="font-normal"
                        textAlign="text-center"
                        letterSpacing=""
                        textColor="text-[#8F0E00]"
                        customStyle=""
                    />
                    <div className="text-lg font-medium">
                        <p className="py-1">Prodigy's Privacy Commitment</p>
                        <p className="py-1">Prodigy Education is committed to protecting student data, so educators and parents can have complete peace of mind when using Prodigy in class or at home. We encourage you to read our entire Privacy Policy and Terms of Use, but we’ve summarized some key points below:</p>
                    </div>
                    <div className="flex flex-row items-start justify-between text-lg font-medium  gap-12">
                        <div className="w-9/12">
                            <ul className="py-4 list-item list-disc ">
                                <li className="list-disc py-1">Prodigy does not sell, lease, target advertisements based on, or otherwise trade for value ANY student personal information. We only collect what is absolutely necessary to provide the Games, which includes a student's first name, last name initial, state (for standards alignment purposes), and grade.</li>
                                <li className="list-disc py-1">Prodigy does not permit any third-party or behavior-based/targeted advertising in our products.We do not allow any third-party targeted advertising providers to collect information from the student-directed portions of our products.</li>
                                <li className="list-disc py-1">Student user information is only ever used to provide and improve our services.This includes measuring a student’s progress and performance and providing associated reports to parents and teachers attached to that user, or adapting, personalizing, and customizing our games to the student’s unique learning needs.</li>
                                <li className="list-disc py-1">All of Prodigy’s Math and English educational content is free, with our platform available at zero cost to educators.Revenue to sustain this level of access is generated from optional memberships which may be purchased by families for their children.</li>
                                <li className="list-disc py-1 mt-4">Prodigy has also been externally certified as compliant with state and federal child privacy requirements and for handling protected personal information. This includes certification by the Internet Keep Safe Coalition© (iKeepSafe), which audits and verifies that our digital products are compliant with state and federal requirements for handling protected personal information, including:                                </li>
                                <li className="list-disc py-1">The Children’s Online Privacy Protection Act (COPPA)</li>
                                <li className="list-disc py-1">The Family Educational Rights and Privacy Act (FERPA)</li>
                                <li className="list-disc py-1">The California Student Privacy Certification (CSPC)</li>
                                <li className="list-disc py-1">Prodigy has also received the 1EdTech TrustEd App Certification and is a member of the Access4Learning community and the Student Data Privacy Consortium.</li>
                                <li className="list-disc py-1">This Privacy Policy describes the way in which Prodigy Education Inc. (“Prodigy,” “we” or “us”) collects, uses, discloses, and safeguards personal information of students (collectively “Student Users” or “you”) when they use Prodigy’s games, such as Prodigy Math and Prodigy English, available at play.prodigygame.com (collectively, the “Games”).</li>
                            </ul>
                        </div>
                        <div className="w-3/12 pl-20">
                            <div className="py-4 w-auto h-auto md:w-1/2 md:h-1/2 rounded-full">
                                <img src="/images/ferpa.webp" alt="FERPA Logo" className="w-full h-full object-fill rounded fill" />
                            </div>
                            <div className="py-4 w-auto h-auto md:w-1/2 md:h-1/2 rounded-full">
                                <img src="/images/cspc.webp" alt="FERPA Logo" className="w-full h-full object-fill rounded fill" />
                            </div>
                            <div className="py-4 w-auto h-auto md:w-1/2 md:h-1/2 rounded-full">
                                <img src="/images/1edtech.webp" alt="FERPA Logo" className="w-full h-full object-fill rounded fill" />
                            </div>
                            <div className="py-4 w-auto h-auto md:w-1/2 md:h-1/2 rounded-full">
                                <img src="/images/pledged.webp" alt="FERPA Logo" className="w-full h-full object-fill rounded fill" />
                            </div>
                            <div className="py-4 w-auto h-auto md:w-1/2 md:h-1/2 rounded-full">
                                <img src="/images/nistcsf.webp" alt="FERPA Logo" className="w-full h-full object-fill rounded fill" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-between text-lg font-medium gap-12 py-4 pr-20 ">
                        <Heading
                            text="1. Types of Student User information we collect"
                            fontFamily="font-luckiest"
                            fontSize="text-2xl md:text-5xl"
                            fontWeight="font-normal"
                            textAlign="text-left"
                            letterSpacing=""
                            textColor="text-[#8F0E00]"
                            customStyle=""
                        />
                        <ul className="py-4 list-item list-disc">
                            <li className="list-disc py-1">We and our service providers collect Student User information when users create an account to use the Games. We maintain three types of user accounts (each a type of “User”):
                                <ol className="py-2 list-item  px-8">
                                    <li className=" py-1">“Student Users” or “Students” (a child and/or student who uses the Games).</li>
                                    <li className=" py-1">“Parent Users” or “Parents” (including parents and guardians of Student Users).</li>
                                    <li className=" py-1">“Educator Users” or “Educators” (a teacher, administrator, or other school official that opens an Educator account to use Prodigy’s services, including those with the ability to add Student User accounts).</li>
                                </ol>
                            </li>
                            <li className="list-disc py-1">Prodigy does not permit any third-party or behavior-based/targeted advertising in our products.We do not allow any third-party targeted advertising providers to collect information from the student-directed portions of our products.</li>
                            <li className="list-disc py-1">Student user information is only ever used to provide and improve our services.This includes measuring a student’s progress and performance and providing associated reports to parents and teachers attached to that user, or adapting, personalizing, and customizing our games to the student’s unique learning needs.</li>
                            <li className="list-disc py-1">All of Prodigy’s Math and English educational content is free, with our platform available at zero cost to educators.Revenue to sustain this level of access is generated from optional memberships which may be purchased by families for their children.</li>
                            <li className="list-disc py-1 mt-4">Prodigy has also been externally certified as compliant with state and federal child privacy requirements and for handling protected personal information. This includes certification by the Internet Keep Safe Coalition© (iKeepSafe), which audits and verifies that our digital products are compliant with state and federal requirements for handling protected personal information, including:                                </li>
                            <li className="list-disc py-1">The Children’s Online Privacy Protection Act (COPPA)</li>
                            <li className="list-disc py-1">The Family Educational Rights and Privacy Act (FERPA)</li>
                            <li className="list-disc py-1">The California Student Privacy Certification (CSPC)</li>
                            <li className="list-disc py-1">Prodigy has also received the 1EdTech TrustEd App Certification and is a member of the Access4Learning community and the Student Data Privacy Consortium.</li>
                            <li className="list-disc py-1">This Privacy Policy describes the way in which Prodigy Education Inc. (“Prodigy,” “we” or “us”) collects, uses, discloses, and safeguards personal information of students (collectively “Student Users” or “you”) when they use Prodigy’s games, such as Prodigy Math and Prodigy English, available at play.prodigygame.com (collectively, the “Games”).</li>
                        </ul>
                        <ul className="py-4 list-item list-disc mt-12">
                            <li className="list-disc py-1">
                                Prodigy does not sell, lease, target advertisements based on, or otherwise trade for value ANY student personal information.We only collect what is absolutely necessary to provide the Games, which includes a student’s first name, last name initial, state (for standards alignment purposes), and grade.
                            </li>
                            <li className="list-disc py-1">
                                Prodigy does not permit any third-party or behavior-based/targeted advertising in our products.We do not allow any third-party targeted advertising providers to collect information from the student-directed portions of our products.
                            </li>
                            <li className="list-disc py-1">
                                Student user information is only ever used to provide and improve our services.This includes measuring a student’s progress and performance and providing associated reports to parents and teachers attached to that user, or adapting, personalizing, and customizing our games to the student’s unique learning needs.
                            </li>
                            <li className="list-disc py-1">
                                All of Prodigy’s Math and English educational content is free, with our platform available at zero cost to educators.Revenue to sustain this level of access is generated from optional memberships which may be purchased by families for their children.
                            </li>
                        </ul>
                        <ul className="py-4 list-item list-disc mt-6">
                            <li className="list-disc py-1">
                                Prodigy has also been externally certified as compliant with state and federal child privacy requirements and for handling protected personal information. This includes certification by the Internet Keep Safe Coalition© (iKeepSafe), which audits and verifies that our digital products are compliant with state and federal requirements for handling protected personal information, including:
                                <ol className="py-2 list-item  px-8">
                                    <li className=" py-1">“Student Users” or “Students” (a child and/or student who uses the Games).</li>
                                    <li className=" py-1">“Parent Users” or “Parents” (including parents and guardians of Student Users).</li>
                                    <li className=" py-1">“Educator Users” or “Educators” (a teacher, administrator, or other school official that opens an Educator account to use Prodigy’s services, including those with the ability to add Student User accounts).</li>
                                </ol>
                            </li>
                            <li className="list-disc py-1">
                                Prodigy has also received the 1EdTech TrustEd App Certification and is a member of the Access4Learning community and the Student Data Privacy Consortium.
                            </li>
                            <li className="list-disc py-1">
                                This Privacy Policy describes the way in which Prodigy Education Inc. (“Prodigy,” “we” or “us”) collects, uses, discloses, and safeguards personal information of students (collectively “Student Users” or “you”) when they use Prodigy’s games, such as Prodigy Math and Prodigy English, available at play.prodigygame.com (collectively, the “Games”).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
