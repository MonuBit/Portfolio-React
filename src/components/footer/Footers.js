import React from "react";
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiHackerearth} from 'react-icons/si'


const Footers = () =>{
    return(
        <footer>
            <a href="#" className="footer__logo">Monu</a>
            <ul className="permalinks">
            <li><a href="#" >Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
            <a href="https://www.linkedin.com/in/monu-kumar-singh-67363216b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/MonuBit" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noreferrer"><SiHackerearth/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Monu. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footers;