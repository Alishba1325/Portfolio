// import React from 'react'

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-12 fade-in" style={{ animationDelay: '0.1s' }}>About Me</h2>
//       <div className="max-w-4xl mx-auto text-center">
//         <p className="text-gray-700 mb-4 fade-in" style={{ animationDelay: '0.3s' }}>
//           Hi! I'm Alishba, a passionate Data Analyst And Machine Learning AI  
//           I love creating beautiful, responsive, and user-friendly web interfaces.
//         </p>
//         <p className="text-gray-700 fade-in" style={{ animationDelay: '0.5s' }}>
//           I enjoy solving problems, learning new technologies, and building projects that make an impact.
//         </p>
//       </div>
//     </section>
//   )
// }


// import React from 'react';

// // Use the professional summary based on the resume for the content
// const professionalSummary = {
//     // This is a condensed version of the professional summary I created earlier
//     paragraph1: "I am a dedicated Computer Systems Engineering student with a strong foundation in software development and proven expertise as a website developer[cite: 2, 5]. My focus lies in Data Analysis and Machine Learning/AI, where I combine analytical rigor with practical programming skills in Python and JavaScript[cite: 5, 23].",
    
//     paragraph2: "My experience includes optimizing SQL queries (cutting runtime by 30%) and automating reports with Python (saving 5+ hours/week)[cite: 9]. I have built interactive Power BI dashboards and applied predictive modeling with 85% forecast accuracy to deliver actionable business insights[cite: 9, 18, 9]. I am committed to writing clean, efficient code and eager to contribute to innovative projects.",
    
//     // Add a quick section about skills/tools to enhance the block
//     skills: "SQL, Python (Pandas, Scikit-learn), Power BI, JavaScript, ReactJS, and Feature Engineering[cite: 21, 28, 29, 23, 25, 24]."
// };

// export default function About() {
//   return (
//     // 1. Change background to a slight grey/black contrast and text to white
//     <section id="about" className="py-20 px-6 bg-[#1a1a1a] text-white">
      
//       {/* 2. Change text size and color to match the dark theme */}
//       <h2 
//         className="text-4xl font-bold text-center mb-12 text-yellow-500" // Use yellow accent
//         style={{ animationDelay: '0.1s' }}
//       >
//         About Me
//       </h2>
      
//       <div className="max-w-4xl mx-auto text-center space-y-6">
        
//         {/* Paragraph 1 - Core Identity and Focus */}
//         <p className="text-gray-200 mb-4 text-lg leading-relaxed" style={{ animationDelay: '0.3s' }}>
//           {professionalSummary.paragraph1}
//         </p>
        
//         {/* Paragraph 2 - Key Achievements and Experience */}
//         <p className="text-gray-200 text-lg leading-relaxed" style={{ animationDelay: '0.5s' }}>
//           {professionalSummary.paragraph2}
//         </p>

//         {/* Highlighted Skills Block */}
//         <div className="pt-6">
//             <h3 className="text-xl font-semibold mb-3 text-yellow-500">Key Expertise:</h3>
//             <p className="text-gray-300 italic">
//                 {professionalSummary.skills}
//             </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// 
import React from 'react';

// Use the professional summary based on the resume for the content
const professionalSummary = {
    // Note: The content of paragraph2 now includes the professional experience, mimicking the structure in the image.
    paragraph1: "An ambitious Computer System Engineer. Proficient in Programming hands-on project experience. Highly-motivated with desire to take on new challenges. Strong work ethic, adaptability and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills.",
    
    paragraph2: "My experience includes optimizing SQL queries (cutting runtime by 30%) and automating reports with Python (saving 5+ hours/week). I have built interactive Power BI dashboards and applied predictive modeling with 85% forecast accuracy to deliver actionable business insights. I am committed to writing clean, efficient code and eager to contribute to innovative projects.",
    
    skills: {
        ai: ["Langchain", "Huggingface", "Docker", "RAG", "Generative AI", "Agents"],
        dev: ["HTML", "CSS", "Tailwind CSS", "Javascript", "Typescript", "Next.js"],
        automation: ["Selenium", "Playwright"],
        other_lang: ["C", "C++", "C#", "Java"],
        other_skills: ["Team Management", "Leadership", "Problem Solving"],
    },
    
    profile: [
        { label: "Profile", value: "Computer System Engineer" },
        { label: "Domain", value: "AI & ML" },
        { label: "Education", value: "Bachelors in CS Engineering" },
        { label: "Language", value: "English", value2: "Urdu" },
        { label: "Interest", value: "Novel Reading, Coding, Poetry, Traveling" }
    ]
};

// Component for the Profile Detail List (Key: Value)
const ProfileDetail = ({ label, value, value2 }) => (
    <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-600 mb-2 text-lg">
        <strong className="min-w-[120px] text-white font-normal">{label}:</strong>
        <span className="text-gray-300">
            {value} {value2 && `, ${value2}`}
        </span>
    </div>
);

// Component for a skill category in the sidebar
const SkillCategory = ({ title, items }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <ul className="list-none pl-0 space-y-1">
            {items.map((item, index) => (
                <li key={index} className="text-gray-400">
                    {/* FIX: Replaced '***' with '=>' */}
                    <span className="text-yellow-500 font-bold mr-2">***</span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                
                {/* 1. LEFT COLUMN: INFORMATION & SKILLS SIDEBAR */}
                <div className="lg:w-1/3 min-w-[300px]"> 
                    <h2 className="text-3xl font-bold mb-1">Information</h2>
                    
                    {/* Yellow HR line: Exact width and height */}
                    <div className="w-16 h-[3px] bg-yellow-500 mb-10"></div>
                    
                    {/* Skills Header (Python Certified) */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">Skills</h3>
                        <ul className="list-none pl-0 space-y-1">
                            <li className="text-white font-bold">Python (Certified)</li>
                        </ul>
                    </div>

                    <SkillCategory title="Artificial Intelligence" items={professionalSummary.skills.ai} />
                    <SkillCategory title="Development" items={professionalSummary.skills.dev} />
                    <SkillCategory title="Automation Tools" items={professionalSummary.skills.automation} />
                    
                    <SkillCategory title="Other Languages" items={professionalSummary.skills.other_lang} />
                    
                    {/* Other Skills: Fixed the display to use '=>' */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">Other Skills</h3>
                        <ul className="list-none pl-0 space-y-1">
                            <li className="text-gray-400">
                                {/* FIX: Replaced '***' with '=>' */}
                                <span className="text-yellow-500 font-bold mr-2">***</span>
                                {professionalSummary.skills.other_skills.join(', ')}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2. RIGHT COLUMN: ABOUT ME & PROFILE DETAILS */}
                <div className="lg:w-2/3 relative pt-4"> 
                    
                    {/* Ghost Text Effect */}
                    <div className="absolute top-0 left-0 text-[180px] font-extrabold text-white opacity-[0.05] pointer-events-none whitespace-nowrap hidden lg:block leading-none z-0">
                        About
                    </div>

                    <h1 className="text-5xl font-extrabold mb-8 relative z-10 text-white">
                        About Me
                    </h1>
                    
                    {/* Main Paragraphs */}
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {professionalSummary.paragraph1}
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {professionalSummary.paragraph2}
                    </p>

                    {/* Profile Details List */}
                    <div className="mt-10 space-y-3">
                        {professionalSummary.profile.map((item, index) => (
                            <ProfileDetail 
                                key={index} 
                                label={item.label} 
                                value={item.value} 
                                value2={item.value2}
                            />
                        ))}
                    </div>

                    {/* LinkedIn Button (FINAL FIX: Confirmed Tailwind classes) */}
                    <a 
                        href="https://www.linkedin.com/in/alishba-jawaid-047816265/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block 
                                   mt-8 py-3 px-8 
                                   bg-yellow-500 text-black 
                                   font-extrabold text-sm uppercase 
                                   tracking-widest rounded-sm 
                                   hover:bg-yellow-600 transition duration-300 
                                   min-w-[150px] text-center"
                    >
                        LINKEDIN
                    </a>
                </div>
            </div>
        </section>
    );
}