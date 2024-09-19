import { scrollToSection } from "../Hooks/ScrollToSection";

export default function Home() {
  return (
    <section id="home-section">
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
    </section>
  );
}
