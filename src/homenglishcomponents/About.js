import React from 'react'
import logo from '../images/profileultimate.png'
//rafce
const About = () => {
    return (
        <div className = "container about" id = "about">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div className = "d-flex column flex-column">
                        <img className = "logo-about" src = {logo} alt = "Logo..."/> 
                        <p className = "name-about">Abraham Luna Cázares</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 about-description">
                    <h3>About me</h3>
                    <p>
                        Current Informatics Engineering Intern at the Technological Institute of Chihuahua II. <br/><br/>
                        Full-Stack JR developer specializing in mobile device application development, 
                        I have versatility to develop most of the modules that a system may need according to the requirements; self-taught, adaptable to changes and technologies
                        with which you have to work. I recognize the evolution, the demand and the discipline that the global industry requires;
                        I want my knowledge to be an asset for your company.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
