
// 

import React from 'react';
import { motion } from 'framer-motion';

const professionalSummary = {
    paragraph1: "An ambitious Computer System Engineer. Proficient in Programming hands-on project experience. Highly-motivated with desire to take on new challenges. Strong work ethic, adaptability and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills.",
    paragraph2: "My experience includes optimizing SQL queries (cutting runtime by 30%) and automating reports with Python (saving 5+ hours/week). I have built interactive Power BI dashboards and applied predictive modeling with 85% forecast accuracy to deliver actionable business insights.",
    
    skills: {
        dataAnalyst: ["Excel (Advanced)", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        mernStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST APIs"],
        machineLearning: ["Scikit-learn", "Predictive Modeling", "RAG", "Generative AI", "Agents"],
        developmentTools: ["Git & GitHub", "Postman", "Docker", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    
    profile: [
        { label: "Profile", value: "Computer System Engineer" },
        { label: "Domain", value: "AI, ML & Full Stack Dev" },
        { label: "Education", value: "Bachelors in CS Engineering" },
        { label: "Language", value: "English, Urdu" },
        { label: "Interest", value: "Novel Reading, Coding, Poetry, Traveling" }
    ]
};

const StaticBubble = ({ size, top, left, opacity }) => (
    <div 
        className="absolute rounded-full border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-transparent blur-[1px] pointer-events-none z-0"
        style={{ width: size, height: size, top, left, opacity }}
    />
);

const ProfileDetail = ({ label, value }) => (
    <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-3 group">
        <strong className="text-yellow-500 font-medium tracking-wide uppercase text-[10px] md:text-xs">{label}</strong>
        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm md:text-base text-right">
            {value}
        </span>
    </div>
);

const SkillCategory = ({ title, items }) => (
    <div className="mb-6">
        <h3 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] mb-3 border-l-2 border-yellow-500 pl-3">
            {title}
        </h3>
        <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
                <motion.span 
                    key={index} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 hover:border-yellow-500/30 hover:text-yellow-500 transition-all cursor-default"
                >
                    {item}
                </motion.span>
            ))}
        </div>
    </div>
);

export default function About() {
    return (
        <section id="about" className="relative py-24 px-6 bg-[#000000] text-white overflow-hidden">
            
            {/* Aesthetic Backgrounds */}
            <StaticBubble size="400px" top="-100px" left="-150px" opacity={0.1} />
            <StaticBubble size="250px" top="70%" left="85%" opacity={0.1} />
            
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10">
                
                {/* 1. SIDEBAR: Full Tech Stack Portfolio */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-[35%] bg-[#080808] border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden h-fit"
                > 
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[60px] rounded-full"></div>
                    
                    <h2 className="text-2xl font-bold mb-1">Technical Skills</h2>
                    <div className="w-10 h-1 bg-yellow-500 mb-8 rounded-full"></div>

                    <SkillCategory title="MERN Stack Dev" items={professionalSummary.skills.mernStack} />
                    <SkillCategory title="Data Analysis" items={professionalSummary.skills.dataAnalyst} />
                    <SkillCategory title="ML & Artificial Intelligence" items={professionalSummary.skills.machineLearning} />
                    <SkillCategory title="Core Tools" items={professionalSummary.skills.developmentTools} />
                </motion.div>

                {/* 2. MAIN CONTENT AREA */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-[65%] flex flex-col justify-center"
                > 
                    <div className="relative mb-8">
                        <span className="absolute -top-16 -left-4 text-[120px] font-black text-white/[0.02] pointer-events-none select-none uppercase hidden md:block">
                            Engineer
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            About <span className="text-yellow-500">Me.</span>
                        </h1>
                    </div>
                    
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p className="font-light italic border-l-4 border-yellow-500/30 pl-6">
                            {professionalSummary.paragraph1}
                        </p>
                        <p>
                            {professionalSummary.paragraph2}
                        </p>
                    </div>

                    {/* Profile Detail List */}
                    <div className="mt-10 grid grid-cols-1 gap-1 mb-10">
                        {professionalSummary.profile.map((item, index) => (
                            <ProfileDetail key={index} label={item.label} value={item.value} />
                        ))}
                    </div>

                    {/* LinkedIn Button with Premium Animation */}
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/alishba-jawaid-047816265/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center self-start overflow-hidden rounded-full p-4 px-12 font-bold text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] transition duration-300 ease-out bg-yellow-500 hover:shadow-yellow-500/50"
                    >
                        <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-400 to-yellow-600"></span>
                        <span className="relative text-xs uppercase tracking-[0.3em] font-black">
                            LinkedIn
                        </span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}