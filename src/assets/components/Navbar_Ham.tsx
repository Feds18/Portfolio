import { useState, useRef } from "react";
import { scrollToSection } from "../Hooks/ScrollToSection";
import menu from "../images/menuham.png";

function Navbar_Ham() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-ham relative bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            className="navbar-brand-ham text-xl font-bold"
            onClick={() => scrollToSection("home-section")}
          >
            Federico Ottaviani
          </a>
          <div className="navbar-container-ham" ref={menuRef}>
            <img
              src={menu}
              alt="menu"
              className="btn-ham px-3 py-2 rounded bg-gray-700 hover:bg-gray-600"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-sections absolute left-0 w-full bg-white shadow-md text-gray-800">
          <div className="container mx-auto px-4">
            <a
              className="block py-3 border-b border-gray-200 hover:bg-gray-100"
              onClick={() => scrollToSection("About-section")}
            >
              About
            </a>
            <a
              className="block py-3 border-b border-gray-200 hover:bg-gray-100"
              onClick={() => scrollToSection("project-section")}
            >
              Projects
            </a>
            <a
              className="block py-3 hover:bg-gray-100"
              onClick={() => scrollToSection("contact-section")}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar_Ham;
