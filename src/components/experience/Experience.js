import React from "react";
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () =>{
    return(
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                        </div>   
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>Javascript</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                       
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>JQuery</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                       
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>React.js</h4>
                        <small className="text-light">Experienced</small>

                        </div>
                      
                        </article>

                        

                    </div>


                </div>

                <div className="experience__automation">
                <h3>Automation</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>App Automation</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                       
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>

                        <div>
                        <h4>Web Automation</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                     
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>

                        <div>
                        <h4>Api Automation</h4>
                        <small className="text-light">Experienced</small>

                        </div>
                      
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>Load Testing</h4>
                        <small className="text-light">Experienced</small>

                        </div>
                       
                        </article>
                    </div>

                    
                </div>

                <div className="experience__design">
                <h3>Graphics Design</h3>
                <div className="experience__content">
                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>Adobe Illustrator</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <div>
                        <h4>Adobe Photoshop</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                     
                        </article>

                        <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />

                        <div>
                        <h4>Figma</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                       
                        </article>

                      
                        
                    </div>
                    
                    </div>
            </div>
        </section>
    )
}

export default Experience