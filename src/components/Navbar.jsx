// import React from 'react'
// import { Link } from 'react-scroll'

// export default function Navbar() {
//   return (
//     <nav className="fixed w-full flex justify-between items-center p-6 bg-white bg-opacity-50 backdrop-blur-md z-50">
//       <h1 className="text-2xl font-bold">Alishba</h1>
//       <ul className="flex gap-6">
//         {['home','about','experience','resume','projects','certifications','contact'].map(section => (
//           <li key={section}>
//             <Link 
//               to={section} 
//               smooth={true} 
//               duration={500} 
//               className="cursor-pointer hover:text-blue-500 capitalize">
//               {section}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }
import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['home', 'about', 'experience', 'resume', 'projects', 'certifications', 'contact'];

  return (
    <nav className="fixed w-full bg-black text-white z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <h1 className="text-2xl font-bold tracking-wider text-white">Alishba</h1>
        
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8">
          {sections.map(section => (
            <li key={section}>
              <Link 
                to={section} 
                smooth={true} 
                duration={500} 
                // Set 'home' to yellow to match the image's active state
                className={`cursor-pointer text-lg font-medium capitalize transition-colors
                           hover:text-yellow-500 
                           ${section === 'home' ? 'text-yellow-500' : 'text-white'}`}
                activeClass="text-yellow-500" // Highlight the active section when scrolling
                spy={true}
                offset={-70} // Offset for fixed navbar height
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'} 
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/95 absolute w-full left-0 shadow-xl">
          {sections.map(section => (
            <li key={section} className="w-full text-center">
              <Link 
                to={section} 
                smooth={true} 
                duration={500} 
                className="block py-3 text-white hover:bg-gray-800 capitalize cursor-pointer"
                onClick={() => setIsOpen(false)} // Close menu on link click
                activeClass="bg-gray-800 text-yellow-500" 
                spy={true}
                offset={-70}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
