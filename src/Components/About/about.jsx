import React from "react";
import { motion } from "framer-motion";
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
        <motion.div 
          className="about_me"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="about_me_image">
            <img src={myImage} alt="Sourabh" />
          </div>
        </motion.div>

        <motion.div 
          className="about_content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="about_cards">
            <motion.article 
              className="about_card"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <GiGraduateCap className="about_icon" />
              <h5>Degree</h5>
              <small>
                B.tech. Computer Science <br />
                {/* <i>Poornima Institute Of Engineering and Technology</i> */}
              </small>
            </motion.article>

            <motion.article 
              className="about_card"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <TfiWorld className="about_icon" />
              <h5>Location</h5>
              <small>Nohar, Rajasthan</small>
            </motion.article>

            <motion.article 
              className="about_card"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <BsTelephoneForward className="about_icon" />
              <h5>Contact</h5>
              <small>
                <ul>
                  <li>+91-9783976444</li>
                  {/* <li>upadhyaysourabh12@gmail.com</li> */}
                </ul>
              </small>
            </motion.article>
          </div>
          <p>
            I'm Sourabh Upadhyay, a Full-Stack developer passionate about
            constructing robust, scalable, and efficient applications. My
            expertise spans MongoDB, Express.js, React.js, Node.js, Python, C++,
            and Django, with a focus on crafting solid backend architectures.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
