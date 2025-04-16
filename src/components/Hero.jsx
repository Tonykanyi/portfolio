import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Enhanced Gradient Overlay with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-teal-900/80 backdrop-blur-sm"></div>

      {/* Spinner */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24">
        <div className="w-full h-full rounded-full border-4 border-t-teal-400 border-r-amber-400 border-b-purple-400 border-l-transparent animate-spin-slow shadow-glow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center bg-gray-900/30 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-3xl mx-4 border border-gray-700/50">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-lime-500">
            Hey, I'm
          </span>
          <span className="block mt-3 text-5xl md:text-6xl text-white">
            <Typewriter
              options={{
                strings: ["Anthony Kanyi", "A Full Stack Developer"],
                autoStart: true,
                loop: true,
                delay: 75,
                wrapperClassName: "bg-clip-text bg-gradient-to-r from-lime-400 to-teal-400 text-transparent",
              }}
            />
          </span>
        </h1>

        {/* Enhanced Description */}
        <p className="text-xl md:text-2xl mt-4 mb-8 font-[Poppins, sans-serif] tracking-wide leading-relaxed text-gray-200 bg-gray-800/20 px-6 py-3 rounded-lg shadow-inner animate-fade-in">
          Building <span className="text-teal-300">stunning</span>, responsive web apps with creativity and precision.
        </p>

        {/* Action Button */}
        <a
          href="#projects"
          className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-teal-500 rounded-full transform hover:scale-105 hover:shadow-lg transition duration-300 group"
          title="Check out my projects!"
        >
          <span className="mr-3">Explore My Work</span>
          <FaArrowDown className="text-2xl group-hover:animate-bounce transition-transform" />
        </a>

        {/* Social Icons with Glow Effect */}
        <div className="flex justify-center space-x-8 mt-10">
          {[
            { href: "https://github.com/tonykanyi", icon: <FaGithub />, hover: "hover:text-amber-400" },
            { href: "https://www.linkedin.com/in/kanyi-anthony-2a761a274/", icon: <FaLinkedin />, hover: "hover:text-blue-400" },
            { href: "https://x.com/tony_kanyi", icon: <FaTwitter />, hover: "hover:text-cyan-400" },
            {
              href: "https://wa.me/+254722758494?text=Hello%20Kanyi,%20I%27d%20like%20to%20discuss%20a%20project!",
              icon: <FontAwesomeIcon icon={faWhatsapp} />,
              hover: "hover:text-green-400",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white text-4xl ${social.hover} transform hover:scale-125 hover:shadow-glow transition duration-300`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/30 rounded-full animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;