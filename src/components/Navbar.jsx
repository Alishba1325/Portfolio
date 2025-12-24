
// import React, { useState } from 'react';
// import { Link } from 'react-scroll';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const sections = ['home', 'about', 'experience', 'resume', 'projects', 'certifications', 'contact'];

//   return (
//     <nav className="fixed w-full bg-black text-white z-50 shadow-lg">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo/Name */}
//         <h1 className="text-2xl font-bold tracking-wider text-white">Alishba</h1>
        
//         {/* Desktop Navigation Links */}
//         <ul className="hidden md:flex gap-8">
//           {sections.map(section => (
//             <li key={section}>
//               <Link 
//                 to={section} 
//                 smooth={true} 
//                 duration={500} 
//                 // Set 'home' to yellow to match the image's active state
//                 className={`cursor-pointer text-lg font-medium capitalize transition-colors
//                            hover:text-yellow-500 
//                            ${section === 'home' ? 'text-yellow-500' : 'text-white'}`}
//                 activeClass="text-yellow-500" // Highlight the active section when scrolling
//                 spy={true}
//                 offset={-70} // Offset for fixed navbar height
//               >
//                 {section}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Toggle Button */}
//         <button 
//           className="md:hidden text-2xl" 
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle navigation"
//         >
//           {isOpen ? '✕' : '☰'} 
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <ul className="md:hidden flex flex-col items-center bg-black/95 absolute w-full left-0 shadow-xl">
//           {sections.map(section => (
//             <li key={section} className="w-full text-center">
//               <Link 
//                 to={section} 
//                 smooth={true} 
//                 duration={500} 
//                 className="block py-3 text-white hover:bg-gray-800 capitalize cursor-pointer"
//                 onClick={() => setIsOpen(false)} // Close menu on link click
//                 activeClass="bg-gray-800 text-yellow-500" 
//                 spy={true}
//                 offset={-70}
//               >
//                 {section}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const sections = ['home', 'about', 'experience', 'resume', 'projects', 'certifications', 'contact'];

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl py-3 border-b border-yellow-500/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        
        {/* --- Logo with Glow --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group cursor-pointer"
        >
          <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">
            Alishba<span className="text-yellow-500">.</span>
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#eab308]"></div>
        </motion.div>
        
        {/* --- Desktop Navigation --- */}
        <ul className="hidden md:flex items-center gap-1">
          {sections.map((section, index) => (
            <motion.li 
              key={section}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={section} 
                smooth={true} 
                duration={500} 
                spy={true}
                offset={-70}
                activeClass="text-yellow-500 !font-bold"
                className="relative px-4 py-2 cursor-pointer text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-all duration-300 group"
              >
                {section}
                {/* Hover Underline Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* --- Mobile Menu Button --- */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-yellow-500 p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end group">
            <span className={`h-[3px] bg-yellow-500 transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-[3px] bg-yellow-500 transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-[3px] bg-yellow-500 transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </motion.button>
      </div>

      {/* --- Mobile Menu Dropdown (Animated) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-yellow-500/20 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-8 gap-6">
              {sections.map((section) => (
                <li key={section}>
                  <Link 
                    to={section} 
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    activeClass="text-yellow-500 scale-110"
                    className="text-xl font-black uppercase tracking-[0.2em] text-white hover:text-yellow-500 transition-all"
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}