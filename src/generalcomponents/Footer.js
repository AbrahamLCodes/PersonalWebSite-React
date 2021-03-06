import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div class="footer-dark" id = "footer">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Servicios</h3>
                            <ul>
                                <li><a href="/mobiledesktop">Desarrollo Móvil y Desktop</a></li>
                                <li><a href="/basesarqui">Bases de datos y Arquitectura</a></li>
                                <li><a href="/desarrolloweb">Desarrollo web</a></li>
                                <li><a href="/soporte">Soporte técnico y redes</a></li>
                                <li><a href="/otros">Otros</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Apartados</h3>
                            <ul>
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/#about">Acerca de mí</a></li>
                                <li><a href="/#services">¿Qué puedo hacer?</a></li>
                                <li><a href="/#experience">Mi experiencia</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Contácto</h3>
                            <ul>
                                <li>Correo: abraham11999@hotmail.com</li>
                                <li>Teléfono: (614)599-60-26</li>
                            </ul>
                        </div>
                        <div class="col item social">
                            <a href="https://play.google.com/store/apps/developer?id=Software+Tizona" target = "_blank"><FontAwesomeIcon icon={faGooglePlay}/></a>
                            <a href="https://github.com/AbrahamLCodes" target = "_blank"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="https://www.instagram.com/abraham.l.c/?hl=es-la" target = "_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
                    </div>
                    <p class="copyright">Abraham Luna Cázares © 2021</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
