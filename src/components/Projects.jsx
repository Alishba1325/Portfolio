

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { 
        title: 'Sales Dashboard', 
        description: ' Plotly and Streamlit to visualize sales trends, comparisons, and growth rates in a professional and interactive manner.', 
        link: 'https://github.com/Alishba1325/ApexcifyTechnologys_-TASK2MONTHLY-SALE-ANALYSIS', 
        tags: ["Python", "ML", "ARIMA" , "Liberaries"],
        output: 'public/image/month wise sales analysis ss 1.png',
        output: 'public/image/monthly sales ss 2.png' // <-- Output preview
    },
    { 
        title: 'Electricity Consumption Dashboard', 
        description: 'Designed an interactive dashboard using Power BI for visualizing and analyzing electricity consumption data.', 
        link: 'https://github.com/Alishba1325/Electricity-consumption-calculator-', 
        tags: ["Power BI", "Data Viz"],
        output: '/image/electricityconsumptioncalculator.png' // <-- Output preview
    },
    { 
        title: 'AI Internship Intelligence Command Center', 
        description: ' AI Internship Intelligence Command Center is a high-end, futuristic data analytics platform designed to monitor, analyze, and optimize internship programs. Leveraging a Cyberpunk-inspired UI, this tool transforms raw enrollment data into actionable insights, helping organizations increase completion rates and identify "at-risk" interns', 
        link: 'https://github.com/Alishba1325/Internship-Program-Analysis', 
        tags: ["Clustering", "Scikit-Learn"],
        output: '/image/ai inter project ss 1.png'
    },
    { 
        title: 'E‑Commerce Business Insights', 
        description: 'End‑to‑end analytics workflow (load → clean → feature engineering → EDA → segmentation → insights)Conduct a full-cycle analysis on the Olist Brazilian E‑Commerce dataset and produce an executive, decision-oriented report', 
         link: 'https://github.com/Alishba1325/E-Commerce-Olist-Analysis-', 
        tags: ["Pandas", "Seaborn","Sciket Learn " , " ML Model "],
         output: '/image/E commerce ss1 .png',
          output: '/image/e commerce ss 2.png'
     },
     {
     
      title: 'AI anomaly detection — violence & non-violence analysis system', 
       description: 'A full-stack intelligent surveillance platform that detects violent behavior in real time using deep learning models integrated into a MERN web application with OpenCV-powered video processing and an automated alert system..', 
         link: 'https://github.com/Alishba1325/FYP-PROJECT', 
         tags: ["MERN APP ", "AI/DL/ML","DATA ANALYSIS "],
         output: 'public/image/FINAL YEAR PROJECT SS.png'

    },
    { 
        title: 'Spam Classification Model', 
        description: 'Developed a machine learning model for SMS/Email Spam Classification.', 
        link: 'https://github.com/yourusername/spam-classifier', 
        tags: ["NLP", "Classification"]
    },
    { 
        title: 'Fraud Detection ', 
        description: 'Developed a machine learning model for Fraud Detection .', 
        link: 'https://github.com/Alishba1325/fraud', 
        tags: ["NLP", "Classification"],
         output: '/image/FRAUD DETECTION SS .png'

    },
];

const ProjectCard = ({ project, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative w-full max-w-sm h-full"
    >
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        
        <div className="relative h-full bg-[#0a0a0a] border border-white/10 group-hover:border-yellow-500/50 p-7 rounded-2xl flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500">
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500/5 blur-2xl rounded-full group-hover:bg-yellow-500/10 transition-all"></div>

            <div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 bg-yellow-500/5 px-2.5 py-1 rounded-full border border-yellow-500/20">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-500 transition-colors leading-tight">
                    {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300">
                    {project.description}
                </p>

                {/* Output Preview Section */}
                {project.output && (
                    <div className="mb-4">
                        <img src={project.output} alt={`${project.title} preview`} className="rounded-lg shadow-lg w-full object-cover" />
                    </div>
                )}
            </div>

            <a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-500 font-black hover:text-white transition-all text-xs uppercase tracking-[0.2em]"
            >
                View Project Link
                <motion.svg 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </motion.svg>
            </a>
        </div>
    </motion.div>
);

export default function Projects() {
    return (
        <section id="projects" className="relative py-32 px-6 bg-black text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="relative text-center mb-28">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.03 }}
                        className="absolute inset-0 flex items-center justify-center text-[100px] md:text-[220px] font-black text-white pointer-events-none select-none uppercase leading-none"
                    >
                        Works
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black relative z-10 text-white tracking-tighter uppercase italic"
                    >
                        Selected <span className="text-yellow-500">Projects.</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.6)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
