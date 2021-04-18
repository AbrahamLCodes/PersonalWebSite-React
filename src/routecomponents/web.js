import React from 'react'

import Navbar from '../generalcomponents/Navbar'
import Footer from '../generalcomponents/Footer'

import ReactSVG from '../images/react.svg'
import HtmlSVG from '../images/html.svg'
import BootstrapSVG from '../images/bootstrap.svg'
import CssSVG from '../images/css.svg'

import NodejsSVG from '../images/nodejs.svg'
import GoSVG from '../images/go.svg'

const web = () => {
    return (
        <div>
            <Navbar />
            <div className="desarrolloweb">
                <div className="container">
                    <h2>Desarrollo web</h2>
                    <p>
                        El desarrollo web es posiblemente el futuro del Software en general. La computación en la nube
                        ha tomado una gran importancia en el mercado digital mundial, su popularidad y preferencia está muy por encima
                        de los sistemas locales o aplicaciones móviles. Soy un desarrollador full-stack Jr web, es decir, soy capaz de levantar
                        un sistema web distribuido con las tecnologías que domino. Te invito a que veas cómo trabajo en el área Web.
                    </p>
                    <h3>Front-End</h3>
                    <p>
                        Front-End es todo aquello que el usuario puede ver. La interfaz gráfica, la experiencia de usuario,
                        botones, colores, transiciones, estilos, tipo de letra, formularios, tablas, listas, etc. En las diapositivas de abajo
                        puedes ver qué tecnologías uso para crear soluciones web en el área del Front-End.
                    </p>
                </div>
                <div className="container-fluid">
                    <div id="carouselExampleControls" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner carousel-front">
                            <div className="carousel-item active">
                                <div className=" row">
                                    <div className="d-flex justify-content-end col col-6">
                                        <img className="carousel-item-mainimgs" src={HtmlSVG} />
                                    </div>
                                    <div className="d-flex justify-content-start col col-6">
                                        <img className="carousel-item-mainimgs" src={ReactSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>Framework de programación</h4>
                                    <p>
                                        ReactJs es el Framework de Javascript que utilizo para desarrollar y construir interfaces gráficas para la web. Con este Framework
                                        puedo manipular el contenido HTML de una página de manera programática y segmentada para un mantenimiento
                                        más fácil. También puedo adaptarme a otros frameworks como Angular o Vue si es que el proyecto lo requiriera.
                                        Este sitio web está hecho con ReactJS.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className=" row ">
                                    <div className="d-flex justify-content-end col col-6">
                                        <img className="carousel-item-mainimgs" src={CssSVG} />
                                    </div>
                                    <div className="d-flex justify-content-start col col-6">
                                        <img className="carousel-item-mainimgs" src={BootstrapSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>Framework de estilos</h4>
                                    <p>
                                        Con Bootstrap puedo diseñar páginas web bonitas y responsivas, es decir, adaptables a pantallas de computadoras, laptops, tablets o teléfonos.
                                        Además, también sé usar propiedades CSS para satisfacer necesidades que Bootstrap no podría o con las cuales habría un conflicto. De igual manera, puedo
                                        adaptarme a otros Frameworks de estilos css como Materialize o Foundation. Este sitio web está hecho con Bootstrap, puedes verificar que de hecho, funciona para 
                                        pantallas de computadora, tablet y celular.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Siguiente</span>
                        </a>
                    </div>
                </div>
                <div className="container">
                    <h3>Back-End</h3>
                    <p>
                        Back-End es todo aquello que el usuario no ve, todo lo que pasa detrás de la interfaz de usuario tal como:
                        Operaciones a la base de datos, el manejo de información mediante estructuras de datos, consumo de servicios web, la
                        arquitectura de la API con sus funciones, etc. En la sección de abajo puedes ver qué tecnologías domino para el desarrollo
                        de esta área.
                    </p>
                </div>
                <div className="container-fluid">
                    <div id="carouselExampleControls" className="carousel slide carousel-container" data-interval="false">
                        <div className="carousel-inner carousel-back">
                            <div className="carousel-item active">
                                <div className=" row">
                                    <div className="d-flex justify-content-end col col-6">
                                        <img className="carousel-item-mainimgs" src={NodejsSVG} />
                                    </div>
                                    <div className="d-flex justify-content-start col col-6">
                                        <img className="carousel-item-mainimgs white-background" src={GoSVG} />
                                    </div>
                                </div>
                                <div className="container">
                                    <h4>Lenguajes para Back-End</h4>
                                    <p>
                                        Con NodeJs o Golang puedo desarrollar módulos lógicos para operaciones del lado del servidor tales como: 
                                        Respuestas, Peticiones, Ruteo, Operaciones a la base de datos, APIs, Middlewares, etc. Con NodeJS domino el framework express 
                                        mientras que con GoLang domino el framework Echo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default web
