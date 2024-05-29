import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer_logo'>Sourabh upadhyay</a>
        <ul className='links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer_social">
            <a href="https://www.linkedin.com/in/sourabh-upadhyay-4597971aa/"><BsLinkedin/></a>
            <a href="https://github.com/sourabhupadhyay"><BsGithub/></a>
            <a href=""><BsMedium/></a>
        </div>

        <div className="footer_copyright">
            <small>&copy; Sourabh upadhyay .All Right Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
