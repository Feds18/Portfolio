import code from "../images/code.png";
import meteo from "../images/meteo.png";
import TODO from "../images/TODO.png";
import Arpa from "../images/Arpa.png";
export default function Projects() {
  return (
    <section id="project-section">
      <div className="container-projects">
        <img id="code-img" src={code} alt="" />
      </div>
      <div className="heading">
        <h1>Projects</h1>
        <button id="hr"></button>
        <p>Here are some of my personal projects that i created</p>
      </div>
      <ul className="content-list">
        <li className="content-items">
          <img src={meteo} alt="meteoApp" className="display-img" />
          <div className="project-details">
            <h2>MeteoApp</h2>
            <p>
              A Javascript app that uses the OpenWeatherMap API to fetch weather
              data and display it in a user-friendly interface.
            </p>
            <button
              className="goToProjects"
              onClick={() =>
                (window.location.href = "https://fedsmeteo.netlify.app")
              }
            >
              See project
            </button>
          </div>
        </li>
        <li className="content-items">
          <img src={TODO} alt="TOODApp" className="display-img" />
          <div className="project-details">
            <h2>ToDo App</h2>
            <p>
              A simple To-Do list app made with javascript. Users can add,
              delete, and mark tasks as completed.
            </p>
            <button
              className="goToProjects"
              onClick={() =>
                (window.location.href = "https://fedstodolist.netlify.app")
              }
            >
              See project
            </button>
          </div>
        </li>
        <li className="content-items">
          <img src={Arpa} alt="TOODApp" className="display-img" />
          <div className="project-details">
            <h2>Remtech Presentation</h2>
            <p>
              A web app showcasing ARPA Umbria's content for RemTech Expo. Users
              can explore environmental projects, presentations, and videos
            </p>
            <button
              className="goToProjects"
              onClick={() =>
                (window.location.href = "https://arpapresentation.netlify.app")
              }
            >
              See project
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}
