// import React from 'react'

// const experiences = [
//   { role: 'Frontend Developer', company: 'XYZ Company', period: '2023 - Present', description: 'Building responsive web apps with React.' },
//   { role: 'Intern Developer', company: 'ABC Pvt Ltd', period: '2022 - 2023', description: 'Assisted in frontend development and UI design.' },
// ]

// export default function Experience() {
//   return (
//     <section id="experience" className="py-20 px-6 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
//       <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
//         {experiences.map((exp, i) => (
//           <div 
//             key={i} 
//             className="card fade-in transform hover:scale-105 transition-transform duration-500"
//             style={{ animationDelay: `${i * 0.2}s` }}
//           >
//             <h3 className="text-xl font-semibold">{exp.role}</h3>
//             <p className="text-gray-500">{exp.company} | {exp.period}</p>
//             <p className="text-gray-700 mt-2">{exp.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
// import React from 'react'

// [cite_start]// Actual Experience Data from Alishba Jawaid's CV [cite: 10, 13]
// const experiences = [
//     { 
//         role: 'Data Analyst', 
//         company: 'Glooble, Egypt', 
//         period: 'Jul 2025 – Aug 2025', 
//         description: 'Assisted in data cleaning, visualizations, performance reporting, and trend analysis. Generated insights for business decision-making using Python and SQL.' [cite_start]// [cite: 11, 12]
//     },
//     { 
//         role: 'AI Trainee', 
//         company: 'Arch Tech Technologies', 
//         period: '', // No specific period mentioned in source
//         description: 'Worked on AI tasks including model training, data preprocessing, and ML workflows. Collaborated on analytics dashboards and prediction models.' [cite_start]// [cite: 14, 15]
//     },
//     // The portfolio (28.png) shows four cards; you can add more based on your CV/projects here
//     // For example, adding two key projects from your Data Analytics & ML list to fill the grid:
//     {
//         role: 'Sales Forecasting Project',
//         company: 'Walmart Dataset',
//         period: 'Project',
//         description: 'Developed Sales Forecasting models using ARIMA and Prophet algorithms.' [cite_start]// [cite: 35]
//     },
//     {
//         role: 'Customer Segmentation Project',
//         company: 'E-Commerce Data',
//         period: 'Project',
//         description: 'Applied K-Means clustering for E-Commerce customer segmentation.' [cite_start]// [cite: 36]
//     },
// ];

// export default function Experience() {
//     return (
//         <section id="experience" className="py-20 px-6 bg-black text-white">
//             <div className="max-w-7xl mx-auto">
                
//                 {/* Ghost Text for Experience */}
//                 <div className="relative text-center">
//                     <div className="absolute inset-0 flex items-center justify-center 
//                                     text-[180px] font-extrabold text-white opacity-[0.05] 
//                                     pointer-events-none whitespace-nowrap leading-none z-0">
//                         Experience
//                     </div>
                    
//                     {/* Main Heading (Styling matches 28.png) */}
//                     <h2 className="text-5xl font-extrabold mb-12 relative z-10 text-white inline-block">
//                         Experience
//                     </h2>
//                 </div>

//                 {/* Experience Cards Container (Grid layout with dark cards) */}
//                 <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
//                     {experiences.map((exp, i) => (
//                         <div 
//                             key={i} 
//                             // FIX: Applied dark background and yellow border matching 28.png
//                             className="bg-black p-6 md:p-8 rounded-lg border-2 border-yellow-500 
//                                        text-white shadow-xl transform hover:scale-[1.02] 
//                                        transition-transform duration-300" 
//                         >
//                             {/* Role is White and Bold */}
//                             <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                            
//                             {/* Company is Yellow and smaller text */}
//                             <p className="text-yellow-500 font-semibold mb-2 text-sm">
//                                 at {exp.company} {exp.period && `| ${exp.period}`}
//                             </p>
                            
//                             {/* Description is Light Gray */}
//                             <p className="text-gray-300 mt-2">{exp.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

import React from 'react'

// Actual Experience Data from Alishba Jawaid's CV
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
        period: '', 
        description: 'Worked on AI tasks including model training, data preprocessing, and ML workflows. Collaborated on analytics dashboards and prediction models.'
    },
    {
        role: 'Sales Forecasting Project',
        company: 'Walmart Dataset',
        period: 'Project',
        description: 'Developed sales forecasting models using ARIMA and Prophet algorithms.'
    },
    {
        role: 'Customer Segmentation Project',
        company: 'E-Commerce Data',
        period: 'Project',
        description: 'Applied K-Means clustering for E-Commerce customer segmentation.'
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">

                {/* Ghost Text for Experience */}
                <div className="relative text-center">
                    <div className="absolute inset-0 flex items-center justify-center 
                                    text-[180px] font-extrabold text-white opacity-[0.05] 
                                    pointer-events-none whitespace-nowrap leading-none z-0">
                        Experience
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-5xl font-extrabold mb-12 relative z-10 text-white inline-block">
                        Experience
                    </h2>
                </div>

                {/* Cards */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
                    {experiences.map((exp, i) => (
                        <div 
                            key={i}
                            className="bg-black p-6 md:p-8 rounded-lg border-2 border-yellow-500 
                                       text-white shadow-xl transform hover:scale-[1.02] 
                                       transition-transform duration-300"
                        >
                            <h3 className="text-xl font-bold mb-1">{exp.role}</h3>

                            <p className="text-yellow-500 font-semibold mb-2 text-sm">
                                at {exp.company} {exp.period && `| ${exp.period}`}
                            </p>

                            <p className="text-gray-300 mt-2">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
