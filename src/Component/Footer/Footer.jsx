import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Shivani</h2>
      

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/shivani.namdev.3348390" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shivani-4506922a8/" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
{/* 
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
            
          <h2>Email Id: shivaninamdev332@gmail.com</h2>
          <h2>Contact No: 7302960332</h2>
          
        </div> */}


<div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 text-center">
  <h2 className="text-lg font-semibold text-gray-800">
    Email Id: <a href="mailto:shivaninamdev332@gmail.com" className="text-blue-600 hover:underline">shivaninamdev332@gmail.com</a>
  </h2>
  <h2 className="text-lg font-semibold text-gray-800">
    Contact No: <a href="tel:7302960332" className="text-blue-600 hover:underline">7302960332</a>
  </h2>
</div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Shivani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

