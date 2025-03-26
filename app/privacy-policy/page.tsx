"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function PrivacyPolicy() {
    return (
        <div className="pt-40">

            {/* Main Content */}
            <main className="container px-4 py-12">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
                    <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-2">
                        Privacy Policy
                    </motion.h1>

                    <motion.p variants={fadeIn} className="text-gray-400 mb-8">
                        Last updated: Jan 25, 2025
                    </motion.p>

                    <motion.div variants={fadeIn} className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Introduction</h2>
                            <p className="text-gray-300">
                                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your
                                information when You use the Service and tells You about Your privacy rights and how the law protects
                                You.
                            </p>
                            <p className="text-gray-300">
                                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                                collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been
                                created with the help of the Privacy Policy Generator.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Interpretation and Definitions</h2>
                            <h3 className="text-xl font-semibold text-white">Interpretation</h3>
                            <p className="text-gray-300">
                                The words of which the initial letter is capitalized have meanings defined under the following
                                conditions. The following definitions shall have the same meaning regardless of whether they appear in
                                singular or plural.
                            </p>

                            <h3 className="text-xl font-semibold text-white">Definitions</h3>
                            <p className="text-gray-300">For the purposes of this Privacy Policy:</p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                <li>
                                    <span className="font-semibold">Account</span> means a unique account created for You to access our
                                    Service or parts of our Service.
                                </li>
                                <li>
                                    <span className="font-semibold">Affiliate</span> means an entity that controls, is controlled by, or
                                    is under common control with a party.
                                </li>
                                <li>
                                    <span className="font-semibold">Company</span> refers to skord lab (SMC) Pvt Ltd, located in Peshawar,
                                    KPK, Pakistan.
                                </li>
                                <li>
                                    <span className="font-semibold">Cookies</span> are small files that are placed on Your computer,
                                    mobile device, or any other device by a website, containing details of Your browsing history.
                                </li>
                                <li>
                                    <span className="font-semibold">Country</span> refers to: Pakistan
                                </li>
                                <li>
                                    <span className="font-semibold">Device</span> means any device that can access the Service, such as a
                                    computer, cellphone, or digital tablet.
                                </li>
                                <li>
                                    <span className="font-semibold">Personal Data</span> is any information that relates to an identified
                                    or identifiable individual.
                                </li>
                                <li>
                                    <span className="font-semibold">Service</span> refers to the Website.
                                </li>
                                <li>
                                    <span className="font-semibold">Service Provider</span> means any natural or legal person who
                                    processes the data on behalf of the Company.
                                </li>
                                <li>
                                    <span className="font-semibold">Usage Data</span> refers to data collected automatically from the
                                    Service.
                                </li>
                                <li>
                                    <span className="font-semibold">Website</span> refers to skordlabs, accessible from skordl.com
                                </li>
                                <li>
                                    <span className="font-semibold">You</span> means the individual accessing or using the Service.
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Collecting and Using Your Personal Data</h2>
                            <h3 className="text-xl font-semibold text-white">Types of Data Collected</h3>

                            <h4 className="text-lg font-semibold text-white">Personal Data</h4>
                            <p className="text-gray-300">
                                While using Our Service, We may ask You to provide Us with certain personally identifiable information
                                that can be used to contact or identify You. Personally identifiable information may include, but is not
                                limited to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-1">
                                <li>Email address</li>
                                <li>First name and last name</li>
                                <li>Phone number</li>
                                <li>Usage Data</li>
                            </ul>

                            <h4 className="text-lg font-semibold text-white">Usage Data</h4>
                            <p className="text-gray-300">
                                Usage Data is collected automatically when using the Service, including information such as Your
                                Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our
                                Service that You visit, and the time and date of Your visit.
                            </p>

                            <h4 className="text-lg font-semibold text-white">Tracking Technologies and Cookies</h4>
                            <p className="text-gray-300">
                                We use Cookies and similar tracking technologies to track activity on Our Service and store certain
                                information. These technologies may include:
                            </p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-1">
                                <li>Cookies (small files placed on Your Device)</li>
                                <li>Web Beacons (electronic files used for counting users)</li>
                            </ul>
                            <p className="text-gray-300">
                                Cookies can be "Persistent" or "Session" Cookies, and We use them to improve and analyze Our Service,
                                provide a more personal experience, and enhance security.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Use of Your Personal Data</h2>
                            <p className="text-gray-300">The Company may use Personal Data for the following purposes:</p>
                            <ul className="list-disc pl-6 text-gray-300 space-y-1">
                                <li>To provide and maintain the Service.</li>
                                <li>To manage Your Account.</li>
                                <li>For the performance of a contract.</li>
                                <li>To contact You regarding updates or offers.</li>
                                <li>To evaluate and improve the Service and user experience.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Retention of Your Personal Data</h2>
                            <p className="text-gray-300">
                                The Company will retain Your Personal Data only for as long as necessary to comply with legal
                                obligations or to resolve disputes.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Transfer of Your Personal Data</h2>
                            <p className="text-gray-300">
                                Your information may be processed outside of Your jurisdiction, and by submitting Your information, You
                                consent to this transfer.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Delete Your Personal Data</h2>
                            <p className="text-gray-300">
                                You have the right to delete or request that We assist in deleting the Personal Data that We have
                                collected about You. You may also contact Us for assistance with your personal information.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Disclosure of Your Personal Data</h2>
                            <p className="text-gray-300">
                                Your Personal Data may be disclosed in certain situations, such as in business transactions or to comply
                                with legal obligations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Security of Your Personal Data</h2>
                            <p className="text-gray-300">
                                While We strive to protect Your Personal Data, no method of transmission over the Internet is completely
                                secure. We cannot guarantee absolute security.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Children's Privacy</h2>
                            <p className="text-gray-300">
                                Our Service does not address anyone under the age of 13. If We become aware that We have collected
                                Personal Data from anyone under 13, We will take steps to remove that information.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Links to Other Websites</h2>
                            <p className="text-gray-300">
                                Our Service may contain links to third-party websites. We have no control over the content or privacy
                                policies of these sites.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Changes to this Privacy Policy</h2>
                            <p className="text-gray-300">
                                We may update Our Privacy Policy from time to time. We will notify You of changes by posting the new
                                Privacy Policy on this page.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#9eff00]">Note</h2>
                            <p className="text-gray-300">If you have any questions about this Privacy Policy, You can contact us:</p>
                            <p className="text-gray-300">By email: contact@skordl.com</p>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
}

