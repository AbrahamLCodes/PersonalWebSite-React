import React from 'react'

import Particles from 'react-particles-js'
import Header from '../homecomponents/Header'
import About from '../homecomponents/About'
import Services from '../homecomponents/Services'
import Experience from '../homecomponents/Experience'

import Navbar from '../generalcomponents/Navbar'
import Footer from '../generalcomponents/Footer'

const home = () => {
    return (
        <div>
            <Particles
            className = "particles-canvas"
            params = {{
                particles : {
                number : {
                    value : 30,
                    density : {
                    enable : true,
                    value_area : 900
                    }
                },
                shape : {
                    type : "circle",
                    stroke : {
                    width : 6,
                    color : "#f9ab00"
                    }
                }
                }
            }}/>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>
            <Experience/>
            <Footer/>
        </div>
    )
}

export default home
