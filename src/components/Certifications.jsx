// import React from 'react'

// const certifications = [
//   { title: 'React Developer', issuer: 'Coursera', year: '2023' },
//   { title: 'Tailwind CSS', issuer: 'Udemy', year: '2022' },
// ]

// export default function Certifications() {
//   return (
//     <section id="certifications" className="py-20 px-6 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
//       <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
//         {certifications.map((cert, i) => (
//           <div 
//             key={i} 
//             className="card fade-in transform hover:scale-105 hover:shadow-lg transition-all duration-500"
//             style={{ animationDelay: `${i * 0.2}s` }}
//           >
//             <h3 className="text-xl font-semibold">{cert.title}</h3>
//             <p className="text-gray-500">{cert.issuer} | {cert.year}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
import React from 'react'

// Updated data based on Alishba Jawaid's CV
const certifications = [
    { title: 'Google Data Analytics Professional Certificate', issuer: 'Coursera' },
    { title: 'AI Essentials', issuer: 'Coursera' },
    { title: 'Networking', issuer: 'Cisco Academy' },
    { title: 'Webwizard LRN Certification', issuer: 'LRN Certification' }, // Assuming LRN Certification is the issuer
];

// Component for a single Certification Card (Styled like image 29.jpg)
const CertificationCard = ({ title, issuer }) => (
    <div 
        // Background black, border yellow, text yellow/gray
        className="flex flex-col items-center justify-center p-6 rounded-lg 
                   bg-black border border-yellow-500 shadow-xl text-center text-white
                   transform hover:scale-[1.02] transition-transform duration-300 h-full"
    >
        {/* Title is Bold, Uppercase, and Yellow */}
        <h3 className="text-xl font-extrabold mb-1 uppercase leading-tight text-yellow-500">
            {title}
        </h3>
        {/* Issuer is Gray and smaller text */}
        <p className="text-sm text-gray-400">From {issuer}</p>
    </div>
);


export default function Certifications() {
    return (
        // Changed background to black and default text to white (Image 29.jpg)
        <section id="certifications" className="py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Heading styled with a strong underline and centered (Image 29.jpg) */}
                <h2 className="text-4xl font-extrabold relative z-10 text-white inline-block border-b-2 border-yellow-500 pb-2 mb-16">
                    Certifications
                </h2>

                {/* Certification Card Container (4-column grid for medium screens and up) */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {certifications.map((cert, i) => (
                        <CertificationCard 
                            key={i} 
                            title={cert.title} 
                            issuer={cert.issuer} 
                        />
                    ))}
                </div>
                
              
            </div>
        </section>
    )
}
