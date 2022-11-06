import React from "react";
import './about.css'
import myimage from '../../assets/me-about.jpg' 
import {FaAward} from 'react-icons/fa'
import {FaBrain} from 'react-icons/fa'
import {AiFillFolder} from 'react-icons/ai'


const About = () =>{
    return (
        <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className='about__me'>
            <div className="about__me-image">
                <img src={myimage} alt = "AboutMe" className="imgs" />
            </div>

            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h3>Experience</h3>
                        <small>1+ Years Working</small>
                    </article>

                    <article className="about__card">
                        <FaBrain className="about__icon"/>
                        <h3>Skills</h3>
                        <small>
                        <l1>
                        <ul>React Developer</ul>
                        <ul>Automation</ul>
                        <ul>Graphics Design</ul>
                        </l1>

                        </small>
                      
                        
                    </article>

                    <article className="about__card">
                        <AiFillFolder className="about__icon"/>
                        <h3>Projects</h3>
                        
                        <small>10+ Projects</small>
                        
                        
                    </article>
                </div>

                <p className="textitem">I've always been a good problem solver, an independent introvert, and a technophile obsessed with the latest devices.
                I started learning to code when I was in college,though it was always more of a hobby than a career focus. Near the end of my college education in Electronics and Telecommunication ,
                and continuing to pursue that hobby, I realised software engineering was the right field for me.<br/>
                Contact with  me for giving me opportunity to work with you.
                </p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>

            </div>
        </div>
        </section>
    )
}

export default About;