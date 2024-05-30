import React from "react";
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";
import { motion } from "framer-motion";
import ME from "/img/me.png";
import "./home.css";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', delay: 0.2, stiffness: 50 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1 }
    }
  };

  return (
    <motion.header id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="container home_container">
        <motion.h5 variants={itemVariants}>Hello, I'm</motion.h5>
        <motion.h1 variants={itemVariants}>Sourabh Upadhyay</motion.h1>
        <motion.h5 className="text-light" variants={itemVariants}>
          Full-Stack Developer
        </motion.h5>
        <motion.div className="cta" variants={itemVariants}>
          <a href="sourabh-resume.pdf" download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </motion.div>
        <motion.div className="home_social" variants={itemVariants}>
          <a href="https://www.linkedin.com/in/sourabh-upadhyay-4597971aa/">
            <BsLinkedin />
          </a>
          <a href="https://github.com/sourabhupadhyay">
            <BsGithub />
          </a>
          <a href="">
            <BsMedium />
          </a>
        </motion.div>
        <motion.div className="me" variants={itemVariants}>
          <img src={ME} alt="Sourabh upadhyay" />
        </motion.div>
        <motion.a href="#contact" className="scroll_down" variants={itemVariants}>
          Scroll Down
        </motion.a>
      </motion.div>
    </motion.header>
  );
};

export default Home;
