import { useEffect, useState } from "react";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Projects from "./assets/components/Projects";
import Navbar_Ham from "./assets/components/Navbar_Ham";

function App() {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {smallScreen ? <Navbar_Ham /> : <Navbar />}
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
