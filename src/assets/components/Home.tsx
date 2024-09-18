export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home-section">
      <div className="bg-img">
        <h1 className="heading-primary">hi, i'm federico ottaviani</h1>
        <p className="text">
          A junior Front-end Web Developer focused on building Websites and Web
          Applications
        </p>
        <div className="btn">
          <button
            className="btn-projects"
            onClick={() => scrollToSection("project-section")}
          >
            Projects
          </button>
        </div>
      </div>
    </section>
  );
}
