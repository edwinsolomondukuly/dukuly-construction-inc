import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h5 className="text-xl font-bold mb-4">ConstructCo</h5>
          <p className="text-gray-400">Building dreams into reality with excellence and innovation.</p>
        </div>
        
        <div>
          <h5 className="text-xl font-bold mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Services</a></li>
            <li><a href="#projects" className="text-gray-400 hover:text-yellow-400">Projects</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xl font-bold mb-4">Contact Info</h5>
          <ul className="space-y-2 text-gray-400">
            <li>123 Construction Ave</li>
            <li>New York, NY 10001</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@constructco.com</li>
          </ul>
        </div>

        <div>
          <h5 className="text-xl font-bold mb-4">Follow Us</h5>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2023 ConstructCo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
