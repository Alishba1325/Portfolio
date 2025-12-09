// import React from 'react'

// export default function Resume() {
//   return (
//     <section id="resume" className="py-20 px-6 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-12 fade-in" style={{ animationDelay: '0.1s' }}>Resume & Education</h2>
//       <div className="max-w-4xl mx-auto text-center">
//         <div className="card fade-in mb-6 transform hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
//           <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
//           <p className="text-gray-500">ABC University | 2020 - 2024</p>
//         </div>
//         <div className="mb-6 fade-in" style={{ animationDelay: '0.5s' }}>
//           <a 
//             href="#" 
//             className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }
// import React from 'react'

// // Component for a single Education Card
// const EducationCard = ({ degree, institution, years }) => (
//     // Styling matches the centered white card on the black background
//     <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto text-black text-center">
//         <h3 className="text-xl font-bold mb-1">{degree}</h3>
//         {/* Adjusted year color to match the subtle text color */}
//         <p className="text-gray-700">{institution} | {years}</p>
//     </div>
// );

// export default function Resume() {
//     return (
//         // Changed background to black and default text to white
//         <section id="resume" className="py-20 px-6 bg-black text-white">
//             <div className="max-w-7xl mx-auto text-center pt-10 pb-20">
                
//                 {/* Ghost Text for Resume & Education (Matches the design) */}
//                 <div className="relative mb-12">
//                      <div className="absolute inset-0 flex items-center justify-center 
//                                     text-[180px] font-extrabold text-white opacity-[0.05] 
//                                     pointer-events-none whitespace-nowrap leading-none z-0">
//                         Resume
//                     </div>
                    
//                     {/* Main Heading (Adjusted size and style) */}
//                     <h2 className="text-5xl font-extrabold relative z-10 text-white inline-block">
//                         Resume & Education
//                     </h2>
//                 </div>

//                 {/* Education Card Container */}
//                 <div className="mt-12">
//                     <EducationCard 
//                         degree="Bachelor of Science in Computer Science" 
//                         institution="ABC University" 
//                         years="2020 - 2024"
//                     />
//                 </div>
                
//                 {/* Download Resume Button (Changed to Yellow/Black style) */}
//                 <a 
//                     href="/path/to/your/resume.pdf" 
//                     download 
//                     // Yellow button styling to match LinkedIn button
//                     className="inline-block mt-10 py-3 px-8 
//                                bg-yellow-500 text-black 
//                                font-bold text-lg tracking-wider rounded-lg 
//                                hover:bg-yellow-600 transition duration-300"
//                 >
//                     Download Resume
//                 </a>
//             </div>
//         </section>
//     )
// }
import React from 'react';

// Actual Education Data from Alishba Jawaid's CV
const educationData = [
    {
        degree: "Bachelors in Computer System Engineering",
        institution: "DUET",
        period: "Oct 2022 - Present",
        gpa: "GPA: 3.944"
    },
    {
        degree: "Intermediate (Pre-Engineering)",
        institution: "BAMM PECHS Govt. College for Women",
        period: "2019 - 2021",
        percentage: "86%"
    },
];

// Component for a single Education Card (Styled like Image 33.png)
const EducationCard = ({ degree, institution, period, gpa, percentage }) => (
    // Card styling mimics the black background with yellow border outline (Image 33.png)
    <div className="bg-black p-6 rounded-lg border border-yellow-500 shadow-xl 
                    text-white text-center h-full flex flex-col justify-center 
                    transform hover:scale-[1.05] transition duration-500 min-h-[150px]">
        
        {/* Period is yellow and bold, like the reference image */}
        <p className="text-yellow-500 font-bold mb-1 uppercase text-sm">{period}</p>
        
        <h3 className="text-xl font-bold mb-1 leading-tight">{degree}</h3>
        
        {/* Institution and GPA/Percentage in subtle gray text */}
        <p className="text-gray-400 text-sm">
            {institution}
            {(gpa || percentage) && ` | ${gpa || percentage}`}
        </p>
    </div>
);

// Define the introductory paragraph content here
const resumeParagraph = "Hi, I'm Alishba Jawaid, a motivated Computer Systems Engineering student with strong skills in software development, Python, JavaScript, data analysis, and web development. I have developed expertise in AI/ML model building, dashboard creation, and full-stack application development. My passion lies in delivering innovative, high-quality solutions. I am committed to continuous learning and eager to contribute to collaborative teams in data analytics and AI/ML, aligning my technical expertise with leadership aspirations in the tech industry.";


export default function Resume() {
    return (
        <section id="resume" className="py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto text-center pt-10 pb-20">
                
                {/* Ghost Text for Resume & Education (Matches the design) */}
                <div className="relative mb-12">
                     <div className="absolute inset-0 flex items-center justify-center 
                                    text-[180px] font-extrabold text-white opacity-[0.05] 
                                    pointer-events-none whitespace-nowrap leading-none z-0">
                        Resume
                    </div>
                    
                    {/* Main Heading */}
                    <h2 className="text-5xl font-extrabold relative z-10 text-white inline-block">
                        Resume & Education
                    </h2>
                </div>

                {/* FIX: INTRODUCTORY PARAGRAPH ADDED HERE */}
                <p className="max-w-3xl mx-auto text-gray-300 text-center mb-16 relative z-10 leading-relaxed">
                    {resumeParagraph}
                </p>
                {/* END OF FIX */}

                {/* Education Cards Container (2-Column Layout, Image 33.png) */}
                <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {educationData.map((edu, index) => (
                        <EducationCard 
                            key={index} 
                            degree={edu.degree} 
                            institution={edu.institution} 
                            period={edu.period}
                            gpa={edu.gpa}
                            percentage={edu.percentage}
                        />
                    ))}
                </div>
                
                {/* Download Resume Button (Yellow/Black style) */}
                <a 
                    href="/path/to/your/resume.pdf" // Update with the actual file path
                    download 
                    className="inline-block mt-16 py-3 px-8 
                               bg-yellow-500 text-black 
                               font-bold text-lg tracking-wider rounded-lg 
                               hover:bg-yellow-600 transition duration-300"
                >
                    DOWNLOAD CV
                </a>
            </div>
        </section>
    );
}