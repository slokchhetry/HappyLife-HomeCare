import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              HealthStaff Connect
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/find-work" className="hover:text-blue-600">Find Work</Link>
            <Link to="/hire" className="hover:text-blue-600">Hire Staff</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 