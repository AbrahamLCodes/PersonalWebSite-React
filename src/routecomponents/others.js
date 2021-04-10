import React from 'react'

import Navbar from '../generalcomponents/Navbar'
import Footer from '../generalcomponents/Footer'

import ConectionSVG from '../images/plug.svg'
import QualitySVG from '../images/quality.svg'

const others = () => {
    return (
        <div className="otros">
            <Navbar />
            <div className="container">
                <h2>Conocimientos extras</h2>
                <p>
                    No todo es Software o computadoras, reconozco que para ser un buen activo para tu empresa 
                    debo tener la versatilidad para identificar problemas y trabajarlos aunque no necesariamente son 
                    relacionados al software y a las redes.  
                </p>
                <h3>Inspector de calidad</h3>
                <div className="d-flex justify-content-center">
                    <img className="carousel-item-mainimg" src={QualitySVG} />
                </div>
                <p>
                    Durante un tiempo trabajé como inspector de calidad en una empresa maquiladora, ahí, estuve aprendiendo distintas
                    cosas acerca de los métodos de inspección de calidad de las normas ISO aplicadas a líneas de producción,
                    en mi caso, para arneses de autos. Sé como funcionan las normas de seguridad, de cualificación de personal, de
                    métricas, tolerancias, y conectores eléctricos establecidos por la norma ISO 9000:1. Definitivamente no solo puedo ejercer 
                    en el área del Software, si no también en los sectores de calidad de las industrias manufacturera.
                    <br/><br/>
                    Esto también me desarrolló la habilidad de comunicación con mis compañeros de trabajo y jefes para tener una 
                    buena convivencia y tener un buen flujo de trabajo al momento de que se presentase algun imprevisto o
                    problema dentro de la línea de producción o entre nosotros.
                </p>
                <h3>Electrónica</h3>
                <div className="d-flex justify-content-center">
                    <img className="carousel-item-mainimg" src={ConectionSVG} />
                </div>
                <p>
                    Además del Sofwtare, tengo conocimientos acerca de microcontroladores, programación a bajo nivel, soldadura y
                    componentes electrónicos. Esto lo puedo aplicar para automatizar cosas tangibles tales como plumas, luces, alarmas, y
                    otras cosas básicas. Además sé trabajar con sensores de proximidad y de temperatura para controlar o gestionar algún sistema
                    enlazado mediante Bluetooth.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default others
