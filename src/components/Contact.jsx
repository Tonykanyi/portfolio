import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await emailjs.sendForm(
        'service_ciyaon4', // Your EmailJS Service ID
        'template_2i41s2a', // Your EmailJS Template ID
        e.target,
        'L8VOVP1qB9Oh7jfEJ' // Your EmailJS Public Key
      );
      console.log('EmailJS Response:', response); // Log response for debugging
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error); // Log detailed error
      setStatus({ type: 'error', message: `Failed to send message: ${error.text || 'Please try again.'}` });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="w-80 h-80 bg-teal-600 opacity-15 rounded-full blur-3xl absolute top-20 left-20 animate-pulse"></div>
        <div className="w-80 h-80 bg-indigo-600 opacity-15 rounded-full blur-3xl absolute bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-teal-400 animate-fade-in tracking-tight">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-center mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          Have a question or want to collaborate? Fill out the form below, and I’ll get back to you promptly.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800/50 backdrop-blur-md p-8 rounded-xl shadow-xl">
          {/* Status Message */}
          {status && (
            <div
              className={`mb-6 p-3 rounded-lg text-center ${
                status.type === 'success' ? 'bg-teal-500/20 text-teal-400' : 'bg-red-500/20 text-red-400'
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Name Field */}
          <div className="mb-6 relative">
            <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 h-6 w-6 text-teal-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full pl-12 p-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-700'
              } rounded bg-gray-900 text-white focus:outline-none focus:border-teal-500 transition`}
              aria-label="Your Name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-6 relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 h-6 w-6 text-teal-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full pl-12 p-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-700'
              } rounded bg-gray-900 text-white focus:outline-none focus:border-teal-500 transition`}
              aria-label="Your Email"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="mb-6 relative">
            <FontAwesomeIcon icon={faComment} className="absolute top-3 left-3 h-6 w-6 text-teal-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full pl-12 p-3 border ${
                errors.message ? 'border-red-500' : 'border-gray-700'
              } rounded bg-gray-900 text-white focus:outline-none focus:border-teal-500 transition`}
              rows="5"
              aria-label="Your Message"
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-teal-400 transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            aria-label="Send Message"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
            Send Message
          </button>
        </form>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300">
            Prefer email? Drop me a message at{" "}
            <a
              href="mailto:kanyianthony79@gmail.com"
              className="text-teal-400 hover:underline"
              aria-label="Email Kanyi Anthony"
            >
              kanyianthony79@gmail.com
            </a>
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/kanyi-anthony-2a761a274/"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kanyi Anthony's LinkedIn"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/tonykanyi"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kanyi Anthony's GitHub"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://x.com/tonykanyi"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kanyi Anthony's X profile"
            >
              X
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;