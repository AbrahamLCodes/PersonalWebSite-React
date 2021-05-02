import React from 'react'

import Header from '../homecomponents/Header'
import About from '../homecomponents/About'
import Services from '../homecomponents/Services'
import Experience from '../homecomponents/Experience'

import Navbar from '../generalcomponents/Navbar'
import Footer from '../generalcomponents/Footer'

const home = () => {
    return (
        <div>
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
