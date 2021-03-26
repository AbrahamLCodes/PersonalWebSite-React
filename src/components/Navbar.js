import React from 'react'
import logo from '../images/profilepage.jpg'

// REACT FONTAWESOME IMPORTS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className = 'container'>
                <a className="navbar-brand" href="#"> 
                    <img className = "logo" src = {logo} alt = "Logo..."/> 
                    <h4>Ing. Abraham Luna</h4>
                </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon = {faBars} style = {{color : 'white'}}/>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca de mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Experiencia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">¿Cómo trabajo?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contácto</a>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar
