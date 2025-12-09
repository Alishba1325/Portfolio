//  import React from 'react'

// export default function About() {
//   return (
//    <section id="about" className="py-20 px-6 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-12 fade-in" style={{ animationDelay: '0.1s' }}>About Me</h2>
//      <div className="max-w-4xl mx-auto text-center">
//         <p className="text-gray-700 mb-4 fade-in" style={{ animationDelay: '0.3s' }}>
//           Hi! I'm Alishba, a passionate Data Analyst And Machine Learning AI  
//            I love creating beautiful, responsive, and user-friendly web interfaces.
//         </p>
//        <p className="text-gray-700 fade-in" style={{ animationDelay: '0.5s' }}>
//            I enjoy solving problems, learning new technologies, and building projects that make an impact.
//         </p>
//       </div>
//    </section>
//   )
// }


// import 
import React, { useState, useEffect } from 'react';
import profile from "../assets/Alishba.png"; 

// --- Typing Effect Logic ---
const roles = ['Artificial Intelligence', 'Data Analyst', 'Web Developer', 'ML/AI Expert'];
const TYPING_SPEED = 150; 
const DELETING_SPEED = 100; 
const PAUSE_DURATION = 1500; 

const Typewriter = () => {
    const [currentText, setCurrentText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[roleIndex];

            if (isDeleting) {
                setCurrentText(prev => fullText.substring(0, prev.length - 1));
            } else {
                setCurrentText(prev => fullText.substring(0, prev.length + 1));
            }

            const isFull = !isDeleting && currentText === fullText;
            const isEmpty = isDeleting && currentText === '';

            if (isFull) {
                setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
            } else if (isEmpty) {
                setIsDeleting(false);
                setRoleIndex(prev => (prev + 1) % roles.length);
            }
        };

        let delay = TYPING_SPEED;
        if (isDeleting) {
            delay = DELETING_SPEED;
        }

        const timer = setTimeout(handleTyping, delay);

        return () => clearTimeout(timer); 
    }, [currentText, isDeleting, roleIndex]);

    return (
        <span className="text-4xl md:text-5xl font-light text-white min-h-[50px] inline-block">
            {currentText}
            {/* Blinking cursor effect */}
            <span className="ml-1 animate-pulse border-r-2 border-yellow-500">
                &nbsp;
            </span>
        </span>
    );
};
// --- End of Typing Effect Logic ---


const name = "Alishba Jawaid";
const specialtyLine2 = "A Computer Systems Engineer";


export default function Home() {
    return (
        <section id="home" className="bg-black text-white min-h-screen pt-20 flex items-center">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
                
                {/* Left Side: Text Content */}
                <div className="md:w-1/2 text-left space-y-4 md:space-y-6">
                    
                    <p className="text-xl tracking-widest text-white">HELLO!</p>
                    
                    {/* Name: Split and style the last name/word in yellow */}
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                        I'm <span className="text-yellow-500">{name.split(' ')[0]}</span>
                        <br />
                        <span className="text-yellow-500">{name.split(' ')[1] || 'Name'}</span>
                    </h1>
                    
                    {/* Dynamic Specialty Line */}
                    <h2 className="text-4xl md:text-5xl font-light text-white">
                        <Typewriter />
                    </h2>
                    
                    {/* Static Specialty Line */}
                    <p className="text-2xl md:text-3xl text-white pt-2">
                        {specialtyLine2}
                    </p>
                    
                    {/* FIX: Button updated to match provided CSS for transparent background and white outline */}
                    <a 
                        href="https://github.com/ZLakho" // Updated link
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-8 px-6 py-3 
                                   bg-transparent text-white text-xs font-semibold 
                                   uppercase tracking-widest rounded-full 
                                   border border-white/50
                                   hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        My works
                    </a>
                </div>
                
                {/* Right Side: Image Placeholder */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src={profile}
                        alt="Alishba Jawaid Professional Portrait"
                        className="w-full max-w-lg h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}