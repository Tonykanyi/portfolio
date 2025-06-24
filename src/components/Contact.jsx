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
      console.log('EmailJS Response:', response);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: `Failed to send message: ${error.text || 'Please try again.'}` });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  return (
    <section id="contact" className="py-28 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 text-gray-100 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="w-96 h-96 bg-teal-500 opacity-10 rounded-full blur-4xl absolute top-10 -left-20 animate-pulse duration-3000"></div>
        <div className="w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-4xl absolute bottom-10 -right-20 animate-pulse duration-4000"></div>
        <div className="w-full h-full bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-12 text-center text-teal-400 animate-fade-in-up tracking-tight drop-shadow-lg">
          Let's Connect
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-center mb-16 max-w-3xl mx-auto leading-relaxed font-light text-gray-300 animate-fade-in-up delay-100">
          Got a project or just want to chat? Drop me a message, and I'll respond faster than you can say "code complete"!
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-900/30 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-700/50 transform transition-all hover:scale-[1.02] duration-300">
          {/* Status Message */}
          {status && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-medium animate-slide-in-top ${
                status.type === 'success' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50' : 'bg-red-500/20 text-red-300 border border-red-500/50'
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Name Field */}
          <div className="mb-6 relative group">
            <FontAwesomeIcon icon={faUser} className="absolute top-4 left-4 h-5 w-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full pl-12 pr-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-600'
              } rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:bg-gray-800/70`}
              aria-label="Your Name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-2 animate-fade-in">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-6 relative group">
            <FontAwesomeIcon icon={faEnvelope} className="absolute top-4 left-4 h-5 w-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full pl-12 pr-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              } rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:bg-gray-800/70`}
              aria-label="Your Email"
            />
            {errors.email && <p className="text-red-400 text-sm mt-2 animate-fade-in">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="mb-6 relative group">
            <FontAwesomeIcon icon={faComment} className="absolute top-4 left-4 h-5 w-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full pl-12 pr-4 py-3 border ${
                errors.message ? 'border-red-500' : 'border-gray-600'
              } rounded-lg bg-gray-800/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 group-hover:bg-gray-800/70`}
              rows="5"
              aria-label="Your Message"
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm mt-2 animate-fade-in">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-teal-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            aria-label="Send Message"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5 animate-pulse" />
            Send Message
          </button>
        </form>

        <div className="mt-16 text-center space-y-6">
          <p className="text-lg sm:text-xl text-gray-300 animate-fade-in-up delay-200">
            Prefer email? Reach out at{" "}
            <a
              href="mailto:kanyianthony79@gmail.com"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200 font-medium"
              aria-label="Email Kanyi Anthony"
            >
              kanyianthony79@gmail.com
            </a>
          </p>
          <p className="text-lg sm:text-xl text-gray-300 animate-fade-in-up delay-300">
            Or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/kanyi-anthony-2a761a274/"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200 font-medium"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kanyi Anthony's LinkedIn"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/tonykanyi"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200 font-medium"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kanyi Anthony's GitHub"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://x.com/tonykanyi"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200 font-medium"
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