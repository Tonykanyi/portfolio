import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import CODING from "../components/static/images/CODING.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden text-white"
    >
      {/* Background Video with Subtle Scale Animation */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105 transition-transform duration-[20s] ease-in-out animate-scale-pulse"
      >
        <source src={CODING} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced Gradient Overlay with Stronger Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/65 to-teal-900/75 backdrop-blur-md"></div>

      {/* Spinner with Gradient and Enhanced Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28">
        <div className="w-full h-full rounded-full border-4 border-t-teal-400 border-r-amber-400 border-b-purple-400 border-l-transparent animate-spin-slow shadow-[0_0_20px_rgba(20,184,166,0.7)]"></div>
      </div>

      {/* Main Content with Hover Scale and Parallax */}
      <div className="relative z-10 text-center bg-gray-900/25 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-4xl mx-4 border border-gray-600/40 transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter animate-slide-up">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-lime-400 to-teal-400">
            Hey, I'm
          </span>
          <span className="block mt-4 text-5xl md:text-7xl text-white">
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

        {/* Enhanced Description with Glow Text */}
        <p className="text-xl md:text-3xl mt-6 mb-10 font-[Poppins, sans-serif] tracking-wide leading-relaxed text-gray-100 bg-gray-800/30 px-8 py-4 rounded-xl shadow-inner animate-fade-in-up">
          Crafting <span className="text-teal-300 shadow-[0_0_10px_rgba(20,184,166,0.5)]">stunning</span>, responsive web apps with creativity and precision.
        </p>

        {/* Action Button with Gradient Animation */}
        <a
          href="#projects"
          className="inline-flex items-center px-12 py-5 text-xl font-semibold text-white bg-gradient-to-r from-orange-500 via-teal-500 to-purple-500 rounded-full transform hover:scale-110 hover:shadow-[0_0_20px_rgba(20,184,166,0.7)] transition duration-300 group bg-[length:200%_200%] animate-gradient-shift"
          title="Check out my projects!"
        >
          <span className="mr-4">Explore My Work</span>
          <FaArrowDown className="text-2xl group-hover:animate-bounce transition-transform" />
        </a>

        {/* Social Icons with Enhanced Hover Effects */}
        <div className="flex justify-center space-x-10 mt-12">
          {[
            { href: "https://github.com/tonykanyi", icon: <FaGithub />, hover: "hover:text-gray-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.6)]" },
            { href: "https://www.linkedin.com/in/kanyi-anthony-2a761a274/", icon: <FaLinkedin />, hover: "hover:text-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]" },
            { href: "https://x.com/tony_kanyi", icon: <FaTwitter />, hover: "hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]" },
            {
              href: "https://wa.me/+254722758494?text=Hello%20Kanyi,%20I%27d%20like%20to%20discuss%20a%20project!",
              icon: <FontAwesomeIcon icon={faWhatsapp} />,
              hover: "hover:text-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white text-4xl ${social.hover} transform hover:scale-130 hover:rotate-12 transition duration-300`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Enhanced Decorative Elements with Parallax */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/25 rounded-full blur-3xl animate-pulse-slow transform-gpu translate-z-0 hover:-translate-y-2 transition-transform duration-500"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse-slow transform-gpu translate-z-0 hover:translate-y-2 transition-transform duration-500"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-amber-500/25 rounded-full blur-3xl animate-pulse-slow transform-gpu translate-z-0 hover:translate-x-2 transition-transform duration-500"></div>

      {/* Floating Particles with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/40 rounded-full animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 12 + 8}s`,
              boxShadow: "0 0 10px rgba(255,255,255,0.3)",
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;