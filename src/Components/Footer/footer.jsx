import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsMedium } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './footer.css';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.a href="#home" className='footer_logo' variants={linkVariants}>Sourabh Upadhyay</motion.a>
      
      <motion.ul className='links' variants={footerVariants}>
        <motion.li variants={linkVariants}><a href="#home">Home</a></motion.li>
        <motion.li variants={linkVariants}><a href="#about">About</a></motion.li>
        <motion.li variants={linkVariants}><a href="#experience">Experience</a></motion.li>
        <motion.li variants={linkVariants}><a href="#projects">Projects</a></motion.li>
        <motion.li variants={linkVariants}><a href="#contact">Contact</a></motion.li>
      </motion.ul>

      <motion.div className="footer_social" variants={footerVariants}>
        <motion.a href="https://www.linkedin.com/in/sourabh-upadhyay-4597971aa/" variants={linkVariants}><BsLinkedin /></motion.a>
        <motion.a href="https://github.com/sourabhupadhyay" variants={linkVariants}><BsGithub /></motion.a>
        <motion.a href="" variants={linkVariants}><BsMedium /></motion.a>
      </motion.div>

      <motion.div className="footer_copyright" variants={footerVariants}>
        <small>&copy; Sourabh Upadhyay. All Rights Reserved.</small>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
