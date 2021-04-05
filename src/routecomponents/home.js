import React from 'react'
import Header from '../components/Header'
import Particles from 'react-particles-js'
import About from '../components/About'
import Services from '../components/Services'
import Experience from '../components/Experience'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
