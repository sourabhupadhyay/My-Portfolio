import "./App.css";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Experience from "./Components/Experience/experience";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/navbar";
import Project from "./Components/Projects/project";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
