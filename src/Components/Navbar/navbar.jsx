import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { GoChecklist } from 'react-icons/go'
import { BiMessageSquareDetail } from 'react-icons/bi'
import './navbar.css'

const Navbar = () => {
  const [active, setactive] = useState("#")
  return (
    <nav>

        <a href="#home"
        onClick={() => setactive("#")}
        className={active === "#" ? "active" : ""}
        >
            <AiOutlineHome />
        </a>

        <a href="#about"
         onClick={() => setactive("#about")}
         className={active === "#about" ? "active" : ""}
         >
            <BiUser />
        </a>

        <a href="#experience"
         onClick={() => setactive("#experience")}
         className={active === "#experience" ? "active" : ""}
         >
            <FaLaptopCode />
        </a>

        <a href="#projects"
        onClick={() => setactive("#projects")}
        className={active === "#projects" ? "active" : ""}
        >
            <GoChecklist />
        </a>

        <a href="#contact"
        onClick={() => setactive("#contact")}
        className={active === "#contact" ? "active" : ""}
        >
            <BiMessageSquareDetail />
        </a>

    </nav>
  )
}

export default Navbar
