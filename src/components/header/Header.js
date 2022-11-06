import React, { useEffect, useState } from "react";
import './header.css'
import Cta from './Cta'
import Me from  '../../assets/me.png'
import HeaderSocial from "./HeaderSocial";
import Typist from "react-typist";



const Header = () =>{
    const [count, setcount] = useState(1);

    useEffect(()=>{
        setcount(1);
    },[count])
    return (
    <header>
        <div className="container header__container">
            <h5>Hello I 'm</h5>
            <h1>Monu Kumar Singh</h1>

            
        
            {count ? (
        <Typist className = "text-light" avgTypingDelay={50} onTypingDone={() => setcount(0)}>
          <span> React Developer</span>
          <Typist.Backspace count={20} delay={1000} />
          <span>Automation</span>
          <Typist.Backspace count={20} delay={1000} />
          <span>Graphics Designer</span>
          <Typist.Backspace count={20} delay={1000} />
        </Typist>
      ) : (
        ""
      )}
          
            <Cta/>
            <HeaderSocial/>
            <div className="me">
                <img  className = "mesize" src={Me} alt=""/>
            </div>

            <a href="#contact" className="scroll__down">scroll down</a>
            
        </div>
    </header>
    )
}

export default Header;