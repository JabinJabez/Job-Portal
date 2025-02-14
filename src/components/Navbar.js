import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white w-full fixed top-0">
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        <NavLink to="/" className="text-2xl font-bold">
          JobFinder
        </NavLink>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex space-x-8 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-bold" : "hover:text-gray-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-bold" : "hover:text-gray-200"
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-bold" : "hover:text-gray-200"
            }
          >
            Dashboard
          </NavLink>
        </ul>

        <NavLink
          to="/login"
          className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Login
        </NavLink>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-blue-700 px-6 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-bold" : "text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-bold" : "text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            Jobs
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-yellow-300 font-bold" : "text-white"
            }
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-center"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
