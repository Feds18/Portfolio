function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="navbar navbar-bg">
        <div className="navbar-container">
          <a
            href="#"
            className="navbar-brand"
            onClick={() => scrollToSection("home-section")}
          >
            Federico Ottaviani
          </a>
          <a
            href="#"
            className="nav-link"
            onClick={() => scrollToSection("About-section")}
          >
            About
          </a>
          <a
            href="#"
            className="nav-link"
            onClick={() => scrollToSection("project-section")}
          >
            Projects
          </a>
          <a
            href="#"
            className="nav-link hire"
            onClick={() => scrollToSection("contact-section")}
          >
            Contact Me
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
