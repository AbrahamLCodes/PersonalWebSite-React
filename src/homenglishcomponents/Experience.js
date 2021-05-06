import React from 'react'

import Apps from '../images/experience-apps.png'
import I1 from '../images/i1.png'
import I2 from '../images/i2.png'
import I3 from '../images/i3.png'
import C1 from '../images/image-dron.jpeg'
import Contec from '../images/contec-img.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'


const Experience = () => {
    return (
        <div className = "container experience" id = "experience">
                <h2>My experience</h2>
                <p>
                    Take a look the real projects that I have carried out, the achievements that I have obtained and
                    the events in which I have participated.
                </p>
                <h3>Software sold to companies</h3>

                <div className = "row experience-article">

                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12">
                        <p className = "col-text">During February 2021 I participated in the development of a native Android App programmed with Kotlin for a security company in Chihuahua. I was the manager
                        of creating logic modules, data modeling, graphical interface functionality, functions to automatically generate PDFs with the format
                        specified by the company and also in the development of the graphical interface.
                        </p>
                    </div>
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12 row lower-col">  
                        <div className = "row row-cols-2 ">
                            <div className = "col">
                                <div className = "d-flex justify-content-end">
                                    <img className = "potrait-img-sm " src = {I1}/>
                                </div>
                            </div>
                            <div className = "col">
                                    <img className = "potrait-img-sm " src = {I2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <h3>Freelancer Software</h3>
                <div className = "row experience-article">
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className = "d-flex justify-content-center">
                            <img className = "landscape-img" src = {Apps}/>
                        </div>
                    </div>
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12 col-content d-flex flex-column lower-col">
                        <p className = "col-text">Between April 2020 and February 2021 as a Freelancer I developed several applications which you can see in the Playstore, they have had good
                           acceptance by users. These Apps were made for Android natively with Java and Kotlin.
                           In addition, 2 of the 3 have a relational database made in SQLite.
                        </p>
                        <a href="https://play.google.com/store/apps/developer?id=Software+Tizona" target = "_blank" class="btn btn-info experience-button mt-auto">Ir a la Playstore  <FontAwesomeIcon icon={faPlayCircle} /></a>                                       
                    </div>
                </div>
                <hr/>
                <h3>Hackathons and Tournaments</h3>
                <div className = "row experience-article">
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12">
                        <p className = "col-text">During the university I participated in 4 hackathons of different organizations:</p>
                        <ul>
                            <li>NASA Hackathon "Space Apps": October 2020</li>
                            <li>Syscom Hackathon: November 2019</li>
                            <li>Hackathon Heineken "Hack2Beer": October 2019</li>
                            <li>Local Robotics and Software Contest of the Technological Institute of Chihuahua II: June 2019</li>
                        </ul>
                        <p className = "col-text">I got first place in the local Technological Robotics contest thanks to a drone
                        anti-fire that was controlled by bluetooth through the cell phone. I also got a second place at the Heineken Hackathon
                        with a Software and a proposal through a Smartband for the monitoring of errors of the production lines.</p>
                    </div>
                    <div className = "col col-lg-6 col-md-12 col-sm-12  col-12">
                        <div className = "d-flex justify-content-center">
                            <img className = "landscape-img" src = {C1}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <h3>Quality Inspector</h3>
                <div className = "row experience-article">
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12 col-img-container d-flex justify-content-center">
                        <div className = "d-flex justify-content-center">
                            <img className = "portrait-img" src = {Contec}/>
                        </div>
                    </div>
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12 col-content d-flex flex-column lower-row">
                        <p className = "col-text">Before becoming a developer, I worked for several months as a quality inspector in the maquiladora company
                        Conductores Tecnologicos de Juarez, better known as "Contec". There I learned important aspects about
                        ISO certifications such as:
                        </p>
                        <ul>
                            <li>Measurement and tolerance of planes.</li>
                            <li>Operational standards in production lines.</li>
                            <li>Safety rules.</li>
                            <li>Certification and qualification of personnel.</li>
                        </ul>
                        <p>Therefore, I have knowledge both in the Software area and in the industrial sector.</p>
                    </div>
                </div>
        </div>
    )
}

export default Experience
