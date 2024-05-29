import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import ME from "/img/me.png";
import "./home.css";

const Home = () => {
  return (
    <header id="home">
      <div className="container home_container">
        <h5>Hello, I'm</h5>
        <h1>Sourabh Upadhyay</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <div className="cta">
          <a href="sourabh-resume.pdf" download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
        <div className="home_social">
          <a href="https://www.linkedin.com/in/sourabh-upadhyay-4597971aa/">
            <BsLinkedin />
          </a>

          <a href="https://github.com/sourabhupadhyay">
            <BsGithub />
          </a>

          <a href="">
            <BsMedium />
          </a>
        </div>

        <div className="me">
          <img src={ME} alt="Sourabh upadhyay" />
        </div>

        <a href="/contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Home;
