import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-gray-900"></div>

      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg z-10">
        <h1 className="text-5xl font-bold mb-4">
          Hi, <span className="text-amber-500">I'm</span>
          <span className="block mt-2 text-lime-500">
            <Typewriter
              options={{
                strings: ["Anthony Kanyi", "A Full stack web developer"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h1>

        {/* Cool Text with Fun Font */}
        <p className="text-lg mt-4 mb-6 font-[Poppins, sans-serif] tracking-wide leading-relaxed text-purple-200 text-shadow-md animate-fade-in">
          Crafting stunning, responsive web applications with a touch of creativity.
        </p>

        {/* New Arrow Button */}
        <a
          href="#projects"
          className="mt-6 inline-block px-8 py-3 text-white font-semibold rounded-full bg-Orange-500 transform hover:scale-110 hover:rotate-12 transition duration-300 hover:bg-lime-700"
          title="Check out my projects!"
        >
          <span className="mr-2">View My Work</span>
          <FaArrowDown className="inline-block text-2xl animate-bounce" />
        </a>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/tonykanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-white-500 transform hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kanyi-anthony-2a761a274/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-500 transform hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/tony_kanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-black transform hover:scale-125 transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Decorative Graphics */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-red-500 bg-opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-500 bg-opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-teal-500 bg-opacity-20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
