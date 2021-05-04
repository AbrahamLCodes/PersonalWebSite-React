import React from 'react'
import logo from '../images/profilepage.jpg'

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className='container-fluid'>
                <a className="navbar-brand" href="/">
                    <img className="logo" src={logo} alt="Logo..." />
                    <h4>Abraham Luna Cázares</h4>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#header">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about">Acerca de mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#services">¿Qué puedo hacer?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#experience">Mi experiencia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contácto</a>
                        </li>
                        <li className="nav-item">
                        <select class="selectpicker" data-width="fit">
                                <option value = "/" data-content='<span class="flag-icon flag-icon-us"></span>'>Español</option>
                                <option value = "/home-en" data-content='<span class="flag-icon flag-icon-mx"></span>'>English</option>
                        </select>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
