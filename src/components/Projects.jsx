import React, { useState } from "react";
import smooth from './static/images/smoothrides.png'; // Importing the image
import duka from './static/images/duka.png'; // Importing the image
import budget from './static/images/budget.png';
import mellow from './static/images/mellow.png';

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
      link: "https://smooth-rides-5sls-1jp5tap88-tonykanyis-projects.vercel.app/",
    },
    {
      title: "Budget Planner",
      description: "A portfolio site built with React.js.",
      image: budget,
      link: "https://budget-planner-chi-peach.vercel.app/",
    },
    {
      title: "Mellow fi",
      description: "Mellow Finance is a decentralized platform that allows users to borrow stablecoins by depositing cryptocurrency as collateral, ensuring secure and efficient loan transactions.",
      image: mellow,
      link: "https://basedmellowfi.vercel.app/",
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
    <section id="projects" className="py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-1"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => openModal(project.image)} // Open modal on image click
                />
                <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-xl text-gray-100 font-semibold text-center px-6">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-400 mb-3 hover:text-teal-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="inline-block mt-4 bg-teal-500 text-white font-medium py-2 px-6 rounded-full hover:bg-teal-400 transition duration-300 transform hover:scale-110"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-screen"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 hover:bg-red-600"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;