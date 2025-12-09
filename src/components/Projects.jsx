// import React from 'react'

// const projects = [
//   { title: 'Portfolio Website', description: 'React + Tailwind portfolio clone.', link: '#' },
//   { title: 'E-commerce App', description: 'Fullstack MERN application with JWT auth.', link: '#' },
//   { title: 'Chat App', description: 'Real-time chat using Socket.io.', link: '#' },
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-6 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {projects.map((project, i) => (
//           <div 
//             key={i} 
//             className="card w-80 fade-in transform hover:scale-105 hover:shadow-xl transition-all duration-500"
//             style={{ animationDelay: `${i * 0.2}s` }}
//           >
//             <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//             <p className="text-gray-700 mb-4">{project.description}</p>
//             <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
// 
import React from 'react';

// Actual Project Data from Alishba Jawaid's CV [cite: 34, 29, 30, 31, 32, 33, 35, 36, 37, 38]
const projects = [
    { 
        title: 'Sales Forecasting using Walmart Dataset', 
        description: 'Developed Sales Forecasting models using ARIMA and Prophet algorithms for trend analysis and prediction.', 
        link: '#' 
    },
    { 
        title: 'Electricity Consumption Dashboard', 
        description: 'Designed an interactive dashboard using Power BI for visualizing and analyzing electricity consumption data.', 
        link: '#' 
    },
    { 
        title: 'Customer Segmentation for E-Commerce', 
        description: 'Applied K-Means clustering to E-Commerce data to achieve distinct customer segmentation for targeted marketing strategies.', 
        link: '#' 
    },
    { 
        title: 'Retail Data EDA & Visualization', 
        description: 'Conducted Exploratory Data Analysis (EDA), preprocessing, cleaning, and visualization on retail datasets.', 
        link: '#' 
    },
    { 
        title: 'Movie Rating Prediction', 
        description: 'Built a Movie Rating Prediction system using Collaborative Filtering techniques.', 
        link: '#' 
    },
    { 
        title: 'Spam Classification Model', 
        description: 'Developed a machine learning model for SMS/Email Spam Classification.', 
        link: '#' 
    },
];

// Component for a single Project Card (Styled like Image 32.png)
const ProjectCard = ({ title, description, link }) => (
    // Card uses a dark background with subtle border/shadow effect (Image 32.png)
    <div 
        className="bg-gray-900 p-6 rounded-lg border-t-4 border-yellow-500 shadow-xl 
                   text-white max-w-xs w-full min-h-[250px] flex flex-col justify-between
                   transform hover:scale-[1.02] transition-transform duration-300" 
    >
        <div>
            {/* Title is prominent */}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            {/* Description is gray */}
            <p className="text-gray-400 text-sm mb-4">{description}</p>
        </div>
        {/* Link is yellow */}
        <a 
            href={link} 
            className="text-yellow-500 font-semibold hover:text-yellow-400 transition text-sm"
        >
            View Project Link
        </a>
    </div>
);

export default function Projects() {
    return (
        <section className="py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">

                {/* --- PROJECTS SECTION HEADING --- */}
                <div id="projects" className="relative text-center mb-16 pt-10">
                    
                    {/* Ghost Text */}
                    <div className="absolute inset-0 flex items-center justify-center 
                                    text-[180px] font-extrabold text-white opacity-[0.05] 
                                    pointer-events-none whitespace-nowrap leading-none z-0">
                        Projects
                    </div>
                    
                    {/* Main Heading */}
                    <h2 className="text-5xl font-extrabold relative z-10 text-white inline-block">
                        Projects
                    </h2>
                    
                    {/* Subtitle from Image 32.png */}
                    <p className="text-gray-400 mt-2 relative z-10">
                        Below are the sample projects I have worked on.
                    </p>
                </div>

                {/* --- PROJECTS CARD CONTAINER (Responsive Grid) --- */}
                <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {projects.map((project, i) => (
                        <ProjectCard 
                            key={i} 
                            title={project.title} 
                            description={project.description} 
                            link={project.link} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}