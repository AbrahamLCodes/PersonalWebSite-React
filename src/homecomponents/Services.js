import React from 'react'
import WebIcon from '../images/red-mundial.png'
import MobileIcon from '../images/gadget.png'
import SupportIcon from '../images/technical-support.png'
import DbIcon from '../images/database-storage.png'
import IsoLogo from '../images/iso.png'

import { Link } from "react-router-dom"

const Services = () => {
    return (
        <div className="services" id="services">
            <h2>¿Qué puedo hacer?</h2>
            <div className="container-fluid d-flex justify-content-around">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-5">
                    <div className="col mb-4 d-flex align-items-stretch">
                        <div className="card text-center border-dark">
                            <img src={MobileIcon} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Desarrollo Móvil y Desktop</h5>
                                <p class="card-text">Con Kotlin, Java, Swift, React Native y C# puedo desarrollar Apps nativas e híbridas
                                    para iOS y Android. Además, Apps multiplataforma para Windows, MacOS y GNU.</p>
                                <Link to={"/mobiledesktop"} class="btn mt-auto btn-info card-btn">Más información</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4 d-flex align-items-stretch">
                        <div className="card text-center border-dark">
                            <img src={DbIcon} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Bases de Datos y Arquitectura</h5>
                                <p class="card-text">Con MySql, PostgreSql y Mongo puedo gestionar la información de sistemas existentes o en desarrollo. En la nube o local.</p>
                                <Link to={"/basesarqui"} class="btn mt-auto btn-info card-btn">Más información</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4 d-flex align-items-stretch">
                        <div className="card text-center border-dark">
                            <img src={WebIcon} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Desarrollo Web</h5>
                                <p class="card-text">Con ReactJS y Bootstrap para el Front-End y NodeJs, C#, Java o Go para el Back-End
                                                        puedo desarrollar o gestionar soluciones Web.</p>
                                <Link to={"/desarrolloweb"} class="btn mt-auto btn-info card-btn">Más información</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4 d-flex align-items-stretch">
                        <div className="card text-center border-dark">
                            <img src={SupportIcon} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Soporte Técnico y Redes</h5>
                                <p class="card-text">Tengo conocimiento en redes y soporte técnico para brindar soporte, ayuda y conectividad en los diferentes departamentos
                                                        de las empresas.</p>
                                <Link to={"/soporte"} class="btn mt-auto btn-info card-btn">Más información</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-4 d-flex align-items-stretch last-card">
                        <div className="card text-center border-dark">
                            <img src={IsoLogo} class="card-img-top card-image" alt="WebIcon" />
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Otros </h5>
                                <p class="card-text">Tengo conocimientos como Inspector de calidad en el sector industrial y de robótica a nivel microcontrolador.</p>
                                <Link to={"/otros"} class="btn mt-auto btn-info card-btn">Más información</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

