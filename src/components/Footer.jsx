// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className="text-center py-6 mt-12 border-t border-gray-300 bg-gray-50">
//       <p className="text-gray-600">&copy; {new Date().getFullYear()} Alishba. All rights reserved.</p>
//     </footer>
//   )
// }



import React from 'react';
import { motion } from 'framer-motion';
// Icons ke liye (pehle "npm install react-icons" zaroor karlein)
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaLinkedin />, url: "#", color: "#0077b5" },
        { icon: <FaGithub />, url: "#", color: "#ffffff" },
        { icon: <FaTwitter />, url: "#", color: "#1DA1F2" },
        { icon: <FaEnvelope />, url: "mailto:your-email@example.com", color: "#ea4335" }
    ];

    return (
        <footer className="relative bg-black text-white pt-16 pb-8 overflow-hidden">
            
            {/* --- Top Border Line with Glow --- */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                
                {/* --- Brand / Name Section --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl font-black tracking-tighter uppercase">
                        Alishba<span className="text-yellow-500">.</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto leading-relaxed">
                        Computer System Engineer | Passionate about AI, Data Analytics, 
                        and building impactful digital experiences.
                    </p>
                </motion.div>

                {/* --- Social Icons --- */}
                <div className="flex justify-center gap-6 mb-12">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ 
                                y: -5, 
                                scale: 1.1,
                                color: "#eab308", // Yellow color on hover
                                filter: "drop-shadow(0 0 8px rgba(234, 179, 8, 0.6))"
                            }}
                            className="text-gray-400 text-2xl transition-all duration-300"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                {/* --- Bottom Navigation (Quick Links) --- */}
                <nav className="flex justify-center gap-8 mb-12 text-xs font-bold uppercase tracking-widest text-gray-500">
                    {['Home', 'About', 'Experience', 'Projects'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className="hover:text-yellow-500 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* --- Copyright Section --- */}
                <div className="border-t border-white/5 pt-8">
                    <p className="text-xs text-gray-600 tracking-wider">
                        &copy; {currentYear} <span className="text-gray-400 font-bold">ALISHBA JAWAID</span>. 
                        MADE WITH ❤️ AND REACT.
                    </p>
                </div>
            </div>

            {/* Background Subtle Glow Bubble */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        </footer>
    );
}
