import React from 'react'

import Navbar from '../generalcomponents/Navbar'
import Footer from '../generalcomponents/Footer'

import SqlSVG from '../images/sql.svg'
import MySqlSVG from '../images/mysql.svg'
import PostgreSVG from '../images/postgresql.svg'
import DerbySVG from '../images/derby.svg'
import SQLiteSVG from '../images/sqlite.svg'

import MongoSVG from '../images/mongodb.svg'

const basesarqui = () => {
    return (
        <div>
            <Navbar />
            <div className="bases-arqui">
                <div className="container">
                    <h2>Bases de Datos y Arquitectura</h2>
                    <p>
                        Parte de ser full-stack implica tener conocimiento acerca de la gestión de información
                        mediante herramientas informáticás y cómo estructurar un sistema con el cual podamos acceder
                        a esa información según protocolos (Arquitecturas) internacionales. Te invito a que veas qué tipo de Bases de Datos
                        y arquitecturas manejo.
                </p>
                    <h3>Bases de datos</h3>
                    <p>Mi fuerte en bases de datos son las de tipo SQL (Relacional), de hecho 2 de las Apps que tengo en la Playstore
                    tienen implementada una base de datos hecha en SQLite; también manejo las de tipo NoSQL
                    (No relacional). He implementado ambos tipos dentro de proyectos Web, Móvil y Desktop; Sé reconocer
                    las ocasiones en donde usar una podría ser más conveniente que usar la otra. en las
                    diapositivas de abajo hay más información acerca de cómo trabajo con estas 2 bases de datos, te invito a
                    que le eches un vistazo.
                </p>
                </div>
                <div className="container-fluid">
                    <div id="carouselExampleControls" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner carousel-bd">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className=" row">
                                        <div className="d-flex justify-content-center col col-3">
                                            <img className="carousel-item-secondaryimgs" src={MySqlSVG} />
                                        </div>
                                        <div className="d-flex justify-content-center col col-3">
                                            <img className="carousel-item-secondaryimgs white-background" src={PostgreSVG} />
                                        </div>
                                        <div className="d-flex justify-content-center col col-3">
                                            <img className="carousel-item-secondaryimgs white-background" src={SQLiteSVG} />
                                        </div>
                                        <div className="d-flex justify-content-center col col-3">
                                            <img className="carousel-item-secondaryimgs white-background" src={DerbySVG} />
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <h4>Bases de datos SQL</h4>
                                    <p>
                                        Sé hacer bastantes operaciones dentro de SQL para el manejo estructurado y ordenado de la
                                        información. Puedo modelar datos y generar una base de datos SQL según los requerimientos del modelado de
                                        la información lo necesite, además puedo gestionar esa misma información en bases de datos ya existentes.
                                        Sé implementar en el área del Desktop, Móvil y Web este tipo de base de datos, de manera embebida o distribuida.
                                        MySQL, PostgreSQL, SQLite y Apache Derby son los sistemas gestores de base de datos SQL que domino.
                                </p>
                                </div>

                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <img className="carousel-item-secondaryimg white-background" src={MongoSVG} alt="Android" />
                                </div>
                                <div className="container">
                                    <h4>Bases de datos NoSQL</h4>
                                    <p>
                                        Sé hacer las operaciones escenciales para crear una base de datos además de ejecutar todas
                                        las operaciones necesarias para administrar la información dentro de una base de datos NoSQL.
                                        Este tipo de base de datos las he implementado en proyectos web, son más fáciles de trabajar que las
                                        relacionales. Con el sistema de base de datos MongoDB puedo trabajar con base de datos de este tipo.
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
                    <h2>Arquitecturas y modelos</h2>
                    <p>
                        Al momento de desarrollar un Software tanto para el lado del cliente como del servidor
                        es recomendable seguir una serie de "reglas" o "protocolos" para la construcción del mismo.
                        Domino arquitecturas y patrones de diseño muy populares y utilizados en la industria global. Revisa en las
                        diapositivas de abajo qué arquitecturas y modelos manejo en ambas áreas del Software.
                </p>
                </div>

                <div className="container-fluid">
                    <div id="carouselExampleControls2" className="carousel slide carousel-container" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner carousel-arqui">
                            <div className="carousel-item active">

                                <div className="container">
                                    <h3>MVC y MVVC</h3>
                                    <h4>Patrones de arquitectura de Software</h4>
                                    <p>
                                        Puedo adaptarme a sistemas que ya tengan implementado este tipo de patrón de arquitectura,
                                        un buen porcentaje de proyectos ya los tienen implementados o se busca que se desarrollen de esa manera.
                                        Si es que el sistema con el que fuese a trabajar no tiene algún tipo de orden o arquitectura, puedo
                                        reestructurarlo para que el código sea legible, ordenado y fácil de mantener.
                                </p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="container">
                                    <h3>REST</h3>
                                    <h4>Arquitectura para APIs</h4>
                                    <p>
                                        Sé utilizar la arquitectura REST con varias tecnologías de Back-End tales como NodeJS, Go o Java.
                                        Puedo adaptarme o desarrollar dentro área de las APIs o Middlewares que tengan este tipo de arquitectura para manipular
                                        información y realizar operaciones a una base de datos local o remota, según sea el caso.
                                </p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Siguiente</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default basesarqui
