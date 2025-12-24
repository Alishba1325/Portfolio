
// 
import React from 'react';
import { motion } from 'framer-motion';


const educationData = [
    {
        degree: "Bachelors in Computer System Engineering",
        institution: "DUET",
        period: "OCT 2022 - PRESENT",
        score: "GPA: 3.944",
    },
    {
        degree: "Intermediate (Pre-Engineering)",
        institution: "BAMM PECHS Govt. College for Women",
        period: "2019 - 2021",
        score: "86%",
    }
];

const resumeParagraph = "Hi, I'm Alishba Jawaid, a motivated Computer Systems Engineering student with strong skills in software development, Python, JavaScript, data analysis, and web development. I have developed expertise in AI/ML model building, dashboard creation, and full-stack application development. My passion lies in delivering innovative, high-quality solutions. I am committed to continuous learning and eager to contribute to collaborative teams in data analytics and AI/ML, aligning my technical expertise with leadership aspirations in the tech industry.";

// Reusable Aesthetic Card Component
const EducationCard = ({ edu, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -10 }}
        className="group relative w-full h-full"
    >
        {/* Yellowish Glowing Light Effect (Background) */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/50 via-yellow-200/5 to-transparent rounded-2xl blur-lg opacity-20 group-hover:opacity-60 transition duration-500"></div>
        
        {/* Main Content Container */}
        <div className="relative h-full bg-[#080808] border border-white/10 group-hover:border-yellow-500/50 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300">
            
            <div className="text-yellow-500 font-bold text-xs tracking-[0.3em] mb-4 bg-yellow-500/10 px-4 py-1 rounded-full border border-yellow-500/20">
                {edu.period}
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-yellow-500 transition-colors">
                {edu.degree}
            </h3>
            
            <p className="text-gray-400 text-sm font-medium tracking-wide">
                {edu.institution} 
                <span className="block mt-2 text-yellow-500/80 font-bold italic">{edu.score}</span>
            </p>

            {/* Bottom Accent Decor */}
            <div className="mt-6 w-12 h-1 bg-yellow-500/20 group-hover:w-24 group-hover:bg-yellow-500 transition-all duration-500 rounded-full"></div>
        </div>
    </motion.div>
);

export default function Resume() {
    return (
        <section id="resume" className="relative py-32 px-6 bg-black text-white overflow-hidden">
            
            {/* Background Decorative Element (Golden Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                
                {/* Heading Area with Ghost Text */}
                <div className="relative mb-20">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.04 }}
                        className="absolute inset-0 flex items-center justify-center text-[100px] md:text-[200px] font-black text-white pointer-events-none select-none uppercase leading-none"
                    >
                        Success
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black relative z-10 tracking-tighter"
                    >
                        Resume & <span className="text-yellow-500">Education.</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                </div>

                {/* Intro Paragraph with Aesthetic border */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-3xl mx-auto mb-20 relative"
                >
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-r-2 border-yellow-500/20 px-8">
                        "{resumeParagraph}"
                    </p>
                </motion.div>

                {/* Grid Layout for Education Cards */}
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20 items-stretch">
                    {educationData.map((edu, index) => (
                        <EducationCard key={index} edu={edu} index={index} />
                    ))}
                </div>

                {/* Premium Animated Download Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a 
                        href="/alishbaresume.pdf"
                       
                        download
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-5 px-14 font-black text-black transition duration-300 ease-out bg-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-yellow-500/60"
                    >
                        <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="relative flex items-center gap-4 text-xs uppercase tracking-[0.4em]">
                            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>

                            Download My CV
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}