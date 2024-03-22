import { useState } from "react";
import Hamburger from "hamburger-react";

import routes from "../routes/routeDefinations";
import { NavLink,useNavigation } from "react-router-dom";

import {MoonLoader,BeatLoader,SyncLoader} from 'react-spinners'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate=useNavigation();


  const pages = [
    { name: "Home", path: routes.root.path },
    { name: "Products", path: routes.products.path },
    { name: "Cart", path: routes.cart.path },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold">Ecommerce</span>
        </div>
        {/* Main Menu for larger screens */}
        <div className="hidden md:flex justify-center items-center space-x-4">
          {pages.map((page) => (
            <NavLink
              key={page.name}
              to={page.path}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              { page.name==='Products' ? navigate.state==='loading'?<BeatLoader size={10} color="#36d7b7" />:page.name:page.name}
            </NavLink>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            <Hamburger size={20} />
          </button>
        </div>
        <div className="hidden md:flex">
          <button
            type="button"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Log In
          </button>
          <button
            type="button"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-2 md:mt-0`}>
        <div className="flex flex-col items-left">
          {pages.map((page) => (
            <NavLink
              key={page.name}
              to={page.path}
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {navigate.state==='loading'?'loading':page.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
