import React from 'react'

import Header from '../homenglishcomponents/Header'
import About from '../homenglishcomponents/About'
import Services from '../homenglishcomponents/Services'
import Experience from '../homenglishcomponents/Experience'

import Navbar from '../generalenglishcomponents/NavbarEN'
import Footer from '../generalenglishcomponents/FooterEN'

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
