import { scrollToSection } from "../Hooks/ScrollToSection";

export default function About() {
  return (
    <section id="About-section">
      <div className="heading">
        <h1>About me</h1>
        <button id="hr"></button>
        <p>Here are some information about me</p>
      </div>
      <div className="about-content">
        <div className="know-me-section">
          <h2>Get to know me!</h2>
          <p>
            Hi! I'm Federico Ottaviani, a Junior Frontend Web Developer from
            Terni. I've mostly worked on personal projects so far, which has
            been a great learning experience. I'm excited to bring my skills to
            new challenges and work with others in the industry. If you’re
            interested in connecting or just want to chat about web development,
            feel free to reach out!
          </p>
          <button
            className="content-button"
            onClick={() => scrollToSection("contact-section")}
          >
            Contact me
          </button>
        </div>
        <div className="skill-section">
          <h2>My Skills</h2>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">C#</div>
          </div>
        </div>
      </div>
    </section>
  );
}
