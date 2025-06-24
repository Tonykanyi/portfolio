import React, { useState } from "react";
import smooth from './static/images/smoothrides.png';
import duka from './static/images/duka.png';
import budget from './static/images/budget.png';
import mellow from './static/images/mellow.png';
import marketshade from './static/images/marketshade.jpeg';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const projects = [
    {
      title: "My Duka",
      description: "MyDukaFrontend is a responsive e-commerce platform built with React, offering user and admin functionalities, product browsing, cart management, and payment options via Cash on Delivery or M-Pesa.",
      image: duka,
      link: "https://my-duka-frontend.vercel.app/",
    },
    {
      title: "Smooth Rides",
      description: "Smooth Rides Car Rental Website allows users to browse and book rental cars with detailed information, featuring dark mode and a responsive design.",
      image: smooth,
      link: "https://smooth-rides-a3vj-git-main-tonykanyis-projects.vercel.app/",
    },
    {
      title: "Budget Planner",
      description: "A payroll calculator and budget planner app built with HTML, Tailwind CSS, allowing users to track and manage their payroll expenses.",
      image: budget,
      link: "https://budget-planner-chi-peach.vercel.app/",
    },
    {
      title: "Mellow fi",
      description: "Mellow Finance is a decentralized platform that allows users to borrow stablecoins by depositing cryptocurrency as collateral, ensuring secure and efficient loan transactions.",
      image: mellow,
      link: "https://basedmellowfi.vercel.app/",
    },
    {
      title: "Marketshade",
      description: "Marketshade Shop: Global e-commerce platform with diverse categories, user-friendly interface, secure transactions, and sustainable products, built for scalability.",
      image: marketshade,
      link: "https://www.marketshade.co.ke",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-md shadow-xl rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-teal-500/30"
            >
              <div className="relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  onClick={() => openModal(project.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                  <p className="text-lg text-gray-100 font-medium text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-teal-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to Enlarge
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-teal-400 mb-4 hover:text-teal-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:from-teal-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 backdrop-blur-sm transition-all duration-500">
          <div className="relative max-w-4xl w-full p-4 animate-fade-in">
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;