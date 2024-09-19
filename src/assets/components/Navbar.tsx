import { scrollToSection } from "../Hooks/ScrollToSection";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a
          className="navbar-brand"
          onClick={() => scrollToSection("home-section")}
        >
          Federico Ottaviani
        </a>
        <a className="nav-link" onClick={() => scrollToSection("home-section")}>
          Home
        </a>
        <a
          className="nav-link"
          onClick={() => scrollToSection("About-section")}
        >
          About
        </a>
        <a
          className="nav-link"
          onClick={() => scrollToSection("project-section")}
        >
          Projects
        </a>
        <a
          className="nav-link hire"
          onClick={() => scrollToSection("contact-section")}
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
