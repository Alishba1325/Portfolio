
// 

// 
import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    { title: 'Google Data Analytics Professional Certificate', issuer: 'Coursera' },
    { title: 'AI Essentials', issuer: 'Coursera' },
    { title: 'Networking', issuer: 'Cisco Academy' },
    { title: 'Webwizard LRN Certification', issuer: 'LRN Certification' },
];

const CertificationCard = ({ title, issuer, index }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -12 }}
        className="group relative h-full"
    >
        <div className="absolute -inset-1 bg-gradient-to-b from-yellow-500/30 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-[#080808] border border-white/10 group-hover:border-yellow-500/50 shadow-2xl text-center transition-all duration-300 overflow-hidden">
            <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/20">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
            </div>
            <h3 className="text-lg font-black mb-3 uppercase tracking-tight text-white group-hover:text-yellow-500 transition-colors">{title}</h3>
            <p className="text-xs text-gray-500 font-bold tracking-[0.2em] uppercase">{issuer}</p>
        </div>
    </motion.div>
);

// New Component for Animated Golden Bubbles
const GoldenBubble = ({ size, top, left, delay }) => (
    <motion.div
        animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay,
        }}
        className="absolute rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 blur-[60px] pointer-events-none"
        style={{ width: size, height: size, top, left }}
    />
);

export default function Certifications() {
    return (
        <section id="certifications" className="relative py-32 px-6 bg-black text-white overflow-hidden">
            
            {/* --- Golden Yellow Bubbles Background --- */}
            <GoldenBubble size="300px" top="10%" left="-5%" delay={0} />
            <GoldenBubble size="200px" top="60%" left="80%" delay={2} />
            <GoldenBubble size="150px" top="40%" left="40%" delay={4} />
            <GoldenBubble size="250px" top="80%" left="10%" delay={1} />

            <div className="max-w-7xl mx-auto text-center relative z-10">
                
                {/* Heading Area */}
                <div className="relative mb-24">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.03 }}
                        className="absolute inset-0 flex items-center justify-center text-[80px] md:text-[150px] font-black text-white pointer-events-none select-none uppercase"
                    >
                        Success
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black relative z-10 tracking-tighter"
                    >
                        Honors & <span className="text-yellow-500">Certifications.</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)]"></div>
                </div>

                {/* Cards Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {certifications.map((cert, i) => (
                        <CertificationCard key={i} index={i} title={cert.title} issuer={cert.issuer} />
                    ))}
                </div>

                {/* --- Resume Download Section --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative py-16 px-8 rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-yellow-500/5 to-transparent backdrop-blur-sm max-w-4xl mx-auto"
                >
                    <h3 className="text-3xl font-bold mb-4">Want to see my full profile?</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Download my detailed CV to explore my projects, technical expertise, and academic achievements in depth.
                    </p>
                    
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/your-resume.pdf" // Update with your actual file path
                        download
                        className="inline-flex items-center gap-3 px-10 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-yellow-500 transition-all duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download CV
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}