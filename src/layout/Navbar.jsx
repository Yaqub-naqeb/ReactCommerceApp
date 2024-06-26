import { useContext, useState } from "react";
import Hamburger from "hamburger-react";
import routes from "../routes/routeDefinations";
import { NavLink, useNavigation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { PiBagThin } from "react-icons/pi";
import { AuthContext } from "../components/context/AuthContext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigation();
  const { toggleAuth } = useContext(AuthContext);

  const pages = [
    { name: "Home", path: routes.root.path },
    { name: "Products", path: routes.products.path },
    { name: "Contact Us", path: routes.contact.path },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#4E80EE] p-4 fixed w-full z-40">
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
              className="text-gray-300 hover:bg-[#568bfd] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {page.name === "Products" ? (
                navigate.state === "loading" ? (
                  <BeatLoader size={10} color="#36d7b7" />
                ) : (
                  page.name
                )
              ) : (
                page.name
              )}
            </NavLink>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-300 hover:bg-[#568bfd] hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:bg-gray-[#568bfd] focus:text-white"
          >
            <Hamburger size={20} />
          </button>
        </div>
        <div className="hidden md:flex">
          <button
            type="button"
            className="text-gray-300 hover:bg-[#568bfd] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            <NavLink to={"/cart"} onClick={() => toggleAuth()}>
              <PiBagThin
                style={{
                  fontSize: "1.2rem",
                  color: " #ffffff",
                }}
              />
            </NavLink>
          </button>

          <button
            type="button"
            className="text-gray-300 hover:bg-[#568bfd] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Log In
          </button>
          <button
            type="button"
            className="text-gray-300 hover:bg-[#568bfd] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
              className="block text-gray-300 hover:bg-[#568bfd] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {page.name === "Products" ? (
                navigate.state === "loading" ? (
                  <BeatLoader size={10} color="#36d7b7" />
                ) : (
                  page.name
                )
              ) : (
                page.name
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
