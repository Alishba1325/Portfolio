// import React from 'react'

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 px-6 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-12 fade-in" style={{ animationDelay: '0.1s' }}>Contact Me</h2>
//       <div className="max-w-md mx-auto">
//         <form className="flex flex-col gap-4 fade-in" style={{ animationDelay: '0.3s' }}>
//           <input type="text" placeholder="Your Name" className="border p-3 rounded focus:ring-2 focus:ring-blue-400 transition" />
//           <input type="email" placeholder="Your Email" className="border p-3 rounded focus:ring-2 focus:ring-blue-400 transition" />
//           <textarea placeholder="Message" className="border p-3 rounded focus:ring-2 focus:ring-blue-400 transition"></textarea>
//           <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition">
//             Send Message
//           </button>
//         </form>
//         <p className="text-center mt-6 text-gray-500 fade-in" style={{ animationDelay: '0.5s' }}>
//           Or email me at: <a href="mailto:alishba@example.com" className="text-blue-500">alishba@example.com</a>
//         </p>
//       </div>
//     </section>
//   )
// }
import React from 'react'
// Assuming you have a way to import icons (e.g., react-icons/fa or custom SVG components)
// For this example, I'm using Font Awesome placeholder classes, replace with your actual icons.

// Data for the four contact detail cards
const contactDetails = [
    { 
        icon: 'fa-map-marker-alt', 
        label: 'ADDRESS', 
        value: 'Karachi, Pakistan' 
    },
    { 
        icon: 'fa-linkedin-in', 
        label: 'LINKEDIN ID', 
        value: 'Zainab lakho' // Replace with your LinkedIn ID
    },
    { 
        icon: 'fa-envelope', 
        label: 'EMAIL ADDRESS', 
        value: 'zainablakho2005@gmail.com' // Replace with your email
    },
    { 
        icon: 'fa-download', 
        label: 'DOWNLOAD RESUME', 
        value: 'resumelink', // Replace with your resume link text
        link: '/path/to/your/resume.pdf' 
    },
];

// Component for a single Contact Detail Card
const ContactDetailCard = ({ icon, label, value, link }) => (
    <div className="flex flex-col items-center text-center p-4">
        {/* Icon Container (Styled yellow border circle) */}
        <div className="w-16 h-16 rounded-full border-2 border-yellow-500 
                        flex items-center justify-center mb-3 text-yellow-500 text-2xl">
            {/* Placeholder for the actual icon component or Font Awesome class */}
            <i className={`fas ${icon}`}></i>
        </div>
        
        <h3 className="text-sm font-bold uppercase text-white mb-1">{label}</h3>
        {/* If it's the resume link, make it clickable */}
        {link ? (
            <a href={link} download className="text-gray-400 hover:text-yellow-500 transition text-sm">
                {value}
            </a>
        ) : (
            <p className="text-gray-400 text-sm">{value}</p>
        )}
    </div>
);

export default function Contact() {
    return (
        // Changed background to black and default text to white
        <section id="contact" className="py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Ghost Text for Contact */}
                <div className="relative mb-12">
                     <div className="absolute inset-0 flex items-center justify-center 
                                    text-[180px] font-extrabold text-white opacity-[0.05] 
                                    pointer-events-none whitespace-nowrap leading-none z-0">
                        Contact
                    </div>
                    
                    {/* Main Heading */}
                    <h2 className="text-5xl font-extrabold relative z-10 text-white inline-block">
                        Contact Me
                    </h2>
                </div>
                
                {/* Introductory Text */}
                <p className="text-gray-400 mb-16">
                    Below are the details reach out to me!
                </p>

                {/* Contact Detail Cards (4 Columns) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {contactDetails.map((item, index) => (
                        <ContactDetailCard 
                            key={index}
                            icon={item.icon}
                            label={item.label}
                            value={item.value}
                            link={item.link} // Pass link only if it exists (for Download Resume)
                        />
                    ))}
                </div>

                {/* --- Have a Question? Section --- */}
                <div className="pt-8 pb-16">
                    <h3 className="text-2xl font-bold mb-4">Have a Question?</h3>
                    
                    {/* CLICK HERE Button (Styled yellow button) */}
                    <a 
                        href="mailto:zainablakho2005@gmail.com" // Use mailto link for direct contact
                        className="inline-block py-3 px-8 
                                   bg-yellow-500 text-black 
                                   font-bold text-lg tracking-wider rounded-lg 
                                   hover:bg-yellow-600 transition duration-300"
                    >
                        CLICK HERE
                    </a>
                </div>

                {/* --- Social Media Links (Footer Style) --- */}
                <div className="border-t border-gray-700 pt-8 mt-8">
                    <p className="text-sm text-gray-400 mb-4">Find me on</p>
                    <div className="flex justify-center space-x-4">
                        {/* Replace '#' with actual links */}
                        <a href="#" className="text-white hover:text-yellow-500 transition text-3xl">
                            {/* Placeholder for LinkedIn icon */}
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500 transition text-3xl">
                            {/* Placeholder for Twitter/X icon */}
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500 transition text-3xl">
                            {/* Placeholder for Facebook icon */}
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500 transition text-3xl">
                            {/* Placeholder for Instagram icon */}
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}