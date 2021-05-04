import React from 'react'

import Navbar from '../generalenglishcomponents/NavbarEN'
import Footer from '../generalenglishcomponents/FooterEN'

import ConectionSVG from '../images/plug.svg'
import QualitySVG from '../images/quality.svg'

const others = () => {
    return (
        <div>
            <Navbar/>
            <div className="otros">
                <div className="container">
                    <h2>Extra knowledge</h2>
                    <p>
                        Not everything is Software or computers, I recognize that to be a good asset for your company
                        i must have the versatility to identify problems and work on them, even if they are not necessarily
                        related to software and networks.
                    </p>
                    <h3>Quality Inspector</h3>
                    <div className="d-flex justify-content-center">
                        <img className="carousel-item-mainimg" src={QualitySVG} />
                    </div>
                    <p>
                        I worked as a quality inspector in a maquiladora company, i worked in various aspects
                        about quality inspection methods according to ISO standards applied to production lines,
                        in this case for car harnesses. I have basic elements for security mechanisms, staff training,
                        metrics, tolerances, and electrical connectors established by ISO 9000: 1.
                        <br/><br />
                        I have the ability to communicate with my co-workers and immediate superiors to have a good coexistence and a good 
                        work flow at the time of any unforeseen event such as: inconveniences within the line, accumulated work or difficulties between employees.
                    </p>
                    <h3>Electronics</h3>
                    <div className="d-flex justify-content-center">
                        <img className="carousel-item-mainimg" src={ConectionSVG} />
                    </div>
                    <p>
                    I have basic knowledge in the area of ​​electronics such as: microcontrollers, low level programming and soldering. 
                    I can apply this to automate tangible objects such as parking pens, lights, alarms and others. I also know how to work with proximity and 
                    temperature sensors to control or manage a system linked by Bluetooth. All this through Arduino mainly.
                    </p>
                    <br/><br/>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default others
