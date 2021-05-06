import React from 'react'
import logo from '../images/profileultimate.png'
import MexicoSVG from '../images/mexicoflag.svg'
import USFlag from '../images/usflag.svg'

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div className='container'>
                    <a className="navbar-brand" href="/home-en">
                        <img className="logo" src={logo} alt="Logo..." />
                        <h4>Abraham Luna Cázares</h4>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="home-en/#header">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="home-en/#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="home-en/#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="home-en/#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="d-flex">
                    <a className="nav-link" href="/"><img className="language-flag" src={MexicoSVG} alt="mexico" /></a>
                    <a className="nav-link" href="/home-en"><img className="language-flag" src={USFlag} alt="mexico" /></a>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
