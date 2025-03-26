"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function TermsOfService() {
    return (
        <div className="pt-40">

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
                    <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-2">
                        Terms and Conditions
                    </motion.h1>

                    <motion.p variants={fadeIn} className="text-gray-400 mb-8">
                        Last updated: Jan 25, 2025
                    </motion.p>

                    <motion.div variants={fadeIn} className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Introduction</h2>
                            <p className="text-gray-300">
                                Please read these terms and conditions carefully before using Our Service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Interpretation and Definitions</h2>
                            <h3 className="text-xl font-semibold text-white">Interpretation</h3>
                            <p className="text-gray-300">
                                The words of which the initial letter is capitalized have meanings defined under the following
                                conditions. The following definitions shall have the same meaning regardless of whether they appear in
                                singular or in plural.
                            </p>

                            <h3 className="text-xl font-semibold text-white">Definitions</h3>
                            <p className="text-gray-300">For the purposes of these Terms and Conditions:</p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                <li>
                                    <span className="font-semibold">Affiliate</span> means an entity that controls, is controlled by or is
                                    under common control with a party, where "control" means ownership of 50% or more of the shares,
                                    equity interest or other securities entitled to vote for election of directors or other managing
                                    authority.
                                </li>
                                <li>
                                    <span className="font-semibold">Country</span> refers to: Pakistan
                                </li>
                                <li>
                                    <span className="font-semibold">Company</span> refers to Skord Lab (SMC) Pvt Ltd, located in Peshawar,
                                    KPK, Pakistan.
                                </li>
                                <li>
                                    <span className="font-semibold">Device</span> means any device that can access the Service such as a
                                    computer, a cellphone or a digital tablet.
                                </li>
                                <li>
                                    <span className="font-semibold">Service</span> refers to the Website.
                                </li>
                                <li>
                                    <span className="font-semibold">Terms and Conditions</span> (also referred as "Terms") mean these
                                    Terms and Conditions that form the entire agreement between You and the Company regarding the use of
                                    the Service. This Terms and Conditions agreement has been created with the help of the Terms and
                                    Conditions Generator.
                                </li>
                                <li>
                                    <span className="font-semibold">Third-party Social Media Service</span> means any services or content
                                    (including data, information, products or services) provided by a third-party that may be displayed,
                                    included or made available by the Service.
                                </li>
                                <li>
                                    <span className="font-semibold">Website</span> refers to skord labs, accessible from skordl.com
                                </li>
                                <li>
                                    <span className="font-semibold">You</span> means the individual accessing or using the Service, or the
                                    company, or other legal entity on behalf of which such individual is accessing or using the Service,
                                    as applicable.
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Acknowledgment</h2>
                            <p className="text-gray-300">
                                These are the Terms and Conditions governing the use of this Service and the agreement that operates
                                between You and the Company. These Terms and Conditions set out the rights and obligations of all users
                                regarding the use of the Service.
                            </p>
                            <p className="text-gray-300">
                                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these
                                Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or
                                use the Service.
                            </p>
                            <p className="text-gray-300">
                                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree
                                with any part of these Terms and Conditions then You may not access the Service.
                            </p>
                            <p className="text-gray-300">
                                You represent that you are over the age of 18. The Company does not permit those under 18 to use the
                                Service.
                            </p>
                            <p className="text-gray-300">
                                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the
                                Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the
                                collection, use and disclosure of Your personal information when You use the Application or the Website
                                and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy
                                carefully before using Our Service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Links to Other Websites</h2>
                            <p className="text-gray-300">
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by
                                the Company.
                            </p>
                            <p className="text-gray-300">
                                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or
                                practices of any third party web sites or services. You further acknowledge and agree that the Company
                                shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to
                                be caused by or in connection with the use of or reliance on any such content, goods or services
                                available on or through any such web sites or services.
                            </p>
                            <p className="text-gray-300">
                                We strongly advise You to read the terms and conditions and privacy policies of any third-party web
                                sites or services that You visit.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Termination</h2>
                            <p className="text-gray-300">
                                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason
                                whatsoever, including without limitation if You breach these Terms and Conditions.
                            </p>
                            <p className="text-gray-300">Upon termination, Your right to use the Service will cease immediately.</p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Limitation of Liability</h2>
                            <p className="text-gray-300">
                                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its
                                suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be
                                limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased
                                anything through the Service.
                            </p>
                            <p className="text-gray-300">
                                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be
                                liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not
                                limited to, damages for loss of profits, loss of data or other information, for business interruption,
                                for personal injury, loss of privacy arising out of or in any way related to the use of or inability to
                                use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in
                                connection with any provision of this Terms), even if the Company or any supplier has been advised of
                                the possibility of such damages and even if the remedy fails of its essential purpose.
                            </p>
                            <p className="text-gray-300">
                                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental
                                or consequential damages, which means that some of the above limitations may not apply. In these states,
                                each party's liability will be limited to the greatest extent permitted by law.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                            <p className="text-gray-300">
                                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without
                                warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own
                                behalf and on behalf of its Affiliates and its and their respective licensors and service providers,
                                expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to
                                the Service, including all implied warranties of merchantability, fitness for a particular purpose,
                                title and non-infringement, and warranties that may arise out of course of dealing, course of
                                performance, usage or trade practice. Without limitation to the foregoing, the Company provides no
                                warranty or undertaking, and makes no representation of any kind that the Service will meet Your
                                requirements, achieve any intended results, be compatible or work with any other software, applications,
                                systems or services, operate without interruption, meet any performance or reliability standards or be
                                error free or that any errors or defects can or will be corrected.
                            </p>
                            <p className="text-gray-300">
                                Without limiting the foregoing, neither the Company nor any of the company's provider makes any
                                representation or warranty of any kind, express or implied: (i) as to the operation or availability of
                                the Service, or the information, content, and materials or products included thereon; (ii) that the
                                Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any
                                information or content provided through the Service; or (iv) that the Service, its servers, the content,
                                or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms,
                                malware, timebombs or other harmful components.
                            </p>
                            <p className="text-gray-300">
                                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on
                                applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may
                                not apply to You. But in such a case the exclusions and limitations set forth in this section shall be
                                applied to the greatest extent enforceable under applicable law.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Governing Law</h2>
                            <p className="text-gray-300">
                                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of
                                the Service. Your use of the Application may also be subject to other local, state, national, or
                                international laws.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Disputes Resolution</h2>
                            <p className="text-gray-300">
                                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute
                                informally by contacting the Company.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">For European Union (EU) Users</h2>
                            <p className="text-gray-300">
                                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the
                                country in which You are resident.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">United States Legal Compliance</h2>
                            <p className="text-gray-300">
                                You represent and warrant that (i) You are not located in a country that is subject to the United States
                                government embargo, or that has been designated by the United States government as a "terrorist
                                supporting" country, and (ii) You are not listed on any United States government list of prohibited or
                                restricted parties.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Severability and Waiver</h2>
                            <h3 className="text-xl font-semibold text-white">Severability</h3>
                            <p className="text-gray-300">
                                If any provision of these Terms and Conditions is held to be invalid or unenforceable, the remaining
                                provisions of these Terms and Conditions will remain in full force and effect.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Changes to this Terms and Conditions</h2>
                            <p className="text-gray-300">
                                We may update Our Terms and Conditions from time to time. We will notify You of changes by posting the
                                new Terms and Conditions on this page.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Note</h2>
                            <p className="text-gray-300">
                                If you have any questions about this Terms and Conditions, You can contact us:
                            </p>
                            <p className="text-gray-300">By email: contact@skordl.com</p>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
}

