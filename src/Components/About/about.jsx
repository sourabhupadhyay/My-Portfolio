import React from "react";
import myImage from "/img/me2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsTelephoneForward } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={myImage} alt="Sourabh" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <h5>Degree</h5>
              <small>
                B.tech. Computer Science <br />
                <i>Poornima Institue Of Engeering and Technology</i>
              </small>
            </article>

            <article className="about_card">
              <TfiWorld className="about_icon" />
              <h5>Location</h5>
              <small>Nohar, Rajasthan</small>
            </article>

            <article className="about_card">
              <BsTelephoneForward className="about_icon" />
              <h5>Contact</h5>
              <small>
                <ul>
                  <li>+91-9783976444</li>
                  <li>upadhyaysourabh12@gmail.com</li>
                  <li></li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm Sourabh Upadhyay, a Full-Stack developer passionate about
            constructing robust, scalable, and efficient applications. My
            expertise spans MongoDB, Express.js, React.js, Node.js, Python, C++,
            and Django, with a focus on crafting solid backend architectures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
