

// 
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    { 
        role: 'Data Analyst', 
        company: 'Glooble, Egypt', 
        period: 'Jul 2025 – Aug 2025', 
        description: 'Assisted in data cleaning, visualizations, performance reporting, and trend analysis. Generated insights for business decision-making using Python and SQL.'
    },
    { 
        role: 'AI Trainee', 
        company: 'Arch Tech Technologies', 
        period: 'Ongoing', 
        description: 'Worked on AI tasks including model training, data preprocessing, and ML workflows. Collaborated on analytics dashboards and prediction models.'
    },
    {
        role: 'Sales Forecasting Project',
        company: 'Walmart Dataset',
        period: 'Project Phase',
        description: 'Developed sales forecasting models using ARIMA and Prophet algorithms to predict future retail trends.'
    },
    {
        role: 'Customer Segmentation Project',
        company: 'E-Commerce Data',
        period: 'Project Phase',
        description: 'Applied K-Means clustering for E-Commerce customer segmentation to identify high-value consumer groups.'
    },
];

// Aesthetic Card Component with Glowing Border
const ExperienceCard = ({ exp, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
        >
            {/* The Outer Glowing Layer (Yellowish Light Background) */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/50 to-orange-600/0 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            
            {/* The Main Container */}
            <div className="relative h-full bg-[#080808] border border-white/10 group-hover:border-yellow-500/50 p-8 rounded-2xl transition-all duration-300">
                
                {/* Top Glowing Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/5 blur-[30px] rounded-full pointer-events-none"></div>

                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                            {exp.role}
                        </h3>
                        <p className="text-yellow-500/80 font-medium tracking-wide text-sm mt-1">
                            at {exp.company}
                        </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {exp.period}
                    </span>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                    {exp.description}
                </p>

                {/* Bottom Decorative Line */}
                <div className="mt-6 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-yellow-500 to-transparent transition-all duration-500"></div>
            </div>
        </motion.div>
    );
};

export default function Experience() {
    return (
        <section id="experience" className="relative py-32 px-6 bg-[#000000] text-white overflow-hidden">
            
            {/* --- Aesthetic Background Glows --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-900/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- Ghost Text & Heading Area --- */}
                <div className="relative text-center mb-24">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.03 }}
                        className="absolute inset-0 flex items-center justify-center text-[80px] md:text-[180px] font-black text-white pointer-events-none select-none uppercase leading-none z-0"
                    >
                        Timeline
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black relative z-10 text-white tracking-tighter">
                            Professional <span className="text-yellow-500">Experience.</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                    </motion.div>
                </div>

                {/* --- Cards Grid --- */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10">
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={i} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}