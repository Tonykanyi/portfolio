import React, { useState } from "react";
import "../index.css";
import image from './static/images/image.png'; // Importing the image
import cv from './Anthony Kanyi Macharia cv.pdf'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="fixed w-full z-10 top-0 bg-transparent text-white backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-100 hover:text-green-500 transition duration-200">
          My Portfolio
        </h1>

        {/* Menu Items */}
        <ul
          className={`flex space-x-8 md:flex ${isOpen ? "block" : "hidden"} md:space-x-8 md:items-center md:flex-row`}
        >
          <li><a href="#home" className="text-gray-300 hover:text-green-400 transition duration-200">Home</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-green-400 transition duration-200">About</a></li>
          <li><a href="#skills" className="text-gray-300 hover:text-green-400 transition duration-200">Skills</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-green-400 transition duration-200">Projects</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition duration-200">Contact</a></li>

          {/* Profile Photo and Dropdown */}
          <li className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center focus:outline-none"
            >
              <img
                src={image}
                alt="Profile"
                className="w-12 h-12 rounded-full border-4 border-green-600 shadow-lg hover:shadow-2xl transition duration-200"
              />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-gray-800 text-white rounded-lg shadow-2xl border border-gray-700">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-200 mb-2">Anthony Kanyi</h3>
                  <p className="text-sm text-gray-400 mb-4">Software Developer</p>

                  {/* Additional Information */}
                  <p className="text-sm text-gray-400 mb-2"><strong>Location:</strong> Nairobi, Kenya</p>
                  <p className="text-sm text-gray-400 mb-2">
                    <strong>LinkedIn:</strong> 
                    <a href="https://www.linkedin.com/in/kanyi-anthony-2a761a274/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                      Kanyi Anthony
                    </a>
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    <strong>GitHub:</strong> 
                    <a href="https://github.com/tonykanyi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                      Tony kanyi
                    </a>
                  </p>
                  <p className="text-sm text-gray-400 mb-4"><strong>Email:</strong> 
                    <a href="Kanyianthony79.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                    Kanyianthony79.com
                    </a>
                  </p>
                </div>
                <div className="border-t border-gray-600">
                  <a
                    href={cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-blue-400 hover:bg-gray-700 hover:text-blue-500 transition duration-200"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={handleToggle}
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-gray-600 hover:text-blue-400 hover:border-blue-400 transition duration-200"
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.364 17.657L12 11.293l-6.364 6.364-1.414-1.414L10.586 12 .222 5.636l1.414-1.414L12 9.879l6.364-6.364 1.414 1.414-6.364 6.364 6.364 6.364z"
              />
            ) : (
              <path d="M3 6h18M3 12h18m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
