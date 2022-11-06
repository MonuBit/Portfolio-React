import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiHackerearth} from 'react-icons/si'
import './header.css'

const HeaderSocial = () =>{
    return (
        <div className="header__social">
            <a href="https://www.linkedin.com/in/monu-kumar-singh-67363216b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/MonuBit" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noreferrer"><SiHackerearth/></a>
        </div>
    )
}

export default HeaderSocial;