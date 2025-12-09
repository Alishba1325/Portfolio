// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Experience from './components/Experience'
// import Resume from './components/Resume'
// import Projects from './components/Projects'
// import Certifications from './components/Certifications'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div className="bg-gray-50 text-gray-800 scroll-smooth">
//       <Navbar />
//       <Hero />
//       <About />
//       <Experience />
//       <Resume />
//       <Projects />
//       <Certifications />
//       <Contact />
//       <Footer />
//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    // Change the global background to black and default text to white/light gray
    <div className="bg-black text-gray-200 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      {/* NOTE: You will need to make sure the background colors 
        inside your Experience, Resume, Projects, Certifications, 
        Contact, and Footer components are also set to dark colors (like bg-black or bg-[#1a1a1a]) 
        to maintain the consistent dark theme. 
      */}
      <Experience />
      <Resume />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App