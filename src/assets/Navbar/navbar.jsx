import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Navrouter() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skillset", href: "#skillset" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white fixed w-full left-2 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-teal-500 font-serif text-2xl font-bold">Sri</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-12 p-8 font-serif font-semibold text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-blue-600 transition">
                <HashLink smooth to={link.href}>
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl absolute  inset-x-6 text-teal-500 w-auto focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center bg-white  space-y-4 font-serif font-semibold text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <HashLink
                smooth
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-blue-600 transition"
              >
                {link.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navrouter;
