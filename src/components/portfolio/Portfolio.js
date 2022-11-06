import React from "react";
import './portfolio.css'
import meal from '../../assets/meal.jpg'
import weather from '../../assets/weather.jpg'
import tindog from '../../assets/tindog.jpg'


const Portfolio = () =>{
    return (
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={meal} alt= "react-meak" className="meal"/>
                    </div>
                    <h3>ReactMeal - Food ordering Web Application </h3>
                    <div className="portfolio-items-cta">
                    <a href="https://github.com/MonuBit/React-Meal" className="btn">Github</a>
                    <a href="https://startling-strudel-c4220f.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>

                    </div>
               
                </article>

                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={weather} alt= "react-meak" className="weather"/>
                    </div>
                    <h3>Live Weather - Live Weather Application</h3>
                    <div className="portfolio-items-cta">
                    <a href="https://github.com/MonuBit/Weather-live" className="btn">Github</a>
                    <a href="https://63136f956702a727d289dcb4--chic-gecko-a45e05.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>

                    </div>
                  
                </article>

                <article className="portfolio__items">
                    <div className="portfolio__item-image">
                        <img src={tindog} alt= "tindog" className="tindog"/>
                    </div>
                    <h3>Tindog - Dog Web Application</h3>
                    <div className="portfolio-items-cta">
                    <a href="https://github.com/MonuBit" className="btn">Github</a>
                    <a href="https://monubit.github.io/SinglePageWebsite/index" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                   

                </article>
            </div>
        </section>
    )
}

export default Portfolio;