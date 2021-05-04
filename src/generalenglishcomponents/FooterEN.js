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
                                <li><a href="/mobiledesktop-en">Mobile & Desktop development</a></li>
                                <li><a href="/basesarqui-en">Databases & Architecture</a></li>
                                <li><a href="/desarrolloweb-en">Web Development</a></li>
                                <li><a href="/soporte-en">Technical Support & Networks</a></li>
                                <li><a href="/otros-en">Others</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Apartados</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#services">Services</a></li>
                                <li><a href="/#experience">Experience</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>Contact</h3>
                            <p>
                                Si desea contactar por vía telefónica mándame antes de un correo o un mensaje mediante WhatsApp o SMS.
                            </p>
                            <br/>
                            <ul>
                                <li>E-Mail: abraham11999@hotmail.com</li>
                                <li>Phone: (614)599-60-26</li>
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
