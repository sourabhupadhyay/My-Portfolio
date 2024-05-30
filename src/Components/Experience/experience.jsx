import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./experience.css";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience_container">
        <motion.div
          className="experience_frontend"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Front-End Development</h3>
          <div className="experience_content">
            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>React.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>
          </div>
        </motion.div>

        <motion.div
          className="experience_backend"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Back-End Development</h3>
          <div className="experience_content">
            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Node.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Sql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Express.Js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>

            <motion.article className="experience_detail" variants={itemVariants}>
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Apache</h4>
                <small className="text-light">Beginner</small>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
