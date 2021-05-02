import React from 'react'

import Navbar from '../generalcomponents/Navbar'
import Footer from '../generalcomponents/Footer'

import ConectionSVG from '../images/plug.svg'
import QualitySVG from '../images/quality.svg'

const others = () => {
    return (
        <div>
            <Navbar/>
            <div className="otros">
                <div className="container">
                    <h2>Conocimientos extras</h2>
                    <p>
                        No todo es Software o computadoras, reconozco que para ser un buen activo para tu empresa
                        debo tener la versatilidad para identificar problemas y trabajarlos aunque no necesariamente sean
                        relacionados al software y a las redes.
                    </p>
                    <h3>Inspector de calidad</h3>
                    <div className="d-flex justify-content-center">
                        <img className="carousel-item-mainimg" src={QualitySVG} />
                    </div>
                    <p>
                        Trabajé como inspector de calidad en una empresa maquiladora, desarrollé diversos aspectos
                        acerca de los métodos de inspección de calidad según las normas ISO aplicadas a líneas de producción,
                        en este caso para arneses de autos. Tengo elementos básicos para mecanismos de seguridad, capacitación de personal,
                        métricas, tolerancias, y conectores eléctricos establecidos por la norma ISO 9000:1.
                        <br/><br />
                        Tengo habilidad para comunicarme con mis compañeros de trabajo y superiores inmediatos para tener una
                        buena convivencia y un buen flujo de trabajo al momento de presentarse algun imprevisto tal como:
                        inconvenientes dentro de la línea, trabajo acumulado o dificultad entre empleados.
                    </p>
                    <h3>Electrónica</h3>
                    <div className="d-flex justify-content-center">
                        <img className="carousel-item-mainimg" src={ConectionSVG} />
                    </div>
                    <p>
                        Tengo conocimientos básicos en el área de electrónica tales como: microcontroladores, programación a bajo nivel y soldadura
                        . Esto lo puedo aplicar para automatizar objetos tangibles tales como plumas de estacionamiento, luces, alarmas y
                        otros. Además sé trabajar con sensores de proximidad y de temperatura para controlar 
                        o gestionar algún sistema enlazado mediante Bluetooth. Todo esto mediante Arduino principalmente.
                    </p>
                    <br/><br/>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default others
