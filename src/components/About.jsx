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
    <section id="about" className="py-20 bg-gray-900 text-gray-300 relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="w-72 h-72 bg-teal-500 opacity-20 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
        <div className="w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <h2 className="text-5xl font-extrabold mb-6 text-center text-teal-400 animate-fade-in">
          About Me
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate software developer with experience in building
          responsive and scalable web applications. I specialize in creating
          intuitive user experiences and bringing ideas to life with clean,
          efficient code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-teal-400 mb-6 text-center md:text-left">
              My Skills
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faCode} className="h-8 w-8 text-teal-500" />
                <span className="text-xl">Frontend Development</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faMobileAlt} className="h-8 w-8 text-teal-500" />
                <span className="text-xl">Backend Development</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faPaintBrush} className="h-8 w-8 text-teal-500" />
                <span className="text-xl">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faArrowRight} className="h-8 w-8 text-teal-500" />
                <span className="text-xl">Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-teal-400 mb-6 text-center md:text-left">
              Hobbies
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faCamera} className="h-8 w-8 text-teal-500" />
                <span className="text-xl">Photography</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faGlobe} className="h-8 w-8 text-teal-500" />
                <span className="text-xl">Traveling</span>
              </div>
              <div className="flex items-center space-x-4 hover:translate-x-2 transition duration-300">
                <FontAwesomeIcon icon={faPencilAlt} className="h-8 w-8 text-teal-500" />
                <span className="text-xl">Writing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
