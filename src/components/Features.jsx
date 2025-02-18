import React from "react";

const Features = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-12">Renting And Management Made Easy</h2>
      <p className="text-center text-xl mb-12">Why Us?</p>

      {/* Each image and text side by side */}
      <div className="max-w-7xl mx-auto space-y-12">
        {/* First Section: Streamlined Operations (Image Left, Text Right) */}
        <div className= "flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image */}
          <div className= "w-full md:w-1/2">
            <img
              className= "w-3/4 h-auto object-cover rounded-xl shadow-lg mx-auto"
              src="https://i.pinimg.com/736x/af/91/f7/af91f74c942d119b0e80fe16d9ee2b23.jpg"
              alt="Streamlined Operations"
            />
          </div>
          {/* Text */}
          <div className= "w-full md:w-1/2">
            <div className= "bg-white rounded-lg shadow-lg p-6">
              <h3 className= "text-xl font-semibold mb-2">Streamlined Operations</h3>
              <p className= "text-gray-600">
                Our software automates routine tasks such as rent collection, maintenance requests, and tenant communications. 
                This automation saves time and reduces errors.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section: Enhanced Tenant Experience (Text Left, Image Right) */}
        <div className= "flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image */}
          <div className= "w-full md:w-1/2">
            <img
              className= "w-3/4 h-auto object-cover rounded-xl shadow-lg mx-auto"
              src="https://i.pinimg.com/736x/30/18/dd/3018dd4b7f4c7f93451ccd954e70abb8.jpg"
              alt="Enhanced Tenant Experience"
            />
          </div>
          {/* Text */}
          <div className= "w-full md:w-1/2">
            <div className= "bg-white rounded-lg shadow-lg p-6">
              <h3 className= "text-xl font-semibold mb-2">Enhanced Tenant Experience</h3>
              <p className= "text-gray-600">
                We prioritize tenant satisfaction by providing a user-friendly portal for maintenance requests and communication.
              </p>
            </div>
          </div>
        </div>

        {/* Third Section: Real-Time Data Access (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              className="w-3/4 h-auto object-cover rounded-xl shadow-lg mx-auto"
              src="https://i.pinimg.com/564x/78/7f/43/787f43b794b38a3fd4d1e6bde069eee3.jpg"
              alt="Real-Time Data Access"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Real-Time Data Access</h3>
              <p className="text-gray-600">
                Our cloud-based platform provides real-time access to critical information, such as financial reports and property details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-400">
              At Boom Rental Harmony, we pride ourselves on delivering a seamless rental experience for both tenants and property owners. 
              Our cutting-edge platform automates and enhances the rental process.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-sm">Phone: N/A</p>
            <p className="text-sm">Email: info@boomrental.com</p>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul>
              <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Link 1</li>
              <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Link 2</li>
              <li className="text-sm text-gray-400 hover:text-white cursor-pointer">Link 3</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          <p>Copyright &copy; 2024 Boom Rental Harmony | Boom Rental Harmony</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Features;