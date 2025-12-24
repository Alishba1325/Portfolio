
// 

// import React from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//     { 
//         title: 'Sales Forecasting using Walmart Dataset', 
//         description: 'Developed Sales Forecasting models using ARIMA and Prophet algorithms for trend analysis and prediction.', 
//         link: '#',
//         tags: ["Python", "ML", "ARIMA"]
//     },
//     { 
//         title: 'Electricity Consumption Dashboard', 
//         description: 'Designed an interactive dashboard using Power BI for visualizing and analyzing electricity consumption data.', 
//         link: '#',
//         tags: ["Power BI", "Data Viz"]
//     },
//     { 
//         title: 'Customer Segmentation for E-Commerce', 
//         description: 'Applied K-Means clustering to E-Commerce data to achieve distinct customer segmentation for targeted marketing strategies.', 
//         link: '#',
//         tags: ["Clustering", "Scikit-Learn"]
//     },
//     { 
//         title: 'Retail Data EDA & Visualization', 
//         description: 'Conducted Exploratory Data Analysis (EDA), preprocessing, cleaning, and visualization on retail datasets.', 
//         link: '#',
//         tags: ["Pandas", "Seaborn"]
//     },
//     { 
//         title: 'Movie Rating Prediction', 
//         description: 'Built a Movie Rating Prediction system using Collaborative Filtering techniques.', 
//         link: '#',
//         tags: ["Recommender", "AI"]
//     },
//     { 
//         title: 'Spam Classification Model', 
//         description: 'Developed a machine learning model for SMS/Email Spam Classification.', 
//         link: '#',
//         tags: ["NLP", "Classification"]
//     },
// ];

// const ProjectCard = ({ project, index }) => (
//     <motion.div 
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         whileHover={{ y: -10 }}
//         className="group relative w-full max-w-sm"
//     >
//         {/* Yellowish Glow Background behind the card */}
//         <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/40 via-orange-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        
//         {/* Main Project Card Content */}
//         <div className="relative h-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 group-hover:border-yellow-500/50 p-7 rounded-2xl flex flex-col justify-between overflow-hidden shadow-2xl">
            
//             {/* Top Accent Light (Circle Bubble Effect) */}
//             <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500/10 blur-2xl rounded-full group-hover:bg-yellow-500/20 transition-all"></div>

//             <div>
//                 {/* Project Tags */}
//                 <div className="flex gap-2 mb-4">
//                     {project.tags.map((tag, i) => (
//                         <span key={i} className="text-[9px] uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
//                             {tag}
//                         </span>
//                     ))}
//                 </div>

//                 <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-500 transition-colors leading-tight">
//                     {project.title}
//                 </h3>
                
//                 <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300">
//                     {project.description}
//                 </p>
//             </div>

//             {/* View Project Link with Icon */}
//             <a 
//                 href={project.link} 
//                 className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:text-white transition-all text-xs uppercase tracking-widest"
//             >
//                 View Project Link
//                 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                 </svg>
//             </a>
//         </div>
//     </motion.div>
// );

// export default function Projects() {
//     return (
//         <section id="projects" className="relative py-32 px-6 bg-black text-white overflow-hidden">
            
//             {/* Background Aesthetic Bubbles (Inspired by port.jpg) */}
//             <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full animate-pulse"></div>
//             <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full"></div>

//             <div className="max-w-7xl mx-auto relative z-10">

//                 {/* --- Section Heading --- */}
//                 <div className="relative text-center mb-24">
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 0.03 }}
//                         className="absolute inset-0 flex items-center justify-center text-[100px] md:text-[200px] font-black text-white pointer-events-none select-none uppercase leading-none"
//                     >
//                         Works
//                     </motion.div>
                    
//                     <motion.h2 
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         className="text-5xl md:text-7xl font-black relative z-10 text-white tracking-tighter"
//                     >
//                         Selected <span className="text-yellow-500">Projects.</span>
//                     </motion.h2>
//                     <p className="text-gray-400 mt-4 relative z-10 font-medium tracking-wide">
//                         Exploring the intersection of Data Science and Web Development.
//                     </p>
//                 </div>

//                 {/* --- Projects Grid --- */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//                     {projects.map((project, i) => (
//                         <ProjectCard key={i} project={project} index={i} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// import React from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//     { 
//         title: 'Sales Forecasting using Walmart Dataset', 
//         description: 'Developed Sales Forecasting models using ARIMA and Prophet algorithms for trend analysis and prediction.', 
//         link: 'https://github.com/yourusername/sales-forecasting', // <-- Apni GitHub link yahan dalein
//         tags: ["Python", "ML", "ARIMA"]
//     },
//     { 
//         title: 'Electricity Consumption Dashboard', 
//         description: 'Designed an interactive dashboard using Power BI for visualizing and analyzing electricity consumption data.', 
//         link: 'https://github.com/Alishba1325/Electricity-consumption-calculator-', // <-- Power BI publish link
//         tags: ["Power BI", "Data Viz"]
//     },
//     { 
//         title: 'Customer Segmentation for E-Commerce', 
//         description: 'Applied K-Means clustering to E-Commerce data to achieve distinct customer segmentation.', 
//         link: 'https://github.com/yourusername/customer-segmentation', 
//         tags: ["Clustering", "Scikit-Learn"]
//     },
//     { 
//         title: 'Retail Data EDA & Visualization', 
//         description: 'Conducted Exploratory Data Analysis (EDA), preprocessing, cleaning, and visualization on retail datasets.', 
//         link: 'https://github.com/yourusername/retail-eda', 
//         tags: ["Pandas", "Seaborn"]
//     },
//     { 
//         title: 'Movie Rating Prediction', 
//         description: 'Built a Movie Rating Prediction system using Collaborative Filtering techniques.', 
//         link: 'https://github.com/yourusername/movie-prediction', 
//         tags: ["Recommender", "AI"]
//     },
//     { 
//         title: 'Spam Classification Model', 
//         description: 'Developed a machine learning model for SMS/Email Spam Classification.', 
//         link: 'https://github.com/yourusername/spam-classifier', 
//         tags: ["NLP", "Classification"]
//     },
// ];

// const ProjectCard = ({ project, index }) => (
//     <motion.div 
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         whileHover={{ y: -10 }}
//         className="group relative w-full max-w-sm h-full"
//     >
//         {/* Glow Background Effect */}
//         <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
        
//         <div className="relative h-full bg-[#0a0a0a] border border-white/10 group-hover:border-yellow-500/50 p-7 rounded-2xl flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500">
            
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500/5 blur-2xl rounded-full group-hover:bg-yellow-500/10 transition-all"></div>

//             <div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag, i) => (
//                         <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 bg-yellow-500/5 px-2.5 py-1 rounded-full border border-yellow-500/20">
//                             {tag}
//                         </span>
//                     ))}
//                 </div>

//                 <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-500 transition-colors leading-tight">
//                     {project.title}
//                 </h3>
                
//                 <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300">
//                     {project.description}
//                 </p>
//             </div>

//             {/* View Project Link - Ab ye clickable hai! */}
//             <a 
//                 href={project.link} 
//                 target="_blank"  // Naye tab mein khulega
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-yellow-500 font-black hover:text-white transition-all text-xs uppercase tracking-[0.2em]"
//             >
//                 View Project Link
//                 <motion.svg 
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Infinity, duration: 1.5 }}
//                     className="w-4 h-4" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                 </motion.svg>
//             </a>
//         </div>
//     </motion.div>
// );

// export default function Projects() {
//     return (
//         <section id="projects" className="relative py-32 px-6 bg-black text-white overflow-hidden">
            
//             {/* Aesthetic Floating Bubbles */}
//             <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//                 <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full"></div>
//                 <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full"></div>
//             </div>

//             <div className="max-w-7xl mx-auto relative z-10">

//                 <div className="relative text-center mb-28">
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 0.03 }}
//                         className="absolute inset-0 flex items-center justify-center text-[100px] md:text-[220px] font-black text-white pointer-events-none select-none uppercase leading-none"
//                     >
//                         Works
//                     </motion.div>
                    
//                     <motion.h2 
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         className="text-5xl md:text-7xl font-black relative z-10 text-white tracking-tighter uppercase italic"
//                     >
//                         Selected <span className="text-yellow-500">Projects.</span>
//                     </motion.h2>
//                     <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.6)]"></div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {projects.map((project, i) => (
//                         <ProjectCard key={i} project={project} index={i} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { 
        title: 'Sales Forecasting using Walmart Dataset', 
        description: 'Developed Sales Forecasting models using ARIMA and Prophet algorithms for trend analysis and prediction.', 
        link: 'https://github.com/yourusername/sales-forecasting', 
        tags: ["Python", "ML", "ARIMA"],
        output: 'https://link-to-your-chart-or-image1.png' // <-- Output preview
    },
    { 
        title: 'Electricity Consumption Dashboard', 
        description: 'Designed an interactive dashboard using Power BI for visualizing and analyzing electricity consumption data.', 
        link: 'https://github.com/Alishba1325/Electricity-consumption-calculator-', 
        tags: ["Power BI", "Data Viz"],
        output: '/image/electricityconsumptioncalculator.png' // <-- Output preview
    },
    { 
        title: 'Customer Segmentation for E-Commerce', 
        description: 'Applied K-Means clustering to E-Commerce data to achieve distinct customer segmentation.', 
        link: 'https://github.com/yourusername/customer-segmentation', 
        tags: ["Clustering", "Scikit-Learn"],
        output: 'https://link-to-your-chart-or-image2.png'
    },
    { 
        title: 'Retail Data EDA & Visualization', 
        description: 'Conducted Exploratory Data Analysis (EDA), preprocessing, cleaning, and visualization on retail datasets.', 
         link: 'https://github.com/yourusername/retail-eda', 
        tags: ["Pandas", "Seaborn"]
     },{
     
      title: 'Movie Rating Prediction', 
       description: 'Built a Movie Rating Prediction system using Collaborative Filtering techniques.', 
         link: 'https://github.com/yourusername/movie-prediction', 
         tags: ["Recommender", "AI"]
    },
    { 
        title: 'Spam Classification Model', 
        description: 'Developed a machine learning model for SMS/Email Spam Classification.', 
        link: 'https://github.com/yourusername/spam-classifier', 
        tags: ["NLP", "Classification"]
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
