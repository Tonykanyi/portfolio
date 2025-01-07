import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">Get in Touch</h2>
        <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-6 relative">
            <FontAwesomeIcon icon={faUser } className="absolute top-3 left-3 h-6 w-6 text-teal-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 p-3 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-teal-500 transition"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6 relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 h-6 w-6 text-teal-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-10 p-3 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-teal-500 transition"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6 relative">
            <FontAwesomeIcon icon={faComment} className="absolute top-3 left-3 h-6 w-6 text-teal-400" />
            <textarea
              placeholder="Your Message"
              className="w-full pl-10 p-3 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:border-teal-500 transition"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-400 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-300">
          Prefer email? Drop me a message directly at{" "}
          <a
            href="mailto:Kanyianthony79.com"
            className="text-teal-400 hover:underline"
          >
           Kanyianthony79.com
          </a>
        </p>
        <p className="mt-4 text-lg text-gray-300">
          Or find me on{" "}
          <a
            href="https://www.linkedin.com/in/kanyi-anthony-2a761a274/"
            className="text-teal-400 hover:underline"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/tonykanyi"
            className="text-teal-400 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;