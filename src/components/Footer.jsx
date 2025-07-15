import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import image from './static/images/image.png'; // Importing the image

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center">
      <div className="container mx-auto px-4">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt="Your Profile"
            className="w-16 h-16 rounded-full border-2 border-teal-400 cursor-pointer"
            onClick={handleImageClick}
          />
        </div>

        {/* Modal for Full Image */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative">
              <img
                src={image}
                alt="Full Size"
                className="max-w-full max-h-screen rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/tonykanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kanyi-anthony-2a761a274/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/tony_kanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 transition duration-300 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:kanyianthony79@gmail.com"
            className="text-gray-300 hover:text-teal-400 transition duration-300 text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Links */}
        <ul className="flex justify-center space-x-6 text-sm mb-6">
          <li>
            <a
              href="#home"
              className="hover:text-teal-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-teal-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-teal-400 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-teal-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Anthony Kanyi. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          Designed and built with ❤️ by Anthony Kanyi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
