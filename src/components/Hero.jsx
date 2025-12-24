
// import React, { useState, useEffect } from 'react';
// import profile from "../assets/Alishba.png"; 

// // --- Typing Effect Logic ---
// const roles = ['Artificial Intelligence', 'Data Analyst', 'Web Developer', 'ML/AI Expert'];
// const TYPING_SPEED = 150; 
// const DELETING_SPEED = 100; 
// const PAUSE_DURATION = 1500; 

// const Typewriter = () => {
//     const [currentText, setCurrentText] = useState('');
//     const [roleIndex, setRoleIndex] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);

//     useEffect(() => {
//         const handleTyping = () => {
//             const fullText = roles[roleIndex];

//             if (isDeleting) {
//                 setCurrentText(prev => fullText.substring(0, prev.length - 1));
//             } else {
//                 setCurrentText(prev => fullText.substring(0, prev.length + 1));
//             }

//             const isFull = !isDeleting && currentText === fullText;
//             const isEmpty = isDeleting && currentText === '';

//             if (isFull) {
//                 setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
//             } else if (isEmpty) {
//                 setIsDeleting(false);
//                 setRoleIndex(prev => (prev + 1) % roles.length);
//             }
//         };

//         let delay = TYPING_SPEED;
//         if (isDeleting) {
//             delay = DELETING_SPEED;
//         }

//         const timer = setTimeout(handleTyping, delay);

//         return () => clearTimeout(timer); 
//     }, [currentText, isDeleting, roleIndex]);

//     return (
//         <span className="text-4xl md:text-5xl font-light text-white min-h-[50px] inline-block">
//             {currentText}
//             {/* Blinking cursor effect */}
//             <span className="ml-1 animate-pulse border-r-2 border-yellow-500">
//                 &nbsp;
//             </span>
//         </span>
//     );
// };
// // --- End of Typing Effect Logic ---


// const name = "Alishba Jawaid";
// const specialtyLine2 = "A Computer Systems Engineer";


// export default function Home() {
//     return (
//         <section id="home" className="bg-black text-white min-h-screen pt-20 flex items-center">
//             <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
                
//                 {/* Left Side: Text Content */}
//                 <div className="md:w-1/2 text-left space-y-4 md:space-y-6">
                    
//                     <p className="text-xl tracking-widest text-white">HELLO!</p>
                    
//                     {/* Name: Split and style the last name/word in yellow */}
//                     <h1 className="text-6xl md:text-7xl font-bold leading-tight">
//                         I'm <span className="text-yellow-500">{name.split(' ')[0]}</span>
//                         <br />
//                         <span className="text-yellow-500">{name.split(' ')[1] || 'Name'}</span>
//                     </h1>
                    
//                     {/* Dynamic Specialty Line */}
//                     <h2 className="text-4xl md:text-5xl font-light text-white">
//                         <Typewriter />
//                     </h2>
                    
//                     {/* Static Specialty Line */}
//                     <p className="text-2xl md:text-3xl text-white pt-2">
//                         {specialtyLine2}
//                     </p>
                    
//                     {/* FIX: Button updated to match provided CSS for transparent background and white outline */}
//                     <a 
//                         href="https://github.com/Alishba1325" // Updated link
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="inline-block mt-8 px-6 py-3 
//                                    bg-transparent text-white text-xs font-semibold 
//                                    uppercase tracking-widest rounded-full 
//                                    border border-white/50
//                                    hover:bg-white hover:text-black transition-colors duration-300"
//                     >
//                         My works
//                     </a>
//                 </div>
                
//                 {/* Right Side: Image Placeholder */}
//                 <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
//                     <img
//                         src={profile}
//                         alt="Alishba Jawaid Professional Portrait"
//                         className="w-full max-w-lg h-auto object-cover"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }

import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import profile from "../assets/portfolio_picture.png";

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

        const timer = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);
        return () => clearTimeout(timer); 
    }, [currentText, isDeleting, roleIndex]);

    return (
        <span className="text-4xl md:text-5xl font-light text-white min-h-[50px] inline-block">
            {currentText}
            <span className="ml-1 animate-pulse border-r-2 border-yellow-500">&nbsp;</span>
        </span>
    );
};

// --- Effective Golden Floating Bubble ---
const YellowBubble = ({ size, initialTop, initialLeft, duration, delay }) => {
    const translateX = useSpring(0, { stiffness: 50, damping: 15 });
    const translateY = useSpring(0, { stiffness: 50, damping: 15 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const bubbleElement = document.getElementById(`bubble-${initialTop}-${initialLeft}`);
            if (!bubbleElement) return;

            const rect = bubbleElement.getBoundingClientRect();
            const bubbleCenterX = rect.left + rect.width / 2;
            const bubbleCenterY = rect.top + rect.height / 2;

            const distanceX = e.clientX - bubbleCenterX;
            const distanceY = e.clientY - bubbleCenterY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            if (distance < 250) {
                const pushStrength = (250 - distance) / 2.5; 
                const angle = Math.atan2(distanceY, distanceX);
                translateX.set(-Math.cos(angle) * pushStrength);
                translateY.set(-Math.sin(angle) * pushStrength);
            } else {
                translateX.set(0);
                translateY.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [initialTop, initialLeft, translateX, translateY]);

    return (
        <motion.div 
            id={`bubble-${initialTop}-${initialLeft}`}
            animate={{
                y: [0, -60, 0],
                x: [0, 20, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            style={{ 
                width: size, 
                height: size, 
                top: initialTop, 
                left: initialLeft,
                x: translateX,
                y: translateY
            }}
            // Enhanced Golden Style: High border contrast and internal glow
            className="absolute rounded-full border-2 border-yellow-500/40 bg-gradient-to-br from-yellow-400/30 to-yellow-700/10 backdrop-blur-[2px] shadow-[inset_0_0_25px_rgba(251,191,36,0.4),0_0_15px_rgba(251,191,36,0.1)] z-0"
        >
            {/* Glossy Top Highlight */}
            <div className="absolute top-[12%] left-[22%] w-1/3 h-1/3 bg-white/50 rounded-full blur-[1px]"></div>
            {/* Bottom Glow */}
            <div className="absolute bottom-[10%] right-[15%] w-1/4 h-1/4 bg-yellow-500/20 rounded-full blur-[4px]"></div>
        </motion.div>
    );
};

const bubbleData = [
    { size: "130px", top: "8%", left: "12%", duration: 8, delay: 0 },
    { size: "50px", top: "25%", left: "5%", duration: 6, delay: 1 },
    { size: "190px", top: "65%", left: "10%", duration: 11, delay: 2 },
    { size: "45px", top: "85%", left: "22%", duration: 7, delay: 0.5 },
    { size: "100px", top: "12%", left: "82%", duration: 9, delay: 1.5 },
    { size: "60px", top: "45%", left: "92%", duration: 5, delay: 0 },
    { size: "160px", top: "72%", left: "84%", duration: 13, delay: 3 },
    { size: "40px", top: "5%", left: "48%", duration: 8, delay: 2 },
    { size: "85px", top: "80%", left: "52%", duration: 10, delay: 1 },
    { size: "35px", top: "38%", left: "30%", duration: 6, delay: 0 },
    { size: "65px", top: "58%", left: "68%", duration: 7, delay: 4 },
    { size: "110px", top: "28%", left: "58%", duration: 9, delay: 1.2 },
    { size: "220px", top: "5%", left: "28%", duration: 16, delay: 0 },
    { size: "30px", top: "52%", left: "42%", duration: 4, delay: 0.8 },
];

export default function Home() {
    const name = "Alishba Jawaid";
    const specialtyLine2 = "A Computer Systems Engineer";

    return (
        <section id="home" className="relative bg-[#000000] text-white min-h-screen pt-20 flex items-center overflow-hidden">
            
            {/* --- Background Elements --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle Amber Glows behind bubbles for atmosphere */}
                <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-yellow-900/10 blur-[180px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-900/10 blur-[150px] rounded-full"></div>

                {/* Golden Bubbles */}
                {bubbleData.map((bubble, index) => (
                    <YellowBubble 
                        key={index}
                        size={bubble.size} 
                        initialTop={bubble.top} 
                        initialLeft={bubble.left} 
                        duration={bubble.duration}
                        delay={bubble.delay}
                    />
                ))}
            </div>

            {/* --- Content Area --- */}
            <div className="container relative z-10 mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-left space-y-4 md:space-y-6">
                    <p className="text-xl tracking-widest text-yellow-500 font-semibold">HELLO!</p>
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight drop-shadow-md">
                        I'm <span className="text-yellow-500">{name.split(' ')[0]}</span>
                        <br />
                        <span className="text-yellow-500">{name.split(' ')[1] || 'Name'}</span>
                    </h1>
                    <div className="block"><Typewriter /></div>
                    <p className="text-2xl md:text-3xl text-gray-300 pt-2 font-light">{specialtyLine2}</p>
                    
                    <div className="pt-8">
                        <a 
                            href="https://github.com/Alishba1325" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative z-30 inline-block px-10 py-4 bg-transparent text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full border-2 border-yellow-500/60 hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                        >
                            My works
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
                    {/* Focal point glow behind image */}
                    <div className="absolute inset-0 bg-yellow-500/5 blur-[100px] rounded-full"></div>
                    <img
                        src={profile}
                        alt="Alishba"
                        className="relative z-10 w-full max-w-lg h-auto object-cover drop-shadow-[0_0_50px_rgba(234,179,8,0.2)]"
                    />
                </div>
            </div>
        </section>
    );
}