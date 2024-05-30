import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { motion } from 'framer-motion';
import './navbar.css';

const Navbar = () => {
  const [active, setActive] = useState("#");

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    click: {
      scale: 0.9,
      transition: {
        duration: 0.2,
      }
    }
  };

  return (
    <nav>
      <motion.a 
        href="#home"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
        variants={iconVariants}
        whileHover="hover"
        whileTap="click"
      >
        <AiOutlineHome />
      </motion.a>

      <motion.a 
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
        variants={iconVariants}
        whileHover="hover"
        whileTap="click"
      >
        <BiUser />
      </motion.a>

      <motion.a 
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
        variants={iconVariants}
        whileHover="hover"
        whileTap="click"
      >
        <FaLaptopCode />
      </motion.a>

      <motion.a 
        href="#projects"
        onClick={() => setActive("#projects")}
        className={active === "#projects" ? "active" : ""}
        variants={iconVariants}
        whileHover="hover"
        whileTap="click"
      >
        <GoChecklist />
      </motion.a>

      <motion.a 
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
        variants={iconVariants}
        whileHover="hover"
        whileTap="click"
      >
        <BiMessageSquareDetail />
      </motion.a>
    </nav>
  );
}

export default Navbar;
