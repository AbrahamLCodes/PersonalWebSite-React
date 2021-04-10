import React from 'react'

import Apps from '../images/experience-apps.png'
import I1 from '../images/i1.png'
import I2 from '../images/i2.png'
import I3 from '../images/i3.png'
import C1 from '../images/image-dron.jpeg'
import Contec from '../images/contec-img.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'


const Experience = () => {
    return (
        <div className = "container experience" id = "experience">
                <h2>Mi experiencia</h2>
                <p>
                    Te invito a que veas los proyectos reales que he realizado, los logros que he obtenido y
                    los eventos en los que he participado.
                </p>
                <div className = "row experience-article">

                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12">
                        <h3>Software vendido a empresas</h3>
                        <p className = "col-text">Durante febrero del 2021 participé en el desarrollo de una App Android nativa programada con Kotlin para una empresa de seguridad en fraccionamientos y residenciales de Chihuahua. Fui el encargado 
                        de crear los módulos lógicos, el modelado de datos, la funcionalidad de la interfaz gráfica, funciones para generar automáticamente PDFs con el formato
                        específicado por la empresa y también en el desarrollo de la interfaz gráfica.</p>
                    </div>

                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12 row lower-col">  
                        <div className = "row row-cols-2 col-img d-flex justify-content-center">
                            <div className = "col">
                                <img className = "potrait-img-sm " src = {I2}/>
                            </div>
                            <div className = "col">
                                <img className = "potrait-img-sm " src = {I3}/>
                            </div>
                        </div>
                    </div>

                </div>

                <hr/>

                <div className = "row experience-article">
                    <div className = "col col-lg-6 col-md-12 col-sm-12  col-12 d-flex justify-content-center">
                        <img className = "landscape-img" src = {Apps}/>
                    </div>
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12 col-content d-flex flex-column lower-col">
                        <h3>Software Freelancer</h3>
                        <p className = "col-text">Entre abril del 2020 y febrero del 2021 como Freelancer desarrollé varias aplicaciones las cuales puedes verlas en la Playstore, han tenido buena
                           aceptación por parte de los usuarios. Estas Apps fueron hechas para Android de manera nativa con Java y Kotlin.
                           Además, 2 de las 3 cuentan con una base de datos relacional hecha en SQLite.
                        </p>
                        <a href="https://play.google.com/store/apps/developer?id=Software+Tizona" target = "_blank" class="btn btn-info experience-button mt-auto">Ir a la Playstore  <FontAwesomeIcon icon={faPlayCircle} /></a>                                       
                    </div>
                </div>

                <hr/>

                <div className = "row experience-article">

                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12">
                        <h3>Concursos</h3>
                        <p className = "col-text">Durante mi carrera participé en 4 hackathones de diferentes organizaciones:</p>
                        <ul>
                            <li>Hackathon de la NASA "Space Apps": Octubre 2020</li>
                            <li>Hackathon de Syscom: Noviembre 2019</li>
                            <li>Hackathon Heineken "Hack2Beer": Octubre 2019</li>
                            <li>Concurso local de Robótica y Software del Instituto Tecnológico de Chihuahua II: Junio 2019</li>
                        </ul>
                        <p className = "col-text">Obtuve primer lugar en el concurso local de Robótica del Tecnológico gracias a un dron 
                        anti-incendios que era controlado por bluetooth mediante el celular. También obtuve un segundo lugar en el Hackathon de la Heineken 
                        con un Software y una propuesta mediante una Smartband para el monitoreo de errores de las líneas de producción.</p>
                    </div>
                    <div className = "col col-lg-6 col-md-12 col-sm-12  col-12 d-flex justify-content-center lower-col">
                        <img className = "landscape-img" src = {C1}/>
                    </div>
                </div>

                <hr/>

                <div className = "row experience-article">
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12 col-img-container d-flex justify-content-center">
                        <img className = "portrait-img" src = {Contec}/>
                    </div>
                    <div className = "col col-lg-6 col-md-12 col-sm-12 col-12 col-content d-flex flex-column lower-row">
                        <h3>Inspector de calidad</h3>
                        <p className = "col-text">Antes de convertirme en desarrollador, trabajé varios meses como inspector de calidad en la empresa maquiladora 
                        Conductores Tecnológicos de Juárez, mejor conocida como "Contec". Ahí aprendí aspectos importantes sobre las 
                        certificaciones ISO tales como:</p>
                        <ul>
                            <li>Medición y tolerancia de planos.</li>
                            <li>Normas de operatividad en líneas de producción.</li>
                            <li>Normas de seguridad.</li>
                            <li>Certificación y calificación de personal.</li>
                        </ul>
                        <p>Por lo tanto, tengo conocimientos tanto en el área del Software como en el sector industrial.</p>
                    </div>
                </div>
        </div>
    )
}

export default Experience
