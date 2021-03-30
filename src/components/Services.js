import React from 'react'
import WebIcon from '../images/red-mundial.png'
import MobileIcon from '../images/desarrollo-de-aplicaciones.png'
import SupportIcon from '../images/technical-support.png'
import DbIcon from '../images/database-storage.png'
import IsoLogo from '../images/iso.png'

const Services = () => {
    return (

        <div className = "services">
            <h2>¿Qué puedo hacer?</h2>
            <div className = "container-fluid d-flex justify-content-around">
                <div className = "row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-5">
                    <div className = "col mb-4 d-flex align-items-stretch">
                        <div className = "card text-center border-dark">
                            <img src={WebIcon} class="card-img-top card-image" alt="WebIcon"/>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Desarrollo Web</h5>
                                <p class="card-text">Con ReactJs y Bootstrap para el Front-End y NodeJs, C#, Java o Go para el Back-End
                                                    puedo desarrollar Software para web a la medida</p>                                                                
                                <a href="#" class="btn mt-auto btn-outline-secondary card-btn">Más información</a>
                            </div>
                        </div>
                    </div>
                    <div className = "col mb-4 d-flex align-items-stretch">
                        <div className = "card text-center border-dark">
                            <img src={MobileIcon} class="card-img-top card-image" alt="WebIcon"/>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Desarrollo Móvil</h5>
                                <p class="card-text">Con Kotlin, Java, Swift y React Native puedo desarrollar Apps nativas e híbridas 
                                para iOS y Android</p>                                                               
                                <a href="#" class="btn mt-auto btn-outline-secondary card-btn">Más información</a>
                            </div>
                        </div>
                    </div>

                    <div className = "col mb-4 d-flex align-items-stretch">
                        <div className = "card text-center border-dark">
                            <img src={DbIcon} class="card-img-top card-image" alt="WebIcon"/>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Bases de Datos y Arquitectura</h5>
                                <p class="card-text">Con MySql, PostgreSql y Mongo puedo gestionar la información de sistemas existentes o en desarrollo</p>
                                <a href="#" class="btn mt-auto btn-outline-secondary ">Más información</a>
                            </div>
                        </div>
                    </div>

                    <div className = "col mb-4 d-flex align-items-stretch">
                        <div className = "card text-center border-dark">
                            <img src={SupportIcon} class="card-img-top card-image" alt="WebIcon"/>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Soporte Técnico y Redes</h5>
                                <p class="card-text">Tengo conocimiento en redes y soporte técnico para brindar soporte y ayuda a los diferentes departamentos 
                                                    de las empresas</p>
                                <a href="#" class="btn mt-auto btn-outline-secondary ">Más información</a>                                       
                            </div>
                        </div>
                    </div>

                    <div className = "col mb-4 d-flex align-items-stretch">
                        <div className = "card text-center border-dark">
                            <img src={IsoLogo} class="card-img-top card-image" alt="WebIcon"/>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Otros </h5>
                                <p class="card-text">Tengo conocimientos como Inspector de calidad en el sector industrial y de robótica a nivel microcontrolador.</p>
                                <a href="#" class="btn mt-auto btn-outline-secondary ">Más información</a>                                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

