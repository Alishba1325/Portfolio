

import React from 'react';
import { motion } from 'framer-motion';
// Note: Icons ke liye react-icons install karein: npm install react-icons
import { FaMapMarkerAlt, FaLinkedinIn, FaEnvelope, FaDownload, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const contactDetails = [
    { icon: <FaMapMarkerAlt />, label: 'ADDRESS', value: 'Karachi, Pakistan' },
    { icon: <FaLinkedinIn />, label: 'LINKEDIN ID', value: 'Zainab lakho', link: 'https://linkedin.com/in/zainab-lakho' },
    { icon: <FaEnvelope />, label: 'EMAIL ADDRESS', value: 'zainablakho2005@gmail.com' },
    { icon: <FaDownload />, label: 'DOWNLOAD RESUME', value: 'resumelink', link: '/path/to/resume.pdf' },
];

// Floating Bubble Component
const FloatingBubble = ({ size, top, left, delay }) => (
    <motion.div
        initial={{ y: 0, opacity: 0.1 }}
        animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        className="absolute rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 blur-[50px] pointer-events-none"
        style={{ width: size, height: size, top, left }}
    />
);

const ContactDetailCard = ({ icon, label, value, link, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative p-6 rounded-2xl transition-all duration-500"
    >
        {/* Glowing Background Light behind card */}
        <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-full" />
        
        <div className="relative z-10 flex flex-col items-center">
            {/* Animated Icon Container */}
            <div className="w-16 h-16 rounded-full border-2 border-yellow-500/30 group-hover:border-yellow-500 
                          flex items-center justify-center mb-4 text-yellow-500 text-2xl 
                          shadow-[0_0_15px_rgba(234,179,8,0.1)] group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
                          transition-all duration-500 bg-black">
                {icon}
            </div>
            
            <h3 className="text-xs font-black tracking-[0.2em] text-gray-500 group-hover:text-yellow-500 transition-colors mb-2 uppercase">
                {label}
            </h3>

            {link ? (
                <a href={link} className="text-white hover:text-yellow-400 transition font-medium text-sm">
                    {value}
                </a>
            ) : (
                <p className="text-white font-medium text-sm">{value}</p>
            )}
        </div>
    </motion.div>
);

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6 bg-black text-white overflow-hidden">
            
            {/* --- Aesthetic Floating Bubbles --- */}
            <FloatingBubble size="250px" top="10%" left="-5%" delay={0} />
            <FloatingBubble size="150px" top="70%" left="85%" delay={2} />
            <FloatingBubble size="100px" top="40%" left="45%" delay={4} />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                
                {/* Heading with Ghost Text */}
                <div className="relative mb-20">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.05 }}
                        className="absolute inset-0 flex items-center justify-center text-[100px] md:text-[180px] font-black pointer-events-none select-none uppercase tracking-tighter"
                    >
                        Contact
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black relative z-10 tracking-tighter">
                        Get In <span className="text-yellow-500">Touch.</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)]"></div>
                </div>

                <p className="text-gray-400 max-w-lg mx-auto mb-16 font-medium">
                    I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {contactDetails.map((item, index) => (
                        <ContactDetailCard key={index} index={index} {...item} />
                    ))}
                </div>

                {/* --- Aesthetic "Have a Question" Section --- */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative py-12 px-6 rounded-3xl border border-yellow-500/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md max-w-2xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-6 italic tracking-tight">Have a specific question?</h3>
                    
                    <motion.a 
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(234,179,8,0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:zainablakho2005@gmail.com"
                        className="relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-black text-black transition duration-300 ease-out bg-yellow-500 rounded-full group uppercase tracking-widest shadow-lg"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500"></span>
                        <span className="relative">Click Here</span>
                    </motion.a>
                </motion.div>

                {/* --- Social Footer --- */}
                <div className="mt-24 pt-12 border-t border-white/5">
                    <p className="text-xs font-bold tracking-[0.3em] text-gray-600 mb-8 uppercase">Find me on</p>
                    <div className="flex justify-center space-x-8">
                        {[FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram].map((Icon, i) => (
                            <motion.a 
                                key={i}
                                whileHover={{ y: -5, color: '#eab308' }}
                                href="#" 
                                className="text-gray-500 text-2xl transition-colors duration-300"
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}