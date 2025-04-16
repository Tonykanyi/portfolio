import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faPaintBrush,
  faArrowRight,
  faCamera,
  faGlobe,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="w-80 h-80 bg-teal-600 opacity-15 rounded-full blur-3xl absolute top-20 left-20 animate-pulse"></div>
        <div className="w-80 h-80 bg-indigo-600 opacity-15 rounded-full blur-3xl absolute bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-center text-teal-400 animate-fade-in tracking-tight">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-center mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          I'm a dedicated software developer with a passion for crafting innovative, scalable web applications. With expertise in both frontend and backend technologies, I focus on delivering seamless user experiences and robust solutions that drive impact. My approach combines technical precision with creative problem-solving to transform ideas into reality.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div className="p-8 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-[1.02]">
            <h3 className="text-3xl font-bold text-teal-400 mb-8 text-center lg:text-left">
              My Expertise
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faCode} className="h-8 w-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xl font-semibold">Frontend Development</span>
                  <p className="text-gray-400 text-sm mt-1">Building dynamic, responsive interfaces using React, Tailwind CSS, and modern JavaScript frameworks to ensure pixel-perfect designs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faMobileAlt} className="h-8 w-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xl font-semibold">Backend Development</span>
                  <p className="text-gray-400 text-sm mt-1">Designing robust APIs and server-side logic with Node.js, Express, and databases like MongoDB and PostgreSQL for scalable applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faPaintBrush} className="h-8 w-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xl font-semibold">UI/UX Design</span>
                  <p className="text-gray-400 text-sm mt-1">Creating intuitive, user-centered designs with tools like Figma, focusing on accessibility and seamless interactions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faArrowRight} className="h-8 w-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xl font-semibold">Responsive Design</span>
                  <p className="text-gray-400 text-sm mt-1">Ensuring cross-device compatibility with mobile-first approaches and flexible layouts for optimal performance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="p-8 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-[1.02]">
            <h3 className="text-3xl font-bold text-teal-400 mb-8 text-center lg:text-left">
              My Passions
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faCamera} className="h-8 w-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xl font-semibold">Photography</span>
                  <p className="text-gray-400 text-sm mt-1">Capturing the beauty of moments through landscape and portrait photography, with a keen eye for composition and light.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faGlobe} className="h-8 w-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xl font-semibold">Traveling</span>
                  <p className="text-gray-400 text-sm mt-1">Exploring diverse cultures and landscapes to gain inspiration and broaden perspectives on life and technology.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faPencilAlt} className="h-8 w-8 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xl font-semibold">Writing</span>
                  <p className="text-gray-400 text-sm mt-1">Crafting technical blogs and creative stories to share knowledge and connect with the developer community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-teal-500 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-teal-400 transition duration-300 transform hover:scale-105"
            aria-label="Get in touch"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;